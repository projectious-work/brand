---
title: Colour
linkTitle: Colour
weight: 10
description: Three 12-step scales in two modes, their step roles, and the contrast rules that govern them.
---

The palette is three scales — **midnight**, **orange**, and **slate** — each
expressed as a 12-step ramp in a light and a dark variant. The step numbering
follows the Radix convention, which assigns every step a *role*. Using a step
outside its role is the single most common way to break the system.

## Core colours

These are the named aliases most projects reach for first. They are shortcuts
into the scales, not a separate palette.

The light app background is `midnight-1` (`#f8f9fb`), not white. White is the
raised surface. Links use `midnight-11`, never the accent. Colour carries
meaning: do not introduce bluish-purple gradients, rainbow categorisation, or
decorative colour families.

{{< swatches >}}

## Step roles

Every scale uses the same twelve roles in the same order:

| Steps | Role | Used for |
|---|---|---|
| 1–2 | App and subtle backgrounds | Page and section surfaces |
| 3–5 | Element backgrounds | Component fills, hover, active |
| 6–8 | Borders | Subtle, default, and strong borders |
| 9–10 | Solid | Solid fills and their hover state |
| 11–12 | Text | Low-emphasis and high-emphasis text |

{{% callout title="Only 11 and 12 are text steps" type="warning" %}}
Steps 8, 9, and 10 are border and solid-surface roles. They are not held to text
contrast thresholds and must not be used for body text. If you need dimmer text
than step 11, define a dedicated token and verify its contrast — see
[the code-comment token](/docs/interface/code/) for a worked
example.
{{% /callout %}}

## Midnight

{{< scale name="midnight" mode="light" >}}
{{< scale name="midnight" mode="dark" >}}

Midnight is the primary. It carries structure, text, and the calm end of the
system. Step 9 (`#1d3352`) is the brand primary and is identical in both modes.

## Orange

{{< scale name="orange" mode="light" >}}
{{< scale name="orange" mode="dark" >}}

Orange is the accent. It marks the primary action, the active state, and little
else. Step 9 (`#E05232`) is constant across modes.

{{< rules >}}
{{% do %}}
Use orange for the single most important action in a view, active navigation
state, and focus emphasis.
{{% /do %}}
{{% dont %}}
Use orange for large background fills, body text, or more than one competing
call to action on the same screen.
{{% /dont %}}
{{< /rules >}}

## Slate

{{< scale name="slate" mode="light" >}}
{{< scale name="slate" mode="dark" >}}

Slate is the secondary — supporting text, borders, and neutral surfaces. Step 9
(`#546a82`) is the brand secondary and is constant across modes.

## Terminal

The dark terminal is the default and every colour in it is measured against
`midnight-dark-1`. An optional light companion is available for explicitly
light code and terminal panels; it is a separate measured palette, never an
automatic colour-mode substitution. A terminal also needs six hues where the
interface needs three, because
programs have been writing to sixteen ANSI slots since long before this system
existed.

So each terminal palette is a companion to the three interface scales rather
than another scale: sixteen fixed ANSI slots plus chrome, derived from the ramps
and measured against its own background.

{{< terminal-palette >}}

Read the provenance column carefully. The **bright** ramp is the brand: where a
hue already exists in the system, the bright slot takes that step verbatim. The
**normal** ramp has no brand equivalent — the scales define one value per
semantic role, not a dim and a bright — so each normal slot is its bright
counterpart darkened until it reads a step back while still clearing the floor.

Magenta and cyan exist in neither half of the brand. They are here because a
terminal requires them, and nowhere else.

{{% callout title="A terminal value is not a brand value" type="warning" %}}
`#e55b5b` is the terminal's red. It is **not** `$danger`, which is `#a8261c`.
The normal ramp exists to fill ANSI slots and is measured only against the
terminal surface; using one of its values in the interface puts an unmeasured
colour on an unrelated background.
{{% /callout %}}

### Terminal chrome

The accent gets no ANSI slot, because it is not semantic — it marks *where you
are*. That, and the surfaces around the sixteen, live here.

{{< terminal-palette part="chrome" >}}

Every non-background value clears 4.5:1 against the surface; the measured floor
is 4.95:1. ANSI 0 bright is the one deliberate exception — programs use it for
box drawing and rules, not for text.

Configuration for tmux, WezTerm, Kitty, Ghostty, iTerm2, and Zellij is on the
[Terminal theming page](/docs/themes/terminal/).

