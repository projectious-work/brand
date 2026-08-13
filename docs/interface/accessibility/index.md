# Accessibility

> Keyboard order, skip links, focus management across composed layouts, and the ARIA the component set requires.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

Accessibility appears throughout this system as measurements — contrast ratios
on [Colour](/brand/docs/foundations/color/), the 44px touch floor on
[Responsive](/brand/docs/foundations/responsive/), the focus trap on
modals. This page covers what those cannot: **order, announcement, and focus**
— the properties that only exist once components are composed into a screen.

The target is **WCAG 2.2 Level AA**.

## Opt-in accessibility settings

The token sheet changes nothing until an attribute is set on `<html>`. New work
should expose and persist the settings it supports; `data-a11y="auto"` follows
the operating system's reduced-motion, reduced-transparency, and contrast
preferences.

| Attribute | Value | Effect |
|---|---|---|
| `data-font-size` | `lg`, `xl`, `xxl`, `xxxl` | 112.5%, 125%, 150%, or 200% type through one shared scale |
| `data-contrast` | `high` | Stronger text and border roles in both modes |
| `data-focus` | `strong` | Conforming 2px midnight ring with 2px offset |
| `data-link-underline` | `on` | Underlines links in running text; `.link-plain` opts out |
| `data-motion` | `reduced` | Near-zero transitions and animation |
| `data-transparency` | `reduced` | Removes backdrop blur and solidifies the scrim |
| `data-text-spacing` | `loose` | WCAG 1.4.12 diagnostic spacing, not the house style |
| `data-theme` | `light`, `dark` | Pins the colour mode |

Use `.sr-only` for an accessible name, `.sr-only-focusable` for content that
reveals on focus, `.skip-link` for the first control, `.target` for the 44px hit
floor, and `.measure` for the 65ch reading width.

## Reading and focus order

There is one order, and the DOM defines it. Keyboard order, screen-reader order,
and visual order must agree.

That makes source order a **layout constraint**, not a detail: write regions in
the order they should be read, and let CSS place them. The
[page shell](/brand/docs/interface/patterns/) is therefore authored as
skip link → header → sidebar → main → complementary, and Grid puts the sidebar
on the left.

**Never use `order`, `row-reverse`, or `grid-area` to change the sequence a
reader encounters.** It moves the pixels and leaves the keyboard behind, which
is exactly the bug that a
[stacked mobile layout](/brand/docs/foundations/responsive/) exposes:
if the DOM is already in reading order, the collapse to one column is free.

**Never set a positive `tabindex`.** `tabindex="0"` puts an element in the
natural order and `tabindex="-1"` makes it programmatically focusable; anything
above zero creates a second, competing order.

## Skip links

Every page begins with a skip link — the first focusable element in the DOM,
visually hidden until focused, then rendered as a normal control against the
midnight header.

One skip link per major landmark the keyboard would otherwise have to traverse.
For the page shell that is two: **Skip to content** and **Skip to navigation**.
A sidebar of thirty items in front of the content is thirty tab stops on every
single page.

```html
<a class="pj-skip" href="#main">Skip to content</a>
<a class="pj-skip" href="#nav">Skip to navigation</a>
```

```css
.pj-skip {
  position: absolute;
  left: var(--space-4);
  top: calc(-1 * var(--space-9));      /* off-screen, still focusable */
  z-index: 100;
  padding: var(--space-2) var(--space-4);
  min-height: 44px;
  background: var(--color-primary);
  color: #fff;
  border-radius: var(--radius-md);
  transition: top var(--duration-standard) var(--ease-out);
}
.pj-skip:focus { top: var(--space-4); }
```

The target must be able to receive focus: `<main id="main" tabindex="-1">`.
Without it, some browsers move the viewport but leave focus at the top of the
document, and the next `Tab` lands back in the navigation.

## Landmarks

The page shell maps onto landmarks one-to-one. Use the elements, not `role`
attributes on `div`s:

| Region | Element | Notes |
|---|---|---|
| Sidebar | `<nav aria-label="Sections">` | The label distinguishes it from any other `nav` |
| Header | `<header>` | The page title inside it is the `<h1>` |
| Content | `<main id="main" tabindex="-1">` | Exactly one per page |
| Secondary panel | `<aside aria-labelledby="…">` | Points at the panel's own heading |
| Footer | `<footer>` | |

Two `nav` elements on a page need two different `aria-label`s. An unlabelled
pair is announced as "navigation, navigation".

Headings are a real hierarchy, not a type ramp: one `<h1>` per page, no skipped
levels. If a heading is the wrong size, restyle it — do not renumber it.

## Focus visibility

Focus is **always** visible. The system never sets `outline: none` without
replacing it with something at least as loud.

The base focus ring is intentionally quiet and measures only about 1.2:1. It is
not conforming on its own. New work sets `data-focus="strong"`, which draws a
**2px `midnight-9` (`#1d3352`) outline at 2px offset** and clears 8.59:1. Draw
it with `:focus-visible` so a mouse click does not leave a ring behind while
keyboard focus still does.

