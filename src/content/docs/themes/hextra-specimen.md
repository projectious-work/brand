---
title: Hextra visual specimen
linkTitle: Hextra specimen
weight: 40
description: The equivalent visual review fixture to implement in a
  projectious.work Hextra site.
toc: true
---

This is the content fixture a Hextra implementation must render. Its intended
appearance is compact and task-focused, taking cues from Porter's restrained
documentation shell without copying its identity, assets, or layout.

The result should have a calm reading column, a quiet sidebar, an immediately
useful table of contents, a dark-aware navbar, and a visible theme toggle.
The Hextra guide supplies the exact configuration and `custom.css` adapter.

## Intended shell anatomy

```text
┌─────────────────────────────────────────────────────────────────────┐
│ projectious.work      Documentation  Search  Theme                  │
├───────────────┬───────────────────────────────────────┬─────────────┤
│ Foundations   │ Platform operations                    │ On this page│
│ Themes        │ Ship a reliable integration            │ What reader │
│   Docsy       │ One concise explanation.               │ Cards       │
│   Hextra      │ [Review release check]                 │ Code        │
│               │ ┌──────────┐ ┌──────────┐ ┌──────────┐ │ Status      │
│               │ │ Validate │ │ Review   │ │ Promote  │ │             │
│               │ └──────────┘ └──────────┘ └──────────┘ │             │
└───────────────┴───────────────────────────────────────┴─────────────┘
```

This is an anatomy diagram, not a prescribed pixel layout. Keep the Hextra
shell's native responsive behavior. At smaller widths, the sidebar and TOC
become available through the theme's controls; the reading order stays header,
title, explanation, action, and content.

## Equivalent page content

Copy the following into a Hextra test page after installing the CSS adapter.
It exercises the same states as the [Docsy specimen]({{< relref
"docsy-specimen" >}}), so an implementation team can compare behavior rather
than trying to compare unrelated examples.

````md
---
title: Ship a reliable integration
description: A task-focused theme review fixture.
weight: 10
---

{{</* callout type="info" */>}}
Validate the configuration locally, then request promotion.
{{</* /callout */>}}

<a class="pj-primary-action" href="#release-check">Review release check</a>

## What the reader needs first

| Area | State | Owner |
|---|---|---|
| Configuration | Validated | Platform team |
| Documentation | Reviewed | Technical writer |
| Release | Waiting for approval | Release manager |

## A card-led decision surface

{{</* cards */>}}
  {{</* card link="#validate" title="Validate"
      subtitle="Check tokens, configuration, and internal links" */>}}
  {{</* card link="#review" title="Review"
      subtitle="Confirm accessibility in light and dark modes" */>}}
  {{</* card link="#release-check" title="Promote"
      subtitle="Create a release from verified content" */>}}
{{</* /cards */>}}

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

## Hextra acceptance cues

| Component | Expected branded result |
|---|---|
| Navbar | Compact and dark-aware; supplied logo, search, and theme toggle |
| Reading column | Calm, readable Source Sans 3 body copy with Plus Jakarta Sans headings |
| Action | One 40px-minimum `accent-solid` button with white text and visible focus |
| Cards | Quiet border, 9px radius, subtle elevation, blue text links |
| Code | IBM Plex Mono on `#0e1720` in both colour modes |
| Dark mode | `#0e1720` base, `#131e2b` raised surface, paired assets and contrast |

Do not add a custom page template merely to achieve this fixture. Hextra's
content tree, documented cards and callout shortcodes, and one project CSS
adapter should be sufficient. Use a layout override only when the documented
configuration and public component classes cannot meet an explicit product
requirement; record the maintenance cost alongside the override.

For the complete configuration and CSS, see the
[Hextra implementation guide]({{< relref "hextra" >}}).
