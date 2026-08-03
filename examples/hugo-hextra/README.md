# Standalone Hugo/Hextra example

This self-contained kitchen-sink site is separate from the parent build.

It is **branded**: it applies the Hextra adapter documented in
`src/content/docs/themes/hugo.md`, so the shell, palette, and component states
here are the ones that guidance specifies.

| File | Role |
|---|---|
| `assets/css/custom.css` | The brand adapter — primary ramp, shared colour layer, component rules |
| `assets/js/toc-active.js` | Widens Hextra's scroll-spy band; loaded through the documented `custom/head-end.html` hook |
| `layouts/_shortcodes/pj-callout.html` | Brand callout; Hextra's built-in one styles itself with Tailwind utilities and exposes no class hook to rebind |
| `content/docs/review-specimen.md` | The review fixture — hierarchy, callouts, cards, code, action |
| `content/docs/dashboard.md`, `kitchen-sink.md` | Mounted from `examples/shared/`; identical in both examples |

`content/docs/review-specimen.md` uses the same content states as the Docsy
example, so a theme migration compares like with like. The adapter targets
Hextra v0.10.0; re-check its class names after a theme upgrade.

## What this example does not do

It holds **no brand values of its own**. Every colour in `custom.css` is a
reference into `brand/tokens/variables.css`, which is mounted as
`css/brand-tokens.css` and generated from `src/data/brand.yaml`. The `*-light-N`
and `*-dark-N` names are used rather than the mode-swapping `--midnight-N`,
because those follow `prefers-color-scheme` while Hextra's mode is the
`html.dark` class — mapping the fixed ramps explicitly is what keeps the theme's
own toggle authoritative.

It also overrides **no theme template**. The mark is configured through
`params.navbar.logo`, which Hextra's own `navbar-title` partial already reads;
the theme toggle sits where Hextra puts it, at the foot of the sidebar. An
earlier version moved that toggle into the navbar with a script, which left an
empty white strip behind it — the kind of thing this example exists to not
demonstrate.

The one place raw HTML remains in a content file is the `<div class="hx:…">`
spacing wrappers on the home page, which is the pattern Hextra's own
documentation uses for hero layouts.

## Local commands

```sh
cd examples/hugo-hextra
./scripts/build.sh
./scripts/serve.sh
```

The server is available at <http://localhost:1314/>. The scripts only build
and serve locally; they do not publish or run CI. Use Hugo Extended with Go
module support.

## How this example gets the brand

The colour scales, the `--pj-*` token layer, the component specimens, and the
kitchen-sink page are **mounted** from the documentation site by `hugo.yaml`
rather than copied. Hextra loads plain CSS, so the SCSS specimens are compiled
by `layouts/_partials/custom/head-end.html` — Hextra's documented head hook —
into `specimens.css`. No theme template is overridden.

The example is built into the published tree at `/examples/hugo-hextra/` by
`scripts/build-docs.sh`. To preview it together with the documentation, run
`scripts/serve-docs.sh --built`.
