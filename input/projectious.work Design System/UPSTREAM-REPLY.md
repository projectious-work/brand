# Reply to the Hugo theme briefing (round 2)

To: the theme that consumes `projectious.work Design System`.
Date: 2026-08-16. Source of truth: `colors_and_type.css` at this commit.

Sync `colors_and_type.css` and delete every local block described below. Answers
are in your section order.

---

## §1 — Overlay, tint and fixed tokens

**They ship. Your mirror is stale.** Eleven of the thirteen were already in the
sheet when you wrote the briefing; two exist under different names. Nothing here
needs adding, but three of your adopted values differ from ours — take ours.

| Your name | Upstream name | Upstream value |
|---|---|---|
| `--scrim-modal` | `--scrim-modal` | `rgba(20,36,56,0.72)` (not `var(--scrim)` — same value, own name) |
| `--scrim-palette` | `--scrim-palette` | `rgba(14,23,32,0.50)` |
| `--scrim-lightbox` | `--scrim-lightbox` | `rgba(14,23,32,0.82)` |
| `--tint-accent-active` | `--tint-accent-active` | `rgba(224,82,50,0.12)` |
| `--tint-code-header` | `--tint-code-header` | `rgba(20,36,56,0.03)` |
| `--tint-highlight-line` | `--tint-highlight-line` | `rgba(20,36,56,0.06)` |
| `--shadow-focus-light` | `--shadow-focus-light` | `rgba(29,51,82,0.15)` |
| `--tint-dark-code-header` | **`--tint-code-header-dark`** | `rgba(255,255,255,0.04)` |
| `--tint-dark-code-border` | **`--tint-code-divider-dark`** | `rgba(255,255,255,0.08)` |
| `--tint-dark-control-border` | **`--tint-code-control-dark`** | `rgba(255,255,255,0.14)` |
| `--fixed-control-text` | `--fixed-control-text` | `#ffffff` |
| `--fixed-overlay-solid` | **`--fixed-reduced-transparency-bg`** | `#0e1720` |
| `--fixed-overlay-text` | **`--fixed-code-control-text`** | `#c7d3de` |

The naming convention is `-dark` as a **suffix**, matching every other
mode-pinned token in the sheet (`--midnight-dark-4`, `--color-surface-dark`,
`--syntax-plain-light`). Please rename rather than aliasing — two names for one
value is the failure mode you named, and it applies to names as well as values.

**Fixed:** `data-transparency="reduced"` now overrides `--scrim-modal`,
`--scrim-palette` and `--scrim-lightbox` alongside `--scrim`. Your note was
right that they diverged.

## §2 — Print

**Adopted, with two of your six already present.** The complete fixed print set
is now:

`--fixed-print-page` `#ffffff` · `--fixed-print-text` `#142438` ·
`--fixed-print-muted` `#546a82` · `--fixed-print-border` `#cdd0d5` ·
`--fixed-print-panel` `#f1f2f4` · `--fixed-print-panel-bar` `#e6e8ec`

Your `--fixed-print-bg` is `--fixed-print-page` (it shipped). Also already
present and worth using instead of your locals: `--fixed-print-code-bg`,
`--fixed-print-code-border`, `--fixed-print-code-text`,
`--fixed-print-external-url`. The README now names print as a `--fixed-*`
context with the full list.

## §3 — Navy's derivative status

**Adopted, and the direction has flipped since your briefing.** Navy is the
default dark here; deep dark is the opt-in (`data-surface="deep"`). So the
override block is the *deep* one, and the manifest documents that. It is printed
in the sheet immediately above the block:

```
--midnight-1 --midnight-2 --midnight-3 --midnight-4 --midnight-5
--color-bg --color-surface --color-border
--bg --surface --surface-2 --border --border-strong --tag-bg
```

Fourteen names, complete. `--elevated-*` and `--rim-*` resolve through
`--midnight-*`, so they follow without being restated — that is the mechanism, so
if you find yourself overriding an `--elevated-*` directly, something is wrong.

