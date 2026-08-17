# Asset provenance

> Per-asset source, licence, and attribution status for every third-party dependency.


The authoritative inventory is
the project provenance inventory
in the repository. Check it before adding an asset or shipping collateral.

## Fonts

Self-hosted from Fontsource release **5.3.0**. Each file is a Latin WOFF2
subset, used without modification, and ships with its SIL OFL 1.1 licence.

| File | SHA-256 | Source package |
|---|---|---|
| `plus-jakarta-sans-latin-variable.woff2` | `153fc85b70298beeb1d61a5f723331649e7f23bb77302a66e61cb3e2fbdb5e79` | `@fontsource-variable/plus-jakarta-sans@5.3.0` |
| `source-sans-3-latin-variable.woff2` | `7a19a7027e125257d310c6dbd78ae3a30b5ea1e3794d60b12bb28227a003bfda` | `@fontsource-variable/source-sans-3@5.3.0` |
| `ibm-plex-mono-latin-400.woff2` | `08949f728dc52d528e69b1667d15c89a5686a4ee9a296ff90983985f99c380f7` | `@fontsource/ibm-plex-mono@5.3.0` |
| `ibm-plex-mono-latin-500.woff2` | `01d285447409c8a588692162439a038b8cbd7871309ee20267b0d2d91c6e8e22` | `@fontsource/ibm-plex-mono@5.3.0` |

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
[Licensing](/docs/governance/licensing/).

## Review status

Last reviewed **2026-08-13**: the four declared font binaries and Font Awesome
are the only bundled third-party font assets. Their licence material ships with
the files.

{{% callout title="Adding a bundled asset" type="warning" %}}
If you commit a third-party binary — a font file, an icon SVG, an image — add a
row to the provenance inventory recording its individual source, licence, and
attribution requirement. Do not rely on the summary tables above.
{{% /callout %}}


---
Source: https://projectious-work.github.io/brand/v3.0.0/docs/governance/provenance/index.md
