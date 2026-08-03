# Hugo/Docsy kitchen sink example

This is a standalone, local-only Docsy example. It uses the repository's
vendored Docsy theme through a relative Hugo theme path; it does not change or
depend on the parent site's configuration.

It is **branded**: it applies the Docsy adapter documented in
`src/content/docs/themes/hugo.md`, so the shell, palette, and component states
here are the ones that guidance specifies.

| File | Role |
|---|---|
| `hugo.yaml` | Theme path, menu, and the mounts that bring the brand in |
| `content/docs/review-specimen.md` | The review fixture — hierarchy, callouts, cards, code, action |
| `content/docs/kitchen-sink.md`, `dashboard.md` | Mounted from `examples/shared/`; identical in both examples |

There is deliberately **no stylesheet here**. Docsy's two documented extension
points are `assets/scss/_variables_project.scss` and `_styles_project.scss`, and
this example mounts the documentation site's copies of both. It is therefore
styled by the same two files as the site it demonstrates: "looks like the
documentation" is true by construction rather than by review, and there is no
second adapter to keep in step.

`content/docs/review-specimen.md` uses the same content states as the Hextra
example, so a theme migration compares like with like.

Use Hugo Extended with Go module support. Docsy resolves its Bootstrap module
dependencies through Go, even when the theme itself is available locally.

## Build

From this directory:

```sh
./scripts/build.sh
```

The generated site is written to `public/`.

## Serve locally

```sh
./scripts/serve.sh
```

Open <http://localhost:1315/>. Press Ctrl-C to stop the server.

The scripts intentionally provide only manual local build and serve commands;
there is no CI or deployment configuration in this example.

## How this example gets the brand

The colour scales, the `--pj-*` token layer, the component specimens, and the
kitchen-sink page are **mounted** from the documentation site by `hugo.yaml`
rather than copied. A change to a brand token changes this example on the next
build, so it cannot quietly drift from the system it demonstrates.

The example is built into the published tree at `/examples/hugo-docsy/` by
`scripts/build-docs.sh`. To preview it together with the documentation, run
`scripts/serve-docs.sh --built`.

## What this example does not do

It holds **no brand values and no stylesheet of its own** — see above. The
Hextra example cannot do the same, because Hextra is not Docsy and takes plain
CSS rather than SCSS; it reaches the same values by reference through
`brand/tokens/variables.css`.

Content files carry no raw HTML. The card grid uses Docsy's own `cardpane` /
`card` shortcodes; the primary action and the form specimen use `pj-action` and
`pj-form`, which are mounted from the documentation site's shortcode directory
so the same call renders the same control in both examples.

The mark is enabled with `params.ui.navbar_logo` and the asset mounted at
`assets/icons/logo.svg` — the arrangement Docsy already supports. No theme
template is overridden.
