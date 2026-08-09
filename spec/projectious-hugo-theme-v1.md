# Projectious Hugo theme v1 specification

Status: Proposed

Target repository: `projectious-work/brand`
Coordinating issues:
[`internal#6`](https://github.com/projectious-work/internal/issues/6) and
[`internal#8`](https://github.com/projectious-work/internal/issues/8)

## 1. Authority and intent

This specification defines the first-party Projectious Hugo theme. The theme is
the canonical presentation layer for `projectious.work` and may be reused by
other Projectious-owned Hugo sites.

`internal#8` is the governing request because it contains the newer
positioning and editorial requirements. `internal#6` contributes the detailed
authoring API, kitchen-sink, dependency, and validation requirements. Where the
two overlap, this specification implements the stricter requirement.

The authoritative inputs are:

1. the assets, tokens, typography, accessibility rules, and governance
   material in this repository;
2. the
   [Positioning Baseline](https://docs.google.com/document/d/1QkRMK-Jo-Krd0zKZCzM2H92s6MC3j-5CqKD-rzwQXSs/edit);
3. the
   [Website Specification](https://docs.google.com/document/d/1SPqb3ChmXVJkzTQoXLTgnzmBY7mCy0yiKMc2ub2iVNM/edit);
4. Projectious company repository, release, documentation, licensing, and
   no-GitHub-Actions policies.

The theme implements presentation and generic content patterns. It does not
define Projectious's current theses, project list, commercial claims, or site
information architecture.

## 2. Product position

Projectious is currently an independent initiative: a public workbench,
evidence portfolio, and publication platform. The theme must support projects,
applied research, experiments, articles, thesis-led pieces, papers, and ordinary
pages without assuming an established consultancy.

The consuming site may express:

> Turning emerging technical capabilities into predictable, auditable
> delivery.

and:

> Agentic AI. Agile. Cloud.

The second phrase is a conceptual motif, not three hard-coded service lines.
The theme must never manufacture service cards, conversion funnels,
testimonials, client logos, maturity claims, or consultancy calls to action.
Later advisory content is a consuming-site concern and uses the same neutral
page primitives.

## 3. Goals

- Apply the canonical Projectious brand without approximate local values.
- Remain Hugo-native, static-first, responsive, and dependency-light.
- Require no npm installation or JavaScript build for normal use.
- Provide accessible light and dark modes.
- Provide static, local site-wide search without a hosted service.
- Keep ordinary authoring in readable Markdown with small front matter.
- Support evidence-bearing work, articles, theses, and versioned papers.
- Provide a complete, inspectable kitchen-sink example.
- Establish a stable, versioned contract for consuming repositories.

## 4. Non-goals

- A general-purpose UI framework or application dashboard toolkit.
- A CMS, server runtime, database, form backend, analytics product, or search
  service.
- A visual page builder or arbitrary layout language in Markdown.
- Runtime Mermaid or another large diagram dependency.
- Site-specific copy, navigation, taxonomies, project maturity vocabularies, or
  commercial semantics.
- Compatibility shims for Docsy, Hextra, or the current Reflex website.
- A second brand-token or logo source.

## 5. Architecture decisions

### 5.1 Hugo module at the brand repository root

The repository becomes a Hugo module with module path:

```text
github.com/projectious-work/brand/v2
```

The module exposes only declared mounts. Theme implementation lives below
`theme/`; canonical tokens and assets remain in `brand/`.

```text
brand/
├── logo/                         # canonical, existing
├── tokens/                       # canonical, existing
└── portfolio/                    # canonical, existing
theme/
├── archetypes/
├── assets/
│   ├── css/
│   └── js/
├── data/
├── i18n/
├── layouts/
│   ├── _default/
│   ├── _markup/
│   ├── _partials/
│   └── _shortcodes/
└── static/
config/
└── _default/
    └── module.toml
examples/
└── projectious-theme/
```

Module mounts map theme directories to Hugo's standard component directories.
They also mount canonical `brand/tokens/variables.css`, approved font assets,
logos, favicons, and social-preview assets into stable names. The theme must
not copy token values into another manually maintained file.

Using the repository root aligns theme and brand releases: a consuming site
pins one brand version and receives a compatible theme, tokens, and assets.
The public module surface excludes research, governance working material,
processkit context, and documentation-site internals.

Alternatives rejected:

- **Git submodule:** exposes repository topology, adds awkward recursive-clone
  and update operations, and gives no clean component mount contract.
- **Copied/vendored source as the primary mechanism:** obscures provenance and
  encourages drift. Vendoring remains an optional reproducible deployment
  snapshot.
- **Separate theme repository:** splits one brand concern across repositories
  before independent lifecycle or ownership requires it.
- **Remote Hugo theme directory without modules:** lacks `go.mod`/`go.sum`
  version resolution and mount semantics.

### 5.2 Supported toolchain

- Minimum Hugo version: **0.157.0**.
- Normal consumption must work with the standard Hugo binary.
- Hugo Extended is allowed for the brand documentation site but is not
  required by the theme.
- Go is required only for resolving or updating the Hugo module. A consuming
  repository may commit Hugo's `_vendor/` snapshot for network-independent
  production builds.
- No npm, Node, PostCSS, Tailwind build, bundler, or framework runtime is part
  of the normal theme or consuming-site build.

The implementation uses normal CSS, the canonical generated CSS variables,
Hugo Pipes for concatenation/minification/fingerprinting, and small vendored
vanilla JavaScript modules. Adding a build dependency requires a separate
owner-approved decision.

### 5.3 Static output only

The theme emits HTML, CSS, JavaScript, JSON search data, RSS/Atom, sitemap, and
metadata. It contains no server handlers. Dynamic features are progressive
enhancements and must leave content usable when JavaScript is unavailable.

## 6. Brand integration contract

### 6.1 Canonical inputs

The module mounts and consumes:

- semantic light/dark colour variables from `brand/tokens/variables.css`;
- machine-readable values from `brand/tokens/tokens.json` only where Hugo
  needs data rather than CSS;
- canonical logos and favicons from `brand/logo/`;
- Plus Jakarta Sans for headings, Source Sans 3 for body copy, and IBM Plex
  Mono for code;
- spacing, shape, motion, focus, component, icon, and accessibility rules from
  the published brand documentation;
- approved social-preview conventions and assets from `brand/portfolio/`.

Generated or bundled font files must have documented provenance, include their
SIL OFL notices, use only required formats/weights, and be preloaded only when
needed. The implementation must prevent layout shift through explicit metrics,
`font-display`, and sensible system fallbacks.

### 6.2 Consumer overrides

Consumers may configure:

- site title, description, canonical base URL, language, and author;
- navigation and footer links;
- logo variant chosen from canonical assets;
- social profile links;
- default colour preference;
- search inclusion/exclusion;
- social-preview defaults;
- optional analytics markup through a documented hook;
- site-owned legal/contact content.

Consumers may not redefine canonical Projectious colour values, typography,
logo geometry, focus treatment, or component states while presenting the site
as Projectious-branded. A genuinely different brand must fork or replace the
theme instead of overriding tokens piecemeal.

## 7. Theme configuration contract

Configuration lives below `params.projectious`:

```yaml
params:
  projectious:
    logo: light
    themeDefault: system
    search:
      enabled: true
      maxResults: 20
    socialPreview:
      defaultImage: /brand/social/default.png
    footer:
      showBuildIdentity: false
```

Unknown values fail during the example/validation build where Hugo can check
them. Defaults must be useful and neutral. No configuration key implies a
consultancy, service catalogue, or commercial CTA.

## 8. Layout architecture

### 8.1 Base templates

- `baseof.html`: document shell, metadata, assets, skip link, header, main,
  and footer.
- `single.html`: neutral ordinary page.
- `list.html`: generic section/taxonomy list.
- `home.html`: composable blocks driven by consuming-site content/config.
- `404.html`: helpful branded not-found page with search.
- dedicated generic layouts for `work`, `article`, `thesis`, and `paper`.

The named layouts are content contracts, not hard-coded Projectious content.
Consumers may map their own content types to them.

### 8.2 Partials

Required partial groups:

- document head, canonical/SEO/OpenGraph metadata, favicons, and feeds;
- header, desktop/mobile navigation, breadcrumbs, pagination, and footer;
- theme preference control;
- search trigger, dialog/page results, and result item;
- page header and content metadata;
- status/maturity, evidence, limitations/non-claims, and key/value metadata;
- cards and grids;
- related content/work;
- article and paper publication metadata;
- responsive figure and image handling;
- build-time validation messages for invalid required metadata.

Partials accept documented dictionaries or Page objects. They must not rely on
undocumented global scratch state.

### 8.3 Render hooks

Use render hooks for Markdown features that retain ordinary Markdown syntax:

- headings: stable optional anchors and accessible permalink labels;
- links: safe external-link treatment without forcing new windows;
- images: page-resource lookup, dimensions, responsive variants, caption/title,
  and alt-text validation;
- code blocks: semantic language label, optional line highlighting, and
  canonical code surface;
- tables: responsive wrapper, caption support where supplied, and preserved
  table semantics.

### 8.4 Shortcodes

Shortcodes are limited to semantics Markdown cannot express cleanly:

- `callout` with note, important, warning, and danger variants;
- `button` and `button-group`;
- `cards`/`card` for curated non-list grids;
- `figure` only when the image render hook cannot express required metadata;
- `key-values`;
- `evidence`;
- `limitations`;
- `related`;
- `details`;
- `columns` for a constrained two-column responsive layout.

Status badges, work cards, thesis cards, article metadata, and paper metadata
normally come from front matter and layouts rather than shortcodes.

Every shortcode must have:

- a stable documented name and parameters;
- semantic HTML;
- validation for invalid variants or missing required values;
- useful no-JavaScript behaviour;
- a kitchen-sink example showing its Markdown source.

Raw HTML in normal content remains disabled by default.

## 9. Content-facing API

### 9.1 Common metadata

```yaml
title: Example
description: One-sentence summary.
date: 2026-08-08
lastmod: 2026-08-08
draft: false
topics: [governance, agent-workflows]
image: cover.png
aliases: []
noindex: false
```

Theme templates tolerate absent optional fields but fail the kitchen-sink
validation when a required field for a specialized type is missing.

### 9.2 Work/evidence pages

Generic fields:

```yaml
layout: work
status:
  label: Working prototype
  key: prototype
purpose: What question this work investigates.
demonstrates:
  - Observable capability.
evidence:
  - label: Repository
    url: https://example.invalid/repository
limitations:
  - Explicit non-claim.
repository: https://example.invalid/repository
related:
  writing: []
  theses: []
```

The theme renders supplied status text and keys. It does not own or silently
upgrade a portfolio maturity vocabulary.

### 9.3 Articles and thesis-led pieces

Articles provide authors, summary, dates, topics, related work, and optional
series. A thesis-led page additionally supports a neutral lifecycle such as
`proposed`, `testing`, `refined`, or `retired`, but the consuming site
owns the allowed vocabulary and thesis content.

### 9.4 Papers

```yaml
layout: paper
subtitle: Optional subtitle
authors: [Bernhard Gerlach]
paper:
  status: working-paper
  version: 0.1
  number: PW-001
  abstract: Concise abstract.
  references: []
  pdf: paper.pdf
related:
  work: []
  theses: []
```

HTML is canonical. PDF is an optional page resource and must match the declared
version. The theme provides metadata and download presentation but does not
generate the PDF.

## 10. Light and dark mode

- CSS declares `color-scheme: light dark` and maps semantic brand roles for
  both modes.
- Initial mode follows `prefers-color-scheme` unless a stored explicit user
  choice exists.
- A small early script applies the stored mode before first paint.
- The visible control supports system, light, and dark; exposes state to
  assistive technology; and is keyboard operable.
- Persistence uses one versioned, namespaced `localStorage` key.
- Without JavaScript, system preference still works through CSS.
- Every component, syntax surface, focus state, disabled state, hover state,
  diagram, and social-preview example is checked in both modes.
- Motion related to switching obeys `prefers-reduced-motion`.

## 11. Static search

### 11.1 Decision

Use a Hugo JSON output format to build `/search/index.json`, plus a small
vendored vanilla JavaScript search implementation. Do not use Algolia,
Pagefind, Fuse.js, Lunr, or an npm-generated index in v1.

The JSON index contains only published, indexable pages:

```json
{
  "title": "Page title",
  "summary": "Plain-text summary",
  "permalink": "/work/example/",
  "kind": "work",
  "topics": ["governance"],
  "content": "Normalized plain text"
}
```

Search normalizes Unicode and case, tokenizes without remote services, applies
a simple documented title/summary/topic/content weighting, and caps results.
The index excludes drafts, `noindex` pages, raw HTML, scripts, navigation, and
sensitive front matter.

### 11.2 Accessible interaction

- Search is available as an ordinary `/search/` page; a dialog may enhance it.
- The query is represented by `?q=` for direct links and browser history.
- Results update with a modest debounce and an announced result count.
- Keyboard operation, focus return, escape handling, empty query, no result,
  and JavaScript-disabled states are specified and tested.
- Result links remain ordinary links.

## 12. Diagrams

V1 supports diagrams as committed SVG/PNG page resources with captions, alt
text, dimensions, and optional long descriptions. Inline semantic HTML/CSS
diagrams are allowed where they remain readable.

Runtime Mermaid is out of scope because its dependency size and script
execution conflict with the minimal static contract. A future authoring-only
diagram generator may be approved separately if it produces committed,
reviewable SVG and records source/provenance.

## 13. Accessibility, performance, and security

### Accessibility

- WCAG 2.2 AA is the target.
- One `h1`, ordered headings, landmarks, skip link, descriptive labels, and
  semantic controls are mandatory.
- All navigation, theme, disclosure, and search interactions work by keyboard.
- Focus is always visible and uses canonical brand tokens.
- Contrast is checked in both modes and across interactive states.
- Images require meaningful alt text or an explicit decorative designation.
- Tables retain headers and captions and may scroll without hiding content.
- Reduced-motion preferences disable nonessential movement.

### Performance

For the kitchen-sink production build on a representative mobile profile:

- no blocking third-party scripts;
- JavaScript target at most 20 KiB compressed for navigation, theme, and search,
  excluding the search JSON data;
- theme CSS target at most 45 KiB compressed;
- explicit image dimensions and responsive derivatives;
- no avoidable font or image layout shift;
- static assets fingerprinted and cacheable;
- homepage Lighthouse targets of at least 95 for performance, accessibility,
  best practices, and SEO, treated as a local evidence target rather than CI.

### Security and privacy

- No third-party request is made by default.
- External scripts, analytics, embeds, and forms are opt-in consuming-site
  decisions.
- Templates escape content normally; `safeHTML` is limited to reviewed static
  template fragments.
- Links use safe schemes. Any target-blank consumer override adds
  `rel="noopener noreferrer"`.
- Search never indexes draft/noindex content.
- Theme preference is the only default browser storage.

## 14. SEO and output formats

The theme supplies:

- canonical URL, title, description, author, and language metadata;
- OpenGraph and social-card metadata with canonical brand fallback assets;
- sitemap and robots integration;
- RSS/Atom discovery where enabled by the consuming site;
- semantic article/paper metadata and JSON-LD hooks;
- useful 404 metadata;
- stable heading anchors and clean pagination metadata.

The consuming site remains responsible for truthful titles, descriptions,
authors, claims, robots policy, canonical base URL, and legal content.

## 15. Kitchen-sink example

`examples/projectious-theme/` is a standalone consuming site using the same
module and toolchain contract as production consumers. It must contain:

- typography and semantic colour states;
- complete header, footer, breadcrumbs, pagination, mobile navigation, and 404;
- light, dark, and system mode;
- buttons, links, button groups, callouts, cards/grids, key/value blocks,
  details, responsive columns, badges, and status states;
- narrow, wide, and overflowing tables;
- inline and fenced code;
- static diagram, figures, captions, decorative and meaningful images;
- blockquotes, definitions, nested lists, and long unbroken strings;
- ordinary page, long article, thesis-led piece, working paper, and work page;
- evidence, limitations, related work/theses, and empty metadata states;
- search with normal, empty-query, no-result, and keyboard examples;
- long navigation labels, missing optional image, pagination boundaries, and
  other manual QA edge cases.

Each rendered component links to or displays its Markdown/front-matter source.
The example is documentation, manual visual evidence, and the fixture for
automated structural checks. It contains no fabricated clients, outcomes, or
production claims.

## 16. Validation

Implementation extends the repository's local/manual checks without adding
GitHub Actions:

```bash
./scripts/build-projectious-theme.sh
./scripts/check-projectious-theme.sh
./scripts/serve-projectious-theme.sh
./scripts/verify.sh
```

The checks cover:

- minimum and current supported Hugo builds;
- no npm/Node requirement for theme/consumer build;
- clean module resolution and optional vendored build;
- kitchen-sink build with warnings treated as failures;
- HTML structure and internal/external link validation;
- CSS/token drift against canonical generated inputs;
- contrast in both modes and all component states;
- keyboard/manual interaction checklist;
- search index schema, exclusions, weighting fixtures, and no-result behavior;
- HTML validation and absence of unexpected third-party requests;
- asset/font/license provenance;
- compressed CSS/JS budgets;
- production build reproducibility from a clean checkout.

Browser visual and accessibility checks run locally through the repository's
existing approved tooling. Validation evidence belongs in the implementation
PR and release procedure, not in a new workflow.

## 17. Versioning, distribution, and upgrades

- Theme compatibility follows the brand repository's semantic versions.
- Consumers pin an exact release in `go.mod` and commit `go.sum`.
- Production consumers should commit a refreshed Hugo `_vendor/` snapshot
  when they require network-independent builds.
- Patch: compatible fixes and accessibility corrections.
- Minor: compatible components, optional fields, and styles.
- Major: removed/renamed config, templates, shortcodes, metadata, or changed
  required HTML/content contracts.
- Deprecations remain documented for at least one minor release before removal
  unless security requires immediate action.
- Release notes identify consumer action, token changes, visual changes, and
  validation evidence.
- Consumer overrides are tested during upgrade; copied theme templates are
  discouraged and must be inventoried if unavoidable.

## 18. Implementation phases

1. **Module foundation:** root module declaration, mounts, canonical token/logo
   integration, base templates, CSS, fonts, and licensing.
2. **Navigation and modes:** header/footer, mobile navigation, focus, and
   light/dark behavior.
3. **Authoring API:** render hooks, constrained shortcodes, metadata partials,
   and specialized generic layouts.
4. **Search and outputs:** JSON index, search UI, SEO, feeds, sitemap, and 404.
5. **Kitchen sink:** complete examples, source links, edge cases, and manual QA.
6. **Validation and release:** scripts, budgets, provenance, documentation,
   semantic versioning, release, and consuming-site upgrade guide.

Each phase must leave a buildable example and may be reviewed independently.

## 19. Acceptance criteria

- [ ] Theme is delivered as the versioned root Hugo module of `brand`.
- [ ] Canonical tokens and assets are mounted, not manually re-keyed.
- [ ] Standard Hugo 0.157.0 or newer builds a consumer without npm.
- [ ] Markdown authoring remains low-clutter and raw HTML is unnecessary.
- [ ] Render hooks and shortcodes follow the boundaries in this specification.
- [ ] Work/evidence, article, thesis-led, paper, and ordinary pages are covered.
- [ ] Current Projectious theses and commercial semantics are not hard-coded.
- [ ] Light/dark/system behavior passes both-mode and keyboard validation.
- [ ] Static search requires no hosted service or npm-generated index.
- [ ] Kitchen sink covers every supported component, state, and edge case.
- [ ] WCAG 2.2 AA, responsive, performance, privacy, and security requirements
      have local evidence.
- [ ] Licenses and provenance cover every bundled code/font/asset.
- [ ] Version pinning, vendoring, release, deprecation, and upgrade are
      documented and tested.
- [ ] No project-authored GitHub Actions are added.

## 20. Open implementation questions

These are implementation-time measurements, not unresolved architecture:

- the exact canonical font subset and preload set that meets the layout and
  size budgets;
- whether the search index should omit full content after representative
  corpus-size measurement;
- whether the existing local browser tooling is sufficient for all interaction
  checks or needs a repository-approved extension.

Any decision that adds a hosted service, npm build, runtime diagram engine,
independent theme repository, or noncanonical brand values requires new owner
approval and an internal decision record.
