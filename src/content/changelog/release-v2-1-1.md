---
title: v2.1.1 — release and deployment corrections
linkTitle: v2.1.1 — release and deployment corrections
description: Theme examples and release deployment now behave consistently.
date: 2026-08-04
changes:
  - kind: Added
    text: Moved the Hextra colour-mode control into the header.
  - kind: Fixed
    text: Replaced broken Markdown button attributes in both theme examples.
  - kind: Fixed
    text: Published versioned documentation in one race-free deployment.
---

## Added

- Added the Hextra example's colour-mode control to its header, alongside the
  search field and GitHub link.

## Fixed

- Replaced literal Goldmark button attributes with the shared `pj-action`
  shortcode in the Hextra and Docsy examples.
- Changed documentation deployment to publish archived versions and the latest
  site in one commit and push, avoiding a GitHub Pages race.

See the repository [change log](https://github.com/projectious-work/brand/blob/main/CHANGELOG.md)
for the complete notes.
