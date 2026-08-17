# Upstream sync note — for `projectious-work/brand`

Changes made in the design-system project that are **not** in `src/data/brand.yaml` and will be **lost on the next downstream sync** unless ported upstream. Two groups: a type-scale change to existing tokens, and a new accessibility layer.

Everything below lives in `colors_and_type.css` (the mirror of `brand/tokens/variables.css`).

---

## 1 · Type scale — readable band lifted one step

The small end of the scale was too tight for body reading. Display, H1 and H2 are unchanged, so the display hierarchy and the 1280×720 slide layouts still hold.

| Token | Upstream | Local |
|---|---|---|
| `--type-body-size` | 14px | **16px** |
| `--type-body-l-size` | 16px | **18px** |
| `--type-caption-size` | 12px | **13px** |
| `--type-overline-size` | 11px | **12px** |
| `--type-code-size` | 13px | **14px** |
| `--type-h5-size` | 15px | **17px** |
| `--type-h4-size` | 18px | **20px** |
| `--type-h3-size` | 22px | **24px** |
| `--type-h2-size` | 28px | 28px |
| `--type-h1-size` | 36px | 36px |
| `--type-display-size` | 48px | 48px |

Body at 16px also matches the browser default, so user zoom behaves as expected.

**Porting:** update the `type` block in `brand.yaml` and regenerate. Downstream consumers reading `--type-*-size` need no changes.

## 2 · Type scale structural change

Every size token is now `calc(<px> * var(--font-scale))` rather than a bare px value, with `--font-scale: 1` on `:root`. This is what makes the text-size setting work without per-component edits. The resolved value is identical at `--font-scale: 1`.

**Porting:** the generator needs to wrap type sizes in `calc()` and emit `--font-scale`. Anything that parses `variables.css` expecting a bare px value on these tokens will need updating.

---

## 3 · Font import — italic and bold cuts of IBM Plex Mono

The `@import` loaded IBM Plex Mono at `wght@400;500` with **no italic axis**. Every `font-style: italic` in the code-block components was therefore a browser-synthesised faux oblique, and no bold cut existed for keywords.

Now:

```
IBM+Plex+Mono:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500
```

**Porting:** update the font list wherever upstream generates the `@import`. Costs two extra font files; without them the syntax weight/italic semantics below silently degrade.

---

## 4 · Syntax roles — light set re-pitched for hue separation, and typographic semantics

The light companion set shipped at ~4.7–6.5:1. Several roles read as washed out on the light panel, so every role was darkened to clear **7:1**:

| Token | Was | Now | Ratio on `#f4f5f7` |
|---|---|---|---|
| `--syntax-plain-light` | `#142438` | `#0f1c2e` | 15.70 |
| `--syntax-keyword-light` | `#1d3352` | `#16294a` | 13.27 |
| `--syntax-string-light` | `#a8461f` | `#8a3612` | 7.36 |
| `--syntax-number-light` | `#8b6508` | `#6b4e05` | 7.08 |
| `--syntax-type-light` | `#276754` | `#1c5442` | 8.03 |
| `--syntax-function-light` | `#3a5a82` | `#2c4a6e` | 8.33 |
| `--syntax-operator-light` | `#4a5e74` | `#3d4f63` | 7.71 |
| `--syntax-macro-light` | `#1c6b6b` | `#12544f` | 8.00 |
| `--syntax-invalid-light` | `#a8261c` | `#8c1d14` | 8.37 |
| `--syntax-comment-light` | `#5c6f82` | `#4a5c6e` | 6.32 |

Comment stays deliberately below the rest — it is the one role meant to recede — but is up from 4.75.

On the dark set, `--syntax-comment` `#72889d` measured **3.49:1**, below the 4.5 floor. Now `#7d90a3` (5.50).

### Weight and style are part of the palette

Both sets now carry structure in a second channel: keyword 700, type 600, escape 600, function 500, comment and attribute italic. Worth adopting upstream so the two stay in step.

---

## 5 · New tokens

| Token | Value | Why |
|---|---|---|
| `--font-scale` | `1` | Multiplier behind the text-size setting. |
| `--measure` | `65ch` | Comfortable line length for running text. Nothing capped line length before. |
| `--scrim` | `rgba(20,36,56,0.72)` | Modal backdrop. Was ad-hoc per component. |

---

## 6 · Accessibility layer — all opt-in

A new section at the end of the stylesheet. **Nothing applies until an attribute is set on `<html>`**, so this is additive for every existing consumer.

### Attribute settings

