---
title: Typography
linkTitle: Typography
weight: 20
description: Three families, three roles, a scalable reading-first ramp, and the font cuts required to preserve meaning.
---

Typography answers one question before it answers any aesthetic one: what kind
of information is this?

- **Plus Jakarta Sans is conviction.** Use it for display, headings, navigation,
  buttons, and the wordmark.
- **Source Sans 3 is clarity.** Use it for running copy, interface labels,
  descriptions, and captions.
- **IBM Plex Mono is precision.** Use it for code, data, terminal output,
  versions, and machine identifiers.

Never mix those roles. If the text guides attention, use Jakarta. If it is read,
use Source Sans. If it reports a system, use Plex Mono.

## Families and required cuts

| Family | Required cuts | Role | Licence |
|---|---|---|---|
| **Plus Jakarta Sans** | 400 · 500 · 600 · 700 · 800 upright | Display, headings, controls | SIL OFL 1.1 |
| **Source Sans 3** | 400 · 500 · 600 upright | Body, UI, descriptions | SIL OFL 1.1 |
| **IBM Plex Mono** | 400 · 500 · 600 · 700 upright **and italic** | Code, data, terminal | SIL OFL 1.1 |

The mono cuts are semantic, not optional polish. Keywords use 700, types use
600, functions use 500, and comments and decorators use italic. Omitting those
files forces synthetic styles and removes the non-colour channel that keeps
syntax structure legible in greyscale.

## The ramp

Every row is rendered in the family, size, weight, and line height it documents.
It translates the supplied type-family, display, body, code, and scale preview
cards into one responsive reference.

{{< typescale >}}

| Role | Size | Weight | Line height |
|---|---:|---:|---:|
| Display | 48 px | 800 | 1.1 |
| H1 | 36 px | 700 | 1.15 |
| H2 | 28 px | 700 | 1.2 |
| H3 | 24 px | 600 | 1.25 |
| H4 | 20 px | 600 | 1.3 |
| H5 | 17 px | 600 | 1.35 |
| Body large | 18 px | 400 | 1.65 |
| Body | 16 px | 400 | 1.6 |
| Caption | 13 px | 400 | 1.5 |
| Overline | 12 px | 600 | 1.3 |
| Code | 14 px | 400 | 1.6 |

Every size resolves through `--font-scale`. The accessibility settings raise
the entire ramp to 112.5%, 125%, 150%, or 200% without per-component overrides.

## Rules

- Tighten display tracking by `-0.5px`. Keep body tracking normal.
- Use positive tracking only for overline labels: 12 px, 600, uppercase,
  `0.08em`.
- Use body large for standfirsts and body for sustained reading. Do not shrink
  prose to make a fixed box fit.
- Use at most two sizes on one slide.
- Keep system fallbacks, but never introduce a fourth brand family.
- Do not disable `font-synthesis` as a substitute for shipping the required
  files; ship the cuts the semantics require.

{{< rules >}}
{{% do %}}
Pair an overline with a heading, keep the ramp intact, and prove every fixed-size
artifact at 200% text and with loose text spacing.
{{% /do %}}
{{% dont %}}
Set body copy in Plus Jakarta Sans, headings in Source Sans 3, or code in a
generic monospace when the brand font is available.
{{% /dont %}}
{{< /rules >}}
