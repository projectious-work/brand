---
title: Diagrams and demos
weight: 30
description: Evidence-first architecture, flow, screenshot, and demo framing.
---

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
