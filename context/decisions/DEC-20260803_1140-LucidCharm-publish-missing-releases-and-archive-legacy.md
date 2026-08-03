---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260803_1140-LucidCharm-publish-missing-releases-and-archive-legacy
  created: '2026-08-03T11:40:17+00:00'
spec:
  title: Publish missing releases and archive legacy briefings
  state: accepted
  decision: Publish GitHub Releases for v2.0.0, v2.0.1, and v2.0.2; archive the three
    root-level migration briefing files; retain the synthetic tmp fixtures unchanged.
  rationale: The user explicitly approved all remaining warnings except synthetic
    tmp content they just added.
  consequences: Release records become public on GitHub; historical briefing files
    are moved out of the migration lifecycle root; tmp sensitive-data warnings remain
    intentionally unresolved.
  decided_at: '2026-08-03T11:40:17+00:00'
---
