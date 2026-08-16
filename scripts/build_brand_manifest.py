#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = ["pyyaml>=6,<7"]
# ///
"""Generate the bounded public brand manifest consumed by the MCP server."""

from __future__ import annotations

import argparse
import json
import re
from pathlib import Path

import yaml

ROOT = Path(__file__).resolve().parents[1]
config = (ROOT / "src/hugo.yaml").read_text()
match = re.search(r'^  version: "([^"]+)"$', config, re.MULTILINE)
if not match:
    raise RuntimeError("src/hugo.yaml has no params.version")
version = match.group(1)
brand = yaml.safe_load((ROOT / "src/data/brand.yaml").read_text())

resource_rows = (
    ("identity", "normative", "src/content/docs/_index.md"),
    ("ai-guide", "normative", "src/content/docs/ai/_index.md"),
    ("foundations", "normative", "src/content/docs/foundations/_index.md"),
    ("tokens-guide", "normative", "src/content/docs/tokens.md"),
    ("logo", "normative", "src/content/docs/logo/_index.md"),
    ("typography", "normative", "src/content/docs/foundations/typography.md"),
    ("components", "normative", "src/content/docs/interface/components.md"),
    ("rendered-specimens", "example", "src/content/docs/interface/code.md"),
    ("collateral", "normative", "src/content/docs/collateral/_index.md"),
    ("licensing", "normative", "src/content/docs/governance/licensing.md"),
    ("trademark", "normative", "src/content/docs/governance/trademark.md"),
    ("provenance", "normative", "src/content/docs/governance/provenance.md"),
    ("changelog", "normative", "CHANGELOG.md"),
    ("migrations", "normative", "CHANGELOG.md"),
    ("tokens-json", "download", "src/static/downloads/tokens/tokens.json"),
    ("tokens-css", "download", "src/static/downloads/tokens/variables.css"),
    ("tokens-tailwind", "download", "src/static/downloads/tokens/tailwind.config.js"),
)
resources = [
    {"id": identifier, "kind": kind, "path": path}
    for identifier, kind, path in resource_rows
]

tokens = {
    item["token"]: {"value": item["hex"], "role": item["use"]}
    for item in brand["core"]
}
for name, scale in brand["scales"].items():
    for mode in ("light", "dark"):
        for index, value in enumerate(scale[mode], 1):
            tokens[f"--{name}-{mode}-{index}"] = {
                "value": value,
                "role": brand["stepRoles"][index - 1],
                "mode": mode,
            }

manifest = {
    "schemaVersion": 1,
    "identity": "projectious.work brand",
    "version": version,
    "authority": {
        "documentation": "src/content/docs/",
        "structuredTokens": "src/data/brand.yaml",
    },
    "boundaries": {
        "publicRoots": ["src/content/docs/", "src/static/downloads/", "CHANGELOG.md"],
        "excluded": ["context/", ".git/", "input/", "public/"],
    },
    "resources": resources,
    "tokens": tokens,
}

parser = argparse.ArgumentParser()
parser.add_argument("--check", action="store_true")
args = parser.parse_args()
output = ROOT / "src/static/downloads/brand-manifest.json"
rendered = json.dumps(manifest, indent=2, ensure_ascii=False) + "\n"
if args.check:
    if not output.exists() or output.read_text() != rendered:
        raise SystemExit(
            "brand manifest is stale; run "
            "uv run --script scripts/build_brand_manifest.py"
        )
    print("  public brand manifest matches source data")
else:
    output.write_text(rendered)
    print(f"Wrote {output}")
