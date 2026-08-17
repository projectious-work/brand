# Tokens

> Canonical design values, generated exports, appearance selectors, and consumption rules.


Tokens turn the visual rules into a portable contract. They are
**MIT-licensed**; the name, wordmark, and logo remain reserved marks. See
[Licensing](/docs/governance/licensing/).

## Source and generated files

`src/data/brand.yaml` is the structured source used by this documentation. The
generator produces three public formats from it:

- [CSS custom properties](/downloads/tokens/variables.css)
- [Design-token JSON](/downloads/tokens/tokens.json)
- [Tailwind configuration](/downloads/tokens/tailwind.config.js)

Do not edit a download. Change the structured source, regenerate all formats,
and run the drift check so consumers never receive three different systems.

```console
uv run --script scripts/build_tokens.py
scripts/check-tokens.sh
```

## Contract coverage

| Group | Exported contract |
|---|---|
| Identity | Midnight, orange, and slate shortcuts; accent-solid for white-labelled controls |
| Scales | Three twelve-step ramps, pinned separately for light, navy, and deep |
| Semantics | Success, warning, danger, and info as solid, tint, and on-tint foreground |
| Surfaces | Page, raised surface, subtle surface, border, and three text levels per appearance |
| Type | Three font roles, eleven scalable type roles, weights, line heights, and tracking |
| Layout | Nine spacing steps, four breakpoints, 1100px container, 65ch measure, and 44px touch floor |
| Shape and depth | Five radii, four shadows, dark-surface elevation steps, and rims |
| Motion | Four durations and two easing curves |
| Syntax | Ten dark-panel roles plus ten separately measured light-panel roles |
| Terminal | Dark-default and optional-light sixteen-slot ANSI palettes plus chrome |
| Accessibility | Font scale, strong focus, contrast, link, motion, transparency, and spacing hooks |

## Select an appearance

Light is the root contract. With no explicit choice, the operating-system dark
preference resolves to navy. An explicit selector always wins.

```html
<html data-theme="light">
<html data-theme="dark">
<html data-theme="dark" data-surface="deep">
```

| Selector | Result |
|---|---|
| `[data-theme="light"]` | Light canvas (`#f8f9fb`) and white raised surfaces |
| `[data-theme="dark"]` | Navy-default page (`#132440`) with raised `#1a2b3e` surfaces |
| `[data-theme="dark"][data-surface="deep"]` | Deep page (`#0e1720`) and `#131e2b` raised surfaces |

Navy is a documented derivative. It changes the first five midnight steps and
the fourteen aliases that resolve from them; orange, slate, text, statuses,
syntax, and terminal values remain shared with deep dark.

## Use semantic roles

```css
.card {
  background: var(--color-surface);
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-4) var(--space-5);
}

.button--accent {
  background: var(--color-accent-solid);
  color: var(--fixed-control-text, #fff);
}
```

Do not use step 9 as text: it is intentionally constant across appearances and
does not clear text contrast on dark surfaces. Use `--color-text-*`, `--fg-*`,
or steps 11–12. On a semantic tint, use the matching `-fg`; a solid status value
is not automatically the correct foreground for its tint.

## Light code and terminal companions

Code and terminal surfaces are dark by default in all three page appearances.
The exports also carry complete light companions for deliberate light panels:

```css
.code--light {
  background: var(--syntax-light-surface);
  color: var(--syntax-plain-light);
}

.terminal--light {
  background: var(--terminal-light-surface);
  color: var(--terminal-light-foreground);
}
```

These values never activate automatically. A component opts in to the entire
companion palette; mixing light and dark syntax roles is not supported.

## Typography scales as one system

Every exported type size is a calculation over `--font-scale`. This makes the
200% accessibility setting apply without rewriting component selectors.

```css
html[data-font-size="xxxl"] { --font-scale: 2; }

h1 {
  font-size: var(--type-h1-size);
  font-weight: var(--type-h1-weight);
  line-height: var(--type-h1-lh);
}
```

## Framework notes

CSS custom properties can be used in declarations and JavaScript, but not as
the condition of a media query. Write `@media (min-width: 768px)` even though
`--breakpoint-md` is also exported.

Tailwind does not infer the selector strategy. It receives explicit
`midnight`, `midnightNavy`, and `midnightDeep` namespaces (and equivalent
semantic groups); the consuming project maps those values to its own variants.

The JSON file preserves the same `light`, `navy`, and `deep` hierarchy and
contains both syntax and terminal palettes. It is the preferred input for
generators that do not consume CSS.

{{% callout title="Generated means verified" type="info" %}}
The documentation specimens and downloadable outputs use the same structured
values. The build, token drift check, and three-appearance contrast audit must
all pass before a token change ships.
{{% /callout %}}


---
Source: https://projectious-work.github.io/brand/v3.0.2/docs/tokens/index.md
