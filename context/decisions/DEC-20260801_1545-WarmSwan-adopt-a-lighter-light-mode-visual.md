---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260801_1545-WarmSwan-adopt-a-lighter-light-mode-visual
  created: '2026-08-01T15:45:13+00:00'
  updated: '2026-08-01T15:45:18+00:00'
spec:
  title: Adopt a lighter light-mode visual system
  state: accepted
  decision: 'Use a light shell for projectious.work documentation: white or near-white
    navigation, landing surfaces, cards, and documentation chrome; reserve midnight
    for text, structural emphasis, the footer, code, and dark mode. Keep orange for
    primary actions and active emphasis.'
  rationale: The user approved the Porter-inspired direction to make the documentation
    feel lighter in light mode without changing the brand's core midnight and orange
    scales.
  alternatives:
  - option: Keep the permanent dark header and dark landing hero
    rejected: true
    reason: It makes light mode feel visually heavy.
  consequences: Update the site SCSS, the landing page, and all sections of the merged
    Themes/Hugo guide. Add matching Docsy and Hextra examples.
  decided_at: '2026-08-01T15:45:18+00:00'
---
