#!/usr/bin/env bash
set -euo pipefail

# Rebuild the site and re-capture the README element screenshots.
# Requires Playwright's chromium: npx playwright install chromium

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

"${ROOT_DIR}/scripts/build-docs.sh" >/dev/null
echo "Site built. Capturing README images…"
cd "${ROOT_DIR}"
node "${ROOT_DIR}/scripts/capture-readme-images.mjs"
