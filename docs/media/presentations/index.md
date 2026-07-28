# Presentations

> Slide templates, animation, and the core deck structure.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

## Core slides

Six slide types cover most decks:

| Slide | Purpose |
|---|---|
| Title | Deck opening — display type on midnight |
| Section statement | A single sentence marking a new section |
| Three-up | Three parallel points |
| Quote | A single quotation, attributed |
| Code showcase | Code on the always-dark surface |
| CTA closer | The one thing you want the audience to do |

<div class="pj-demo"><div class="pj-demo__label">Core slide types — 16:10</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
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

  </div>
</div>


## Rules

- 16:10 aspect ratio.
- Title slides and section statements use midnight surfaces; content slides use
  white or `midnight-1`.
- `projectious.work` is visible on the title and closing slides.
- One idea per slide. If a slide needs a paragraph, it needs to be two slides.

## Animation

- Slide transitions: cut or 200ms fade.
- Build animations use `--ease-out` at `--duration-standard`.
- **Never animate text character-by-character.**
- Motion is for revealing structure, not for holding attention.

## Templates

Document templates for LaTeX and Typst are in
[`brand/templates/`](https://github.com/projectious-work/brand/tree/main/brand/templates).
Both embed brand identity and fall under the brand-asset licence terms — see
[Licensing](/brand/docs/governance/licensing/).
