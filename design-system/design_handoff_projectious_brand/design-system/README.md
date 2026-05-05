# projectious.work — Design System

A complete design system for **projectious.work**, a virtual IT consulting company built around three practice areas — **Cloud · Agile · Agentic AI** — and one radical premise: in the era of agentic AI, the way companies work is about to be fundamentally redesigned.

This system contains the brand foundations (logo, color, type), low-level tokens (spacing, radius, elevation, motion), high-level UI components, slide templates, and SKILL.md so the system works equally well from this project or as a portable Agent Skill in Claude Code.

---

## Brand snapshot

- **Name:** projectious.work
- **Tagline:** *Redesigning work*
- **Positioning:** Cloud · Agile · Agentic AI — agent-first consulting
- **Mission:** Augment people's strengths to improve life for everyone.
- **Vision:** Humanistic ideals determine actions in an AI-completed world.
- **Convictions:**
  - *Do more with more* — augment people's strengths so the same or more people produce more, higher quality, for broader markets.
  - *Specialized beats generic now* — agents collapse the cost of bespoke software. Lot-of-one systems — built for one team's exact workflow — are now economically rational. Underserved companies stop bending themselves to fit generic SaaS or Excel.
  - *Provider independence* — agnostic, self-hosted where needed. No single AI vendor becomes a single point of failure.
  - *We run what we recommend* — the company eats its own dogfood.
- **Voice keywords:** Modern · Composable · Authentic · No-nonsense · Agent-first · Humanistic
- **Audience:** Technical leaders (CTOs, VPs Eng, platform leads) at European/international organizations adopting AI-native workflows.

---

## Sources used to build this system

This design system was synthesized from the **`projectious-work/brand`** GitHub repository (default branch: `main`).

| Source | Path | Used for |
|---|---|---|
| Brand README | `brand/README.md` | High-level brand description, font and color summary, license info |
| Tokens | `brand/tokens/variables.css`, `tokens.json`, `tailwind.config.js` | Color tokens, spacing, radii, elevation, motion |
| Master brand system | `brand/html/projectious-brand-system-final.html` | Theme narrative, font roles, color scales, typography scale, spacing/grid, component tokens, logo system |
| Component kitchen sink | `brand/html/projectious-kitchen-sink.html` | Full component library in light + dark modes |
| Slide deck templates | `brand/html/projectious-slides.html` | 10 slide types and rules |
| Digital experience | `brand/html/projectious-digital-experience.html` | Documentation, syntax theme, dark-mode strategy, Lucide icon rules, form patterns |
| Logo assets | `brand/logo/svg/`, `brand/logo/png-1x/`, `brand/logo/favicon/` | Imported into `assets/logo/` |
| Email signature | `brand/email/signature.html` | Email-layout reference |

The reader is **not assumed** to have access to these sources — everything needed lives inside this project. Paths above are recorded for traceability if a future reader wants to compare against the upstream.

---

## Index — what's in this folder

| File / folder | What it is |
|---|---|
| `README.md` | This file — start here |
| `SKILL.md` | Agent Skill manifest (works in Claude Code too) |
| `colors_and_type.css` | Drop-in CSS: brand colors, 12-step scales, semantic tokens, type roles, base element styles |
| `assets/logo/` | All logo assets — SVG (scalable), PNG (1×), monochrome variants, favicons |
| `preview/` | Small HTML cards used by the Design System tab in this project |
| `ui_kits/marketing-site/` | UI kit recreating the projectious.work marketing/landing experience |
| `ui_kits/agent-console/` | UI kit recreating an agent-first ops console (dashboards, pipelines, terminals) |
| `slides/` | Slide templates rendered as 1280×720 HTML files |

---

## Content fundamentals — how copy is written

projectious.work writes like an honest principal engineer who has stopped trying to impress. The voice is **direct, technical, humanistic, restrained**, and never marketing-speak.

**Tone**
- *No-nonsense.* Plain words first, jargon only when it's the most precise word.
- *Confident, not loud.* Conviction comes from the claim, not from punctuation or capitalization.
- *Humanistic.* The point of better systems is better life — say it.
- *Agent-first but neutral.* Don't gush about AI; treat agents as a normal part of how good work happens now.

**Casing**
- Sentence case for everything except proper nouns: *"Redesigning work"*, *"Why agent-first?"*, never *"Why Agent-First?"*
- The brand name is lowercase: **projectious.work** — never *Projectious* or *PROJECTIOUS*. The dot is part of the name.
- Practice areas are capitalized as proper nouns: **Cloud**, **Agile**, **Agentic AI**. Joined with a `·` middle dot, never an `&`: *"Cloud · Agile · Agentic AI"*.

**Pronouns and stance**
- *We* (the company) and *you* (the reader). Never *I*. Never *the team*.
- Address the reader's situation, not the reader's feelings: *"You ship the same software with continuous audit"*, not *"You'll feel confident"*.
- State opinions plainly. The brand has a thesis — write like it.

