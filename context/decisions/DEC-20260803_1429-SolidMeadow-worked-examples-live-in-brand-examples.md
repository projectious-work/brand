---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260803_1429-SolidMeadow-worked-examples-live-in-brand-examples
  created: '2026-08-03T14:29:24+00:00'
spec:
  title: Worked examples live in brand/examples and vendor their runtime dependencies
  state: accepted
  decision: The seven worked example documents delivered by the brand-portfolio review
    are stored canonically in `brand/examples/` and mounted by `src/hugo.yaml` to
    `static/downloads/examples`, alongside the existing `brand/logo` and `brand/tokens`
    mounts. Every third-party runtime dependency they carried is vendored into the
    repository rather than fetched from a CDN at page load.
  context: The examples are `.dc.html` "design component" documents from an external
    tooling ecosystem. As delivered they pulled React, ReactDOM and @babel/standalone
    from unpkg.com via the dc-runtime, and Lucide icons from `lucide-static@latest`.
    The repository already vendors jQuery and lunr rather than using CDNs, with an
    explicit comment in `src/hugo.yaml` that the site must not depend on third-party
    hosts being reachable at page load. `lucide-static@latest` additionally lets an
    upstream release silently change a committed document.
  rationale: |
    Storing the canonical copies under `brand/` and mounting them matches the arrangement already used for logo and token downloads, so there is one copy of each asset and one rule for where brand assets live. Vendoring keeps the examples reproducible and offline-viewable, and pinning Lucide makes the committed documents stable.

    React and ReactDOM 18.3.1 UMD are vendored to `lib/vendor/`; their sha384 digests match the Subresource Integrity values already compiled into the runtime, so the vendored bytes are provably the pinned upstream builds. They are loaded as plain `<script>` tags before the runtime, which short-circuits its CDN loader.

    Babel is not vendored — at ~3 MB it is a build-time tool, not a runtime dependency. `ios-frame.jsx` is precompiled to `ios-frame.js` by `scripts/build-examples.sh`, so no example requests an in-browser JSX transform.
  alternatives:
  - option: Set window.__resources to redirect the runtime's CDN URLs to local copies
    rejected_because: 'This was implemented first and silently broke rendering. __resources
      is a mode flag, not just a URL map: support.js uses `if (!window.__resources)`
      to gate a re-fetch of the page source that repairs templates the browser''s
      HTML parser mangles — notably <sc-for> inside <tbody>. Setting it emptied the
      dashboard''s engagement table. Preloading React directly achieves the same offline
      goal with no behavioural side effect.'
  - option: Leave the CDN URLs in place, since they are version-pinned with SRI
    rejected_because: Contradicts the stated repository policy for jQuery and lunr,
      and leaves the examples unviewable offline or behind a restrictive network.
  - option: Vendor @babel/standalone too
    rejected_because: ~3 MB of build tooling committed to a brand repository to serve
      one example. Precompiling the .jsx removes the need entirely.
  - option: Duplicate the examples under src/static/
    rejected_because: Would create a second copy of the logo and token assets they
      reference, which the existing mount arrangement exists specifically to avoid.
  consequences: |
    The published examples make no third-party request except the Google Fonts stylesheet, which the documentation site already loads from the same host.

    `brand/examples/lib/colors_and_type.css` is a deliberate mirror of the canonical tokens, needed so a single example file stays portable. It is documented as non-authoritative in both the file header and the README; it had already drifted on radius, status hues, muted text and dark-mode tag foregrounds, and those were corrected against `brand/tokens/variables.css` and `src/assets/scss/_scales.scss`. Any future token change must be applied there as well, and there is no automated check tying the two together yet.

    `scripts/build-examples.sh` must be run after editing `ios-frame.jsx`; the compiled output is committed and marked do-not-hand-edit.

    `scripts/check-links.mjs` now skips targets containing `{{`, because the example markup contains runtime template bindings in href/src attributes.
  related_workitems:
  - BACK-20260803_1153-TrustyGarnet-execute-brand-portfolio-gap-briefing
  decided_at: '2026-08-03T14:29:24+00:00'
---