| Attribute | Values | Effect |
|---|---|---|
| `data-a11y` | `auto` | Follow `prefers-reduced-motion`, `prefers-reduced-transparency`, `prefers-contrast`. |
| `data-font-size` | `lg` `xl` `xxl` `xxxl` | `--font-scale` 1.125 / 1.25 / 1.5 / 2. |
| `data-contrast` | `high` | Solid borders, text roles at scale extremes. Light + dark variants. |
| `data-focus` | `strong` | 2px solid `midnight-9`, 2px offset. |
| `data-link-underline` | `on` | Underline links in running text. |
| `data-motion` | `reduced` | Near-zero transitions. |
| `data-transparency` | `reduced` | No `backdrop-filter`; opaque scrim. |
| `data-text-spacing` | `loose` | WCAG 1.4.12 minimums — a clipping diagnostic. |
| `data-theme` | `light` | Explicit opt-out of `prefers-color-scheme: dark`. New; `dark` already existed. |

### Utility classes

`.sr-only`, `.sr-only-focusable`, `.skip-link`, `.target`, `.measure`, `.link-plain`.

**Porting:** these are hand-written CSS rules, not generated values — they belong in whatever part of the upstream pipeline owns base element styles, not in `brand.yaml`.

---

## 7 · Icon set — Lucide replaced by Tabler

