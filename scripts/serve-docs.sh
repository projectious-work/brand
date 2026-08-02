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

# --built serves the complete published tree — the documentation plus the theme
# examples at /examples/<theme>/ — instead of running Hugo's authoring server.
#
# The two modes answer different questions. The default is for writing: live
# reload, drafts, one Hugo site. `--built` is for checking what actually ships,
# because the examples are separate Hugo sites that only exist once
# build-docs.sh has assembled them into public/.
if [[ "${1:-}" == "--built" ]]; then
  shift
  command -v python3 >/dev/null 2>&1 || {
    echo "python3 is required to serve the built tree." >&2
    exit 1
  }
  DOCS_BASE_URL="http://localhost:${SERVE_PORT}/" "${ROOT_DIR}/scripts/build-docs.sh"
  echo
  echo "Serving the built site at http://localhost:${SERVE_PORT}/"
  echo "  documentation   http://localhost:${SERVE_PORT}/"
  echo "  Docsy example   http://localhost:${SERVE_PORT}/examples/hugo-docsy/"
  echo "  Hextra example  http://localhost:${SERVE_PORT}/examples/hugo-hextra/"
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

# The theme examples are separate Hugo sites, so Hugo's authoring server does
# not know about them and every /examples/<theme>/ link in the documentation
# would 404. Build them into the site's static tree first, with the baseURL they
# will be served under, so the links in the Hugo guide resolve while authoring.
#
# This is generated output living under src/; it is gitignored, and
# build-docs.sh removes it before a production build so a stale dev copy can
# never reach public/. Re-run this script to refresh it — the examples are not
# live-reloaded.
EXAMPLES_STATIC="${SRC_DIR}/static/examples"
if [[ "${SKIP_EXAMPLES:-0}" != "1" ]]; then
  rm -rf "${EXAMPLES_STATIC}"
  for example in hugo-docsy hugo-hextra; do
    echo "Building ${example} example for the preview…"
    "${ROOT_DIR}/examples/${example}/scripts/build.sh" \
      --baseURL "${DOCS_BASE_URL}examples/${example}/" \
      --destination "${EXAMPLES_STATIC}/${example}" >/dev/null
  done
  echo "  Docsy example   ${DOCS_BASE_URL}examples/hugo-docsy/"
  echo "  Hextra example  ${DOCS_BASE_URL}examples/hugo-hextra/"
  echo
fi

cd "${SRC_DIR}"
hugo server --buildDrafts --disableFastRender --baseURL "${DOCS_BASE_URL}" \
  --bind "${SERVE_BIND}" --port "${SERVE_PORT}" "$@"
