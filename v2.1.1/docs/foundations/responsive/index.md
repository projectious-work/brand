# Responsive

> The four breakpoints, how the 12-column grid collapses, touch-target sizes, and the mobile navigation pattern.

---

LLMS index: [llms.txt](/brand/v2.1.1/llms.txt)

---

The rest of the foundations describe values that do not change with viewport
width. This page describes the four points at which the layout does.

## Breakpoints

Four breakpoints, declared in
[`brand/tokens/variables.css`](/brand/v2.1.1/downloads/tokens/variables.css) and
normative here:

| Name | Min width | The layout it describes |
|---|---|---|
| `sm` | 640px | Large phone, landscape phone |
| `md` | 768px | Small tablet — the first two-column layout |
| `lg` | 1024px | Tablet landscape, small laptop — sidebars appear |
| `xl` | 1280px | Desktop — the 1100px measure is fully margined |

Below `sm` is not a breakpoint; it is the **base**. Write the narrow layout
first and add width with `min-width` queries, so an unstyled or unsupported
viewport gets the single-column layout rather than a clipped desktop one.

```css
/* Base — single column, 360px and up. */
.panel-row { display: grid; gap: var(--space-4); }

@media (min-width: 768px) {
  .panel-row { grid-template-columns: repeat(2, 1fr); }
}
@media (min-width: 1024px) {
  .panel-row { grid-template-columns: 1.5fr 1fr; }
}
```

<div class="pj-demo"><div class="pj-demo__label">Breakpoint ruler — base · 640 · 768 · 1024 · 1280</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div style="display:flex;align-items:stretch;gap:2px;font-size:.6875rem;line-height:1.4">
  <div style="flex:64;background:var(--pj-midnight-2);color:var(--pj-body-fg);padding:.5rem .375rem;border-radius:3px 0 0 3px">base<br><span>1 col</span></div>
  <div style="flex:13;background:var(--pj-midnight-3);color:var(--pj-body-fg);padding:.5rem .375rem">640<br><span>1 col</span></div>
  <div style="flex:26;background:var(--pj-midnight-6);color:var(--pj-body-fg);padding:.5rem .375rem">768<br><span>2 col</span></div>
  <div style="flex:26;background:var(--pj-midnight-9);color:#fff;padding:.5rem .375rem">1024<br><span style="color:#c3d1e3">+ sidebar</span></div>
  <div style="flex:20;background:var(--pj-midnight-9);color:#fff;padding:.5rem .375rem;border-left:3px solid var(--pj-orange-9);border-radius:0 3px 3px 0">1280<br><span style="color:#c3d1e3">margined</span></div>
</div>

  </div>
</div>


## How the grid collapses

The grid is 12 columns inside the
[1100px measure](/brand/v2.1.1/docs/foundations/space-shape-motion/). It does
not stay twelve columns all the way down — it resolves to four column counts:

| From | Columns | Gutter | Page padding |
|---|---|---|---|
| base | 4 | 16px | 16px |
| `md` 768px | 8 | 16px | 24px |
| `lg` 1024px | 12 | 24px | 32px |
| `xl` 1280px | 12 | 24px | auto — the measure caps at 1100px |

**Below `md`, every multi-column region becomes one column.** There is no
two-column layout on a phone: two 160px columns are two unreadable columns.
Regions stack in **source order**, so the DOM must already be in reading order
— do not rely on `order` or `grid-area` to fix a sequence that is wrong in the
markup, because that breaks the [focus and reading
order](/brand/v2.1.1/docs/interface/accessibility/).

Spacing steps **down** one rung when the grid collapses: a `--space-6` (32px)
section gap on desktop becomes `--space-5` (24px) below `md`. Radius, type
scale, and border weights do **not** change — a card is a 9px card at every
width.

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">The 1100px measure is a maximum, not a target</div>


Wider viewports gain margin, not line length. At `xl` the content stays 1100px
wide and centres; it does not grow to fill a 1920px display. This is the same
rule the spacing page states, restated here because it is the most common thing
a responsive rewrite breaks.
</div>


## Touch targets

**44×44px minimum** for anything tappable, at every viewport — the floor is a
finger, not a breakpoint.

The default control heights are 32 / 40 / 48px, so the `sm` and `md` sizes are
**below** the floor on their own. Two ways to resolve it, in order of
preference:

