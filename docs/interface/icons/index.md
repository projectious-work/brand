# Icons

> Lucide as the icon library, and how icons are sized and coloured.

---

LLMS index: [llms.txt](/brand/llms.txt)

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
[legal assessment](/brand/docs/governance/legal-assessment/) for the
clearance detail.

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
