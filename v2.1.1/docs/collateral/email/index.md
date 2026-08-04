# Email

> A sendable message — the newsletter layout, its bulletproof button, and the constraints a signature does not have to solve.

---

LLMS index: [llms.txt](/brand/v2.1.1/llms.txt)

---

The [signature](/brand/v2.1.1/docs/collateral/email-signature/) covers the
block at the bottom of someone else's message. This page covers the message
itself: a full-width, sendable email with a header, sections, a call to action,
and a footer.

Everything the signature page says about construction — tables, inline styles,
web-safe stacks, literal hex, `role="presentation"` — applies here unchanged and
is not repeated. What follows is what a whole message adds.

| | Source |
|---|---|
| **Newsletter** | [`brand/examples/email-newsletter.html`](/brand/v2.1.1/downloads/examples/email-newsletter.html) |

It opens straight from the filesystem — no runtime, no build step — so it can be
pasted into a sending tool and previewed as-is.

## Structure

600px, centred on a neutral surround, in this order:

| Band | Fill | Contents |
|---|---|---|
| **Preheader** | hidden | One sentence, ~90 characters — see below |
| **Masthead** | `midnight-9` | The wordmark. Nothing else |
| **Lede** | white | Issue overline, headline, and a standfirst that says what is inside |
| **Sections** | white | Numbered overline, heading, two or three sentences |
| **Call to action** | white | One bulletproof button |
| **Footer** | `midnight-9` | Identity, why they are receiving it, unsubscribe, postal address |

**600px** is the width every mail client can be relied on to render without
horizontal scrolling, and it is the reason the message is not laid out on the
[1100px measure](/brand/v2.1.1/docs/foundations/space-shape-motion/). Below
that, `max-width:100%` on the outer table lets the content reflow in a phone
client.

Sections are numbered — `01 · agent pattern` — in the accent, in the overline
style. The number is the only ornament in the body: it gives a scanning reader a
structure to skip through without a rule, an icon, or a background tint per
section.

### The preheader

The first line of hidden text is what the inbox shows next to the subject line.
It is not optional and it is not a repeat of the headline:

```html
<div style="display:none;max-height:0;overflow:hidden;opacity:0;">
  Cloud · Agile · Agentic AI — this month: three agents worth stealing, and
  why generic SaaS is losing its edge.
</div>
```

Leave it out and the client fills the space with whatever text comes first,
which is usually the wordmark followed by "View in browser".

## The bulletproof button

A styled `<a>` is not a button in Outlook's Word renderer: padding collapses and
the fill shrinks to the text. So the call to action is built twice — a VML
rectangle inside a `mso` conditional comment, and a table cell with `bgcolor`
for everyone else.

```html
<!--[if mso]>
<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" href="https://…"
             style="height:44px;v-text-anchor:middle;width:220px;"
             arcsize="9%" fillcolor="#cc4528" strokecolor="#cc4528">
  <w:anchorlock/>
  <center style="color:#ffffff;font-family:Arial,sans-serif;font-size:14px;font-weight:bold;">
    Read the case study
  </center>
</v:roundrect>
<![endif]-->
<!--[if !mso]><!-->
<table role="presentation" cellpadding="0" cellspacing="0" border="0">
  <tr><td bgcolor="#cc4528" style="border-radius:4px;" align="center">
    <a href="https://…" target="_blank" style="display:block;padding:13px 26px;
       font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:bold;
       color:#ffffff;text-decoration:none;mso-line-height-rule:exactly;">Read the case study</a>
  </td></tr>
</table>
<!--<![endif]-->
```

Three things are load-bearing:

- **The fill is `#cc4528`, not `#E05232`.** White on the identity accent is
  3.87:1; on `accent-solid` it is 4.72:1. The same rule as
  [solid controls in the interface](/brand/v2.1.1/docs/interface/components/),
  and email is where it matters most, because a mail client will not offer a
  hover state to compensate.
- **44px tall.** A mail is read on a phone more often than not, so the
  [touch floor](/brand/v2.1.1/docs/foundations/responsive/) is the binding
  constraint.
- **`arcsize="9%"`** approximates the 4px radius the HTML path sets. VML has no
  pixel radius; it takes a percentage of the shorter side.

One button per message. A second call to action does not add a second chance —
it splits the first one.

## Colour in a message

The [signature's colour table](/brand/v2.1.1/docs/collateral/email-signature/)
holds, with two additions a whole message needs:

| Role | Value | Use |
|---|---|---|
| Body text | <span class="pj-color-chip" style="--pj-chip: #142438" aria-hidden="true"></span> `#142438` | Paragraphs — midnight-12, never `#333` and never `#000` |
| Section overline | <span class="pj-color-chip" style="--pj-chip: #c04424" aria-hidden="true"></span> `#c04424` | The numbered section labels — orange-11, 5.13:1 on white |
| Button fill | <span class="pj-color-chip" style="--pj-chip: #cc4528" aria-hidden="true"></span> `#cc4528` | With white text, 4.72:1 |
| Footer text | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | On the `midnight-9` footer, 8.90:1 |
| Footer link | <span class="pj-color-chip" style="--pj-chip: #f0a48c" aria-hidden="true"></span> `#f0a48c` | Unsubscribe, on midnight — 6.31:1 |
| Hairline | <span class="pj-color-chip" style="--pj-chip: #e5e3de" aria-hidden="true"></span> `#e5e3de` | Section dividers, as a 1px table row |
| Page surround | <span class="pj-color-chip" style="--pj-chip: #f5f4f2" aria-hidden="true"></span> `#f5f4f2` | Behind the 600px sheet. Not a system token — it is the neutral the standalone brand documents use, and it exists so the white sheet has an edge in clients that show one |

The accent appears as **text** in the overlines and as a **fill** on the one
button — and `#E05232` itself appears nowhere carrying text, in either role.

## The footer is not decoration

Commercial mail has to say who sent it, why it arrived, and how to stop it.
Those three facts are the footer's whole job:

- **Who** — the legal entity and its postal address.
- **Why** — one sentence: "Sent to you because you subscribed to Field notes."
- **How to stop** — an unsubscribe link that works in one click and does not
  require signing in.

An unsubscribe that leads to a login screen is, in most of the jurisdictions on
the [signature page](/brand/v2.1.1/docs/collateral/email-signature/), not an
unsubscribe.

## Before sending

- Send to Outlook (Windows), Gmail web, Apple Mail, and one mobile client. The
  VML path only exists for the first of those, so it only gets tested there.
- Check the preheader in the inbox list, not just in the opened message.
- Turn images off. The message must still make complete sense — which is why
  there are none in the layout to begin with.
- Turn dark mode on. Clients recolour aggressively; as with the signature, the
  hierarchy is carried by size and weight so it survives.
- Click the unsubscribe link from a logged-out browser.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Write the preheader. Keep the message at one call to action. Fill solid buttons
with <code>accent-solid</code>. State why the reader is receiving it.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Ship a styled <code>&lt;a&gt;</code> as the only button, use <code>#E05232</code> behind white text, rely on
an image to carry the message, or hide the unsubscribe behind a login.</p>
</div>
</div>
