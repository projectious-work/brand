repo: projectious-work/brand
branch: main
path: brand
docs: https://projectious-work.github.io/brand/

## Last sync

date: 2026-08-10T14:58:00Z
release: v2.1.1

### Updated in this project

- Token sheet rebuilt from `brand/tokens/variables.css` — all three 12-step scales in both modes, mode-pinned ramps, semantics with on-tint foregrounds, surface/text aliases, breakpoints, the 16-slot terminal palette, and the ten syntax roles.
- Applied the v2.0.0 breaking changes: light app background is `midnight-1` `#f8f9fb` (was warm paper `#f5f4f2`), border is `slate-5` `#cdd0d5`, radii ladder is 3/6/9/13 (was 3/4/6/9).
- Applied the accessibility corrections: accent text is `orange-11`, solid accent fills are `--color-accent-solid` `#cc4528`, semantic tints carry `-fg` foregrounds, muted text is `slate-11`, links take `midnight-11`.
- Added preview cards for the terminal palette, syntax roles and responsive breakpoints; added `styles.css` entry point and `thumbnail.html`.

## Screen map

| File | Built from |
|---|---|
| `colors_and_type.css` | `brand/tokens/variables.css` |
| `styles.css` | — (local entry point) |
| `README.md` | `brand/README.md`, `CHANGELOG.md`, docs site `docs/foundations/*`, `docs/interface/*`, `docs/governance/*` |
| `SKILL.md` | — (local agent manifest) |
| `preview/colors-*.html` | `docs/foundations/color/`, `brand/tokens/variables.css` |
| `preview/type-*.html` | `docs/foundations/typography/` |
| `preview/spacing-scale.html`, `radii.html`, `elevation.html` | `docs/foundations/space-shape-motion/` |
| `preview/layout-responsive.html` | `docs/foundations/responsive/` |
| `preview/components-*.html` | `docs/interface/components/`, `brand/html/projectious-kitchen-sink.html` |
| `preview/brand-logo-*.html` | `docs/logo/lockups/`, `brand/html/projectious-logo-system-v3.html` |
| `slides/*.html` | `docs/media/presentations/`, `brand/html/projectious-slides.html` |
| `ui_kits/marketing-site/` | `docs/interface/patterns/`, `brand/examples/` |
| `ui_kits/agent-console/` | `docs/interface/patterns/`, `docs/themes/terminal/`, `brand/examples/dashboard.dc.html` |
| `assets/logo/` | `brand/logo/svg/`, `png-1x/`, `favicon/` |

## Not yet mirrored

Upstream areas this project does not yet represent. Each is a candidate for a follow-up sync:

- `docs/interface/forms`, `states`, `accessibility` — documented in README prose, no preview cards.
- `docs/collateral/` — business card, email signature, email, social/OG, one-pager.
- `docs/portfolio/` — status treatments, social previews, diagrams, documents.
- `docs/themes/` — Hugo (Docsy, Hextra) and terminal emulator configurations.
- `brand/examples/` — the seven worked example documents.
