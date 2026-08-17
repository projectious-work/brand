# AI consumer guide

> A versioned map from brand use cases to their normative documentation and generated machine-readable material.


This page is the canonical guide for agents and other automated consumers of
the projectious.work brand contract. The current release is **v3.0.2**.

`src/content/docs/` is the normative human-readable authority and
`src/data/brand.yaml` is the structured authority. Files under
`/downloads/` are generated from those sources. Designer intake material is
upstream reference material and is not a public runtime contract.

## Use-case map

| Need | Normative source | Machine-readable material |
|---|---|---|
| Identity, voice, and status | [Documentation](/docs/) | [`llms.txt`](/llms.txt) |
| Colours, type, spacing, shape, and motion | [Foundations](/docs/foundations/) | [JSON tokens](/downloads/tokens/tokens.json) |
| CSS integration | [Tokens](/docs/tokens/) | [CSS variables](/downloads/tokens/variables.css) |
| Logo selection and placement | [Logo](/docs/logo/) | [Manifest](/downloads/brand-manifest.json) |
| Components and product surfaces | [Interface](/docs/interface/) | [Clean Markdown](/docs/interface/index.md) |
| Templates and collateral | [Collateral](/docs/collateral/) | [Manifest](/downloads/brand-manifest.json) |
| Licence and trademark limits | [Governance](/docs/governance/) | [`llms.txt`](/llms.txt) |
| Provenance | [Asset provenance](/docs/governance/provenance/) | [Manifest](/downloads/brand-manifest.json) |

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
| `brand://v3.0.2/identity` | Normative identity and voice guidance |
| `brand://v3.0.2/foundations` | Normative colour, type, spacing, shape, and motion index |
| `brand://v3.0.2/tokens-guide` | Normative token usage guidance |
| `brand://v3.0.2/tokens-json` | Generated JSON token download |
| `brand://v3.0.2/tokens-css` | Generated CSS custom properties |
| `brand://v3.0.2/logo` | Normative logo guidance |
| `brand://v3.0.2/components` | Normative component guidance |
| `brand://v3.0.2/rendered-specimens` | Rendered code specimens used as examples |
| `brand://v3.0.2/licensing` | Licence contract |
| `brand://v3.0.2/trademark` | Trademark limits |
| `brand://v3.0.2/provenance` | Third-party asset provenance |
| `brand://v3.0.2/changelog` | Release history and migrations |

Use MCP resource discovery rather than assuming this list is exhaustive. The
public [brand manifest](/downloads/brand-manifest.json) is the
allowlist behind discovery and reads.

### Tools

| Tool | Purpose |
|---|---|
| `lookup_token(name, version?)` | Return the exact value, semantic role, and appearance of a token. |
| `explain_token_role(name, version?)` | Explain where a token belongs without inventing a new value. |
| `discover_assets(kind?, version?)` | List normative, download, or example resources. |
| `lookup_provenance(asset_id, version?)` | Locate the provenance authority for a public asset. |
| `validate_token_reference(reference, version?)` | Check whether a supplied token name exists in the contract. |

For example, ask the client to call `lookup_token` with
`name: "--color-bg-navy"`, or call `discover_assets` with `kind: "download"`
before choosing a machine-readable format. The manifest covers appearance-
pinned scales and surfaces, semantic triples, syntax, terminal palettes, type,
spacing, radius, elevation, motion, and breakpoints. A validation request for
an unknown name returns `valid: false`; it does not search the filesystem or
the network.

### Version behavior

The server serves exactly the version declared by the checked-out manifest.
Requests for any other version fail explicitly, which prevents an agent from
silently combining releases. To query an archived contract, check out that
release tag and run its server. For link-only retrieval, use the corresponding
versioned documentation site instead.

### Security boundary

Every tool is annotated read-only, non-destructive, idempotent, and closed to
the outside world. The server accepts resource IDs and token names—not paths or
URLs. Its allowlist excludes internal process data, version-control metadata,
designer intake material, build caches, credentials, and maintainer
operations. It rejects unknown versions, resources, kinds, and tokens, and it
cannot modify the checkout.

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


---
Source: https://projectious-work.github.io/brand/docs/ai/index.md
