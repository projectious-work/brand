---
title: Implementations
linkTitle: Implementations
weight: 70
description: Reference implementations for product shells, documentation, terminals, and portable brand surfaces.
---

Implementations translate the same semantic system into environments with
different constraints. They do not create a separate palette or visual
language for each tool.

{{< cards >}}
  {{< card title="Hugo" subtitle="The supported v0.3.2 documentation theme, extension contract, outputs, and upgrade checks." link="/docs/themes/hugo/" >}}
  {{< card title="Terminal" subtitle="Shell, multiplexer, editor, and terminal chrome in both dark and light treatments." link="/docs/themes/terminal/" >}}
{{< /cards >}}

## Shared implementation rule

Start with semantic roles, preserve the three appearance contract where the
environment supports it, and document any platform limitation. A constrained
surface may expose fewer capabilities; it must not silently invent replacement
brand rules.

Web products use the
[`brand-theme-hugo-vanilla`](https://github.com/projectious-work/brand-theme-hugo-vanilla/)
reference implementation. Terminal and editor integrations use the dedicated
palette while keeping accent, status, syntax, and focus meanings consistent.
