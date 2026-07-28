# Components

> The component set as live specimens — buttons, inputs, cards, tables, navigation, feedback, overlays, and data display.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

Every specimen on this page is live markup styled by the brand tokens, ported
from `brand/html/projectious-kitchen-sink.html`. They follow your colour mode —
switch the theme and they change with the documentation.

Measurements listed here are normative: a 40px input is 40px.

## Buttons

Five variants, three sizes. Plus Jakarta Sans 600, 6px radius, 200ms transitions.

<div class="pj-demo"><div class="pj-demo__label">Variants — medium (40px)</div>
  <div class="pj-demo__body">
    
<button class="pj-btn pj-btn--primary pj-btn--md">Get started</button>
<button class="pj-btn pj-btn--accent pj-btn--md">Deploy</button>
<button class="pj-btn pj-btn--outline pj-btn--md">Learn more</button>
<button class="pj-btn pj-btn--ghost pj-btn--md">Cancel</button>
<button class="pj-btn pj-btn--danger pj-btn--md">Delete</button>
<button class="pj-btn pj-btn--primary pj-btn--md" disabled>Disabled</button>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Sizes — sm 32px · md 40px · lg 48px</div>
  <div class="pj-demo__body">
    
<button class="pj-btn pj-btn--accent pj-btn--sm">Small</button>
<button class="pj-btn pj-btn--accent pj-btn--md">Medium</button>
<button class="pj-btn pj-btn--accent pj-btn--lg">Large</button>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">On a midnight surface</div>
  <div class="pj-demo__body pj-demo__body--dark">
    
<button class="pj-btn pj-btn--accent pj-btn--md">Deploy</button>
<button class="pj-btn pj-btn--outline pj-btn--md">View logs</button>
<button class="pj-btn pj-btn--ghost pj-btn--md">Dismiss</button>

  </div>
</div>


| Variant | Fill | Border | Text | Contrast | Use |
|---|---|---|---|---|---|
| **Primary** | `midnight-9` | none | white | 12.75:1 | Default action |
| **Accent** | `accent-solid` `#cc4528` | none | white | 4.72:1 | The single most important action |
| **Outline** | transparent | 1.5px `orange-9` | `orange-11` | 5.13:1 | Secondary action |
| **Ghost** | transparent | 1px border | `slate-9` | — | Tertiary, toolbars |
| **Danger** | `#a8261c` | none | white | 7.10:1 | Destructive action |

<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">Accent buttons fill with accent-solid, not step 9</div>


`orange-9` (`#E05232`) is the identity accent and is unchanged as a mark,
border, active state, or syntax colour. But white on it measures **3.87:1** —
below the 4.5:1 floor for 13–14px labels. Solid accent controls therefore fill
with **`--color-accent-solid` (`#cc4528`)**, white at **4.72:1**; hover
continues to `accent-dark` (`#b84228`, 5.46:1).
</div>


<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Use exactly one accent button per view. Give every button a verb — &ldquo;Deploy&rdquo;,
&ldquo;Save changes&rdquo;.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Place two accent buttons side by side, or use a danger button for a reversible
action.</p>
</div>
</div>


## Inputs

Default height 40px (sm 32, lg 48). Source Sans 3 at 13px, `slate-7` border,
and a 2px focus ring at midnight 15% alpha.

<div class="pj-demo"><div class="pj-demo__label">Text, textarea, select</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div class="pj-field">
  <label class="pj-field__label" for="d1">Pipeline name</label>
  <input class="pj-input" id="d1" type="text" placeholder="validate-deploy">
</div>
<div class="pj-field">
  <label class="pj-field__label" for="d2">Policy</label>
  <select class="pj-input" id="d2"><option>strict</option><option>advisory</option></select>
</div>
<div class="pj-field">
  <label class="pj-field__label" for="d3">Description</label>
  <textarea class="pj-input" id="d3" placeholder="What does this pipeline do?"></textarea>
</div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">States — default, focus, error, disabled</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div class="pj-field">
  <span class="pj-field__label">Default</span>
  <input class="pj-input" type="text" value="agents/auditor" readonly>
  <span class="pj-field__hint">slate-7 border</span>
