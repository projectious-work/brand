#!/usr/bin/env -S uv run
# /// script
# requires-python = ">=3.10"
# dependencies = ["mcp[cli]>=1.13,<2"]
# ///
from __future__ import annotations

import asyncio
import json
from pathlib import Path

from mcp import ClientSession, StdioServerParameters
from mcp.client.stdio import stdio_client

ROOT = Path(__file__).resolve().parents[1]
MANIFEST = json.loads(
    (ROOT / "src/static/downloads/brand-manifest.json").read_text()
)


async def main() -> None:
    params = StdioServerParameters(
        command="uv",
        args=["run", "--script", str(ROOT / "mcp/brand_server.py")],
        cwd=str(ROOT),
    )
    async with stdio_client(params) as streams:
        async with ClientSession(*streams) as session:
            await session.initialize()
            templates = await session.list_resource_templates()
            assert templates.resourceTemplates
            tools = await session.list_tools()
            names = {tool.name for tool in tools.tools}
            expected = {
                "lookup_token",
                "explain_token_role",
                "discover_assets",
                "lookup_provenance",
                "validate_token_reference",
            }
            assert names == expected, names
            result = await session.call_tool(
                "lookup_token",
                {"name": "--color-accent", "version": MANIFEST["version"]},
            )
            assert not result.isError
            invalid = await session.call_tool(
                "validate_token_reference",
                {"reference": "../../.env", "version": MANIFEST["version"]},
            )
            assert not invalid.isError
            resource = await session.read_resource(
                f"brand://{MANIFEST['version']}/identity"
            )
            assert resource.contents


if __name__ == "__main__":
    asyncio.run(main())
