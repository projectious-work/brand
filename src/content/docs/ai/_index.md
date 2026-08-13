---
title: AI consumer guide
linkTitle: AI consumption
weight: 80
description: A versioned map from brand use cases to their normative documentation and generated machine-readable material.
---

This page is the canonical guide for agents and other automated consumers of
the projectious.work brand contract. The current release is **v2.1.1**.

`src/content/docs/` is the normative human-readable authority and
`src/data/brand.yaml` is the structured authority. Files under
`/downloads/` are generated from those sources. Designer material under
`input/` is upstream reference material and is not a public runtime contract.

## Use-case map

| Need | Normative source | Machine-readable material |
|---|---|---|
| Identity, voice, and status | [Documentation]({{< relref "/docs/" >}}) | [`llms.txt`]({{< siteurl "llms.txt" >}}) |
| Colours, type, spacing, shape, and motion | [Foundations]({{< relref "/docs/foundations/" >}}) | [JSON tokens]({{< siteurl "downloads/tokens/tokens.json" >}}) |
| CSS integration | [Tokens]({{< relref "/docs/tokens" >}}) | [CSS variables]({{< siteurl "downloads/tokens/variables.css" >}}) |
| Logo selection and placement | [Logo]({{< relref "/docs/logo/" >}}) | [Manifest]({{< siteurl "downloads/brand-manifest.json" >}}) |
| Components and product surfaces | [Interface]({{< relref "/docs/interface/" >}}) | [Clean Markdown]({{< siteurl "docs/interface/index.md" >}}) |
| Templates and collateral | [Collateral]({{< relref "/docs/collateral/" >}}) | [Manifest]({{< siteurl "downloads/brand-manifest.json" >}}) |
| Licence and trademark limits | [Governance]({{< relref "/docs/governance/" >}}) | [`llms.txt`]({{< siteurl "llms.txt" >}}) |
| Provenance | [Asset provenance]({{< relref "/docs/governance/provenance" >}}) | [Manifest]({{< siteurl "downloads/brand-manifest.json" >}}) |

## Brand MCP server

The repository includes a local, read-only
[Model Context Protocol](https://modelcontextprotocol.io/) server for agents
that need structured access to the released brand contract. It reads the same
generated manifest linked above; it does not maintain a second copy of the
tokens or documentation.

The server is a **stdio process**, not a hosted network endpoint. Clone the
repository and start it from the repository root:

```sh
uv run --script mcp/brand_server.py
```

Python 3.10 or newer and `uv` are required. The script pins the compatible MCP
SDK range to `mcp[cli]>=1.13,<2`; `uv` creates the isolated environment on the
first run. No API key, credential, environment variable, or network service is
needed after the dependency is available.

### Client configuration

Point an MCP client at the script with an absolute repository path. A typical
configuration is:

```json
{
  "mcpServers": {
    "projectious-work-brand": {
      "command": "uv",
      "args": [
        "run",
        "--script",
        "/absolute/path/to/brand/mcp/brand_server.py"
      ]
    }
  }
}
```

The exact outer configuration key varies by client, but the command and
arguments are the same. Keep stdout reserved for MCP JSON-RPC; operational logs
go to stderr.

### Resources

Resources use this template:

```text
brand://VERSION/RESOURCE_ID
```

For the current checkout, examples include:

| URI | Content class |
|---|---|
| `brand://v2.1.1/identity` | Normative identity and voice guidance |
| `brand://v2.1.1/foundations` | Normative colour, type, spacing, shape, and motion index |
| `brand://v2.1.1/tokens-guide` | Normative token usage guidance |
| `brand://v2.1.1/tokens-json` | Generated JSON token download |
| `brand://v2.1.1/tokens-css` | Generated CSS custom properties |
| `brand://v2.1.1/logo` | Normative logo guidance |
| `brand://v2.1.1/components` | Normative component guidance |
| `brand://v2.1.1/rendered-specimens` | Rendered code specimens used as examples |
| `brand://v2.1.1/licensing` | Licence contract |
| `brand://v2.1.1/trademark` | Trademark limits |
| `brand://v2.1.1/provenance` | Third-party asset provenance |
| `brand://v2.1.1/changelog` | Release history and migrations |

Use MCP resource discovery rather than assuming this list is exhaustive. The
public [brand manifest]({{< siteurl "downloads/brand-manifest.json" >}}) is the
allowlist behind discovery and reads.

### Tools

| Tool | Purpose |
|---|---|
| `lookup_token(name, version?)` | Return the exact value, semantic role, and mode of a token. |
| `explain_token_role(name, version?)` | Explain where a token belongs without inventing a new value. |
| `discover_assets(kind?, version?)` | List normative, download, or example resources. |
| `lookup_provenance(asset_id, version?)` | Locate the provenance authority for a public asset. |
| `validate_token_reference(reference, version?)` | Check whether a supplied token name exists in the contract. |

For example, ask the client to call `lookup_token` with
`name: "--color-accent"`, or call `discover_assets` with `kind: "download"`
before choosing a machine-readable format. A validation request for an unknown
name returns `valid: false`; it does not search the filesystem or the network.

### Version behavior

The server serves exactly the version declared by the checked-out manifest.
Requests for any other version fail explicitly, which prevents an agent from
silently combining releases. To query an archived contract, check out that
release tag and run its server. For link-only retrieval, use the corresponding
versioned documentation site instead.

### Security boundary

Every tool is annotated read-only, non-destructive, idempotent, and closed to
the outside world. The server accepts resource IDs and token names—not paths or
URLs. Its allowlist excludes `context/`, `.git/`, `input/`, build caches,
credentials, and maintainer operations. It rejects unknown versions,
resources, kinds, and tokens, and it cannot modify the checkout.

The protocol smoke test initializes a real stdio session, discovers resources
and tools, reads a resource, exercises lookup and validation, and runs as part
of `./scripts/verify.sh`.

## Compatibility and versions

The site root is the latest released contract. Archived releases live under
their exact `/vX.Y.Z/` prefix and contain their own Markdown, discovery files,
downloads, and manifest. Never combine values from different versions.

Breaking or migration-relevant changes are recorded in the repository
changelog. Generated assets carry the same release identifier as the site that
serves them.

## Retrieval boundaries

Use published documentation, Markdown outputs, token downloads, and manifest
entries. Do not treat repository process data, build caches, intake material,
or generated Pages history as brand guidance. Marks remain subject to the
trademark and brand-asset terms even when token values or code are MIT licensed.