</div>
<div class="pj-field">
  <span class="pj-field__label">Focus</span>
  <input class="pj-input" type="text" value="agents/auditor" readonly
         style="border-color:#1d3352;box-shadow:0 0 0 2px rgba(29,51,82,0.15)">
  <span class="pj-field__hint">midnight-9 + 2px ring</span>
</div>
<div class="pj-field">
  <span class="pj-field__label">Error</span>
  <input class="pj-input pj-input--error" type="text" value="agents/" readonly>
  <span class="pj-field__error">Agent identifier is incomplete.</span>
</div>
<div class="pj-field">
  <span class="pj-field__label">Disabled</span>
  <input class="pj-input" type="text" value="locked" disabled>
  <span class="pj-field__hint">slate-4 bg, cursor not-allowed</span>
</div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Checkbox, radio, toggle, slider</div>
  <div class="pj-demo__body">
    
<label class="pj-check"><input type="checkbox" checked> Checked</label>
<label class="pj-check"><input type="checkbox"> Unchecked</label>
<label class="pj-check"><input type="radio" name="d" checked> Selected</label>
<label class="pj-check"><input type="radio" name="d"> Unselected</label>
<span class="pj-toggle pj-toggle--on"><span class="pj-toggle__track"><span class="pj-toggle__thumb"></span></span> On</span>
<span class="pj-toggle"><span class="pj-toggle__track"><span class="pj-toggle__thumb"></span></span> Off</span>
<input class="pj-range" type="range" value="60" style="max-width:160px">

  </div>
</div>


Full rules — labels, validation, focus — are on
[Forms](/brand/docs/interface/forms/).

## Cards

Radius 9px, padding 24px, 1px `slate-4` border, `shadow-1` at rest. Nested
controls step **down** one radius.

<div class="pj-demo"><div class="pj-demo__label">Basic, with image, with actions</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div class="pj-card">
  <div class="pj-card__body">
    <div class="pj-card__title">Validate &amp; deploy</div>
    <div class="pj-card__text">Runs policy checks before promoting to staging.</div>
  </div>
</div>
<div class="pj-card">
  <div class="pj-card__img">Image / diagram</div>
  <div class="pj-card__body">
    <div class="pj-card__title">Architecture</div>
    <div class="pj-card__text">Nodes, flows, and policy gates.</div>
  </div>
</div>
<div class="pj-card">
  <div class="pj-card__body">
    <div class="pj-card__title">Agent: auditor</div>
    <div class="pj-card__text">Idle for 2 hours.</div>
  </div>
  <div class="pj-card__actions">
    <button class="pj-btn pj-btn--primary pj-btn--sm">View details</button>
    <button class="pj-btn pj-btn--ghost pj-btn--sm">Download</button>
  </div>
</div>

  </div>
</div>


## Tables

Header cells use the overline style. Striping uses the subtle background step,
never a border-only rule. **Wide tables scroll inside their own container.**

<div class="pj-demo"><div class="pj-demo__label">Data table with sort indicator</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<table class="pj-table">
  <thead><tr><th class="pj-table__sort">Pipeline</th><th>Policy</th><th>Agents</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>validate-deploy</td><td>strict</td><td>2</td><td><span class="pj-status pj-status--ok"><span class="pj-status__dot"></span>Healthy</span></td></tr>
    <tr><td>nightly-audit</td><td>advisory</td><td>1</td><td><span class="pj-status pj-status--warn"><span class="pj-status__dot"></span>Degraded</span></td></tr>
    <tr><td>release-train</td><td>strict</td><td>4</td><td><span class="pj-status pj-status--err"><span class="pj-status__dot"></span>Blocked</span></td></tr>
  </tbody>
</table>

  </div>
</div>



### Table with search and filters

A toolbar above the table carries the search field and filter chips. Active
filters are shown as removable chips so the current view is always legible —
never leave a filter applied with no visible indication.

