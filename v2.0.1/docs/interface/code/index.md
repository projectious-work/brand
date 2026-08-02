# Code

> The always-dark code surface and the syntax theme, with measured contrast for every token.

---

LLMS index: [llms.txt](/brand/v2.0.1/llms.txt)

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

<div class="pj-scroll-x">
<table class="pj-table pj-syntax-scopes">
  <thead>
    <tr>
      <th>Role</th>
      <th class="pj-table__num">On&nbsp;surface</th>
      <th>LSP semantic token</th>
      <th>TextMate scope</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span>
        <strong>Plain and variables</strong><br>
        <code>#c5daf0</code> <span class="pj-cap" style="display:inline;margin:0">midnight-dark-12</span><br><span class="pj-cap" style="display:inline;margin:0">The default. Anything the reader does not need to pick out.</span>
      </td>
      <td class="pj-table__num">11.74:1</td>
      <td>variable · parameter · property · enumMember</td>
      <td>variable · variable.parameter · variable.other<br><code class="pj-cap">.n .nv .nx .py .vc .vg .vi</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #8aacc8" aria-hidden="true"></span>
        <strong>Keywords and modifiers</strong><br>
        <code>#8aacc8</code> <span class="pj-cap" style="display:inline;margin:0">midnight-dark-11</span><br><span class="pj-cap" style="display:inline;margin:0">Also structural keys — a YAML key is the keyword of its line.</span>
      </td>
      <td class="pj-table__num">7.06:1</td>
      <td>keyword · modifier</td>
      <td>keyword.control · storage.modifier · storage.type<br><code class="pj-cap">.k .kc .kd .kn .kp .kr .nt .na</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #74c0c9" aria-hidden="true"></span>
        <strong>Types and classes</strong><br>
        <code>#74c0c9</code> <span class="pj-cap" style="display:inline;margin:0">terminal cyan (bright)</span><br><span class="pj-cap" style="display:inline;margin:0">The brand has no cyan; the terminal palette does, and this is the second place the system needed one.</span>
      </td>
      <td class="pj-table__num">8.11:1</td>
      <td>type · class · struct · interface · enum · typeParameter · namespace</td>
      <td>entity.name.type · entity.name.class · support.class<br><code class="pj-cap">.kt .nc .nn .ne .bp</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #e0a92a" aria-hidden="true"></span>
        <strong>Functions and methods</strong><br>
        <code>#e0a92a</code> <span class="pj-cap" style="display:inline;margin:0">terminal yellow (bright)</span><br><span class="pj-cap" style="display:inline;margin:0">Callables read as callable at a glance — the single most useful distinction beyond the original six.</span>
      </td>
      <td class="pj-table__num">7.91:1</td>
      <td>function · method</td>
      <td>entity.name.function · support.function<br><code class="pj-cap">.nf .fm</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #d491b4" aria-hidden="true"></span>
        <strong>Decorators and macros</strong><br>
        <code>#d491b4</code> <span class="pj-cap" style="display:inline;margin:0">terminal magenta (bright)</span><br><span class="pj-cap" style="display:inline;margin:0">Code that runs at a different time from the code around it.</span>
      </td>
      <td class="pj-table__num">6.82:1</td>
      <td>macro · decorator · event</td>
      <td>entity.name.tag · meta.decorator · support.macro<br><code class="pj-cap">.nd .ni .nl</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span>
        <strong>Strings</strong><br>
        <code>#ea7558</code> <span class="pj-cap" style="display:inline;margin:0">orange-dark-10</span><br><span class="pj-cap" style="display:inline;margin:0">Interpolation delimiters take the operator colour, so the expression inside stays readable as code.</span>
      </td>
      <td class="pj-table__num">5.76:1</td>
      <td>string</td>
      <td>string.quoted · string.interpolated · string.regexp<br><code class="pj-cap">.s .s1 .s2 .sa .sb .sc .sd .se .sh .si .sr .ss .sx .dl</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #f09878" aria-hidden="true"></span>
        <strong>Numbers and constants</strong><br>
        <code>#f09878</code> <span class="pj-cap" style="display:inline;margin:0">orange-dark-11</span><br><span class="pj-cap" style="display:inline;margin:0">Literal values, including true/false/nil.</span>
      </td>
      <td class="pj-table__num">7.58:1</td>
      <td>number · regexp</td>
      <td>constant.numeric · constant.language · constant.character<br><code class="pj-cap">.m .mb .mf .mh .mi .mo .il .no</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #97a8b8" aria-hidden="true"></span>
        <strong>Operators and punctuation</strong><br>
        <code>#97a8b8</code> <span class="pj-cap" style="display:inline;margin:0">slate-dark-11</span><br><span class="pj-cap" style="display:inline;margin:0">Present but recessive — structure you read past, not at.</span>
      </td>
      <td class="pj-table__num">6.90:1</td>
      <td>operator</td>
      <td>keyword.operator · punctuation<br><code class="pj-cap">.o .ow .p</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #72889d" aria-hidden="true"></span>
        <strong>Comments</strong><br>
        <code>#72889d</code> <span class="pj-cap" style="display:inline;margin:0">code-comment</span><br><span class="pj-cap" style="display:inline;margin:0">Italic. The only role with no scale step of its own.</span>
      </td>
      <td class="pj-table__num">4.59:1</td>
      <td>comment</td>
      <td>comment.line · comment.block · comment.block.documentation<br><code class="pj-cap">.c .ch .cm .cp .c1 .cs</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #f08b80" aria-hidden="true"></span>
        <strong>Invalid and deprecated</strong><br>
        <code>#f08b80</code> <span class="pj-cap" style="display:inline;margin:0">danger-dark</span><br><span class="pj-cap" style="display:inline;margin:0">Deprecated is struck through as well as coloured — the state does not depend on hue.</span>
      </td>
      <td class="pj-table__num">6.98:1</td>
      <td>(modifier) deprecated</td>
      <td>invalid.illegal · invalid.deprecated<br><code class="pj-cap">.err</code></td>
    </tr>
  </tbody>
