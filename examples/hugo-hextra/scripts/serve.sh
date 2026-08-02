#!/usr/bin/env sh
set -eu
cd "$(dirname "$0")/.."
exec hugo server --bind 127.0.0.1 --port 1314 --buildDrafts --disableFastRender "$@"
