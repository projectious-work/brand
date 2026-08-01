---
title: Hugo/Docsy
linkTitle: Hugo/Docsy
weight: 10
description: A complete, upgrade-safe recipe for rendering Docsy with the
  projectious.work brand.
---

[Docsy](https://www.docsy.dev/) is Hugo's Bootstrap-and-SCSS documentation
theme. Its documented project SCSS files are the supported customization seam;
this is where the brand belongs. Do not edit `themes/docsy/`.

## What conformant looks like

Use a confident technical shell: a compact dark navbar, a clear page title,
quiet reading surfaces, and cards or callouts only where they help scanning.
This takes the hierarchy and modular discovery cues from
[Kubeflow](https://www.kubeflow.org/) without copying its assets or styling.

| Element | Required treatment |
|---|---|
| Navbar and footer | `midnight-9` / `midnight-dark-1` surfaces, supplied logo, visible focus |
| Headings | Plus Jakarta Sans, 700–800; tight tracking above 20px |
| Body and navigation | Source Sans 3, 16px / 1.65 for long-form content |
| Code | IBM Plex Mono on an always-dark surface |
| Primary action | One `accent-solid` control, white label, 6px radius |
| Cards and callouts | 9px radius, token border, restrained shadow; semantic colours only |
| Light and dark | `data-bs-theme` palettes tested independently; never invert a screenshot |

## Install and configure the theme

Use the current Docsy installation method selected by the site (Hugo module,
submodule, or checked-in theme). Keep the version pinned and upgrade it in its
own pull request. The [Docsy content guide](https://www.docsy.dev/docs/content/adding-content/)
documents the `docs` content type and its generated nested side navigation.

For a site rooted at `src/`, this is the relevant shape of `hugo.yaml`:

```yaml
theme: [docsy]
enableGitInfo: true

markup:
  goldmark:
    renderer:
      unsafe: true # only when reviewed Hugo/HTML examples require it
  highlight:
    noClasses: false

params:
  ui:
    navbar_logo: true
    navbar_theme: dark
    showLightDarkModeMenu: true
    sidebar_menu_compact: true
    sidebar_menu_foldable: true
    sidebar_search_disable: false
  copyright:
    authors: "Projectious"
    from_year: 2026

menu:
  main:
    - name: Documentation
      url: /docs/
      weight: 10
```

Keep pages under `content/docs/`. A section `_index.md` creates a sidebar
group; descendant page `weight` values create a deliberate order. The following
is enough to make a new group and pages appear as a nested Docsy sidebar menu:

```text
content/docs/
└── platform/
    ├── _index.md       # title: Platform; weight: 40
    ├── deployment.md   # title: Deployment; weight: 10
    └── operations.md   # title: Operations; weight: 20
```

Use `title`, `linkTitle`, `description`, and `weight` in front matter. A
description is not decorative: it also feeds document summaries and search
metadata. Internal links use `relref`, so a changed base URL cannot silently
break them.

## Map the brand into Bootstrap and Docsy

Docsy reads project styles from `assets/scss/` before theme styles. Place the
following files in the site, not in the theme. This follows Docsy's documented
project-variable and project-style extension model:

```text
src/assets/scss/
├── _variables_project.scss
├── _variables_project_after_bs.scss
└── _styles_project.scss
```

Start with Bootstrap's semantic roles, rather than assigning a brand colour to
every individual selector.

```scss
// assets/scss/_variables_project.scss
$primary: #1d3352;   // midnight-9: headings, stable navigation
$secondary: #546a82; // slate-9: secondary UI
$success: #2f7d65;
$info: #3a5a82;
$warning: #8b6508;
$danger: #a8261c;

$font-family-sans-serif: "Source Sans 3", system-ui, sans-serif;
$font-family-monospace: "IBM Plex Mono", ui-monospace, monospace;
$headings-font-family: "Plus Jakarta Sans", system-ui, sans-serif;
$headings-font-weight: 700;
$body-line-height: 1.65;
$border-radius-sm: 3px;
$border-radius: 6px;
$border-radius-lg: 9px;
$enable-gradients: false;
```

Use the post-Bootstrap map file only when a named semantic role is genuinely
missing. Do not replace `primary` with orange just to make controls loud.

```scss
// assets/scss/_variables_project_after_bs.scss
$projectious-colors: (
  "accent-solid": #cc4528,
  "surface": #f8f9fb,
);
$theme-colors: map-merge($theme-colors, $projectious-colors);
```

Then put component-level rules in `_styles_project.scss`. This example is a
complete fixture for the navbar, content, code, links, and buttons.

```scss
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap");

:root {
  --pj-accent-solid: #cc4528;
  --pj-accent-hover: #b84228;
  --pj-border: #dadce0;
}

body { color: #142438; }
h1, h2, h3, h4, h5, h6 { letter-spacing: -0.3px; }
a { color: #3a5a82; }
a:hover { color: #cc4528; }
.btn-primary {
  background: var(--pj-accent-solid);
  border-color: var(--pj-accent-solid);
  border-radius: 6px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
}
.btn-primary:hover, .btn-primary:focus-visible {
  background: var(--pj-accent-hover);
  border-color: var(--pj-accent-hover);
}
pre, .highlight { background: #0e1720; border-radius: 9px; }
code { font-family: "IBM Plex Mono", monospace; }
[data-bs-theme="dark"] {
  --bs-body-bg: #0e1720;
  --bs-body-color: #c5daf0;
  --bs-heading-color: #c5daf0;
  --bs-secondary-color: #97a8b8;
  --pj-border: rgba(255, 255, 255, 0.08);
}
```

Docsy exposes a light/dark menu through `params.ui.showLightDarkModeMenu`; its
[look-and-feel guide](https://www.docsy.dev/docs/content/lookandfeel/) explains
the Bootstrap color-mode mechanism. Do not disable it for a branded site: add
the dark semantic values above and test them instead.

## Brand every visible theme element

| Area | Configure | Review |
|---|---|---|
| Logo | `static/` assets and `params.ui.navbar_logo` | Correct lockup, clear space, no CSS recolour |
| Navbar | `params.ui.navbar_theme`, project SCSS | Dark surface, compact height, accessible menu trigger |
| Sidebar | content tree, `weight`, compact/foldable params | Stable order, current-page state, keyboard traversal |
| TOC | heading hierarchy and `tableOfContents` | H2–H4 only; no skipped heading levels |
| Search | `offlineSearch` and sidebar search params | Search is discoverable and has readable results |
| Alerts | semantic Bootstrap roles | Never use orange for ordinary warning text without contrast testing |
| Tables | project SCSS and Markdown tables | Horizontal overflow stays inside its container |
| Images | page bundles and Hugo image processing | Alt text, attribution, dark-mode treatment, no baked text |
| Footer | `params.links`, copyright, project partials | Project links, current year, dark-surface text contrast |
| Code | Hugo Chroma plus project CSS | Always dark, copy affordance if enabled, AA token colours |

## Page-part example

Use ordinary Docsy content and one primary action. This produces a direct,
task-oriented block without turning documentation into a marketing page.

```md
---
title: Deploy a provider
linkTitle: Deploy
description: Validate a provider configuration and promote it safely.
weight: 10
---

{{% alert title="Before you begin" color="info" %}}
Run the validation command locally before requesting promotion.
{{% /alert %}}

## Validate the configuration

Use `brand/tokens/tokens.json` as the input. Do not duplicate token values.

<a class="btn btn-primary" href="#deploy">Deploy configuration</a>
```

## Accessibility and release gate

Before merging, test 320px and 1280px widths; the keyboard order; visible
focus; zoom at 200%; a reduced-motion preference; light and dark modes; images
with meaningful alt text; and text contrast of all custom controls. Build with
the repository's Hugo command and inspect the generated page with the same
base URL used in deployment.

## Sources and upgrade boundary

- [Docsy: adding content](https://www.docsy.dev/docs/content/adding-content/)
- [Docsy: look and feel](https://www.docsy.dev/docs/content/lookandfeel/)
- [Hugo configuration](https://gohugo.io/configuration/)

When updating Docsy, diff the generated output and re-check every override in
`assets/scss/`; theme-internal SCSS is not a stable public API.
