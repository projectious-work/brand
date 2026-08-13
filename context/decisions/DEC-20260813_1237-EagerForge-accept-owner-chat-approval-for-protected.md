---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260813_1237-EagerForge-accept-owner-chat-approval-for-protected
  created: '2026-08-13T12:37:14+00:00'
spec:
  title: Accept owner chat approval for protected merges
  state: accepted
  decision: Keep pull requests, squash-only merging, linear history, resolved conversations,
    and force-push/deletion protection on main, but do not require a GitHub approving
    review. An explicit project-owner approval in the active agent conversation may
    authorize the agent to merge the prepared pull request.
  context: 'The repository has one operating owner identity, so GitHub cannot record
    an independent approving review on a pull request opened by that same identity.
    The required-review gate prevented execution even after the owner explicitly approved
    PR #14 in chat.'
  rationale: This preserves reviewable PR artifacts and all non-review safety gates
    while allowing the owner-agent workflow to complete without bypassing branch protection.
  alternatives:
  - option: Require GitHub approval
    reason_rejected: The same owner identity opens the PR and cannot approve its own
      pull request.
  - option: Use admin merge bypass
    reason_rejected: That would bypass rather than correctly configure the intended
      policy.
  consequences: CONTRIBUTING.md must describe chat approval as an accepted authorization
    path. GitHub main protection will retain PR requirements with zero required approving
    reviews.
  decided_at: '2026-08-13T12:37:14+00:00'
---
