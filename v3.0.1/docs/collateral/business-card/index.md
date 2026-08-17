# Business card

> The digital-first vCard, shared by QR code or link.


The primary format is **digital** — a vCard shared via QR code or direct link,
not a printed card.

{{< demo label="Digital vCard" variant="stack" >}}
<div class="pj-vcard">
  <span class="pj-vcard__glow"></span>
  <span class="pj-lockup" style="margin-bottom:.75rem"><svg viewBox="0 0 40 40" class="projectious-mark" style="width:28px;height:28px;--pj-mark-shell:#6b8db2;--pj-mark-cut:#132440;--pj-mark-bud:#E05232"><path class="projectious-mark__shell" d="M20 3.2C29.6 3.2 36 12 34.4 22.4C32.8 30.4 25.6 36 18.4 36C11.2 36 4.8 30.4 5.6 20C6.4 10.4 12 3.2 20 3.2Z"/><path class="projectious-mark__cut" opacity=".85" d="M10.4 29.6C9.6 20 13.6 10.4 20.8 8C27.2 6.4 31.2 12 32 19.2L31.2 24.8C27.2 31.2 16.8 32.8 12 30.4Z"/><path class="projectious-mark__shell" opacity=".85" d="M12.8 26.4C12 19.2 16 10.4 21.6 10.4C26.4 11.2 29.6 16 29.6 20.8C28.8 26.4 22.4 29.6 15.2 28.8Z"/><path class="projectious-mark__cut" opacity=".8" d="M14.4 24.8C13.6 18.4 17.6 12 22.4 12.8C25.6 13.6 27.2 17.6 26.4 22.4C25.6 25.6 20 27.2 15.2 25.6Z"/><path class="projectious-mark__bud" d="M16 23.2C16 18.4 18.4 14.4 21.6 15.2C24 16 24.8 19.2 23.2 21.6C21.6 23.2 17.6 24 16 23.2Z"/></svg><span class="pj-wm pj-wm--on-dark" style="font-size:13px">projectious<span class="pj-wm__ext"> · work</span></span></span>
  <div class="pj-vcard__name">Bernhard Gerlach</div>
  <div class="pj-vcard__role">Cloud · Agile · Agentic AI</div>
  <div class="pj-vcard__row" style="margin-top:.625rem">info@projectious.work</div>
  <div class="pj-vcard__row">projectious.work</div>
</div>
{{< /demo >}}

## Paper stock

The same card on white. This is the form to hand a printer when a physical card
is required, and the one to reach for when the card will sit on a light surface
it does not control — a conference badge holder, a scanned page, a slide.

{{< demo label="Paper card — white stock, accent on the leading edge" variant="stack" >}}
<div class="pj-vcard pj-vcard--paper">
  <span class="pj-lockup" style="margin-bottom:.75rem">{{< mark size="28" >}}<span class="pj-wm pj-wm--on-light" style="font-size:13px">projectious<span class="pj-wm__ext"> · work</span></span></span>
  <div class="pj-vcard__name">Bernhard Gerlach</div>
  <div class="pj-vcard__role">Cloud · Agile · Agentic AI</div>
  <div class="pj-vcard__row" style="margin-top:.625rem">info@projectious.work</div>
  <div class="pj-vcard__row">projectious.work</div>
</div>
{{< /demo >}}

Three things change, and nothing else does:

| | Digital | Paper |
|---|---|---|
| Surface | `midnight-dark-1` | White in every appearance — paper has no colour mode |
| Accent | A 12% wash bleeding off the corner | A 3px rule down the leading edge |
| Mark | Light-on-dark colourway | `midnight-9` shell, white cut, `orange-9` bud |

The wash does not survive the change of surface. At 12% on midnight it reads as
a soft light source; at 12% on white it reads as a printing fault — an uneven
patch of ink that a press will faithfully reproduce. So the accent moves to a
rule down the leading edge, which is one line, prints cleanly at any size, and
is the same device the
[signature](/docs/collateral/email-signature/) uses.

The name, role, and contact rows keep their type sizes and weights exactly. Only
their colours change, to the light-mode text steps: `midnight-9` for the name,
`slate-9` for the role at 5.58:1, and `slate-11` for the mono rows at 5.18:1.

{{% callout title="This specimen stays white in every appearance" type="info" %}}
Switch the site's theme and the digital card follows it; this one does not. A
card printed on white stock is white under every lighting condition there is,
and a specimen that goes dark when the reader's browser does would be showing
something that cannot be printed.
{{% /callout %}}

## Layout

- Midnight surface, mark top-left, name in Plus Jakarta Sans 700.
- Role in Source Sans 3 400, in `slate-dark-11`.
- Contact rows in IBM Plex Mono at 11px — addresses and handles are data, and
  monospace makes them scannable and unambiguous.
- `projectious.work` always present.
- Accent used once, on the QR frame or the primary contact method.

## Print fallback

If a printed card is required:

- 85×55mm, matte stock.
- Single-colour midnight on uncoated white, or reversed white on midnight.
- Use the [monochrome mark](/docs/logo/usage/) — no accent on
  press unless a spot colour is budgeted.
- Reserve clear space equal to half the mark's height on every side; do not
  bleed the mark to the trim edge.

### Handing colour to a printer

The brand is defined in sRGB hex. Press is not sRGB, so a printed card needs the
values converted — and the conversion is the vendor's job, not a lookup table's.

**Give the printer the Lab values.** They are device-independent: they describe
the colour itself rather than one recipe for making it, so the vendor can hit
them on whatever stock and profile the job actually runs on.

| Colour | Hex | Lab (D50) | CMYK — unmanaged |
|---|---|---|---|
| Midnight | `#1d3352` | L 20.7, a −0.5, b −21.9 | 65 / 38 / 0 / 68 |
| Orange | `#E05232` | L 54.9, a 55.2, b 48.5 | 0 / 63 / 78 / 12 |
| Accent solid | `#cc4528` | L 49.3, a 53.3, b 46.8 | 0 / 66 / 80 / 20 |
| Slate | `#546a82` | L 43.7, a −3.7, b −16.2 | 35 / 18 / 0 / 49 |
| Midnight dark | `#132440` | L 13.9, a 1.0, b −20.3 | 70 / 44 / 0 / 75 |

{{% callout title="The CMYK column is a starting point, not a specification" type="warning" %}}
Those numbers are the **naive** device conversion — the arithmetic one, with no
colour management. They are here so a proof is not blocked on a phone call, and
they are wrong on any specific press.

Convert through the vendor's own ICC profile before production — FOGRA51 for
coated stock in Europe, GRACoL 2013 in North America — and sign off on a
physical proof on the actual stock. Matte and uncoated paper absorb ink and will
run darker and flatter than the screen, most visibly on Orange.
{{% /callout %}}

Do not guess a Pantone equivalent. If the job budgets a spot colour, give the
vendor the Lab value and let them specify the closest ink; a Pantone number
picked from a screen swatch is a different colour with an authoritative name on
it.


---
Source: https://projectious-work.github.io/brand/v3.0.1/docs/collateral/business-card/index.md
