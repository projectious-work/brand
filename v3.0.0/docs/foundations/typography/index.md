# Typography

> Three typefaces, three jobs, and the v2.1.1 type ramp.


The system uses three typefaces, each with one job. All three are licensed under
the SIL Open Font License 1.1 and self-hosted as version-pinned WOFF2 files.
System and generic fallbacks keep the content usable if a font cannot load.

## The three families

| Family | Weights | Role | Licence |
|---|---|---|---|
| **Plus Jakarta Sans** | 400 · 500 · 600 · 700 · 800 | Headings, display, buttons, navigation, wordmark | SIL OFL 1.1 |
| **Source Sans 3** | 400 · 500 · 600 | Body copy, UI labels, captions | SIL OFL 1.1 |
| **IBM Plex Mono** | 400 · 500 | Code, terminal output, data | SIL OFL 1.1 |

Loading them from the published brand assets:

```html
<link rel="stylesheet" href="/scss/main.css">
```

## The ramp

Every row below is set in the family, size, weight, and line-height it
documents — this is the live specimen, not a picture of one.

{{< typescale >}}

## Rules

- **Display letter-spacing is −0.5px.** Large type set at default
  tracking reads loose and unresolved.
- **Overline is a label, not a heading.** 12px, 600, uppercase, 0.08em tracking.
  Use it above a heading, never as one.
- **Body copy is 16px / 1.6; body-large is 18px / 1.65.** Use body-large for
  standfirsts and body for documentation and long-form prose. Do not set body
  text below 14px.
- **Never set body copy in Plus Jakarta Sans**, and never set headings in
  Source Sans 3. The split is what makes the voice recognisable.

{{< rules >}}
{{% do %}}
Pair an overline with an H2 to label a section. Keep the ramp intact — skip
sizes rather than inventing intermediate ones.
{{% /do %}}
{{% dont %}}
Introduce a fourth typeface, use a weight outside the listed set, or fake a
weight with `font-synthesis`.
{{% /dont %}}
{{< /rules >}}


---
Source: https://projectious-work.github.io/brand/v3.0.0/docs/foundations/typography/index.md
