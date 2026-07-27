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

{{% alert title="Only 11 and 12 are text steps" color="warning" %}}
Steps 8, 9, and 10 are border and solid-surface roles. They are not held to text
contrast thresholds and must not be used for body text. If you need dimmer text
than step 11, define a dedicated token and verify its contrast — see
[the code-comment token]({{< relref "/docs/interface/code" >}}) for a worked
example.
{{% /alert %}}

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

The same principle produced the
[`code-comment` token]({{< relref "/docs/interface/code" >}}): when no existing
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

## Dark mode

Both modes are equally supported. See
[Dark mode]({{< relref "/docs/interface/dark-mode" >}}) for the implementation
rules — theme switching, persistence, image treatment, and the always-dark code
surface.
