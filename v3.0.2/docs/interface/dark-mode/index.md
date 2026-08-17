# Appearances

> Light, navy dark, and deep dark from one semantic token contract.


The system supports three appearances. They are not separate palettes and they
do not permit component-specific colour forks.

| Appearance | Selector | Page | Raised | Subtle | Border |
|---|---|---|---|---|---|
| Light | `data-theme="light"` | `#f8f9fb` | `#ffffff` | `#f0f3f8` | `#cdd0d5` |
| Navy dark, default dark | `data-theme="dark"` | `#132440` | `#1a2b3e` | `#20354d` | `#2e4b68` |
| Deep dark | `data-theme="dark" data-surface="deep"` | `#0e1720` | `#131e2b` | `#1a2b3e` | `#263f5a` |

With no explicit mode, the interface follows `prefers-color-scheme`. A dark
preference resolves to navy dark. Deep dark is an explicit choice.

{{< appearance-specimen >}}

The specimen translates the designer's shared three-way preview control into a
simultaneous comparison: the component recipe stays identical while only its
semantic token context changes.

## Why navy is the default dark

Deep dark begins at the bottom of the midnight ramp. Across a full interface,
panels have little room to separate from the page and the result reads heavy.
Navy begins higher. Raised surfaces remain visible, while a code panel can sit
below the page tone and read as inset rather than as a hole.

Navy is a derivative of deep dark. It changes only midnight steps 1–5,
surfaces, borders, and the neutral tag background. Orange, slate, text, status,
terminal, and syntax roles remain the same.

## Implementation

```html
<html data-theme="dark" data-focus="strong">
<!-- add data-surface="deep" only for the deep-dark appearance -->
```

- Components consume semantic tokens; they do not branch on appearance.
- `orange-9` stays constant as the identity accent, but it is never body text.
- Light application pages use `midnight-1`, not white. White is raised.
- Elevation in dark uses an elevated surface step as well as a shadow.
- Solid status fills use `--on-solid-*`; the dark solids are light tints and
  cannot carry white text.
- Code remains on `#131e2b` and terminal output on `#0e1720` in every page
  appearance.

{{< callout type="info" title="An optional light code panel is not light mode" >}}
A light code or terminal specimen opts into the complete companion palette,
including syntax, ANSI slots, chrome, borders, and selection. It never switches
automatically with the page.
{{< /callout >}}

## Surface ownership

An element that paints a deliberate dark slab—such as a marketing hero,
terminal, modal, or footer—also establishes the appropriate foreground,
secondary text, border, selection, and control tokens. It must not depend on
the page appearance to make its contents readable.

## Review contract

Review every token-driven preview in light, navy dark, and deep dark. Then apply
high contrast, strong focus, 200% text, loose spacing, reduced motion, and
reduced transparency. A card that works in one screenshot has not passed.

{{< rules >}}
{{% do %}}
Use semantic surface and foreground roles, and pair `--shadow-N` with
`--elevated-N` on dark.
{{% /do %}}
{{% dont %}}
Create a fourth theme, invert colours, use white as the light app background, or
switch code to a light palette merely because the page is light.
{{% /dont %}}
{{< /rules >}}


---
Source: https://projectious-work.github.io/brand/v3.0.2/docs/interface/dark-mode/index.md
