---
apiVersion: processkit.projectious.work/v2
kind: DecisionRecord
metadata:
  id: DEC-20260727_0630-GrandHaven-relocate-hugo-site-source-to-src
  created: '2026-07-27T06:30:27+00:00'
spec:
  title: Relocate Hugo site source to src/ and retire the input/ intake directory
  state: accepted
  decision: Move all Hugo build source (hugo.yaml, content/, assets/, layouts/, data/,
    static/, themes/, package.json, package-lock.json) into src/. Keep brand/ and
    scripts/ at the repository root. Delete input/ after recording its four bundles
    as Artifacts and preserving the two unique research files into brand/research/.
    Build output continues to land in public/ at the repository root.
  context: 'Ahead of the v0.1.0 release the repository root had accumulated nine Hugo-related
    entries alongside brand assets, governance documents, and agent configuration,
    making the project''s shape hard to read. Separately, input/ held 3.0 MB of untracked
    intake material of mixed provenance: an original copy of the brand package, the
    design-system handoff bundle, a theme-explorer research component, and a brand
    due-diligence scan. Decided by the repository owner.'
  rationale: 'Hugo permits parent-directory paths in module mount sources, verified
    empirically before committing to the layout, so src/hugo.yaml can still mount
    ../brand/tokens and ../brand/logo. brand/ therefore remains the single source
    of truth and its assets are mounted rather than duplicated. scripts/ stays at
    the root because it is the user-facing entry point documented in the README. Build
    output stays at the root so the deploy script and the screenshot capture need
    no knowledge of the source layout. On input/: 01_brand was verified a duplicate
    of brand/ (differing only by in-repo edits) and 02_design-system byte-identical
    to tracked git history, so both were safely removable; 03_theme-explorer and 04_brand-due-diligence
    existed nowhere else and were preserved into brand/research/ rather than lost,
    since input/ was untracked and deletion would have been unrecoverable.'
  alternatives:
  - option: Move scripts/ into src/ as well
    rejected_because: scripts/ are user-facing entry points documented in the README
      as ./scripts/build-docs.sh; nesting them buys little additional tidiness and
      lengthens every invocation.
  - option: Record input/ in processkit only and delete the raw files
    rejected_because: 03_theme-explorer (1,990 lines of researched theme data) and
      the due-diligence scan exist nowhere else; a description cannot substitute for
      the material, and input/ was untracked so deletion was unrecoverable.
  - option: Duplicate brand/tokens and brand/logo into src/static
    rejected_because: Would create a second copy of authoritative assets that could
      drift from brand/; Hugo's parent-path mounts make duplication unnecessary.
  consequences: Repository root drops from nine Hugo entries to two directories (src/,
    scripts/) plus brand/ and governance files. Build, serve, deploy, and portfolio
    scripts were updated to resolve the repository root from BASH_SOURCE, so they
    now work from any working directory rather than assuming cwd is the root. src/package.json
    script paths become ../scripts/. The Docsy submodule path in .gitmodules becomes
    src/themes/docsy, so existing clones need `git submodule sync`. The design-system
    handoff bundle's claim to supersede brand/tokens — it disagrees on radii, stating
    md 4 / lg 6 / xl 9 against brand/tokens' md 6 / lg 9 / xl 13 — remains unresolved
    and is recorded on the corresponding Artifact; it should be settled before v0.1.0
    is tagged.
  decided_at: '2026-07-27T06:30:27+00:00'
---
