---
apiVersion: processkit.projectious.work/v2
kind: WorkItem
metadata:
  id: BACK-20260805_1220-BuoyantHorizon-clear-example-hugo-resources-cache
  created: '2026-08-05T12:20:16+00:00'
spec:
  title: Clear the theme examples' Hugo resources cache as part of the build
  state: backlog
  type: task
  priority: medium
  description: |
    `examples/hugo-docsy/resources/` and `examples/hugo-hextra/resources/` hold Hugo's compiled-asset cache. When a mounted source changes — `src/assets/scss/*`, `brand/tokens/variables.css`, an example's own `custom.css` — Hugo can serve a stale compile, and `--gc` does not reliably clear it.

    This cost real debugging time twice in the v2.1.0 session. In one case a CSS change appeared not to apply at all and the cause looked like a specificity problem; in another the `brand-tokens.css` `<link>` was silently absent from the built page. Both were resolved by `rm -rf examples/hugo-*/resources` and rebuilding.

    Options, roughly in order of preference:
    - Have `scripts/build-docs.sh` remove the example resources directories before invoking each example's build.
    - Or have each `examples/*/scripts/build.sh` do it for itself.
    - Or, if there is a reason to keep the cache, document the failure mode and the manual remedy in both example READMEs.

    The cache directories are gitignored, so removing them costs only build time.
---
