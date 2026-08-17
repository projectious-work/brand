#!/usr/bin/env bash
set -euo pipefail

# Build locally and push the generated site to GitHub Pages.
# No GitHub Actions workflow is used; GitHub Pages must be configured to serve
# the repository's gh-pages branch from its root directory.
#
#   ./scripts/deploy-docs.sh                          # publish the root only
#   DOCS_VERSIONS="v1.2.3 main" ./scripts/deploy-docs.sh
#   DOCS_VERSION=v1.2.3 ./scripts/deploy-docs.sh      # single version (legacy)
#
# DOCS_VERSIONS takes a space-separated list and publishes all of them in ONE
# commit and ONE push. That is not a convenience: two pushes to gh-pages seconds
# apart is a race GitHub Pages does not reliably win. A release pushed the
# archived /vX.Y.Z/ snapshot and then the site root eleven seconds later; Pages
# reported both deployments successful, built the first, and served it — the
# root kept serving the previous release until an unrelated commit forced a
# rebuild. One push, one build, one thing to go wrong.
#
# Order within the list matters. "main" clears the root and must therefore come
# after any archived snapshot in the same run; the wipe preserves vX.Y.Z
# directories, so a snapshot published earlier in the list survives it.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PAGES_BRANCH="${PAGES_BRANCH:-gh-pages}"
PUBLIC_DIR="${ROOT_DIR}/public"
SITE_BASE_URL="${DOCS_BASE_URL:-https://projectious-work.github.io/brand/}"

# DOCS_VERSION stays supported so anything calling this directly keeps working.
DOCS_VERSIONS="${DOCS_VERSIONS:-${DOCS_VERSION:-main}}"

read -r -a VERSIONS <<< "${DOCS_VERSIONS}"
[[ ${#VERSIONS[@]} -gt 0 ]] || { echo "DOCS_VERSIONS is empty." >&2; exit 1; }

for v in "${VERSIONS[@]}"; do
  [[ "${v}" =~ ^[A-Za-z0-9._-]+$ ]] \
    || { echo "version '${v}' may contain only letters, numbers, dots, underscores, or hyphens." >&2; exit 1; }
done

# --- one worktree, staged before anything is built ----------------------------
# Each version is built and staged in turn rather than all built up front:
# build-docs.sh passes --cleanDestinationDir, so building the root into public/
# deletes public/vX.Y.Z/ from an earlier archive build in the same run. Staging
# each build into the worktree immediately makes that harmless.
WORKTREE_DIR="$(mktemp -d)"
cleanup() {
  git -C "${ROOT_DIR}" worktree remove --force "${WORKTREE_DIR}" >/dev/null 2>&1 || true
  rmdir "${WORKTREE_DIR}" >/dev/null 2>&1 || true
}
trap cleanup EXIT

if git show-ref --verify --quiet "refs/heads/${PAGES_BRANCH}"; then
  git -C "${ROOT_DIR}" worktree add "${WORKTREE_DIR}" "${PAGES_BRANCH}"
elif git ls-remote --exit-code origin "refs/heads/${PAGES_BRANCH}" >/dev/null 2>&1; then
  git -C "${ROOT_DIR}" fetch origin "${PAGES_BRANCH}:${PAGES_BRANCH}"
  git -C "${ROOT_DIR}" worktree add "${WORKTREE_DIR}" "${PAGES_BRANCH}"
else
  git -C "${ROOT_DIR}" worktree add --detach "${WORKTREE_DIR}"
  git -C "${WORKTREE_DIR}" checkout --orphan "${PAGES_BRANCH}"
fi

for v in "${VERSIONS[@]}"; do
  if [[ "${v}" == "main" ]]; then
    echo "Building main -> ${PUBLIC_DIR} (baseURL ${SITE_BASE_URL})"
    DOCS_BASE_URL="${SITE_BASE_URL}" "${ROOT_DIR}/scripts/build-docs.sh" --destination "${PUBLIC_DIR}"
    # Clear the root, but KEEP the archived version directories. They are
    # separate published sites living alongside the latest build; a blanket wipe
    # here would delete every previous release's documentation — including a
    # snapshot staged earlier in this same run.
    find "${WORKTREE_DIR}" -mindepth 1 -maxdepth 1 \
      ! -name .git \
      ! -regex '.*/v[0-9]+\.[0-9]+\.[0-9]+\(-[0-9A-Za-z.-]+\)?$' \
      -exec rm -rf {} +
    cp -R "${PUBLIC_DIR}/." "${WORKTREE_DIR}/"
  else
    echo "Building ${v} -> ${PUBLIC_DIR}/${v} (baseURL ${SITE_BASE_URL}${v}/)"
    DOCS_BASE_URL="${SITE_BASE_URL}${v}/" "${ROOT_DIR}/scripts/build-docs.sh" \
      --destination "${PUBLIC_DIR}/${v}"
    version_dir="${WORKTREE_DIR}/${v}"
    mkdir -p "${version_dir}"
    find "${version_dir}" -mindepth 1 -maxdepth 1 -exec rm -rf {} +
    cp -R "${PUBLIC_DIR}/${v}/." "${version_dir}/"
  fi
  echo "Staged ${v}"
done

# Archived releases retain their original content and renderer, but every
# release selector points at the same supported release set. This post-process
# updates only the selector markup in the staged static snapshots.
node "${ROOT_DIR}/scripts/sync-release-menus.mjs" "${WORKTREE_DIR}"

# Tell GitHub Pages to publish the prebuilt Hugo output without Jekyll.
: > "${WORKTREE_DIR}/.nojekyll"

git -C "${WORKTREE_DIR}" add -A
if git -C "${WORKTREE_DIR}" diff --cached --quiet; then
  echo "No documentation changes to deploy."
else
  git -C "${WORKTREE_DIR}" commit -m "docs: deploy ${DOCS_VERSIONS} $(date -u +%Y-%m-%dT%H:%M:%SZ)"
  git -C "${WORKTREE_DIR}" push origin "${PAGES_BRANCH}"
  echo "Documentation deployed to ${PAGES_BRANCH} (${DOCS_VERSIONS}) in one push."
fi
