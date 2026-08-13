# Composed patterns

> How the components combine into whole screens — the page shell, the KPI row, and the primary/secondary split.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

[Components](/brand/docs/interface/components/) answers "what does a
card look like". This page answers the question after it: **what does a whole
screen look like when it is made only of those parts.**

Nothing here is a new component. Every element below already exists on the
components page; what is normative here is the *arrangement* — which regions a
screen has, in what order, at what widths.

## The page shell

Three regions, always in this order in the DOM:

| Region | Width | Contents |
|---|---|---|
| **Sidebar** | 224px, fixed | Brand lockup, `pj-sidebar` items, account block pinned to the bottom |
| **Header** | 60px, fixed height | Page title, one line of context, search, and **one** accent action |
| **Content** | fills, scrolls | The page body — everything below |

The sidebar is the only large midnight fill on the screen. It is the
application's frame, so it stays constant while the content region changes; a
sidebar that re-renders per route reads as a page reload.

The header carries **exactly one** accent button. That is the whole quota for
the screen — [one accent per view](/brand/docs/interface/components/)
— which is why the pattern places it here rather than leaving it to the content
region to spend.

Below `lg` (1024px) the sidebar leaves and becomes the mobile navigation
pattern; see [Responsive](/brand/docs/foundations/responsive/).

On a light marketing or documentation shell, the header uses sentence-case
navigation, the lowercase brand lockup, and one accent action on the right. The
footer places the brand mark left and page metadata right in the caption style.
Headers may stick; decorative elements and other page furniture may not.

## The KPI row

Directly under the header: **four** stat cards in a `repeat(4, 1fr)` grid,
`--space-4` gap.

Four, not three and not six. Three leaves a hole in a 12-column grid; six turns
the row into a wall of numbers nobody reads. If there are five things worth
measuring, the fifth one is not a KPI.

Each card is a [`pj-stat`](/brand/docs/interface/components/) — the
number first in Plus Jakarta Sans 800, its label under it in the overline style,
then a delta line. The `pj-stat` carries its own border and radius, so it is
*not* nested inside a `pj-card`; that would draw the box twice.

**A delta states its direction in text or an arrow, not in colour.** The default
`__delta` is the success hue; a delta that is not good news takes an explicit
colour, and a delta that is merely neutral takes the muted foreground rather
than borrowing a semantic one.

<div class="pj-demo"><div class="pj-demo__label">KPI row — value, overline label, delta with an explicit direction</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div style="display:grid;grid-template-columns:repeat(4,1fr);gap:1rem">
  <div class="pj-stat"><div class="pj-stat__value">6</div><div class="pj-stat__label">Active engagements</div><div class="pj-stat__delta">▲ 1 this month</div></div>
  <div class="pj-stat"><div class="pj-stat__value">412</div><div class="pj-stat__label">Agent hours</div><div class="pj-stat__delta">▲ 18% vs last week</div></div>
  <div class="pj-stat"><div class="pj-stat__value">3.2h</div><div class="pj-stat__label">Time to audit</div><div class="pj-stat__delta">▼ 0.6h faster</div></div>
  <div class="pj-stat"><div class="pj-stat__value">5</div><div class="pj-stat__label">Open findings</div><div class="pj-stat__delta" style="color:var(--pj-warning)">2 need review</div></div>
</div>

  </div>
</div>


## Primary content and secondary panel

Under the KPI row, a **1.5fr / 1fr** split: the thing the page is about on the
left, the thing that gives it context on the right.

- **Primary** is the record set — a [table](/brand/docs/interface/components/)
  in a `pj-table-shell`, with its toolbar, filter chips, and pagination footer.
- **Secondary** is a `pj-card` holding a feed: a `pj-timeline` or `pj-list` of
  recent events, each with a status dot **and** a text label.

`align-items: start`, so the two panels are independent — the feed does not
stretch to match a long table, and the table does not gain whitespace to match a
short feed.

The split is 1.5fr / 1fr because the primary panel holds tabular data with four
or more columns and the secondary holds one column of prose. An even 1fr / 1fr
starves the table and pads the feed.

At `md` the ratio flattens to 1fr / 1fr; below `md` the secondary panel moves
**below** the primary, in source order.

## Reading the whole thing at once

The supplied **dashboard mockup** is a client
engagement dashboard built entirely from the parts above: page shell, KPI row,
engagement table, agent-activity feed. Open it beside the components page and
every element in it should be findable there.

The supplied **mobile mockup** is its narrow counterpart: the same system with
the sidebar replaced by a tab bar and every region in one column.

## Density

One pattern, two densities. The measurements on the components page are the
**comfortable** density and are the default. A **compact** density exists for
screens whose job is scanning many rows at once — an audit log, a run history:

| | Comfortable | Compact |
|---|---|---|
| Table row padding | 12px | 8px |
| Control height | 40px | 32px |
| Card padding | 24px | 16px |
| Section gap | `--space-6` 32px | `--space-5` 24px |

Density changes padding and control height. It does **not** change type size,
radius, or border weight — a compact table is the same table with less air, not
a smaller one. Compact is never used on touch-primary surfaces, where the
[44px floor](/brand/docs/foundations/responsive/) applies regardless.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Compose screens from the documented components. Spend the one accent action in
the header. Keep the KPI row at four. Let the secondary panel fall below the
primary on narrow viewports.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Introduce a screen-specific component when an arrangement of existing ones will
do, put a second accent button in the content region, or use compact density on
a touch surface.</p>
</div>
</div>