1. **Grow the hit area, not the control.** Keep the 40px visual button and give
   it a transparent 2px vertical extension, or wrap it in a 44px-tall row. The
   measurement stays normative; the target clears the floor.
2. **Use `lg` (48px) on touch-primary surfaces.** Correct for the primary action
   on a phone, where a 40px button next to a 48px one reads as demoted.

Never shrink to `sm` (32px) for a touch target. Spacing between adjacent targets
is at least `--space-2` (8px), so a mis-tap does not fire the neighbour.

```css
/* Preferred: 40px control, 44px target. */
.pj-btn--md {
  min-height: 40px;
  position: relative;
}
.pj-btn--md::after {
  content: "";
  position: absolute;
  inset: -2px 0;   /* 40 + 2 + 2 = 44 */
}
```

## Mobile navigation

**Use a bottom tab bar for application surfaces. Use a top drawer for
documentation and marketing surfaces.** The choice follows the shape of the
navigation, not the shape of the device:

- An **application** has a small, flat set of destinations — the
  [dashboard example](/brand/v2.1.1/downloads/examples/dashboard.dc.html) has five.
  Five or fewer flat destinations fit a tab bar, which keeps the current
  location permanently visible, sits in the thumb arc, and costs no taps to
  reach. That is worth the 56px of permanent screen it occupies.
- **Documentation** has a deep, nested tree. A tab bar cannot express it, and
  flattening the tree to fit one is worse than a drawer. A drawer behind a
  labelled disclosure control costs one tap and can show the whole hierarchy.

The failure mode is a tab bar with six or more items, or one that hides the
primary destination behind "More". If the destinations do not fit, the surface
is a drawer surface.

Both patterns carry the same obligations: the current destination is marked with
**an accent underline or fill plus the label**, never colour alone; the drawer
traps focus while open, closes on `Esc`, and returns focus to its trigger — the
same contract as a [modal](/brand/v2.1.1/docs/interface/components/).

<div class="pj-demo"><div class="pj-demo__label">Bottom tab bar — 5 destinations, current marked with fill and label</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div style="max-width:340px;border:1px solid var(--pj-border);border-radius:9px;overflow:hidden;background:var(--pj-surface)">
  <div style="height:88px;background:var(--pj-surface-subtle);display:flex;align-items:center;justify-content:center;color:var(--pj-text-muted);font-size:.75rem">screen content</div>
  <div style="display:flex;border-top:1px solid var(--pj-border)">
    <span style="flex:1;min-height:44px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;font-size:.625rem;color:var(--pj-orange-11);border-top:2px solid var(--pj-orange-9);font-weight:600">Overview</span>
    <span style="flex:1;min-height:44px;display:flex;align-items:center;justify-content:center;font-size:.625rem;color:var(--pj-text-muted)">Agents</span>
    <span style="flex:1;min-height:44px;display:flex;align-items:center;justify-content:center;font-size:.625rem;color:var(--pj-text-muted)">Alerts</span>
    <span style="flex:1;min-height:44px;display:flex;align-items:center;justify-content:center;font-size:.625rem;color:var(--pj-text-muted)">Account</span>
  </div>
</div>

  </div>
</div>


## Tables, code, and diagrams

Three content types cannot reflow, and each has one answer:

- **Tables** scroll horizontally inside their own container with the first
  column pinned — never the page. See [wide
  tables](/brand/v2.1.1/docs/interface/components/).
- **Code blocks** scroll horizontally. Do not soft-wrap code: a wrapped line
  changes what the code appears to say.
- **Diagrams** get a scrollable container or a re-drawn narrow variant. Do not
  scale a diagram down until its labels are unreadable — an 8px label is not a
  responsive diagram, it is a broken one.

## Worked example

[**Mobile onboarding**](/brand/v2.1.1/downloads/examples/mobile-onboarding.dc.html) —
three screens in a device frame: an onboarding panel on midnight, an engagement
list of stacked cards, and a finding-review screen with two side-by-side
actions. It is the [dashboard](/brand/v2.1.1/downloads/examples/dashboard.dc.html)
below `md`: same tokens, same components, one column, tab bar instead of
sidebar.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Write the base layout first and add width with <code>min-width</code> queries. Put regions
in the DOM in reading order. Give every tappable thing a 44px target.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Keep two columns below 768px, reorder regions with CSS to fix source order,
scale a diagram until its labels are illegible, or let a wide table scroll the
whole page.</p>
</div>
</div>
