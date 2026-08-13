# Typography

> Three typefaces, three jobs, and the v2.1.1 type ramp.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

The system uses three typefaces, each with one job. All three are licensed under
the SIL Open Font License 1.1 and served from Google Fonts, so there are no
bundled font binaries to license or redistribute.

## The three families

| Family | Weights | Role | Licence |
|---|---|---|---|
| **Plus Jakarta Sans** | 400 · 500 · 600 · 700 · 800 | Headings, display, buttons, navigation, wordmark | SIL OFL 1.1 |
| **Source Sans 3** | 400 · 500 · 600 | Body copy, UI labels, captions | SIL OFL 1.1 |
| **IBM Plex Mono** | 400 · 500 | Code, terminal output, data | SIL OFL 1.1 |

Loading them:

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Source+Sans+3:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap">
```

## The ramp

Every row below is set in the family, size, weight, and line-height it
documents — this is the live specimen, not a picture of one.

<div class="pj-type"><div class="pj-type__row">
    <div class="pj-type__spec">Display · 48/800/1.1</div>
    <div class="pj-type__sample" style="font-family:&#39;Plus Jakarta Sans&#39;, sans-serif;font-size:48px;font-weight:800;line-height:1.1;letter-spacing:-0.3px">Redesigning work</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">H1 · 36/700/1.15</div>
    <div class="pj-type__sample" style="font-family:&#39;Plus Jakarta Sans&#39;, sans-serif;font-size:36px;font-weight:700;line-height:1.15;letter-spacing:-0.3px">Agent-first consulting</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">H2 · 28/700/1.2</div>
    <div class="pj-type__sample" style="font-family:&#39;Plus Jakarta Sans&#39;, sans-serif;font-size:28px;font-weight:700;line-height:1.2;letter-spacing:-0.3px">Composable infrastructure</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">H3 · 24/600/1.25</div>
    <div class="pj-type__sample" style="font-family:&#39;Plus Jakarta Sans&#39;, sans-serif;font-size:24px;font-weight:600;line-height:1.25;letter-spacing:-0.3px">How the system fits together</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">H4 · 20/600/1.3</div>
    <div class="pj-type__sample" style="font-family:&#39;Plus Jakarta Sans&#39;, sans-serif;font-size:20px;font-weight:600;line-height:1.3;letter-spacing:-0.3px">Working in the open</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">H5 · 17/600/1.35</div>
    <div class="pj-type__sample" style="font-family:&#39;Plus Jakarta Sans&#39;, sans-serif;font-size:17px;font-weight:600;line-height:1.35">Supporting detail</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">Body L · 18/400/1.65</div>
    <div class="pj-type__sample" style="font-family:&#39;Source Sans 3&#39;, sans-serif;font-size:18px;font-weight:400;line-height:1.65">Augmenting people&#39;s strengths through composable Cloud · Agile · Agentic AI infrastructure.</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">Caption · 13/400/1.5</div>
    <div class="pj-type__sample" style="font-family:&#39;Source Sans 3&#39;, sans-serif;font-size:13px;font-weight:400;line-height:1.5">Figure 1 — pipeline stages and their policy gates.</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">Overline · 12/600/1.3</div>
    <div class="pj-type__sample" style="font-family:&#39;Source Sans 3&#39;, sans-serif;font-size:12px;font-weight:600;line-height:1.3;text-transform:uppercase;letter-spacing:0.08em">SECTION LABEL</div>
  </div><div class="pj-type__row">
    <div class="pj-type__spec">Code · 14/400/1.6</div>
    <div class="pj-type__sample" style="font-family:&#39;IBM Plex Mono&#39;, monospace;font-size:14px;font-weight:400;line-height:1.6">createPipeline({ policy: &#34;strict&#34; })</div>
  </div>
</div>


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

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Pair an overline with an H2 to label a section. Keep the ramp intact — skip
sizes rather than inventing intermediate ones.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Introduce a fourth typeface, use a weight outside the listed set, or fake a
weight with <code>font-synthesis</code>.</p>
</div>
</div>
