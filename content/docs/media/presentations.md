---
title: Presentations
linkTitle: Presentations
weight: 40
description: Slide templates, animation, and the core deck structure.
---

## Core slides

Six slide types cover most decks:

| Slide | Purpose |
|---|---|
| Title | Deck opening — display type on midnight |
| Section statement | A single sentence marking a new section |
| Three-up | Three parallel points |
| Quote | A single quotation, attributed |
| Code showcase | Code on the always-dark surface |
| CTA closer | The one thing you want the audience to do |

## Rules

- 16:10 aspect ratio.
- Title slides and section statements use midnight surfaces; content slides use
  white or `midnight-1`.
- `projectious.work` is visible on the title and closing slides.
- One idea per slide. If a slide needs a paragraph, it needs to be two slides.

## Animation

- Slide transitions: cut or 200ms fade.
- Build animations use `--ease-out` at `--duration-standard`.
- **Never animate text character-by-character.**
- Motion is for revealing structure, not for holding attention.

## Templates

Document templates for LaTeX and Typst are in
[`brand/templates/`](https://github.com/projectious-work/brand/tree/main/brand/templates).
Both embed brand identity and fall under the brand-asset licence terms — see
[Licensing]({{< relref "/docs/governance/licensing" >}}).
