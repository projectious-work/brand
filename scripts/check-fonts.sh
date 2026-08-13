#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

if rg -n 'fonts\.(googleapis|gstatic)\.com' \
  README.md CONTRIBUTING.md scripts src input --glob '!src/themes/docsy/**'; then
  echo "Remote Google Fonts dependency found." >&2
  exit 1
fi

sha256sum --check <<'EOF'
153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79  src/static/fonts/brand/plus-jakarta-sans-latin-variable.woff2
7a19a7027e125257d310c6dbd78ae3a30b5ea1e3794d60b12bb28227a003bfda  src/static/fonts/brand/source-sans-3-latin-variable.woff2
08949f728dc52d528e69b1667d15c89a5686a4ee9a296ff90983985f99c380f7  src/static/fonts/brand/ibm-plex-mono-latin-400.woff2
01d285447409c8a588692162439a038b8cbd7871309ee20267b0d2d91c6e8e22  src/static/fonts/brand/ibm-plex-mono-latin-500.woff2
EOF

for licence in src/static/fonts/brand/licenses/*-OFL.txt; do
  test -s "${licence}"
done

echo "  four pinned WOFF2 files and three OFL licences verified"
