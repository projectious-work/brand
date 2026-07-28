---
title: Email signature
linkTitle: Email signature
weight: 20
description: A compact signature that survives every mail client.
---

The signature is built to work in clients with hostile CSS support — Outlook
included. The source is
[`brand/email/signature.html`](https://github.com/projectious-work/brand/blob/main/brand/email/signature.html).

{{< demo label="Signature — one-line lockup, four lines maximum" variant="stack" >}}
<table style="border-collapse:collapse;font-family:'Source Sans 3',sans-serif">
 <tr><td style="padding:0 0 6px 0">
   <span class="pj-lockup"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:24px;height:24px"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-wm" style="font-size:14px">projectious<span class="pj-wm__ext"> · work</span></span></span>
 </td></tr>
 <tr><td style="font-size:13px;font-weight:600;padding:0">Bernhard Gerlach</td></tr>
 <tr><td style="font-size:12px;color:var(--pj-text-muted);padding:0">Cloud · Agile · Agentic AI</td></tr>
 <tr><td style="font-size:12px;padding:2px 0 0 0"><a href="#" style="color:var(--pj-midnight-11)">projectious.work</a></td></tr>
</table>
{{< /demo >}}

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
