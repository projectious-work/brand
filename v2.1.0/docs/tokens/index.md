# Tokens

> Machine-readable exports of the design values, and how to consume them.

---

LLMS index: [llms.txt](/brand/v2.1.0/llms.txt)

---

The token files are the machine-readable form of the
[foundations](/brand/v2.1.0/docs/foundations/). They are **MIT-licensed** —
the values are free to use, the marks are not. See
[Licensing](/brand/v2.1.0/docs/governance/licensing/).

## Downloads

| File | Format | Use |
|---|---|---|
| [`variables.css`](/brand/v2.1.0/downloads/tokens/variables.css) | CSS custom properties | Any web project |
| [`tokens.json`](/brand/v2.1.0/downloads/tokens/tokens.json) | JSON | Build pipelines, Style Dictionary |
| [`tailwind.config.js`](/brand/v2.1.0/downloads/tokens/tailwind.config.js) | JS | Tailwind CSS projects |

Source: [`brand/tokens/`](https://github.com/projectious-work/brand/tree/main/brand/tokens).

All three are **generated** from
[`src/data/brand.yaml`](https://github.com/projectious-work/brand/blob/main/src/data/brand.yaml)
by `scripts/build-tokens.mjs` — the same file this documentation renders from,
so a page and a download cannot disagree about a value. `scripts/check-tokens.sh`
fails the build if the committed files drift from a fresh generation, or if
`brand.yaml` drifts from the SCSS that actually styles the site.

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

Everything the foundations define, in all three files:

| | Covers |
|---|---|
| **Colour — named** | The eight aliases: primary, accent (with `accent-solid`), secondary, and their light and dark variants |
| **Colour — scales** | All three 12-step scales, **in both modes** — 72 values |
| **Colour — semantic** | Success, warning, danger, info: the solid value, its tint, and the foreground to use *on* that tint, per mode |
| **Surfaces** | Page canvas, elevated surface, three text levels, border — per mode |
| **Typography** | Three font stacks, and the eleven-style type scale with size, weight, and line height |
| **Spacing** | The nine-step 4px scale |
| **Radius** | Five steps |
| **Elevation** | Four shadow levels |
| **Motion** | Four durations, two easing curves |
| **Breakpoints** | `sm` 640, `md` 768, `lg` 1024, `xl` 1280 |
| **Terminal** | The sixteen ANSI slots plus thirteen chrome values |

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Two things the exports cannot do for you</div>


**Breakpoints are exported as values, not as queries.** A custom property cannot
be used in a `@media` condition, so `--breakpoint-md` is available to `calc()`
and to JavaScript, but the query itself still has to be written out.

**Tailwind has no notion of a colour mode**, so the dark scales are exported as
their own `midnightDark` / `orangeDark` / `slateDark` keys rather than swapped in
behind `dark:`. Wire them to whatever dark strategy your project already uses.
</div>


### Modes

`variables.css` declares the dark values twice: once under
`@media (prefers-color-scheme: dark)`, and once under `[data-theme="dark"]`. A
theme toggle that only works when the operating system already agrees is not a
toggle, so both routes are present and the explicit attribute wins.

## Consuming them in SCSS

This site maps the tokens onto Bootstrap and Docsy variables in
[`src/assets/scss/_variables_project.scss`](https://github.com/projectious-work/brand/blob/main/src/assets/scss/_variables_project.scss),
which is a worked example of wiring the brand into an existing component
framework.

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">The site is the test</div>


This documentation is styled by those same SCSS files. If a token is wrong, this
page renders wrong — which is the point. There is no separate brand-site theme
that can drift away from the system it documents.
</div>
