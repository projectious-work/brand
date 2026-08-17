# Maintenance

> Synchronize, audit, release, and recover the projectious.work design system without drift.


## Sources and ownership

Human guidance, structured token data, generated downloads, theme assets, and
preview artifacts must not become competing authorities. Change the owning
source, regenerate its outputs, and verify the rendered documentation in the
same pull request.

## Routine maintenance

1. Review upstream design-system inputs and their sync notes.
2. Diff named tokens, appearance overrides, assets, and normative prose.
3. Update structured sources before generated CSS or JSON.
4. Rebuild every download and machine-readable manifest.
5. Exercise light, navy dark, deep dark, and accessibility settings.
6. Run the full repository verification and inspect the browser output.
7. Record breaking changes and migration steps in the changelog.

## Audit invariants

- Only steps 11 and 12 are used for text.
- Step 9 is never body text.
- Every semantic tint carries its matching foreground.
- Every status has a non-colour channel.
- Component CSS contains no undocumented colour or scrim literals.
- Code and terminal surfaces remain distinct.
- Print uses fixed light-context tokens rather than the active screen theme.
- Preview cards resolve from semantic tokens in all three appearances.

## Version and release chain

The latest documentation is served from the site root. Released snapshots are
kept under versioned paths so external links remain stable. Prepare version
metadata and migration notes on a release branch, merge after review, then use
the repository release script to tag, archive, and publish.

## Recovery

If generated material and its source disagree, stop publishing. Restore parity
from the owning source, rerun verification, and document the affected releases.
Do not repair a public download by hand.


---
Source: https://projectious-work.github.io/brand/docs/maintenance/index.md
