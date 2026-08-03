# Changelog

All notable changes to this project are documented here.

The format follows [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

Because this repository is a **design system**, "breaking" has a specific
meaning: a change is breaking if a consumer who followed the documentation would
have to change their implementation. Renaming or removing a token, changing a
token's value in a way that alters appearance, or withdrawing a component
pattern are all breaking. Adding a token, adding a component, or correcting
documentation are not.

<!-- Add new entries under the [Unreleased] heading directly. Do not insert a
     second [Unreleased] section above a released one: scripts/release.sh
     promotes the FIRST such heading it finds, so a later one is left orphaned
     and the release ships empty notes. -->

## [Unreleased]

### Highlights

- **Token exports are complete and generated.** `variables.css`, `tokens.json`
  and `tailwind.config.js` now carry the whole system — 273 custom properties,
  up from 62 — and are generated from one source with a check that fails on
  drift. Neither CSS nor JSON previously carried a single 12-step scale.
- **Seven worked examples ship with the system** — a dashboard, a mobile flow,
  a slide deck, a CV, a service one-pager, a diagram gallery, and a sendable
  newsletter. Each is an openable document, not a screenshot.
- **Four documentation gaps are closed**: responsive, composed patterns, states
  (empty, loading, error), and accessibility.
- **The two theme examples hold no brand values of their own** and override no
  theme template. The Docsy example is now styled by the documentation site's
  own stylesheet and measures identical to it.
- Colour gains **data-visualisation** guidance, Terminal gains a **Ghostty**
  configuration, and the business card gains print-ready **Lab and CMYK**
  values and a white-stock variant.
- Several accessibility fixes, including an email signature that broke in
  dark-mode mail clients and three foreground values below AA.

### Added

- **`foundations/responsive`** — the four breakpoints (640 / 768 / 1024 /
  1280px, as already declared in `brand/tokens/variables.css`), how the
  12-column grid collapses to 4 and 8, the 44px touch-target floor and how it
  reconciles with the 32/40/48px control heights, and the mobile navigation
  rule: tab bar for application surfaces, drawer for documentation.
- **`interface/patterns`** — the page shell, the four-card KPI row, and the
  1.5fr/1fr primary/secondary split, plus the comfortable and compact
  densities. Composition only; no new components.
- **`interface/states`** — the three empty states and why only one of them gets
  an accent button, skeleton-versus-spinner selection with timing thresholds,
  404 and 500 pages, and region-scoped inline failures.
- **`interface/accessibility`** — reading and focus order, skip links,
  landmarks, focus movement on open/close/delete, and the ARIA the tab, table,
  navigation, and live-region patterns require.
- **`portfolio/documents`** — the one-page document pattern (CV, proposal,
  memo) and the flowing-versus-paginated decision that precedes it.
- **`collateral/flier`** — the service one-pager: four bands, three benefits,
  a dated process, one call to action.
- **`collateral/email`** — a whole sendable message: structure, the preheader,
  the bulletproof VML button, and the footer's three obligations.
- **`brand/examples/`** — the example sources, mounted to
  `static/downloads/examples`, with an index page and a README. React is
  vendored, Lucide is vendored at a pinned 0.544.0, and `ios-frame.jsx` is
  precompiled, so no example depends on a third-party host at page load.
- **`scripts/build-examples.sh`** — regenerates the precompiled
  `lib/ios-frame.js` from its `.jsx` source.
- **Data-visualisation guidance** in `foundations/color` — a three-series
  categorical palette from the step-9 solids, sequential scales from one
  family's steps 3–8, diverging scales, and chart furniture.
- **Lab and CMYK values** in `collateral/business-card`, with the CMYK column
  marked as an unmanaged starting point rather than a press specification.
- **Ghostty terminal configuration** on the Terminal theming page, using the
  named-theme split — palette in `~/.config/ghostty/themes/projectious`, the
  rest in `config` — and the four defaults that otherwise move rendered colour
  off the measured palette.
- **A white-stock business card**, alongside the digital vCard. The accent moves
  from the corner wash to a 3px rule on the leading edge, because a 12% wash
  prints as a fault rather than as a light source.
- **`scripts/build-tokens.mjs` and `scripts/check-tokens.sh`.** The downloads are
  generated from `src/data/brand.yaml`; the check runs first in `verify.sh` and
  fails on drift in either direction. `brand.yaml` gains `semantic`, `surfaces`
  and `breakpoints` sections.
- **A dashboard mockup page in both theme examples**, mounted from
  `examples/shared/dashboard.md` and rendered by a shared `pj-dashboard`
  shortcode, so the composed pattern is one source in both.
- **`pj-action`, `pj-form` and `pj-dashboard` shortcodes** in the shared
  shortcode directory, so the review fixtures carry no raw HTML and render the
  same controls under both themes.

### Changed

- **The theme examples hold no brand values of their own.** Docsy derives its
  semantic layer from the mounted `_scales.scss`; Hextra derives its from the
  generated `brand/tokens/variables.css`, mounted as `css/brand-tokens.css`.
  Roughly 120 copied hex literals are gone, including four semantic tints in
  each that were values the brand does not define, and both navbars now match
  the documentation site's 88% alpha rather than 85%.
- **The Docsy example no longer has a stylesheet of its own.** Docsy's two
  documented extension points are `assets/scss/_variables_project.scss` and
  `_styles_project.scss`; the example mounts the documentation site's copies of
  both instead of maintaining a parallel adapter. It is now styled by the same
  two files as the site it demonstrates, and measures identical to it on every
  probed property — surfaces, navbar, headings, body, sidebar, table of
  contents, tables, and the code surface.
- **Neither example overrides a theme template.** The mark is enabled through
  `ui.navbar_logo` (Docsy) and `params.navbar.logo` (Hextra), both of which the
  themes already support. The 60-line script that moved Hextra's theme toggle
  into the navbar is deleted — it left an empty white sticky strip behind it on
  every page — and the toggle sits where Hextra puts it.
- **The token downloads now carry the whole system** — 241 custom properties,
  up from 62. Added: all three 12-step scales **in both modes**, the semantic
  colours with their tints and on-tint foregrounds, the surface and text
  aliases, the type scale, and the breakpoints. `tailwind.config.js` gains the
  dark scales and the terminal palette; `tokens.json` gains everything except
  the named aliases it already had.
- **The presentation slide-type tables are merged.** "Core six" and "full
  twelve" duplicated six rows; there is now one table with `Core` and `Example`
  columns. Presentations also documents Google Slides, PowerPoint, and Keynote
  as first-class export targets.
- **The icon specimens are real Lucide geometry.** The shield on
  `interface/icons` was a hand-drawn approximation; it is now the verbatim
  `lucide/shield` path, and the page says to take the file and pin the version
  rather than trace it.
- **`portfolio/diagrams` names the three diagram types** — sequence,
  architecture, and org chart — with the drawing rules shared by all three.
- `scripts/check-links.mjs` no longer resolves link targets containing `{{`;
  those are template bindings in the example documents, not paths.

### Fixed

- **Accessibility corrections in the example token sheet**
  (`brand/examples/lib/colors_and_type.css`), which had drifted from
  `brand/tokens/variables.css`:
  - The radius ladder read 3/4/6/9px against the system's 3/6/9/13px.
  - Muted text was `#9a9a9a` — **2.81:1** on white. Now slate-11, 5.18:1.
  - Body text was `#1a1a1a` rather than midnight-12 `#142438`.
  - Status hues were `#2d6a4f` / `#a32d2d` rather than `#2f7d65` / `#a8261c`,
    and the solid values were used as foregrounds on their own tints, where
    they do not clear AA.
  - Dark mode inherited the light tag foregrounds: `#1d3352` on the dark tag
    tint measured **1.15:1**. Dark mode now re-picks the semantic and tag
    values rather than reusing the light ones.
  - Links took the identity accent (3.87:1); they now take midnight-11.
- **Solid accent fills carrying white text** in the examples and the newsletter
  used `#E05232` (3.87:1) instead of `--color-accent-solid` `#cc4528` (4.72:1).
- **The email signature declared white on the `<td>` only.** Dark-mode mail
  clients repaint element by element, so the cell stayed white while the table
  around it was repainted — a white island with a dark halo, or light-inverted
  text drawn onto the kept-white cell. White is now declared on table, row and
  cell, each as both `bgcolor` and `background-color`.
- **The navbar specimen was two designs out of date.** It showed a permanently
  midnight bar with a 3px accent rule; the site's own header has been a
  mode-following bar with a 1px border for some time. Component colours are now
  published as custom properties, so a host theme that outranks the component
  class restates the property rather than copying a hex — which is what let the
  Hextra example keep painting the specimen for a midnight bar.
- **A dead `.pj-lockups` specimen-card rule** shared the class name `.pj-lockup`
  with the lockup primitive, drawing a stray border around every lockup on the
  site and pushing the mark 4px below its own centre. Most visible on the
  business card.
- **`--color-text-muted` was `#6b7a88` in dark mode** — 4.10:1 on the app
  surface, below AA. It is now slate-dark-11 at 7.41:1.
- **The surface and text aliases were declared only inside the dark-mode media
  query**, leaving `--color-bg`, `--color-surface`, `--color-text-*` and
  `--color-border` undefined in light mode.
- **The Hextra example was rendering entirely in the system fallback face.** The
  brand fonts were loaded with an `@import` at the top of `custom.css`, but
  Hextra concatenates that file into its own bundle, and CSS only honours
  `@import` at the top of a stylesheet — bundled into the middle of one it is
  dropped silently. The faces are loaded from the documented head hook now.
  This was also why the Hextra table of contents wrapped where Docsy's did not:
  the fallback face is wider, so the same headings needed two lines.
- **The Hextra navbar rendered pure white on every page**, against the app
  canvas of `midnight-1`, because the theme paints the bar with a separate
  absolutely-positioned layer carrying `bg-white`. Most visible on the landing
  page, where the hero sits directly beneath it.
- **Neither example set the heading face on its navbar.** Both inherited the
  body face, so the brand and the links came out in Source Sans 3 where the
  documentation site uses Plus Jakarta Sans — and Hextra's title was 16px/800
  against the system's 20px/700 with -0.3px tracking, its links 14px/400 against
  16px/600. All three headers now resolve to identical values, and inactive
  destinations are muted rather than painted at heading strength.
- **Hextra's table of contents was noticeably airier than Docsy's** — 39.2px
  between entries against 30.4px — because the theme spaces list items with
  `my-2` on top of each link's own padding. The rhythm belongs to the link box,
  so the list margin is zeroed and the three tables of contents now step
  identically. Sub-entries also drop to normal weight, as Docsy's do, so the
  outline reads as a hierarchy.
- **Both example footers set a light-blue foreground in both modes**, which on
  the light footer fill was light-on-light.
- **A row-identifying `<th scope="row">` rendered as a column header** —
  uppercase, letter-spaced and muted — in both themes. The semantics stay; the
  presentation is now that of a body cell.
- **Hextra's h1 was pinned at 36px**, so it did not scale down on a phone the
  way the documentation site's does. It now clamps across the same ramp.
- **Links into mounted downloads hardcoded the production `/brand/` prefix**, so
  every one of them 404'd in a local preview. They use `{{< siteurl >}}` now, and
  `check-links.mjs` checks the content source for the pattern — it could not
  catch it before, because it only ever runs against a production build.

## [v2.0.2] — 2026-08-02

### Highlights

- Syntax is easier to scan: keywords, types, macros, comments, and errors now
  have more distinct visual roles across the supported language examples.
- The Code page now includes worked examples and measured token coverage for
  twelve languages, making it straightforward to evaluate the theme in use.
- Preprocessor directives, Rust attributes, and documentation comments render
  in their intended semantic roles.

### Changed

- **Syntax hues reassigned by measured perceptual distance.** Keywords and
  operators sat ΔE2000 **5.2** apart — the same colour, for reading purposes —
  because both occupied the blue-grey band at the same lightness. Only the three
  neutrals (plain, operators, comments) live in that band now, separated by
  lightness; every chromatic role holds its own hue.

  | Role | Was | Now | vs plain text |
  |---|---|---|---|
  | Keywords and modifiers | `#8aacc8` blue | `#d491b4` magenta | 12.9 → 29.9 |
  | Types and classes | `#74c0c9` cyan | `#6cc090` green | 17.3 → 29.9 |
  | Decorators and macros | `#d491b4` magenta | `#74c0c9` cyan | — |
  | Invalid and deprecated | `#f08b80` salmon | `#e55b5b` red | — |

  Keywords against operators went from 5.2 to **25.9**. Types hold the
  best-separated hue because they are referenced on nearly every line of typed
  code; decorators, which are rare, take the cyan that sits closer to plain.
  Pairs below the legibility threshold fell from six to three, and each survivor
  carries a non-colour cue or is semantically adjacent. No new colour was
  introduced — all four values are terminal-palette steps.

### Added

- **Worked syntax examples** on the Code page — C, C++, Python, Rust, Go, Java,
  NASM assembly, LaTeX, Markdown, JSON, YAML and TOML — each written to exercise
  as many of the ten roles as its language reaches.
- **A measured coverage table.** It is generated from the rendered page rather
  than asserted: each block is parsed, its emitted token classes are mapped back
  to roles, and the table records what actually lit up. Seven of the twelve
  languages reach every applicable role; where one does not, the reason is
  recorded.

### Fixed

- **C preprocessor directives and Rust attributes were coloured as comments.**
  Chroma files them under `Comment.Preproc`, so `#define`, `#include` and
  `#[derive(…)]` rendered as commentary. They are macros — the LSP says so — and
  now take the macro role.
- **Documentation comments were coloured as strings.** Chroma files them under
  `String.Doc`, so a Rust `///` line and a Python docstring rendered as data.
  Both are documentation and now take the comment role, which is what the
  modifier table already specified.

## [v2.0.1] — 2026-08-02

### Highlights

- The design system now documents a complete ten-role syntax palette and the
  typography modifiers that complement it.
- The documentation navigation, table of contents, and email signatures have
  been refreshed for clearer reading and more reliable reuse.
- Several visual regressions were fixed across Docsy, Hextra, and the landing
  page.

### Added

- **Syntax scopes** in the colour foundations and on the Code page. The theme
  grew from six tokens to the ten roles the LSP's 22 semantic token types and
  TextMate's 11 root scopes actually need — classes, functions, decorators and
  invalid states now read distinctly. No new colour: the two hues a syntax
  theme needs beyond the interface scales, cyan and magenta, already existed in
  the terminal palette.
- **LSP modifiers** are documented as typography rather than hue: ten modifiers
  against ten roles is a hundred states, which colour cannot carry.
- **Email signature, rebuilt.** Two forms — full and short — with placeholders
  for title, phone, postal address and register details, plus the legal
  requirements by jurisdiction. No horizontal rules: one vertical accent rule
  carries the brand, and the groups are separated by space.

### Changed

- The main site's sidebar and table of contents adopt the Docsy example's
  treatment: the reading size, an explicit canvas, the divider token, and a
  weight-700 current item marked in the fixed action colour.
- Signature legal and notice text moved from border steps (`#96abc6`,
  `#7490b2` — 2.2:1 and 3.3:1 as 11px text) to `slate-9`.

### Fixed

- The copy-to-clipboard control rendered as a placeholder box in dark mode and
  vanished in light: it is a button that *is* the icon, and Bootstrap's `.btn`
  font-family beat Font Awesome's on source order.
- The Docsy example never showed a navbar current-item marker; the class was
  emitted but never styled.
- One-line logo lockups sat optically low against the mark, and the dot-replace
  mark sat above the baseline a full stop occupies.
- Hextra's table of contents had lost its indentation, its search field was
  nearly invisible at rest, and its current-entry marker sat on the label.
- The landing cover filled the viewport, pushing the site's own description
  below the fold.

## [v2.0.0] — 2026-08-02

### Highlights

- A complete terminal palette, Hugo theme guidance, and live theme examples
  make the design system easier to adopt across applications and documentation.
- Token and surface updates improve accessibility and consistency; see the
  breaking changes below before upgrading an existing implementation.
- Core navigation and release-interface defects were corrected across the
  documentation site.

### Changed — breaking

Token values changed in ways that alter appearance. A consumer who copied the
previous values will see their interface change.

- **Light app background is `midnight-1` (`#f8f9fb`)**, was `#ffffff`. Step 1
  is the app background in the step roles, and dark mode already used
  `midnight-dark-1` for it. White returns as the raised surface, so a card now
  lifts off the page instead of separating by border alone.
- **Accent used as text is `orange-11` (`#c04424`)**, was `orange-10`
  (`#cc4528`). Step 10 is a solid role; as text it passed only against pure
  white and fell below 4.5:1 on any other surface. Solid accent fills are
  unchanged — still `orange-10` with a white label.
- **Divider is `slate-5` / `midnight-dark-5`**, was `slate-4` /
  `rgba(255,255,255,.08)`. More contrast at the same 1px weight, and the dark
  divider now carries the midnight hue.
- **Bootstrap `$warning` is gold `#8b6508`**, was `orange-9` (`#e05232`). An
  accent-coloured warning made every caution read as brand emphasis and the
  accent read as an error.
- Section surfaces moved off the slate ramp onto midnight in step order. Slate
  is back to supporting text and borders, as the foundations specify.

### Added

- **Terminal palette** in the colour foundations — sixteen ANSI slots and the
  chrome roles, with provenance and ratios measured against the terminal
  surface. Exposed in `brand/tokens/tokens.json` and `variables.css`.
- **`docs/themes/terminal`** — implementation guidance for tmux, WezTerm,
  Kitty, iTerm2 and Zellij.
- **`docs/themes/hugo`** — one shared semantic layer that Docsy and Hextra both
  bind to, so the two themes can be reviewed against each other.
- **Theme examples** under `examples/`, published at `/examples/hugo-docsy/`
  and `/examples/hugo-hextra/`, carrying the full component set from the same
  sources as the documentation site.

### Fixed

- The navbar current-item marker documented on the Components page was never
  implemented; the navbar emitted no active state.
- The release dropdown filled its current row with a solid navy block in light
  mode; `.pageinfo` was tinted to a grey that is not on the scales.
- Sidebar and table-of-contents current items had no clearance between the
  accent marker and the label.

## [v1.0.0] — 2026-07-28

First stable release. The brand system and its documentation site.

### Highlights

- The first stable release ships the documented brand system, a live Hugo
  documentation site, 153 component specimens, and versioned docs.
- It includes accessible light and dark colour roles, local search, provenance
  records, contribution guidance, and local release and contrast-audit tools.

### Added

- **Documentation site** — Hugo + Docsy, published at
  <https://projectious-work.github.io/brand/>, built with the design system it
  documents. Colour scales, the type ramp, and component specimens are rendered
  from `src/data/brand.yaml` and the brand SCSS, so a page cannot drift from the
  values it describes.
- **Live component specimens** — 153 working examples across the documentation,
  ported from the brand documents: buttons, inputs, cards, tables, navigation,
  alerts, overlays, data display, terminal, logo lockups, collateral and slides.
  Unlike the source documents these follow the reader's colour mode.
- **Full-page search** at `/search/` — live filtering, term highlighting and
  shareable `?q=` links, alongside Docsy's search popover. Self-contained: the
  lunr index is built locally and no external search service is contacted.
- **Versioned documentation** — a release dropdown; the latest release is served
  from the site root and every release is archived under `/vX.Y.Z/`.
- **`--color-accent-solid` (`#cc4528`)** — the fill for solid controls carrying
  white text. See *Changed* below.
- **Dark-mode semantic colours** — the callout hues are tuned for dark text on
  light tints and are illegible as foregrounds on the dark surface, so dark mode
  now has its own set.
- **`code-comment` (`#72889d`)** — a dedicated syntax token for code comments.
- **Asset provenance inventory** (`brand/PROVENANCE.md`), `CONTRIBUTING.md`,
  `SECURITY.md`, `CODE_OF_CONDUCT.md`, and this changelog.
- **Local release tooling** — `scripts/release.sh`, `scripts/verify.sh`,
  `scripts/check-links.mjs`, and two contrast audits. There is no CI; these
  scripts are the process.

### Changed

- **Accent buttons fill with `accent-solid` (`#cc4528`) rather than `orange-9`.**
  White on `#E05232` measures 3.87:1, below the 4.5:1 floor for 13–14px labels.
  `#E05232` is unchanged as the identity colour for marks, borders, active
  states and syntax. **Breaking** for anyone who implemented solid accent
  buttons from the previous documentation.
- **The accent is no longer used as body text.** Accent text now uses
  `orange-11` on light surfaces and `accent-light` on dark, per the scale's own
  step roles. **Breaking** for implementations that set text in `#E05232`.
- **Code comments use `code-comment`, not `slate-8`.** Steps 8–10 are border and
  solid-surface roles, not text roles; `slate-8` measured 3.02:1 on the code
  surface. **Breaking** for anyone who implemented the syntax theme literally.
- Semantic foregrounds `--pj-success` and `--pj-warning` are now distinct from
  the fill colours, which failed AA as text on their own tints.
- jQuery and lunr are vendored from `node_modules` instead of loaded from
  `code.jquery.com` and `unpkg.com`, so the published site does not depend on
  third-party CDNs.
- Repository restructured: the Hugo source moved to `src/`, leaving `brand/`,
  `src/`, and `scripts/` at the root.

### Fixed

- **Inline code rendered dark-on-dark and was unreadable.** Docsy uses
  `--td-pre-bg` for inline code as well as blocks; this project had repointed
  that variable at the dark code surface to force dark code blocks, which put
  inherited body text on a dark chip in both colour modes.
- Text on permanently-light blocks inherited dark-mode colours (1.36:1).
- Dark demo surfaces in the brand documents let children inherit `#1a1a1a`
  (1.12:1); unstyled anchors on midnight fell back to the browser default blue
  (1.65:1); tag, badge and avatar chips on the tinted accent measured 4.1–4.4:1;
  caption and annotation greys measured 2.8–4.45:1.
- All of the above are covered by `scripts/audit-contrast.mjs` (site, both
  colour modes) and `scripts/audit-contrast-brand.mjs` (brand documents), which
  both report zero failures at this release.

### Notes

Two WCAG 2.1 SC 1.4.3 exemptions are applied deliberately rather than designed
around, and are encoded in the audits: **logotypes** (the wordmark sets "work"
in the identity accent) and **inactive user-interface components** (the disabled
control specification).

[Unreleased]: https://github.com/projectious-work/brand/compare/v1.0.0...HEAD
[v1.0.0]: https://github.com/projectious-work/brand/releases/tag/v1.0.0
