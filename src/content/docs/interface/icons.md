---
title: Iconography
linkTitle: Icons
weight: 40
description: Tabler outline icons on a 24 px grid, with one stroke system and semantic colour.
---

## Library

The system uses **Tabler Icons**, outline set only. Tabler is MIT-licensed and
drawn on a 24 px grid. Do not mix its filled collection into the brand and do
not add another library to fill gaps.

{{< icon-specimen >}}

## Geometry

| Property | Rule |
|---|---|
| Native grid | 24 × 24 px |
| Stroke | 1.5 px, including icons supplied at 2 px |
| Caps and joins | Round |
| Fill | None |
| Sizes | 16 px inline · 20 px in buttons · 24 px for navigation |

A custom icon is permitted only where Tabler has no suitable concept. Draw it
on the same grid with the same stroke, caps, joins, and single-colour outline.

## Colour and state

- Default icons use the secondary foreground (`slate-11`).
- Active or selected icons use the primary foreground (`midnight-9` on light).
- Danger uses the danger token only when danger is the icon's meaning.
- Colour never decorates an otherwise neutral list of categories.
- A status icon is always paired with a label, shape, or other non-colour cue.

## Delivery

Marketing prototypes may request an individual outline SVG from the Tabler CDN.
React surfaces inline SVG rather than running a DOM-mutating icon script.
Distributable themes and offline products may vendor a versioned outline subset;
ship the MIT licence and record the pinned version in the SBOM.

The projectious.work mark is not an icon. It appears only as part of the
identity and must never stand in for home, AI, an agent, or a generic product.

{{< rules >}}
{{% do %}}
Pair unfamiliar icons with text and give every icon-only control an accessible
name and a 44 px target.
{{% /do %}}
{{% dont %}}
Use emoji, Unicode pictograms, filled Tabler variants, arbitrary icon colours,
or the brand mark as an interface glyph.
{{% /dont %}}
{{< /rules >}}
