# Diagrams and demos

> Evidence-first architecture, flow, screenshot, and demo framing.


## Architecture and flow diagrams

- Prefer left-to-right flow, explicit boundaries, and named protocols.
- Distinguish implemented components from planned components with text:
  **implemented**, **external**, or **planned**.
- Add a caption with repository, source path, commit or release, and capture
  date.
- Never infer architecture from a social preview or marketing page.
- Keep editable source beside the export and document the export command.

Suggested caption:

> Source: `owner/repository`, `docs/architecture.svg`, release `vX.Y.Z`,
> captured YYYY-MM-DD. Planned elements are labelled.

## The three diagram types

"Prefer diagrams over photographs" is only useful if the diagrams exist.
Consulting deliverables need three, and they answer different questions:

| Type | Answers | Shape |
|---|---|---|
| **Sequence** | *When* — what happens, in what order, between whom | Actors across the top, lifelines down, labelled messages between them |
| **Architecture** | *Where* — what runs, and on whose infrastructure | A control plane above, deployment targets below, connected by plain rules |
| **Org chart** | *Who* — who owns the work, and who they answer to | One root, a rule, direct reports beneath |

The supplied **UI mockups and component previews** show these rules in context,
built from the brand tokens.

The drawing rules are the same in all three, and they are deliberately spare:

- **Lines, not arrows, unless direction is the point.** A sequence diagram's
  messages are directional and get an arrowhead. An architecture diagram's
  connections usually are not — a 1px `slate-5` rule says "connected" without
  claiming a flow that may not exist.
- **One accent per diagram, at most.** The accent marks the focal node — the
  thing the surrounding paragraph is about. A diagram where three nodes are
  orange has no focus.
- **Boxes carry a fill or a border, never both plus a shadow.** Solid
  `midnight-9` for the emphasised node, `surface-2` with a `slate-5` border for
  the rest.
- **Labels are 12–13px and horizontal.** No rotated text. A diagram whose labels
  need a head-tilt is a diagram that needed a different layout.
- **Monospace for anything that is an identifier** — a service name, a region, a
  hostname — and the body face for anything that is prose.

An org chart names **roles**, and names people only with their agreement. The
[portfolio identity rules](/docs/portfolio/) apply: a chart is a
public artefact, and a person's name in one is a disclosure about them.

## Screenshots and demos

- Show real output from a named build, commit, or release.
- Frame the output without modifying product state or hiding errors.
- State sample/synthetic data clearly.
- Do not fabricate dashboards, terminal output, customer logos, or product UI.
- Crop personal data, tokens, account identifiers, and unrelated windows.
- Record capture command, viewport, theme, and date in provenance.

When there is no real output yet, use a text-first project card labelled
**Idea / implementation starting**. A truthful absence is better than a
fictional interface.


---
Source: https://projectious-work.github.io/brand/v3.0.2/docs/portfolio/diagrams/index.md
