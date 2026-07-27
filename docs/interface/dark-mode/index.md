# Dark mode

> Both modes are equally supported. The implementation rules that keep them in step.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

Dark mode is not a variant of the brand — it is half of it. Both modes are
designed, tested, and shipped together.

## Implementation rules

- **Default follows `prefers-color-scheme`**, with a manual override toggle
  persisted to `localStorage`.
- **CSS custom properties swap per theme.** Components read tokens; they do not
  branch on the mode themselves.
- **Step 9 (solid accent) stays constant across modes.** `#E05232` is `#E05232`
  everywhere.
- **No pure `#000` or `#fff` as text.** Use step 12 — `#c5daf0` on dark,
  `#142438` on light.
- **Images get a subtle overlay** (black at low alpha) in dark mode, so a bright
  photograph does not punch a hole in a dark page.
- **Code blocks are always dark**, regardless of mode. See
  [Code](/brand/docs/interface/code/).

## Surfaces

Elevation in dark mode is expressed by **lightening the surface**, not by
deepening the shadow — a shadow against a near-black background is invisible.

| Layer | Light | Dark |
|---|---|---|
| App background | `#ffffff` | `midnight-dark-1` `#0e1720` |
| Subtle surface | `midnight-1` | `midnight-dark-2` `#131e2b` |
| Raised surface | `midnight-2` | `midnight-dark-3` `#1a2b3e` |

## Restating text on dark surfaces

The default heading colour is `midnight-9`, chosen so headings read correctly on
light pages. That same value on a midnight surface is invisible — `#1d3352` on
`#1d3352` is a contrast ratio of **1.00:1**.

Any component that paints its own dark background must therefore restate its
text colours. This applies to covers, dark boxes, footers, and overlays:

```scss
.surface--dark {
  --bs-body-color: #c5daf0;    // midnight-dark-12
  --bs-heading-color: #c5daf0;
  --bs-secondary-color: #97a8b8; // slate-dark-11, still AA
}
```

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Test every surface in both modes. Restate text colours on any component that
sets its own dark background.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Ship a component that only works in one mode, or use pure black or white as a
text colour in either.</p>
</div>
</div>
