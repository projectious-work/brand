---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260801_0948-PluckyRobin-use-a-two-tier-git-flow
  created: '2026-08-01T09:48:56+00:00'
spec:
  title: Use a two-tier Git flow with development as the integration branch
  state: accepted
  decision: Keep main as the GitHub default and published, release-only branch. Use
    development as the protected shared integration branch. Create short-lived feat/*,
    fix/*, docs/*, and chore/* branches from development and squash-merge them into
    development. Promote releases through a merge-commit PR from development to main,
    tag and deploy from main, then merge main back into development. For urgent production
    fixes, branch fix/* from main, merge and release through main, then merge main
    back into development.
  context: The project needs a lightweight branching policy that keeps consumer-facing
    main stable while allowing ordinary feature work to integrate before releases.
  rationale: This flow limits permanent branches to main and development, preserves
    an auditable release boundary with merge commits, keeps feature history concise
    through squash merges, and provides a clear hotfix path without leaving branches
    divergent.
  alternatives:
  - option: Trunk-based development with main as the only long-lived branch
    rejected_because: It provides less explicit integration and release staging for
      this project.
  - option: Git Flow with long-lived release and hotfix branches
    rejected_because: It adds ceremony and persistent branch overhead beyond the project's
      lightweight needs.
  consequences: main and development must be protected against direct pushes, force
    pushes, and deletion. Ordinary pull requests target development by convention,
    while release pull requests target main. The release checklist must begin on main
    after promotion.
  decided_at: '2026-08-01T09:48:56+00:00'
---
