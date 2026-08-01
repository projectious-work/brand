# Contributing

This repository holds proprietary brand assets alongside MIT-licensed code/automation (see [`LICENSE.md`](./LICENSE.md)). Contributions are handled differently depending on which category they touch.

## Brand assets (`brand/`)

Changes to logos, color scales, typography specs, or license/trademark terms are proprietary to projectious.work. Open an issue describing the proposed change before submitting a PR — do not submit unsolicited redesigns.

## Code, tokens, and templates

Design tokens (`brand/tokens/`), document templates (`brand/templates/`), and any scripts/automation are MIT-licensed and open to PRs. Before submitting:

1. Open an issue describing the bug or change.
2. Keep PRs scoped to one concern.
3. If you add or modify an asset that depends on a third-party source (font, icon set, stock image), add an entry to [`brand/PROVENANCE.md`](./brand/PROVENANCE.md) with its source, license, and attribution requirement.

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

We use a lightweight two-tier flow:

```text
feat/*, fix/*, docs/*, chore/*
            | pull request + squash merge
            v
      development
            | release pull request + merge commit
            v
          main
            | tag + deploy
            v
        vX.Y.Z
```

- `main` is the published, release-only branch and remains GitHub's default
  branch for consumers. It requires pull requests; direct pushes, force
  pushes, and deletion are disabled.
- `development` is the protected shared integration branch. Ordinary work
  lands here through approved pull requests; direct pushes, force pushes,
  and deletion are disabled.
- Create short-lived branches from `development` for ordinary work, using
  `feat/*`, `fix/*`, `docs/*`, or `chore/*` (for example,
  `feat/42-provider-refresh`). Open those pull requests against
  `development`, squash-merge them, and delete the source branch.

For a release:

1. Confirm that `development` is green and contains every intended release
   change.
2. Open a pull request from `development` to `main` and merge it with a
   merge commit.
3. From `main`, run the established release process to tag and deploy the
   resulting `vX.Y.Z` release.
4. Merge `main` back into `development` after the release so the branches
   stay aligned.

For an urgent production fix, create `fix/*` from `main`, merge it into
`main` through a pull request, run the release process, then merge `main`
back into `development`.

The team convention is that ordinary feature pull requests use
`development` as their base branch; use `main` only for release and urgent
production-fix pull requests.

## Reporting issues

Use GitHub Issues for bugs, licensing questions, and asset requests. For security concerns, see [`SECURITY.md`](./SECURITY.md) instead of opening a public issue.
