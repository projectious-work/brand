# Standalone Hugo/Hextra example

This self-contained kitchen-sink site is separate from the parent build.

It is **branded**: it applies the Hextra adapter documented in
`src/content/docs/themes/hugo.md`, so the shell, palette, and component states
here are the ones that guidance specifies.

| File | Role |
|---|---|
| `assets/css/custom.css` | The brand adapter — primary ramp, shared colour layer, component rules |
| `layouts/_shortcodes/pj-callout.html` | Brand callout; Hextra's built-in one exposes no class hook |
| `content/docs/review-specimen.md` | The review fixture — hierarchy, callouts, cards, code, action |

`content/docs/review-specimen.md` uses the same content states as the Docsy
example, so a theme migration compares like with like. The adapter targets
Hextra v0.10.0; re-check its class names after a theme upgrade.

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
