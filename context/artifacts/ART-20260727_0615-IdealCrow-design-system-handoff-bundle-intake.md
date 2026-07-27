---
apiVersion: processkit.projectious.work/v2
kind: Artifact
metadata:
  id: ART-20260727_0615-IdealCrow-design-system-handoff-bundle-intake
  created: '2026-07-27T06:15:32+00:00'
spec:
  name: Design system handoff bundle intake copy
  kind: design
  location: git:design-system/design_handoff_projectious_brand/ (commit 95b54c7)
  format: mixed
  tags:
  - brand
  - source-input
  - conflict
  - tokens
  - provenance
  produced_at: '2026-07-27T06:15:32+00:00'
---

Full-sync export of the design system from a design tool (80 files: colors_and_type.css, logo assets, preview HTML cards, slide templates, JSX UI kits, screenshots). Verified byte-identical to the copy tracked in git at commit 95b54c7 under design-system/design_handoff_projectious_brand/, so it remains recoverable from history. NOTE: this bundle's README asserts it supersedes brand/tokens ("if the repo's existing tokens/variables.css or tokens.json disagree, the version in this bundle wins") and it disagrees on radii — bundle states sm 3 / md 4 / lg 6 / xl 9, whereas brand/tokens states sm 3 / md 6 / lg 9 / xl 13. brand/ was treated as authoritative per owner instruction; the Hugo site and data/brand.yaml follow brand/tokens. This conflict is unresolved and should be settled before v0.1.0 is tagged. Originally input/02_design-system/; deleted with input/ as a duplicate of tracked history.