<div class="pj-demo"><div class="pj-demo__label">Search, filter chips, pagination footer</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-table-shell">
  <div class="pj-table-shell__toolbar">
    <input class="pj-table-shell__search" type="search" placeholder="Search pipelines…" aria-label="Search pipelines">
    <button class="pj-chip pj-chip--on">Policy: strict<span class="pj-chip__x">×</span></button>
    <button class="pj-chip pj-chip--on">Status: failing<span class="pj-chip__x">×</span></button>
    <button class="pj-chip">+ Add filter</button>
  </div>
  <table class="pj-table">
    <thead><tr><th class="pj-table__sort">Pipeline</th><th>Policy</th><th>Owner</th><th>Status</th></tr></thead>
    <tbody>
      <tr><td>release-train</td><td>strict</td><td>platform</td><td><span class="pj-status pj-status--err"><span class="pj-status__dot"></span>Blocked</span></td></tr>
      <tr><td>nightly-audit</td><td>strict</td><td>security</td><td><span class="pj-status pj-status--err"><span class="pj-status__dot"></span>Failed</span></td></tr>
    </tbody>
  </table>
  <div class="pj-table-shell__footer">
    <span>2 of 48 pipelines · 2 filters applied</span>
    <span class="pj-pagination">
      <button class="pj-pagination__page">‹</button>
      <button class="pj-pagination__page pj-pagination__page--current">1</button>
      <button class="pj-pagination__page">2</button>
      <button class="pj-pagination__page">›</button>
    </span>
  </div>
</div>

  </div>
</div>


### Multi-level headers

Grouped columns use a two-row header. The group row is centred over its span and
separated by a vertical rule — the only place the system uses one.

<div class="pj-demo"><div class="pj-demo__label">Two-row header with column groups</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-scroll-x">
<table class="pj-table">
  <thead>
    <tr class="pj-table__group-head">
      <th rowspan="2">Pipeline</th>
      <th colspan="3">This week</th>
      <th colspan="3">Last week</th>
    </tr>
    <tr>
      <th class="pj-table__num">Runs</th><th class="pj-table__num">Pass</th><th class="pj-table__num">p95</th>
      <th class="pj-table__num">Runs</th><th class="pj-table__num">Pass</th><th class="pj-table__num">p95</th>
    </tr>
  </thead>
  <tbody>
    <tr><td>validate-deploy</td><td class="pj-table__num">412</td><td class="pj-table__num">98.1%</td><td class="pj-table__num">4m12s</td><td class="pj-table__num">388</td><td class="pj-table__num">97.4%</td><td class="pj-table__num">4m40s</td></tr>
    <tr><td>nightly-audit</td><td class="pj-table__num">7</td><td class="pj-table__num">71.4%</td><td class="pj-table__num">18m03s</td><td class="pj-table__num">7</td><td class="pj-table__num">85.7%</td><td class="pj-table__num">17m22s</td></tr>
    <tr><td>release-train</td><td class="pj-table__num">14</td><td class="pj-table__num">92.9%</td><td class="pj-table__num">9m51s</td><td class="pj-table__num">12</td><td class="pj-table__num">91.7%</td><td class="pj-table__num">10m08s</td></tr>
  </tbody>
</table>
</div>

  </div>
</div>


### Grouped rows and totals

Row groups act as sub-headings inside the table. A totals row is separated by a
2px rule — heavier than the body rules, so it reads as a summary rather than
another record.

<div class="pj-demo"><div class="pj-demo__label">Row groups, indented children, totals</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<table class="pj-table">
  <thead><tr><th>Workload</th><th class="pj-table__num">Runs</th><th class="pj-table__num">Cost</th></tr></thead>
  <tbody>
    <tr class="pj-table__rowgroup"><td colspan="3">Platform</td></tr>
    <tr><td class="pj-table__indent">validate-deploy</td><td class="pj-table__num">412</td><td class="pj-table__num">€48.10</td></tr>
    <tr><td class="pj-table__indent">release-train</td><td class="pj-table__num">14</td><td class="pj-table__num">€12.60</td></tr>
    <tr class="pj-table__rowgroup"><td colspan="3">Security</td></tr>
    <tr><td class="pj-table__indent">nightly-audit</td><td class="pj-table__num">7</td><td class="pj-table__num">€21.40</td></tr>
    <tr><td class="pj-table__indent">secret-scan</td><td class="pj-table__num">96</td><td class="pj-table__num">€9.05</td></tr>
    <tr class="pj-table__total"><td>Total</td><td class="pj-table__num">529</td><td class="pj-table__num">€91.15</td></tr>
  </tbody>
</table>

  </div>
</div>


### Wide tables

A wide table scrolls **inside its own container**, never the page, and pins its
first column so the row identity stays visible while scrolling.

