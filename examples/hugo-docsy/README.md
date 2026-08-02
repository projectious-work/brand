# Hugo/Docsy kitchen sink example

This is a standalone, local-only Docsy example. It uses the repository's
vendored Docsy theme through a relative Hugo theme path; it does not change or
depend on the parent site's configuration.

It is **branded**: it applies the Docsy adapter documented in
`src/content/docs/themes/hugo.md`, so the shell, palette, and component states
here are the ones that guidance specifies.

| File | Role |
|---|---|
| `assets/scss/_variables_project.scss` | Brand values on Bootstrap's semantic roles |
| `assets/scss/_styles_project.scss` | The shared colour layer and Docsy component rules |
| `content/docs/review-specimen.md` | The review fixture — hierarchy, callouts, cards, code, action |
| `content/docs/kitchen-sink.md` | The full component set, mounted from `examples/shared/kitchen-sink.md` |

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
