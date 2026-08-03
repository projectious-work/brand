---
apiVersion: processkit.projectious.work/v1
kind: Migration
metadata:
  id: MIG-20260801_1554-ContentSync-processkit-content-sync
  created: 2026-08-01 15:54:48+00:00
  updated: '2026-08-03T11:37:10+00:00'
spec:
  source: processkit
  source_url: https://github.com/projectious-work/processkit.git
  from_version: v0.28.4
  to_version: v0.28.5
  state: applied
  generated_by: aibox apply
  generated_at: 2026-08-01 15:54:48+00:00
  summary: 1 changed upstream, 0 conflicts, 0 new, 0 removed, 0 stale-removed (1 groups
    affected)
  affected_groups:
  - AGENTS
  affected_files:
  - path: AGENTS.md
    classification: changed-upstream-only
  started_at: '2026-08-03T11:37:10+00:00'
  applied_at: '2026-08-03T11:37:10+00:00'
  progress_notes:
  - timestamp: '2026-08-03T11:37:10+00:00'
    actor: mcp
    note: Applied user-requested, conflict-free upstream AGENTS.md sync (v0.28.4 →
      v0.28.5).
---

# Migration MIG-20260801_1554-ContentSync-processkit-content-sync

From `v0.28.4` to `v0.28.5` (source: `https://github.com/projectious-work/processkit.git`).

1 changed upstream, 0 conflicts, 0 new, 0 removed, 0 stale-removed (1 groups affected)

## Counts

- unchanged: 721
- changed-locally-only: 0
- changed-upstream-only: 1
- conflict: 0
- new-upstream: 0
- removed-upstream: 0
- removed-upstream-stale: 0

## Changes by group

### AGENTS

**changed-upstream-only**

- `AGENTS.md` → `AGENTS.md`
