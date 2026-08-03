#!/usr/bin/env bash
set -euo pipefail

# Regenerate the derived files in brand/examples/lib/.
#
# Only one file is derived: ios-frame.js, precompiled from ios-frame.jsx so the
# mobile example needs no in-browser JSX transform (and therefore no 3 MB Babel
# download at page load). Run this after editing the .jsx.
#
#   ./scripts/build-examples.sh
#
# Requires network access on first run: @babel/standalone is fetched to a temp
# directory and is not vendored, because it is a build-time tool here, not a
# runtime dependency.

BABEL_VERSION="7.29.0"
BABEL_URL="https://unpkg.com/@babel/standalone@${BABEL_VERSION}/babel.min.js"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
LIB_DIR="${ROOT_DIR}/brand/examples/lib"

tmp="$(mktemp -d)"
trap 'rm -rf "${tmp}"' EXIT

echo "Fetching @babel/standalone ${BABEL_VERSION}…"
curl -fsSL -o "${tmp}/babel.min.js" "${BABEL_URL}"

cat > "${tmp}/transform.js" <<'JS'
const fs = require('fs');
// @babel/standalone is a browser UMD bundle; give it the globals it expects.
global.window = global;
global.self = global;
global.navigator = { userAgent: 'node' };
const Babel = require(process.argv[2]) || global.Babel;

const [, , , src, dest] = process.argv;
const banner = [
  '// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)',
  `// Precompiled from ${src.split('/').pop()} with @babel/standalone`,
  '// (presets: react, typescript) so the example needs no in-browser JSX',
  '// transform. Regenerate with scripts/build-examples.sh — do not hand-edit.',
  '',
].join('\n');

const code = Babel.transform(fs.readFileSync(src, 'utf8'), {
  filename: src,
  presets: ['react', 'typescript'],
}).code;

fs.writeFileSync(dest, banner + code + '\n');
console.log(`  ${dest.split('/').pop()} — ${code.length} bytes`);
JS

echo "Compiling ios-frame.jsx…"
node "${tmp}/transform.js" "${tmp}/babel.min.js" \
  "${LIB_DIR}/ios-frame.jsx" "${LIB_DIR}/ios-frame.js"

echo "Done."
