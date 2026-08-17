# Social previews

> Repository artwork that states category and maturity plainly.


## Content model

Every 1280×640 preview contains only:

1. projectious.work organisation mark and name.
2. Project name.
3. One narrow artifact category.
4. One complete maturity label from the status vocabulary.
5. An optional short limitation, never a marketing claim.

Keep the status label intact and save a project-specific SVG beside its source.
Examples demonstrate the content structure; they are not evidence of current
maturity.

## Export and validation

Run:

```sh
bash scripts/validate-portfolio-assets.sh
bash scripts/export-portfolio-assets.sh
```

The export script uses `resvg` when available and otherwise leaves the SVG
source as the canonical reusable asset. Commit generated PNGs only when a
repository needs them.

Source and generated exports use this repository's split license. The
projectious.work name and marks remain subject to the trademark terms. Record
any third-party typeface, icon, logo, or screenshot in the provenance inventory
before use. The supplied templates contain no third-party logos or
screenshots.


---
Source: https://projectious-work.github.io/brand/v3.0.2/docs/portfolio/social-previews/index.md
