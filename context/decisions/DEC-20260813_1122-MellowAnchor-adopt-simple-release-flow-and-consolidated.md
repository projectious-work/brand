---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260813_1122-MellowAnchor-adopt-simple-release-flow-and-consolidated
  created: '2026-08-13T11:22:08+00:00'
spec:
  title: Adopt simple release flow and consolidated public brand authority
  state: accepted
  decision: Use short-lived reviewed branches merged to main, with main as the sole
    development and release line and gh-pages as generated deployment state. Treat
    src/data/brand.yaml and src/content/docs/ as the normative local brand sources,
    generate public discovery and MCP manifests from them, retain input/ only as designer-supplied
    upstream reference, and remove examples/ and spec/ entirely along with all build,
    verification, documentation, and deployment dependencies on those directories.
  context: The user accepted the complete plan for resolving GitHub issues 10-13 and
    explicitly added removal of examples/ and spec/. The former brand/ authority was
    already superseded and removed; the protected development branch has no unique
    resulting tree and no active parallel-major line exists.
  rationale: A single source contract prevents drift across documentation, AI discovery,
    token downloads, and MCP resources. A simple main-based release flow matches current
    maintenance needs. Removing examples/ and spec/ eliminates redundant surfaces
    that otherwise require synchronization and font/discovery support.
  alternatives:
  - option: Retain the two-tier development/main flow
    reason_rejected: No parallel major line exists and development has no unique resulting
      tree.
  - option: Restore brand/ as a second authority
    reason_rejected: It was explicitly superseded by the designer update and would
      recreate drift.
  - option: Keep examples/ and spec/ as compatibility surfaces
    reason_rejected: The owner explicitly requested their complete removal.
  consequences: CONTRIBUTING.md and release scripts must be updated; development protection
    must be removed before branch deletion; generated manifests must replace stale
    brand/ token assumptions; theme examples must no longer be built or deployed;
    all documentation links to examples/ and spec/ must be removed or redirected to
    authoritative src content; font, discovery, and MCP verification must operate
    without those trees.
  decided_at: '2026-08-13T11:22:08+00:00'
---
