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

## [Unreleased]

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
