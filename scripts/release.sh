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
#   3. Confirms version metadata and changelog were merged through a release PR.
#   4. Tags and pushes the verified main commit and creates the GitHub Release.
#   5. Deploys the archived /vX.Y.Z/ snapshot, then the site root as latest.

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

# --- 3. confirm prepared release metadata -----------------------------------
step "Checking merged release metadata"
grep -q "^  version: \"${VERSION}\"$" src/hugo.yaml \
  || die "src/hugo.yaml is not prepared for ${VERSION}; merge release/${VERSION} first"
grep -q "^## \[${VERSION}\]" CHANGELOG.md \
  || die "CHANGELOG.md has no ${VERSION} release; merge release/${VERSION} first"

# --- 4. tag, push, and create release ---------------------------------------
step "Tagging and publishing the GitHub Release"
run "git tag -a '${VERSION}' -m 'Release ${VERSION}'"
run "git push origin '${VERSION}'"
run "gh release create '${VERSION}' --title '${VERSION}' --notes-from-tag"

# --- 5. publish ---------------------------------------------------------------
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
