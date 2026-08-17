# Documents

> The one-page document pattern — CV, proposal, memo — and how it paginates.


A document is not a screen that happens to be printed. It has a fixed page box,
no hover state, no dark mode, and one shot at being legible on a printer nobody
tested. This page defines the pattern the system uses for short, laid-out
documents. The supplied article, documentation, and marketing mockups are the
visual reference for type hierarchy and fixed-width reading measures.

Longer, flowing documents — reports and papers — use the LaTeX and Typst
templates instead. The split is about pagination, not length; see below.

## Decide the pagination first

Two kinds of document, and the choice is made before any layout happens:

| | Flowing | Explicitly paginated |
|---|---|---|
| Content | One continuous text flow | A fixed set of designed pages |
| Pages | However many the text needs | A number you chose |
| Paper | Reflows onto the reader's paper | Designed to a fixed page box |
| Examples | Report, memo, letter, paper | CV, proposal, brief, certificate |
| Route | LaTeX / Typst templates | The pattern on this page |

Getting this wrong is expensive in one direction: a flowing document forced into
fixed pages breaks the moment a paragraph grows, while a designed page that is
allowed to reflow loses the arrangement that was its whole purpose.

**Never pin a paper size on a flowing document.** Letter and A4 differ, the
reader's printer knows which one it has, and the text should reflow onto it. A
paginated document does pin a page box, and each page is designed to fill Letter
and A4 alike without overlap.

## The one-page document

Header, summary, body sections, and a footer region — with the whole thing
constrained to fit a single page rather than allowed to run onto a second.

| Region | Treatment |
|---|---|
| **Header** | Name at display size in Plus Jakarta Sans 800; role and contact beside it; a 2px `midnight-9` rule under the whole band |
| **Summary** | One paragraph at 14.5px. Three sentences at most |
| **Sections** | An accent overline as the section marker, then the content. No boxes, no rules between entries |
| **Two-up region** | Where two short sections sit side by side — skills and education, or scope and budget |
| **Footer region** | The evidence: selected engagements, references, links |

The **section markers are the only accent on the page**, and they are text. A
document has no primary action, so there is nothing for a solid accent to mark —
an accent-filled band on a CV is decoration claiming to be emphasis.

Entries are separated by space, not by rules. A one-page document accumulates
horizontal rules faster than anything else in the system, and each one costs a
line of content while adding a section break to a document with one section per
heading — the same argument the
[signature](/docs/collateral/email-signature/) makes, on a bigger
sheet.

Dates and other data are set in IBM Plex Mono and right-aligned against the
entry title, so a reader scanning chronology has a column to scan.

## Fitting one page

The constraint that makes this pattern hard is that the content has to end
where the page does.

- **Cut content, not type.** 14.5px body and 13.5px entries are the floor. A
  document set at 11px to fit is a document that will not be read.
- **Cut the oldest entry first.** A CV is not an archive; a proposal is not a
  contract.
- **The two-up region is the pressure valve.** Two short sections side by side
  recover roughly a third of a page against stacking them.
- **Check it at 100%.** A browser zoomed to 90% will happily show you a page
  that overflows in print.

## Exporting

The example is HTML on the paged-document shell; the export route is the
browser's print dialogue, to PDF.

- Print backgrounds **on**, margins **default**, headers and footers **off** —
  the browser's own header would print a URL across the top of a CV.
- Send the PDF, not the HTML. The HTML depends on a font load and a runtime; the
  PDF depends on nothing.
- Check the PDF at 100% and printed on plain paper before it goes anywhere.

## Reusing the pattern

The resume is the worked example, but the pattern is not resume-specific. A
one-page proposal, a project brief, and a decision memo are the same document
with different section names:

| Document | Header | Sections | Footer region |
|---|---|---|---|
| CV | Name and contact | Experience · Skills · Education | Selected engagements |
| Proposal | Client and date | Scope · Approach · Timeline · Price | Assumptions and exclusions |
| Memo | Subject and date | Context · Options · Recommendation | Decision and owner |

Where the document makes a claim about a project's maturity, the
[status vocabulary](/docs/portfolio/status/) applies — a document
is not exempt from it because it is prose.

{{< rules >}}
{{% do %}}
Decide flowing or paginated before laying anything out. Keep the accent to the
section markers. Separate entries with space. Export to PDF and check it
printed.
{{% /do %}}
{{% dont %}}
Shrink type to make content fit, pin a paper size on a flowing document, add
rules between entries, or send the HTML in place of the PDF.
{{% /dont %}}
{{< /rules >}}


---
Source: https://projectious-work.github.io/brand/v3.0.2/docs/portfolio/documents/index.md