<div class="pj-demo"><div class="pj-demo__label">Strong focus ring — 2px midnight, 2px offset</div>
  <div class="pj-demo__body">
    
<button class="pj-btn pj-btn--primary pj-btn--md" style="outline:2px solid #1d3352;outline-offset:2px">Keyboard focus</button>
<button class="pj-btn pj-btn--outline pj-btn--md" style="outline:2px solid #1d3352;outline-offset:2px">Focused</button>
<span class="pj-badge">Tab to see the real thing</span>

  </div>
</div>


```css
:focus-visible {
  outline: 2px solid var(--midnight-9);
  outline-offset: 2px;
}
```

The offset matters: at `0` the ring sits on the control's own border and can
disappear against it.

The two deliberate WCAG 2.1 SC 1.4.3 exemptions are logotypes, where the
wordmark uses the identity accent, and inactive controls. Treat neither as a
general exception for copy or interactive content.

## Moving focus

Focus moves only in response to something the user did, and it always ends
somewhere they can see.

| Event | Focus goes to |
|---|---|
| Modal opens | The modal's first focusable element, or its heading |
| Modal closes | The control that opened it |
| Drawer or menu opens | Its first item |
| A route changes | The new page's `<h1>`, or `<main>` |
| A validation error appears on submit | The first invalid field |
| A row is deleted | The next row, or the region's heading if it was the last |

Modals and drawers **trap** focus while open and close on `Esc`. Everything else
must not trap: a `Tab` inside a table, a card, or a tab strip leaves it again.

Deleting a row without moving focus leaves it on a detached node, which drops
the keyboard user back at the top of the document — a silent, common, and
entirely avoidable regression.

## ARIA for the composed patterns

The components page shows tabs, navigation, status, and overlays as markup. This
is what each owes assistive technology once it is real.

### Tabs

`pj-tabs` is a tab strip, so it needs the full pattern: `role="tablist"` on the
container, `role="tab"` with `aria-selected` on each tab, `role="tabpanel"` with
`aria-labelledby` on each panel. Arrow keys move between tabs; `Tab` leaves the
strip entirely — only the selected tab is in the tab order.

If arrow-key navigation is not implemented, **do not use the tab roles**. A
`tablist` that does not respond to arrow keys is worse than a list of links,
because it has promised behaviour it does not have.

### Navigation

The current page in a `pj-sidebar` or `pj-navbar` is marked
`aria-current="page"`. The 600-weight and the accent underline are the visual
half of that statement; `aria-current` is the other half, and neither substitutes
for the other.

### Status and semantic colour

Every `pj-status` dot is paired with its text label. That rule appears on the
components page as a visual-design rule; it is also the accessibility rule, and
it is why the system has no bare-dot variant to reach for.

Live regions announce changes that happen without a user action:

| Region | Attribute |
|---|---|
| Loading region | `role="status"` + `aria-label` |
| Toast, non-urgent update | `aria-live="polite"` |
| Validation summary, failure | `aria-live="assertive"` |
| Progress bar | `role="progressbar"` with `aria-valuenow` / `min` / `max` |

Reserve `assertive` for things that interrupt correctly. An `assertive` region
that fires on every keystroke makes the page unusable with a screen reader.

### Icons

An icon that repeats its label is `aria-hidden="true"`. An icon that *is* the
control carries the accessible name:
`<button aria-label="Security settings">`. See
[Icons](/brand/docs/interface/icons/).

### Tables

A `pj-table` uses `<th scope="col">`, and `scope="row"` on the identifying
column. Sortable headers carry `aria-sort="ascending" | "descending" | "none"`,
updated when the sort changes — the arrow glyph alone is not announced.
[Multi-level headers](/brand/docs/interface/components/) need
`scope="colgroup"` on the group row.

## Motion and preference

The [motion rules](/brand/docs/foundations/space-shape-motion/) are an
accessibility requirement, not a stylistic one. Everything animated is wrapped in
`prefers-reduced-motion: no-preference`, or neutralised under `reduce`.

Skeletons stop shimmering under `reduce` but stay visible — the loading state is
information, and removing it would remove the information along with the motion.

## What to check before shipping a screen

1. Tab from the address bar to the end. Focus is visible at every stop and the
   order matches the visual order.
2. The skip link is the first stop, and using it lands focus in `<main>`.
3. Nothing is reachable only by mouse; nothing is reachable only by keyboard.
4. Every image, icon button, and form control has an accessible name.
5. Zoom to 200% and to 400%. Nothing is clipped; nothing scrolls in two
   directions at once.
6. Turn colour off — greyscale the screen. Every state is still distinguishable.
7. Contrast every new pairing against its **actual** surface, not against white.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Write regions in reading order and place them with CSS. Return focus to the
trigger when an overlay closes. Pair every colour signal with text. Label both
<code>nav</code> landmarks.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Use a positive <code>tabindex</code>, reorder content with <code>order</code> or <code>grid-area</code>, remove a
focus outline without replacing it, or apply tab roles to a strip that does not
handle arrow keys.</p>
</div>
</div>
