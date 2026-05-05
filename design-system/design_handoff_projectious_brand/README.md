# Handoff: projectious.work design system → `projectious-work/brand`

## Overview

This bundle is a **full-sync export** of the projectious.work design system from a design project, ready to be committed back to the source repository at:

> **https://github.com/projectious-work/brand**

The design system was originally synthesized *from* this repo (the `brand/` subfolder) and has since been iterated on inside a design tool. Your job in Claude Code is to mirror this bundle back into the repo so the upstream stays in sync.

---

## About the files in this bundle

The files under `design-system/` are **the design system itself** — drop-in CSS, logo SVG/PNG assets, HTML preview cards, slide templates, and React-style JSX UI kit components. Unlike most handoff packages, **these are not throwaway HTML prototypes** — they're the canonical source of the brand and are meant to live in the repo as-is.

That said, the **JSX files in `ui_kits/`** are reference designs (they're loaded via Babel-in-the-browser in the kitchen-sink HTML), not production-bundled React components. If your repo has a build pipeline (Vite, Next, etc.) you may want to re-author them as proper modules later — but for the initial sync, copy them verbatim.

---

## Fidelity

**High-fidelity (hifi).** Every value here is final:
- exact hex colors and 12-step Radix-style scales (light + dark)
- exact font families (Plus Jakarta Sans, Source Sans 3, IBM Plex Mono — all SIL OFL 1.1, loaded via Google Fonts)
- exact spacing scale (4 px base: 4/8/12/16/24/32/48/64/96)
- exact radii (sm 3, md 4, lg 6, xl 9, full)
- exact elevation (4 levels — see `colors_and_type.css`)
- exact motion (4 durations: 100/200/300/400 ms; 2 eases: ease-out for enter, ease-in for exit)

Treat the values in `design-system/colors_and_type.css` as the source of truth. If the repo's existing `tokens/variables.css` or `tokens.json` disagree, the version in this bundle wins — that's the point of the sync.

---

## Task for Claude Code

### 1. Clone and inspect

```bash
git clone git@github.com:projectious-work/brand.git
cd brand
git checkout -b sync/design-system-update
```

Take a look at the existing layout. The relevant existing folders (per the upstream README we synthesized from) are:

```
brand/
├── README.md
├── tokens/
│   ├── variables.css
│   ├── tokens.json
│   └── tailwind.config.js
├── html/
│   ├── projectious-brand-system-final.html
│   ├── projectious-kitchen-sink.html
│   ├── projectious-slides.html
│   └── projectious-digital-experience.html
├── logo/
│   ├── svg/
│   ├── png-1x/
│   └── favicon/
└── email/
    └── signature.html
```

### 2. Map the bundle into the repo

The bundle (`design-system/` in this handoff package) has a flatter, more practical layout than the original repo. **Decide with the user** whether to:

**(a) Mirror the bundle's structure** — replace the existing repo layout entirely with the bundle's folders. Cleaner, but breaks anything linking to the old paths.

**(b) Map bundle files into the existing repo structure** — the more conservative option. Suggested mapping:

| Bundle file/folder | Repo destination |
|---|---|
| `design-system/README.md` | `brand/README.md` (replace) |
| `design-system/SKILL.md` | `brand/SKILL.md` (new — Agent Skill manifest) |
| `design-system/colors_and_type.css` | `brand/tokens/colors_and_type.css` (new — primary CSS export) |
| `design-system/assets/logo/*.svg` | `brand/logo/svg/` |
| `design-system/assets/logo/*.png` (icon-*) | `brand/logo/png-1x/` |
| `design-system/assets/logo/favicon-32.png`, `apple-touch-icon-180.png` | `brand/logo/favicon/` |
| `design-system/preview/` | `brand/preview/` (new — design-system tab preview cards) |
| `design-system/slides/` | `brand/slides/` (new — 6 slide templates as separate files) |
| `design-system/ui_kits/marketing-site/` | `brand/ui-kits/marketing-site/` (new) |
| `design-system/ui_kits/agent-console/` | `brand/ui-kits/agent-console/` (new) |

> **Suggestion:** Go with **(b)**. It preserves URLs and existing references. The new folders (`preview/`, `slides/`, `ui-kits/`) are additive.

### 3. Reconcile `tokens/`

The existing `brand/tokens/variables.css`, `tokens.json`, and `tailwind.config.js` were the original source for the design system. The bundle's `colors_and_type.css` is the **consolidated, current** version.

**Recommended:** read the existing token files, diff against `colors_and_type.css`, and:
- update `variables.css` to match the CSS custom properties in `colors_and_type.css`
- regenerate `tokens.json` from those values (keep the JSON shape — just update values)
- update `tailwind.config.js` color/spacing/radius keys to match

If the diff is large, surface it to the user before writing — they may want to review token changes more carefully than asset changes.

### 4. Reconcile the existing `html/` files

The repo currently has four monolithic HTML files (`projectious-brand-system-final.html`, `projectious-kitchen-sink.html`, `projectious-slides.html`, `projectious-digital-experience.html`). The bundle splits the slide content into individual files under `slides/` and the component examples into per-token cards under `preview/`.

**Recommended:** keep the existing `html/` files as-is for now (don't delete) — they're useful as canonical full-page references. The new `preview/` and `slides/` folders are additive previews used by tooling, not replacements.

If the user wants the old HTML files regenerated from the new sources, that's a separate task.

### 5. Commit and push

Suggested commit structure (one commit per logical group makes the diff readable):

```
git add design-system/README.md SKILL.md
git commit -m "docs: sync README and add Agent Skill manifest"

git add tokens/colors_and_type.css
git commit -m "tokens: add consolidated colors_and_type.css export"

git add tokens/variables.css tokens/tokens.json tokens/tailwind.config.js
git commit -m "tokens: reconcile values with current design system"

git add logo/
git commit -m "logo: sync SVG and PNG variants"

git add preview/ slides/ ui-kits/
git commit -m "feat: add per-token preview cards, slide templates, and UI kits"

git push -u origin sync/design-system-update
gh pr create --title "Sync design system" --body "Full sync from design project. See commit messages for breakdown."
```

Adjust paths above if the user picked option (a) instead of (b).

---

## What's in the bundle

```
design-system/
├── README.md                       Brand snapshot, content fundamentals, visual foundations, iconography, logo system
├── SKILL.md                        Agent Skill manifest (frontmatter: name, description, user-invocable)
├── colors_and_type.css             Drop-in CSS — colors, scales, semantic tokens, type roles, base element styles
├── assets/
│   └── logo/                       Brand mark in every needed variant (SVG color/mono, PNG, favicons)
├── preview/                        21 small HTML cards — one per token group (colors, type, spacing, radii, elevation, components). Used by the design tool's Design System tab.
├── slides/                         6 slide templates rendered as 1280×720 standalone HTML files, plus an index.html
└── ui_kits/
    ├── marketing-site/             Marketing/landing recreation. JSX components: Header, Hero, Pillars, Convictions, CodeShowcase, CTA, Footer. index.html loads them via Babel.
    └── agent-console/              Agent-first ops console recreation. JSX: Sidebar, Topbar, PipelineList, RunDetail, StatusBar. index.html loads them via Babel.
```

---

## Brand non-negotiables (from `design-system/SKILL.md`)

If anything in the repo's existing content disagrees with these, this bundle wins:

- Brand name is lowercase: **projectious.work**. Never capitalize.
- Practice areas joined with `·` (middle dot), not `&`: *Cloud · Agile · Agentic AI*.
- Three type families, three roles: Plus Jakarta Sans (display), Source Sans 3 (body), IBM Plex Mono (code) — never mix roles.
- No emoji in any brand surface. No bluish-purple gradients. No rainbow categorization.
- Accent color (orange `#E05232`, midnight `#1d3352`, slate `#546a82`) — orange only for moments of decision, not decoration.

---

## Design tokens (summary — full values in `design-system/colors_and_type.css`)

**Core colors**
- Midnight 9: `#1d3352` (primary)
- Orange 9: `#E05232` (accent)
- Slate 9: `#546a82` (secondary)
- Paper bg (light mode): `#f5f4f2`
- Surface (light mode): `#ffffff`
- Border (light): `#e5e3de`
- Border (dark): `rgba(255,255,255,0.08)`

**Typography**
- Display/heading: `'Plus Jakarta Sans', sans-serif` — letter-spacing `-0.5px`
- Body/UI: `'Source Sans 3', sans-serif`
- Code/data: `'IBM Plex Mono', monospace`

**Spacing scale (4 px base)**
4, 8, 12, 16, 24, 32, 48, 64, 96 — exposed as `--space-1` through `--space-9`

**Radii**
sm 3, md 4, lg 6, xl 9, full

**Elevation**
- 0 — flat
- 1 — `0 1px 3px rgba(0,0,0,0.06)`
- 2 — `0 4px 12px rgba(0,0,0,0.08)`
- 3 — `0 8px 24px rgba(0,0,0,0.12)`

**Motion**
- 100 ms (micro/hover), 200 ms (toggle), 300 ms (accordion), 400 ms (modal)
- ease-out (enter), ease-in (exit)

---

## Assets — what's bundled vs. what's CDN

**Bundled** (in `design-system/assets/logo/`):
- 9 SVG mark variants (light, dark, mono black/white/gray, warm, cool-dot, etc.)
- 6 PNG mark variants (1× at 128 and 256 px)
- favicon-32.png, apple-touch-icon-180.png

**Not bundled (CDN):**
- **Fonts** — Plus Jakarta Sans, Source Sans 3, IBM Plex Mono are loaded via `@import` from Google Fonts inside `colors_and_type.css`. All three are SIL OFL 1.1.
- **Lucide icons** — pulled from `unpkg.com/lucide@latest` at use time. Not bundled by deliberate choice (matches upstream brand recommendation).

If the user wants the fonts self-hosted in the repo (`brand/fonts/`), that's a follow-up task — download `.woff2` files from Google Fonts' CSS API and add a `@font-face`-based version of `colors_and_type.css`.

---

## Open questions to confirm with the user before pushing

1. **Layout decision:** option (a) full structural mirror, or (b) map-into-existing? Default to (b).
2. **Branch + PR or direct push to `main`?** Default to a branch + PR.
3. **Should existing `html/` monolith files be regenerated** from the new split sources, or left alone? Default: leave alone.
4. **Self-host fonts**, or keep Google Fonts `@import`? Default: keep `@import`.
5. **Token file reconciliation** — auto-update `variables.css` / `tokens.json` / `tailwind.config.js` to match `colors_and_type.css`, or surface the diff first? Default: surface the diff.

---

## Files in this handoff

```
design_handoff_projectious_brand/
├── README.md                      ← you are here
├── design-system/                 ← the entire design system, ready to map into the repo
│   ├── README.md
│   ├── SKILL.md
│   ├── colors_and_type.css
│   ├── assets/logo/               (15 files)
│   ├── preview/                   (21 HTML cards + card.css)
│   ├── slides/                    (6 slide templates + index.html)
│   └── ui_kits/
│       ├── marketing-site/        (7 JSX + index.html + README.md)
│       └── agent-console/         (6 JSX + index.html + README.md)
└── screenshots/                   ← visual reference only — NOT for the repo
    ├── slides/
    │   ├── 00-index.png           Slide deck overview
    │   ├── 01-title.png           Title slide
    │   ├── 02-section-statement.png
    │   ├── 03-three-up.png        Three-column layout
    │   ├── 04-quote.png
    │   ├── 05-code-showcase.png
    │   └── 06-cta-closer.png
    └── ui_kits/
        ├── marketing-site-00-top.png         Hero + nav
        ├── marketing-site-01-pillars.png     Three practices
        ├── marketing-site-02-code.png        Code showcase section
        ├── marketing-site-03-convictions.png Convictions section
        ├── agent-console.png                 Pipelines view (light mode)
        └── agent-console-dark.png            Pipelines view (dark mode)
```

> **Note on screenshots:** The `screenshots/` folder is reference material for **you** (Claude Code / the developer) to know what the design system *should look like* once rendered. **Do not commit `screenshots/` to the upstream repo** — only the contents of `design-system/` get mapped into the repo per the mapping table above.
