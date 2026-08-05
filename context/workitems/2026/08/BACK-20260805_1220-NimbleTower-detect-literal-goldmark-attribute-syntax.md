---
apiVersion: processkit.projectious.work/v2
kind: WorkItem
metadata:
  id: BACK-20260805_1220-NimbleTower-detect-literal-goldmark-attribute-syntax
  created: '2026-08-05T12:20:28+00:00'
spec:
  title: Fail the build on Goldmark attribute syntax that renders as literal text
  state: backlog
  type: task
  priority: medium
  description: |
    `[Primary action](https://example.com/){.hx-button .hx-button-primary}` shipped to the published site and rendered the braces as visible text. The same bug was on a second page in the Docsy example. Both had been live since v2.0.0 and were found by the user reading the site, not by any check.

    The cause: attaching a class to a markdown *link* needs Goldmark's inline attribute support, which Hugo does not enable. Only `parser.attribute.block` and `.title` are on, which is why `{.lead .display-6}` on its own line works and the inline form does not.

    Nothing in `scripts/verify.sh` catches it. The check is cheap: walk the built HTML in `public/`, strip `<script>`, `<style>`, `<pre>` and `<code>` the way `check-links.mjs` already does, and fail on a text node matching roughly `\{\.[A-Za-z][\w-]*(\s+\.[\w-]+)*\}`. Documentation pages that legitimately *discuss* the syntax need an escape hatch — the existing exclusions for code blocks probably cover it, since such prose is normally in backticks.

    `scripts/check-links.mjs` is the natural home; it already walks every built page and has the strip logic.
---
