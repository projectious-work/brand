# Status treatments

> Text-first maturity labels for truthful portfolio presentation.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

## Required pattern

Every project presentation must show a status as text. Color, icons, position,
and motion may reinforce the label but must never replace it.

| Status | Use when | Supporting cue |
|---|---|---|
| **Usable project** | Documented users can complete the stated core task. | Solid dot |
| **Working prototype** | A real implementation runs, with known limits. | Half-filled dot |
| **Applied research** | Evidence or experiments are the primary output. | Diamond |
| **Supporting asset** | The repository enables another project. | Square |
| **Idea / implementation starting** | Scope exists; implementation is absent or partial. | Ring |
| **Archived** | Work is preserved but no longer maintained. | Horizontal bar |

Do not substitute broad claims such as "platform", "production-ready", or
"enterprise" unless the owning repository publishes evidence for that claim.
Prefer narrow artifact categories: **CLI**, **process layer**,
**applied research**, **prototype**, **library**, or **supporting asset**.

## Accessibility

- Keep the full status label visible at all viewport sizes.
- Pair every color with the status-specific shape in the table.
- Use normal text contrast of at least 4.5:1 and large-text/UI contrast of at
  least 3:1.
- Test light and dark variants independently.
- Do not encode a status change with animation alone.

The source templates use high-contrast neutral text and reserve accent color
for a supporting rule. Maintainers must rerun local validation after changing
colors.

## Project examples

Examples are prompts for maintainers, not permanent factual claims. Confirm
each status and limitation with the owning repository before publishing.

| Project | Narrow category | Example status line | Required limitation |
|---|---|---|---|
| aibox | CLI | **Usable project** | State supported hosts and providers. |
| processkit | Process layer | **Working prototype** | State current API/version constraints. |
| ai-market-research | Applied research | **Applied research** | State dataset date and methodology limits. |
| KubeClaw | Prototype | **Idea / implementation starting** | State which flows are implemented. |
