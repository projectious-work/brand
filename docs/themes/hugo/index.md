# Hugo

> The projectious.work implementation contract and theme guidance for selected Hugo theme frameworks: [Docsy](https://www.docsy.dev/) and [Hextra](https://imfing.github.io/hextra/).

---

LLMS index: [llms.txt](/brand/llms.txt)

---

This page is the source of truth for rendering the projectious.work brand with
Hugo. It answers which files supply the brand, where a theme may be changed,
and how to prove the result is conformant.

Choose the `Docsy` or `Hextra` subsection after reading the shared contract.
The examples use named values such as `midnight-9` and `accent-solid`; resolve
those names from the canonical token source when building a production theme.

## Implementation Contract

This contract applies before choosing Docsy or Hextra. It gives a human
implementer and an AI agent one unambiguous answer to the theme's source of
truth, customization boundary, and release evidence.

### Inputs and ownership

| Need | Canonical input | Do not do this |
|---|---|---|
| Colour values | `brand/tokens/tokens.json` | Copy arbitrary hex values into templates |
| CSS-friendly tokens | `brand/tokens/variables.css` | Create a second, competing token file |
| Logo and icons | `brand/logo/` supplied SVG or raster variants | Redraw, recolour, crop, or stretch a mark |
| Type roles | Brand typography guidance | Substitute a decorative display face |
| Content hierarchy | This documentation content tree and front matter | Encode navigation order in CSS |
| Theme behavior | The selected theme's current official documentation | Patch vendored source as the first option |

A value copied from a code example is an illustration, not a replacement for
the source of truth.

### File boundary

Keep the theme dependency and the branded site separate. This lets a theme
upgrade remain a small, reviewable dependency change.

```text
site/
├── hugo.yaml
├── assets/
│   ├── css/custom.css                    # Hextra adapter
│   └── scss/
│       ├── _variables_project.scss       # Docsy Bootstrap variables
│       ├── _variables_project_after_bs.scss
│       └── _styles_project.scss          # Docsy component overrides
├── static/
│   ├── images/                           # supplied logo variants only
│   └── favicons/                         # supplied favicon variants only
├── content/docs/                         # navigation and page content
└── themes/ or go.mod                     # pinned theme dependency
```

Do not place project branding under a vendored theme directory. Use only the
documented extension point first; document any deliberate exception in the
theme's upgrade notes.

### Non-negotiable visual rules

1. Use Plus Jakarta Sans for headings, Source Sans 3 for reading copy, and
   IBM Plex Mono for code.
2. Use `accent-solid` (`#cc4528`) for a single primary action per view. Its
   white label meets the normal-text contrast floor; identity orange does not
   automatically do so.
3. Keep ordinary links blue. Accent colour is emphasis, not the default link
   colour.
4. Keep code surfaces dark in both light and dark modes. Syntax tokens must be
   tested against that dark surface.
5. Use quiet surfaces, token borders, and modest radii: 3px small, 6px normal,
   9px large. Do not introduce gradients or oversized shadows.
6. Support a user-controlled light/dark mode when the selected theme supports
   it. Test both modes independently; never make a dark mode by inverting a
   light screenshot.
7. Make focus visible without depending on colour alone. The current-page
   marker, active navigation item, and alerts need a non-colour cue too.

### Required page states

Review these states with real content before approving the theme. A theme that
only renders the home page is not complete.

| State | What it proves |
|---|---|
| Long documentation page | Reading measure, headings, TOC, tables, inline code |
| Page with a primary action | Accent contrast, hover, focus, disabled treatment |
| Code-heavy page | Dark code surface, syntax, copy affordance, overflow |
| Nested navigation | Current state, mobile menu, keyboard traversal |
| Search results | Query control, result hierarchy, empty state |
| Callouts and status | Semantic success, info, warning, danger states |
| Wide image and table | Responsive overflow and meaningful alternative text |
| Light and dark mode | Paired surfaces, logo/favicons, contrast, no flash |

### Release evidence

Attach or record the following for a theme change:

- the pinned theme version and the official API/configuration pages consulted;
- screenshots at 320px and 1280px in light and dark mode;
- keyboard evidence for the navbar, sidebar, search, theme toggle, and a
  primary action;
- automated build output and a manual check at 200% zoom;
- a list of project override files, confirming that no vendored theme source
  was edited.

The Docsy and Hextra review fixtures below use comparable content states so
visual regressions during a theme migration are easy to see.

## Docsy

[Docsy](https://www.docsy.dev/) is Hugo's Bootstrap-and-SCSS documentation
theme. Its documented project SCSS files are the supported customization seam;
this is where the brand belongs. Do not edit `themes/docsy/`.

### What conformant looks like

Use a confident but quiet technical shell: a light navigation bar, a clear page
title, white reading surfaces, and cards or callouts only where they help
scanning. Reserve dark surfaces for code, the footer, and dark mode. This takes
the calm, light-shell discovery cues from [Porter](https://porter.sh/) without
copying its assets or styling.

#### Heading hierarchy example

The page title `Hugo` contains H2 sections, such as `Docsy`, and each H2 can
contain H3 subsections. H4 headings provide one further detail level. Hugo's
table of contents is configured to include headings through H4.

| Element | Required treatment |
|---|---|
| Navbar | White / translucent light shell, midnight logo and text, visible focus |
| Footer | `midnight-dark-1` surface, supplied logo, and readable light text |
| Headings | Plus Jakarta Sans, 700–800; tight tracking above 20px |
| Body and navigation | Source Sans 3, 16px / 1.65 for long-form content |
| Code | IBM Plex Mono on an always-dark surface |
| Primary action | One `accent-solid` control, white label, 6px radius |
| Cards and callouts | 9px radius, token border, restrained shadow; semantic colours only |
| Light and dark | `data-bs-theme` palettes tested independently; never invert a screenshot |

### Install and configure the theme

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
    navbar_theme: light
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
group; descendant page `weight` values create a deliberate order. The
following is enough to make a new group and pages appear as a nested Docsy
sidebar menu:

```text
content/docs/
└── platform/
    ├── _index.md       # title: Platform; weight: 40
    ├── deployment.md   # title: Deployment; weight: 10
    └── operations.md   # title: Operations; weight: 20
```

For a complete local kitchen-sink implementation, see the
[Docsy example](https://projectious-work.github.io/brand/examples/hugo-docsy/).
It is built manually with the
scripts in `examples/hugo-docsy/` and deployed beneath the GitHub Pages site.

Use `title`, `linkTitle`, `description`, and `weight` in front matter. A
description also feeds document summaries and search metadata. Internal links
use `relref`, so a changed base URL cannot silently break them.

### Map the brand into Bootstrap and Docsy

Docsy reads project styles from `assets/scss/` before theme styles. Place the
following files in the site, not in the theme:

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
missing:

```scss
// assets/scss/_variables_project_after_bs.scss
$projectious-colors: (
  "accent-solid": #cc4528,
  "surface": #f8f9fb,
);
$theme-colors: map-merge($theme-colors, $projectious-colors);
```

Then put component-level rules in `_styles_project.scss`:

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

#### Docsy color matrix

Apply the same semantic role in both modes. The light and dark values below
are the concrete examples used by the projectious.work Docsy adapter; do not
swap the identity accent (`#e05232`) into a control that carries white text.

| Element | Semantic role | Light mode | Dark mode | Example rendering |
|---|---|---|---|---|
| Page background | App canvas | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | Reading page on a white / midnight canvas |
| Content surface | Cards and panels | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` | White card separated by a quiet border |
| Raised surface | Hovered rows and menus | <span class="pj-color-chip" style="--pj-chip: #f8f9fb" aria-hidden="true"></span> `#f8f9fb` | <span class="pj-color-chip" style="--pj-chip: #1a2b3e" aria-hidden="true"></span> `#1a2b3e` | Search result or dropdown on hover |
| Primary text | Body copy | <span class="pj-color-chip" style="--pj-chip: #142438" aria-hidden="true"></span> `#142438` | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | Paragraphs and table values |
| Secondary text | Supporting copy | <span class="pj-color-chip" style="--pj-chip: #5c6f82" aria-hidden="true"></span> `#5c6f82` | <span class="pj-color-chip" style="--pj-chip: #97a8b8" aria-hidden="true"></span> `#97a8b8` | Descriptions and metadata |
| Muted text | Captions and placeholders | <span class="pj-color-chip" style="--pj-chip: #546a82" aria-hidden="true"></span> `#546a82` | <span class="pj-color-chip" style="--pj-chip: #6b7a88" aria-hidden="true"></span> `#6b7a88` | Placeholder or quiet footer note |
| Headings | H1–H6 | <span class="pj-color-chip" style="--pj-chip: #1d3352" aria-hidden="true"></span> `#1d3352` | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | Page title and section headings |
| Links | Inline and navigation links | <span class="pj-color-chip" style="--pj-chip: #3a5a82" aria-hidden="true"></span> `#3a5a82` | <span class="pj-color-chip" style="--pj-chip: #8aacc8" aria-hidden="true"></span> `#8aacc8` | Blue link in body copy |
| Link hover/focus | Interactive emphasis | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span> `#cc4528` | <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span> `#ea7558` | Link changes color on hover |
| Navbar | Light shell | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` / <span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #e6e8eb" aria-hidden="true"></span> `#e6e8eb` | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | Light translucent header; dark counterpart in dark mode |
| Footer | Deliberate dark close | <span class="pj-color-chip" style="--pj-chip: #132440" aria-hidden="true"></span> `#132440` | <span class="pj-color-chip" style="--pj-chip: #132440" aria-hidden="true"></span> `#132440` | Dark footer with readable light text |
| Sidebar/TOC | Navigation surface | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` | Border-defined left tree and right table of contents |
| Current navigation item | Active state | <span class="pj-color-chip" style="--pj-chip: #e2e9f2" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #1d3352" aria-hidden="true"></span> `#e2e9f2` + `#1d3352` | <span class="pj-color-chip" style="--pj-chip: #2b4d78" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#2b4d78` + `#c5daf0` | Active item has surface and non-color marker |
| Border/divider | Quiet separation | <span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #dadce0" aria-hidden="true"></span> `#dadce0` | <span class="pj-color-chip pj-color-chip--border" style="--pj-chip: rgba(255,255,255,.08)" aria-hidden="true"></span> `rgba(255,255,255,.08)` | Card, table, and input edge |
| Search/input | Field surface | <span class="pj-color-chip" style="--pj-chip: #f8f9fb" aria-hidden="true"></span> `#f8f9fb` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` | Search field with visible focus ring |
| Primary action | Accessible solid control | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#cc4528` / `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#cc4528` / `#ffffff` | `Deploy configuration` button |
| Primary action hover | Action emphasis | <span class="pj-color-chip" style="--pj-chip: #b84228" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#b84228` / `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #142438" aria-hidden="true"></span> `#ea7558` / `#142438` | Button darkens / lifts in each mode |
| Code surface | Always-dark working area | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | YAML or SCSS block never becomes light |
| Code text | Code foreground | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | IBM Plex Mono with readable syntax |
| Info alert | Informational state | <span class="pj-color-chip" style="--pj-chip: #e2e9f2" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #7490b2" aria-hidden="true"></span> `#e2e9f2` / `#7490b2` | <span class="pj-color-chip" style="--pj-chip: #1a2b3e" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #4d7098" aria-hidden="true"></span> `#1a2b3e` / `#4d7098` | Blue info callout with dark text |
| Success alert | Completed state | <span class="pj-color-chip" style="--pj-chip: #d1ebe0" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #2f7d65" aria-hidden="true"></span> `#d1ebe0` / `#2f7d65` | <span class="pj-color-chip" style="--pj-chip: #18382d" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #6cc090" aria-hidden="true"></span> `#18382d` / `#6cc090` | Green `Validated` callout |
| Warning alert | Needs attention | <span class="pj-color-chip" style="--pj-chip: #f5ecd0" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #e05232" aria-hidden="true"></span> `#f5ecd0` / `#e05232` | <span class="pj-color-chip" style="--pj-chip: #3d1e13" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #ea7558" aria-hidden="true"></span> `#3d1e13` / `#ea7558` | Amber warning with explicit action |
| Danger alert | Blocked/error state | <span class="pj-color-chip" style="--pj-chip: #f9e3e1" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #a8261c" aria-hidden="true"></span> `#f9e3e1` / `#a8261c` | <span class="pj-color-chip" style="--pj-chip: #3a1d20" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #f08b80" aria-hidden="true"></span> `#3a1d20` / `#f08b80` | Red error with a next step |
| Focus ring | Keyboard-only cue | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span> `#cc4528` | <span class="pj-color-chip" style="--pj-chip: #f09878" aria-hidden="true"></span> `#f09878` | Visible ring around input or button |

In each row, a pair separated by `/` means `background / foreground` or
`fill / text`. The semantic alert tints are derived from the canonical scales;
keep them in the adapter rather than inventing per-component colours.

#### Complete Docsy color layer

Add this color layer to `src/assets/scss/_styles_project.scss` after the
Bootstrap variables in `src/assets/scss/_variables_project.scss`. It is the
minimum complete surface map; the existing type, code, and component rules can
remain alongside it.

```scss
// src/assets/scss/_styles_project.scss
:root,
[data-bs-theme="light"] {
  --pj-bg: #ffffff;
  --pj-surface: #ffffff;
  --pj-surface-raised: #f8f9fb;
  --pj-text: #142438;
  --pj-text-secondary: #5c6f82;
  --pj-text-muted: #546a82;
  --pj-heading: #1d3352;
  --pj-link: #3a5a82;
  --pj-link-hover: #cc4528;
  --pj-navbar: rgba(255, 255, 255, 0.88);
  --pj-border: #e6e8eb;
  --pj-input: #f8f9fb;
  --pj-code: #0e1720;
  --pj-code-text: #c5daf0;
  --pj-focus: #cc4528;
  --pj-info-bg: #e2e9f2;
  --pj-info-border: #7490b2;
  --pj-success-bg: #d1ebe0;
  --pj-success-border: #2f7d65;
  --pj-warning-bg: #f5ecd0;
  --pj-warning-border: #e05232;
  --pj-danger-bg: #f9e3e1;
  --pj-danger-border: #a8261c;
}

[data-bs-theme="dark"] {
  --pj-bg: #0e1720;
  --pj-surface: #131e2b;
  --pj-surface-raised: #1a2b3e;
  --pj-text: #c5daf0;
  --pj-text-secondary: #97a8b8;
  --pj-text-muted: #6b7a88;
  --pj-heading: #c5daf0;
  --pj-link: #8aacc8;
  --pj-link-hover: #ea7558;
  --pj-navbar: #132440;
  --pj-border: rgba(255, 255, 255, 0.08);
  --pj-input: #131e2b;
  --pj-code: #0e1720;
  --pj-code-text: #c5daf0;
  --pj-focus: #f09878;
  --pj-info-bg: #1a2b3e;
  --pj-info-border: #4d7098;
  --pj-success-bg: #18382d;
  --pj-success-border: #6cc090;
  --pj-warning-bg: #3d1e13;
  --pj-warning-border: #ea7558;
  --pj-danger-bg: #3a1d20;
  --pj-danger-border: #f08b80;
}

body { background: var(--pj-bg); color: var(--pj-text); }
h1, h2, h3, h4, h5, h6 { color: var(--pj-heading); }
a { color: var(--pj-link); }
a:hover, a:focus-visible { color: var(--pj-link-hover); }
.td-navbar { background: var(--pj-navbar); border-bottom: 1px solid var(--pj-border); }
.td-footer { background: #132440; }
.td-sidebar, .td-toc, .card { background: var(--pj-surface); }
.td-sidebar a, .td-toc a { color: var(--pj-link); }
.td-sidebar .active, .td-toc a:hover { background: var(--pj-surface-raised); }
.td-search__input, input, textarea, select {
  background: var(--pj-input);
  border-color: var(--pj-border);
  color: var(--pj-text);
}
.btn-primary {
  background: #cc4528;
  border-color: #cc4528;
  color: #ffffff;
}
.btn-primary:hover, .btn-primary:focus-visible {
  background: var(--pj-link-hover);
  border-color: var(--pj-link-hover);
}
pre, .highlight { background: var(--pj-code); color: var(--pj-code-text); }
:focus-visible { outline: 2px solid var(--pj-focus); outline-offset: 2px; }
.alert-info { background: var(--pj-info-bg); border-color: var(--pj-info-border); }
.alert-success { background: var(--pj-success-bg); border-color: var(--pj-success-border); }
.alert-warning { background: var(--pj-warning-bg); border-color: var(--pj-warning-border); }
.alert-danger { background: var(--pj-danger-bg); border-color: var(--pj-danger-border); }
```

Docsy exposes a light/dark menu through
`params.ui.showLightDarkModeMenu`. Do not disable it for a branded site: add
the dark semantic values above and test them instead.

### Brand every visible theme element

| Area | Configure | Review |
|---|---|---|
| Logo | `static/` assets and `params.ui.navbar_logo` | Correct lockup, clear space, no CSS recolour |
| Navbar | `params.ui.navbar_theme`, project SCSS | Light/translucent shell, compact height, accessible menu trigger |
| Sidebar | content tree, `weight`, compact/foldable params | Stable order, current-page state, keyboard traversal |
| TOC | heading hierarchy and `tableOfContents` | H2–H4 only; no skipped heading levels |
| Search | `offlineSearch` and sidebar search params | Search is discoverable and has readable results |
| Alerts | semantic Bootstrap roles | Never use orange for ordinary warning text without contrast testing |
| Tables | project SCSS and Markdown tables | Horizontal overflow stays inside its container |
| Images | page bundles and Hugo image processing | Alt text, attribution, dark-mode treatment, no baked text |
| Footer | `params.links`, copyright, project partials | Project links, current year, dark-surface text contrast |
| Code | Hugo Chroma plus project CSS | Always dark, copy affordance if enabled, AA token colours |

### Page-part example

Use ordinary Docsy content and one primary action. This produces a direct,
task-oriented block without turning documentation into a marketing page.

```md
---
title: Deploy a provider
linkTitle: Deploy
description: Validate a provider configuration and promote it safely.
weight: 10
---

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Before you begin</div>


Run the validation command locally before requesting promotion.
</div>


## Validate the configuration

Use `brand/tokens/tokens.json` as the input. Do not duplicate token values.

<a class="btn btn-primary" href="#deploy">Deploy configuration</a>
```

### Review specimen

This is the Docsy review fixture: a content-led page that exercises hierarchy,
link behavior, callouts, cards, code, status, and one primary action. The
visual direction takes modular discovery cues from Kubeflow without copying
its identity, assets, or page composition.

<div class="pj-overline">Platform operations</div>

**Ship a reliable integration**

Use this specimen to inspect the actual Docsy shell, type scale, hierarchy,
link behavior, callouts, cards, code treatment, and primary action in one
place. The page must remain readable before any interaction is available.

<p><a class="btn btn-primary" href="#docsy-release-check">Review release check</a></p>

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Release boundary</div>


Validate the configuration locally, then request promotion. The action above
is the only primary action in this view.
</div>


#### What the reader needs first

| Area | State | Owner |
|---|---|---|
| Configuration | Validated | Platform team |
| Documentation | Reviewed | Technical writer |
| Release | Waiting for approval | Release manager |

The table should remain inside a scrollable container on narrow screens. Link
text remains blue, such as the [token reference](/brand/docs/tokens/),
while the accent-filled control remains reserved for the next action.

#### A card-led decision surface

<div class="row g-3 mb-4">
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="h5 card-title">Validate</h3>
        <p class="card-text">Check tokens, configuration, and internal links.</p>
        <a href="#validate">Read validation notes</a>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="h5 card-title">Review</h3>
        <p class="card-text">Confirm accessibility in light and dark modes.</p>
        <a href="#review">Read review criteria</a>
      </div>
    </div>
  </div>
  <div class="col-md-4">
    <div class="card h-100">
      <div class="card-body">
        <h3 class="h5 card-title">Promote</h3>
        <p class="card-text">Create a release only from verified content.</p>
        <a href="#docsy-release-check">Read release check</a>
      </div>
    </div>
  </div>
</div>

Cards are scanning aids, not decoration. Their links remain links rather than
becoming three competing primary actions.

#### Code remains a dark working surface

```yaml
params:
  ui:
    navbar_theme: light
    showLightDarkModeMenu: true
  offlineSearch: true
```

Inline code such as `brand/tokens/tokens.json` must stay distinct from its
paragraph without looking like a second button. The block above stays dark in
both theme modes, with readable syntax and a discoverable copy control.

#### Status language is semantic

<div class="alert alert-success" role="alert"><div class="h4 alert-heading" role="heading">Validated</div>


Use success only for a completed, evidenced check.
</div>


<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">Needs attention</div>


Warnings describe a condition to assess; do not use the brand accent as a
generic warning colour.
</div>


<div class="alert alert-danger" role="alert"><div class="h4 alert-heading" role="heading">Blocked</div>


Errors need a clear next action and must not rely on colour as their only cue.
</div>


#### Release check {#docsy-release-check}

At 320px, check the menu, table overflow, cards, action, code block, and TOC.
At 1280px, check reading measure, fixed navigation, sidebar hierarchy, and
the balance between the content column and its table of contents. Repeat each
check in light and dark modes with keyboard navigation and 200% zoom.

### Accessibility and release gate

In addition to the shared contract, test Docsy's menu, sidebar, search, light /
dark control, code copy affordance, and Bootstrap callouts at 320px and 1280px.
Do not let a project SCSS override remove focus indicators or semantic
headings.

### Sources and upgrade boundary

- [Docsy: adding content](https://www.docsy.dev/docs/content/adding-content/)
- [Docsy: look and feel](https://www.docsy.dev/docs/content/lookandfeel/)
- [Hugo configuration](https://gohugo.io/configuration/)

When updating Docsy, diff the generated output and re-check every override in
`assets/scss/`; theme-internal SCSS is not a stable public API.

## Hextra

[Hextra](https://imfing.github.io/hextra/) is a Hugo documentation theme with
a compact shell, generated side navigation, and a supported custom-CSS entry
point. Use its quiet, task-focused reading model—similar in spirit to
[Porter](https://porter.sh/)—while retaining projectious.work typography,
colour, assets, and interaction rules.

### What conformant looks like

The reading column should stay calm: clear heading hierarchy, an unobtrusive
sidebar, a useful table of contents, and one action only when the task calls
for it. Avoid a copied product-marketing treatment, excessive card shadows,
or a logo that competes with the page title.

| Element | Required treatment |
|---|---|
| Shell | `wide` page frame with a focused reading column; light, translucent navbar in light mode |
| Typography | Plus Jakarta Sans headings; Source Sans 3 content; IBM Plex Mono code |
| Accent | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span> `#cc4528` only for the primary action or active emphasis; links remain blue |
| Surfaces | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> White canvas and cards; <span class="pj-color-chip" style="--pj-chip: #f8f9fb" aria-hidden="true"></span> `#f8f9fb` hover and grouped surface; <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` dark-mode canvas |
| Navigation | Content-tree sidebar, current item distinct without colour alone |
| Dark mode | `system` default and a visible toggle; paired light/dark logo and favicon |
| Footer and search | Quiet supporting UI, local/project-controlled assets where required |

### Install and configure the theme

Pin the Hextra module or checked-in theme version. Keep the installation and
theme upgrade separate from brand overrides. Hextra reads its site settings
from `hugo.yaml`; its [configuration guide](https://imfing.github.io/hextra/docs/guide/configuration/)
documents navigation, sidebar, favicon, theme, search, and page settings.

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

For a complete local kitchen-sink implementation, see the
[Hextra example](https://projectious-work.github.io/brand/examples/hugo-hextra/).
It is built manually with the
scripts in `examples/hugo-hextra/` and deployed beneath the GitHub Pages site.

### Load the brand through custom CSS

Hextra automatically loads `assets/css/custom.css`. Use it as the single
brand adapter. The [Hextra customization guide](https://imfing.github.io/hextra/docs/advanced/customization/)
documents its primary HSL variables, layout variables, and public component
classes.

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
.nav-container-blur {
  background: rgba(255, 255, 255, 0.88);
  border-bottom: 1px solid #e6e8eb;
  backdrop-filter: blur(12px);
}
.hextra-feature-card, .hextra-card {
  background: #ffffff;
  border-radius: 9px;
  border-color: #e6e8eb;
  box-shadow: 0 1px 2px rgba(20, 36, 56, 0.04);
}
.hextra-code-block, .content pre {
  background: #0e1720;
  border-radius: 9px;
}
html.dark .hextra-card, html.dark .hextra-feature-card {
  background: #131e2b;
  border-color: rgba(255, 255, 255, 0.08);
}
html.dark .nav-container-blur {
  background: rgba(14, 23, 32, 0.88);
  border-bottom-color: rgba(255, 255, 255, 0.1);
}
```

Use the HSL primary variables for theme-primary states, not to make every
surface orange. The `accent-solid` value is an explicit component treatment
because it is the accessible white-on-accent fill:

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

#### Hextra color matrix

Hextra uses a class-based dark mode (`html.dark`). Keep the semantic roles
identical to Docsy, but map them through `assets/css/custom.css` and Hextra's
public component classes. The table gives concrete light and dark examples for
the complete shell and its common content elements.

| Element | Semantic role | Light mode | Dark mode | Example rendering |
|---|---|---|---|---|
| Page background | App canvas | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | Wide reading frame on a white / midnight canvas |
| Content surface | Cards and panels | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` | White card separated by a quiet border |
| Raised surface | Hovered rows and menus | <span class="pj-color-chip" style="--pj-chip: #f8f9fb" aria-hidden="true"></span> `#f8f9fb` | <span class="pj-color-chip" style="--pj-chip: #1a2b3e" aria-hidden="true"></span> `#1a2b3e` | Card or menu lifts on hover |
| Primary text | Body copy | <span class="pj-color-chip" style="--pj-chip: #142438" aria-hidden="true"></span> `#142438` | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | Source Sans 3 paragraph text |
| Secondary text | Supporting copy | <span class="pj-color-chip" style="--pj-chip: #5c6f82" aria-hidden="true"></span> `#5c6f82` | <span class="pj-color-chip" style="--pj-chip: #97a8b8" aria-hidden="true"></span> `#97a8b8` | Metadata and explanatory labels |
| Muted text | Captions and placeholders | <span class="pj-color-chip" style="--pj-chip: #546a82" aria-hidden="true"></span> `#546a82` | <span class="pj-color-chip" style="--pj-chip: #6b7a88" aria-hidden="true"></span> `#6b7a88` | Quiet helper text below a field |
| Headings | H1–H6 | <span class="pj-color-chip" style="--pj-chip: #1d3352" aria-hidden="true"></span> `#1d3352` | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | Plus Jakarta Sans page hierarchy |
| Links | Inline and navigation links | <span class="pj-color-chip" style="--pj-chip: #3a5a82" aria-hidden="true"></span> `#3a5a82` | <span class="pj-color-chip" style="--pj-chip: #8aacc8" aria-hidden="true"></span> `#8aacc8` | Blue link in an explanatory paragraph |
| Link hover/focus | Interactive emphasis | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span> `#cc4528` | <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span> `#ea7558` | Link changes color without changing layout |
| Navbar | Light shell | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` / <span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #e6e8eb" aria-hidden="true"></span> `#e6e8eb` | Light translucent header; dark counterpart in dark mode |
| Footer | Deliberate dark close | <span class="pj-color-chip" style="--pj-chip: #132440" aria-hidden="true"></span> `#132440` | <span class="pj-color-chip" style="--pj-chip: #132440" aria-hidden="true"></span> `#132440` | Dark footer with readable light text |
| Sidebar | Content-tree navigation | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` | Current page remains distinct without color alone |
| Table of contents | Right-side outline | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | On-this-page list beside the reading column |
| Current navigation item | Active state | <span class="pj-color-chip" style="--pj-chip: #e2e9f2" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #1d3352" aria-hidden="true"></span> `#e2e9f2` + `#1d3352` | <span class="pj-color-chip" style="--pj-chip: #2b4d78" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#2b4d78` + `#c5daf0` | Active item has surface and marker |
| Border/divider | Quiet separation | <span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #dadce0" aria-hidden="true"></span> `#dadce0` | <span class="pj-color-chip pj-color-chip--border" style="--pj-chip: rgba(255,255,255,.08)" aria-hidden="true"></span> `rgba(255,255,255,.08)` | Card, table, and navigation edge |
| Search/input | Field surface | <span class="pj-color-chip" style="--pj-chip: #f8f9fb" aria-hidden="true"></span> `#f8f9fb` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` | Search field with a visible focus ring |
| Primary action | Accessible solid control | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#cc4528` / `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#cc4528` / `#ffffff` | `Review release check` button |
| Primary action hover | Action emphasis | <span class="pj-color-chip" style="--pj-chip: #b84228" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> `#b84228` / `#ffffff` | <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span><span class="pj-color-chip" style="--pj-chip: #142438" aria-hidden="true"></span> `#ea7558` / `#142438` | Button responds in both modes |
| Cards | Quiet grouped content | <span class="pj-color-chip" style="--pj-chip: #f8f9fb" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #dadce0" aria-hidden="true"></span> `#f8f9fb` / `#dadce0` | <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: rgba(255,255,255,.08)" aria-hidden="true"></span> `#131e2b` / `rgba(255,255,255,.08)` | Three-card decision surface |
| Code surface | Always-dark working area | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` | YAML block remains dark in both modes |
| Code text | Code foreground | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | IBM Plex Mono syntax on midnight |
| Info callout | Informational state | <span class="pj-color-chip" style="--pj-chip: #e2e9f2" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #7490b2" aria-hidden="true"></span> `#e2e9f2` / `#7490b2` | <span class="pj-color-chip" style="--pj-chip: #1a2b3e" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #4d7098" aria-hidden="true"></span> `#1a2b3e` / `#4d7098` | Blue callout with readable copy |
| Success callout | Completed state | <span class="pj-color-chip" style="--pj-chip: #d1ebe0" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #2f7d65" aria-hidden="true"></span> `#d1ebe0` / `#2f7d65` | <span class="pj-color-chip" style="--pj-chip: #18382d" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #6cc090" aria-hidden="true"></span> `#18382d` / `#6cc090` | Green validation result |
| Warning callout | Needs attention | <span class="pj-color-chip" style="--pj-chip: #f5ecd0" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #e05232" aria-hidden="true"></span> `#f5ecd0` / `#e05232` | <span class="pj-color-chip" style="--pj-chip: #3d1e13" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #ea7558" aria-hidden="true"></span> `#3d1e13` / `#ea7558` | Amber warning with next action |
| Danger callout | Blocked/error state | <span class="pj-color-chip" style="--pj-chip: #f9e3e1" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #a8261c" aria-hidden="true"></span> `#f9e3e1` / `#a8261c` | <span class="pj-color-chip" style="--pj-chip: #3a1d20" aria-hidden="true"></span><span class="pj-color-chip pj-color-chip--border" style="--pj-chip: #f08b80" aria-hidden="true"></span> `#3a1d20` / `#f08b80` | Red error that does not rely on color alone |
| Focus ring | Keyboard-only cue | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span> `#cc4528` | <span class="pj-color-chip" style="--pj-chip: #f09878" aria-hidden="true"></span> `#f09878` | Clear ring around cards, links, and controls |

The `/` notation is `background / border` for surfaces and callouts, and
`fill / text` for actions. Use the same values for the same semantic role in
both theme implementations; only the adapter selectors differ.

#### Complete Hextra color layer

Hextra's required project adapter is `assets/css/custom.css`; a separate
Tailwind configuration is not needed when consuming Hextra as a Hugo module.
If the site compiles additional Tailwind utilities, keep them pointed at these
variables rather than creating a second palette.

```css
/* assets/css/custom.css */
:root {
  --pj-bg: #ffffff;
  --pj-surface: #ffffff;
  --pj-surface-raised: #f8f9fb;
  --pj-text: #142438;
  --pj-text-secondary: #5c6f82;
  --pj-text-muted: #546a82;
  --pj-heading: #1d3352;
  --pj-link: #3a5a82;
  --pj-link-hover: #cc4528;
  --pj-navbar: rgba(255, 255, 255, 0.88);
  --pj-border: #e6e8eb;
  --pj-input: #f8f9fb;
  --pj-code: #0e1720;
  --pj-code-text: #c5daf0;
  --pj-focus: #cc4528;
  --pj-info-bg: #e2e9f2;
  --pj-info-border: #7490b2;
  --pj-success-bg: #d1ebe0;
  --pj-success-border: #2f7d65;
  --pj-warning-bg: #f5ecd0;
  --pj-warning-border: #e05232;
  --pj-danger-bg: #f9e3e1;
  --pj-danger-border: #a8261c;
  --hextra-max-page-width: 90rem;
  --hextra-max-navbar-width: 90rem;
  --hextra-max-footer-width: 90rem;
}

html.dark {
  --pj-bg: #0e1720;
  --pj-surface: #131e2b;
  --pj-surface-raised: #1a2b3e;
  --pj-text: #c5daf0;
  --pj-text-secondary: #97a8b8;
  --pj-text-muted: #6b7a88;
  --pj-heading: #c5daf0;
  --pj-link: #8aacc8;
  --pj-link-hover: #ea7558;
  --pj-navbar: #132440;
  --pj-border: rgba(255, 255, 255, 0.08);
  --pj-input: #131e2b;
  --pj-code: #0e1720;
  --pj-code-text: #c5daf0;
  --pj-focus: #f09878;
  --pj-info-bg: #1a2b3e;
  --pj-info-border: #4d7098;
  --pj-success-bg: #18382d;
  --pj-success-border: #6cc090;
  --pj-warning-bg: #3d1e13;
  --pj-warning-border: #ea7558;
  --pj-danger-bg: #3a1d20;
  --pj-danger-border: #f08b80;
}

body { background: var(--pj-bg); color: var(--pj-text); }
.content h1, .content h2, .content h3, .content h4 {
  color: var(--pj-heading);
}
.content, .content p, .content li { color: var(--pj-text); }
.content a, .hextra-nav-container a { color: var(--pj-link); }
.content a:hover, .content a:focus-visible,
.hextra-nav-container a:hover { color: var(--pj-link-hover); }
.hextra-nav-container { background: var(--pj-navbar); border-bottom: 1px solid var(--pj-border); }
.hextra-sidebar { background: var(--pj-surface); }
.hextra-toc { background: var(--pj-bg); }
.hextra-sidebar a, .hextra-toc a { color: var(--pj-link); }
.hextra-sidebar a[aria-current="page"], .hextra-toc a:hover {
  background: var(--pj-surface-raised);
  color: var(--pj-heading);
}
input, textarea, select, .search-input {
  background: var(--pj-input);
  border-color: var(--pj-border);
  color: var(--pj-text);
}
.pj-primary-action {
  background: #cc4528;
  border: 1px solid #cc4528;
  color: #ffffff;
}
.pj-primary-action:hover, .pj-primary-action:focus-visible {
  background: var(--pj-link-hover);
  border-color: var(--pj-link-hover);
  color: #142438;
}
.hextra-card, .hextra-feature-card {
  background: var(--pj-surface);
  border-color: var(--pj-border);
}
.hextra-code-block, .content pre {
  background: var(--pj-code);
  color: var(--pj-code-text);
}
:focus-visible { outline: 2px solid var(--pj-focus); outline-offset: 2px; }
.pj-callout-info { background: var(--pj-info-bg); border-color: var(--pj-info-border); }
.pj-callout-success { background: var(--pj-success-bg); border-color: var(--pj-success-border); }
.pj-callout-warning { background: var(--pj-warning-bg); border-color: var(--pj-warning-border); }
.pj-callout-danger { background: var(--pj-danger-bg); border-color: var(--pj-danger-border); }
```

### Brand every visible theme element

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

### Page-part and review fixture

Use the same content states as the Docsy review specimen above so theme
migrations compare like with like. Hextra expresses the callout, cards, and
action through its documented shortcodes and one project CSS adapter:

````md
---
title: Ship a reliable integration
description: A task-focused theme review fixture.
weight: 10
---

{{< callout type="info" >}}
Validate the configuration locally, then request promotion.
{{< /callout >}}

<a class="pj-primary-action" href="#release-check">Review release check</a>

## What the reader needs first

| Area | State | Owner |
|---|---|---|
| Configuration | Validated | Platform team |
| Documentation | Reviewed | Technical writer |
| Release | Waiting for approval | Release manager |

{{< cards >}}
  {{< card link="#validate" title="Validate"
      subtitle="Check tokens, configuration, and internal links" >}}
  {{< card link="#review" title="Review"
      subtitle="Confirm accessibility in light and dark modes" >}}
  {{< card link="#release-check" title="Promote"
      subtitle="Create a release from verified content" >}}
{{< /cards >}}

## Code remains a dark working surface

```yaml
params:
  theme:
    default: system
    displayToggle: true
```

## Release check {#release-check}

Check 320px and 1280px widths, keyboard focus, 200% zoom, and both modes.
````

#### Intended shell anatomy

```text
┌─────────────────────────────────────────────────────────────────────┐
│ projectious.work      Documentation  Search  Theme                  │
├───────────────┬───────────────────────────────────────┬─────────────┤
│ Foundations   │ Platform operations                    │ On this page│
│ Themes        │ Ship a reliable integration            │ What reader │
│   Hugo        │ One concise explanation.               │ Cards       │
│               │ [Review release check]                 │ Code        │
│               │ ┌──────────┐ ┌──────────┐ ┌──────────┐ │ Status      │
│               │ │ Validate │ │ Review   │ │ Promote  │ │             │
│               │ └──────────┘ └──────────┘ └──────────┘ │             │
└───────────────┴───────────────────────────────────────┴─────────────┘
```

This is an anatomy diagram, not a prescribed pixel layout. Keep Hextra's
native responsive behavior. At smaller widths, the sidebar and TOC become
available through the theme's controls; the reading order stays header, title,
explanation, action, and content.

#### Hextra acceptance cues

| Component | Expected branded result |
|---|---|
| Navbar | Compact and dark-aware; supplied logo, search, and theme toggle |
| Reading column | Calm, readable Source Sans 3 body copy with Plus Jakarta Sans headings |
| Action | One 40px-minimum `accent-solid` button with white text and visible focus |
| Cards | Quiet border, 9px radius, subtle elevation, blue text links |
| Code | IBM Plex Mono on <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` in both colour modes |
| Dark mode | <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` base, <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span> `#131e2b` raised surface, paired assets and contrast |

Do not add a custom page template merely to achieve this fixture. Hextra's
content tree, documented cards and callout shortcodes, and one project CSS
adapter should be sufficient. Use a layout override only when documented
configuration and public component classes cannot meet an explicit product
requirement; record the maintenance cost alongside the override.

### Accessibility and release gate

In addition to the shared contract, test Hextra's sidebar, TOC, search, theme
toggle, cards, callouts, logo/favicons, code contrast, and custom action at
320px and 1280px. Do not let a custom CSS override remove focus indicators,
semantic headings, or text selection.

### Sources and upgrade boundary

- [Hextra configuration](https://imfing.github.io/hextra/docs/guide/configuration/)
- [Hextra customization](https://imfing.github.io/hextra/docs/advanced/customization/)
- [Hugo configuration](https://gohugo.io/configuration/)

When upgrading Hextra, compare the generated shell before and after the
change. Limit overrides to documented settings and public classes; a copied
theme template becomes the project's maintenance burden.
