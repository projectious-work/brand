---
title: Hugo/Hextra
linkTitle: Hugo/Hextra
weight: 20
description: A complete, upgrade-safe recipe for rendering Hextra with the
  projectious.work brand.
---

[Hextra](https://imfing.github.io/hextra/) is a Hugo documentation theme with
a compact shell, generated side navigation, and a supported custom-CSS entry
point. Use its quiet, task-focused reading model—similar in spirit to
[Porter](https://porter.sh/)—while retaining projectious.work typography,
colour, assets, and interaction rules.

Start with the shared [implementation contract]({{< relref
"implementation-contract" >}}), then use the
[Hextra specimen]({{< relref "hextra-specimen" >}}) as the comparable visual
fixture when reviewing the implemented Hextra site.

## What conformant looks like

The reading column should stay calm: clear heading hierarchy, an unobtrusive
sidebar, a useful table of contents, and one action only when the task calls
for it. Avoid a copied product-marketing treatment, excessive card shadows,
or a logo that competes with the page title.

| Element | Required treatment |
|---|---|
| Shell | `wide` page frame with a focused reading column; compact, dark-aware navbar |
| Typography | Plus Jakarta Sans headings; Source Sans 3 content; IBM Plex Mono code |
| Accent | `#cc4528` only for the primary action or active emphasis; links remain blue |
| Surfaces | White / `#0e1720` app backgrounds; `#131e2b` raised dark surface |
| Navigation | Content-tree sidebar, current item distinct without colour alone |
| Dark mode | `system` default and a visible toggle; paired light/dark logo and favicon |
| Footer and search | Quiet supporting UI, local/project-controlled assets where required |

## Install and configure the theme

Pin the Hextra module or checked-in theme version. Keep the installation and
theme upgrade separate from brand overrides. Hextra reads its site settings
from `hugo.yaml`; its [configuration guide](https://imfing.github.io/hextra/docs/guide/configuration/)
documents the navigation, sidebar, favicon, theme, search, and page settings.

```yaml
module:
  imports:
    - path: github.com/imfing/hextra

enableGitInfo: true
markup:
  goldmark:
    renderer:
      unsafe: true # only for reviewed component examples
  highlight:
    noClasses: false

params:
  theme:
    default: system
    displayToggle: true
  navbar:
    displayTitle: true
    displayLogo: true
    width: wide
    logo:
      path: images/logo.svg
      dark: images/logo-dark.svg
      link: /
      width: 160
      height: 32
  page:
    width: wide
    displayPagination: true
  footer:
    width: wide
  search:
    enable: true
    type: flexsearch
    flexsearch:
      index: content
      tokenize: forward
  editURL:
    enable: true
    base: https://github.com/projectious-work/brand/edit/development/src/content

menu:
  main:
    - name: Documentation
      pageRef: /docs
      weight: 10
    - name: Search
      weight: 20
      params:
        type: search
    - name: Theme
      weight: 30
      params:
        type: theme-toggle
    - name: GitHub
      url: https://github.com/projectious-work/brand
      weight: 40
      params:
        icon: github
```

Hextra generates the main sidebar from the content directory. Create a folder
with an `_index.md` to make a group, then set front-matter weights. Exclude
utility pages with `sidebar.exclude: true`; hide a sidebar only when a page
needs the additional reading width.

```text
content/docs/
└── platform/
    ├── _index.md       # title: Platform; weight: 40
    ├── deployment.md   # title: Deployment; weight: 10
    └── operations.md   # title: Operations; weight: 20
```

## Load the brand through custom CSS

Hextra automatically loads `assets/css/custom.css`. Use it as the single
brand adapter. The [Hextra customization guide](https://imfing.github.io/hextra/docs/advanced/customization/)
documents this file, its primary HSL variables, layout variables, and public
component classes.

```css
/* assets/css/custom.css */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap");

:root {
  --primary-hue: 214deg;        /* #1d3352, midnight-9 */
  --primary-saturation: 47%;
  --primary-lightness: 22%;
  --hextra-max-page-width: 90rem;
  --hextra-max-navbar-width: 90rem;
  --hextra-max-footer-width: 90rem;
}

@layer theme {
  :root {
    --hx-default-font-family: "Source Sans 3", system-ui, sans-serif;
    --hx-default-mono-font-family: "IBM Plex Mono", ui-monospace, monospace;
  }
}

.content h1, .content h2, .content h3, .hextra-nav-container {
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  letter-spacing: -0.3px;
}

.content a { color: #3a5a82; }
.content a:hover { color: #cc4528; }
.hextra-feature-card, .hextra-card {
  border-radius: 9px;
  border-color: #dadce0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
}
.hextra-code-block, .content pre {
  background: #0e1720;
  border-radius: 9px;
}
html.dark .hextra-card, html.dark .hextra-feature-card {
  background: #131e2b;
  border-color: rgba(255, 255, 255, 0.08);
}
```

Use the HSL primary variables for theme-primary states, not to make every
surface orange. The `accent-solid` value is intentionally an explicit
component treatment because it is the accessible white-on-accent fill:

```css
.pj-primary-action {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 6px;
  background: #cc4528;
  color: #fff;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  text-decoration: none;
}
.pj-primary-action:hover, .pj-primary-action:focus-visible {
  background: #b84228;
  color: #fff;
}
```

## Brand every visible theme element

| Area | Configure | Review |
|---|---|---|
| Logo | `params.navbar.logo`, files in `static/images/` | Light/dark lockups, intrinsic dimensions, clear space |
| Favicon | `static/favicon.svg` and `static/favicon-dark.svg` | Correct asset in each colour mode |
| Navbar | `params.navbar`, `menu.main`, custom CSS | Product title, search, theme control, mobile trigger |
| Sidebar | content tree, front matter, `menu.sidebar` | Weight order, current marker, no duplicate utility links |
| TOC | heading structure, `toc: false` only when needed | Accurate H2–H4 outline, useful at desktop width |
| Search | `params.search` | Clear input, keyboard use, relevant result excerpts |
| Cards and grids | Hextra shortcodes and public CSS classes | 9px radius, restrained shadow, semantic content grouping |
| Code and copy | Chroma plus `.hextra-code-block` | Always dark, readable syntax, visible copy result |
| Images | page bundles, `imageZoom` only when helpful | Descriptive alt text, no text baked into screenshots |
| Footer | `i18n/en.yaml` and optional footer partial | Copyright, project links, dark text contrast |
| Scripts | local `assets/` paths where practical | No surprise third-party runtime or unreviewed tracking |

Hextra's configuration supports local paths for optional script assets. Use
that facility for search, diagrams, math, or image zoom when the deployment
must avoid third-party CDNs. Keep every required font file alongside any local
font CSS.

## Page-part example

This Markdown produces a compact technical page portion that exercises the
brand without needing a custom layout:

```md
---
title: Deploy a provider
description: Validate a provider configuration and promote it safely.
weight: 10
---

{{</* callout type="info" */>}}
Run local validation before requesting promotion.
{{</* /callout */>}}

## Validate the configuration

Use `brand/tokens/tokens.json` as the input. Do not duplicate token values.

<a class="pj-primary-action" href="#deploy">Deploy configuration</a>

{{</* cards */>}}
  {{</* card link="#validate" title="Validate" subtitle="Check tokens and links" */>}}
  {{</* card link="#deploy" title="Deploy" subtitle="Promote the checked build" */>}}
{{</* /cards */>}}
```

## Accessibility and release gate

Before merging, test 320px and 1280px widths; keyboard order and focus; zoom
at 200%; reduced motion; light and dark themes; search; logo/favicons; code
contrast; and every custom card or action. Do not let a custom CSS override
remove focus indicators, semantic headings, or text selection.

## Sources and upgrade boundary

- [Hextra configuration](https://imfing.github.io/hextra/docs/guide/configuration/)
- [Hextra customization](https://imfing.github.io/hextra/docs/advanced/customization/)
- [Hugo configuration](https://gohugo.io/configuration/)

When upgrading Hextra, compare the generated shell before and after the change.
Limit overrides to documented settings and public classes; a copied theme
template becomes the project's maintenance burden.
