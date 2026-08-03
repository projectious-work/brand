---
title: Ship a reliable integration
weight: 4
description: The theme review fixture from the brand's Hugo guidance, rendered in Hextra.
---

This is the Hextra review fixture described in the brand's
[Hugo theme guidance](https://projectious-work.github.io/brand/docs/themes/hugo/).
It exercises the states a theme has to prove before it can be approved:
hierarchy, link behaviour, callouts, cards, code, status, and one primary
action. Compare it against the Docsy fixture in `examples/hugo-docsy/` — the
two use the same content states, so a migration compares like with like.

{{< pj-callout type="info" title="Release boundary" >}}
Validate the configuration locally, then request promotion. The action below is
the only primary action in this view.
{{< /pj-callout >}}

{{< pj-action href="#release-check" >}}Review release check{{< /pj-action >}}

## What the reader needs first

| Area | State | Owner |
|---|---|---|
| Configuration | Validated | Platform team |
| Documentation | Reviewed | Technical writer |
| Release | Waiting for approval | Release manager |

Link text stays blue — the [Hextra configuration guide](https://imfing.github.io/hextra/docs/guide/configuration/)
reads as a link, not as emphasis — while the accent-filled control above stays
reserved for the next action. On narrow screens the table scrolls inside its own
container rather than widening the page.

## A card-led decision surface

{{< cards >}}
  {{< card link="#validate" title="Validate" subtitle="Check tokens, configuration, and internal links" >}}
  {{< card link="#review" title="Review" subtitle="Confirm accessibility in light and dark modes" >}}
  {{< card link="#release-check" title="Promote" subtitle="Create a release only from verified content" >}}
{{< /cards >}}

Cards are scanning aids, not decoration. Their links stay links rather than
becoming three competing primary actions.

## Code remains a dark working surface {#validate}

```yaml {filename="hugo.yaml"}
params:
  theme:
    default: system
    displayToggle: true
  navbar:
    width: wide
```

Inline code such as `assets/css/custom.css` stays distinct from its paragraph
without looking like a second button. The block above stays dark in both theme
modes, and its filename bar sits one step above the code surface rather than
disappearing into it.

## Status language is semantic {#review}

{{< pj-callout type="success" title="Validated" >}}
Success is only for a completed, evidenced check.
{{< /pj-callout >}}

{{< pj-callout type="warning" title="Needs attention" >}}
Warnings describe a condition to assess. The warning colour is gold, never the
identity accent.
{{< /pj-callout >}}

{{< pj-callout type="danger" title="Blocked" >}}
Errors need a clear next action, and each callout carries a text label so the
state never depends on colour alone.
{{< /pj-callout >}}

## Release check {#release-check}

At 320px, check the menu, table overflow, cards, action, code block, and table
of contents. At 1280px, check reading measure, the sticky navigation, sidebar
hierarchy, and the balance between the content column and its table of contents.
Repeat each check in light and dark mode, with keyboard navigation and at 200%
zoom.
