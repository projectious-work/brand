<div align="center">
  <img src="brand/logo/png-2x/icon-light-128px.png" alt="projectious.work" width="88">
  <h1>projectious.work — Brand &amp; Design System</h1>
  <p>
    <strong><a href="https://projectious-work.github.io/brand/">projectious-work.github.io/brand</a></strong>
  </p>
  <p>
    Colour, typography, logo, and interface patterns — with the usage terms that go with them.
  </p>
</div>

---

This repository holds the complete brand system for projectious.work: the design
documentation, the logo in every delivered format, machine-readable design
tokens, and document templates. The published site at
**[projectious-work.github.io/brand](https://projectious-work.github.io/brand/)**
is generated from this repository and is **built with the system it documents** —
the colour scales rendering those pages are the scales the pages describe.

**Status:** Active — maintained · **Release:** v0.1.0

## What's inside

### Three scales, defined step roles

The palette is three 12-step Radix-convention ramps — midnight, orange, slate —
each in a light and dark variant. Every step carries a *role*, so a border step
never gets pressed into service as text.

![Midnight scale in light and dark mode, with each step labelled by role](.github/images/scales.png)

### A named entry point for each colour

Seven aliases sit on top of the scales for the values most projects reach for
first.

![Core palette swatches — primary, accent, secondary and their variants](.github/images/palette.png)

Both modes are designed together, not derived from one another:

![The same swatches rendered in dark mode](.github/images/dark-mode.png)

### Three typefaces, three jobs

Plus Jakarta Sans for headings, Source Sans 3 for body, IBM Plex Mono for code —
all SIL OFL 1.1, on a fixed ramp. Each row below is set in the values it
documents.

![Type ramp from Display 48 through Code 13, each row set in its own specification](.github/images/typography.png)

### Code surfaces stay dark in both modes

…because a code block that flips with the theme forces the syntax palette to be
designed twice. Every token in the theme carries a measured contrast ratio.

![A JavaScript snippet on the dark code surface showing the syntax theme](.github/images/code.png)

### Components with normative measurements

Where a component appears in the docs, its numbers are binding — a 40px input is
40px.

![Button variants table listing fill, border, text colour and use for each](.github/images/components.png)

## Documentation

| Section | Covers |
|---|---|
| [Foundations](https://projectious-work.github.io/brand/docs/foundations/) | Colour, typography, spacing, shape, motion |
| [Logo](https://projectious-work.github.io/brand/docs/logo/) | Lockups, clear space, minimum sizes, file formats |
| [Interface](https://projectious-work.github.io/brand/docs/interface/) | Components, code, dark mode, icons, forms |
| [Media](https://projectious-work.github.io/brand/docs/media/) | Motion, audio, video, photography, presentations |
| [Collateral](https://projectious-work.github.io/brand/docs/collateral/) | Business card, email signature, social and OG |
| [Governance](https://projectious-work.github.io/brand/docs/governance/) | Licensing, trademark, legal assessment, provenance |
| [Tokens](https://projectious-work.github.io/brand/docs/tokens/) | CSS, JSON, and Tailwind exports |

## Repository layout

```
brand/            Canonical source — design documents, logo, tokens, templates
├── html/         The design-system documents (open in a browser)
├── logo/         SVG, PNG @1x/@2x/@3x, favicons
├── tokens/       variables.css · tokens.json · tailwind.config.js
├── templates/    LaTeX and Typst document templates
└── email/        Email signature

content/          Documentation site content (Hugo)
assets/scss/      Brand tokens mapped onto Bootstrap/Docsy — the dogfooding seam
layouts/          Site layouts and the specimen shortcodes
data/brand.yaml   Machine-readable brand values the docs render from
scripts/          Local build, serve, deploy, and screenshot scripts
```

`brand/` is the source of truth. The site is its readable presentation, not a
replacement — see [`brand/README.md`](brand/README.md).

## Building the site locally

Requires [Hugo extended](https://gohugo.io/installation/) ≥ 0.157 and Node ≥ 18.

```bash
git clone --recurse-submodules https://github.com/projectious-work/brand.git
cd brand

./scripts/serve-docs.sh     # live preview at http://localhost:1313/
./scripts/build-docs.sh     # production build into public/
./scripts/deploy-docs.sh    # build and push to the gh-pages branch
```

There is no CI workflow. Builds and deployments are run locally and pushed to
the `gh-pages` branch, which GitHub Pages serves from its root.

To regenerate the screenshots in this README:

```bash
npx playwright install chromium
./scripts/capture-readme-images.sh
```

## Licence

This repository is **split-licensed**:

- **Brand assets** — logos, brand imagery, and the design documents under
  `brand/` — are proprietary and source-available. You may view and reference
  them; you may not modify, redistribute, or use them commercially without
  written consent.
- **Code, scripts, and design tokens** are **MIT**. The token *values* are free
  to use.

Full terms in [`LICENSE.md`](LICENSE.md) and [`TRADEMARK.md`](TRADEMARK.md).
Third-party asset provenance is inventoried in
[`brand/PROVENANCE.md`](brand/PROVENANCE.md).

## Contributing

See [`CONTRIBUTING.md`](CONTRIBUTING.md). Security or unlicensed-material reports
go to **info@projectious.work** — see [`SECURITY.md`](SECURITY.md), not a public
issue.

---

<div align="center">
  <sub>© 2026 projectious.work · Redesigning work — Cloud · Agile · Agentic AI</sub>
</div>
