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
├── layouts/_shortcodes/                  # Hextra: pj-callout only
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

### The shared semantic layer

Both themes bind to one token set. A theme adapter may only *map* these names
onto its own selectors; it may not redefine what a name means, and it may not
introduce a colour that is not in this table. This is what makes a Docsy site
and a Hextra site recognisably the same product, and it is the only reason the
two dark modes can be reviewed against each other.

Every value below is a step from the canonical scales in
`brand/tokens/tokens.json`. The ratio column is the measured contrast against
the surface that role actually sits on.

| Token | Role | Light | Dark | Contrast (light / dark) |
|---|---|---|---|---|
| `--pj-canvas` | App background — page, navbar, sidebar, TOC | `#f8f9fb` | `#0e1720` | step 1 |
| `--pj-surface` | Cards, panels, inputs — elevated above the canvas | `#ffffff` | `#131e2b` | step 2 dark |
| `--pj-surface-hover` | Hovered rows and menus | `#e2e9f2` | `#1a2b3e` | step 3 |
| `--pj-text` | Reading copy | `#142438` | `#c5daf0` | 15.68 / 12.62 |
| `--pj-text-secondary` | Navigation rest state, TOC, captions, metadata | `#5c6f82` | `#97a8b8` | 5.18 / 7.41 |
| `--pj-heading` | H1–H6 | `#1d3352` | `#c5daf0` | 12.75 / 12.62 |
| `--pj-link` | Inline and navigation links | `#3a5a82` | `#8aacc8` | 7.08 / 7.59 |
| `--pj-link-hover` | Link emphasis only — accent as *text*, step 11 | `#c04424` | `#ea7558` | 4.87 / 6.18 |
| `--pj-nav-active-bg` | Current-page tint | `#d3deec` | `#20354d` | step 4 |
| `--pj-nav-active-text` | Current-page label | `#1d3352` | `#c5daf0` | 10.42 / 8.74 |
| `--pj-border` | Divider: cards, tables, navbar, section rules | `#cdd0d5` | `#263f5a` | 1.55 / 1.67 |
| `--pj-border-strong` | Inputs and controls whose edge *is* the affordance | `#546a82` | `#4d7098` | 5.58 / 3.52 |
| `--pj-action` | Primary action fill | `#cc4528` | `#cc4528` | 4.72 with white |
| `--pj-action-hover` | Primary action hover fill | `#b84228` | `#b84228` | 5.46 with white |
| `--pj-action-label` | Primary action label | `#ffffff` | `#ffffff` | — |
| `--pj-focus` | Keyboard focus ring | `#cc4528` | `#f09878` | 4.72 / 8.15 |
| `--pj-code` | Always-dark code surface | `#0e1720` | `#0e1720` | — |
| `--pj-code-text` | Code foreground | `#c5daf0` | `#c5daf0` | 12.62 |
| `--pj-code-chrome` | Filename bar and copy control on the code block | `#131e2b` | `#131e2b` | — |
| `--pj-info-bg` / `--pj-info-border` | Informational | `#e2e9f2` / `#7490b2` | `#1a2b3e` / `#4d7098` | 3.29 / 3.52 border |
| `--pj-success-bg` / `--pj-success-border` | Completed | `#d1ebe0` / `#2f7d65` | `#18382d` / `#6cc090` | 4.95 / 8.24 border |
| `--pj-warning-bg` / `--pj-warning-border` | Needs attention | `#f5ecd0` / `#8b6508` | `#3d1e13` / `#e0a92a` | 5.30 / 8.50 border |
| `--pj-danger-bg` / `--pj-danger-border` | Blocked | `#f9e3e1` / `#a8261c` | `#3a1d20` / `#f08b80` | 7.10 / 7.49 border |

Four rules follow from the table and are not negotiable per theme:

**Surfaces come off the ramp in step order, in both modes.** The step roles are
not decorative: step 1 is the app background, step 2 the subtle section band,
steps 3–5 element fills, hover and active. Light mode used pure white as its
canvas for a while, which reads fine on its own but leaves a card with nothing
to lift off — a white panel on a white page separates by border alone, and the
elevation scale has no room to work. Taking the canvas to step 1 puts white back
where it is useful, as the raised surface.