<div class="pj-demo"><div class="pj-demo__label">Horizontal scroll with a sticky first column</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-scroll-x">
<table class="pj-table pj-table--sticky" style="min-width:720px">
  <thead><tr><th>Pipeline</th><th>Policy</th><th>Owner</th><th class="pj-table__num">Runs</th><th class="pj-table__num">Pass</th><th class="pj-table__num">p50</th><th class="pj-table__num">p95</th><th>Region</th><th>Status</th></tr></thead>
  <tbody>
    <tr><td>validate-deploy</td><td>strict</td><td>platform</td><td class="pj-table__num">412</td><td class="pj-table__num">98.1%</td><td class="pj-table__num">2m01s</td><td class="pj-table__num">4m12s</td><td>eu-central</td><td><span class="pj-status pj-status--ok"><span class="pj-status__dot"></span>Healthy</span></td></tr>
    <tr><td>nightly-audit</td><td>strict</td><td>security</td><td class="pj-table__num">7</td><td class="pj-table__num">71.4%</td><td class="pj-table__num">11m40s</td><td class="pj-table__num">18m03s</td><td>eu-west</td><td><span class="pj-status pj-status--warn"><span class="pj-status__dot"></span>Degraded</span></td></tr>
  </tbody>
</table>
</div>

  </div>
</div>


<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Right-align numeric columns and set them in IBM Plex Mono so digits line up.
Show the active filter state and the result count together.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Add vertical rules between ordinary columns, let a wide table scroll the whole
page, or apply a filter without a visible chip saying so.</p>
</div>
</div>


## Navigation

<div class="pj-demo"><div class="pj-demo__label">Navbar — midnight in both modes, 3px accent rule</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-navbar">
  <span class="pj-navbar__brand">projectious.work</span>
  <a class="pj-navbar__link pj-navbar__link--active" href="#">Documentation</a>
  <a class="pj-navbar__link" href="#">Pipelines</a>
  <a class="pj-navbar__link" href="#">Agents</a>
</div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Breadcrumbs, tabs, pagination, sidebar</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div>
  <div class="pj-breadcrumb"><span><a href="#">Docs</a></span><span><a href="#">Interface</a></span><span>Components</span></div>
  <span class="pj-cap">13px, secondary</span>
</div>
<div>
  <div class="pj-tabs"><span class="pj-tabs__tab pj-tabs__tab--active">Overview</span><span class="pj-tabs__tab">Runs</span><span class="pj-tabs__tab">Settings</span></div>
  <span class="pj-cap">accent underline on active</span>
</div>
<div>
  <div class="pj-pagination"><button class="pj-pagination__page">‹</button><button class="pj-pagination__page pj-pagination__page--current">1</button><button class="pj-pagination__page">2</button><button class="pj-pagination__page">3</button><button class="pj-pagination__page">›</button></div>
  <span class="pj-cap">current in midnight-9</span>
</div>
<div>
  <div class="pj-sidebar">
    <div class="pj-sidebar__item pj-sidebar__item--active">Foundations</div>
    <div class="pj-sidebar__item">Logo</div>
    <div class="pj-sidebar__item">Interface</div>
  </div>
  <span class="pj-cap">active: 600 weight</span>
</div>

  </div>
</div>


## Alerts and feedback

Four semantic colours as a 4px left border on a tinted background. The hues are
**mode-specific** — see [Colour](/brand/docs/foundations/color/).

<div class="pj-demo"><div class="pj-demo__label">Alerts</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-alert pj-alert--info"><div class="pj-alert__title">Info</div><div class="pj-alert__text">Pipeline requires at least one validation agent.</div></div>
<div class="pj-alert pj-alert--success" style="margin-top:.5rem"><div class="pj-alert__title">Success</div><div class="pj-alert__text">All checks passed. Deployment ready.</div></div>
<div class="pj-alert pj-alert--warning" style="margin-top:.5rem"><div class="pj-alert__title">Warning</div><div class="pj-alert__text">Agent "monitor" has been idle for 2 hours.</div></div>
<div class="pj-alert pj-alert--danger" style="margin-top:.5rem"><div class="pj-alert__title">Danger</div><div class="pj-alert__text">Policy violation — deployment blocked.</div></div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Badges, progress, spinner</div>
  <div class="pj-demo__body">
    
