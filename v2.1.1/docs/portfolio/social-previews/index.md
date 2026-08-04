# Social previews

> Repository artwork that states category and maturity plainly.

---

LLMS index: [llms.txt](/brand/v2.1.1/llms.txt)

---

## Content model

Every 1280×640 preview contains only:

1. Projectious organization mark and name.
2. Project name.
3. One narrow artifact category.
4. One complete maturity label from the status vocabulary.
5. An optional short limitation, never a marketing claim.

The editable source is
`brand/portfolio/social-preview-template.svg`. Replace bracketed text, keep
the status label intact, and save a project-specific SVG beside the template.
Examples for aibox, processkit, ai-market-research, and KubeClaw demonstrate
the content structure; they are not evidence of current maturity.

## Export and validation

Run:

```sh
npm run portfolio:validate
npm run portfolio:export
```

The export script uses `resvg` when available and otherwise leaves the SVG
source as the canonical reusable asset. Commit generated PNGs only when a
repository needs them.

Source and generated exports use this repository's split license. The
Projectious name and marks remain subject to `TRADEMARK.md`. Record any
third-party typeface, icon, logo, or screenshot in `brand/PROVENANCE.md`
before use. The supplied templates contain no third-party logos or
screenshots.