Reasoning for the flip is in `README.md` under *Three appearances* and in
`upstream-sync-note.md` §9. Your `data-surface="navy"` needs to become
`data-surface="deep"` on the opposite branch.

## §4 — The failing default focus ring

**Half.** The ring is now a token — `--focus-ring-default` (faint, ~1.2:1) and
`--focus-ring-strong` (`--midnight-9` light, `--midnight-12` dark, 8.59:1) — and
the non-conformance is stated at the point of definition, as you asked, not only
in the accessibility section. `data-focus="strong"` reads the token, so the ring
re-picks per appearance without a separate rule per theme.

**The default is unchanged.** Flipping it changes the rendered appearance of
every existing consumer, which is a major-version decision rather than a token
one; it is logged as open in `upstream-sync-note.md` §12 and §15. Keep setting
`data-focus="strong"` — that remains the recommendation for every new surface.

Not adopted: `--focus-ring-strong` from `--color-accent-solid` / `--orange-11`.
The accent is the identity colour and already means *active state*; a focus
indicator that borrows it is ambiguous, and midnight measures better anyway.

## §5 — Icons

**Tabler, settled.** The README's iconography section is Tabler-only. The Lucide
line you found is provenance, not guidance: upstream `brand/` specifies Lucide
and this project substitutes Tabler, which the licence inventory has to record
(ISC → MIT). `upstream-sync-note.md` §7 is the porting instruction for upstream,
not an open question — it stays until upstream lands it.

**Vendoring is now permitted explicitly.** See *Distributable-theme profile* in
the README: outline set only, native 24 px grid, `stroke-width` overridden to
1.5 rather than re-drawn, MIT licence file shipped, no second library to fill
gaps. A published subset is a reasonable ask and is not something this project
can produce; the profile makes your vendoring conformant in the meantime.

## §6 — Code panel, tag, elevation, hero

| Your token | Status |
|---|---|
| `--code-panel-surface` `#131e2b` | Shipped already |
| `--code-panel-border` | Shipped at **`#2e4b68`**, not `#263f5a` — step 5 is a hover-background step; borders take 6 |
| `--code-panel-foreground` | **Added**, `#c5daf0` |
| `--code-panel-selection-{bg,fg}` | **Added**, `#20354d` / `#c5daf0` |
| `--code-panel-light-selection-{bg,fg}` | **Added**, `#dae2ec` / `#142438` |
| `--terminal-border` | Shipped at `#2e4b68` |
| `--color-tag-{bg,fg}` | Exists as **`--tag-bg` / `--tag-text`** (plus `--tag-bg-accent` / `--tag-text-accent`); use those |
| `--elevated-1..3` | Shipped, all three appearances |
| `--focus-ring-strong` | **Added** — see §4 for the value |
| `--terminal-active-tab-text` | **Added**, `#0e1720` (+ `--terminal-light-active-tab-text`) — white on the `orange-9` fill is 3.76:1 |
| `--hero-{title-size,lede-size,pad-block}` | **Added** as `--hero-title-size`, `--hero-lede-size`, `--hero-pad-block`, `--hero-pad-inline` (88px / 72px) |

**You found a real defect with selection, and it was worse than you thought.**
The base rule was `::selection { background: var(--orange-3); color:
var(--color-primary-dark) }`. `--orange-3` follows the theme; `--color-primary-dark`
does not. In both dark appearances that is `#3d1e13` under `#132440` — about
**1.2:1**, so selected body text in dark mode was effectively invisible. It is
now `--orange-3` under `--orange-12`: 7.4:1 light, 10.1:1 dark.

The base sheet also applies your code pair for you: `pre::selection` takes the
code-panel pair, and a light code specimen opts in with
`data-code-surface="light"`. You should not need a selection rule at all.

## §7 — The audit page

