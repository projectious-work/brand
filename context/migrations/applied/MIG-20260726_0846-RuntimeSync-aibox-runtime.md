---
apiVersion: processkit.projectious.work/v1
kind: Migration
metadata:
  id: MIG-20260726_0846-RuntimeSync-aibox-runtime
  created: 2026-07-26 08:46:15+00:00
  updated: '2026-07-26T19:29:58+00:00'
spec:
  source: aibox-runtime-home
  source_url: aibox://runtime-home
  from_version: 0.27.2
  to_version: 0.28.13
  state: applied
  generated_by: aibox apply
  generated_at: 2026-07-26 08:46:15+00:00
  summary: 0 changed upstream, 0 conflicts, 1 new, 0 removed (1 groups affected)
  affected_groups:
  - runtime-git
  affected_files:
  - path: .config/git/aibox-github.inc
    classification: new-upstream
  started_at: '2026-07-26T19:29:58+00:00'
  applied_at: '2026-07-26T19:29:58+00:00'
  progress_notes:
  - timestamp: '2026-07-26T19:29:58+00:00'
    actor: mcp
    note: 'Applied after review: one additive runtime Git configuration file, no conflicts
      or removals.'
---

# Migration MIG-20260726_0846-RuntimeSync-aibox-runtime

Managed `.aibox-home/` runtime changes from `0.27.2` to `0.28.13`.

0 changed upstream, 0 conflicts, 1 new, 0 removed (1 groups affected)

## Counts

- unchanged: 42
- changed-locally-only: 0
- changed-upstream-only: 0
- conflict: 0
- new-upstream: 1
- removed-upstream: 0

- removed-upstream-stale: 0

## Changes by group

### runtime-git

**new-upstream**

- `.aibox-home/.config/git/aibox-github.inc` -> `.aibox-home/.config/git/aibox-github.inc`
