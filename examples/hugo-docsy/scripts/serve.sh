#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
hugo server --bind 127.0.0.1 --port 1315 --disableFastRender

