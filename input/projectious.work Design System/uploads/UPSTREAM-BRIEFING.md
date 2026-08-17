# Briefing for the brand-system agent

From: the Hugo theme that consumes `projectious.work Design System`.
Date: 2026-08-16 (revised — round 2).

The theme mirrors `colors_and_type.css` into `src/assets/css/brand-tokens.css`
and styles everything against `var(--*)`. When a token exists upstream, the theme
uses it. Below is what the theme needed and could not find, in the order it
matters.

---

## 1. The overlay, tint and fixed tokens are documented but not shipped

The design-system guide states the rule plainly:

> Overlay alphas and non-theming values are **named tokens**, never literals
> repeated through component CSS: `--scrim-modal`, `--scrim-palette`,
> `--scrim-lightbox`, `--tint-accent-active`, `--shadow-focus-light`,
> `--tint-code-header`, `--tint-highlight-line`, and the three dark code tints.
> Values that must *not* follow the theme … are `--fixed-*`.

`colors_and_type.css` defines exactly one of them: `--scrim`. The other twelve
names appear only in prose. A consumer that follows the rule has nothing to
consume, so the theme defined them locally to the values the guide implies:

| Token | Value the theme adopted | Used for |
|---|---|---|
| `--scrim-modal` | `var(--scrim)` | modal backdrop |
| `--scrim-palette` | `rgba(14,23,32,0.5)` | command-palette backdrop |
| `--scrim-lightbox` | `rgba(14,23,32,0.82)` | image lightbox |
| `--tint-accent-active` | `rgba(224,82,50,0.12)` | active nav row on dark |
| `--tint-code-header` | `rgba(20,36,56,0.03)` | light code-panel bar |
| `--tint-highlight-line` | `rgba(20,36,56,0.06)` | `hl_lines` on light |
| `--tint-dark-code-header` | `rgba(255,255,255,0.04)` | dark code-panel bar |
| `--tint-dark-code-border` | `rgba(255,255,255,0.08)` | its bottom rule |
| `--tint-dark-control-border` | `rgba(255,255,255,0.14)` | controls on dark overlays |
| `--shadow-focus-light` | `rgba(29,51,82,0.15)` | the default focus ring |
| `--fixed-control-text` | `#ffffff` | text on a solid control |
| `--fixed-overlay-solid` | `#0e1720` | `data-transparency="reduced"` fallback |
| `--fixed-overlay-text` | `#c7d3de` | caption text on a dark overlay |

**Ask:** define these in `brand.yaml` so they generate into `variables.css`. If
any value above is wrong, the theme's is the guess — yours is the answer. On
adoption the theme deletes its local block; two definitions of the same name is
the failure mode we want to avoid.

Note `--scrim-modal` also needs the `data-transparency="reduced"` override that
`--scrim` already has, or the two diverge under that setting.

## 2. `--fixed-*` has no print story

The guide names print as a `--fixed-*` context but ships no print tokens, so
there is no token expressing "the light value, always" — which is what a print
stylesheet needs, since paper does not follow `data-theme`. The theme has now
defined the set locally and `print.css` carries no literals:

`--fixed-print-bg` `#ffffff` · `--fixed-print-text` `#142438` ·
`--fixed-print-muted` `#546a82` · `--fixed-print-border` `#cdd0d5` ·
`--fixed-print-panel` `#f1f2f4` · `--fixed-print-panel-bar` `#e6e8ec`

**Ask:** adopt these upstream, same as §1.

## 3. Navy dark's derivative status is not machine-readable

The guide is clear that navy overrides only midnight steps 1–5 plus the surfaces,
borders and neutral tag background, and that code/terminal panels stay on
`#0e1720` deliberately. In the stylesheet that intent is implicit in which
declarations happen to appear inside the navy block. A consumer auditing "did I
miss a navy override?" has to diff by hand. A comment header listing the
overridden set, or a generated `navy-overrides` manifest, would make the contract
checkable.

## 4. The focus-ring default is a known non-conformance every consumer inherits

`box-shadow: 0 0 0 2px rgba(29,51,82,0.15)` measures ~1.2:1 and fails WCAG
1.4.11; `data-focus="strong"` is the conforming ring. The theme sets the strong
ring, but the default is what an unmodified adopter gets. Worth considering
whether the compatibility argument still outweighs shipping a failing default —
and if it does, the guide should say so at the point where the token is defined,
not only in the accessibility section.

## 5. Two smaller ones

- **Iconography drift.** The guide specifies Tabler; `upstream-sync-note.md`
  records that upstream `brand/` still recommends Lucide. The theme bundles 38
  Tabler icons and resolves the rest from a module. Pick one upstream so the note
  can be retired.
- **Icons are CDN-at-use-time.** That is stated as the rule, but a documentation
  site that must build offline or pin a supply chain cannot follow it. The theme
  vendors what it needs. A published, versioned subset would be better than every
  consumer choosing its own escape hatch.

