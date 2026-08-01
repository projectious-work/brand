---
title: Docsy visual specimen
linkTitle: Docsy specimen
weight: 30
description: A rendered review fixture for a projectious.work Docsy theme.
toc: true
---

This is a real review fixture for Docsy, rendered by this documentation site.
It is deliberately content-led: the visual direction takes hierarchy and
modular discovery cues from Kubeflow without copying Kubeflow's identity,
assets, or page composition.

<div class="pj-overline">Platform operations</div>

# Ship a reliable integration

Use this specimen to inspect the actual Docsy shell, type scale, hierarchy,
link behavior, callouts, cards, code treatment, and primary action in one
place. The page must remain readable before any interaction is available.

<p><a class="btn btn-primary" href="#release-check">Review release check</a></p>

{{% alert title="Release boundary" color="info" %}}
Validate the configuration locally, then request promotion. The action above
is the only primary action in this view.
{{% /alert %}}

## What the reader needs first

| Area | State | Owner |
|---|---|---|
| Configuration | Validated | Platform team |
| Documentation | Reviewed | Technical writer |
| Release | Waiting for approval | Release manager |

The table should remain inside a scrollable container on narrow screens. Link
text remains blue, such as the [token reference]({{< relref "/docs/tokens" >}}),
while the accent-filled control remains reserved for the next action.

## A card-led decision surface

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
        <a href="#release-check">Read release check</a>
      </div>
    </div>
  </div>
</div>

Cards are scanning aids, not decoration. They use the theme's normal surface,
token border, and restrained shadow. Their links remain links rather than
becoming three competing primary actions.

## Code remains a dark working surface

```yaml
params:
  ui:
    navbar_theme: dark
    showLightDarkModeMenu: true
  offlineSearch: true
```

Inline code such as `brand/tokens/tokens.json` must stay distinct from its
paragraph without looking like a second button. The block above stays dark in
both theme modes, with readable syntax and a discoverable copy control.

## Status language is semantic

{{% alert title="Validated" color="success" %}}
Use success only for a completed, evidenced check.
{{% /alert %}}

{{% alert title="Needs attention" color="warning" %}}
Warnings describe a condition to assess; do not use the brand accent as a
generic warning colour.
{{% /alert %}}

{{% alert title="Blocked" color="danger" %}}
Errors need a clear next action and must not rely on colour as their only cue.
{{% /alert %}}

## Release check {#release-check}

At 320px, check the menu, table overflow, cards, action, code block, and TOC.
At 1280px, check reading measure, fixed navigation, sidebar hierarchy, and
the balance between the content column and its table of contents. Repeat each
check in light and dark modes with keyboard navigation and 200% zoom.

For the exact Docsy configuration and SCSS adapter, return to the
[Docsy implementation guide]({{< relref "docsy" >}}).
