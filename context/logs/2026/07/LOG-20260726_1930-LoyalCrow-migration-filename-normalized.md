---
apiVersion: processkit.projectious.work/v2
kind: LogEntry
metadata:
  id: LOG-20260726_1930-LoyalCrow-migration-filename-normalized
  created: '2026-07-26T19:30:57+00:00'
spec:
  event_type: migration.filename-normalized
  timestamp: '2026-07-26T19:30:57+00:00'
  summary: 'Migration ID normalized: ''MIG-LOCK-20260519T214308'' → ''MIG-20260519_2143-LockBaseline'''
  subject: MIG-20260519_2143-LockBaseline
  subject_kind: Migration
  actor: processkit-migration-management
  details:
    old_id: MIG-LOCK-20260519T214308
    new_id: MIG-20260519_2143-LockBaseline
    updated_references:
    - context/migrations/INDEX.md
    preserved_history:
    - context/logs/2026/07/LOG-20260726_1929-FaithfulLake-migration-applied.md
    - context/logs/2026/07/LOG-20260726_1929-ResoluteDawn-migration-transitioned.md
---
