# Space, shape, and motion

> The 4px spacing base, the radius and elevation ladders, and the motion tokens.

---

LLMS index: [llms.txt](/brand/v2.0.0/llms.txt)

---

## Spacing

A 4px base with a nine-step scale. Every margin, padding, and gap resolves to
one of these values.

| Token | Value | Typical use |
|---|---|---|
| `--space-1` | 4px | Icon-to-label gaps |
| `--space-2` | 8px | Tight component padding |
| `--space-3` | 12px | Control padding |
| `--space-4` | 16px | Default element spacing |
| `--space-5` | 24px | Card padding, paragraph rhythm |
| `--space-6` | 32px | Component separation |
| `--space-7` | 48px | Sub-section separation |
| `--space-8` | 64px | Section separation |
| `--space-9` | 96px | Page-level bands |

Content sits inside a **1100px measure**. Wider viewports gain margin, not
line length.

## Radius

| Token | Value | Applied to |
|---|---|---|
| `--radius-sm` | 3px | Tags, chips, small indicators |
| `--radius-md` | 6px | Buttons, inputs, code blocks |
| `--radius-lg` | 9px | Cards, panels |
| `--radius-xl` | 13px | Large panels, modals |
| `--radius-full` | 9999px | Pills, avatars |

Radius is a signal of scale: the larger the surface, the larger the radius.
Mixing radii on nested surfaces reads as a mistake — a 6px control inside a 9px
card is correct; a 13px control inside a 6px card is not.

## Elevation

Four levels. Shadows are soft and low-contrast; the system leans on borders and
surface tint before it reaches for shadow.

| Token | Value | Applied to |
|---|---|---|
| `--shadow-0` | `none` | Flat surfaces, default |
| `--shadow-1` | `0 1px 3px rgba(0,0,0,0.06)` | Cards at rest |
| `--shadow-2` | `0 4px 12px rgba(0,0,0,0.08)` | Hover, dropdowns |
| `--shadow-3` | `0 8px 24px rgba(0,0,0,0.12)` | Modals, popovers |

In dark mode, elevation is expressed by *lightening the surface* rather than
deepening the shadow — a shadow on a near-black background is invisible.

## Motion

Things slide into place. They do not bounce.

### Durations

| Token | Value | Use |
|---|---|---|
| `--duration-micro` | 100ms | Colour and opacity changes |
| `--duration-standard` | 200ms | Hover, focus, small moves |
| `--duration-expand` | 300ms | Height and width changes, accordions |
| `--duration-page` | 400ms | Route and view transitions |

### Easing

| Token | Value | Use |
|---|---|---|
| `--ease-out` | `cubic-bezier(0.33, 1, 0.68, 1)` | Entering — arriving on screen |
| `--ease-in` | `cubic-bezier(0.32, 0, 0.67, 0)` | Exiting — leaving screen |

<div class="pj-demo"><div class="pj-demo__label">Radius ladder — 3 / 6 / 9 / 13 / full</div>
  <div class="pj-demo__body">
    
<div class="pj-demo-item"><span style="width:56px;height:40px;background:var(--pj-midnight-9);border-radius:3px;display:block"></span><span class="pj-cap">sm 3px</span></div>
<div class="pj-demo-item"><span style="width:56px;height:40px;background:var(--pj-midnight-9);border-radius:6px;display:block"></span><span class="pj-cap">md 6px</span></div>
<div class="pj-demo-item"><span style="width:56px;height:40px;background:var(--pj-midnight-9);border-radius:9px;display:block"></span><span class="pj-cap">lg 9px</span></div>
<div class="pj-demo-item"><span style="width:56px;height:40px;background:var(--pj-midnight-9);border-radius:13px;display:block"></span><span class="pj-cap">xl 13px</span></div>
<div class="pj-demo-item"><span style="width:56px;height:40px;background:var(--pj-midnight-9);border-radius:9999px;display:block"></span><span class="pj-cap">full</span></div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Elevation — shadow-0 through shadow-3</div>
  <div class="pj-demo__body">
    
<div class="pj-demo-item"><span style="width:72px;height:48px;background:var(--pj-surface);border:1px solid var(--pj-border);border-radius:9px;display:block"></span><span class="pj-cap">shadow-0</span></div>
<div class="pj-demo-item"><span style="width:72px;height:48px;background:var(--pj-surface);border-radius:9px;box-shadow:0 1px 3px rgba(0,0,0,.06);display:block"></span><span class="pj-cap">shadow-1</span></div>
<div class="pj-demo-item"><span style="width:72px;height:48px;background:var(--pj-surface);border-radius:9px;box-shadow:0 4px 12px rgba(0,0,0,.08);display:block"></span><span class="pj-cap">shadow-2</span></div>
<div class="pj-demo-item"><span style="width:72px;height:48px;background:var(--pj-surface);border-radius:9px;box-shadow:0 8px 24px rgba(0,0,0,.12);display:block"></span><span class="pj-cap">shadow-3</span></div>

  </div>
</div>


<div class="pj-demo"><div class="pj-demo__label">Motion — slides into place, never bounces</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div class="pj-motion"><span class="pj-motion__box pj-motion__box--slide"></span><span>200ms · ease-out — entering</span></div>
<div class="pj-motion" style="margin-top:.75rem"><span class="pj-motion__box pj-motion__box--fade"></span><span>100ms · colour and opacity</span></div>

  </div>
</div>


### Motion rules

- All animation wraps in `@media (prefers-reduced-motion: no-preference)`, or is
  disabled under `prefers-reduced-motion: reduce`.
- CSS-only for HTML. For React, use Framer Motion with these same timing values.
- **Never animate text character-by-character.**
- Page transitions cap at 400ms.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Use <code>--ease-out</code> for anything appearing and <code>--ease-in</code> for anything leaving.
Keep durations on the ladder.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Add spring or bounce easing, animate layout-shifting properties, or exceed 400ms
for any single transition.</p>
</div>
</div>
