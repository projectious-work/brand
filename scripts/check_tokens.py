#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = ["pyyaml>=6,<7"]
# ///
"""Check structured tokens, specimen SCSS, and public downloads for drift."""

from __future__ import annotations

import re
import sys
from pathlib import Path

import yaml

from build_tokens import css, tailwind, token_json

ROOT = Path(__file__).resolve().parents[1]
brand = yaml.safe_load((ROOT / "src/data/brand.yaml").read_text())
scss = (ROOT / "src/assets/scss/_scales.scss").read_text()
scss_values = {
    name: value.lower()
    for name, value in re.findall(
        r"^\$([a-z0-9-]+):\s*(#[0-9a-fA-F]{6})", scss, re.MULTILINE
    )
}
problems: list[str] = []


def check(name: str, expected: str, where: str) -> None:
    actual = scss_values.get(name)
    if actual is not None and actual != expected.lower():
        problems.append(f"{where}: brand.yaml has {expected}, ${name} is {actual}")


for scale in ("midnight", "orange", "slate"):
    for index, value in enumerate(brand["scales"][scale]["light"], 1):
        check(f"{scale}-{index}", value, f"scales.{scale}.light[{index}]")
    for index, value in enumerate(brand["scales"][scale]["dark"], 1):
        check(f"{scale}-dark-{index}", value, f"scales.{scale}.dark[{index}]")

semantic_names = {
    "Success": {
        "lightSolid": "success",
        "lightOnTint": "success-fg",
        "darkSolid": "success-dark",
    },
    "Warning": {
        "lightSolid": "warning",
        "lightOnTint": "warning-fg",
        "darkSolid": "warning-dark",
    },
    "Danger": {"lightSolid": "danger", "darkSolid": "danger-dark"},
}
for item in brand["semantic"]:
    for field, name in semantic_names.get(item["role"], {}).items():
        check(name, item[field], f"semantic.{item['role']}.{field}")

if problems:
    print("brand.yaml disagrees with _scales.scss:", file=sys.stderr)
    for problem in problems:
        print(f"  {problem}", file=sys.stderr)
    raise SystemExit(1)

print(f"  brand.yaml matches _scales.scss ({len(scss_values)} SCSS values checked)")

generated = {
    "variables.css": css(brand),
    "tokens.json": token_json(brand),
    "tailwind.config.js": tailwind(brand),
}
for name, expected in generated.items():
    path = ROOT / "src/static/downloads/tokens" / name
    if not path.exists() or path.read_text() != expected:
        problems.append(
            f"{path.relative_to(ROOT)} is stale; run "
            "uv run --script scripts/build_tokens.py"
        )

if problems:
    print("\n".join(problems), file=sys.stderr)
    raise SystemExit(1)

print("  public token downloads match src/data/brand.yaml")
