---
title: Tokens
linkTitle: Tokens
weight: 70
description: Machine-readable exports of the design values, and how to consume them.
---

The token files are the machine-readable form of the
[foundations]({{< relref "/docs/foundations/" >}}). They are **MIT-licensed** —
the values are free to use, the marks are not. See
[Licensing]({{< relref "/docs/governance/licensing" >}}).

## Authoritative definitions

`src/data/brand.yaml` is the structured source rendered by these pages. The
v2.1.1 design-system package supplies the synchronized CSS custom properties
used to verify it. Consumers may export CSS, JSON, or framework configuration
from the structured values, but an export is generated output rather than a
second source of truth.

## CSS

[Download `variables.css`]({{< siteurl "downloads/tokens/variables.css" >}}) ·
[Download `tokens.json`]({{< siteurl "downloads/tokens/tokens.json" >}}) ·
[Download `tailwind.config.js`]({{< siteurl "downloads/tokens/tailwind.config.js" >}})

```html
<link rel="stylesheet" href="variables.css">
```

```css
.button--primary {
  background: var(--color-primary);
  border-radius: var(--radius-md);
  padding: var(--space-3) var(--space-4);
  transition: background var(--duration-standard) var(--ease-out);
}
```

## What the tokens cover

Everything the foundations define, in all three files:

| | Covers |
|---|---|
| **Colour — named** | Primary, accent (including `accent-solid`), secondary, and their light and dark variants |
| **Colour — scales** | All three 12-step scales, **in both modes** — 72 values |
| **Colour — semantic** | Success, warning, danger, info: the solid value, its tint, and the foreground to use *on* that tint, per mode |
| **Surfaces** | Page canvas, elevated surface, three text levels, border — per mode |
| **Typography** | Three font stacks and the display, heading, body, caption, overline, and code roles |
| **Spacing** | The nine-step 4px scale |
| **Radius** | Five steps |
| **Elevation** | Four shadow levels |
| **Motion** | Four durations, two easing curves |
| **Breakpoints** | `sm` 640, `md` 768, `lg` 1024, `xl` 1280 |
| **Syntax** | Ten dark-panel roles plus ten separately measured optional light-panel roles |
| **Terminal** | Default dark and optional light 16-slot ANSI palettes with chrome roles |

{{% alert title="Two things the exports cannot do for you" color="info" %}}
**Breakpoints are exported as values, not as queries.** A custom property cannot
be used in a `@media` condition, so `--breakpoint-md` is available to `calc()`
and to JavaScript, but the query itself still has to be written out.

**Tailwind has no notion of a colour mode**, so the dark scales are exported as
their own `midnightDark` / `orangeDark` / `slateDark` keys rather than swapped in
behind `dark:`. Wire them to whatever dark strategy your project already uses.
{{% /alert %}}

### Modes

`variables.css` declares the dark values twice: once under
`@media (prefers-color-scheme: dark)`, and once under `[data-theme="dark"]`. A
theme toggle that only works when the operating system already agrees is not a
toggle, so both routes are present and the explicit attribute wins.

## Consuming them in SCSS

This site maps the tokens onto Bootstrap and Docsy variables in
`src/assets/scss/_variables_project.scss`, a worked example of wiring the brand
into an existing component framework.

{{% alert title="The site is the test" color="info" %}}
This documentation is styled by those same SCSS files. If a token is wrong, this
page renders wrong — which is the point. There is no separate brand-site theme
that can drift away from the system it documents.
{{% /alert %}}