**The accent has a text step and a solid step, and they are different.** Step 10
is "solid hover" — a surface role. Accent used as *text*, which in practice
means a link hover, takes step 11, the scale's low-emphasis text step. Solid
accent fills keep step 10 with a white label. Using step 10 as text is the most
common way this system gets bent: it passes on white at 4.72:1 and then fails
the moment the surface underneath is anything but pure white.

**There are two text tiers, not three.** `--pj-text` and `--pj-text-secondary`
are the only text colours. The scales define steps 11 and 12 as the text roles;
a third "muted" tier has to come from step 9 or below, and no step below 11
clears 4.5:1 against the dark surfaces. If copy is not important enough for
`--pj-text-secondary`, it is not important enough to ship.

**The primary action is one colour in every mode and both themes.** Fill
`--pj-action`, hover `--pj-action-hover`, label always white. It does not
lighten in dark mode and the label never changes colour, because every
alternative either drops white below 4.5:1 or forces the label to invert on
hover. Signal the dark-mode hover with the focus ring and elevation instead.

**The warning border is gold, not the accent.** `#e05232` is the identity
colour; using it as the warning edge makes every warning read as a brand
flourish and makes the accent read as an error. Gold `#8b6508` and `#e0a92a`
carry the warning role in the two modes.

**The header may be the one neutral surface.** The default is a navbar that
takes the canvas colour, so the reading surface runs unbroken from the top of
the window. A site whose dark mode needs more separation may instead give the
header the slate ramp — `#20262c`, 1.18:1 against the navy canvas — which leaves
navy as the only saturated surface and lets the content read as the page rather
than as another bar. The documentation site does this. Pick one and apply it in
both themes; what is not allowed is a header in a *third* colour that is neither
the canvas nor a documented surface step.

**Dividers are quiet, and they are never the accent.** A brand-coloured divider
is a recurring request and the answer is no: the accent marks the one action a
view is asking for, and a page whose every rule is orange has spent it. Orange
is also poor as a line — 3.87:1 on white and 4.67:1 on midnight, loud enough to
read as content and muddy at 1px. Where a divider needs more presence, raise its
*contrast* and leave its weight at 1px; a 1px rule at 1.55:1 reads crisper than
a 2px rule at 1.2:1 and stays out of the reading path. The accent may take one
structural job per page — the documentation site uses a 40px accent lead-in on
the section rule under each H2 — but never the rule itself.

`--pj-border` is a divider that groups content; it sits below 3:1 and that is correct, because the
content it separates carries its own contrast. `--pj-border-strong` is for an
input or control whose edge is the only thing announcing that it is
interactive, and it clears 3:1 in both modes.

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

[Open the Docsy example](/brand/examples/hugo-docsy/)
to inspect the documented patterns in a working site.

