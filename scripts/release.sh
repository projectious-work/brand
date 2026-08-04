#!/usr/bin/env bash
set -euo pipefail

# Cut a release: validate, stamp the version, tag, and publish the docs.
#
#   ./scripts/release.sh v1.0.0            # full release
#   ./scripts/release.sh v1.0.0 --dry-run  # show what would happen
#
# There is no CI. This script is the release process: it runs the same checks a
# pipeline would, then builds and pushes the site from this machine.
#
# What it does, in order:
#   1. Refuses to run on a dirty tree, a non-default branch, or an existing tag.
#   2. Runs the full verification suite (build, both contrast audits, portfolio
#      validator, link check).
#   3. Stamps the version into src/hugo.yaml and adds it to the version menu.
#   4. Moves the CHANGELOG "Unreleased" section into a dated release section.
#   5. Commits, tags, and pushes.
#   6. Deploys the archived /vX.Y.Z/ snapshot, then the site root as latest.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

VERSION="${1:-}"
DRY_RUN="false"
[[ "${2:-}" == "--dry-run" ]] && DRY_RUN="true"

BASE_URL="https://projectious-work.github.io/brand/"
MAIN_BRANCH="main"

die() { echo "error: $*" >&2; exit 1; }
step() { printf '\n\033[1m==> %s\033[0m\n' "$*"; }
run() {
  if [[ "${DRY_RUN}" == "true" ]]; then echo "   [dry-run] $*"; else eval "$@"; fi
}

# --- 1. preconditions ---------------------------------------------------------
step "Checking preconditions"

[[ -n "${VERSION}" ]] || die "usage: $0 vX.Y.Z [--dry-run]"
[[ "${VERSION}" =~ ^v[0-9]+\.[0-9]+\.[0-9]+(-[0-9A-Za-z.-]+)?$ ]] \
  || die "version must be semver with a leading v, e.g. v1.0.0"

BRANCH="$(git rev-parse --abbrev-ref HEAD)"
[[ "${BRANCH}" == "${MAIN_BRANCH}" ]] \
  || die "releases are cut from ${MAIN_BRANCH}; you are on ${BRANCH}"

if [[ -n "$(git status --porcelain)" ]]; then
  die "working tree is dirty; commit or stash first"
fi

if git rev-parse "${VERSION}" >/dev/null 2>&1; then
  die "tag ${VERSION} already exists"
fi

git fetch --quiet origin "${MAIN_BRANCH}"
if [[ -n "$(git rev-list "HEAD..origin/${MAIN_BRANCH}")" ]]; then
  die "origin/${MAIN_BRANCH} has commits you do not have; pull first"
fi

echo "   version:  ${VERSION}"
echo "   branch:   ${BRANCH}"
echo "   dry-run:  ${DRY_RUN}"

# --- 2. verification ----------------------------------------------------------
step "Running verification suite"
"${ROOT_DIR}/scripts/verify.sh"

# --- 3. stamp the version -----------------------------------------------------
step "Stamping ${VERSION} into src/hugo.yaml"
if [[ "${DRY_RUN}" == "true" ]]; then
  echo "   [dry-run] would set params.version and prepend to params.versions"
else
  python3 - "$VERSION" "$BASE_URL" <<'PY'
import re, sys, pathlib
version, base = sys.argv[1], sys.argv[2]
p = pathlib.Path("src/hugo.yaml")
s = p.read_text()

s = re.sub(r'^(  version: ).*$', rf'\1"{version}"', s, count=1, flags=re.M)

block = re.search(r'(  versions:\n)((?:    - .*\n|      .*\n)*)', s)
if not block:
    raise SystemExit("could not find params.versions in src/hugo.yaml")

# Parse the list into (version, url) pairs so the rewrite is structural rather
# than textual.
entries = []
for name, body in re.findall(r'    - version: "([^"]+)"\n((?:      .*\n)*)', block.group(2)):
    url = re.search(r'      url: "([^"]*)"', body)
    entries.append((name, url.group(1) if url else ""))

# One entry per release. The previous latest is demoted, which means its URL has
# to move off the site root — the root now serves THIS release — and onto its
# own archived path. Re-running the same release is idempotent.
kept = []
for name, _ in entries:
    base_name = name.replace(" (archived)", "")
    if base_name == version:
        continue
    if any(k[0] == base_name for k in kept):
        continue
    kept.append((base_name, f"{base}{base_name}/"))

new_list = f'    - version: "{version}"\n      kind: latest\n      url: "{base}"\n'
for name, url in kept:
    new_list += f'    - version: "{name}"\n      url: "{url}"\n'

s = s[:block.start(2)] + new_list + s[block.end(2):]
p.write_text(s)
print(f"   params.version = {version}; {len(kept) + 1} release(s) in the menu")
PY
fi

# --- 4. changelog -------------------------------------------------------------
step "Updating CHANGELOG.md"
if [[ "${DRY_RUN}" == "true" ]]; then
  echo "   [dry-run] would move Unreleased -> ${VERSION} ($(date -u +%Y-%m-%d))"
else
  python3 - "$VERSION" <<'PY'
import sys, pathlib, datetime, re
version = sys.argv[1]
today = datetime.datetime.now(datetime.timezone.utc).strftime("%Y-%m-%d")
p = pathlib.Path("CHANGELOG.md")
s = p.read_text()
if f"## [{version}]" in s:
    print(f"   {version} already present; leaving CHANGELOG alone")
    raise SystemExit(0)
marker = "## [Unreleased]"
if marker not in s:
    raise SystemExit("error: CHANGELOG.md has no '## [Unreleased]' section")
s = s.replace(marker, f"{marker}\n\nNothing yet.\n\n## [{version}] — {today}", 1)
p.write_text(s)
print(f"   released {version} ({today})")
PY
fi

# --- 5. commit, tag, push -----------------------------------------------------
step "Committing and tagging"
run "git add src/hugo.yaml CHANGELOG.md"
run "git commit -m 'release: ${VERSION}'"
run "git tag -a '${VERSION}' -m 'Release ${VERSION}'"
run "git push origin '${MAIN_BRANCH}'"
run "git push origin '${VERSION}'"

# --- 6. publish ---------------------------------------------------------------
# One invocation, one commit, one push. Publishing the archive and the root as
# two pushes eleven seconds apart is a race GitHub Pages does not reliably win:
# in v2.1.0 it reported both deployments successful, built the first, and served
# it — the site root kept serving the previous release. Order matters here, and
# deploy-docs.sh relies on it: "main" clears the root, and its wipe preserves
# vX.Y.Z directories, so the snapshot has to be staged before it.
step "Publishing /${VERSION}/ and the site root in a single push"
run "DOCS_VERSIONS='${VERSION} main' '${ROOT_DIR}/scripts/deploy-docs.sh'"

step "Done"
echo "   latest:   ${BASE_URL}"
echo "   archived: ${BASE_URL}${VERSION}/"
echo
echo "   Create the GitHub release notes with:"
echo "     gh release create ${VERSION} --title '${VERSION}' --notes-from-tag"
