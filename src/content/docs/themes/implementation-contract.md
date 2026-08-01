---
title: Theme implementation contract
linkTitle: Implementation contract
weight: 5
description: The source-of-truth inputs, customization boundary, and release
  evidence required for any projectious.work Hugo theme.
---

This contract applies before choosing Docsy or Hextra. It gives a human
implementer and an AI agent one unambiguous answer to three questions: which
files supply the brand, where a theme may be changed, and how to prove the
result is conformant.

## Inputs and ownership

| Need | Canonical input | Do not do this |
|---|---|---|
| Colour values | `brand/tokens/tokens.json` | Copy arbitrary hex values into templates |
| CSS-friendly tokens | `brand/tokens/variables.css` | Create a second, competing token file |
| Logo and icons | `brand/logo/` supplied SVG or raster variants | Redraw, recolour, crop, or stretch a mark |
| Type roles | Brand typography guidance | Substitute a decorative display face |
| Content hierarchy | This documentation content tree and front matter | Encode navigation order in CSS |
| Theme behavior | The selected theme's current official documentation | Patch vendored source as the first option |

The examples use named values such as `midnight-9` and `accent-solid` to make
the semantic role clear. Resolve those names from the token source when
building a production theme. A value copied from a code example is an
illustration, not a replacement source of truth.

## File boundary

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

Do not place project branding under a vendored theme directory. A theme may
have internal files that are technically shadowable, but those files are not
an upgrade-safe customization surface. Use only the documented extension point
first; document any deliberate exception in the theme's upgrade notes.

## Non-negotiable visual rules

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

## Required page states

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

## Release evidence

Attach or record the following for a theme change:

- the pinned theme version and the official API/configuration pages consulted;
- screenshots at 320px and 1280px in light and dark mode;
- keyboard evidence for the navbar, sidebar, search, theme toggle, and a
  primary action;
- automated build output and a manual check at 200% zoom;
- a list of project override files, confirming that no vendored theme source
  was edited.

Use the [Docsy specimen]({{< relref "docsy-specimen" >}}) and
[Hextra specimen]({{< relref "hextra-specimen" >}}) as the shared content
fixture. A comparable layout makes visual regressions during a theme migration
easy to see.
