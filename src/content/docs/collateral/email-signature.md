---
title: Email signature
linkTitle: Email signature
weight: 20
description: A signature that survives every mail client, carries the details business mail is required to carry, and stays quiet on a white message.
---

Email is not the web. Every value below is a literal, every layout is a table,
and nothing depends on a stylesheet the client is free to discard.

Two forms are supplied:

| Form | Source | Use for |
|---|---|---|
| **Full** | [`brand/email/signature.html`](https://github.com/projectious-work/brand/blob/main/brand/email/signature.html) | First contact, and any message leaving the organisation — it carries the legally required details |
| **Short** | [`brand/email/signature-short.html`](https://github.com/projectious-work/brand/blob/main/brand/email/signature-short.html) | Replies and internal mail, where the full block repeated down a thread becomes noise |

## The signature

{{< demo label="Full form — a white message is the design constraint" variant="stack" >}}
<div class="pj-email-sheet">
<table cellpadding="0" cellspacing="0" border="0" role="presentation" bgcolor="#ffffff" style="border-collapse:collapse;max-width:520px;background:#ffffff;background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;font-size:13px;line-height:1.5;color:#142438">
 <tr bgcolor="#ffffff" style="background-color:#ffffff"><td bgcolor="#ffffff" style="background:#ffffff;background-color:#ffffff;border-left:3px solid #E05232;padding:2px 0 2px 14px">
   <div style="font-size:15px;font-weight:700;color:#1d3352;letter-spacing:-0.2px">Jane Doe</div>
   <div style="font-size:13px;color:#142438;padding-top:1px">Principal Consultant</div>
   <div style="font-size:13px;color:#546a82">Projectious GmbH</div>
   <div style="padding-top:9px">
     <span style="font-size:13px;color:#142438">+49 30 000 000 00</span>
     <span style="font-size:13px;color:#546a82">&nbsp;·&nbsp;</span>
     <a href="#" style="font-size:13px;color:#3a5a82;text-decoration:none">jane@projectious.work</a>
   </div>
   <div><a href="#" style="font-size:13px;color:#3a5a82;text-decoration:none">projectious.work</a></div>
   <div style="font-size:12px;color:#546a82;padding-top:9px">Musterstraße 1, 10115 Berlin, Germany</div>
   <div style="font-size:11px;line-height:1.45;color:#546a82;padding-top:9px">
     Projectious GmbH · Registered seat Berlin<br>
     Amtsgericht Charlottenburg, HRB 000000 · VAT ID DE000000000<br>
     Managing director: Jane Doe
   </div>
   <div style="font-size:11px;line-height:1.45;color:#546a82;padding-top:7px">
     This message is intended only for the addressee and may contain confidential
     information. If you received it in error, please tell the sender and delete it.
   </div>
 </td></tr>
</table>
</div>
{{< /demo >}}

{{< demo label="Short form — replies and internal mail" variant="stack" >}}
<div class="pj-email-sheet">
<table cellpadding="0" cellspacing="0" border="0" role="presentation" bgcolor="#ffffff" style="border-collapse:collapse;max-width:520px;background:#ffffff;background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;font-size:13px;line-height:1.5;color:#142438">
 <tr bgcolor="#ffffff" style="background-color:#ffffff"><td bgcolor="#ffffff" style="background:#ffffff;background-color:#ffffff;border-left:3px solid #E05232;padding:2px 0 2px 14px">
   <div style="font-size:14px;font-weight:700;color:#1d3352;letter-spacing:-0.2px">Jane Doe</div>
   <div style="font-size:12px;color:#546a82">Principal Consultant · Projectious GmbH</div>
   <div style="padding-top:5px">
     <a href="#" style="font-size:12px;color:#3a5a82;text-decoration:none">jane@projectious.work</a>
     <span style="font-size:12px;color:#546a82">&nbsp;·&nbsp;</span>
     <a href="#" style="font-size:12px;color:#3a5a82;text-decoration:none">projectious.work</a>
   </div>
 </td></tr>
</table>
</div>
{{< /demo >}}

Both specimens are rendered on **white**, because that is where a signature
actually lives. The surrounding page has a colour mode; a mail message
generally does not.

## One rule, and it is vertical

A signature accumulates dividers as it accumulates fields — one under the name,
another above the legal block, another before the disclaimer — and each reads as
a section break in a message that is not sectioned. On a white background the
result is a small form stapled to the bottom of a letter.

So there are **no horizontal rules at all**. One vertical accent rule runs down
the left of the whole block: it marks the signature as a unit, ties it to the
brand, and costs one line instead of four. Everything else is separated by space
and by type size.

{{< rules >}}
{{% do %}}
Group the fields — identity, contact, address, legal — and separate the groups
with about 9px of space. Let the type sizes do the ranking.
{{% /do %}}
{{% dont %}}
Add a rule between groups, a coloured band behind the name, social icon rows, a
quotation, or a "please consider the environment" line.
{{% /dont %}}
{{< /rules >}}

## Fields

Replace every `[PLACEHOLDER]`. Delete any row that does not apply — the block is
built so that removing a row leaves no gap behind it.

| Field | Required | Notes |
|---|---|---|
| Full name | Always | 15px, 700, `midnight-9` |
| Job title | Always | Its own line — a title merged into the company line reads as part of the company |
| Company legal name | Always | The registered name, not the trading shorthand, wherever the legal block appears |
| Phone | Recommended | With country code; a signature is often read from another country |
| Email address | Always | Even though it is in the header — messages get forwarded |
| Website | Always | |
| Postal address | Regionally required | Street, postcode, city, country |
| Register details | Regionally required | Legal form, registered seat, register court and number, VAT ID, directors |
| Confidentiality notice | Optional | Two lines at most; delete it unless your organisation requires it |

### What the law asks for

A starting point, not legal advice — confirm against your own jurisdiction
before shipping a signature.

| Jurisdiction | Business email must carry |
|---|---|
| **Germany** | Legal form, registered seat, register court and number, and every managing director (§ 35a GmbHG, § 37a HGB) |
| **EU / UK** | Company registration number, registered office address, and VAT number where registered |
| **United States** | No statutory signature requirement; confidentiality notices are convention rather than law |
| **Canada** | CASL requires sender identification and a postal address on commercial messages |
| **Australia** | ACN or ABN on business correspondence |

## Construction

| Rule | Why |
|---|---|
| Table layout, `role="presentation"` | Flexbox and grid do not survive Outlook's Word renderer; the role stops screen readers announcing a data table |
| White declared on **table, row, and cell** | A client repainting for dark mode decides what to invert per element. White on the cell alone leaves the table around it unpainted — see below |
| Each background written **twice**, as `bgcolor` and `background-color` | The `background` shorthand alone is not enough: several clients strip shorthands and keep longhands, and Outlook's renderer prefers the attribute |
| Inline styles only | Most clients strip `<style>`, and none support custom properties — so no `var(--pj-*)` anywhere |
| Web-safe font stack | Brand faces will not load in a mail client; the stack degrades to a system sans without changing the layout |
| Maximum width 520px | Below the 600px that forces horizontal scrolling in narrow reading panes |
| Literal hex values | The brand steps, written out — see the table below |
| No images | A hosted logo is blocked by default in many clients and leaves a broken frame. The accent rule carries the brand with nothing to load |
| No background images | If a fill is ever needed, use the `bgcolor` attribute |

### Declaring white three times is not belt-and-braces

It is the difference between a signature that survives dark mode and one that
does not, and it is the most common way this block breaks.

```html
<table … bgcolor="#ffffff" style="…background:#ffffff;background-color:#ffffff;…">
  <tr bgcolor="#ffffff" style="background-color:#ffffff">
    <td bgcolor="#ffffff" style="background:#ffffff;background-color:#ffffff;…">
```

A client that repaints a message for dark mode works **element by element**: it
looks at each one, decides whether it has a background it should keep, and
inverts the rest. Declare white only on the `<td>` and the `<table>` around it
has no background to keep — so the cell stays white while its own container is
repainted dark. The result is a white island with a dark halo, or worse, the
dark text inverted to light *and then* drawn on the white cell that was kept.

Every enclosing element that has a painted area needs the declaration, and each
one needs it in both forms: the `bgcolor` attribute, which Outlook's renderer
prefers, and `background-color`, because several clients strip the `background`
shorthand while keeping longhands.

{{% alert title="Dark mode will recolour this, and that is fine" color="info" %}}
Several clients — Outlook mobile and some webmail among them — invert or shift
signature colours in dark mode, and none can be reliably prevented from doing
so. The signature is therefore built to survive recolouring rather than to fight
it: the hierarchy is carried by *size and weight* as much as by hue, so it still
reads when the palette is altered.
{{% /alert %}}

### Colours

Three families, which is what a signature should have.

| Role | Value | Use |
|---|---|---|
| Heading | <span class="pj-color-chip" style="--pj-chip: #1d3352" aria-hidden="true"></span> `#1d3352` | The name |
| Primary text | <span class="pj-color-chip" style="--pj-chip: #142438" aria-hidden="true"></span> `#142438` | Title, phone |
| Secondary | <span class="pj-color-chip" style="--pj-chip: #546a82" aria-hidden="true"></span> `#546a82` | Company, address |
| Link | <span class="pj-color-chip" style="--pj-chip: #3a5a82" aria-hidden="true"></span> `#3a5a82` | Email, website |
| Legal and notice | <span class="pj-color-chip" style="--pj-chip: #546a82" aria-hidden="true"></span> `#546a82` | Register details, confidentiality notice |
| Accent | <span class="pj-color-chip" style="--pj-chip: #E05232" aria-hidden="true"></span> `#E05232` | The vertical rule, and nothing else |

## Before shipping a change

- Send to Outlook (Windows), Gmail web, Apple Mail, and one mobile client.
- Reply to that message twice and check how the signature looks quoted inside a
  thread.
- Turn on the client's dark mode and confirm the hierarchy still reads.
- Forward it, to confirm nothing depends on the original message's styles.
