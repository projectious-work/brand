---
title: Hextra kitchen sink
description: The projectious.work brand rendered by Hextra — the same tokens, specimens, and rules as the documentation site.
layout: hextra-home
---

{{< hextra/hero-badge link="docs/kitchen-sink" >}}
  <div class="hx:w-2 hx:h-2 hx:rounded-full hx:bg-primary-400"></div>
  <span>Every component, on one page</span>
{{< /hextra/hero-badge >}}

<div class="hx:mt-6 hx:mb-6">
{{< hextra/hero-headline >}}
  The projectious.work brand,&nbsp;<br class="hx:sm:block hx:hidden" />rendered by Hextra
{{< /hextra/hero-headline >}}
</div>

<div class="hx:mb-12">
{{< hextra/hero-subtitle >}}
  One of two reference implementations; the other uses Docsy.&nbsp;<br class="hx:sm:block hx:hidden" />They share the same tokens, the same specimens and the same kitchen-sink page, so anything that differs between them is a difference between the themes — not the brand.
{{< /hextra/hero-subtitle >}}
</div>

<div class="hx:mb-6">
{{< hextra/hero-button text="Open the kitchen sink" link="docs/kitchen-sink" >}}
</div>

<div class="hx:mt-6"></div>

{{< hextra/feature-grid >}}
  {{< hextra/feature-card
    title="One component set"
    subtitle="Buttons, inputs, cards, tables, navigation, feedback, overlays, data display and code — the complete set, mounted from the documentation site rather than copied into this example."
    link="docs/kitchen-sink"
  >}}
  {{< hextra/feature-card
    title="Measured, not estimated"
    subtitle="Every colour pairing is checked against WCAG AA in both modes, and the audit covers these example pages too — not only the documentation."
    link="docs/review-specimen"
  >}}
  {{< hextra/feature-card
    title="Inside the documented seams"
    subtitle="The brand reaches this theme through assets/css/custom.css and two documented hooks. No Hextra template is overridden, so a theme upgrade stays a dependency change."
    link="docs/foundations"
  >}}
  {{< hextra/feature-card
    title="Dark mode designed, not inverted"
    subtitle="Both modes climb the midnight ramp in step order. Use the control beside the search field to compare them."
    link="docs/reference"
  >}}
  {{< hextra/feature-card
    title="Code stays dark"
    subtitle="Code surfaces do not follow the colour mode, so the syntax palette is designed and measured once. Every token carries a recorded contrast ratio."
    link="docs/recipes"
  >}}
  {{< hextra/feature-card
    title="One accent, spent deliberately"
    subtitle="Orange marks the primary action, the current item and focus. It is never a large fill, and never the colour of an ordinary link."
    link="docs/kitchen-sink"
  >}}
{{< /hextra/feature-grid >}}

## How this example is put together

The colour scales, the token layer, the syntax theme, the component specimens
and the kitchen-sink page are **mounted** from the documentation site by
`hugo.yaml` rather than copied here. A change to a brand token reaches this page
on the next build, so the example cannot quietly drift from the system it is
meant to demonstrate.

{{< callout type="info" >}}
The same kitchen-sink page renders under Docsy in `examples/hugo-docsy/`.
Comparing the two is the quickest way to see what the theme contributes and what
the brand fixes.
{{< /callout >}}

Full guidance for both themes — the shared semantic layer, each adapter, and the
review fixtures — is on the
[Hugo theming page](https://projectious-work.github.io/brand/docs/themes/hugo/).
