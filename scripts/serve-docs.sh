#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="${ROOT_DIR}/src"
DOCS_BASE_URL="${DOCS_BASE_URL:-http://localhost:1313/}"
SERVE_PORT="${SERVE_PORT:-1313}"
# Bind on all interfaces by default: this repository is normally developed in a
# container, and Hugo's own default of 127.0.0.1 is reachable only from inside
# it. Override with SERVE_BIND=127.0.0.1 to restrict it.
SERVE_BIND="${SERVE_BIND:-0.0.0.0}"

# --built serves the complete static output instead of Hugo's authoring server.
if [[ "${1:-}" == "--built" ]]; then
  shift
  command -v python3 >/dev/null 2>&1 || {
    echo "python3 is required to serve the built tree." >&2
    exit 1
  }
  DOCS_BASE_URL="http://localhost:${SERVE_PORT}/" "${ROOT_DIR}/scripts/build-docs.sh"
  echo
  echo "Serving the built site at http://localhost:${SERVE_PORT}/"
  echo
  echo "This is a static preview — re-run to pick up changes. Ctrl-C to stop."
  exec python3 -m http.server "${SERVE_PORT}" --bind "${SERVE_BIND}" \
    --directory "${ROOT_DIR}/public"
fi

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
hugo server --buildDrafts --disableFastRender --baseURL "${DOCS_BASE_URL}" \
  --bind "${SERVE_BIND}" --port "${SERVE_PORT}" "$@"
