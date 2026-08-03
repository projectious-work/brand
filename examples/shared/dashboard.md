---
title: Dashboard mockup
linkTitle: Dashboard
weight: 20
description: The composed dashboard pattern, rendered by this theme.
---

A whole application screen, built only from components this theme already
renders elsewhere. It is the worked example behind the brand's
[composed patterns](https://projectious-work.github.io/brand/docs/interface/patterns/)
page: a page shell, a KPI row, and a primary/secondary split.

This page is mounted from `examples/shared/dashboard.md` into **both** the Docsy
and the Hextra example, and the specimen itself is one shortcode shared with the
documentation site. Any difference between the two examples is therefore a
difference between the themes.

{{< pj-dashboard >}}

## What it is made of

Nothing on this page is a dashboard-specific component. Every element appears on
the [kitchen sink](../kitchen-sink/) in its own right:

| Region | Components |
|---|---|
| Sidebar | `pj-sidebar` items, the current one marked by weight and a left rule |
| Header | Page title, one line of context, and **one** accent action |
| KPI row | Four `pj-stat` cards — value, overline label, delta |
| Primary panel | `pj-table-shell` with its toolbar, filter chip, and a scrolling `pj-table` |
| Secondary panel | A `pj-card` holding a `pj-timeline` of recent events |

The accent appears exactly once, on the header action. The status column pairs
every colour with a word, so the state never depends on colour perception.

## How it behaves as the viewport narrows

The layout collapses at the brand's own breakpoints rather than wherever the
panels stop fitting:

| Width | Sidebar | KPI row | Split |
|---|---|---|---|
| Below 768px | A horizontal strip above the content | Wraps to the columns that fit | One column, table first |
| 768px and up | Still a strip | Four across | Two equal columns |
| 1024px and up | A 180px column on the left | Four across | 1.5fr / 1fr |

Regions are in the DOM in reading order, so the collapse needs no reordering —
which is what keeps the keyboard path and the visual order the same at every
width.

The table scrolls inside its own container rather than widening the page. On a
phone that is the difference between a readable screen and a horizontal scroll
bar on the whole document.

## Checking it

At 390px, confirm the sidebar strip scrolls rather than wrapping, the KPI cards
stay readable, and the table scrolls inside its panel. At 1440px, confirm the
split holds its ratio and the header action is the only accent element. Repeat
in dark mode.
