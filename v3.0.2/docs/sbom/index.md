# SBOM and dependencies

> Supply-chain scope, licences, and maintenance obligations for the projectious.work design system.


## Direct dependency inventory

| Dependency | Purpose | Licence | Delivery |
|---|---|---|---|
| brand-theme-hugo-vanilla v0.3.1 | Documentation renderer | MIT | Pinned Hugo module |
| Hugo extended | Static-site build | Apache-2.0 | Build-time tool |
| Plus Jakarta Sans | Display and headings | OFL-1.1 | Self-hosted by the theme |
| Source Sans 3 | Body and UI copy | OFL-1.1 | Self-hosted by the theme |
| IBM Plex Mono | Code, data, and terminal | OFL-1.1 | Self-hosted by the theme |
| Tabler Icons | Interface iconography | MIT | Versioned theme subset |
| FlexSearch | Client-side search | Apache-2.0 | Vendored theme runtime |
| PyYAML | Token and manifest generation | MIT | Ephemeral uv dependency |
| Playwright | Browser verification | Apache-2.0 | Ephemeral uv dependency |

## Scope

The SBOM covers code and assets shipped to a browser, build-time tools needed to
reproduce the published site, generators used to create public downloads, and
third-party material embedded in templates. It does not classify the reserved
projectious.work marks as third-party dependencies.

## Maintenance rules

- Pin released modules and vendored assets to a reviewable version.
- Ship licence text beside self-hosted fonts and icon subsets.
- Do not mix a second icon library into the Tabler set.
- Record substitutions explicitly, including why the canonical delivery path
  was unsuitable.
- Rebuild and review the SBOM whenever the module graph, fonts, icons, search
  runtime, or generation tools change.

The per-asset evidence remains in [Provenance](/docs/governance/provenance/).


---
Source: https://projectious-work.github.io/brand/v3.0.2/docs/sbom/index.md