**Punctuation and rhythm**
- Em dashes for asides — used sparingly, paired with spaces in body, tight in headlines.
- The middle dot `·` separates practice areas and inline metadata: *"v2.1.0 · Released today"*.
- Sentences are short to medium. Avoid commas-stacked sentences.

**Emoji**
- Not used in product UI, marketing copy, slides, or technical writing.
- Acceptable in informal Slack/standup contexts only — not part of the brand surface.

**Numerals**
- Numbers as digits in technical contexts (*"3 stages"*, *"40 px height"*).
- Spell out one through nine in prose unless paired with a unit.

**Examples — voice in action**

> ✅ **Redesigning work**
> *Cloud · Agile · Agentic AI. Agent-first consulting. We run what we recommend.*

> ✅ **Why agent-first?**
> *Do more with more — same or more people, broader output. Quality is non-negotiable — agents audit continuously. Provider independent — no vendor lock-in.*

> ✅ **Specialized beats generic now.**

> ❌ Avoid: *"Unleash the power of AI to revolutionize your team's velocity 🚀"*

**Stock taglines (drop-in, in priority order)**
- Cloud · Agile · Agentic AI *(primary)*
- Redesigning work *(alternative)*
- Agent-first consulting, built on what we teach *(long-form)*

---

## Visual foundations

The visual system is **disciplined, dual-mode, and quietly opinionated**. It looks like infrastructure — readable, repairable, no decorative noise.

### Color
- **Three-color core.** Midnight (`#1d3352`) for authority and depth. Tempered orange (`#E05232`) for moments of decision. Slate (`#546a82`) for connective tissue.
- **12-step scales** (Radix convention) for midnight, orange, and slate, in both light and dark modes — see `colors_and_type.css`. Step 9 is the saturated brand color and stays constant across modes.
- **Backgrounds** are **warm paper** (`#f5f4f2`) in light mode, never pure white as a page bg. Surfaces (`#fff`) sit on top.
- **No bluish-purple gradients.** No emoji-decorated cards. No rainbow categorization. Color is meaning, not garnish.

### Typography
- **Three families, three roles.** Plus Jakarta Sans = conviction (display, headings, buttons). Source Sans 3 = clarity (body, UI, descriptions). IBM Plex Mono = precision (code, data, terminal output, version strings).
- **Never mix roles.** The rule of thumb: *Is this guiding attention (Jakarta), being read (Source Sans), or showing system output (Plex Mono)?*
- **Tight letter-spacing on display** (`-0.5px`), normal on body, mild positive tracking only on overline labels.
- **Maximum two type sizes per slide.**

### Spacing & layout
- **4 px base** scale: 4, 8, 12, 16, 24, 32, 48, 64, 96.
- **12-column grid**, 16 px gutter, max content width **1100 px**.
- Slides are designed at **1280×720** (16:9).
- Padding and gap are explicit — never lean on margin collapsing or whitespace text nodes for layout.

### Backgrounds & imagery
- **No full-bleed photography** as default. No hand-drawn illustrations. No textures. No grain.
- **Warm paper** for the page, **white** for surfaces, **midnight-dark** for hero/dark panels.
- **Diagrams over photos.** When imagery is needed, prefer abstract system diagrams in the palette. Photography (when used) is candid, desaturated, warm-graded — real workspaces, never stock.
- **Accent decoration** is rare: a top-right circular orange "glow" at 6% opacity on dark hero panels is the one approved decorative motif.

### Borders & corners
- **Hairline borders** (`#e5e3de` light, `rgba(255,255,255,0.08)` dark). 1.5 px on inputs, 1 px on cards.
- **Radii ladder:** sm 3 px (tags), md 4 px (buttons/inputs), lg 6 px (cards), xl 9 px (panels), full (pills).
- Cards: 1 px hairline border + radius-lg. Shadow only on elevation level 2+.

### Elevation (shadow system)
- **Level 0** — flat (default). Most surfaces.
- **Level 1** — `0 1px 3px rgba(0,0,0,0.06)` — cards under hover.
- **Level 2** — `0 4px 12px rgba(0,0,0,0.08)` — popovers, dropdowns.
- **Level 3** — `0 8px 24px rgba(0,0,0,0.12)` — modals.
- No inner shadows. No glow shadows. No colored shadows.

### Hover and press
- **Hover:** opacity drops to `0.88` for primary surfaces; border color shifts to `--midnight-7` for cards. **Never** lighten or darken brand colors on hover — the structure provides the hover affordance.
- **Press (:active):** no scale-shrink; the button color simply locks at its hover state.
- **Focus:** 2 px focus ring at midnight-9 with 15% alpha — `box-shadow: 0 0 0 2px rgba(29,51,82,0.15)`.

