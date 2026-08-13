---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260809_1120-FineStream-use-the-v2-semantic-import-path
  created: '2026-08-09T11:20:42+00:00'
spec:
  title: Use the v2 semantic import path for the Projectious Hugo module
  state: accepted
  decision: Publish the first-party Hugo theme from the root brand repository using
    module path github.com/projectious-work/brand/v2.
  context: 'PR #9 proposes distributing the theme as a Hugo module from the brand
    repository, which already publishes v2.x releases.'
  rationale: Go semantic import versioning requires the /v2 suffix for module releases
    at major version 2 and above.
  alternatives:
  - option: github.com/projectious-work/brand
    reason_rejected: Incompatible with v2 semantic import versioning.
  consequences: The specification and future go.mod/import examples must use github.com/projectious-work/brand/v2.
    Consumers must pin compatible v2 releases.
  decided_at: '2026-08-09T11:20:42+00:00'
---
