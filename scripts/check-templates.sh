#!/usr/bin/env bash
set -euo pipefail

# Compile-test the document templates in brand/templates/.
#
# Neither toolchain is a hard dependency of this repository, so each check is
# skipped (not failed) when its compiler is absent. Install them to get real
# coverage:
#   typst   — https://github.com/typst/typst/releases
#   xelatex — TeX Live / MacTeX
#
# The brand fonts are SIL OFL 1.1 and are NOT vendored here. Without them both
# compilers fall back to a default face and emit font warnings; the layout is
# still validated.

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
TMP="$(mktemp -d)"
trap 'rm -rf "${TMP}"' EXIT
fail=0

if command -v typst >/dev/null 2>&1; then
  printf '  %-30s' "typst template"
  if typst compile "${ROOT_DIR}/brand/templates/typst/projectious-template.typ" \
       "${TMP}/typst.pdf" 2>"${TMP}/typst.log"; then
    printf 'ok (%s KB)\n' "$(( $(stat -c%s "${TMP}/typst.pdf") / 1024 ))"
    grep -c 'unknown font family' "${TMP}/typst.log" >/dev/null 2>&1 \
      && echo "      note: brand fonts not installed; fell back to defaults"
  else
    printf 'FAILED\n'; sed 's/^/      /' "${TMP}/typst.log" | head -20; fail=1
  fi
else
  echo "  typst template                 skipped (typst not installed)"
fi

if command -v xelatex >/dev/null 2>&1; then
  printf '  %-30s' "latex template"
  if (cd "${TMP}" && xelatex -interaction=nonstopmode -halt-on-error \
        "${ROOT_DIR}/brand/templates/latex/projectious-template.tex" >latex.log 2>&1); then
    printf 'ok\n'
  else
    printf 'FAILED\n'; grep -A3 '^!' "${TMP}/latex.log" | head -20 | sed 's/^/      /'; fail=1
  fi
else
  echo "  latex template                 skipped (xelatex not installed)"
fi

exit ${fail}
