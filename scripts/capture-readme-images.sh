#!/usr/bin/env bash
set -euo pipefail

# Rebuild the site and re-capture the README element screenshots.
# Requires Playwright's Chromium browser:
# uv run --with playwright playwright install chromium

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

"${ROOT_DIR}/scripts/build-docs.sh" >/dev/null
echo "Site built. Capturing README images…"
cd "${ROOT_DIR}"
uv run --script "${ROOT_DIR}/scripts/capture_readme_images.py"
