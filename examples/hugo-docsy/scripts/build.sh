#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
export PATH="$(cd ../../src/node_modules/.bin && pwd):${PATH}"
hugo --gc --minify --cleanDestinationDir "$@"
