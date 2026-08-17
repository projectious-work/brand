# Hugo

> Apply the projectious.work brand through the supported Hugo theme, its public extension points, and site-owned content.


The supported Hugo implementation is
[`projectious-work/brand-theme-hugo-vanilla`](https://github.com/projectious-work/brand-theme-hugo-vanilla/).
It is the reference shell for this documentation and the reusable starting
point for other projectious.work sites. Use the theme's layouts, tokens,
components, and public extension points before adding site-local code.

This guide targets **v0.3.2**. Pin that release: a site should change its theme
only in an intentional, reviewable update.

## What the theme owns

The theme implements the reusable documentation product rather than one
particular site's content.

| Theme responsibility | Site responsibility |
|---|---|
| Header, navigation, footer, search, breadcrumbs, and table of contents | Information architecture, page titles, weights, and copy |
| Brand token namespaces and responsive shell | Site-specific token additions through public hooks |
| Standard Markdown rendering and public shortcodes | Domain specimens and examples composed from those primitives |
| HTML, Markdown, print, LLMS, and search-index outputs | Correct output configuration and content metadata |
| Public layout blocks and partial extension points | Narrow overrides with a documented reason |

Do not copy internal theme partials into a site. A copied internal file stops
receiving fixes and silently becomes a fork.

## Install and pin

Use Hugo Modules and record the exact release in `go.mod`.

```go
module github.com/projectious-work/example-site

go 1.25.0

require github.com/projectious-work/brand-theme-hugo-vanilla v0.3.2
```

```yaml
module:
  imports:
    - path: github.com/projectious-work/brand-theme-hugo-vanilla
```

Fetch the module, then commit both module files.

```console
hugo mod get github.com/projectious-work/brand-theme-hugo-vanilla@v0.3.2
hugo mod tidy
```

Run the development server from the Hugo source directory.

```console
hugo server --disableFastRender
```

## Configure the site

The theme builds navigation from Hugo menus. Keep the public header short and
stable; this site uses exactly five destinations.

```yaml
menus:
  main:
    - name: Getting started
      pageRef: /getting-started
      weight: 10
    - name: Documentation
      pageRef: /docs
      weight: 20
    - name: Contributing
      pageRef: /contributing
      weight: 30
    - name: Downloads
      pageRef: /downloads
      weight: 40
    - name: Legal
      pageRef: /legal
      weight: 50
```

Use section indexes and page weights for the documentation hierarchy. Keep the
header for global destinations; do not duplicate the entire documentation tree
there.

## Use the public content vocabulary

Write ordinary Markdown first. Add a shortcode only when the content has a
meaning Markdown cannot express, such as a labelled component specimen or a
semantic callout. The theme exposes public shortcodes for its standard content
patterns; see the theme's
[reference implementation](https://projectious-work.github.io/brand-theme-hugo-vanilla/)
for current parameters and rendered examples.

Rules for site-local specimens:

1. Make the source understandable without relying on presentation alone.
2. Use semantic token names rather than copying colour literals into markup.
3. Show all appearances when colour or elevation changes meaningfully.
4. Keep keyboard order equal to DOM order.
5. Include the specimen's intent and implementation rule in surrounding copy.
6. Prefer a local shortcode over enabling raw HTML throughout Markdown.

This documentation follows that model: colour scales, typography, controls,
code, terminal chrome, layouts, and collateral are live translations of the
design-system previews, not embedded screenshots of them.

## Extend through supported hooks

Version 0.3.2 provides public end-of-bundle hooks for site-owned assets.

```text
layouts/
└── partials/
    └── hooks/
        ├── scripts-end.html
        └── styles-end.html
```

Compile a site stylesheet from the style hook:

```go-html-template
{{- with resources.Get "scss/specimens.scss" -}}
  {{- $css := . | css.Sass | minify | fingerprint -}}
  <link rel="stylesheet" href="{{ $css.RelPermalink }}"
    integrity="{{ $css.Data.Integrity }}">
{{- end -}}
```

Load narrowly scoped behaviour from the script hook:

```go-html-template
{{- with resources.Get "js/color-swatches.js" -}}
  {{- $js := . | minify | fingerprint -}}
  <script defer src="{{ $js.RelPermalink }}"
    integrity="{{ $js.Data.Integrity }}"></script>
{{- end -}}
```

Keep these hooks thin. They are integration points, not a place to recreate the
theme pipeline.

## Override deliberately

The theme exposes a named `main` layout block and public partials for supported
composition. Before overriding anything:

1. confirm Markdown, configuration, a shortcode, or a public hook cannot solve
   the requirement;
2. identify whether the target is documented as public;
3. copy the smallest possible unit;
4. add a comment naming the upstream version and reason;
5. re-audit the override on every theme update.

If several sites need the same override, propose it upstream. Repetition is
evidence that the capability belongs in the theme.

## Honour the appearance contract

The brand has three appearances:

| Appearance | Selector | Purpose |
|---|---|---|
| Light | `data-theme="light"` | Bright canvas and paper-like surfaces |
| Navy | `data-theme="dark"` | Default dark product appearance |
| Deep | `data-theme="dark" data-surface="deep"` | Opt-in near-black focused workspace |

Do not derive one appearance by inverting another. Bind components to semantic
roles and let each appearance provide its own values. Code and terminal
specimens may also have explicit light variants; a code block is not required
to stay dark merely because that was an older convention.

The initial inline appearance script must run before the first paint so the
page does not flash in the wrong scheme. A visible control must remain keyboard
operable, expose its current state, and persist the user's choice.

## Support every output

The theme can render more than the browser page. Treat these as product
surfaces, not build by-products.

| Output | Review obligation |
|---|---|
| HTML | Responsive shell, navigation, search, focus, and all appearances |
| Print | No navigation clutter; URLs, tables, and code remain legible |
| Markdown | Meaning and hierarchy survive without site chrome |
| LLMS | Useful machine-oriented index and page discovery |
| Search index | Titles, descriptions, and canonical routes are accurate |

Only enable outputs the site publishes, but test every enabled format in the
release build.

## Upgrade the theme

Treat a theme update like a dependency change, not a cosmetic refresh.

```console
hugo mod get github.com/projectious-work/brand-theme-hugo-vanilla@v0.3.2
hugo mod tidy
hugo mod graph
```

Then:

1. read the release notes and compare the module graph;
2. build from a clean destination;
3. review header, navigation, search, tables, callouts, code, and forms;
4. test light, navy, and deep appearances at narrow and wide widths;
5. test keyboard navigation, 200% zoom, reduced motion, and strong focus;
6. inspect print, Markdown, LLMS, and search-index outputs;
7. run link, contrast, and accessibility checks;
8. re-evaluate every site-local override.

Record the theme version in the site's dependency and SBOM documentation. The
[Maintenance](/docs/maintenance/) and [SBOM](/docs/sbom/) pages define the
repository-wide review and provenance expectations.

## Acceptance checklist

- Theme module is pinned to v0.3.2 and both module files are committed.
- Header contains Getting started, Documentation, Contributing, Downloads, and
  Legal in that order.
- Site additions use public hooks, blocks, partials, and shortcodes only.
- Light, navy, and deep appearances use semantic roles rather than inversion.
- Code and terminal examples include their defined light treatments.
- Tabler icons remain outline, 1.5px stroke, and use the approved size set.
- All enabled human and machine outputs build successfully.
- Narrow/wide, keyboard, zoom, motion, focus, contrast, and print checks pass.
- Local overrides have an owner, reason, and upstream-version review note.


---
Source: https://projectious-work.github.io/brand/docs/themes/hugo/index.md
