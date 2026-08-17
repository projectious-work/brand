---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260817_1353-HumbleBrook-release-brand-v3-0-0-with
  created: '2026-08-17T13:53:21+00:00'
spec:
  title: Release Brand v3.0.0 with new Hugo theme and company standards
  state: accepted
  decision: Cut Brand v3.0.0 from origin/main, including the projectious.work Hugo
    theme migration and adopted company engineering standards, after all release audits
    and verification gates pass.
  context: 'The latest stable Brand release is v2.1.1. The Hugo theme migration was
    integrated by PR #16 and the company standards by PR #17. The user explicitly
    requested the next major release.'
  rationale: The theme migration materially changes the documentation-site presentation
    and release baseline, making a major version appropriate. origin/main contains
    both accepted changes and is the stable release-integration branch.
  alternatives:
  - option: Release v2.2.0
    reason: Rejected because the user explicitly requested a major release and the
      site-theme migration is a substantial product-level change.
  - option: Release from feat/hugo-theme-v0.3.1
    reason: Rejected because stable releases must be cut from main, which already
      contains the same site tree plus the standards.
  decided_at: '2026-08-17T13:53:21+00:00'
---
