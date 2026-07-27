---
title: Space, shape, and motion
linkTitle: Space, shape & motion
weight: 30
description: The 4px spacing base, the radius and elevation ladders, and the motion tokens.
---

## Spacing

A 4px base with a nine-step scale. Every margin, padding, and gap resolves to
one of these values.

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Icon-to-label gaps |
| `--space-2` | 8px | Tight component padding |
| `--space-3` | 12px | Control padding |
| `--space-4` | 16px | Default element spacing |
| `--space-5` | 24px | Card padding, paragraph rhythm |
| `--space-6` | 32px | Component separation |
| `--space-7` | 48px | Sub-section separation |
| `--space-8` | 64px | Section separation |
| `--space-9` | 96px | Page-level bands |

Content sits inside a **1100px measure**. Wider viewports gain margin, not
line length.

## Radius

| Token | Value | Applied to |
|---|---|---|
| `--radius-sm` | 3px | Tags, chips, small indicators |
| `--radius-md` | 6px | Buttons, inputs, code blocks |
| `--radius-lg` | 9px | Cards, panels |
| `--radius-xl` | 13px | Large panels, modals |
| `--radius-full` | 9999px | Pills, avatars |

Radius is a signal of scale: the larger the surface, the larger the radius.
Mixing radii on nested surfaces reads as a mistake — a 6px control inside a 9px
card is correct; a 13px control inside a 6px card is not.

## Elevation

Four levels. Shadows are soft and low-contrast; the system leans on borders and
surface tint before it reaches for shadow.

| Token | Value | Applied to |
|---|---|---|
| `--shadow-0` | `none` | Flat surfaces, default |
| `--shadow-1` | `0 1px 3px rgba(0,0,0,0.06)` | Cards at rest |
| `--shadow-2` | `0 4px 12px rgba(0,0,0,0.08)` | Hover, dropdowns |
| `--shadow-3` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, popovers |

In dark mode, elevation is expressed by *lightening the surface* rather than
deepening the shadow — a shadow on a near-black background is invisible.

## Motion

Things slide into place. They do not bounce.

### Durations

| Token | Value | Use |
|---|---|---|
| `--duration-micro` | 100ms | Colour and opacity changes |
| `--duration-standard` | 200ms | Hover, focus, small moves |
| `--duration-expand` | 300ms | Height and width changes, accordions |
| `--duration-page` | 400ms | Route and view transitions |

### Easing

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | Entering — arriving on screen |
| `--ease-in` | `cubic-bezier(0.32, 0, 0.67, 0)` | Exiting — leaving screen |

### Motion rules

- All animation wraps in `@media (prefers-reduced-motion: no-preference)`, or is
  disabled under `prefers-reduced-motion: reduce`.
- CSS-only for HTML. For React, use Framer Motion with these same timing values.
- **Never animate text character-by-character.**
- Page transitions cap at 400ms.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

{{< rules >}}
{{% do %}}
Use `--ease-out` for anything appearing and `--ease-in` for anything leaving.
Keep durations on the ladder.
{{% /do %}}
{{% dont %}}
Add spring or bounce easing, animate layout-shifting properties, or exceed 400ms
for any single transition.
{{% /dont %}}
{{< /rules >}}