<span class="pj-badge">Default</span>
<span class="pj-badge pj-badge--accent">Urgent</span>
<span class="pj-badge pj-badge--pill">v0.1.0</span>
<span class="pj-badge pj-badge--accent pj-badge--pill">Breaking</span>
<span class="pj-progress"><span class="pj-progress__bar" style="width:62%"></span></span>
<span class="pj-spinner" role="status" aria-label="Loading"></span>

  </div>
</div>


<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Semantic colour is not decoration</div>


Success, warning, and danger carry meaning. Do not use them to add visual
variety to neutral content.
</div>


## Modals and overlays

Modal radius 13px with `shadow-3`; scrim is midnight at 40% alpha. Focus is
trapped while open and restored to the trigger on close; `Esc` always closes.

<div class="pj-demo"><div class="pj-demo__label">Dialog, dropdown, tooltip</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div class="pj-modal">
  <div class="pj-modal__head">Delete pipeline?</div>
  <div class="pj-modal__body">This removes the pipeline and its run history. This cannot be undone.</div>
  <div class="pj-modal__foot">
    <button class="pj-btn pj-btn--ghost pj-btn--sm">Cancel</button>
    <button class="pj-btn pj-btn--danger pj-btn--sm">Delete</button>
  </div>
</div>
<div class="pj-dropdown">
  <div class="pj-dropdown__item pj-dropdown__item--active">Re-run</div>
  <div class="pj-dropdown__item">Duplicate</div>
  <div class="pj-dropdown__item">Export logs</div>
</div>
<div><span class="pj-tooltip">Last run 4 minutes ago</span><span class="pj-cap">12px, 3px radius</span></div>

  </div>
</div>


## Data display

<div class="pj-demo"><div class="pj-demo__label">Avatar, stat card, tags</div>
  <div class="pj-demo__body">
    
<span class="pj-avatar">JD</span>
<span class="pj-avatar pj-avatar--accent">AS</span>
<div class="pj-stat">
  <div class="pj-stat__value">1,284</div>
  <div class="pj-stat__label">Runs this week</div>
  <div class="pj-stat__delta">▲ 12% vs last week</div>
</div>
<span class="pj-badge">Composable</span>
<span class="pj-badge pj-badge--accent">Agent-first</span>
<span class="pj-badge">Humanistic</span>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">List and timeline</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div class="pj-list">
  <div class="pj-list__row"><span>validate-deploy</span><span class="pj-cap" style="margin:0">4m ago</span></div>
  <div class="pj-list__row"><span>nightly-audit</span><span class="pj-cap" style="margin:0">2h ago</span></div>
  <div class="pj-list__row"><span>release-train</span><span class="pj-cap" style="margin:0">1d ago</span></div>
</div>
<div class="pj-timeline">
  <div class="pj-timeline__item"><div>Policy check passed</div><span class="pj-timeline__time">09:14</span></div>
  <div class="pj-timeline__item pj-timeline__item--current"><div>Deploying to staging</div><span class="pj-timeline__time">09:16</span></div>
  <div class="pj-timeline__item"><div>Production</div><span class="pj-timeline__time">pending</span></div>
</div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Status indicators — always a dot plus a label</div>
  <div class="pj-demo__body">
    
<span class="pj-status pj-status--ok"><span class="pj-status__dot"></span>Healthy</span>
<span class="pj-status pj-status--warn"><span class="pj-status__dot"></span>Degraded</span>
<span class="pj-status pj-status--err"><span class="pj-status__dot"></span>Failed</span>
<span class="pj-status pj-status--idle"><span class="pj-status__dot"></span>Idle</span>

  </div>
</div>


<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Pair every status dot with a text label, so meaning does not depend on colour
perception.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Use a bare coloured dot, or rely on red/green alone to distinguish states.</p>
</div>
</div>


## Code and terminal

The code surface is always dark — see [Code](/brand/docs/interface/code/).

<div class="pj-demo"><div class="pj-demo__label">Terminal</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-terminal">
<span class="pj-terminal__prompt">$</span> tofu apply -auto-approve<br>
<span class="pj-terminal__out">Plan: 3 to add, 0 to change, 0 to destroy.</span><br>
<span class="pj-terminal__ok">✓</span> <span class="pj-terminal__out">Policy check passed</span><br>
<span class="pj-terminal__accent">●</span> <span class="pj-terminal__out">Deploying to staging…</span>
</div>

  </div>
</div>
