# Asset Provenance

Per-asset source, license, attribution, and permission status for everything in `brand/` that depends on a third party. Governs reuse — check this before adding a new asset or shipping brand collateral that includes one of these.

## Fonts

Loaded at runtime via Google Fonts CDN (`fonts.googleapis.com`) — no font files are bundled in this repo.

| Font | Source | License | Attribution required | Notes |
|------|--------|---------|----------------------|-------|
| Plus Jakarta Sans | Google Fonts | SIL Open Font License 1.1 | No | Headings, display |
| Source Sans 3 | Google Fonts | SIL Open Font License 1.1 | No | Body, UI |
| IBM Plex Mono | Google Fonts | SIL Open Font License 1.1 | No | Code, data |

## Icon library (reference guidance only — not bundled)

No icon files from a third-party library are present in this repo. `brand/html/projectious-legal-assessment.html` documents license clearance for future use:

| Library | License | Attribution required | Commercial use |
|---------|---------|----------------------|-----------------|
| Lucide Icons | ISC License | No (in product UI) | Allowed |

## Stock photography (reference guidance only — not bundled)

No photographs are present in this repo. Cleared sources for future use, per `brand/html/projectious-legal-assessment.html`:

| Source | License | Attribution required | Commercial use | Restriction |
|--------|---------|----------------------|-----------------|-------------|
| Unsplash | Unsplash License | No | Allowed | No reselling as-is; no competing stock service |
| Pexels | Pexels License | No | Allowed | No reselling; no implying endorsement |

## Original assets (no third-party dependency)

All logo files (`brand/logo/**`), design tokens (`brand/tokens/**`), document templates (`brand/templates/**`), and design-system documentation (`brand/html/**`) are original work, © projectious.work. See [`LICENSE.md`](../LICENSE.md) for terms.

## Review status

Last reviewed 2026-07-26: no unlicensed, sensitive, or third-party binary assets found committed to this repository. All physically present files (SVG, PNG, HTML, tokens, templates) are original. If you add a physically bundled third-party asset (a font file, an icon SVG, an image), add a row above and record its individual license and attribution requirement — do not rely on the summary tables alone.
# Portfolio presentation templates

The SVG sources under `brand/portfolio/` were authored for this repository.
They use system fonts and geometric shapes only, with no third-party logos,
screenshots, photography, or icon assets. They follow the repository split
license and trademark rules. Project-specific derivatives must document any
added third-party material here before publication.
