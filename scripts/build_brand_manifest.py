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


def token_slug(value: str) -> str:
    value = re.sub(r"(?<=[a-z0-9])(?=[A-Z])", "-", value)
    return re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
for name, scale in brand["scales"].items():
    appearances = {
        "light": scale["light"],
        "deep": scale["dark"],
        "navy": list(scale["dark"]),
    }
    if name == "midnight":
        appearances["navy"][:5] = (
            "#132440",
            "#1a2b3e",
            "#20354d",
            "#263f5a",
            "#2e4b68",
        )
    for appearance, values in appearances.items():
        for index, value in enumerate(values, 1):
            tokens[f"--{name}-{appearance}-{index}"] = {
                "value": value,
                "role": brand["stepRoles"][index - 1],
                "appearance": appearance,
            }

for item in brand["semantic"]:
    role = item["role"].lower()
    for appearance in ("light", "navy", "deep"):
        dark = appearance != "light"
        values = {
            "": item["darkSolid"] if dark else item["lightSolid"],
            "-bg": item["darkTint"] if dark else item["lightTint"],
            "-fg": item["darkSolid"] if dark else item["lightOnTint"],
        }
        for suffix, value in values.items():
            tokens[f"--color-{role}-{appearance}{suffix}"] = {
                "value": value,
                "role": item["use"],
                "appearance": appearance,
            }

for item in brand["surfaces"]:
    name = item["token"].removeprefix("--color-")
    for appearance in ("light", "navy", "deep"):
        tokens[f"--color-{name}-{appearance}"] = {
            "value": item[appearance],
            "role": item["use"],
            "appearance": appearance,
        }

syntax_names = (
    "plain",
    "keyword",
    "type",
    "function",
    "string",
    "number",
    "macro",
    "operator",
    "comment",
    "invalid",
)
for name, item in zip(syntax_names, brand["syntax"], strict=True):
    tokens[f"--syntax-{name}"] = {
        "value": item["hex"],
        "role": item["token"],
        "appearance": "dark panel",
    }
for item in brand["syntaxLight"]["roles"]:
    tokens[item["token"]] = {
        "value": item["hex"],
        "role": item["role"],
        "appearance": "light panel",
    }

terminal = brand["terminal"]
tokens["--terminal-surface"] = {
    "value": terminal["surface"],
    "role": "Default terminal surface",
}
for item in terminal["ansi"]:
    tokens[f"--terminal-ansi-{item['slot']}"] = {
        "value": item["normal"],
        "role": item["name"],
    }
    tokens[f"--terminal-ansi-{item['slot'] + 8}"] = {
        "value": item["bright"],
        "role": f"bright {item['name']}",
    }
for item in terminal["chrome"]:
    tokens[f"--terminal-{token_slug(item['role'])}"] = {
        "value": item["hex"],
        "role": item["role"],
    }
tokens["--terminal-light-surface"] = {
    "value": brand["terminalLight"]["surface"],
    "role": "Optional light terminal surface",
}
for item in brand["terminalLight"]["ansi"]:
    tokens[f"--terminal-light-ansi-{item['slot']}"] = {
        "value": item["hex"],
        "role": item["name"],
    }
for name, value in brand["terminalLight"]["chrome"].items():
    tokens[f"--terminal-light-{token_slug(name)}"] = {"value": value, "role": name}

for index, value in enumerate(brand["spacing"]["steps"], 1):
    tokens[f"--space-{index}"] = {"value": f"{value}px", "role": "Spacing scale"}
for item in brand["radius"]:
    tokens[f"--radius-{item['name']}"] = {"value": item["value"], "role": item["use"]}
for item in brand["elevation"]:
    tokens[f"--{item['name']}"] = {"value": item["value"], "role": item["use"]}
for item in brand["motion"]["durations"]:
    tokens[f"--duration-{item['name']}"] = {"value": item["value"], "role": item["use"]}
for item in brand["motion"]["easing"]:
    tokens[f"--{item['name']}"] = {"value": item["value"], "role": item["use"]}
for item in brand["breakpoints"]:
    tokens[f"--breakpoint-{item['name']}"] = {
        "value": f"{item['value']}px",
        "role": item["use"],
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
