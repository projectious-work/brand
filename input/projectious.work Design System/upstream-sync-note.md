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

### Structural change to how sizes are emitted

Every size token is now `calc(<px> * var(--font-scale))` rather than a bare px value, with `--font-scale: 1` on `:root`. This is what makes the text-size setting work without per-component edits. The resolved value is identical at `--font-scale: 1`.

**Porting:** the generator needs to wrap type sizes in `calc()` and emit `--font-scale`. Anything that parses `variables.css` expecting a bare px value on these tokens will need updating.

---

## 2 · New tokens

| Token | Value | Why |
|---|---|---|
| `--font-scale` | `1` | Multiplier behind the text-size setting. |
| `--measure` | `65ch` | Comfortable line length for running text. Nothing capped line length before. |
| `--scrim` | `rgba(20,36,56,0.72)` | Modal backdrop. Was ad-hoc per component. |

---

## 3 · Accessibility layer — all opt-in

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

## 4 · Known non-conformance left in place

The default focus ring is `box-shadow: 0 0 0 2px rgba(29,51,82,0.15)` — roughly **1.2:1**, below the 3:1 that WCAG 1.4.11 requires for focus indicators.

It was left as the default deliberately, so that adopting the stylesheet does not change how an existing page renders. `data-focus="strong"` is the conforming ring.

**Recommendation for upstream:** make the strong ring the default in a major version and keep the faint one available as an opt-out. Until then, every new surface should set `data-focus="strong"`.

---

## 5 · Accessibility fixes already ported into this project

Colour corrections applied here that upstream `brand.yaml` may still need, if these were local rather than synced:

- Accent as **text** on light surfaces uses `--orange-11` `#c04424`, never `--orange-9` `#E05232` (3.87:1). Wordmarks are exempt as logotype.
- Muted text roles use step 11 in both modes (`#5c6f82` light, `#97a8b8` dark). Step 8 is a border step and had been used as text in the console theme.
- Light-theme status pills use the `-fg` values (`--color-success-fg`, `--color-warning-fg`), not the solid semantic value, against their tint.

---

## 6 · Audit method, for repeating this upstream

Card and slide fit was verified by loading every artifact in an iframe at its declared size and comparing `body.scrollHeight` / `scrollWidth` against the box, in three states: base, `data-text-spacing="loose"`, and `data-font-size="xxxl"`. Worth wiring into CI upstream — it caught nine clipped preview cards after the type change, plus two that had been mis-sized long before.
