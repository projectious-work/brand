#!/usr/bin/env bash
set -euo pipefail

# Two checks, both about the same thing: there is one definition of a token.
#
#   1. src/data/brand.yaml agrees with src/assets/scss/_scales.scss.
#      brand.yaml is what the documentation renders from; _scales.scss is what
#      actually styles the site. If they disagree, a page documents a value the
#      site does not use.
#
#   2. src/static/downloads/tokens/* matches a fresh generator run.
#      The downloads are generated. A hand-edit here is silently reverted by the
#      next build, so it has to fail now rather than surprise someone later.
#
#   ./scripts/check-tokens.sh

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
cd "${ROOT_DIR}"

fail=0

# --- 1. brand.yaml vs the SCSS ------------------------------------------------
node - <<'JS' || fail=1
import("node:fs").then(async (fs) => {
  const { parse } = await import("yaml");
  const brand = parse(fs.readFileSync("src/data/brand.yaml", "utf8"));
  const scss = fs.readFileSync("src/assets/scss/_scales.scss", "utf8");

  const scssVars = new Map(
    [...scss.matchAll(/^\$([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})/gm)]
      .map((m) => [m[1], m[2].toLowerCase()]),
  );

  const problems = [];
  const check = (name, expected, where) => {
    const got = scssVars.get(name);
    if (got === undefined) return; // SCSS does not have to name every value
    if (got !== expected.toLowerCase()) {
      problems.push(`${where}: brand.yaml has ${expected}, $${name} is ${got}`);
    }
  };

  for (const scale of ["midnight", "orange", "slate"]) {
    brand.scales[scale].light.forEach((hex, i) =>
      check(`${scale}-${i + 1}`, hex, `scales.${scale}.light[${i + 1}]`));
    brand.scales[scale].dark.forEach((hex, i) =>
      check(`${scale}-dark-${i + 1}`, hex, `scales.${scale}.dark[${i + 1}]`));
  }

  // Semantic values carry different SCSS names than their yaml roles.
  const semanticMap = {
    Success: { lightSolid: "success", lightOnTint: "success-fg", darkSolid: "success-dark" },
    Warning: { lightSolid: "warning", lightOnTint: "warning-fg", darkSolid: "warning-dark" },
    Danger: { lightSolid: "danger", darkSolid: "danger-dark" },
  };
  for (const s of brand.semantic) {
    const map = semanticMap[s.role];
    if (!map) continue;
    for (const [field, varName] of Object.entries(map)) check(varName, s[field], `semantic.${s.role}.${field}`);
  }

  if (problems.length) {
    console.error("brand.yaml disagrees with _scales.scss:");
    for (const p of problems) console.error(`  ${p}`);
    process.exit(1);
  }
  console.log(`  brand.yaml matches _scales.scss (${scssVars.size} SCSS values checked)`);
});
JS

# --- 2. the downloads are what the generator produces -------------------------
tmp="$(mktemp -d)"
trap 'rm -rf "${tmp}"' EXIT

node scripts/build-tokens.mjs --out "${tmp}" >/dev/null

for f in variables.css tokens.json tailwind.config.js; do
  if ! diff -q "src/static/downloads/tokens/${f}" "${tmp}/${f}" >/dev/null 2>&1; then
    echo "src/static/downloads/tokens/${f} is stale or missing." >&2
    echo "Edit src/data/brand.yaml and re-run 'node scripts/build-tokens.mjs'." >&2
    diff -u "src/static/downloads/tokens/${f}" "${tmp}/${f}" | head -40 >&2 || true
    fail=1
  fi
done

if [[ ${fail} -eq 0 ]]; then
  echo "  public token downloads match src/data/brand.yaml"
fi
exit ${fail}
