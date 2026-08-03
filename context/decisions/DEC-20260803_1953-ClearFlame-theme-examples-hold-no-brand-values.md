---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260803_1953-ClearFlame-theme-examples-hold-no-brand-values
  created: '2026-08-03T19:53:05+00:00'
spec:
  title: Theme examples hold no brand values and override no theme templates
  state: accepted
  decision: Both reference implementations under `examples/` derive every colour by
    reference — Docsy from the mounted `_scales.scss` SCSS variables, Hextra from
    the generated `brand/tokens/variables.css` mounted as `css/brand-tokens.css`.
    Neither overrides a theme template; both extend only through the documented configuration
    and hook points their theme provides. Shared content (`kitchen-sink.md`, `dashboard.md`)
    and shared shortcodes (`pj-action`, `pj-form`, `pj-dashboard`, `demo`) are mounted
    from one source into both.
  context: |
    The examples exist to prove the brand survives contact with two very different Hugo themes, so anything that differs between them should be a difference between the themes rather than between two divergent copies of the brand. They were not meeting that standard:

    Each carried its own hand-copied semantic layer of roughly 60 hex literals. Four of the semantic tints in each were values the brand does not define (`#f9e3e1`, `#18382d`, `#3d1e13`, `#3a1d20` against the brand's `#fce8e8`, `#16302a`, `#33280d`, `#3a1c19`), and both navbars were at 85% alpha against the documentation site's 88%. The Hextra adapter also hardcoded the navbar specimen's link colours to beat `.content a` specificity, so when the navbar specimen changed from a midnight bar to a mode-following one, the example kept painting it for the old design — and that was the last contrast failure in the suite.

    Both footers set a light-blue foreground in both modes, which on the light footer fill was light-on-light.

    A 60-line script moved Hextra's theme toggle from the sidebar into the navbar, leaving the empty white sticky strip it had been sitting in visible on every page.

    Content files carried raw HTML: a full Bootstrap card grid, a form, and hand-written anchors with classes on them.
  rationale: |
    Reference by name is the only arrangement that cannot drift. The four wrong tints are the evidence: nothing detected them because nothing compared them to anything.

    The `*-light-N` / `*-dark-N` fixed ramps added to the token export exist for exactly this case. Hextra's colour mode is the `html.dark` class, while `variables.css` swaps `--midnight-N` on `prefers-color-scheme`; mapping the fixed ramps explicitly keeps the theme's own toggle authoritative instead of fighting it.

    Not overriding templates is the sharper constraint, and it resolved the theme-toggle question against visual parity: the most idiomatic thing is to let Hextra place its own control, which deletes the script, the CSS that hid the sidebar copy, and the empty strip all at once. Where a theme genuinely supports what is wanted — Docsy's `ui.navbar_logo`, Hextra's `params.navbar.logo` — configuration reaches it with no override at all, which is how the mark got into both navbars.

    Shared shortcodes rather than per-example markup follow from the same premise. `pj-action` renders the brand's own accent button in both, so the review fixtures differ only where the themes do; previously Docsy used `btn btn-primary` and Hextra a bespoke `.pj-primary-action`, which is two answers to one question.
  alternatives:
  - option: Override Hextra's navbar.html to place the theme toggle beside the search
    rejected_because: Makes ~100 lines of theme markup this project's to maintain
      across every Hextra upgrade, to move one control. The example is meant to demonstrate
      living inside a theme's extension points.
  - option: Keep the copied hex literals but add a check comparing them to the brand
    rejected_because: A check that compares two copies is worth less than not having
      two copies. Reference by name removes the failure mode instead of detecting
      it.
  - option: Give each example its own dashboard page
    rejected_because: Two implementations of the same mockup would diverge, and the
      page's whole claim is that a difference between the examples is a difference
      between the themes.
  - option: Use each theme's native callout in place of pj-callout
    rejected_because: Hextra's built-in callout styles itself with Tailwind utilities
      and exposes no stable class hook, so its tints cannot be rebound to the brand.
      Docsy's alert is used natively, because it can be. This asymmetry is documented
      rather than papered over.
  consequences: |
    The examples now depend on `brand/tokens/variables.css` being generated and committed. `scripts/check-tokens.sh` covers that.

    Moving the `.projectious-mark` fill rules into `_demo.scss` was required by this: they had lived in the documentation site's own stylesheet, which the examples do not mount, so enabling Docsy's navbar logo rendered the mark as a solid black blob until they moved to the shared layer.

    Hextra's `assets/js/toc-active.js` is kept. It is additive, uses the documented `custom/head-end.html` hook, and fixes a real gap in the theme's scroll-spy rather than restyling anything — a different category from the toggle-moving script that was removed.

    The examples' asset caches (`resources/`) must be cleared when a mounted source changes, or Hugo serves a stale compile. This cost real debugging time and is not currently automated.

    Visual parity with the documentation site is now measured, not asserted: heading sizes, body colour, and navbar alpha match at 1440px and 390px.
  related_workitems:
  - BACK-20260803_1153-TrustyGarnet-execute-brand-portfolio-gap-briefing
  decided_at: '2026-08-03T19:53:05+00:00'
---
