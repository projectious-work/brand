#!/usr/bin/env bash
set -euo pipefail

# The full verification suite. There is no CI, so this is what "the checks
# passed" means for this repository. Run it before opening a PR and before
# cutting a release (scripts/release.sh runs it automatically).
#
#   ./scripts/verify.sh

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

fail=0
check() {
  local name="$1"; shift
  printf '  %-42s' "${name}"
  if output=$("$@" 2>&1); then
    printf '\033[32mok\033[0m\n'
  else
    printf '\033[31mFAILED\033[0m\n'
    echo "${output}" | sed 's/^/      /' | tail -25
    fail=1
  fi
}

echo "Verifying ${ROOT_DIR}"
echo

check "tokens — source and downloads" bash "${ROOT_DIR}/scripts/check-tokens.sh"
check "fonts — local and pinned"      bash "${ROOT_DIR}/scripts/check-fonts.sh"
check "brand manifest — source parity" uv run --script "${ROOT_DIR}/scripts/build_brand_manifest.py" --check
check "site builds"                 "${ROOT_DIR}/scripts/build-docs.sh"
check "AI discovery"                node "${ROOT_DIR}/scripts/check-discovery.mjs"
check "brand MCP protocol"           uv run --script "${ROOT_DIR}/scripts/test-brand-mcp.py"
check "contrast — all 3 appearances" uv run --script "${ROOT_DIR}/scripts/audit_contrast.py" --quiet
check "internal links"               node "${ROOT_DIR}/scripts/check-links.mjs"

echo
if [[ ${fail} -eq 0 ]]; then
  echo -e "\033[32mAll checks passed.\033[0m"
else
  echo -e "\033[31mVerification failed.\033[0m" >&2
fi
exit ${fail}
