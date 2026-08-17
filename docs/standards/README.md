# Company engineering standards

This directory contains the company standards applicable to the Brand product.
They are imported from the projectious.work company coordination repository so
the requirements that govern this repository are available beside the product.

Importing a standard records applicability; it does not claim that every
requirement is already implemented. Gaps remain visible until they are either
remediated or recorded as explicit, reviewed exceptions.

## Brand application profile

Brand is a composite product with these profiles:

- **Primary — documentation or website:** the rendered brand guide and its
  public documentation, discovery, accessibility, and release surfaces.
- **Secondary — library or SDK:** versioned design tokens, styles, assets,
  templates, and the Hugo module consumed by other products.
- **Secondary — schema, protocol, or process package:** generated manifests,
  machine-readable token contracts, and the read-only Brand MCP surface.
- **Conditional overlay — host-gated release:** applies when signing,
  publication, deployment, or native-host verification is intentionally kept
  outside the development environment.

Runtime configuration and application-logging requirements are not generally
applicable to the static documentation product. They apply only to executable
components whose behavior activates those requirements.

## Selected standards

The following standards directly govern Brand:

- [Open-source documentation strategy](open-source-documentation-strategy.md)
- [Git branching and release promotion](git-branching-and-release-promotion.md)
- [Software verification and release engineering](software-verification-and-release-engineering.md)
- [Application profiles](application-profiles.md)
- [Product roadmap and development evidence](product-roadmap-and-development-evidence.md)
- [Human-controlled host-phase execution](human-controlled-host-phase-execution.md)

The following linked standards and conformance assets are included because the
selected standards depend on them and Brand already publishes machine-readable
assets, generative-discovery surfaces, and an MCP server:

- [AI-agent accessibility and generative discovery](ai-agent-accessibility-and-generative-discovery.md)
- [Compatibility and machine interfaces](compatibility-and-machine-interfaces.md)
- [Security and software supply chain](security-and-software-supply-chain.md)
- [Host-gated release conformance](host-gated-release-conformance.md)
- [Host-gated release handover schema](schemas/host-gated-release-handover-v1.schema.json)

## Maintenance

Company-standard updates should be reviewed as product-contract changes. Keep
local project-specific implementation guidance outside these imported files,
and record deviations in a separate applicability or conformance document.