---

## What the theme guarantees in return

- No hand-edits to token *values*. `brand-tokens.css` is a mirror; drift is a bug.
  The one exception is the locally-defined sets in §1, §2 and §6, which exist
  only because upstream has no definition to mirror — each is deleted on adoption.
- No literal colour in component CSS. `scripts/` and `TESTING.md` carry the audit.
- Step-role discipline: only 11 and 12 as text, step 9 never as text, `-fg` on
  its matching `-bg`, `--color-accent-solid` under white text.
- Every appearance exercised: light, navy dark (default), deep dark.

## 6. Also missing from the shipped sheet: code panel, tag, elevation, hero

The same shape of gap as §1 — documented in prose, absent from
`colors_and_type.css`. The theme has defined all of these locally and will drop
its copies when they land upstream:

| Token | Theme value | Why it is needed |
|---|---|---|
| `--code-panel-surface` | `#131e2b` | The guide's own syntax section specifies code on this, one step above the terminal |
| `--code-panel-border` | `#263f5a` | — |
| `--code-panel-foreground` | `#c5daf0` | — |
| `--code-panel-selection-{bg,fg}` | `#20354d` / `#c5daf0` | The page-level orange selection tint is unreadable on a code panel |
| `--code-panel-light-selection-{bg,fg}` | `#dae2ec` / `#142438` | Same, for the light adaptive panel |
| `--terminal-border` | `#263f5a` | The terminal surface ships without its rim |
| `--color-tag-{bg,fg}` | `--midnight-2` / secondary text | The guide says tags are a solid pale tint with no outline; there is no token pair for it |
| `--elevated-1..3` | surface / `--midnight-dark-4` / `-5` | The guide requires pairing `--shadow-N` with `--elevated-N`, but only the shadows ship |
| `--focus-ring-strong` | `--color-accent-solid` light, `--orange-11` dark | See §4 |
| `--hero-{title-size,lede-size,pad-block}` | display / body-l / 88px 72px | Named hero roles, so the marketing surface stops restating ramp literals |

Selection is worth singling out. Nothing in the system says what selected code
should look like, so every consumer inherits `::selection { background:
var(--orange-3) }` over a dark panel. Both pairs above measure ≥ 4.5:1 and were
verified with a real DOM selection.

## 7. `_audit.html` passes text that fails

The audit page reports `ALL CLEAR` while treating **3:1 as sufficient for every
text pair**. 3:1 is the large-text and UI-boundary threshold; normal text needs
4.5:1 (WCAG 1.4.3). Two consequences: the page cannot fail a body-text
regression, and it does not test selection colours at all — which is why §6's
selection gap went unnoticed upstream and was found downstream.

**Ask:** split the thresholds (4.5:1 normal, 3:1 large/UI), and add the code
selection pairs as test cases.

## 8. Contradictions in the source that block a clean implementation

An implementer cannot infer the intended rule while these stand. Listed with the
reading the theme adopted, so a decision either confirms or corrects it:

| Contradiction | Theme's reading |
|---|---|
| README says code *and* terminal panels both stay on `#0e1720`; the syntax section and the syntax preview specify code on `#131e2b` | `#131e2b` for code, `#0e1720` for terminal — the later text is the coherent one |
| README card recipe says `background: var(--color-surface)`; `components-cards.html` uses `var(--bg)` | `--elevated-1`, which resolves to the surface — see §6 |
| `type-code.html` says its specimen sits on `--terminal-surface`; it actually uses the code panel | The description is wrong, not the specimen |
| Root light semantic values differ from the explicit `[data-theme="light"]` values the previews use | Publish one authoritative light set; the theme currently follows the `[data-theme="light"]` block |
| README requires lowercase hex; the sheet shipped `#E05232` | Lowercased locally |
| Icon guidance names Tabler, one checklist line still says prefer Lucide | Tabler; the Lucide line is stale (also §5) |

## 9. State the font-delivery contract for themes

The README calls Google Fonts the canonical channel and says no WOFF2 files are
bundled. A distributable theme cannot do that: a documentation site has to build
offline and send no third-party request. The theme bundles instead — which
surfaced two things the system should specify:

- **Which cuts must ship.** The syntax contract carries role identity in weight
  and italic as well as hue (keyword 700, type 600, function 500, comment
  italic), so IBM Plex Mono needs 400/500/600/700 in **both** styles. Ship fewer
  and the browser synthesises a faux oblique and no bold, and the roles stop
  being tellable apart in greyscale — exactly what the second channel exists to
  prevent. The theme was shipping 400 and 500 upright only.
- **How consumers may replace them.** An explicit theme profile — the file list,
  the licence obligations, and the opt-out — beats every adopter inventing one.

## What the theme guarantees in return

Reply into this file or open an issue against the theme; the theme syncs from
`colors_and_type.css` and will pick up anything you land there.
