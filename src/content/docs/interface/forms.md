---
title: Forms
linkTitle: Forms
weight: 50
description: Input sizing, labels, focus, error, and disabled states.
---

## Sizing

| Size | Height |
|---|---|
| sm | 32px |
| **md** | **40px** — the default |
| lg | 48px |

All inputs are set in **Source Sans 3 at 14px**.

{{< demo label="Sizes — sm 32 · md 40 · lg 48" variant="grid" >}}
<div class="pj-field"><span class="pj-field__label">Small</span><input class="pj-input pj-input--sm" value="32px" readonly></div>
<div class="pj-field"><span class="pj-field__label">Medium</span><input class="pj-input" value="40px — default" readonly></div>
<div class="pj-field"><span class="pj-field__label">Large</span><input class="pj-input pj-input--lg" value="48px" readonly></div>
{{< /demo >}}

## States

| State | Treatment |
|---|---|
| Default | 1.5px `--border` on `--surface` |
| Focus | Accent border + **3px `--tint-accent-active` halo** |
| Error | Danger border, danger tint, and matching danger foreground |
| Disabled | `--surface-2`, muted text, semantic border, `cursor: not-allowed` |

{{< demo label="Every state" variant="grid" >}}
<div class="pj-field"><span class="pj-field__label">Default</span><input class="pj-input" placeholder="semantic border"></div>
<div class="pj-field"><span class="pj-field__label">Focus</span><input class="pj-input" value="accent focus" readonly style="border-color:var(--pj-orange-9);box-shadow:0 0 0 3px rgba(224,82,50,.12)"></div>
<div class="pj-field"><span class="pj-field__label">Error</span><input class="pj-input pj-input--error" value="invalid" readonly><span class="pj-field__error">Describe the problem in words.</span></div>
<div class="pj-field"><span class="pj-field__label">Disabled</span><input class="pj-input" value="locked" disabled></div>
{{< /demo >}}

## Labels

Labels use the **overline style** and sit **above** the field. Floating labels
are not used anywhere in the system — they hide the label at exactly the moment
the user is filling the field, and they break at long label lengths.

```css
.field__label {
  font-size: 12px;
  font-weight: 600;
  line-height: 1.3;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--color-secondary);
}
```

## Validation

- Error text sits **below** the field in the appearance's danger foreground.
- Never rely on border colour alone to signal an error — pair it with text.
- Validate on blur, not on every keystroke; re-validate on submit.

{{< rules >}}
{{% do %}}
Keep labels visible at all times. Give every field an associated `<label>` and
describe errors in words.
{{% /do %}}
{{% dont %}}
Use placeholder text as a label, signal errors with colour alone, or disable the
submit button without explaining what is missing.
{{% /dont %}}
{{< /rules >}}
