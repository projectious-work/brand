---
title: projectious.work Brand
description: The brand and design system for projectious.work — colour, type, logo, components, and usage terms.
params:
  body_class: td-navbar-links-all-active
  ui:
    navbar_theme: dark
---

{{% blocks/cover
  title="A brand that documents itself."
  image_anchor="top"
  height="full td-below-navbar"
%}}

Colour, typography, logo, and interface patterns for projectious.work — with the
usage terms that go with them.
{.lead .display-6}

<div class="td-cta-buttons my-5">
  <a class="btn btn-lg btn-primary me-3" href="{{< relref "/docs/foundations/color" >}}">
    Start with colour
  </a>
  <a class="btn btn-lg btn-secondary" href="{{< relref "/docs/" >}}">
    Explore the system
  </a>
</div>

{{% /blocks/cover %}}

{{% blocks/lead color="white" %}}

This site is built with the system it documents. The scales on the colour page
are the scales styling this paragraph; the type ramp is the ramp setting this
sentence. If a token changes, the documentation changes with it — there is no
separate "brand site" theme to drift out of sync.

{{% /blocks/lead %}}

{{% blocks/section color="light" type="row" %}}

{{% blocks/feature icon="fa-palette" title="Three scales, two modes" %}}

Midnight, orange, and slate as 12-step Radix-convention ramps, each with defined
step roles so a border never gets used as text.

[Read the colour foundations]({{< relref "/docs/foundations/color" >}})

{{% /blocks/feature %}}

{{% blocks/feature icon="fa-font" title="Three fonts, three voices" %}}

Plus Jakarta Sans for headings, Source Sans 3 for body, IBM Plex Mono for code —
all SIL OFL 1.1, with a fixed type ramp.

[Read the typography]({{< relref "/docs/foundations/typography" >}})

{{% /blocks/feature %}}

{{% blocks/feature icon="fa-scale-balanced" title="Terms you can act on" %}}

A split licence, trademark guidelines, and a per-asset provenance inventory —
so you know what you may reuse before you reuse it.

[Read the governance]({{< relref "/docs/governance/" >}})

{{% /blocks/feature %}}

{{% /blocks/section %}}

{{% blocks/section color="primary" type="row" %}}

<div class="col-lg-8">
<h2>Built to be borrowed from carefully</h2>
<p class="lead">The code and tokens are MIT. The brand marks are not. The documentation tells you which is which on every page, and the provenance inventory records the licence of every third-party dependency.</p>
</div>
<div class="col-lg-4 d-flex align-items-center justify-content-lg-end">
<a class="btn btn-lg btn-light" href="{{< relref "/docs/governance/licensing" >}}">Read the licence terms</a>
</div>

{{% /blocks/section %}}
