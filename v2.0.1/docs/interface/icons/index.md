# Icons

> Lucide as the icon library, and how icons are sized and coloured.

---

LLMS index: [llms.txt](/brand/v2.0.1/llms.txt)

---

## Library

The system uses **[Lucide](https://lucide.dev)** — an actively maintained fork
of Feather with over 1,400 icons.

| Property | Value |
|---|---|
| Licence | ISC (functionally equivalent to MIT) |
| Commercial use | Permitted |
| Attribution | Not required in product UI; retain the notice in source |
| Modification | Permitted |

ISC is one of the most permissive open-source licences available, which is why
it was chosen over icon sets with attribution or share-alike terms. See the
[legal assessment](/brand/v2.0.1/docs/governance/legal-assessment/) for the
clearance detail.

<div class="pj-demo"><div class="pj-demo__label">Sizes on the 4px grid — 16 / 20 / 24 / 32px</div>
  <div class="pj-demo__body">
    
<div class="pj-demo-item" style="color:var(--pj-text-muted)"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg><span class="pj-cap">16</span></div>
<div class="pj-demo-item" style="color:var(--pj-text-muted)"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg><span class="pj-cap">20 — default</span></div>
<div class="pj-demo-item" style="color:var(--pj-text-muted)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg><span class="pj-cap">24</span></div>
<div class="pj-demo-item" style="color:var(--pj-text-muted)"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg><span class="pj-cap">32</span></div>
<div class="pj-demo-item" style="color:var(--pj-orange-11)"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg><span class="pj-cap">accent — primary action</span></div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Icon with a label, and an icon button</div>
  <div class="pj-demo__body">
    
<button class="pj-btn pj-btn--accent pj-btn--md"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg> Deploy</button>
<button class="pj-btn pj-btn--ghost pj-btn--md" aria-label="Security settings"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2 4 6v6c0 5 3.4 8.6 8 10 4.6-1.4 8-5 8-10V6z"/></svg></button>
<span class="pj-status pj-status--ok"><span class="pj-status__dot"></span>Policy enforced</span>

  </div>
</div>


## Usage

- **Stroke width 2**, matching Lucide's default. Do not thin or thicken strokes
  to "match" a layout.
- **Size on the 4px grid**: 16, 20, 24, 32px. 20px is the default for inline UI.
- **Colour follows text.** An icon beside a label takes the label's colour.
  Standalone icons carrying meaning take `--color-secondary`; an icon marking
  the primary action takes the accent.
- **Icons are not decoration.** Every icon must carry meaning the label does not
  already carry, or be marked `aria-hidden="true"`.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Pair icons with text labels wherever the meaning is not universally understood.
Give standalone icon buttons an accessible name.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Mix icon sets, recolour icons to arbitrary hues, or use an icon as the only
indicator of state.</p>
</div>
</div>
