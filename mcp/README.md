# Brand MCP server

Start the read-only server over stdio from the repository root:

```sh
uv run --script mcp/brand_server.py
```

The inline dependency constraint uses MCP SDK `>=1.13,<2` and requires no
secret. Resources use `brand://VERSION/RESOURCE_ID`. The generated public
manifest is the complete allowlist: arbitrary filesystem paths and URLs are
never accepted.

The server exposes token lookup and role explanation, public asset discovery,
provenance lookup, and token-reference validation. Every operation is
read-only, deterministic, version-aware, and bounded to the released public
contract.

The complete user guide, client configuration, resource URI catalog, tool
reference, version behavior, and security boundary are published under
**Documentation → AI consumption** on the brand site.
