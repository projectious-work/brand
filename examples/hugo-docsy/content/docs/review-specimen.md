---
title: Review specimen
linkTitle: Review specimen
weight: 40
description: The theme review fixture from the brand's Hugo guidance, rendered in Docsy.
---

This is the Docsy review fixture described in the brand's
[Hugo theme guidance](https://projectious-work.github.io/brand/docs/themes/hugo/).
It exercises the states a theme has to prove before it can be approved:
hierarchy, link behaviour, callouts, cards, code, status, and one primary
action. Compare it against the Hextra fixture in `examples/hugo-hextra/` — the
two use the same content states, so a migration compares like with like.

{{% alert title="Release boundary" color="info" %}}
Validate the configuration locally, then request promotion. The action below is
the only primary action in this view.
{{% /alert %}}

{{< pj-action href="#release-check" >}}Review release check{{< /pj-action >}}

## What the reader needs first

| Area | State | Owner |
|---|---|---|
| Configuration | Validated | Platform team |
| Documentation | Reviewed | Technical writer |
| Release | Waiting for approval | Release manager |

Link text stays blue — the [Docsy look-and-feel guide](https://www.docsy.dev/docs/adding-content/lookandfeel/)
reads as a link, not as emphasis — while the accent-filled control above stays
reserved for the next action. On narrow screens the table scrolls inside its own
container rather than widening the page.

## A card-led decision surface

{{< cardpane >}}
{{< card header="Validate" >}}
Check tokens, configuration, and internal links.

[Read validation notes](#validate)
{{< /card >}}
{{< card header="Review" >}}
Confirm accessibility in light and dark modes.

[Read review criteria](#review)
{{< /card >}}
{{< card header="Promote" >}}
Create a release only from verified content.

[Read release check](#release-check)
{{< /card >}}
{{< /cardpane >}}

Cards are scanning aids, not decoration. Their links stay links rather than
becoming three competing primary actions.

## Code remains a dark working surface {#validate}

```yaml
params:
  ui:
    navbar_theme: light
    showLightDarkModeMenu: true
  offlineSearch: true
```

Inline code such as `assets/scss/_styles_project.scss` stays distinct from its
paragraph without looking like a second button. The block above stays dark in
both theme modes, with readable syntax and a discoverable copy control.

## Status language is semantic {#review}

{{% alert title="Validated" color="success" %}}
Success is only for a completed, evidenced check.
{{% /alert %}}

{{% alert title="Needs attention" color="warning" %}}
Warnings describe a condition to assess. The warning colour is gold, never the
identity accent.
{{% /alert %}}

{{% alert title="Blocked" color="danger" %}}
Errors need a clear next action, and each alert carries a title so the state
never depends on colour alone.
{{% /alert %}}

## Form controls

Control borders use the strong border step, so an input has a perceivable edge
against the canvas.

{{< pj-form >}}

## Release check {#release-check}

At 320px, check the menu, table overflow, cards, action, code block, and table
of contents. At 1280px, check reading measure, fixed navigation, sidebar
hierarchy, and the balance between the content column and its table of contents.
Repeat each check in light and dark mode, with keyboard navigation and at 200%
zoom.
