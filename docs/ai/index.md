# AI consumer guide

> A versioned map from brand use cases to their normative documentation and generated machine-readable material.

---

LLMS index: [llms.txt](/brand/llms.txt)

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
| Identity, voice, and status | [Documentation](/brand/docs/) | [`llms.txt`](/brand/llms.txt) |
| Colours, type, spacing, shape, and motion | [Foundations](/brand/docs/foundations/) | [JSON tokens](/brand/downloads/tokens/tokens.json) |
| CSS integration | [Tokens](/brand/docs/tokens/) | [CSS variables](/brand/downloads/tokens/variables.css) |
| Logo selection and placement | [Logo](/brand/docs/logo/) | [Manifest](/brand/downloads/brand-manifest.json) |
| Components and product surfaces | [Interface](/brand/docs/interface/) | [Clean Markdown](/brand/docs/interface/index.md) |
| Templates and collateral | [Collateral](/brand/docs/collateral/) | [Manifest](/brand/downloads/brand-manifest.json) |
| Licence and trademark limits | [Governance](/brand/docs/governance/) | [`llms.txt`](/brand/llms.txt) |
| Provenance | [Asset provenance](/brand/docs/governance/provenance/) | [Manifest](/brand/downloads/brand-manifest.json) |

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
