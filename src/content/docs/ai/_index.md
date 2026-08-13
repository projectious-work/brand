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
