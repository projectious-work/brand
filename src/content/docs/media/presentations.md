---
title: Presentations
linkTitle: Presentations
weight: 40
description: Slide templates, animation, and the core deck structure.
---

## Core slides

Six of the twelve slide types cover most decks. Build with these first and reach
for the other six only when the content actually calls for one — the full table
is [below](#the-twelve-types).

{{< demo label="Core slide types — 1280×720 · 16:9" variant="stack" >}}
<div class="pj-slides-grid">
  <div class="pj-slide pj-slide--title">
    <div class="pj-slide__h">Redesigning work</div>
    <div class="pj-slide__sub">Cloud · Agile · Agentic AI</div>
    <div class="pj-slide__sub" style="margin-top:.25rem">projectious.work</div>
  </div>
  <div class="pj-slide pj-slide--statement"><div class="pj-slide__h">Bad software is a decision, not a constraint.</div></div>
  <div class="pj-slide pj-slide--content">
    <div class="pj-slide__h">The agent-first approach</div>
    <div style="display:flex;gap:4px;margin-top:6px">
      <span class="pj-badge" style="flex:1;justify-content:center">Define</span>
      <span class="pj-badge pj-badge--accent" style="flex:1;justify-content:center">Build</span>
      <span class="pj-badge" style="flex:1;justify-content:center">Deploy</span>
    </div>
  </div>
  <div class="pj-slide pj-slide--content" style="justify-content:center">
    <div style="font-size:.8125rem;font-style:italic;color:var(--pj-text-muted)">"We run what we recommend."</div>
  </div>
  <div class="pj-slide pj-slide--content" style="padding:0;overflow:hidden">
    <div class="pj-terminal" style="border:0;border-radius:0;height:100%;font-size:.5625rem;line-height:1.6">
      <span class="pj-terminal__prompt">// pipeline</span><br>createPipeline({<br>&nbsp;&nbsp;policy: <span class="pj-terminal__accent">"strict"</span><br>});
    </div>
  </div>
  <div class="pj-slide pj-slide--title" style="justify-content:center;align-items:center;text-align:center">
    <div class="pj-slide__h">Let's talk</div>
    <div class="pj-slide__sub">projectious.work</div>
  </div>
</div>
{{< /demo >}}


## The full deck

Twelve slide types cover a complete talk. Each is 1280×720 (16:9) and uses the same
tokens as the product surfaces — no separate "presentation theme".

{{< demo label="Opening — title, agenda, section statement" variant="stack" >}}
<div class="pj-slides-grid">
  <div class="pj-slide pj-slide--title">
    <div class="pj-slide__rule"></div>
    <div class="pj-slide__h">Redesigning work</div>
    <div class="pj-slide__sub">Cloud · Agile · Agentic AI</div>
    <div class="pj-slide__footer" style="color:#97a8b8">projectious.work</div>
  </div>
  <div class="pj-slide pj-slide--agenda">
    <div class="pj-slide__h" style="margin-bottom:.375rem">Agenda</div>
    <div class="pj-slide__agenda-item pj-slide__agenda-item--current"><span class="pj-slide__num">01</span> Why agent-first</div>
    <div class="pj-slide__agenda-item"><span class="pj-slide__num">02</span> Architecture</div>
    <div class="pj-slide__agenda-item"><span class="pj-slide__num">03</span> Operating model</div>
    <div class="pj-slide__agenda-item"><span class="pj-slide__num">04</span> What it costs</div>
  </div>
  <div class="pj-slide pj-slide--statement"><div class="pj-slide__h">Bad software is a decision, not a constraint.</div></div>
</div>
{{< /demo >}}

{{< demo label="Content — three-up, split, comparison" variant="stack" >}}
<div class="pj-slides-grid">
  <div class="pj-slide pj-slide--content">
    <div class="pj-slide__h">The agent-first approach</div>
    <div style="display:flex;gap:4px;margin-top:8px">
      <span class="pj-badge" style="flex:1;justify-content:center">Define</span>
      <span class="pj-badge pj-badge--accent" style="flex:1;justify-content:center">Build</span>
      <span class="pj-badge" style="flex:1;justify-content:center">Deploy</span>
    </div>
    <div class="pj-slide__footer">One idea per slide.</div>
  </div>
  <div class="pj-slide pj-slide--split">
    <div class="pj-slide__half">
      <div class="pj-slide__h">Before</div>
      <div style="font-size:.625rem;color:var(--pj-text-muted);margin-top:.25rem">Manual gates, tribal knowledge, slow feedback.</div>
    </div>
    <div class="pj-slide__half pj-slide__half--dark">
      <div class="pj-slide__h">After</div>
      <div style="font-size:.625rem;color:#97a8b8;margin-top:.25rem">Policy as code, repeatable runs, fast feedback.</div>
    </div>
  </div>
  <div class="pj-slide pj-slide--content">
    <div class="pj-slide__h">Where the time goes</div>
    <table style="width:100%;font-size:.5625rem;margin-top:6px;border-collapse:collapse">
      <tr><td style="padding:2px 0">Review</td><td style="text-align:right">42%</td></tr>
      <tr><td style="padding:2px 0">Build</td><td style="text-align:right">31%</td></tr>
      <tr><td style="padding:2px 0">Deploy</td><td style="text-align:right">27%</td></tr>
    </table>
  </div>
</div>
{{< /demo >}}

{{< demo label="Evidence — metric, quote, code, diagram" variant="stack" >}}
<div class="pj-slides-grid">
  <div class="pj-slide pj-slide--metric">
    <div class="pj-slide__metric">1,284</div>
    <div style="font-size:.5625rem;text-transform:uppercase;letter-spacing:.08em;color:var(--pj-text-muted);margin-top:.25rem">Runs this week</div>
  </div>
  <div class="pj-slide pj-slide--quote">
    <div class="pj-slide__rule"></div>
    <div style="font-size:.6875rem;font-style:italic;line-height:1.5">"We run what we recommend."</div>
    <div class="pj-slide__footer">— projectious.work</div>
  </div>
  <div class="pj-slide pj-slide--content" style="padding:0;overflow:hidden">
    <div class="pj-terminal" style="border:0;border-radius:0;height:100%;font-size:.5625rem;line-height:1.65">
      <span class="pj-terminal__prompt">// pipeline</span><br>createPipeline({<br>&nbsp;&nbsp;policy: <span class="pj-terminal__accent">"strict"</span><br>});
    </div>
  </div>
  <div class="pj-slide pj-slide--content">
    <div class="pj-slide__h">Architecture</div>
    <svg viewBox="0 0 200 60" style="width:100%;margin-top:6px" aria-label="Pipeline diagram">
      <rect x="4" y="18" width="46" height="20" rx="4" fill="none" stroke="#546a82" stroke-width="1.2"/>
      <text x="27" y="31" text-anchor="middle" font-size="7" fill="#546a82">Define</text>
      <line x1="52" y1="28" x2="72" y2="28" stroke="#546a82" stroke-width="1.2"/>
      <rect x="74" y="18" width="46" height="20" rx="4" fill="none" stroke="#E05232" stroke-width="1.5"/>
      <text x="97" y="31" text-anchor="middle" font-size="7" fill="#c04424">Build</text>
      <line x1="122" y1="28" x2="142" y2="28" stroke="#546a82" stroke-width="1.2"/>
      <rect x="144" y="18" width="50" height="20" rx="4" fill="none" stroke="#546a82" stroke-width="1.2"/>
      <text x="169" y="31" text-anchor="middle" font-size="7" fill="#546a82">Deploy</text>
    </svg>
  </div>
</div>
{{< /demo >}}

{{< demo label="Closing — CTA and contact" variant="stack" >}}
<div class="pj-slides-grid">
  <div class="pj-slide pj-slide--title" style="justify-content:center;align-items:center;text-align:center">
    <div class="pj-slide__h">Let's talk</div>
    <div class="pj-slide__sub">projectious.work</div>
  </div>
  <div class="pj-slide pj-slide--statement" style="background:#132440">
    <div class="pj-slide__h">Thank you</div>
    <div class="pj-slide__sub" style="margin-top:.25rem">info@projectious.work</div>
  </div>
</div>
{{< /demo >}}

### The twelve types

`Core` marks the six that cover most decks. `Example` marks the types the
[worked deck](#a-real-deck) below actually demonstrates.

| Slide | Core | Example | Purpose |
|---|:--:|:--:|---|
| Title | ● | ● | Deck opening — display type on midnight |
| Agenda | | ● | Numbered outline; current item in `midnight-11` |
| Section statement | ● | ● | A single sentence marking a new section |
| Three-up | ● | ● | Three parallel points |
| Split | | | Before/after or contrast, one half on midnight |
| Comparison | | ● | A small table where numbers are the point |
| Metric | | ● | One number, large; the label in overline style |
| Quote | ● | ● | A single quotation with the accent rule, attributed |
| Code showcase | ● | ● | Code on the always-dark surface |
| Diagram | | | Line-based system diagram, accent on the focal node |
| CTA closer | ● | ● | The one thing you want the audience to do |
| Contact | | | Thank-you and a single contact route |

## A real deck

The supplied **slide templates** provide a full
client deck at 1280×720, populated with a realistic consulting narrative rather
than lorem text. Arrow keys, `PgUp`/`PgDn`, and `Space` navigate; each slide
carries its speaker notes in the source.

The specimens above are scaled-down `div`s that show the *shape* of each type.
The example is the thing a reader can open, present from, and export.

It runs eleven slides and demonstrates nine of the twelve types, plus two
**compositions** that are worth naming because they look like new types and are
not:

- **Roadmap** — a horizontal timeline of the engagement's weeks. It is a
  Three-up stretched to four steps along a rule: same parallel-points structure,
  same tokens, one axis added.
- **Metric row** — four stat cards across the slide. That is the
  [KPI row]({{< relref "/docs/interface/patterns" >}}) from the interface, used
  on a slide. The single-number **Metric** type is for the one number a section
  is about; the row is for the four that summarise an engagement.

Neither is a thirteenth slide type. If a deck needs an arrangement that is not in
the table, compose it from the parts that are. A composition earns a place in the
table by turning up in several decks and being written down — not by being used
once.

Split, Diagram, and Contact are not in the example deck; their specimens are
above.

## Rules

- 1280×720, 16:9 aspect ratio.
- Title slides and section statements use midnight surfaces; content slides use
  white or `midnight-1`.
- `projectious.work` is visible on the title and closing slides.
- One idea per slide. If a slide needs a paragraph, it needs to be two slides.
- Use no more than two type sizes on one slide.

## Animation

- Slide transitions: cut or 200ms fade.
- Build animations use `--ease-out` at `--duration-standard`.
- **Never animate text character-by-character.**
- Motion is for revealing structure, not for holding attention.

## Templates and export targets

Document templates for LaTeX and Typst are in
the document template set.
Both embed brand identity and fall under the brand-asset licence terms — see
[Licensing]({{< relref "/docs/governance/licensing" >}}).

Those two are for documents. A **deck** usually has to arrive somewhere a client
can open and edit it, so **Google Slides, PowerPoint, and Keynote are
first-class targets**, not a downgrade from the HTML deck. The system survives
the trip because it asks very little of the format: three fonts, three colour
families, 16:9, and no effects. Set up a client-facing deck once and the slide
types above are all reproducible as masters.

| Route | Use | Notes |
|---|---|---|
| HTML deck → present | Talks you give yourself | The [example deck](#a-real-deck). Keyboard navigation and speaker notes included |
| HTML deck → print to PDF | Sending a deck to be read | Landscape, background graphics on, margins none |
| Slides / PowerPoint / Keynote | Decks the client will edit | Build the twelve types as masters; do not rebuild them per deck |
| LaTeX / Typst | Documents, not decks | Document templates |

Two things to fix in every native deck tool, because none of them default to the
system: replace the theme fonts with **Plus Jakarta Sans, Source Sans 3, and IBM
Plex Mono** (embed them, or the deck reflows on the client's machine), and
replace the default palette with the brand hex values rather than leaving the
tool's approximations of them in the theme.

Everything else is subtraction: no shadow presets, no gradient fills, no
transition other than a cut or a 200ms fade, no bulleted list where the type
table above offers a slide.