### Animation & motion
- **Four durations:** 100 ms (micro/hover), 200 ms (standard/toggle), 300 ms (expand/accordion), 400 ms (page/modal).
- **Two eases:** `ease-out` for things appearing, `ease-in` for things leaving.
- **No bounces, no springs, no overshoots.** No parallax. No autoplay video.
- **Slide transitions:** cut, or 200 ms fade. Staggered fade-up (40–80 ms increments) for sequential elements.

### Transparency & blur
- Used sparingly. Backdrop-blur only on dark-on-dark overlays (modal scrim) and on the dark-panel inner cards (`background: rgba(255,255,255,0.04)`). No frosted glass on light surfaces.
- Tag/badge backgrounds use solid pale tints, not alpha overlays.

### Layout rules
- **Header on light:** sentence-case nav, lowercase brand mark, single accent CTA on the right.
- **Footer:** brand mark left, page metadata right (small grey caption-12).
- **No fixed sticky decoration.** Headers can stick; nothing else.

### Card recipe
```
background: var(--surface);
border: 1px solid var(--border);
border-radius: var(--radius-lg);   /* 6px */
padding: var(--space-4) var(--space-5);   /* 16px 24px */
/* shadow optional, level 1 only on raised cards */
```

### Image vibe (when used)
- **Warm but desaturated**, never cool/blue cast. Slight grain ok at 4–6%. No high-contrast B&W. No tropical saturation.

---

## Iconography

- **Library:** [Lucide](https://lucide.dev/) (MIT). Stroke-only, never filled.
- **Stroke width:** 1.5 px. **Caps & joins:** round.
- **Sizes:** 16 px (inline with text), 20 px (button glyphs), 24 px (nav, large affordances).
- **Color:** default `slate-11` (`#5c6f82`), active/selected `midnight-9` (`#1d3352`), danger `--danger`. Never colored unless meaningful (e.g. status).
- **Custom icons** (when Lucide doesn't have it) must match: 24 px grid, 1.5 px stroke, round caps, single color, no fills.
- **CDN usage:** `<script src="https://unpkg.com/lucide@latest"></script>` or per-icon `<img src="https://unpkg.com/lucide-static@latest/icons/check.svg">`. The icon set is **not** bundled into this project — pull from CDN at use time. This is documented as a deliberate substitution: the codebase recommends Lucide but doesn't ship a frozen copy.
- **Emoji:** not used in any brand surface (UI, slides, marketing, docs). See content fundamentals.
- **Unicode glyphs as iconography:** the middle dot `·` (U+00B7) is approved for inline metadata separators and brand wordmarks. The check `✓`, dot `●`, and circle `○` are used inside terminal/log output where copy/paste compatibility matters. Otherwise prefer Lucide.
- **The brand mark** (the stencil "peony bud" icon — see `assets/logo/icon-light.svg`) is **not** an icon — never use it as a generic glyph. It only appears in lockups.

---

## Logo system

- **Primary lockup (two-line):** mark + "projectious" stacked over "·work" — for headers, slides, hero cards.
- **Compact (one-line):** mark + "projectious·work" inline — for navbars, footers, signatures.
- **Dot-replace (inline):** "projectious[mark]work" — for documents, CLI prompts. The mark replaces the dot.
- **Stacked (portrait):** mark above wordmark — for avatars, app icons.
- **Mark variants** (`assets/logo/`): `icon-light.svg` (color, on light bg), `icon-dark.svg` (color, on dark bg), `icon-mono-black.svg`, `icon-mono-white.svg`, `icon-mono-gray.svg`.
- **Minimum size:** 16 px for the mark; 24 px for any lockup with wordmark.
- **Clear space:** half the mark's height on all sides.
- **Product-line extension:** swap `.work` for `.guard`, `.flow`, etc — same construction, accent stays orange-9.

---

## Files & fonts notes

- **Fonts** (Plus Jakarta Sans, Source Sans 3, IBM Plex Mono) are **all SIL OFL 1.1** and loaded from Google Fonts via `@import` in `colors_and_type.css`. No `.ttf`/`.woff2` files are bundled. **Substitution flag:** none — these are the brand-specified fonts and Google Fonts is the canonical delivery channel per the source brand.
- **Lucide icons** are pulled from CDN at use time, not bundled. **Substitution flag:** none — the source brand explicitly recommends Lucide.

---

## Quick start (in this project)

```html
<link rel="stylesheet" href="colors_and_type.css">
<link rel="icon" href="assets/logo/favicon-32.png">
```

```html
<h1>Redesigning work</h1>
<p class="caption">Cloud · Agile · Agentic AI</p>
<button style="background:var(--color-primary);color:#fff;border:0;padding:10px 22px;border-radius:var(--radius-md);font-family:var(--font-heading);font-weight:500;">Get started</button>
```
