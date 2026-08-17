# Developer guide

> Implement the projectious.work design system with semantic tokens, documented patterns, and reproducible checks.


## Build from roles, not screenshots

Start with semantic roles such as `--bg`, `--surface`, `--fg-1`, `--border`,
`--tag-bg`, and the semantic status triples. Primitive scale steps support
those roles. A screenshot is verification evidence, not a source file.

## Select the appearance explicitly

```html
<html data-theme="light" data-a11y="auto" data-focus="strong">
```

Use `data-theme="dark"` for navy dark, the default dark appearance. Add
`data-surface="deep"` for deep dark. Review all three because elevation, borders,
and page/surface separation change even when typography and status roles do
not.

## Use the three type roles

```css
.heading { font-family: var(--font-heading); }
.copy { font-family: var(--font-body); }
.system-output { font-family: var(--font-code); }
```

Self-hosted builds must ship all specified weights. IBM Plex Mono needs 400,
500, 600, and 700 in upright and italic because syntax meaning is carried by
weight and style as well as hue.

## Compose interfaces

Use a 12-column desktop grid, 8 columns at medium widths, and 4 at the base.
Two-column layouts begin at 768 px; persistent sidebars begin at 1024 px. Keep
the reading measure at 65ch and every touch target at least 44 px.

Solid accent controls use `--color-accent-solid` with
`--fixed-control-text`. Semantic tints use their matching `-fg`. On dark
surfaces, pair `--shadow-N` with `--elevated-N`; the surface step carries the
visible elevation.

## Code and terminal surfaces

Code is dark by default on `--code-panel-surface` (`#131e2b`). A terminal is
deeper on `--terminal-surface` (`#0e1720`). A light code or terminal specimen is
an explicit opt-in and must use the complete light companion set, including
selection colours and chrome.

## Verify before release

```sh
./scripts/verify.sh
```

The verification contract includes generated-token parity, font and manifest
integrity, Hugo output, AI discovery, MCP protocol behavior, contrast across
appearances, and internal links. Add fit tests for any fixed-size card, slide,
or export under loose text spacing and 200% text.


---
Source: https://projectious-work.github.io/brand/docs/developer-guide/index.md
