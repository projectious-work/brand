#!/usr/bin/env bash
set -euo pipefail

# The Hugo project lives in src/; build output stays at the repository root in
# public/ so the deploy script and the screenshot capture do not need to know
# about the source layout.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
SRC_DIR="${ROOT_DIR}/src"
DOCS_BASE_URL="${DOCS_BASE_URL:-https://projectious-work.github.io/brand/}"
BUILD_DIR="${ROOT_DIR}/public"

# Consume any caller-supplied --destination into BUILD_DIR and drop it from the
# forwarded arguments, so the flag is passed to Hugo exactly once below.
BUILD_ARGS=()
while (($# > 0)); do
  case "$1" in
    --destination)
      if (($# < 2)); then
        echo "--destination requires a value." >&2
        exit 1
      fi
      BUILD_DIR="$2"
      shift 2
      ;;
    --destination=*)
      BUILD_DIR="${1#--destination=}"
      shift
      ;;
    *)
      BUILD_ARGS+=("$1")
      shift
      ;;
  esac
done

if [[ "${BUILD_DIR}" != /* ]]; then
  BUILD_DIR="${ROOT_DIR}/${BUILD_DIR}"
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

# serve-docs.sh stages the examples under src/static/examples/ so the authoring
# server can resolve /examples/<theme>/ links. That copy is built for a
# localhost baseURL and must never be published; the real ones are built below.
rm -rf "${SRC_DIR}/static/examples"

cd "${SRC_DIR}"
# --destination is always passed explicitly so output lands at the repo root
# rather than src/public, regardless of any caller-supplied arguments.
hugo --gc --minify --cleanDestinationDir --baseURL "${DOCS_BASE_URL}" \
  ${BUILD_ARGS[@]+"${BUILD_ARGS[@]}"} --destination "${BUILD_DIR}"

# The theme examples are separate Hugo sites, but they are published as part of
# this one — the Hugo guidance links to them at /examples/<theme>/. Build them
# into the same tree here rather than at deploy time, so what you preview from
# public/ locally is exactly what gets published, paths included.
#
# Each example is built with its own baseURL. They must match the directory they
# are nested into, or every stylesheet and script resolves one level too high
# and the page renders unstyled.
for example in hugo-docsy hugo-hextra; do
  example_dir="${ROOT_DIR}/examples/${example}"
  [[ -x "${example_dir}/scripts/build.sh" ]] || {
    echo "Missing example build script: ${example_dir}/scripts/build.sh" >&2
    exit 1
  }
  "${example_dir}/scripts/build.sh" \
    --baseURL "${DOCS_BASE_URL}examples/${example}/" \
    --destination "${BUILD_DIR}/examples/${example}"
done

# GitHub Pages must serve Hugo's prebuilt output without Jekyll processing.
: > "${BUILD_DIR}/.nojekyll"