## Contrast rules

- **Never use pure `#000` or `#fff` as text.** Use step 12 of the relevant
  scale: `#142438` on light, `#c5daf0` on dark.
- **Step 9 is constant across modes.** The solid accent does not shift when the
  theme changes.
- **Body text targets 4.5:1**, large text (≥24px, or ≥18.66px bold) targets 3:1.
- **Verify against the actual surface.** A step that passes on the app
  background may fail on an elevated panel.

### Where an identity colour cannot carry text

Being the brand colour does not make a value a legible background. White on
`orange-9` (`#E05232`) measures **3.87:1** — fine as a mark or a border, but
below the floor for button labels. Rather than dilute the accent, the system
adds a separate fill for that job:

| Token | Hex | With white text |
|---|---|---|
| `--color-accent` | `#E05232` | 3.87:1 — identity only, not for text |
| `--color-accent-solid` | `#cc4528` | 4.72:1 — solid controls |
| `--color-accent-dark` | `#b84228` | 5.46:1 — hover and pressed |

The identity accent is never body text. Light-mode accent text uses
`orange-11` (`#c04424`); dark-mode accent text uses `orange-dark-10`
(`accent-light`, `#ea7558`). A solid control with a white label always uses
`accent-solid`.

The same principle produced the
[`code-comment` token](/docs/interface/code/): when no existing
step can do the job accessibly, name a new one rather than misuse a step.

### Semantic colours are mode-specific

The callout hues are tuned for **dark text on tinted light backgrounds**. Used
as foregrounds on the dark app surface they fall below AA, so dark mode has its
own set:

| Role | Light | Dark | On `#0e1720` |
|---|---|---|---|
| Success | `#2f7d65` | `#6cc090` | 3.65:1 → 8.24:1 |
| Warning | `#8b6508` | `#e0a92a` | 3.41:1 → 8.50:1 |
| Danger | `#a8261c` | `#f08b80` | 2.55:1 → 7.49:1 |
| Info | `#3a5a82` | `#8aacc8` | 2.55:1 → 7.59:1 |

## Data visualisation

A chart palette introduces no new colours. It is a set of rules for which
existing steps may sit beside each other in a plot, and — more usefully — for
when colour stops being the right tool.

### Categorical: three series

| Series | Token | Hex | On white |
|---|---|---|---|
| 1 | `--midnight-9` | `#1d3352` | 12.75:1 |
| 2 | `--orange-9` | `#E05232` | 3.87:1 |
| 3 | `--slate-9` | `#546a82` | 5.58:1 |

One step-9 solid per family, in that order. All three clear the **3:1 non-text
contrast floor** against a white plot area, so a bar or a line is visible
without a border.

Assign them in order and keep the assignment stable across every chart in a
deck or a dashboard: if midnight is "cloud" on slide four, it is "cloud" on
slide nine. A series that changes colour between charts costs the reader more
than a fourth series would have gained them.

{{< demo label="Three-series grouped bars — the whole categorical palette" variant="stack" >}}
<div style="display:flex;align-items:flex-end;gap:1.5rem;height:132px;padding:0 .25rem;border-bottom:1px solid var(--pj-slate-4)">
  <div style="display:flex;align-items:flex-end;gap:3px;height:100%"><span style="width:18px;height:78%;background:var(--pj-midnight-9);display:block"></span><span style="width:18px;height:52%;background:var(--pj-orange-9);display:block"></span><span style="width:18px;height:35%;background:var(--pj-slate-9);display:block"></span></div>
  <div style="display:flex;align-items:flex-end;gap:3px;height:100%"><span style="width:18px;height:61%;background:var(--pj-midnight-9);display:block"></span><span style="width:18px;height:70%;background:var(--pj-orange-9);display:block"></span><span style="width:18px;height:28%;background:var(--pj-slate-9);display:block"></span></div>
  <div style="display:flex;align-items:flex-end;gap:3px;height:100%"><span style="width:18px;height:44%;background:var(--pj-midnight-9);display:block"></span><span style="width:18px;height:38%;background:var(--pj-orange-9);display:block"></span><span style="width:18px;height:66%;background:var(--pj-slate-9);display:block"></span></div>