**Adopted.** `preview/_audit.html` now applies 4.5:1 to normal text and 3:1 only
to large text (≥24px, or ≥18.66px at weight ≥700), computed per element from its
own font size and weight; failures print the threshold they missed. Input values
and placeholders go through the same function — the old code held placeholders to
3:1, which was wrong twice over.

It also measures the three selection token pairs per appearance, which is the
check that would have caught §6 upstream.

**The stricter threshold found seven real failures the 3:1 audit had been
passing.** All are fixed in the sheet; sync picks them up:

| Pair | Was | Now |
|---|---|---|
| `--tag-text-accent` on `--tag-bg-accent`, light | `#c04424`, 4.10 | **`#6e2714`** (orange-12), 8.54 |
| Text on `--terminal-active-tab-fill` | white, 3.76 | new **`--terminal-active-tab-text`** `#0e1720`, 4.81 (light variant too) |
| `--terminal-light-inactive-tab-and-pane-label` | `#5c6f82`, 4.22 | **`#4a5e74`**, 5.44 |
| Input placeholder on a semantic tint | `--fg-3`, 4.41 | `--fg-2`, 4.74 |

Two more were the logotype exemption (WCAG 1.4.3 exempts logotypes; the wordmark
sets "work" in the accent at 3.87). The audit now skips them by selector rather
than by threshold, so the exemption is visible in the code.

The placeholder case generalises into a rule worth encoding in your own audit:
**the muted role (step 11) is measured against the page and the raised surface,
not against a semantic tint.** On a tint, use `--fg-2` or the tint's own `-fg`.

## §8 — Contradictions

| Contradiction | Resolution |
|---|---|
| Code vs terminal surface | **Your reading is right.** `--code-panel-surface` `#131e2b` for code, `--terminal-surface` `#0e1720` for terminal. The README's *Terminal & syntax* bullet describes the terminal only; the *dark surfaces* table already states both. Both README passages are now consistent |
| Card recipe `--color-surface` vs `--bg` | **`--elevated-1`**, as you read it. The README recipe and `preview/components-cards.html` both use it now; the specimen was also carrying a literal shadow, which is `var(--shadow-1)` |
| `type-code.html` description | **Description was wrong**; it now says `--code-panel-surface`. The specimen was right |
| Root light vs `[data-theme="light"]` | **The `[data-theme="light"]` block is authoritative** — you followed the right one. The `:root` defaults are the older semantic values and are being reconciled to it; until then, pin `data-theme` |
| Lowercase hex | Sheet is lowercase throughout; `#E05232` is gone |
| Tabler vs Lucide | Tabler — see §5 |

## §9 — Font delivery

**Adopted as a written profile.** README → *Files & fonts notes* → *Distributable-theme
profile*. Self-hosting is permitted for all three families (SIL OFL 1.1; ship the
licence, do not rename the families), and the required cuts are listed:

- Plus Jakarta Sans 400 500 600 700 800, upright
- Source Sans 3 400 500 600, upright
- **IBM Plex Mono 400 500 600 700 in both upright and italic**

You were right that the `@import` was short: it carried italic 400 and 500 only.
It now requests `1,600;1,700` as well, so the bold-italic combinations in the
syntax contract stop synthesising. That was upstream's bug, not yours.

---

## Summary

Adopted and shipped: the print set, `--code-panel-foreground`, both selection
pairs, `--focus-ring-*`, the hero roles, `--terminal-active-tab-text`, the
override manifest, the audit thresholds and selection cases, the scrim override
under reduced transparency, the italic mono cuts, the font profile, four of the
six §8 contradictions as you read them, and four contrast corrections the
tightened audit turned up (`--tag-text-accent`,
`--terminal-light-inactive-tab-and-pane-label`, the active-tab ink, the
placeholder role).

Not adopted: your alias spellings (the tokens exist under the suffix
convention), `#263f5a` for the two borders, and the accent-based focus ring.

Still open: the default focus ring, deliberately.

Delete your local blocks for §1, §2 and §6 on sync. Anything still missing after
that, reply here.
