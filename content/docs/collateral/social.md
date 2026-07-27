---
title: Social and OG images
linkTitle: Social & OG
weight: 30
description: Templates for LinkedIn, GitHub, blog headers, and Open Graph cards.
---

## Priority

**LinkedIn and GitHub first**, blog second, Twitter/X as backup. The templates
are sized for those surfaces in that order.

## Template rules

- Backgrounds are **midnight or midnight-dark**, or white with an accent top
  bar.
- **`projectious.work` is always visible.**
- **Never place text over a busy background.**
- An accent glow circle at subtle opacity provides visual interest without
  competing with the text.
- Typography hierarchy is unchanged: Plus Jakarta Sans for headlines, Source
  Sans 3 for body.

## Open Graph

- 1200×630px.
- Headline at Display weight, capped at roughly 60 characters — longer headlines
  are truncated by most platforms anyway.
- The mark sits bottom-left or top-left, never centred.
- Test the rendering at 320px wide: most impressions are in a mobile timeline.

{{< rules >}}
{{% do %}}
Keep one message per card. Check contrast against the actual background, not the
design canvas.
{{% /do %}}
{{% dont %}}
Fill the card with a screenshot, use more than one accent element, or rely on
text smaller than 24px at 1200×630.
{{% /dont %}}
{{< /rules >}}
