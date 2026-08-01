---
title: Themes
linkTitle: Themes
weight: 95
description: Configure Hugo documentation themes to use the projectious.work
  brand system without modifying theme source.
---

This section is the implementation contract for projects that render the
projectious.work brand with Hugo. It complements the canonical
[tokens]({{< relref "/docs/tokens" >}}),
[typography]({{< relref "/docs/foundations/typography" >}}),
[colour]({{< relref "/docs/foundations/color" >}}), and
[interface rules]({{< relref "/docs/interface/" >}}).

Choose the page for the theme actually used by the site:

- [Hugo/Docsy]({{< relref "docsy" >}}) — Bootstrap and SCSS; suited to a
  durable, technical documentation shell.
- [Hugo/Hextra]({{< relref "hextra" >}}) — a Hugo theme with a compact,
  content-led shell and a custom-CSS extension point.

Read the [implementation contract]({{< relref "implementation-contract" >}})
before either theme guide. It identifies the canonical brand inputs, the
allowed customization boundary, and the evidence required before a branded
theme can be approved.

## Non-negotiable rules

1. Treat `brand/tokens/` as the source of values. Map semantic roles to a
   theme; do not scatter replacement hex values through templates.
2. Add overrides in the site's assets or layouts, never by editing a vendored
   theme. Theme updates must remain mechanically upgradable.
3. Ship light and dark modes together, test keyboard focus and contrast in
   both, and keep code surfaces dark in both modes.
4. Use a single accent-filled primary action per view. The fill is
   `accent-solid` (`#cc4528`), not identity orange (`#e05232`), because it
   meets the normal-text AA contrast floor with white text.
5. Use the supplied logo files and their clear-space rules. Do not recreate,
   recolour, or stretch a lockup.

## Review fixture

Use this small page part in every theme proof before approving a migration.
It exercises the shell, typography, a link, a primary action, a card, and an
inline code treatment without copying either reference site's visual identity.

```text
PRODUCT AREA                         Docs     Search     Theme

Ship a reliable integration
Short explanation in Source Sans 3.  [Read the guide]  [Deploy]

┌─────────────────────────────────────────────────────────────────────┐
│ Validate configuration                                                │
│ Source Sans 3 body copy · `brand/tokens/tokens.json`                 │
└─────────────────────────────────────────────────────────────────────┘
```

The Docsy guidance takes inspiration from the strong hierarchy, technical
confidence, and card-led discovery of [Kubeflow](https://www.kubeflow.org/).
The Hextra guidance takes inspiration from the restrained documentation shell
and task-focused reading experience of [Porter](https://porter.sh/). These are
layout references only: use projectious.work assets, copy, and tokens.

## Rendered specimens

The following pages are review fixtures, not generic mood boards. They show
the content hierarchy, action treatment, cards, callouts, code, and status
states a theme must render correctly:

- [Docsy specimen]({{< relref "docsy-specimen" >}}) — a confident,
  card-led technical page in the current Docsy site.
- [Hextra specimen]({{< relref "hextra-specimen" >}}) — the equivalent
  compact, content-led page to implement in a Hextra site.
