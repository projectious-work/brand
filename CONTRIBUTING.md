# Contributing

This repository holds proprietary brand assets alongside MIT-licensed code/automation (see [`LICENSE.md`](./LICENSE.md)). Contributions are handled differently depending on which category they touch.

## Brand authority (`src/`)

Changes to logos, colour scales, typography specifications, or
licence/trademark terms are proprietary to projectious.work. The normative
human documentation is under `src/content/docs/`; structured values live in
`src/data/brand.yaml`. Open an issue before submitting a change—do not submit
unsolicited redesigns.

## Code, tokens, and templates

Generated token downloads (`src/static/downloads/tokens/`) and scripts are
MIT-licensed and open to PRs. Before submitting:

1. Open an issue describing the bug or change.
2. Keep PRs scoped to one concern.
3. If an asset depends on a third-party source, update the public provenance
   documentation with its source, licence, version, and hashes.

## Git identity

Commits to this repository should use the canonical project identity:

```
Projectious <info@projectious.work>
```

Set it per-repo before committing:

```
git config user.name "Projectious"
git config user.email "info@projectious.work"
```

Contributions from individuals should still be attributable via the PR/commit metadata on the hosting platform (e.g., GitHub co-author trailers); the canonical identity is for commits made on behalf of the project itself.

## Branching and deployment

We use a simple maintenance flow:

```text
feat/*, fix/*, docs/*, chore/*, release/*
            | reviewed pull request + squash merge
            v
          main
            | verify + SemVer tag + GitHub Release
            v
        gh-pages
```

- `main` is the sole development and release line and GitHub's default branch.
  Changes land through squash-merged pull requests. Approval may be recorded
  on GitHub or given explicitly by the project owner in the active agent
  conversation. Force pushes and deletion are disabled.
- Create short-lived branches from `main` for ordinary work, using
  `feat/*`, `fix/*`, `docs/*`, or `chore/*` (for example,
  `feat/42-provider-refresh`). Open those pull requests against
  `main`, squash-merge them, and delete the source branch.

For a release:

1. Prepare version metadata and the changelog on `release/vX.Y.Z`.
2. Review and squash-merge that branch into `main`.
3. From a clean, synchronized `main`, run the release script to verify, tag,
   create the GitHub Release, archive the version, and publish the latest site.

`gh-pages` contains generated deployment output only. It is not a development
or promotion branch. There is no host CI gate; `./scripts/verify.sh` is run
locally before merge and release.

## Reporting issues

Use GitHub Issues for bugs, licensing questions, and asset requests. For security concerns, see [`SECURITY.md`](./SECURITY.md) instead of opening a public issue.
