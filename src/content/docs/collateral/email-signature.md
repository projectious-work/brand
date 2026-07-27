---
title: Email signature
linkTitle: Email signature
weight: 20
description: A compact signature that survives every mail client.
---

The signature is built to work in clients with hostile CSS support — Outlook
included. The source is
[`brand/email/signature.html`](https://github.com/projectious-work/brand/blob/main/brand/email/signature.html).

## Construction rules

- **Table-based layout.** Flexbox and grid do not survive Outlook.
- **Inline styles only.** Most clients strip `<style>` blocks.
- **Web-safe font fallbacks.** Brand fonts will not load in most clients — the
  stack must degrade to a system sans without breaking the layout.
- **The mark is a hosted PNG**, not an SVG and not a data URI. Include `alt`
  text; many clients block images by default.
- **No background images.** Use a solid `bgcolor` attribute.

## Content

One line each: name, role, `projectious.work`, and a single contact method.
The one-line lockup is used here — the signature is a horizontal context.

{{< rules >}}
{{% do %}}
Test in Outlook, Gmail web, and Apple Mail before shipping a change. Keep the
signature under four lines.
{{% /do %}}
{{% dont %}}
Add social icon rows, legal disclaimers, quotations, or "please consider the
environment" footers.
{{% /dont %}}
{{< /rules >}}
