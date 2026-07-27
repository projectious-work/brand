---
title: Asset provenance
linkTitle: Provenance
weight: 40
description: Per-asset source, licence, and attribution status for every third-party dependency.
---

The authoritative inventory is
[`brand/PROVENANCE.md`](https://github.com/projectious-work/brand/blob/main/brand/PROVENANCE.md)
in the repository. Check it before adding an asset or shipping collateral.

## Fonts

Loaded at runtime from the Google Fonts CDN — **no font files are bundled**.

| Font | Licence | Attribution | Role |
|---|---|---|---|
| Plus Jakarta Sans | SIL OFL 1.1 | Not required | Headings, display |
| Source Sans 3 | SIL OFL 1.1 | Not required | Body, UI |
| IBM Plex Mono | SIL OFL 1.1 | Not required | Code, data |

## Icons and photography

Neither is bundled in this repository. Both are cleared for future use:

| Source | Licence | Attribution | Commercial |
|---|---|---|---|
| Lucide Icons | ISC | Not required in UI | Allowed |
| Unsplash | Unsplash License | Not required | Allowed |
| Pexels | Pexels License | Not required | Allowed |

## Original work

All logo files, design tokens, document templates, and design-system documents
are original work, © projectious.work, under the brand-asset terms in
[Licensing]({{< relref "/docs/governance/licensing" >}}).

## Review status

Last reviewed **2026-07-26**: no unlicensed, sensitive, or third-party binary
assets are committed to this repository. Every physically present file is
original.

{{% alert title="Adding a bundled asset" color="warning" %}}
If you commit a third-party binary — a font file, an icon SVG, an image — add a
row to `brand/PROVENANCE.md` recording its individual source, licence, and
attribution requirement. Do not rely on the summary tables above.
{{% /alert %}}
