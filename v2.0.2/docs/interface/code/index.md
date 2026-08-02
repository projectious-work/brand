# Code

> The always-dark code surface and the syntax theme, with measured contrast for every token.

---

LLMS index: [llms.txt](/brand/v2.0.2/llms.txt)

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
        <code>#d491b4</code> <span class="pj-cap" style="display:inline;margin:0">terminal magenta (bright)</span><br><span class="pj-cap" style="display:inline;margin:0">Code that runs at a different time from the code around it — including C preprocessor directives and Rust attributes, which Chroma files under Comment.Preproc but which are macros, not commentary.</span>
      </td>
      <td class="pj-table__num">6.82:1</td>
      <td>macro · decorator · event</td>
      <td>entity.name.tag · meta.decorator · support.macro<br><code class="pj-cap">.nd .ni .nl .cp .cpf</code></td>
    </tr>
    <tr>
      <td>
        <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span>
        <strong>Strings</strong><br>
        <code>#ea7558</code> <span class="pj-cap" style="display:inline;margin:0">orange-dark-10</span><br><span class="pj-cap" style="display:inline;margin:0">Interpolation delimiters take the operator colour, so the expression inside stays readable as code.</span>
      </td>
      <td class="pj-table__num">5.76:1</td>
      <td>string</td>
      <td>string.quoted · string.interpolated · string.regexp<br><code class="pj-cap">.s .s1 .s2 .sa .sb .sc .se .sh .si .sr .ss .sx .dl</code></td>
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
        <code>#72889d</code> <span class="pj-cap" style="display:inline;margin:0">code-comment</span><br><span class="pj-cap" style="display:inline;margin:0">Italic. The only role with no scale step of its own. Documentation comments belong here even though Chroma files them under String.Doc — a docstring is documentation, not data.</span>
      </td>
      <td class="pj-table__num">4.59:1</td>
      <td>comment</td>
      <td>comment.line · comment.block · comment.block.documentation<br><code class="pj-cap">.c .ch .cm .c1 .cs .sd</code></td>
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


## Worked examples

Each block below is a real, compilable-shaped fragment chosen to exercise as
many of the ten roles as its language has. The coverage table after them records
which roles each language actually reaches — several cannot reach all ten, and
that is a property of the language, not a gap in the theme.

### C

```c
/* Ring buffer — fixed capacity, no allocation after init. */
#include <stdint.h>
#define RING_CAP 256          // macro: a decorator-role token

typedef enum { RING_OK = 0, RING_FULL = 1 } ring_status_t;

typedef struct {
    uint8_t  data[RING_CAP];
    size_t   head, tail;
    _Bool    wrapped;
} ring_t;

static inline size_t ring_len(const ring_t *r) {
    return (r->head - r->tail) & (RING_CAP - 1);
}

static const char *RING_TAG = "ring\n";   // string literal

ring_status_t ring_push(ring_t *restrict r, uint8_t byte) {
    // Reject when one slot short of capacity, so head never meets tail.
    if (ring_len(r) == RING_CAP - 1) return RING_FULL;
    r->data[r->head++ & (RING_CAP - 1)] = byte;
    return RING_OK;
}
```

### C++

```cpp
// Policy-based cache. Types, templates, and a lambda.
#include <string>
#include <unordered_map>

namespace projectious::cache {

template <typename Key, typename Value>
class LruCache final {
public:
    explicit LruCache(std::size_t capacity) noexcept : capacity_{capacity} {}

    [[nodiscard]] auto get(const Key& key) const -> const Value* {
        const auto it = entries_.find(key);
        return it == entries_.end() ? nullptr : &it->second;
    }

    void put(Key key, Value value) {
        static constexpr auto kTag = "lru";  // string literal
        // Evict before insert so size never exceeds the capacity.
        if (entries_.size() >= capacity_) evict();
        entries_.emplace(std::move(key), std::move(value));
    }

private:
    void evict() noexcept { /* … */ }

    std::size_t capacity_{0};
    std::unordered_map<Key, Value> entries_{};
};

}  // namespace projectious::cache
```

### Python

```python
"""Pipeline stages and their policy gates."""

from __future__ import annotations

import functools
from dataclasses import dataclass, field
from typing import Final, Iterable

# Retry budget is a policy decision, not a tuning knob.
MAX_RETRIES: Final[int] = 3
DEFAULT_POLICY = "strict"


@dataclass(frozen=True, slots=True)
class Stage:
    """A single stage. Immutable once constructed."""

    name: str
    policy: str = DEFAULT_POLICY
    retries: int = 0
    tags: list[str] = field(default_factory=list)

    @property
    def is_strict(self) -> bool:
        return self.policy == "strict"

    @staticmethod
    def parse(raw: str) -> "Stage":
        name, _, policy = raw.partition(":")
        return Stage(name=name.strip(), policy=policy or DEFAULT_POLICY)


@functools.lru_cache(maxsize=None)
def validate(stages: Iterable[Stage]) -> bool:
    for stage in stages:
        if stage.retries > MAX_RETRIES:
            raise ValueError(f"{stage.name!r} exceeds {MAX_RETRIES} retries")
    return True
```

