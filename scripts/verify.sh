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

check "site builds"                 "${ROOT_DIR}/scripts/build-docs.sh"
check "contrast — site (both modes)" node "${ROOT_DIR}/scripts/audit-contrast.mjs" --quiet
check "contrast — brand documents"   node "${ROOT_DIR}/scripts/audit-contrast-brand.mjs"
check "portfolio assets"             bash "${ROOT_DIR}/scripts/validate-portfolio-assets.sh"
check "internal links"               node "${ROOT_DIR}/scripts/check-links.mjs"
check "document templates"           bash "${ROOT_DIR}/scripts/check-templates.sh"

echo
if [[ ${fail} -eq 0 ]]; then
  echo -e "\033[32mAll checks passed.\033[0m"
else
  echo -e "\033[31mVerification failed.\033[0m" >&2
fi
exit ${fail}
