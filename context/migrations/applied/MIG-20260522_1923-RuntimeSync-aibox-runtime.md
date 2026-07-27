---
apiVersion: processkit.projectious.work/v1
kind: Migration
metadata:
  id: MIG-20260522_1923-RuntimeSync-aibox-runtime
  created: 2026-05-22 19:23:17+00:00
  updated: '2026-07-26T19:29:58+00:00'
spec:
  source: aibox-runtime-home
  source_url: aibox://runtime-home
  from_version: 0.27.2
  to_version: 0.27.2
  state: rejected
  generated_by: aibox apply
  generated_at: 2026-05-22 19:23:17+00:00
  summary: 0 changed upstream, 0 conflicts, 0 new, 1 removed (1 groups affected)
  affected_groups:
  - runtime-lazygit
  affected_files:
  - path: .config/lazygit/config.yml
    classification: removed-upstream
  rejected_reason: 'Rejected per pk-doctor migration_integrity.same-version-with-content:
    from_version equals to_version but affected content is non-empty, indicating the
    documented empty-baseline diff-generator defect.'
  rejected_at: '2026-07-26T19:29:58+00:00'
---

# Migration MIG-20260522_1923-RuntimeSync-aibox-runtime

Managed `.aibox-home/` runtime changes from `0.27.2` to `0.27.2`.

0 changed upstream, 0 conflicts, 0 new, 1 removed (1 groups affected)

## Counts

- unchanged: 42
- changed-locally-only: 0
- changed-upstream-only: 0
- conflict: 0
- new-upstream: 0
- removed-upstream: 1

- removed-upstream-stale: 0

## Changes by group

### runtime-lazygit

**removed-upstream**

- `.aibox-home/.config/lazygit/config.yml` -> `.aibox-home/.config/lazygit/config.yml`
