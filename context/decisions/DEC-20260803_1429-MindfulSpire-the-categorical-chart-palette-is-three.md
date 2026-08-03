---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260803_1429-MindfulSpire-the-categorical-chart-palette-is-three
  created: '2026-08-03T14:29:46+00:00'
spec:
  title: The categorical chart palette is three series, not six
  state: accepted
  decision: The data-visualisation section added to `foundations/color` documents
    a **three-colour** categorical palette — `midnight-9`, `orange-9`, `slate-9` —
    and explicitly refuses a fourth. The briefing that prompted the work proposed
    six colours, adding the step-6 tier of each family; that half is not adopted.
  context: The external brand-portfolio review recommended `--midnight-9, --orange-9,
    --slate-9, --midnight-6, --orange-6, --slate-6` for up to six categories, on the
    correct principle that a chart palette should introduce no new colours. Measuring
    the proposal against the surfaces it would actually be used on showed the second
    tier does not work.
  rationale: |
    Measured, not assumed:

    - `midnight-6` (#b0c1d6) against `slate-6` (#bec2c8) is **1.03:1** — the same colour for practical purposes. They cannot be two categories.
    - All three step-6 values sit at **1.79–2.02:1** against a white plot area, below the 3:1 WCAG non-text-contrast floor for a mark the reader has to see.
    - No alternative second tier survives either: `slate-8` is 2.87:1 on white, and `orange-8` (#d86e4e) is close enough to `orange-9` in luminance that they read as one series.

    The three step-9 solids all clear 3:1 (12.75, 3.87, 5.58) and come from three different families. Where more than three categories exist, the page prescribes grouping the tail, small multiples, direct labelling with one highlight, or a single-colour ranked bar — which are better answers than a fourth hue would have been.

    The section also records that `orange-9` against `slate-9` is only **1.44:1**: distinguishable by hue on screen, and safe for the common colour-vision deficiencies, but merged in greyscale. Two-series comparisons therefore use midnight and orange (3.29:1), and every series is direct-labelled.

    Sequential scales use one family's steps 3–8, which step evenly (1.06–1.40x per neighbour). Step 9 is excluded from that ramp: it is 3.87x darker than step 8, a jump the eye reads as a category boundary rather than one more level.
  alternatives:
  - option: Adopt the briefing's six-colour palette as written
    rejected_because: Two of the six are indistinguishable from each other and three
      of the six are invisible against the plot background. Publishing it would put
      a measured failure into a system whose colour page is otherwise built on measured
      contrast.
  - option: Add new tokens for a proper categorical palette
    rejected_because: 'The briefing''s own constraint, and the right one: a chart
      palette should be a rule about existing steps, not a fifth scale. Three families
      is what the system has.'
  - option: Extend to five using the step-8 tier
    rejected_because: slate-8 is 2.87:1 on white and orange-8 is too close to orange-9
      in luminance. A five-colour palette where two pairs are marginal is worse than
      a three-colour one with a documented escape hatch.
  consequences: |
    No new tokens; `src/data/brand.yaml` is unchanged, so the briefing's open question about promoting the chart palette to a first-class token is answered in the negative.

    Consumers with genuinely more than three categories are pushed toward chart forms rather than colours, which is a larger ask than picking a fourth hex and should be expected to attract pushback.

    If a future product surface needs a true categorical palette beyond three, it needs new measured tokens and a superseding decision — not an extension of these three.
  related_workitems:
  - BACK-20260803_1153-TrustyGarnet-execute-brand-portfolio-gap-briefing
  decided_at: '2026-08-03T14:29:46+00:00'
---