</div>
<div style="display:flex;gap:1rem;margin-top:.625rem;font-size:.75rem;color:var(--pj-muted-fg)">
  <span><span style="display:inline-block;width:9px;height:9px;background:var(--pj-midnight-9);margin-right:.3rem"></span>Cloud</span>
  <span><span style="display:inline-block;width:9px;height:9px;background:var(--pj-orange-9);margin-right:.3rem"></span>Agentic AI</span>
  <span><span style="display:inline-block;width:9px;height:9px;background:var(--pj-slate-9);margin-right:.3rem"></span>Agile</span>
</div>
{{< /demo >}}

{{% callout title="Orange and slate differ in hue, not in value" type="warning" %}}
`orange-9` against `slate-9` measures **1.44:1**. On screen they are easy to
tell apart — orange against blue-grey is also one of the safest pairs for the
common colour-vision deficiencies. Printed in greyscale, or on a projector with
the colour turned down, they merge.

So when exactly two series are being compared, use **midnight-9 and orange-9**
(3.29:1) and leave slate for the third. And direct-label every series — the
legend is the fallback, not the mechanism.
{{% /callout %}}

### There is no fourth series

The palette stops at three, and extending it is the wrong fix. The step-6 tier
is not an option: `midnight-6` and `slate-6` measure **1.03:1 against each
other** — the same colour, for practical purposes — and all three step-6 values
sit at 1.8–2.0:1 against white, below the 3:1 floor for a mark you have to see.

When a chart has more than three categories, one of these is the answer:

- **Group the tail.** Rank the categories and collapse everything past the third
  into "Other". If the fourth is genuinely interesting, it is the subject of its
  own chart.
- **Small multiples.** One chart per category, same axes, same scale. Reading
  eight small charts is faster than decoding an eight-colour legend.
- **Direct labelling with one highlight.** Draw every series in `slate-7`, draw
  the one being discussed in `orange-9`, and label it in place. This is the
  house style for a line chart in a
  [deck](/docs/media/presentations/) — one idea per slide holds
  for charts too.
- **Stop using colour.** A ranked bar chart in a single colour, sorted by value,
  answers "which is biggest" better than any palette does.

### Sequential and ordinal scales

A magnitude scale uses **one family, steps 3 through 8**:

`--midnight-3` → `--midnight-4` → `--midnight-5` → `--midnight-6` →
`--midnight-7` → `--midnight-8`

Six levels, stepping evenly in luminance (each 1.06–1.40× its neighbour) — which
is what makes the ramp readable as an ordered scale rather than as six colours.

**Step 9 is not the top of that ramp.** It is 3.87× darker than step 8, which is
a jump the eye reads as a category boundary rather than one more level. Use it
deliberately for exactly that: a four-bucket choropleth of `3 · 5 · 7 · 9`,
where the top bucket is meant to separate itself. Do not append it to a
six-level heatmap.

Steps 3–7 are all below 3:1 against a white plot area, so a sequential fill
needs an edge: give the plot a 1px `slate-4` cell grid, or the reader loses the
boundary between a light cell and the page.

For a diverging scale — where the middle is neutral and both ends are extreme —
run `midnight-8 → midnight-3 → orange-3 → orange-8`, with `--midnight-1` at the
midpoint. Never build a diverging scale from success and danger: those hues
carry a judgement, and "below average" is not "wrong".

### Chart furniture

| Element | Value |
|---|---|
| Axis line, ticks | `--slate-5` |
| Grid lines | `--slate-3`, horizontal only |
| Axis labels, legend | `--slate-11`, 12px |
| Value labels | `--midnight-12`, 12px, IBM Plex Mono |
| Plot background | none — the page surface |
| Annotation, callout rule | `--orange-9` |

Numbers are set in IBM Plex Mono, right-aligned, for the same reason
[table numerics are](/docs/interface/components/): digits have
to line up to be compared.

{{< rules >}}
{{% do %}}
Keep categorical charts to three series and label them directly. Hold a series'
colour constant across a deck. Use one family's steps 3–8 for magnitude.
{{% /do %}}
{{% dont %}}
Invent a fourth categorical colour from the step-6 tier, rely on a legend as the
only way to identify a series, append step 9 to a sequential ramp, or build a
diverging scale from the success and danger hues.
{{% /dont %}}
{{< /rules >}}

## Dark mode

Both modes are equally supported. See
[Dark mode](/docs/interface/dark-mode/) for the implementation
rules — theme switching, persistence, image treatment, and the always-dark code
surface.
