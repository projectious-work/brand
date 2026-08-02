# Email signature

> A signature that survives every mail client, carries the details business mail is required to carry, and stays quiet on a white message.

---

LLMS index: [llms.txt](/brand/v2.0.2/llms.txt)

---

Email is not the web. Every value below is a literal, every layout is a table,
and nothing depends on a stylesheet the client is free to discard.

Two forms are supplied:

| Form | Source | Use for |
|---|---|---|
| **Full** | [`brand/email/signature.html`](https://github.com/projectious-work/brand/blob/main/brand/email/signature.html) | First contact, and any message leaving the organisation — it carries the legally required details |
| **Short** | [`brand/email/signature-short.html`](https://github.com/projectious-work/brand/blob/main/brand/email/signature-short.html) | Replies and internal mail, where the full block repeated down a thread becomes noise |

## The signature

<div class="pj-demo"><div class="pj-demo__label">Full form — a white message is the design constraint</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-email-sheet">
<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;max-width:520px;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;font-size:13px;line-height:1.5;color:#142438">
 <tr><td bgcolor="#ffffff" style="background:#ffffff;border-left:3px solid #E05232;padding:2px 0 2px 14px">
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

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Short form — replies and internal mail</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-email-sheet">
<table cellpadding="0" cellspacing="0" border="0" role="presentation" style="border-collapse:collapse;max-width:520px;background:#ffffff;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif;font-size:13px;line-height:1.5;color:#142438">
 <tr><td bgcolor="#ffffff" style="background:#ffffff;border-left:3px solid #E05232;padding:2px 0 2px 14px">
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

  </div>
</div>


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

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Group the fields — identity, contact, address, legal — and separate the groups
with about 9px of space. Let the type sizes do the ranking.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Add a rule between groups, a coloured band behind the name, social icon rows, a
quotation, or a &ldquo;please consider the environment&rdquo; line.</p>
</div>
</div>


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
| Inline styles only | Most clients strip `<style>`, and none support custom properties — so no `var(--pj-*)` anywhere |
| Web-safe font stack | Brand faces will not load in a mail client; the stack degrades to a system sans without changing the layout |
| Maximum width 520px | Below the 600px that forces horizontal scrolling in narrow reading panes |
| Literal hex values | The brand steps, written out — see the table below |
| No images | A hosted logo is blocked by default in many clients and leaves a broken frame. The accent rule carries the brand with nothing to load |
| No background images | If a fill is ever needed, use the `bgcolor` attribute |

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Dark mode will recolour this, and that is fine</div>


Several clients — Outlook mobile and some webmail among them — invert or shift
signature colours in dark mode, and none can be reliably prevented from doing
so. The signature is therefore built to survive recolouring rather than to fight
it: the hierarchy is carried by *size and weight* as much as by hue, so it still
reads when the palette is altered.
</div>


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
