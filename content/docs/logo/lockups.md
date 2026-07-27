---
title: Lockups
linkTitle: Lockups
weight: 10
description: Four approved lockups and where each one belongs.
---

Four lockups are approved. Each has a defined context; using one outside its
context is what makes a layout feel off-brand even when the colours are right.

| Lockup | Composition | Use for | Minimum width |
|---|---|---|---|
| **Two-line** | Mark + "projectious" over "· work" | Headers, slides, cards — **the default** | 120px |
| **One-line** | Mark + "projectious · work" inline | Navbars, footers, signatures | 140px |
| **Dot-replace** | Mark substitutes the dot in "projectious.work" | Compact horizontal contexts | 160px |
| **Stacked** | Mark above the wordmark, centred | App icons, avatars, slide corners | 60px |

## The mark alone

The mark may stand alone **only where the wordmark is already established
nearby** — an app icon on a page that names the product, an avatar in a
signed-in context, a favicon.

Minimum size for the standalone mark is **24px**. The 16px rendering exists for
favicons only, where the browser context supplies the name.

## Wordmark construction

The separator between "projectious" and "work" is a dot in the mark's own
geometry, not a typed period. It takes slate on light surfaces and midnight-11
on dark. Spacing is handled by CSS flex so the wordmark reflows naturally — do
not hand-kern it or convert it to a static image.

{{< rules >}}
{{% do %}}
Use the two-line lockup unless the space is explicitly horizontal. Let the flex
layout handle spacing.
{{% /do %}}
{{% dont %}}
Rebuild a lockup by hand, change the order of mark and wordmark, or set the
wordmark in a different typeface.
{{% /dont %}}
{{< /rules >}}
