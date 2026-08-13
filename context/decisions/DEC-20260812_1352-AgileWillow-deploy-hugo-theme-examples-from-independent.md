---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260812_1352-AgileWillow-deploy-hugo-theme-examples-from-independent
  created: '2026-08-12T13:52:58+00:00'
spec:
  title: Deploy Hugo theme examples from independent repositories
  state: accepted
  decision: Maintain the Docsy, Hextra, and first-party Projectious theme examples
    in separate GitHub repositories, each with its own fully functional GitHub Pages
    deployment. Keep descriptions and links to those deployments in the brand documentation
    under Documentation → Themes.
  context: The current brand repository assembles example sites as static output beneath
    /examples/. The owner concluded that these should instead be independently deployable
    reference implementations.
  rationale: Separate repositories make each example a genuine consumer with its own
    dependency, build, deployment, upgrade, and operational contract rather than a
    static artifact embedded in the brand documentation build.
  alternatives:
  - option: Continue publishing static example builds beneath the brand documentation
      site
    reason_rejected: Does not demonstrate independent, fully functional consumer deployments
      and couples unrelated example lifecycles to the brand site.
  consequences: Remove example-site build/staging loops and published /examples/*
    assumptions from the brand repository. Replace internal example links with external
    deployment URLs once known. Preserve theme guidance and the reusable first-party
    theme module here unless separately relocated. Transfer complete kitchen-sink
    requirements and validation to the new first-party example repository.
  decided_at: '2026-08-12T13:52:58+00:00'
---
