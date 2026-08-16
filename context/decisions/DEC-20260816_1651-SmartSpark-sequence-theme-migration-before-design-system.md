---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260816_1651-SmartSpark-sequence-theme-migration-before-design-system
  created: '2026-08-16T16:51:54+00:00'
spec:
  title: Sequence theme migration before design-system content revision
  state: accepted
  decision: First migrate the existing documentation site from Docsy to brand-theme-hugo-vanilla
    v0.3.1 without revising its substantive content. After the migration is complete
    and verified, establish a separate goal to revise all content against the updated
    projectious.work Design System in input/.
  context: The final theme release and a heavily revised design-system input arrived
    together. Combining framework migration with substantive content revision would
    make preservation and regression evidence ambiguous.
  rationale: Separating the changes keeps the theme migration reviewable, proves that
    no existing content was lost, and preserves the updated input material as the
    authority for a subsequent content-specific goal.
  consequences: This work item may adapt Hugo markup and theme-facing presentation
    constructs but must not alter design-system meaning. The user will be prompted
    to create the content-revision goal after migration completion.
  related_workitems:
  - BACK-20260816_1651-SnappyMoon-migrate-brand-docs-hugo-theme
  decided_at: '2026-08-16T16:51:54+00:00'
---
