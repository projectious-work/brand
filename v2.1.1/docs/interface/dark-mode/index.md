# Dark mode

> Both modes are equally supported. The implementation rules that keep them in step.

---

LLMS index: [llms.txt](/brand/v2.1.1/llms.txt)

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
  [Code](/brand/v2.1.1/docs/interface/code/).

<div class="pj-demo"><div class="pj-demo__label">The same card in both modes</div>
  <div class="pj-demo__body pj-demo__body--grid">
    
<div style="background:#ffffff;border:1px solid #dadce0;border-radius:9px;padding:1rem">
  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:.9375rem;color:#1d3352">Light mode</div>
  <div style="font-size:.8125rem;color:#5c6f82;margin-top:.25rem">Body text is midnight-12; supporting copy is slate-11.</div>
  <div style="margin-top:.625rem"><span style="background:#cc4528;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:.75rem;font-weight:600;padding:.3125rem .75rem;border-radius:6px">Deploy</span></div>
</div>
<div style="background:#131e2b;border:1px solid rgba(255,255,255,.08);border-radius:9px;padding:1rem">
  <div style="font-family:'Plus Jakarta Sans',sans-serif;font-weight:600;font-size:.9375rem;color:#c5daf0">Dark mode</div>
  <div style="font-size:.8125rem;color:#97a8b8;margin-top:.25rem">Never pure white — midnight-12 from the dark scale.</div>
  <div style="margin-top:.625rem"><span style="background:#cc4528;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:.75rem;font-weight:600;padding:.3125rem .75rem;border-radius:6px">Deploy</span></div>
</div>

  </div>
</div>


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
