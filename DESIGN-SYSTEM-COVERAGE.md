# Design-system source coverage

This matrix is the review ledger for the revised designer handoff in
`input/projectious.work Design System`. The authoritative handoff is read from
the main workspace while the implementation is developed in an isolated
worktree; the source files are not modified.

`Live` means the documentation contains a semantic, theme-idiomatic specimen,
not an embedded copy of the source preview. `Described` means the regulation is
covered in prose or a table. `Audit` means the source exists to verify the
result rather than to become a public documentation page.

## Regulations and implementation sources

| Source | Documentation destination | Evidence | Status |
|---|---|---|---|
| `README.md` — brand snapshot, positioning, mission, vision, convictions | Documentation landing; Getting started; Features | Brand-in-one-view and writing guidance | Described |
| `README.md` — content fundamentals | Documentation landing | Voice, casing, stance, punctuation, emoji, numerals, stock lines | Described |
| `README.md` — three appearances | Foundations / Colour; Interface / Appearances | Light, navy-default dark, and opt-in deep selectors and rationale | Described |
| `README.md` — typography | Foundations / Typography | Families, required cuts, scalable type ramp | Live |
| `README.md` — spacing, layout, imagery, borders, elevation, motion, transparency, responsive | Foundations pages | Token tables, rules, and specimens | Live |
| `README.md` — terminal and syntax | Interface / Code; Implementations / Terminal | Ten roles, weight/slant channel, five languages, ANSI and chrome | Live |
| `README.md` — states and accessibility | Interface / States; Interface / Accessibility | Status second channel, opt-in preferences, focus, order, utilities | Live |
| `README.md` — iconography | Interface / Icons | Tabler outline set, 24px grid, 1.5px stroke, approved sizes | Live |
| `README.md` — logo system | Logo section | Marks, lockups, clear space, minimum sizes, misuse | Live |
| `README.md` — preview convention and audit | Maintenance | Three-appearance review requirement and contrast floor | Described |
| `README.md` — offline profile | Developer guide; Downloads; SBOM | Self-hosted fonts/icons and licence obligations | Described |
| `README.md` — licensing | Legal; Governance | MIT code/tokens, font licences, Tabler MIT, reserved marks | Described |
| `colors_and_type.css` | Tokens; Foundations; Downloads | CSS, JSON, and Tailwind outputs generated from canonical data | In progress |
| `styles.css` | Interface and Foundation pages | Behaviour and component regulations translated into specimens | In progress |
| `github.md` | Maintenance | Source/provenance and sync expectations | Described |
| `UPSTREAM-REPLY.md`, `upstream-sync-note.md`, `uploads/UPSTREAM-BRIEFING.md` | Maintenance; Provenance | Derivative decisions and upstream reconciliation | Described |
| `SKILL.md` | Getting started; Developer guide | Non-negotiables and implementation workflow | Described |

## Preview cards

| Preview | Destination | Translation | Status |
|---|---|---|---|
| `accessibility.html` | Interface / Accessibility | Attribute table and interactive focus/control examples | Live |
| `brand-logo-primary.html` | Logo / Overview | Primary two-line lockup on semantic surfaces | Live |
| `brand-logo-lockups.html` | Logo / Lockups | One-line, dot-replace, and stacked lockups | Live |
| `brand-logo-marks.html` | Logo / Usage | Colour, dark, mono-black, mono-grey, and mono-white marks | Live |
| `brand-taglines.html` | Documentation landing | Stock lines in priority order and voice context | Described |
| `colors-core.html` | Foundations / Colour | Three identity constants with allowed roles | Live |
| `colors-scales.html` | Foundations / Colour | Twelve steps across light, navy, and deep appearances | In progress |
| `colors-semantic.html` | Foundations / Colour; Interface / States | Solid, tint, on-tint, label, and glyph pairing | Live |
| `colors-syntax-0-roles.html` | Interface / Code | Ten-role legend with weight and slant | Live |
| `colors-syntax-1-python.html` | Interface / Code | Light and dark Python specimen | Live |
| `colors-syntax-2-rust.html` | Interface / Code | Light and dark Rust specimen | Live |
| `colors-syntax-3-yaml.html` | Interface / Code | Light and dark YAML specimen | Live |
| `colors-syntax-4-toml.html` | Interface / Code | Light and dark TOML specimen | Live |
| `colors-syntax-5-latex.html` | Interface / Code | Light and dark LaTeX specimen | Live |
| `colors-terminal-0-palette.html` | Implementations / Terminal | ANSI slots and chrome on a real terminal surface | Live |
| `colors-terminal-1-status.html` | Implementations / Terminal; Interface / States | Terminal output plus appearance-aware status rows | Live |
| `components-alerts.html` | Interface / Components | Four semantic callouts with label/icon channel | Live |
| `components-buttons.html` | Interface / Components | Primary, accent, outline, ghost, danger, and sizes | Live |
| `components-cards.html` | Interface / Components | Flat, raised, and action-card recipes | Live |
| `components-inputs.html` | Interface / Forms | Default, focus, error, and disabled states | Live |
| `components-tags-badges.html` | Interface / Components | Neutral/selected tags and semantic badges | Live |
| `elevation.html` | Foundations / Space, shape, and motion | Appearance-aware four-level elevation | In progress |
| `iconography.html` | Interface / Icons | Real Tabler glyphs at approved sizes and states | Live |
| `layout-responsive.html` | Foundations / Responsive | Breakpoints, collapse behaviour, and touch floor | Live |
| `radii.html` | Foundations / Space, shape, and motion | Five-radius ladder | Live |
| `spacing-scale.html` | Foundations / Space, shape, and motion | Nine-step 4px scale | Live |
| `type-body.html` | Foundations / Typography | Source Sans 3 weights and body sample | Live |
| `type-code.html` | Foundations / Typography; Interface / Code | IBM Plex Mono cuts and syntax specimen | Live |
| `type-display.html` | Foundations / Typography | Plus Jakarta Sans weights and display sample | Live |
| `type-families.html` | Foundations / Typography | Three roles with no cross-role substitution | Live |
| `type-scale.html` | Foundations / Typography | Full scalable eleven-role type ramp | Live |
| `_audit.html` | Maintenance and automated checks | Every public specimen checked in all three appearances | In progress |

## Larger artefacts

| Source | Destination | Translation | Status |
|---|---|---|---|
| Slides `01`–`06` | Media / Presentations | Six live slide recipes with hierarchy and safe areas | Live |
| Agent-console UI kit | Interface / Patterns | Shell, pipeline list, run detail, logs, and status bar | Live |
| Marketing-site UI kit | Interface / Patterns | Header, hero, pillars, code, convictions, CTA, and footer | In progress |
| Logo SVG/PNG assets | Logo / Files; Downloads | Approved originals and format/use guidance | Live |
| `_ds_manifest.json`, `_ds_bundle.js`, `_adherence.oxlintrc.json` | Maintenance | Machine inventory and source audit inputs | Audit |
| `scratch/` images and `.thumbnail` | No public page | Designer review/thumbnail evidence only | Audit |

## Completion rule

The rewrite is complete only when no row remains `In progress`, every public
page has been checked for superseded guidance, and the release build proves the
header order, routes, internal links, contrast, keyboard-visible focus, and all
enabled output formats.