[Docsy](https://www.docsy.dev/) is Hugo's Bootstrap-and-SCSS documentation
theme. Its documented project SCSS files are the supported customization seam;
this is where the brand belongs. Do not edit `themes/docsy/`.

### What conformant looks like

Use a confident but quiet technical shell: a light navigation bar, a clear page
title, white reading surfaces, and cards or callouts only where they help
scanning. Reserve dark surfaces for code, the footer, and dark mode.

#### Heading hierarchy example

The page title `Hugo` contains H2 sections, such as `Docsy`, and each H2 can
contain H3 subsections. H4 headings provide one further detail level. Hugo's
table of contents is configured to include headings through H4.

| Element | Required treatment |
|---|---|
| Navbar | Canvas colour at 85% with blur and a hairline underline — no fill of its own |
| Sidebar and TOC | Canvas colour, no panel fill; a hairline and whitespace do the separating |
| Footer | `--pj-footer`, supplied logo, and readable light text |
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
[Docsy example](/brand/examples/hugo-docsy/).
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

// slate-7 is a hairline, not a control edge: it measures 2.13:1 on white and
// leaves an input with no perceivable boundary. Use the strong border step.
$input-border-color: #546a82;

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

Then put type and shape rules in `_styles_project.scss`. Keep colour out of
this part of the file — all of it belongs in the single colour layer below, so
there is one place to look when a value is wrong.

```scss
// assets/scss/_styles_project.scss
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap");

h1, h2, h3, h4, h5, h6 { letter-spacing: -0.3px; }
code, pre { font-family: "IBM Plex Mono", monospace; }
.btn {
  border-radius: 6px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
}
pre, .highlight { border-radius: 9px; }
```

#### How Docsy binds to the shared layer

Docsy's colour work happens in two places: Bootstrap's semantic variables,
which Docsy and Bootstrap components read on their own, and a small custom
property layer for the surfaces Bootstrap has no variable for. Do not restate
hex values in component rules — bind to the token and let the mode switch do
the work.

| Shared token | Docsy / Bootstrap binding |
|---|---|
| `--pj-canvas` | `--bs-body-bg`; also `.td-navbar`, `.td-sidebar`, `.td-toc` |
| `--pj-surface` | `--bs-secondary-bg`; `.card`, form controls |
| `--pj-surface-hover` | `.td-sidebar-link:hover`, `.dropdown-item:hover`, `.table-hover` |
| `--pj-text` | `--bs-body-color` |
| `--pj-text-secondary` | `--bs-secondary-color`; sidebar and TOC rest state |
| `--pj-heading` | `--bs-heading-color` |
| `--pj-link` / `--pj-link-hover` | `--bs-link-color` / `--bs-link-hover-color` |
| `--pj-nav-active-bg` / `--pj-nav-active-text` | `.td-sidebar-link.active`, `.td-toc a.active` |
| `--pj-border` | `--bs-border-color`, `.td-navbar` bottom edge |
| `--pj-border-strong` | `$input-border-color`, `.form-control` |
| `--pj-action` / `--pj-action-hover` | `.btn-primary` |
| `--pj-info-*` … `--pj-danger-*` | `.alert-info` … `.alert-danger` |

Bootstrap's `$warning` is the gold from the shared layer, not the accent.
Docsy's `[data-bs-theme]` attribute is the mode switch; the same token names
resolve differently under it, so no component rule needs a dark-mode variant.

#### Complete Docsy color layer

Add this to `assets/scss/_styles_project.scss`, after the Bootstrap variables
in `assets/scss/_variables_project.scss`. It is the whole surface map: the
custom properties, the Bootstrap variables they drive, and the component rules
that Bootstrap does not cover.

```scss
// assets/scss/_styles_project.scss

:root,
[data-bs-theme="light"] {
  --pj-canvas: #f8f9fb;
  --pj-surface: #ffffff;
  --pj-surface-hover: #e2e9f2;
  --pj-text: #142438;
  --pj-text-secondary: #5c6f82;
  --pj-heading: #1d3352;
  --pj-link: #3a5a82;
  --pj-link-hover: #c04424;
  --pj-nav-active-bg: #d3deec;
  --pj-nav-active-text: #1d3352;
  --pj-border: #cdd0d5;
  --pj-border-strong: #546a82;
  --pj-focus: #cc4528;
  --pj-info-bg: #e2e9f2;      --pj-info-border: #7490b2;
  --pj-success-bg: #d1ebe0;   --pj-success-border: #2f7d65;
  --pj-warning-bg: #f5ecd0;   --pj-warning-border: #8b6508;
  --pj-danger-bg: #f9e3e1;    --pj-danger-border: #a8261c;
  --pj-navbar: rgba(248, 249, 251, 0.85);
  --pj-footer: #f0f3f8;
}

[data-bs-theme="dark"] {
  --pj-canvas: #0e1720;
  --pj-surface: #131e2b;
  --pj-surface-hover: #1a2b3e;
  --pj-text: #c5daf0;
  --pj-text-secondary: #97a8b8;
  --pj-heading: #c5daf0;
  --pj-link: #8aacc8;
  --pj-link-hover: #ea7558;
  --pj-nav-active-bg: #20354d;
  --pj-nav-active-text: #c5daf0;
  --pj-border: #263f5a;
  --pj-border-strong: #4d7098;
  --pj-focus: #f09878;
  --pj-info-bg: #1a2b3e;      --pj-info-border: #4d7098;
  --pj-success-bg: #18382d;   --pj-success-border: #6cc090;
  --pj-warning-bg: #3d1e13;   --pj-warning-border: #e0a92a;
  --pj-danger-bg: #3a1d20;    --pj-danger-border: #f08b80;
  --pj-navbar: rgba(14, 23, 32, 0.85);
  --pj-footer: #131e2b;
}

// Mode-independent. The code surface is dark in both modes by design.
:root {
  --pj-action: #cc4528;
  --pj-action-hover: #b84228;
  --pj-action-label: #ffffff;
  --pj-code: #0e1720;
  --pj-code-text: #c5daf0;
  --pj-code-chrome: #131e2b;
}

// Hand the tokens to Bootstrap so its own components follow without extra rules.
:root, [data-bs-theme="light"], [data-bs-theme="dark"] {
  --bs-body-bg: var(--pj-canvas);
  --bs-body-color: var(--pj-text);
  --bs-secondary-color: var(--pj-text-secondary);
  --bs-secondary-bg: var(--pj-surface);
  --bs-heading-color: var(--pj-heading);
  --bs-link-color: var(--pj-link);
  --bs-link-hover-color: var(--pj-link-hover);
  --bs-border-color: var(--pj-border);
  --bs-code-color: var(--pj-link); // Bootstrap's default is a pink outside the brand
}

// Bootstrap 5.3 composes most colours through `*-rgb` triplets rather than the
// hex variables — `a { color: rgba(var(--bs-link-color-rgb), var(--bs-link-opacity)) }`.
// Setting only `--bs-link-color` leaves every link on the theme's default. The
// triplets cannot reference a var(), so they are restated per mode.
:root, [data-bs-theme="light"] {
  --bs-body-color-rgb: 20, 36, 56;
  --bs-link-color-rgb: 58, 90, 130;
  --bs-link-hover-color-rgb: 204, 69, 40;
  --bs-emphasis-color-rgb: 20, 36, 56;
}
[data-bs-theme="dark"] {
  --bs-body-color-rgb: 197, 218, 240;
  --bs-link-color-rgb: 138, 172, 200;
  --bs-link-hover-color-rgb: 234, 117, 88;
  --bs-emphasis-color-rgb: 197, 218, 240;
}

// Docsy generates a per-block link colour for the landing blocks and applies it
// at `.td-box--x p > a`, which outranks a plain `.td-box--x a`. It also dims the
// active table-of-contents entry with a (0,3,1) selector. Match the shape of
// each rather than writing a weaker selector and reaching for !important.
.td-box--light p > a, .td-box--light span > a,
.td-box--white p > a, .td-box--white span > a { color: var(--pj-link); }
.td-toc #TableOfContents a.active { color: var(--pj-nav-active-text); font-weight: 600; }

// blocks/cover carries Docsy's `td-overlay--dark` scrim, which exists to darken
// a background photograph. With no cover image it only washes the surface grey.
.td-cover-block.td-overlay::after { background-color: transparent; }

// Shell. Navbar, sidebar and TOC share the canvas; borders and space separate
// them. No panel fills — the reading column is the only thing with weight.
.td-navbar {
  background: var(--pj-navbar);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--pj-border);
}
.td-sidebar,
.td-toc { background: var(--pj-canvas); border-color: var(--pj-border); }
.td-footer { background: var(--pj-footer); color: #c5daf0; }
.td-footer a { color: #8aacc8; }

// Navigation: quiet at rest, tinted pill when current, and a left marker so
// the current item is not signalled by colour alone.
.td-sidebar-link,
.td-toc a { color: var(--pj-text-secondary); }
.td-sidebar-link:hover,
.td-toc a:hover { background: var(--pj-surface-hover); color: var(--pj-heading); }
.td-sidebar-link.active,
.td-toc a.active {
  background: var(--pj-nav-active-bg);
  color: var(--pj-nav-active-text);
  font-weight: 600;
  border-radius: 6px;
  box-shadow: inset 2px 0 0 var(--pj-action);
}

.card { background: var(--pj-surface); border-color: var(--pj-border); border-radius: 9px; }
.table { --bs-table-border-color: var(--pj-border); }

.form-control, .form-select, .td-search__input {
  background: var(--pj-surface);
  border-color: var(--pj-border-strong);
  color: var(--pj-text);
}

.btn-primary {
  background: var(--pj-action);
  border-color: var(--pj-action);
  color: var(--pj-action-label);
}
.btn-primary:hover,
.btn-primary:focus-visible,
.btn-primary:active {
  background: var(--pj-action-hover);
  border-color: var(--pj-action-hover);
  color: var(--pj-action-label);
}

// The ring sits outside the control, so it never lands on the accent fill.
:focus-visible { outline: 2px solid var(--pj-focus); outline-offset: 2px; }

pre, .highlight, .td-content pre {
  background: var(--pj-code);
  color: var(--pj-code-text);
  border-radius: 9px;
}
.highlight .filename,
.td-click-to-copy { background: var(--pj-code-chrome); color: #97a8b8; }

.alert { border-left-width: 3px; color: var(--pj-text); }
.alert-info    { background: var(--pj-info-bg);    border-color: var(--pj-info-border); }
.alert-success { background: var(--pj-success-bg); border-color: var(--pj-success-border); }
.alert-warning { background: var(--pj-warning-bg); border-color: var(--pj-warning-border); }
.alert-danger  { background: var(--pj-danger-bg);  border-color: var(--pj-danger-border); }
```

Two details are easy to miss. The alert rule sets `color` explicitly: without
it, a Bootstrap alert keeps its own tinted foreground and the dark-mode tints
are unreadable. And the code block's filename bar needs `--pj-code-chrome`,
because the surface underneath it is dark in light mode too — a theme that
styles only `pre` leaves dark text on a dark bar.

Docsy exposes a light/dark menu through `params.ui.showLightDarkModeMenu`. Do
not disable it for a branded site: add the dark values above and test them.

### Brand every visible theme element

| Area | Configure | Review |
|---|---|---|
| Logo | `static/` assets and `params.ui.navbar_logo` | Correct lockup, clear space, no CSS recolour |
| Navbar | `params.ui.navbar_theme`, project SCSS | Light/translucent shell, compact height, accessible menu trigger |
| Sidebar | content tree, `weight`, compact/foldable params | Stable order, current-page state, keyboard traversal |
| TOC | heading hierarchy and `tableOfContents` | H2–H4 only; no skipped heading levels |
| Search | `offlineSearch` and sidebar search params | Search is discoverable and has readable results |
| Alerts | semantic Bootstrap roles | Warning is gold, never the identity accent; alert text is `--pj-text`, not a tinted foreground |
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

[Open the Hextra example](/brand/examples/hugo-hextra/)
to inspect the documented patterns in a working site.

[Hextra](https://imfing.github.io/hextra/) is a Hugo documentation theme with
a compact shell, generated side navigation, and a supported custom-CSS entry
point. Use its quiet, task-focused reading model while retaining
projectious.work typography, colour, assets, and interaction rules.

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
| Surfaces | <span class="pj-color-chip" style="--pj-chip: #ffffff" aria-hidden="true"></span> White canvas, cards, sidebar and TOC; <span class="pj-color-chip" style="--pj-chip: #f0f3f8" aria-hidden="true"></span> `#f0f3f8` hover only; <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span> `#0e1720` dark-mode canvas |
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
[Hextra example](/brand/examples/hugo-hextra/).
It is built manually with the
scripts in `examples/hugo-hextra/` and deployed beneath the GitHub Pages site.

### Load the brand through custom CSS

Hextra automatically loads `assets/css/custom.css`. Use it as the single brand
adapter. The [Hextra customization guide](https://imfing.github.io/hextra/docs/advanced/customization/)
documents its primary HSL variables, layout variables, and public component
classes. The guidance below targets Hextra **v0.10.0**; pin that version, and
re-check the four class names it depends on after any upgrade.

Hextra derives a ten-step `--color-primary-*` ramp from three HSL variables,
and uses that ramp for the active sidebar item, the code-block tint, and
several focus states. Two things about it decide whether a brand adapter works:

**Set the primary variables under `html.dark` as well as `:root`.** Hextra's
own stylesheet re-declares all three under `.dark`. An adapter that sets them
only on `:root` gets brand colours in light mode and stock Hextra blue
(`204deg 100% 50%`) in dark mode — on the current sidebar item, which is the
most visible navigation state on the page.

**Do not let the derived ramp reach the code block.** Hextra tints code with
`bg-primary-700/5`, which is a light wash. The brand keeps code dark in both
modes, so the adapter overrides the `pre` inside `.hextra-code-block` — not the
wrapper, which sits behind that tint and has no visible effect.

```css
/* assets/css/custom.css */
@import url("https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600&display=swap");

/* midnight-9 #1d3352 expressed as HSL, so Hextra's derived ramp stays in the
   brand's hue rather than its default azure. */
:root {
  --primary-hue: 214deg;
  --primary-saturation: 47%;
  --primary-lightness: 22%;
  --hextra-max-page-width: 90rem;
  --hextra-max-navbar-width: 90rem;
  --hextra-max-footer-width: 90rem;
}

/* Required: Hextra re-declares these under .dark and would otherwise revert. */
html.dark {
  --primary-hue: 214deg;
  --primary-saturation: 47%;
  --primary-lightness: 62%;
}

@layer theme {
  :root {
    --hx-default-font-family: "Source Sans 3", system-ui, sans-serif;
    --hx-default-mono-font-family: "IBM Plex Mono", ui-monospace, monospace;
  }
}
```

The dark lightness is raised to 62% because Hextra reads `primary-lightness` as
the *mid* of the ramp and derives dark-mode text roles above it. At the light
value of 22% the dark sidebar's active label resolves near-black on a dark
tint.

#### How Hextra binds to the shared layer

| Shared token | Hextra binding |
|---|---|
| `--pj-canvas` | `body`, `.hextra-nav-container`, `.hextra-sidebar-container`, `.hextra-toc` |
| `--pj-surface` | `.hextra-card`, `.hextra-feature-card`, `.search-input` |
| `--pj-surface-hover` | sidebar and TOC link hover, `.hextra-card:hover` |
| `--pj-text` | `body`, `.content` |
| `--pj-text-secondary` | sidebar and TOC rest state, `.hextra-toc` headings |
| `--pj-heading` | `.content h1`–`h4` |
| `--pj-link` / `--pj-link-hover` | `.content a` |
| `--pj-nav-active-bg` / `--pj-nav-active-text` | `.hextra-sidebar-active-item`, `.hextra-toc-active` |
| `--pj-border` | `.hextra-nav-container` bottom edge, cards, tables |
| `--pj-border-strong` | `.search-input`, form controls |
| `--pj-action` / `--pj-action-hover` | `.pj-primary-action` |
| `--pj-code` / `--pj-code-chrome` | `.hextra-code-block pre`, `.hextra-code-block .hextra-code-filename` |
| `--pj-info-*` … `--pj-danger-*` | `.pj-callout-*` (project shortcode — see below) |

Hextra marks the current sidebar entry with the `hextra-sidebar-active-item`
class and the current TOC entry with `hextra-toc-active`. It does not emit
`aria-current`, so an adapter written against `a[aria-current="page"]` silently
styles nothing.

#### Complete Hextra color layer

Append this to the same `assets/css/custom.css`. The token block is byte-for-byte
the Docsy one; only the selectors below it differ. Keep it that way — if the two
adapters ever need different values, the shared layer is wrong, not the theme.

```css
/* assets/css/custom.css — continued */

:root {
  --pj-canvas: #f8f9fb;
  --pj-surface: #ffffff;
  --pj-surface-hover: #e2e9f2;
  --pj-text: #142438;
  --pj-text-secondary: #5c6f82;
  --pj-heading: #1d3352;
  --pj-link: #3a5a82;
  --pj-link-hover: #c04424;
  --pj-nav-active-bg: #d3deec;
  --pj-nav-active-text: #1d3352;
  --pj-border: #cdd0d5;
  --pj-border-strong: #546a82;
  --pj-focus: #cc4528;
  --pj-info-bg: #e2e9f2;      --pj-info-border: #7490b2;
  --pj-success-bg: #d1ebe0;   --pj-success-border: #2f7d65;
  --pj-warning-bg: #f5ecd0;   --pj-warning-border: #8b6508;
  --pj-danger-bg: #f9e3e1;    --pj-danger-border: #a8261c;
  --pj-navbar: rgba(248, 249, 251, 0.85);
  --pj-footer: #f0f3f8;

  /* Mode-independent. */
  --pj-action: #cc4528;
  --pj-action-hover: #b84228;
  --pj-action-label: #ffffff;
  --pj-code: #0e1720;
  --pj-code-text: #c5daf0;
  --pj-code-chrome: #131e2b;
}

html.dark {
  --pj-canvas: #0e1720;
  --pj-surface: #131e2b;
  --pj-surface-hover: #1a2b3e;
  --pj-text: #c5daf0;
  --pj-text-secondary: #97a8b8;
  --pj-heading: #c5daf0;
  --pj-link: #8aacc8;
  --pj-link-hover: #ea7558;
  --pj-nav-active-bg: #20354d;
  --pj-nav-active-text: #c5daf0;
  --pj-border: #263f5a;
  --pj-border-strong: #4d7098;
  --pj-focus: #f09878;
  --pj-info-bg: #1a2b3e;      --pj-info-border: #4d7098;
  --pj-success-bg: #18382d;   --pj-success-border: #6cc090;
  --pj-warning-bg: #3d1e13;   --pj-warning-border: #e0a92a;
  --pj-danger-bg: #3a1d20;    --pj-danger-border: #f08b80;
  --pj-navbar: rgba(14, 23, 32, 0.85);
  --pj-footer: #131e2b;
}

/* Shell. Navbar, sidebar and TOC all sit on the canvas; a hairline and
   whitespace do the separating. */
body { background: var(--pj-canvas); color: var(--pj-text); }
.hextra-nav-container {
  background: var(--pj-navbar);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--pj-border);
}
.hextra-sidebar-container,
.hextra-toc { background: var(--pj-canvas); }
.hextra-footer { background: var(--pj-footer); color: #c5daf0; }
.hextra-footer a { color: #8aacc8; }

.content h1, .content h2, .content h3, .content h4 {
  color: var(--pj-heading);
  font-family: "Plus Jakarta Sans", system-ui, sans-serif;
  letter-spacing: -0.3px;
}
.content, .content p, .content li { color: var(--pj-text); }
.content a { color: var(--pj-link); }
.content a:hover, .content a:focus-visible { color: var(--pj-link-hover); }

/* Navigation. Quiet at rest, tinted pill when current, plus a left marker so
   the current item is not signalled by colour alone. */
.hextra-sidebar-container a,
.hextra-toc a { color: var(--pj-text-secondary); }
.hextra-sidebar-container a:hover,
.hextra-toc a:hover { background: var(--pj-surface-hover); color: var(--pj-heading); }
.hextra-sidebar-active-item,
.hextra-toc a.hextra-toc-active {
  background: var(--pj-nav-active-bg) !important;
  color: var(--pj-nav-active-text) !important;
  font-weight: 600;
  border-radius: 6px;
  box-shadow: inset 2px 0 0 var(--pj-action);
}

.hextra-card, .hextra-feature-card {
  background: var(--pj-surface);
  border-color: var(--pj-border);
  border-radius: 9px;
}
.hextra-card:hover { background: var(--pj-surface-hover); }

input, textarea, select, .search-input {
  background: var(--pj-surface);
  border-color: var(--pj-border-strong);
  color: var(--pj-text);
}

.pj-primary-action {
  display: inline-flex;
  align-items: center;
  min-height: 40px;
  padding: 0 16px;
  border-radius: 6px;
  background: var(--pj-action);
  border: 1px solid var(--pj-action);
  color: var(--pj-action-label);
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 600;
  text-decoration: none;
}
.pj-primary-action:hover,
.pj-primary-action:focus-visible {
  background: var(--pj-action-hover);
  border-color: var(--pj-action-hover);
  color: var(--pj-action-label);
}

:focus-visible { outline: 2px solid var(--pj-focus); outline-offset: 2px; }

/* Code stays dark in both modes. Target the `pre`, not the wrapper: Hextra
   tints the inner element and the wrapper's background never shows. */
.hextra-code-block pre,
.content pre {
  background: var(--pj-code) !important;
  color: var(--pj-code-text);
  border-radius: 9px;
}
.hextra-code-block .hextra-code-filename {
  background: var(--pj-code-chrome) !important;
  color: #97a8b8 !important;
}

/* See the note below: Hextra's own callout cannot be rebound from CSS. */
.pj-callout {
  margin: 24px 0;
  padding: 12px 16px;
  border-left: 3px solid;
  border-radius: 0 6px 6px 0;
  color: var(--pj-text);
}
.pj-callout-title {
  margin: 0 0 4px;
  font-family: "Plus Jakarta Sans", sans-serif;
  font-weight: 700;
  font-size: 0.9375rem;
}
.pj-callout-info    { background: var(--pj-info-bg);    border-color: var(--pj-info-border); }
.pj-callout-success { background: var(--pj-success-bg); border-color: var(--pj-success-border); }
.pj-callout-warning { background: var(--pj-warning-bg); border-color: var(--pj-warning-border); }
.pj-callout-danger  { background: var(--pj-danger-bg);  border-color: var(--pj-danger-border); }
```

Hextra's built-in `callout` shortcode styles itself entirely with Tailwind
utility classes and emits no stable class hook, so its semantic tints cannot be
rebound from `custom.css` — a `.hextra-callout-*` rule matches nothing. The
brand callout is therefore a small project shortcode in
`layouts/_shortcodes/pj-callout.html` that emits the class names above; see
`examples/hugo-hextra/` for the implementation. Give each type a text label as
well as a colour, so the state never depends on colour alone.

Two further theme behaviours have to be answered, or the result fails contrast
in light mode specifically:

**Pin the syntax palette to the code surface.** Hextra ships separate light and
dark Chroma stylesheets and selects between them by mode. The brand keeps code
dark in *both* modes, so in light mode the theme paints its light palette —
navy keywords, near-black identifiers — onto a midnight surface at roughly
1.1:1. The brand syntax theme has to be restated for both modes, and at
sufficient specificity: Hextra's rules are `.highlight .chroma .xx`, and its
dark variant `.dark .highlight .chroma .xx`, so a two-class selector loses no
matter what order the stylesheets load in.

**Restate link colour on components that carry their own.** Hextra colours every
link inside `.content`, and `.content a` outranks a single component class. A
primary action and any specimen containing links will otherwise have their
labels repainted blue — including white-on-accent labels, which drops them to
1.5:1.

```css
.content a.pj-primary-action,
.content a.pj-primary-action:hover { color: var(--pj-action-label); }
```

The `!important` declarations are deliberate and limited to three places where
Hextra applies a Tailwind utility directly in its markup — the active
navigation item, the code surface, and the filename bar. A utility class in the
template always outranks a stylesheet selector, so this is the documented
extension point behaving as designed, not an override of theme internals.

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
