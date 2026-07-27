---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260727_0705-LoyalDew-brand-is-authoritative-the-design-system
  created: '2026-07-27T07:05:27+00:00'
spec:
  title: brand/ is authoritative; the design-system handoff bundle is superseded
  state: accepted
  decision: brand/ is the single authoritative source for all design values. The design-system
    handoff bundle (design_handoff_projectious_brand) is superseded and its claim
    to override brand/tokens is rejected. Where the two disagree — notably radii,
    where the bundle states sm 3 / md 4 / lg 6 / xl 9 against brand/tokens' sm 3 /
    md 6 / lg 9 / xl 13 — brand/tokens wins. The bundle is removed from the working
    tree and remains recoverable from git history at 8849fd2.
  context: 'The handoff bundle''s README asserted precedence over the repository:
    "if the repo''s existing tokens/variables.css or tokens.json disagree, the version
    in this bundle wins". That conflicted with brand/, which LICENSE.md scopes as
    the proprietary asset boundary and which PROVENANCE.md inventories. The Hugo site,
    data/brand.yaml, and the published documentation had already been built against
    brand/tokens, so the unresolved conflict was flagged before tagging v0.1.0. Resolved
    by the repository owner in favour of brand/.'
  rationale: 'brand/ is load-bearing in ways the bundle is not: LICENSE.md defines
    the proprietary/MIT split by that path, PROVENANCE.md inventories it per-asset,
    and src/hugo.yaml mounts ../brand/tokens and ../brand/logo so the published site
    renders directly from it. A design-tool export asserting precedence over the licensed,
    inventoried, and rendered source would invert that relationship and leave the
    licence boundary pointing at a non-authoritative tree. Keeping one authority also
    removes the standing risk of the two radius ladders diverging further.'
  alternatives:
  - option: Adopt the bundle's radius values
    rejected_because: Would require rewriting brand/tokens, data/brand.yaml, the SCSS,
      and the published documentation to follow a design-tool export that is not the
      licensed or inventoried source.
  - option: Keep both and reconcile per-value
    rejected_because: Leaves two competing authorities in the repository and guarantees
      future drift; the point of the ruling is to have one.
  consequences: The radius ladder documented on the site (sm 3 / md 6 / lg 9 / xl
    13) stands and needs no correction. data/brand.yaml and src/assets/scss remain
    correct as built. design-system/ is gone from the working tree; anyone needing
    it must recover it from git history at 8849fd2. The corresponding intake Artifact
    records the conflict and its resolution. v0.1.0 is now unblocked.
  decided_at: '2026-07-27T07:05:27+00:00'
---
