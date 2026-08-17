# Service one-pager

> The sales flier — one service, one page, one call to action.


The card, the signature, and the social artwork all carry the brand in a few
square centimetres. The one-pager is the opposite problem: a whole page,
handed over or attached, that has to explain a single service to someone who has
not asked yet.

The rendered service-page mockups are the visual reference for hierarchy,
spacing, surface treatment, and the single-action close.

## One service per sheet

A one-pager describes **one** offer. A sheet listing four services is a
capabilities brochure, and it is read by nobody, because a reader who wants one
of the four has to find it first.

If there are four services, there are four one-pagers. They share the structure
below and differ only in their content — which is what makes the structure worth
specifying.

## The bands

Four horizontal bands, top to bottom. The sheet is 1000px wide in the HTML
source and prints to a single A4 or Letter page.

| Band | Fill | Job |
|---|---|---|
| **Header** | `midnight-9` | Wordmark, an overline naming the artefact, the service name at display size, and one sentence of promise |
| **Benefits** | white | Three columns: icon in a tinted tile, a short heading, two lines of body |
| **Process** | white | A numbered horizontal sequence — the steps, with a duration under each |
| **Close** | `midnight-12` | The one-line commitment, the contact route, and one accent button |

Two midnight bands, at the top and the bottom, with white between them. The
sheet opens and closes on the brand and leaves the middle to the content — the
same shape as a [title-and-closer
deck](/docs/media/presentations/), for the same reason.

The header carries a single decorative element: an `orange-9` circle at 6%
opacity bleeding off the top-right corner. That is the entire ornament budget for
the page.

## Three benefits, not five

Three columns fit a 12-column grid at four columns each, three items are
readable at a glance, and three is roughly how many distinct reasons a person
retains from a page they were handed.

Each benefit is an icon tile, a heading of no more than five words, and body text
of no more than two lines. The icon is
[Tabler](/docs/interface/icons/) at 20px inside a 40px tile
filled with the tag background — it is a marker, not an illustration.

The heading states the benefit, not the feature: "Self-hosted where it matters",
not "Self-hosting support".

## The process band

A numbered sequence with a connecting rule, each step carrying a duration. The
durations are the point: a one-pager that says "we migrate your cloud" competes
on adjectives, and one that says "week 3: stand up self-hosted core" competes on
a plan.

The numbers are set in IBM Plex Mono inside `midnight-9` discs, because they are
data. The connector is a 1px `slate-5` rule, not an arrow — the numbers already
carry the direction.

**Do not put a duration on the sheet that the engagement cannot hold.** The
[portfolio principle](/docs/portfolio/status/) — make maturity
and limitations easier to see, not harder — applies to sales collateral without
modification.

## One call to action

The close band gets one accent element. It is a button shape carrying white text,
so it fills with `accent-solid` (`#cc4528`) and not the identity accent — the
same [4.72:1 rule](/docs/interface/components/) as the interface
and the [email](/docs/collateral/email/).

Beside it, exactly one contact route, in mono. Two routes make the reader choose
before they act.

## Printing it

The example is HTML, and the export path is the browser's print dialogue — the
same route as the [resume
template](/docs/portfolio/documents/).

- **Colour is not guaranteed.** A one-pager is frequently reprinted on an office
  mono laser. The layout must survive greyscale: the bands separate by value,
  the numbers stay legible, and no meaning is carried by the accent alone.
- **Turn on background graphics** in the print dialogue, or the midnight bands
  print as white and the reversed text disappears.
- **Check the fold.** If the sheet will be folded, nothing important sits within
  10mm of the fold line.
- For volume print, hand the vendor the
  [CMYK values](/docs/collateral/business-card/) rather than the
  hex.

{{< rules >}}
{{% do %}}
Keep one service per sheet, three benefits, and one call to action. Put real
durations on the process steps. Check it in greyscale before it is printed.
{{% /do %}}
{{% dont %}}
List a service catalogue, use stock photography of people in meetings, add a
second contact route, or promise a timeline the engagement cannot hold.
{{% /dont %}}
{{< /rules >}}


---
Source: https://projectious-work.github.io/brand/docs/collateral/flier/index.md
