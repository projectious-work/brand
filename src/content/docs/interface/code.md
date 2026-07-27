---
title: Code
linkTitle: Code
weight: 30
description: The always-dark code surface and the syntax theme, with measured contrast for every token.
---

## Code blocks are always dark

**Code blocks stay dark regardless of colour mode.** A code surface that flips
with the theme forces the syntax palette to be designed twice and makes
screenshots inconsistent between users. The surface is `midnight-2` from the
**dark** scale (`#131e2b`) in both light and dark mode.

The block you are reading is rendered by that rule:

```js
// Agent pipeline definition
const pipeline = createPipeline({
  name: "validate-deploy",
  policy: "strict",
  agents: ["auditor", "deployer"],
});
```

## Syntax theme

Because the surface is always dark, every syntax value is read from the **dark**
scale. Contrast is measured against `#131e2b`:

| Token | Step | Hex | Contrast | WCAG AA |
|---|---|---|---|---|
| Identifiers | `midnight-12` | `#c5daf0` | 11.74:1 | Pass |
| Numbers | `orange-11` | `#f09878` | 7.58:1 | Pass |
| Keywords | `midnight-11` | `#8aacc8` | 7.06:1 | Pass |
| Operators | `slate-11` | `#97a8b8` | 6.90:1 | Pass |
| Strings | `orange-light` | `#ea7558` | 5.76:1 | Pass |
| Comments | `code-comment` | `#72889d` | 4.59:1 | Pass |

### Why comments have a dedicated token

Comments are the one syntax role with no scale step available to it.

Code comments are ordinary 13px text, so they need **4.5:1**. The obvious
candidate, `slate-8`, measures only **3.02:1** on this surface — and it is a
*border* step, not a text step ([see step roles]({{< relref "/docs/foundations/color" >}})).
The next steps up are no better: `slate-9` is 3.01:1 and `slate-10` is 3.78:1,
both also non-text roles. The first step that clears AA, `slate-11`, is already
spoken for by operators, and reusing it would erase the distinction between a
comment and an operator.

So `code-comment` (`#72889d`, **4.59:1**) exists as a dedicated syntax token —
the dimmest value that clears AA while staying visibly below operators. It is
not a scale step and should not be treated as one.

{{% alert title="Do not read text colours off steps 8–10" color="warning" %}}
Steps 8, 9, and 10 are border and solid-surface roles across all three scales.
Where a text role needs a value between step 10 and step 11, define a named
token and record its measured contrast — as `code-comment` does.
{{% /alert %}}

## Inline code

Inline code does **not** take the dark block treatment — it follows the
surrounding surface. On light surfaces it sits on `midnight-2` (light scale)
with `orange-11` text; in dark mode both values shift to their dark-scale
counterparts. It uses IBM Plex Mono at 13px with a 3px radius.

## Terminal output

Terminal blocks use the same dark surface. Prompts take the comment colour,
output takes the operator colour, so a transcript stays readable without
becoming a second syntax theme.

```console
$ hugo --gc --minify
Start building sites …
Total in 842 ms
```
