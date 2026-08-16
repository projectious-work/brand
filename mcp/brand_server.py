#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = ["mcp[cli]>=1.13,<2"]
# ///
"""Read-only projectious.work brand contract MCP server."""
from __future__ import annotations

import json
from pathlib import Path

from mcp.server.fastmcp import FastMCP
from mcp.types import ToolAnnotations

ROOT = Path(__file__).resolve().parents[1]
MANIFEST_PATH = ROOT / "src/static/downloads/brand-manifest.json"
MANIFEST = json.loads(MANIFEST_PATH.read_text(encoding="utf-8"))
VERSION = MANIFEST["version"]
RESOURCES = {item["id"]: item for item in MANIFEST["resources"]}
READ_ONLY = ToolAnnotations(
    readOnlyHint=True,
    destructiveHint=False,
    idempotentHint=True,
    openWorldHint=False,
)
server = FastMCP("projectious-work-brand")


def _require_version(version: str) -> None:
    if version != VERSION:
        raise ValueError(f"unknown brand version: {version}")


def _public_file(resource_id: str) -> Path:
    item = RESOURCES.get(resource_id)
    if not item:
        raise ValueError(f"unknown resource: {resource_id}")
    path = (ROOT / item["path"]).resolve()
    allowed = [
        (ROOT / prefix).resolve()
        for prefix in MANIFEST["boundaries"]["publicRoots"]
    ]
    if not any(path == base or base in path.parents for base in allowed):
        raise ValueError("resource is outside the public contract")
    if path.is_symlink() or not path.is_file():
        raise ValueError("resource is unavailable")
    return path


@server.resource("brand://{version}/{resource_id}")
def read_brand_resource(version: str, resource_id: str) -> str:
    """Read an allowlisted normative source or generated download."""
    _require_version(version)
    return _public_file(resource_id).read_text(encoding="utf-8")


@server.tool(annotations=READ_ONLY)
def lookup_token(name: str, version: str = VERSION) -> dict:
    """Return the exact value and role for a named public token."""
    _require_version(version)
    token = MANIFEST["tokens"].get(name)
    if token is None:
        raise ValueError(f"unknown token: {name}")
    return {"name": name, "version": version, **token}


@server.tool(annotations=READ_ONLY)
def explain_token_role(name: str, version: str = VERSION) -> dict:
    """Explain the semantic role and appearance of a named token."""
    result = lookup_token(name, version)
    return {
        "name": name,
        "version": version,
        "role": result["role"],
        "appearance": result.get("appearance", "appearance-independent"),
        "value": result["value"],
    }


@server.tool(annotations=READ_ONLY)
def discover_assets(
    kind: str | None = None,
    version: str = VERSION,
) -> list[dict]:
    """List allowlisted resources, optionally filtered by resource kind."""
    _require_version(version)
    allowed_kinds = {"normative", "download", "example"}
    if kind is not None and kind not in allowed_kinds:
        raise ValueError(f"unknown resource kind: {kind}")
    return [
        {"id": item["id"], "kind": item["kind"], "version": version}
        for item in MANIFEST["resources"]
        if kind is None or item["kind"] == kind
    ]


@server.tool(annotations=READ_ONLY)
def lookup_provenance(asset_id: str, version: str = VERSION) -> dict:
    """Locate provenance guidance for an allowlisted public asset."""
    _require_version(version)
    if asset_id not in RESOURCES:
        raise ValueError(f"unknown asset: {asset_id}")
    return {
        "asset": asset_id,
        "version": version,
        "provenanceResource": f"brand://{version}/provenance",
    }


@server.tool(annotations=READ_ONLY)
def validate_token_reference(reference: str, version: str = VERSION) -> dict:
    """Validate a supplied token name without reading arbitrary input paths."""
    _require_version(version)
    token = MANIFEST["tokens"].get(reference)
    return {
        "reference": reference,
        "version": version,
        "valid": token is not None,
        "value": token["value"] if token else None,
    }


if __name__ == "__main__":
    server.run(transport="stdio")
