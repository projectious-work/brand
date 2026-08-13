---
name: projectious-work-design
description: Use this skill to generate well-branded interfaces and assets for projectious.work, either for production or throwaway prototypes/mocks/etc. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping.
user-invocable: true
---

# projectious.work — design skill

Read `README.md` first for the full brand context, then explore the other available files in this folder.

## What's here

- `README.md` — brand snapshot, sources, content fundamentals, visual foundations, responsive, terminal & syntax, states, accessibility, iconography, logo system, licensing
- `styles.css` — entry point; link this one file
- `colors_and_type.css` — the full token sheet mirroring upstream `brand/tokens/variables.css`: scales in both modes, semantics with on-tint foregrounds, surfaces, type ramp, spacing, radii, elevation, motion, breakpoints, terminal palette, syntax roles
- `assets/logo/` — all logo assets (SVG + PNG, color and monochrome variants, favicons)
- `ui_kits/marketing-site/` — recreation of the marketing/landing surface
- `ui_kits/agent-console/` — recreation of an agent-first ops console
- `slides/` — six 1280×720 slide types (title, section, three-up, quote, code, CTA)
- `preview/` — small per-token preview cards used by the Design System tab

## When invoked

If creating visual artifacts (slides, mocks, throwaway prototypes, marketing pages, etc), copy assets out of this folder and create static HTML files for the user to view. Always link `styles.css` and use the brand mark from `assets/logo/`.

If working on production code, copy the assets and apply the rules in `README.md` to become an expert in designing with this brand.

If the user invokes this skill without further guidance, ask them what they want to build, ask follow-up questions about audience and surface (slide, page, app, doc), and act as an expert designer who outputs HTML artifacts *or* production code, depending on the need.

## Non-negotiables

- Brand name is lowercase: **projectious.work**. Never capitalize.
- Practice areas joined with `·` (middle dot), not `&`: *Cloud · Agile · Agentic AI*.
- Three type families, three roles: Plus Jakarta Sans (display), Source Sans 3 (body), IBM Plex Mono (code) — never mix roles.
- No emoji in any brand surface. No bluish-purple gradients. No rainbow categorization.
- The light app background is `#f8f9fb` (midnight-1), **not white**. White is the raised surface.
- The accent is for moments of decision, not decoration — and **never body text**. Accent text is `orange-11` `#c04424`; solid accent fills with white labels are `--color-accent-solid` `#cc4528`.
- On a semantic tint, use the matching `-fg` value, not the solid.
- Code and tokens are MIT; the brand marks are not.
