# Forms

> Input sizing, labels, focus, error, and disabled states.


## Sizing

| Size | Height |
|---|---|
| sm | 32px |
| **md** | **40px** — the default |
| lg | 48px |

All inputs are set in **Source Sans 3 at 13px**.

{{< demo label="Sizes — sm 32 · md 40 · lg 48" variant="grid" >}}
<div class="pj-field"><span class="pj-field__label">Small</span><input class="pj-input pj-input--sm" value="32px" readonly></div>
<div class="pj-field"><span class="pj-field__label">Medium</span><input class="pj-input" value="40px — default" readonly></div>
<div class="pj-field"><span class="pj-field__label">Large</span><input class="pj-input pj-input--lg" value="48px" readonly></div>
{{< /demo >}}

## States

| State | Treatment |
|---|---|
| Default | `slate-7` border |
| Focus | `midnight-9` border + **2px focus ring, midnight at 15% alpha**, 2px offset |
| Error | `orange-9` border + `orange-1` background |
| Disabled | `slate-4` background, `slate-8` text, `cursor: not-allowed` |

{{< demo label="Every state" variant="grid" >}}
<div class="pj-field"><span class="pj-field__label">Default</span><input class="pj-input" placeholder="slate-7 border"></div>
<div class="pj-field"><span class="pj-field__label">Focus</span><input class="pj-input" value="midnight ring" readonly style="border-color:#1d3352;box-shadow:0 0 0 2px rgba(29,51,82,.15)"></div>
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

- Error text sits **below** the field, in `orange-11` on light surfaces.
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


---
Source: https://projectious-work.github.io/brand/v3.0.0/docs/interface/forms/index.md
