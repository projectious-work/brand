# Hugo theme migration notes

The documentation site is pinned to
`github.com/projectious-work/brand-theme-hugo-vanilla` v0.3.2. The site uses the theme's
Hugo-only build path (`params.build.tailwind: false`); Node and npm are not
part of the build.

## Site-owned extensions

The theme deliberately permits local shortcodes and assets. The brand site
keeps its design-system specimen shortcodes and SCSS local because they encode
brand-specific examples rather than reusable theme behaviour. This includes
paired Do/Don't guidance, rules, component specimens, syntax-scope tables, and
the paired dark/default and light/optional code examples.

The site appends its assets through the public hooks released in v0.3.2:

| Public hook | Site addition |
|---|---|---|
| `hooks/styles-end.html` | Hugo-compiles `scss/specimens.scss` after the theme CSS |
| `hooks/scripts-end.html` | Loads the progressive `color-swatches.js` enhancer |

The extension point was requested in
[brand-theme-hugo-vanilla#35](https://github.com/projectious-work/brand-theme-hugo-vanilla/issues/35)
and resolved by v0.3.2. No internal asset-pipeline partial is overridden.

## Public theme API used

- Hugo module import pinned by `go.mod` and `go.sum`.
- Public semantic tokens and Hugo-only component, syntax, and font layers.
- The `cards`, `card`, `button`, and `callout` shortcodes.
- SearchIndex, Print, Markdown, RSS, and standard HTML outputs.
- The public `script.html` partial for fingerprinted local JavaScript.
- Site-local shortcodes for domain-specific brand specimens.

## Compatibility contract

Migration verification preserves all 46 Markdown sources, all 44 documentation
HTML routes, all 44 documentation Markdown routes, all 11 section-print routes,
and all 260 rendered heading IDs. The only removed public files are Docsy,
Bootstrap, Font Awesome, jQuery, and Lunr runtime assets that no page references
after migration. The replacement adds the theme's FlexSearch index.

The full verification command is:

```sh
./scripts/verify.sh
```

It covers generated token parity, font and manifest integrity, the Hugo build,
AI discovery outputs, the brand MCP protocol, contrast in both colour modes,
and internal links.
