# Tokens

> Machine-readable exports of the design values, and how to consume them.

---

LLMS index: [llms.txt](/brand/v2.0.2/llms.txt)

---

The token files are the machine-readable form of the
[foundations](/brand/v2.0.2/docs/foundations/). They are **MIT-licensed** —
the values are free to use, the marks are not. See
[Licensing](/brand/v2.0.2/docs/governance/licensing/).

## Downloads

| File | Format | Use |
|---|---|---|
| [`variables.css`](/brand/downloads/tokens/variables.css) | CSS custom properties | Any web project |
| [`tokens.json`](/brand/downloads/tokens/tokens.json) | JSON | Build pipelines, Style Dictionary |
| [`tailwind.config.js`](/brand/downloads/tokens/tailwind.config.js) | JS | Tailwind CSS projects |

Source: [`brand/tokens/`](https://github.com/projectious-work/brand/tree/main/brand/tokens).

## CSS

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

- **Colour** — the seven named aliases. The full 12-step scales are documented
  on the [Colour page](/brand/v2.0.2/docs/foundations/color/); the token file
  exports the named entry points.
- **Typography** — the three font stacks.
- **Spacing** — the nine-step 4px scale.
- **Radius** — five steps.
- **Elevation** — four shadow levels.
- **Motion** — four durations, two easing curves.

## Consuming them in SCSS

This site maps the tokens onto Bootstrap and Docsy variables in
[`src/assets/scss/_variables_project.scss`](https://github.com/projectious-work/brand/blob/main/src/assets/scss/_variables_project.scss).
That file is a worked example of wiring the brand into an existing component
framework — including the full 12-step scales in both modes, which the CSS
export does not carry.

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">The site is the test</div>


This documentation is styled by those same SCSS files. If a token is wrong, this
page renders wrong — which is the point. There is no separate brand-site theme
that can drift away from the system it documents.
</div>
