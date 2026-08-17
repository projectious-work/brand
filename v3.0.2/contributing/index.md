# Contributing

> Change the projectious.work design system without creating a second source of truth.


Contributions keep one principle intact: a rule is defined once, rendered in
the documentation, exported for consumers, and verified in every supported
appearance.

## Before changing anything

1. Identify whether the change affects identity, content, tokens, components,
   artifacts, governance, or delivery.
2. Read the relevant documentation and the generated-token source before
   editing a rendered output.
3. Check the changelog and maintenance guidance for compatibility constraints.
4. Separate design-system changes from theme implementation changes.

## Contribution workflow

```sh
git switch -c feat/describe-the-change
./scripts/serve-docs.sh
./scripts/verify.sh
```

Use Conventional Commits. Keep Markdown, YAML, and Python at 80 columns where
the format permits. A pull request must explain the rule being changed, name
the authoritative source, show the affected appearances, and include the
verification evidence.

## Definition of done

- Human-readable guidance and machine-readable values agree.
- Light, navy dark, and deep dark are reviewed.
- Accessibility settings compose without clipping or loss of meaning.
- Preview artifacts use semantic tokens rather than appearance-specific
  literals.
- Downloads and the brand manifest are regenerated.
- Provenance, licensing, and the SBOM are updated when dependencies change.
- Internal links, AI discovery, MCP resources, and contrast checks pass.

See [Maintenance](/docs/maintenance/) for sync and release work and
[Legal](/legal/) before contributing marks or third-party material.


---
Source: https://projectious-work.github.io/brand/v3.0.2/contributing/index.md