Upstream `brand/html/projectious-digital-experience.html` specifies **Lucide** (ISC). This project now uses **[Tabler Icons](https://tabler.io/icons)** (MIT) instead.

| | Lucide | Tabler |
|---|---|---|
| Licence | ISC | MIT |
| Grid | 24 px | 24 px |
| Native stroke | 2 px | 2 px |
| Brand stroke | 1.5 px (override) | 1.5 px (override) |
| Caps / joins | round | round |
| Count | ~1,500 | ~6,200 |

The brand's icon rules are unchanged — 24 px grid, 1.5 px stroke, round caps, stroke-only, single colour — because both sets are drawn to the same conventions and Tabler explicitly supports varying `stroke-width`. Only the source library changes.

**Delivery:** per-icon SVG from jsDelivr (`@tabler/icons@latest/icons/outline/<name>.svg`) or the webfont (`@tabler/icons-webfont`). Not bundled.

**React surfaces must inline the SVG.** Icon scripts that mutate the DOM after load are overwritten on the next React re-render — `ui_kits/agent-console/Topbar.jsx` inlines Tabler's `sun`/`moon` paths for this reason.

**Porting:** update the iconography section of the upstream digital-experience doc, and the licence row in `brand/PROVENANCE.md` (ISC → MIT). Note Tabler also ships a *filled* variant — the brand uses outline only, so that should be stated explicitly upstream.

---

## 8 · Navy dark adopted; two syntax values held back

Synchronized from the downstream Hugo theme briefing (§2–§9). Adopted in full:

- **Navy dark** as a third appearance, expressed as a derivative of deep dark (midnight 1–5 plus the surfaces, borders and neutral tag background that read off them) rather than a partial patch. *(Since §9, navy is the default dark and the override block is the deep one, `[data-theme="dark"][data-surface="deep"]`; the resolved values are unchanged.)*
- **Overlay, scrim and fixed-UI values promoted to named tokens** (`--scrim-*`, `--tint-*`, `--shadow-focus-light`, `--fixed-*`), so component CSS carries no bare `rgba()` literals.
- **Hex casing normalised to lowercase** in the token source.
- Terminal light/dark and high-contrast light/dark were already identical to the briefing — verified value by value, no change needed.

**Two values NOT adopted — please take these back upstream.** Both are places where this project's value is measurably more accessible than the briefing's, and adopting the briefing verbatim would regress a fix made in response to a real readability complaint:

| Role | Briefing | Here | On its panel |
|---|---|---|---|
| `syntax-light` (all ten roles) | `plain #142438`, `comment #5c6f82`, `keyword #1d3352`, `string #a8461f`, … | `plain #0f1c2e`, `comment #5e7082`, `keyword #b3197a`, `string #c04410`, … | both sit at AA; the briefing's roles are near-monochrome blues and browns, ours are hue-separated (magenta keyword, green type, blue function, teal macro) so roles are tellable apart at a glance |
| `syntax-dark` `comment` | `#72889d` | `#7d90a3` | 4.62:1 → **5.50:1** |

The briefing's light syntax set is near-monochrome: keyword `#1d3352`, function `#3a5a82` and plain `#142438` are three shades of the same navy, so a light code block reads as black-and-white text. Contrast is not the problem there — hue separation is. Ours assigns each role its own hue at the same AA level.

Also unaddressed upstream, and worth adding to §7 of the briefing: **the light and dark syntax palettes carry no weight or style channel.** Colour alone fails greyscale, colour-blindness and projection. This project pairs every role with a weight/italic (keyword 700, type 600, invalid 600, function 500, comment and decorator italic) in both palettes — see the README table.

## 9 · Navy is the default dark here, deep dark is the opt-out

The briefing (§2) resolves automatic and unqualified dark to **deep dark**, with navy behind `data-surface="navy"`. This project inverts that: unqualified dark resolves to **navy**, and deep dark is reached with `data-surface="deep"`. Both appearances keep the same resolved values — only which one is the default changed.

Reason: deep dark's page sits at `midnight-1`, the very bottom of the ramp, so every raised surface has to climb from the floor. Across a full interface it reads as heavy, and panels separate poorly. Navy's page starts at `#132440`, leaving room above it — a code panel can even sit *below* the page tone and still read as inset. Recommend the upstream generator make the same switch, or at minimum expose the default as a configurable rather than a fixed mapping.

## 10 · Gaps found while adopting the briefing — also worth fixing upstream

Applying §2–§10 across every specimen surfaced four token gaps the briefing does not cover. All four are fixed here and should be added to the upstream source:

1. **Text on a solid status fill.** The briefing gives `success/warning/danger/info` solids for both modes but no on-colour. The dark solids are light tints — white on `#f08b80` is **2.41:1**. Added `--on-solid-<role>`: white on light, `#0e1720` on dark.
2. **Elevation on dark.** `shadows` are fixed `rgba(0,0,0,…)`; on a dark page there is nothing to darken, so all four levels look identical. Added `--elevated-0…3` (the midnight ramp) and deeper dark shadow alphas — the surface step is what the eye reads.
3. **High contrast missed the alias layer.** The briefing's high-contrast block sets text/border roles only. Any component consuming the short aliases (`--fg-1/2/3`, `--border`) was unaffected, so the setting did almost nothing. Those must be overridden too.
4. **Code and terminal share one dark surface.** The briefing has `terminal-dark.surface` only, so a code block sits on the same near-black as a terminal and reads as a hole in the page. Split them: `--code-panel-surface` `#131e2b` for code, `#0e1720` for terminal. `#131e2b` is the ceiling — one step further breaks AA on `invalid`.
5. **`pre` pins the dark terminal surface.** With `pre { background: var(--terminal-surface) }` in the base sheet, an opt-in light code panel still paints dark under light-set roles. Any light-code path has to neutralise it.

## 11 · Navigation highlighting defect (§1) — not applicable here

The `var`-hoisting defect in `assets/js/interactions.js` is a Hugo-theme bug; this project ships no navigation JS, so there is nothing to port. Recorded so the item is not lost: the fix is block-scoped `tocLinks` / `sidebarLinks`, and — the part most likely to be missed — `aria-current="page"` (sidebar) and `aria-current="location"` (TOC) must be **different attribute values**, so heading tracking can never overwrite the current-page state.

## 12 · Known non-conformance left in place

The default focus ring is `box-shadow: 0 0 0 2px rgba(29,51,82,0.15)` — roughly **1.2:1**, below the 3:1 that WCAG 1.4.11 requires for focus indicators.

It was left as the default deliberately, so that adopting the stylesheet does not change how an existing page renders. `data-focus="strong"` is the conforming ring.

**Recommendation for upstream:** make the strong ring the default in a major version and keep the faint one available as an opt-out. Until then, every new surface should set `data-focus="strong"`.

---

## 13 · Accessibility fixes already ported into this project

Colour corrections applied here that upstream `brand.yaml` may still need, if these were local rather than synced:

- Accent as **text** on light surfaces uses `--orange-11` `#c04424`, never `--orange-9` `#E05232` (3.87:1). Wordmarks are exempt as logotype.
- Muted text roles use step 11 in both modes (`#5c6f82` light, `#97a8b8` dark). Step 8 is a border step and had been used as text in the console theme.
- Light-theme status pills use the `-fg` values (`--color-success-fg`, `--color-warning-fg`), not the solid semantic value, against their tint.

---

## 15 · Round-2 briefing from the Hugo theme — what changed here

The theme's second briefing (`uploads/UPSTREAM-BRIEFING.md`) asked for thirteen §1 tokens and a print set it had defined locally. Most of §1 had already shipped by the time it was written — the theme was mirroring an older `colors_and_type.css`. What was genuinely missing, and is now in the sheet, needs porting upstream:

| Token | Value | Note |
|---|---|---|
| `--fixed-print-text` | `#142438` | The print set was `--fixed-print-code-*` and `-page` only |
| `--fixed-print-muted` | `#546a82` | |
| `--fixed-print-border` | `#cdd0d5` | |
| `--fixed-print-panel` | `#f1f2f4` | |
| `--fixed-print-panel-bar` | `#e6e8ec` | |
| `--code-panel-foreground` | `#c5daf0` | Panel shipped without its ink |
| `--code-panel-selection-bg` / `-fg` | `#20354d` / `#c5daf0` | 8.9:1 |
| `--code-panel-light-selection-bg` / `-fg` | `#dae2ec` / `#142438` | 12.1:1 |
| `--focus-ring-default` | → `--shadow-focus-light` | The ring is a token now, not a literal in the rule |
| `--focus-ring-strong` | `--midnight-9` light / `--midnight-12` dark | `data-focus="strong"` reads the token; the dark override is no longer a separate rule |
| `--hero-title-size` / `--hero-lede-size` / `--hero-pad-block` / `--hero-pad-inline` | display / body-l / 88px / 72px | Named hero roles |

Also changed, and the more consequential fix:

- **`::selection` was broken in dark.** It was `--orange-3` under `--color-primary-dark` — in the dark appearances that is `#3d1e13` under `#132440`, about **1.2:1**. It is now `--orange-3` under `--orange-12`, which follows the theme: 7.4:1 light, 10.1:1 dark. Upstream has the same defect if it ships the same rule.
- **`data-transparency="reduced"` now solidifies all three scrims**, not just `--scrim`.
- **IBM Plex Mono italic 600 and 700 added to the `@import`** (`1,600;1,700`). Without them the bold-italic combinations in the syntax contract synthesise.
- **A print stylesheet can now be literal-free**, which was the point of `--fixed-*`.

### Not adopted

- **The theme's alias names.** `--tint-dark-code-header`, `--tint-dark-code-border`, `--tint-dark-control-border`, `--fixed-overlay-solid`, `--fixed-overlay-text` and `--color-tag-{bg,fg}` all exist upstream under different names (`--tint-code-header-dark`, `--tint-code-divider-dark`, `--tint-code-control-dark`, `--fixed-reduced-transparency-bg`, `--fixed-code-control-text`, `--tag-bg` / `--tag-text`). Two names for one value is the failure mode; the mapping is in `UPSTREAM-REPLY.md`.
- **`--code-panel-border` / `--terminal-border` at `#263f5a`.** Both ship at `#2e4b68` (midnight-dark-6). `#263f5a` is step 5 — a hover-background step, not a border step.
- **`--focus-ring-strong` from the accent.** The theme proposed `--color-accent-solid` / `--orange-11`; the shipped ring is `--midnight-9` / `--midnight-12` at 8.59:1. The accent is the identity colour and reads as a state, not a focus indicator.

### Still open

The **failing default focus ring** (§12 above, §4 of the briefing). The theme is right that every unmodified adopter inherits a 1.2:1 indicator. It is now at least a token, and the non-conformance is stated where the token is defined rather than only in the accessibility section — but the default itself is unchanged, because flipping it changes the rendered appearance of every existing consumer. That is a version decision, not a token decision.

---



## 14 · Audit method, for repeating this upstream

Card and slide fit was verified by loading every artifact in an iframe at its declared size and comparing `body.scrollHeight` / `scrollWidth` against the box, in three states: base, `data-text-spacing="loose"`, and `data-font-size="xxxl"`. Worth wiring into CI upstream — it caught nine clipped preview cards after the type change, plus two that had been mis-sized long before.

**Contrast thresholds (fixed in round 2).** `preview/_audit.html` was treating **3:1 as sufficient for every text pair**, so it could not fail a body-text regression. It now applies WCAG 1.4.3 properly — 4.5:1 for normal text, 3:1 only for large text (≥24px, or ≥18.66px at weight ≥700) — and additionally measures the three selection token pairs, which is what found the dark-mode `::selection` defect above. Both changes belong in whatever runs this upstream.

The stricter threshold immediately found nine failures that the 3:1 audit had been passing. Two were the documented logotype exemption (the wordmark's "work" at 3.87:1) and are now skipped by selector rather than by silence. The other seven were real and are fixed:

| Pair | Was | Now |
|---|---|---|
| `--tag-text-accent` on `--tag-bg-accent`, light | `#c04424` — 4.10 | `#6e2714` (orange-12) — **8.54** |
| Text on `--terminal-active-tab-fill` | white — 3.76 | new token `--terminal-active-tab-text` `#0e1720` — **4.81** |
| `--terminal-light-inactive-tab-and-pane-label` on the light status bar | `#5c6f82` — 4.22 | `#4a5e74` (slate-10) — **5.44** |
| Input placeholder on a semantic tint | `--fg-3` — 4.41 | `--fg-2` — **4.74** |

The active-tab one is the same class of defect as the status solids: an accent fill at `orange-9` cannot carry white text (3.76:1), so the ink has to go dark. Upstream ships `--terminal-active-tab-fill` with no companion text token, so every terminal config has to guess.

The placeholder one generalises: **the muted role (step 11) is measured against the page and the raised surface, not against a semantic tint.** On a tint, use `--fg-2` or the tint's own `-fg`.