### Rust

```rust
//! Policy evaluation for pipeline stages.

use std::collections::HashMap;
use std::fmt::{self, Display};

const MAX_RETRIES: u32 = 3;

/// How strictly a stage is evaluated.
#[derive(Debug, Clone, Copy, PartialEq, Eq)]
pub enum Policy {
    Strict,
    Advisory,
}

#[derive(Debug, Default)]
pub struct Stage<'a> {
    pub name: &'a str,
    pub policy: Option<Policy>,
    pub retries: u32,
}

impl<'a> Stage<'a> {
    // Strict by default: a gate that is not configured should fail closed.
    pub fn new(name: &'a str) -> Self {
        Self { name, policy: Some(Policy::Strict), retries: 0 }
    }

    pub fn validate(&self) -> Result<(), String> {
        if self.retries > MAX_RETRIES {
            return Err(format!("{} exceeds {MAX_RETRIES} retries", self.name));
        }
        Ok(())
    }
}

impl Display for Policy {
    fn fmt(&self, f: &mut fmt::Formatter<'_>) -> fmt::Result {
        write!(f, "{}", match self { Policy::Strict => "strict", _ => "advisory" })
    }
}
```

### Go

```go
// Package pipeline evaluates stages against their policy gates.
package pipeline

import (
	"errors"
	"fmt"
)

const MaxRetries = 3

// Policy is how strictly a stage is evaluated.
type Policy int

const (
	Strict Policy = iota
	Advisory
)

var ErrTooManyRetries = errors.New("stage exceeds retry budget")

type Stage struct {
	Name    string `json:"name"`
	Policy  Policy `json:"policy"`
	Retries int    `json:"retries,omitempty"`
}

func (s *Stage) Validate() error {
	if s.Retries > MaxRetries {
		return fmt.Errorf("%q: %w", s.Name, ErrTooManyRetries)
	}
	return nil
}

func ValidateAll(stages []Stage) (ok bool, err error) {
	for i := range stages {
		if err = stages[i].Validate(); err != nil {
			return false, err
		}
	}
	return true, nil
}
```

### Java

```java
package work.projectious.pipeline;

import java.util.List;
import java.util.Objects;

/** A single pipeline stage and its policy gate. */
public final class Stage implements Comparable<Stage> {

    public static final int MAX_RETRIES = 3;
    public static final long TIMEOUT_MS = 30_000L;
    public static final int MASK = 0xFF;

    private final String name;
    private final Policy policy;
    private int retries = 0;
    private double budget = 12.60;

    public Stage(String name, Policy policy) {
        this.name = Objects.requireNonNull(name, "name");
        this.policy = policy;
    }

    @Override
    public int compareTo(Stage other) {
        return this.name.compareTo(other.name);
    }

    @Deprecated(since = "2.0", forRemoval = true)
    public boolean isStrict() {
        return policy == Policy.STRICT;
    }

    public void validate(List<String> errors) throws IllegalStateException {
        if (retries > MAX_RETRIES) {
            throw new IllegalStateException("%s exceeds %d retries".formatted(name, MAX_RETRIES));
        }
    }

    public enum Policy { STRICT, ADVISORY }
}
```

### Assembly (NASM)

```nasm
; Sum a byte array. rdi = pointer, rsi = length, returns in rax.
        section .data
msg:    db  "sum: ", 0
LEN     equ 5

        section .text
        global  sum_bytes

sum_bytes:
        xor     rax, rax            ; accumulator
        test    rsi, rsi
        jz      .done               ; empty input

.loop:
        movzx   rdx, byte [rdi]
        add     rax, rdx
        inc     rdi
        dec     rsi
        jnz     .loop

.done:
        ret
```

### LaTeX

```latex
\documentclass[11pt,a4paper]{article}
\usepackage[utf8]{inputenc}
\usepackage{amsmath}

% Pipeline notation used throughout the paper.
\newcommand{\stage}[2]{\ensuremath{#1 \xrightarrow{#2}}}

\title{Policy Gates in Composable Pipelines}
\author{Jane Doe}

\begin{document}
\maketitle

\section{Definitions}
A stage $s_i$ passes when its retry count $r_i \leq 3$:
\begin{equation}
    \forall s_i \in S : r_i \leq R_{\max}, \quad R_{\max} = 3
\end{equation}

\begin{itemize}
    \item \textbf{Strict} — the gate fails closed.
    \item \emph{Advisory} — the gate records and continues.
\end{itemize}

\end{document}
```

### Markdown

````markdown
---
title: Stage reference
weight: 10
---

# Stage reference

