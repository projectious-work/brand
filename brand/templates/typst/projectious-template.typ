// =============================================================================
// projectious.work brand system — Typst template
// =============================================================================
//   typst compile projectious-template.typ
//
// Fonts: Plus Jakarta Sans, Source Sans 3, IBM Plex Mono — all SIL OFL 1.1.
// Install them system-wide, or place the OTF/TTF files in ./fonts/ and compile
// with:  typst compile --font-path ./fonts projectious-template.typ
//
// Colour usage follows the brand's step roles: step 9 is an identity/solid
// colour, step 11 is the text step. The accent is therefore never used as body
// text or link text — use `accent-text` instead.
// =============================================================================

#set document(title: "Document Title", author: "projectious.work")

// ── Brand colours ────────────────────────────────────────────────────────────
// Identity / solid
#let midnight = rgb("#1d3352")        // primary, step 9
#let midnight-light = rgb("#2b4d78")
#let midnight-dark = rgb("#132440")
#let accent = rgb("#E05232")          // identity accent, step 9 — FILLS ONLY
#let accent-solid = rgb("#cc4528")    // solid fill carrying white text, 4.72:1
#let accent-dark = rgb("#b84228")
#let accent-light = rgb("#ea7558")    // accent as text on dark surfaces
// Text
#let accent-text = rgb("#c04424")     // accent as text on light, 5.13:1
#let ink = rgb("#142438")             // midnight-12 — body text, never #000
#let secondary = rgb("#546a82")
#let muted = rgb("#5c6f82")
// Surfaces
#let slate2 = rgb("#f1f2f4")
#let slate4 = rgb("#dadce0")
#let midnight1 = rgb("#f8f9fb")
// Semantic — print-safe foregrounds
#let ok = rgb("#276754")
#let warn = rgb("#6f5106")
#let danger = rgb("#a8261c")

// ── Page ─────────────────────────────────────────────────────────────────────
#set page(
  paper: "a4",
  margin: (left: 25mm, right: 25mm, top: 30mm, bottom: 30mm),
  header: context {
    set text(size: 9pt, fill: muted)
    grid(columns: (1fr, auto), [projectious.work], [#counter(page).display()])
    v(-0.4em)
    line(length: 100%, stroke: 0.4pt + slate4)
  },
  footer: context {
    set text(size: 8pt, fill: muted)
    align(center)[Cloud · Agile · Agentic AI]
  },
)

// ── Type ─────────────────────────────────────────────────────────────────────
#set text(font: "Source Sans 3", size: 11pt, fill: ink)
#set par(leading: 0.8em, spacing: 1.2em, justify: false)

#set heading(numbering: none)
#show heading.where(level: 1): set text(font: "Plus Jakarta Sans", size: 18pt, fill: midnight, weight: "bold")
#show heading.where(level: 2): set text(font: "Plus Jakarta Sans", size: 14pt, fill: midnight-light, weight: "bold")
#show heading.where(level: 3): set text(font: "Plus Jakarta Sans", size: 12pt, fill: secondary, weight: "semibold")

#show raw: set text(font: "IBM Plex Mono", size: 10pt)
// Inline code — a light chip in print. The brand's always-dark code rule is a
// screen rule; a full-bleed dark block wastes ink and reads poorly on paper.
#show raw.where(block: false): it => box(fill: slate2, inset: (x: 3pt, y: 0pt), outset: (y: 3pt), radius: 2pt, it)
#show raw.where(block: true): it => block(fill: slate2, inset: 10pt, radius: 6pt, width: 100%, it)

// Links use accent-text, not accent: #E05232 on white is 3.87:1.
#show link: set text(fill: accent-text)

// ── Components ───────────────────────────────────────────────────────────────
#let callout(title, body, color: midnight, bg: midnight1) = block(
  fill: bg, width: 100%, inset: (x: 10pt, y: 8pt), radius: 3pt,
  stroke: (left: 3pt + color),
)[
  #text(font: "Plus Jakarta Sans", size: 9.5pt, weight: "semibold", fill: color)[#title]
  #v(-0.5em)
  #text(size: 10pt)[#body]
]

#let tag(body, accent-tag: false) = box(
  fill: if accent-tag { rgb("#fae1d8") } else { rgb("#dae2ec") },
  inset: (x: 6pt, y: 2pt), radius: 3pt,
)[#text(size: 9pt, weight: "semibold",
        fill: if accent-tag { rgb("#a8391c") } else { midnight })[#body]]

// ── Title page ───────────────────────────────────────────────────────────────
#page(header: none, footer: none)[
  #v(4cm)
  #text(font: "Plus Jakarta Sans", size: 28pt, fill: midnight, weight: "bold")[Document Title]
  #v(0.3cm)
  #rect(width: 48pt, height: 3pt, fill: accent, stroke: none)
  #v(0.5cm)
  #text(font: "Source Sans 3", size: 14pt, fill: secondary)[Subtitle goes here]
  #v(2cm)
  #text(size: 11pt, fill: muted)[
    projectious.work \
    Cloud · Agile · Agentic AI \
    #datetime.today().display("[month repr:long] [day], [year]")
  ]
]

= Introduction

This template uses the projectious.work brand system. Body text is Source Sans 3
at 11pt; headings are Plus Jakarta Sans; code is IBM Plex Mono.

== Purpose

Body copy sits in `ink` (#raw("#142438"), midnight-12) rather than pure black —
the brand does not use #raw("#000") or #raw("#fff") as text. Supporting copy
uses `muted`.

=== Technical note

The identity accent #raw("#E05232") is reserved for fills, rules, and marks.
Emphasis in running text uses
#text(fill: accent-text, weight: "semibold")[accent-text] instead, and where the
accent must carry white text use `accent-solid` (#raw("#cc4528"), 4.72:1).

#callout([Info], [Callouts use a 3pt left rule in the semantic colour on a
subtle tinted background, matching the on-screen pattern.])

#v(0.5em)

#callout([Warning], [Semantic colours carry meaning. Do not use them for visual
variety.], color: warn, bg: slate2)

= Tables

Header cells take the overline style: small, semibold, letterspaced, in muted.

#table(
  columns: (auto, auto, 1fr),
  stroke: none,
  inset: (x: 8pt, y: 6pt),
  table.header(
    [#text(size: 8.5pt, weight: "semibold", fill: muted)[PARAMETER]],
    [#text(size: 8.5pt, weight: "semibold", fill: muted)[TYPE]],
    [#text(size: 8.5pt, weight: "semibold", fill: muted)[DESCRIPTION]],
  ),
  table.hline(stroke: 0.5pt + slate4),
  [`name`], [string], [Pipeline identifier],
  [`policy`], [string], [Validation strictness],
  [`agents`], [string\[\]], [List of agent identifiers],
)

= Tags

#tag[Composable] #tag(accent-tag: true)[Agent-first] #tag[Humanistic]

= Code

```js
// Agent pipeline definition
const pipeline = createPipeline({
  name: "validate-deploy",
  policy: "strict",
  agents: ["auditor", "deployer"],
});
```

= Lists

- Spacing follows the 4px base scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- Radii: 3, 6, 9, 13pt.
- Motion tokens do not apply in print.
