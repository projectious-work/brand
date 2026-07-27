# Forms

> Input sizing, labels, focus, error, and disabled states.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

## Sizing

| Size | Height |
|---|---|
| sm | 32px |
| **md** | **40px** — the default |
| lg | 48px |

All inputs are set in **Source Sans 3 at 13px**.

## States

| State | Treatment |
|---|---|
| Default | `slate-7` border |
| Focus | `midnight-9` border + **2px focus ring, midnight at 15% alpha**, 2px offset |
| Error | `orange-9` border + `orange-1` background |
| Disabled | `slate-4` background, `slate-8` text, `cursor: not-allowed` |

## Labels

Labels use the **overline style** and sit **above** the field. Floating labels
are not used anywhere in the system — they hide the label at exactly the moment
the user is filling the field, and they break at long label lengths.

```css
.field__label {
  font-size: 11px;
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

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Keep labels visible at all times. Give every field an associated <code>&lt;label&gt;</code> and
describe errors in words.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Use placeholder text as a label, signal errors with colour alone, or disable the
submit button without explaining what is missing.</p>
</div>
</div>