A stage passes when its retry count stays at or below **three**. See the
[policy guide](../policy/) for the full rules.

## Fields

| Field | Type | Default |
|---|---|---|
| `name` | string | — |
| `policy` | enum | `strict` |

> Advisory gates record a failure and continue. Strict gates fail closed.

1. Validate the configuration
2. Request promotion
3. Deploy

```sh
pipeline validate --policy strict
```

<!-- Deprecated: `--legacy-gate` is removed in 2.0. -->
````

### JSON

```json
{
  "$schema": "https://projectious.work/schema/pipeline-2.json",
  "name": "validate-deploy",
  "policy": "strict",
  "retries": 3,
  "enabled": true,
  "owner": null,
  "budget": 12.6,
  "stages": [
    { "name": "validate", "gate": "strict", "timeoutSeconds": 120 },
    { "name": "deploy", "gate": "advisory", "timeoutSeconds": 600 }
  ],
  "tags": ["platform", "eu-central"]
}
```

### YAML

```yaml
# Pipeline definition — one policy gate per stage.
apiVersion: projectious.work/v2
kind: Pipeline
metadata:
  name: validate-deploy
  labels: { team: platform, region: eu-central }

defaults: &defaults
  policy: strict
  retries: 3
  enabled: true

spec:
  <<: *defaults
  budget: 12.60
  owner: ~
  stages:
    - name: validate
      timeoutSeconds: 120
    - name: deploy
      policy: advisory
      timeoutSeconds: 600
  owner: "platform@projectious.work"
  schema: 'https://projectious.work/schema/pipeline-2.json'
  notes: |
    Advisory gates record and continue.
    Strict gates fail closed.
```

### TOML

```toml
# Pipeline definition — one policy gate per stage.
schema = "https://projectious.work/schema/pipeline-2.json"

[pipeline]
name    = "validate-deploy"
policy  = "strict"
retries = 3
enabled = true
budget  = 12.60
created = 2026-08-02T09:00:00Z
tags    = ["platform", "eu-central"]

[[pipeline.stage]]
name           = "validate"
gate           = "strict"
timeoutSeconds = 120

[[pipeline.stage]]
name           = "deploy"
gate           = "advisory"
timeoutSeconds = 600
```

### What each language reaches

The table is measured from the rendered page, not asserted: every block above is
parsed and its emitted token classes are mapped back to the roles. `●` means the
role appears in that example.

| Language | Plain | Keyword | Type | Function | Macro | String | Number | Operator | Comment | Reached |
|---|---|---|---|---|---|---|---|---|---|---|
| **C** | ● | ● | ● | ● | ● | ● | ● | ● | ● | 9/9 |
| **C++** | ● | ● | ● | ● | ● | ● | ● | ● | ● | 9/9 |
| **Python** | ● | ● | ● | ● | ● | ● | ● | ● | ● | 9/9 |
| **Rust** | ● | ● | ● | ● | ● | ● | ● | ● | ● | 9/9 |
| **Go** | ● | ● | ● | ● | · | ● | ● | ● | ● | 8/9 |
| **Java** | ● | ● | ● | ● | ● | ● | · | ● | ● | 8/9 |
| **Assembly (NASM)** | ● | ● | ● | ● | ● | ● | ● | ● | ● | 9/9 |
| **LaTeX** | ● | ● | · | · | · | ● | ● | · | ● | 5/9 |
| **Markdown** | · | ● | ● | · | · | ● | ● | ● | ● | 6/9 |
| **JSON** | · | ● | · | · | · | ● | ● | ● | · | 4/9 |
| **YAML** | · | ● | · | · | ● | ● | ● | ● | ● | 6/9 |
| **TOML** | ● | ● | · | · | · | ● | ● | ● | ● | 6/9 |

Nine roles rather than ten, because *invalid* only appears when a grammar
actually fails to parse — a correct example cannot demonstrate it.

Where a language falls short, the reason is the language or the lexer:

- **Go** — Go has no macro or annotation construct; its struct tags are strings.
- **Java** — Chroma's Java lexer emits a plain name for every numeric literal, so numbers cannot be separated. A lexer limitation, not a palette one.
- **LaTeX** — No type, callable or operator concept in the grammar — commands are keywords.
- **Markdown** — Prose, not code: there is nothing to name, call, or annotate.
- **JSON** — By design: no comments, no identifiers, no callables. Keys take the keyword role.
- **YAML** — Anchors and merge keys take the macro role; there are no callables or types.
- **TOML** — Table headers take the plain role; there are no callables or types.

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Two findings worth carrying into any theme</div>


Chroma files C preprocessor directives and Rust attributes under
**Comment.Preproc**, which would colour `#define` and `#[derive(…)]` as
commentary. They are macros — the LSP says so — and are coloured as macros here.

It also files documentation comments under **String.Doc**, which would colour a
Rust `///` line and a Python docstring as data. Both are documentation, and take
the comment role.
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
