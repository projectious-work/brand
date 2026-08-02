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
scale. Contrast is measured against `#131e2b`.

### Ten roles, not twenty-two tokens

Editors do not describe code with six token types. The
[Language Server Protocol](https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#textDocument_semanticTokens)
defines **22 semantic token types** and **10 modifiers**, and
[TextMate grammars](https://macromates.com/manual/en/language_grammars) — the
model behind VS Code, Sublime Text, and most highlighters — define **11 root
scopes** with a deep sub-scope tree under each.

A theme should not answer that with twenty-two colours. Past roughly nine, hue
stops being a signal: everything is coloured, so nothing is marked. The two
scope vocabularies are therefore grouped into ten **roles**, and the modifiers
are carried by weight and slant rather than by more hue.

Every role is an existing brand or terminal value. The expansion introduced no
new colour — the terminal palette had already added the two hues, cyan and
magenta, that a syntax theme needs and the three interface scales do not have.

{{< syntax-scopes >}}

### Modifiers are not colours

LSP modifiers combine with any token type: ten modifiers against ten roles is a
hundred states. Hue cannot carry that, so it does not try.

{{< syntax-scopes part="modifiers" >}}

{{% alert title="Deprecated must survive greyscale" color="warning" %}}
`deprecated` is a state, not a category. It is struck through as well as
recoloured, so a reader who cannot separate the red from the plain text still
sees that the symbol should not be used.
{{% /alert %}}

### Why comments have a dedicated token

Comments are the one syntax role with no scale step available to it. Steps 8–10
are border and solid-surface roles and are not held to text thresholds; step 11
is already spoken for by operators.

So `code-comment` (`#72889d`, **4.59:1**) exists as a dedicated syntax token —
the dimmest value that clears AA while staying visibly below operators. It is
not a scale step and should not be treated as one.

{{< rules >}}
{{% do %}}
Group scopes into roles, and let a language's grammar map onto them. Keep the
role count under ten, and check every value against the code surface.
{{% /do %}}
{{% dont %}}
Give each LSP token type its own hue, or use the accent as a syntax colour — it
marks the primary action, and a code block is not one.
{{% /dont %}}
{{< /rules >}}

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
