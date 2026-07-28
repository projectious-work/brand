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

# Demote the previous latest to an archived entry and put this release on top.
block = re.search(r'(  versions:\n)((?:    - .*\n|      .*\n)*)', s)
if not block:
    raise SystemExit("could not find params.versions in src/hugo.yaml")
existing = block.group(2)
existing = existing.replace("      kind: latest\n", "")
existing = re.sub(rf'^    - version: "{re.escape(version)}"\n(?:      .*\n)*', '', existing, flags=re.M)

new_entries = (
    f'    - version: "{version}"\n'
    f'      kind: latest\n'
    f'      url: "{base}"\n'
    f'    - version: "{version} (archived)"\n'
    f'      url: "{base}{version}/"\n'
)
s = s[:block.start(2)] + new_entries + existing + s[block.end(2):]
p.write_text(s)
print(f"   params.version = {version}; version menu updated")
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
step "Publishing the archived snapshot at /${VERSION}/"
run "DOCS_VERSION='${VERSION}' '${ROOT_DIR}/scripts/deploy-docs.sh'"

step "Publishing the site root as latest"
run "DOCS_VERSION=main '${ROOT_DIR}/scripts/deploy-docs.sh'"

step "Done"
echo "   latest:   ${BASE_URL}"
echo "   archived: ${BASE_URL}${VERSION}/"
echo
echo "   Create the GitHub release notes with:"
echo "     gh release create ${VERSION} --title '${VERSION}' --notes-from-tag"
