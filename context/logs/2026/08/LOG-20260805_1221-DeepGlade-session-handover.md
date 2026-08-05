---
apiVersion: processkit.projectious.work/v2
kind: LogEntry
metadata:
  id: LOG-20260805_1221-DeepGlade-session-handover
  created: '2026-08-05T12:21:08+00:00'
spec:
  event_type: session.handover
  timestamp: '2026-08-05T12:21:08+00:00'
  summary: Session handover — brand-portfolio gap briefing executed, token exports
    regenerated, theme examples rebuilt; v2.1.0 and v2.1.1 released and live
  actor: claude-opus-5
  details:
    session_date: '2026-08-04'
    current_state: 'Clean and shipped. main is at fc8a5b5 (release: v2.1.1), in sync
      with origin, working tree clean. Two releases were cut this session: v2.1.0
      (the bulk of the work) and v2.1.1 (three follow-up fixes). Both are tagged,
      pushed, deployed, and verified live — all six archived versions from /v1.0.0/
      through /v2.1.1/ return 200, and the site root serves v2.1.1. scripts/verify.sh
      passes all seven checks. GitHub release notes exist for every release; v2.0.0/v2.0.1/v2.0.2
      were backfilled from auto-generated stubs. No work items are open in any non-terminal
      state.'
    open_threads:
    - BACK-20260805_1220-BuoyantHorizon — clear the theme examples' Hugo resources
      cache as part of the build. Stale caches silently served old CSS twice this
      session and both times looked like a specificity bug. Backlog.
    - BACK-20260805_1220-NimbleTower — fail the build on Goldmark attribute syntax
      that renders as literal text. `{.hx-button .hx-button-primary}` shipped to the
      published site and was found by the user, not by a check. Backlog.
    - scripts/deploy-docs.sh now builds and stages each version in turn, because build-docs.sh
      passes --cleanDestinationDir and would otherwise delete the archive build when
      the root is built into public/. That ordering is load-bearing, commented in
      both scripts, and enforced by nothing. It has been exercised once successfully
      (v2.1.1).
    - brand/examples/lib/colors_and_type.css is a deliberate mirror of the canonical
      tokens so a single example file stays portable. It had already drifted once
      (radius ladder, status hues, muted text below AA). check-tokens.sh does NOT
      cover it — only brand/tokens/* and brand.yaml against _scales.scss.
    - 'A pre-existing stash exists from an unrelated branch: stash@{0} ''On agent/sync-aibox-processkit-content:
      codex-preserve-before-docs-theme-branding-guidance''. Not created this session;
      left untouched.'
    - Playwright system libraries and Go were installed into this container so verify.sh
      could run in full. Both are environment state, not committed — a fresh container
      will need them again for the contrast audits and the Hextra module build.
    next_recommended_action: 'Nothing is blocked and nothing is half-finished, so
      pick up BACK-20260805_1220-NimbleTower first: add the literal-attribute check
      to scripts/check-links.mjs. It is small, it closes the one defect class this
      session shipped to production, and check-links.mjs already walks every built
      page with the right strip logic for script/style/pre/code. BACK-20260805_1220-BuoyantHorizon
      is the natural companion and touches the same build scripts.'
    branch: main
    commit: fc8a5b5
    behavioral_retrospective:
    - Claimed visual parity from a partial property probe. After matching h1 size,
      body colour and navbar background I reported the examples as matching the main
      site; the user then found the navbar font-family was wrong in both. Fixed by
      probing a full property set per element and diffing programmatically rather
      than sampling. Encoded as a habit, not a file — the parity script now lives
      in the session's scratch only.
    - Measured one page and generalised. I confirmed the Hextra table-of-contents
      stepped at 30.4px on the kitchen-sink page and called it done; the user found
      it still wrong elsewhere. Measuring across several pages exposed that EVERY
      entry wrapped on the review page. Root cause was not spacing at all — the example
      was rendering in the system fallback face because an @import was dropped by
      Hextra's CSS bundling.
    - Trusted computed styles over rendered pixels. The Hextra navbar reported the
      correct --pj-navbar value while a separate theme layer painted pure white over
      it. Only sampling actual pixel colours found it. Same class of error as the
      dc-runtime bug earlier in the session, where window.__resources resolved correctly
      but silently disabled a template-repair pass and emptied a table.
    - 'Trusted a deploy''s success output instead of the live artifact. release.sh
      reported both pushes successful and GitHub reported both deployments successful,
      but the site root served the previous release for hours. The user found it.
      Root cause filed and fixed: two pushes seconds apart is a race Pages does not
      win, so deploy-docs.sh now does one commit and one push. Also learned that an
      empty commit will not retrigger Pages — it skips identical trees — and POST
      /repos/{owner}/{repo}/pages/builds is the way to force a build.'
    - Ran commands from the wrong working directory twice after a cd inside a compound
      block, and both times a build silently did not run while the grep for errors
      returned nothing. Compound commands should be prefixed with an absolute cd or
      use absolute paths.
    - Two follow-ups were noted only in a decision record's consequences section and
      would have been lost. They are now WorkItems BACK-20260805_1220-BuoyantHorizon
      and BACK-20260805_1220-NimbleTower.
---
