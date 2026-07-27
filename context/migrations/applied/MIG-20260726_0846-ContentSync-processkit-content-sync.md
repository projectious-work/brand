---
apiVersion: processkit.projectious.work/v1
kind: Migration
metadata:
  id: MIG-20260726_0846-ContentSync-processkit-content-sync
  created: 2026-07-26 08:46:15+00:00
  updated: '2026-07-26T19:29:58+00:00'
spec:
  source: processkit
  source_url: https://github.com/projectious-work/processkit.git
  from_version: v0.27.0
  to_version: v0.28.4
  state: applied
  generated_by: aibox apply
  generated_at: 2026-07-26 08:46:15+00:00
  summary: 0 changed upstream, 0 conflicts, 15 new, 0 removed, 0 stale-removed (3
    groups affected)
  affected_groups:
  - context/artifacts
  - skills/engineering
  - skills/processkit
  affected_files:
  - path: context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-6-flash.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-7-max.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-8-max-preview.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-google-gemini-3-6-flash.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-minimax-minimax-m3.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-moonshot-kimi-k3.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-openai-gpt-5-3-codex-spark.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-subquadratic-subq-1-1-small.md
    classification: new-upstream
  - path: context/artifacts/ART-20260503_1424-ModelSpec-xiaomi-mimo-7b.md
    classification: new-upstream
  - path: context/skills/engineering/git-branching/SKILL.md
    classification: new-upstream
  - path: context/skills/engineering/git-branching/references/strategies.md
    classification: new-upstream
  - path: context/skills/processkit/pk-doctor/scripts/test_pk_doctor_mcp.py
    classification: new-upstream
  - path: context/skills/processkit/project-reconciliation/SKILL.md
    classification: new-upstream
  - path: context/skills/processkit/project-reconciliation/commands/pk-reconcile.md
    classification: new-upstream
  - path: context/skills/processkit/repository-portfolio-review/SKILL.md
    classification: new-upstream
  started_at: '2026-07-26T19:29:58+00:00'
  applied_at: '2026-07-26T19:29:58+00:00'
  progress_notes:
  - timestamp: '2026-07-26T19:29:58+00:00'
    actor: mcp
    note: 'Applied after review: additive upstream processkit content with no conflicts
      or removals.'
---

# Migration MIG-20260726_0846-ContentSync-processkit-content-sync

From `v0.27.0` to `v0.28.4` (source: `https://github.com/projectious-work/processkit.git`).

0 changed upstream, 0 conflicts, 15 new, 0 removed, 0 stale-removed (3 groups affected)

## Counts

- unchanged: 707
- changed-locally-only: 0
- changed-upstream-only: 0
- conflict: 0
- new-upstream: 15
- removed-upstream: 0
- removed-upstream-stale: 0

## Changes by group

### context/artifacts

**new-upstream**

- `context/artifacts/ART-20260503_1424-ModelSpec-subquadratic-subq-1-1-small.md` → `context/artifacts/ART-20260503_1424-ModelSpec-subquadratic-subq-1-1-small.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-7-max.md` → `context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-7-max.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-6-flash.md` → `context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-6-flash.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-moonshot-kimi-k3.md` → `context/artifacts/ART-20260503_1424-ModelSpec-moonshot-kimi-k3.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-minimax-minimax-m3.md` → `context/artifacts/ART-20260503_1424-ModelSpec-minimax-minimax-m3.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-xiaomi-mimo-7b.md` → `context/artifacts/ART-20260503_1424-ModelSpec-xiaomi-mimo-7b.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-google-gemini-3-6-flash.md` → `context/artifacts/ART-20260503_1424-ModelSpec-google-gemini-3-6-flash.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-openai-gpt-5-3-codex-spark.md` → `context/artifacts/ART-20260503_1424-ModelSpec-openai-gpt-5-3-codex-spark.md`
- `context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-8-max-preview.md` → `context/artifacts/ART-20260503_1424-ModelSpec-alibaba-qwen3-8-max-preview.md`

### skills/engineering

**new-upstream**

- `context/skills/engineering/git-branching/references/strategies.md` → `context/skills/engineering/git-branching/references/strategies.md`
- `context/skills/engineering/git-branching/SKILL.md` → `context/skills/engineering/git-branching/SKILL.md`

### skills/processkit

**new-upstream**

- `context/skills/processkit/project-reconciliation/SKILL.md` → `context/skills/processkit/project-reconciliation/SKILL.md`
- `context/skills/processkit/project-reconciliation/commands/pk-reconcile.md` → `context/skills/processkit/project-reconciliation/commands/pk-reconcile.md`
- `context/skills/processkit/pk-doctor/scripts/test_pk_doctor_mcp.py` → `context/skills/processkit/pk-doctor/scripts/test_pk_doctor_mcp.py`
- `context/skills/processkit/repository-portfolio-review/SKILL.md` → `context/skills/processkit/repository-portfolio-review/SKILL.md`
