# projectious.work — Brand & Design System

**Status:** Active — maintained

Complete brand package including all design system documentation, logo assets, design tokens, and document templates.

See [`PROVENANCE.md`](./PROVENANCE.md) for the per-asset source/license/attribution inventory, and the repo root [`README.md`](../README.md), [`CONTRIBUTING.md`](../CONTRIBUTING.md), and [`SECURITY.md`](../SECURITY.md) for project-level guidance.

## Structure

```
brand-package/
├── html/                          # Design system documentation (open in browser)
│   ├── index.html                 # Master index — start here
│   ├── projectious-brand-system-final.html
│   ├── projectious-logo-system-v3.html
│   ├── projectious-kitchen-sink.html
│   ├── projectious-slides.html
│   ├── projectious-brand-assets.html
│   ├── projectious-digital-experience.html
│   ├── projectious-motion-media.html
│   └── projectious-legal-assessment.html
├── logo/
│   ├── svg/                       # Vector sources (scalable)
│   │   ├── icon-light.svg
│   │   ├── icon-dark.svg
│   │   ├── icon-mono-black.svg
│   │   ├── icon-mono-white.svg
│   │   └── icon-mono-gray.svg
│   ├── png-1x/                    # Raster at native size (16–512px)
│   ├── png-2x/                    # Retina/HiDPI (2× pixel dimensions)
│   ├── png-3x/                    # Super-retina (3× pixel dimensions)
│   └── favicon/                   # Favicon and apple-touch-icon
│       ├── favicon-16px.png
│       ├── favicon-32px.png
│       ├── favicon-48px.png
│       ├── favicon-180px.png
│       └── apple-touch-icon-180.png
├── tokens/
│   ├── variables.css              # CSS custom properties
│   ├── tailwind.config.js         # Tailwind CSS configuration
│   └── tokens.json                # Design tokens in JSON format
├── templates/
│   ├── latex/
│   │   └── projectious-template.tex  # XeLaTeX/LuaLaTeX template
│   └── typst/
│       └── projectious-template.typ  # Typst template
├── email/
│   └── signature.html             # Email signature (copy to client)
└── README.md                      # This file
```

## Quick start

1. Open `html/index.html` in a browser for the full design system
2. Use `tokens/variables.css` in your web projects
3. Use `tokens/tailwind.config.js` for Tailwind CSS projects
4. Use `templates/latex/` or `templates/typst/` for documents
5. Copy `email/signature.html` into your email client

## Fonts

All fonts are free (SIL OFL 1.1) and available from Google Fonts:
- **Plus Jakarta Sans** — headings, display
- **Source Sans 3** — body, UI
- **IBM Plex Mono** — code, data

## Colors

| Token | Hex | Usage |
|-------|-----|-------|
| Primary (Midnight) | #1d3352 | Text, headings, primary surfaces |
| Primary Light | #2b4d78 | Hover states, dark mode primary |
| Primary Dark | #132440 | Dark backgrounds, code blocks |
| Accent (Orange) | #E05232 | CTAs, highlights, active states |
| Secondary (Slate) | #546a82 | Supporting text, borders |

## License

- Fonts: SIL Open Font License 1.1
- Icons (Lucide): ISC License
- Photography sources: Unsplash License / Pexels License
- Brand assets: © projectious.work — all rights reserved
