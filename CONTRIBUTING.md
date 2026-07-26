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

## Reporting issues

Use GitHub Issues for bugs, licensing questions, and asset requests. For security concerns, see [`SECURITY.md`](./SECURITY.md) instead of opening a public issue.