</table>
</div>

### Modifiers are not colours

LSP modifiers combine with any token type: ten modifiers against ten roles is a
hundred states. Hue cannot carry that, so it does not try.

<div class="pj-scroll-x">
<table class="pj-table pj-syntax-scopes">
  <thead>
    <tr><th>LSP modifier</th><th>Treatment</th><th>Why</th></tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>declaration · definition</strong></td>
      <td>Weight 500</td>
      <td>Where a name is introduced, distinguished from where it is used.</td>
    </tr>
    <tr>
      <td><strong>deprecated</strong></td>
      <td>Line-through</td>
      <td>A state, not a category — it must survive greyscale.</td>
    </tr>
    <tr>
      <td><strong>documentation</strong></td>
      <td>Italic, comment colour</td>
      <td>Doc comments are comments; they are not a separate hue.</td>
    </tr>
    <tr>
      <td><strong>readonly · static · abstract · async · defaultLibrary</strong></td>
      <td>No distinct colour</td>
      <td>Ten modifiers times ten roles is a hundred combinations. Colour cannot carry that, and a theme that tries becomes unreadable.</td>
    </tr>
  </tbody>
</table>
</div>

<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">Deprecated must survive greyscale</div>


`deprecated` is a state, not a category. It is struck through as well as
recoloured, so a reader who cannot separate the red from the plain text still
sees that the symbol should not be used.
</div>


### Why comments have a dedicated token

Comments are the one syntax role with no scale step available to it. Steps 8–10
are border and solid-surface roles and are not held to text thresholds; step 11
is already spoken for by operators.

So `code-comment` (`#72889d`, **4.59:1**) exists as a dedicated syntax token —
the dimmest value that clears AA while staying visibly below operators. It is
not a scale step and should not be treated as one.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Group scopes into roles, and let a language&rsquo;s grammar map onto them. Keep the
role count under ten, and check every value against the code surface.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Give each LSP token type its own hue, or use the accent as a syntax colour — it
marks the primary action, and a code block is not one.</p>
</div>
</div>


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
