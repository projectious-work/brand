#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
exec uv run --script "${ROOT_DIR}/scripts/check_tokens.py"
