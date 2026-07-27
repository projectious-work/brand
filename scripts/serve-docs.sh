#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="${ROOT_DIR}/src"
DOCS_BASE_URL="${DOCS_BASE_URL:-http://localhost:1313/}"

command -v hugo >/dev/null 2>&1 || {
  echo "Hugo extended is required: https://gohugo.io/installation/" >&2
  exit 1
}
command -v npm >/dev/null 2>&1 || {
  echo "Node.js and npm are required for Docsy assets." >&2
  exit 1
}

if [[ ! -f "${SRC_DIR}/themes/docsy/theme.toml" ]]; then
  git -C "${ROOT_DIR}" submodule update --init --recursive src/themes/docsy
fi
if [[ ! -d "${SRC_DIR}/node_modules" ]]; then
  npm --prefix "${SRC_DIR}" install --no-package-lock
fi

cd "${SRC_DIR}"
hugo server --buildDrafts --disableFastRender --baseURL "${DOCS_BASE_URL}" "$@"
