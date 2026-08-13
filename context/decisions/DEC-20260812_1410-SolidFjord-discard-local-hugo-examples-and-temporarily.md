---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260812_1410-SolidFjord-discard-local-hugo-examples-and-temporarily
  created: '2026-08-12T14:10:01+00:00'
spec:
  title: Discard local Hugo examples and temporarily preserve only Hugo documentation
  state: accepted
  decision: Remove the local Docsy, Hextra, and first-party Projectious example sites
    without planning or scaffolding transfers. Remove their brand-repository build,
    serve, and publication integration. Move the current Documentation → Themes →
    Hugo page verbatim to a temporary Markdown file in the repository root and remove
    that page from the documentation tree. Leave all other Documentation → Themes
    pages unchanged.
  context: The owner will recreate independently deployed examples from scratch later
    because the brand design has evolved.
  rationale: Retaining or transferring the current examples would preserve obsolete
    design and implementation assumptions. A temporary copy of the Hugo guidance is
    the only reusable material requested.
  alternatives:
  - option: Transfer or scaffold the existing examples into new repositories
    reason_rejected: The examples will be recreated from scratch against the evolved
      brand design.
  consequences: No local example sites or /examples/* publication paths remain. The
    Hugo page temporarily disappears from the documentation navigation. The reusable
    first-party theme module remains unless separately removed.
  decided_at: '2026-08-12T14:10:01+00:00'
---
