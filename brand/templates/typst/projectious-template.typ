// projectious.work brand system — Typst template
// Place font files (OTF/TTF) in a fonts/ directory

#set document(title: "Document Title", author: "projectious.work")

#let midnight = rgb("#1d3352")
#let midnight-light = rgb("#2b4d78")
#let midnight-dark = rgb("#132440")
#let accent = rgb("#E05232")
#let accent-light = rgb("#ea7558")
#let secondary = rgb("#546a82")

#set page(
  paper: "a4",
  margin: (left: 25mm, right: 25mm, top: 30mm, bottom: 30mm),
  header: context {
    set text(size: 9pt, fill: secondary)
    [projectious.work #h(1fr) #counter(page).display()]
    line(length: 100%, stroke: 0.4pt + secondary)
  },
  footer: context {
    set text(size: 8pt, fill: secondary)
    align(center)[Cloud · Agile · Agentic AI]
  },
)

#set text(
  font: "Source Sans 3",
  size: 11pt,
  fill: rgb("#1a1a1a"),
)

#set heading(numbering: none)
#show heading.where(level: 1): set text(font: "Plus Jakarta Sans", size: 18pt, fill: midnight, weight: "bold")
#show heading.where(level: 2): set text(font: "Plus Jakarta Sans", size: 14pt, fill: midnight-light, weight: "bold")
#show heading.where(level: 3): set text(font: "Plus Jakarta Sans", size: 12pt, fill: secondary, weight: "semibold")

#show raw: set text(font: "IBM Plex Mono", size: 10pt)
#show link: set text(fill: accent)

#set par(leading: 0.8em, spacing: 1.2em)

// ── Title page ──
#page(header: none, footer: none)[
  #v(4cm)
  #text(font: "Plus Jakarta Sans", size: 28pt, fill: midnight, weight: "bold")[Document Title]
  #v(0.5cm)
  #text(font: "Source Sans 3", size: 14pt, fill: secondary)[Subtitle goes here]
  #v(2cm)
  #text(size: 11pt, fill: secondary)[
    projectious.work \
    Cloud · Agile · Agentic AI \
    #datetime.today().display("[month repr:long] [day], [year]")
  ]
]

= Introduction

This is a template document using the projectious.work brand system.

== Purpose

Body text uses Source Sans 3 at 11pt. Headings use Plus Jakarta Sans in midnight color. Code uses `IBM Plex Mono`.

=== Technical note

The accent color #text(fill: accent)[(\#E05232)] is used sparingly for emphasis.

```js
// Code blocks use IBM Plex Mono
const pipeline = createPipeline({
  name: "validate-deploy",
  policy: "strict"
});
```
