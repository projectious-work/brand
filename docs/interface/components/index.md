# Components

> Buttons, inputs, cards, tables, navigation, feedback, overlays, and data display.

---

LLMS index: [llms.txt](/brand/llms.txt)

---

The component set is deliberately small. Each entry lists the measurements that
are normative; anything not listed inherits from the
[foundations](/brand/docs/foundations/).

## Buttons

Five variants, three sizes.

| Variant | Fill | Border | Text | Contrast | Use |
|---|---|---|---|---|---|
| **Primary** | `midnight-9` | none | white | 12.75:1 | Default action |
| **Accent** | `accent-solid` `#cc4528` | none | white | 4.72:1 | The single most important action |
| **Outline** | transparent | 1.5px `orange-9` | `orange-9` | — | Secondary action |
| **Ghost** | transparent | none | `midnight-9` | — | Tertiary, toolbars |
| **Danger** | `#a8261c` | none | white | 7.10:1 | Destructive action |

<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">Accent buttons fill with accent-solid, not step 9</div>


`orange-9` (`#E05232`) is the brand's identity accent and is unchanged
everywhere it appears as a mark, border, active state, or syntax colour. But
white text on it measures **3.87:1** — below the 4.5:1 AA floor for
normal-size text, and button labels are 13–14px.

Solid accent controls therefore fill with **`--color-accent-solid`
(`#cc4528`)**, which carries white text at **4.72:1**. Hover continues to
`accent-dark` (`#b84228`, 5.46:1).
</div>


| Size | Height | Padding |
|---|---|---|
| sm | 32px | 0 12px |
| md | 40px | 0 14px |
| lg | 48px | 0 20px |

Buttons are set in **Plus Jakarta Sans 600** with a 6px radius. Hover moves to
the `-dark` alias of the fill; transitions run at `--duration-standard`.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Use exactly one accent button per view. Give every button a verb — &ldquo;Deploy&rdquo;,
&ldquo;Save changes&rdquo;.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Place two accent buttons side by side, or use a danger button for a reversible
action.</p>
</div>
</div>


## Inputs

Covered in full under [Forms](/brand/docs/interface/forms/) — text,
textarea, select, checkbox, radio, toggle, and slider all share the 40px default
height, `slate-7` border, and midnight focus ring.

## Cards

- Radius `--radius-lg` (9px), padding `--space-5` (24px).
- Border `1px` `slate-4`; `--shadow-1` at rest, `--shadow-2` on hover if the
  card is interactive.
- A card that is not clickable gets no hover state.
- Nested controls step **down** one radius (6px inside a 9px card).

## Tables

The API-reference pattern:

- Header cells use the **overline** style — 11px, 600, uppercase, 0.08em
  tracking, in `--color-secondary` on a subtle background.
- Body rows are 15px with `0.625rem 0.875rem` padding.
- Striping uses the subtle background step, never a border-only rule.
- **Wide tables scroll inside their own container**, never the page.

## Navigation

| Element | Treatment |
|---|---|
| Navbar | `primary-dark` surface, **3px accent bottom rule** |
| Nav link | `slate-dark-11`; active gains `midnight-dark-12` + 2px accent underline |
| Sidebar | Transparent surface, `slate-11` links, accent on hover |
| Breadcrumbs | 13px, `--color-secondary` |
| Tabs | Accent underline on the active tab |
| Pagination | Ghost buttons; current page in `midnight-9` |

The navbar keeps its midnight surface in **both** colour modes — it is a fixed
brand element, not a themed one.

## Alerts and feedback

Four semantic colours, each a left border at 4px on a tinted background:

| Kind | Accent | Background |
|---|---|---|
| Info | `midnight-9` | `#dae2ec` |
| Success | `#2d6a4f` | `#d1ebe0` |
| Warning | `#8b6508` | `#f5ecd0` |
| Danger | `#a32d2d` | `#fce8e8` |

Alert headings use Plus Jakarta Sans 600 at 15px. Badges take `--radius-sm`;
pills take `--radius-full`. Progress bars and spinners use the accent.

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Semantic colour is not decoration</div>


Success, warning, and danger carry meaning. Do not use them to add visual
variety to neutral content.
</div>


## Modals and overlays

- Modal radius `--radius-xl` (13px), elevation `--shadow-3`.
- Scrim: midnight at 40% alpha.
- Dropdowns and popovers take `--radius-lg` and `--shadow-2`.
- Tooltips are 12px on a `midnight-12` surface with 3px radius.
- Focus is trapped inside an open modal and restored to the trigger on close.
- `Esc` always closes; the scrim is clickable unless the action is destructive.

## Data display

| Element | Treatment |
|---|---|
| Avatar | `--radius-full`; initials in Plus Jakarta Sans 600 |
| Stat card | Value in Display weight, label in overline style |
| Tag | `--radius-sm`, tinted background, 11px |
| List | 16px rows, `slate-4` dividers |
| Timeline | 2px `slate-4` rail, accent node for the current step |

Status indicators are a coloured dot plus a text label — never the dot alone.
