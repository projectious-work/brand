---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260809_1151-ArtfulTide-implement-the-first-party-projectious-hugo
  created: '2026-08-09T11:51:19+00:00'
spec:
  title: Implement the first-party Projectious Hugo theme in seven phases
  state: accepted
  decision: 'Implement the merged Hugo theme specification through the accepted dependency-ordered
    plan: module foundation; base presentation and modes; authoring API; search and
    outputs; Hugo documentation; complete projectious-theme kitchen sink; validation
    and release evidence.'
  context: 'PR #9 has merged and the owner explicitly accepted the implementation
    plan, including a first-party documentation section above Docsy and a complete
    example under /examples/projectious-theme/.'
  rationale: The phased sequence keeps the example buildable, makes dependencies explicit,
    and turns the specification into independently verifiable deliverables.
  alternatives:
  - option: Implement all requirements in one undivided change
    reason_rejected: Would make review, validation, and regression isolation substantially
      harder.
  consequences: Implementation begins with the root github.com/projectious-work/brand/v2
    Hugo module and minimal consumer. Each phase must satisfy its acceptance gates
    before release.
  decided_at: '2026-08-09T11:51:19+00:00'
---
