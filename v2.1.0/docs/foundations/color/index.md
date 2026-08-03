# Colour

> Three 12-step scales in two modes, their step roles, and the contrast rules that govern them.

---

LLMS index: [llms.txt](/brand/v2.1.0/llms.txt)

---

The palette is three scales — **midnight**, **orange**, and **slate** — each
expressed as a 12-step ramp in a light and a dark variant. The step numbering
follows the Radix convention, which assigns every step a *role*. Using a step
outside its role is the single most common way to break the system.

## Core colours

These are the named aliases most projects reach for first. They are shortcuts
into the scales, not a separate palette.

<ul class="pj-swatches">
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#1d3352"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Primary</div>
      <div class="pj-swatch__hex">#1d3352</div>
      <div class="pj-swatch__use">Text, headings, primary surfaces</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#2b4d78"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Primary Light</div>
      <div class="pj-swatch__hex">#2b4d78</div>
      <div class="pj-swatch__use">Hover states, dark-mode primary</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#132440"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Primary Dark</div>
      <div class="pj-swatch__hex">#132440</div>
      <div class="pj-swatch__use">Dark backgrounds, navbar, code blocks</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#E05232"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Accent</div>
      <div class="pj-swatch__hex">#E05232</div>
      <div class="pj-swatch__use">CTAs, highlights, active states</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#ea7558"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Accent Light</div>
      <div class="pj-swatch__hex">#ea7558</div>
      <div class="pj-swatch__use">Accent hover on dark, syntax strings</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#b84228"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Accent Dark</div>
      <div class="pj-swatch__hex">#b84228</div>
      <div class="pj-swatch__use">Accent pressed state</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#cc4528"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Accent Solid</div>
      <div class="pj-swatch__hex">#cc4528</div>
      <div class="pj-swatch__use">Fill for solid controls with white text (4.72:1)</div>
    </div>
  </li>
  <li class="pj-swatch">
    <div class="pj-swatch__chip" style="background:#546a82"></div>
    <div class="pj-swatch__body">
      <div class="pj-swatch__name">Secondary</div>
      <div class="pj-swatch__hex">#546a82</div>
      <div class="pj-swatch__use">Supporting text, borders</div>
    </div>
  </li>
</ul>


## Step roles

Every scale uses the same twelve roles in the same order:

| Steps | Role | Used for |
|---|---|---|
| 1–2 | App and subtle backgrounds | Page and section surfaces |
| 3–5 | Element backgrounds | Component fills, hover, active |
| 6–8 | Borders | Subtle, default, and strong borders |
| 9–10 | Solid | Solid fills and their hover state |
| 11–12 | Text | Low-emphasis and high-emphasis text |

<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">Only 11 and 12 are text steps</div>


Steps 8, 9, and 10 are border and solid-surface roles. They are not held to text
contrast thresholds and must not be used for body text. If you need dimmer text
than step 11, define a dedicated token and verify its contrast — see
[the code-comment token](/brand/v2.1.0/docs/interface/code/) for a worked
example.
</div>


## Midnight

<div class="pj-scale">
  <div class="pj-scale__head">
    <span class="pj-scale__name">Midnight</span>
    <span class="pj-scale__meta">light · step 9 #1d3352</span>
  </div>
  <div class="pj-scale__steps">
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f8f9fb;border:1px solid var(--pj-border)" title="1 · #f8f9fb"></div>
      <span class="pj-scale__num">1</span>
      <span class="pj-scale__role">App bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f0f3f8;border:1px solid var(--pj-border)" title="2 · #f0f3f8"></div>
      <span class="pj-scale__num">2</span>
      <span class="pj-scale__role">Subtle bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#e2e9f2" title="3 · #e2e9f2"></div>
      <span class="pj-scale__num">3</span>
      <span class="pj-scale__role">Elem bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#d3deec" title="4 · #d3deec"></div>
      <span class="pj-scale__num">4</span>
      <span class="pj-scale__role">Hover bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#c3d1e3" title="5 · #c3d1e3"></div>
      <span class="pj-scale__num">5</span>
      <span class="pj-scale__role">Active bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#b0c1d6" title="6 · #b0c1d6"></div>
      <span class="pj-scale__num">6</span>
      <span class="pj-scale__role">Subtle brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#96abc6" title="7 · #96abc6"></div>
      <span class="pj-scale__num">7</span>
      <span class="pj-scale__role">Border</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#7490b2" title="8 · #7490b2"></div>
      <span class="pj-scale__num">8</span>
      <span class="pj-scale__role">Strong brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#1d3352" title="9 · #1d3352"></div>
      <span class="pj-scale__num">9</span>
      <span class="pj-scale__role">Solid bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#162944" title="10 · #162944"></div>
      <span class="pj-scale__num">10</span>
      <span class="pj-scale__role">Solid hvr</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#3a5a82" title="11 · #3a5a82"></div>
      <span class="pj-scale__num">11</span>
      <span class="pj-scale__role">Lo text</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#142438" title="12 · #142438"></div>
      <span class="pj-scale__num">12</span>
      <span class="pj-scale__role">Hi text</span>
    </div>
  </div>
</div>
<div class="pj-scale">
  <div class="pj-scale__head">
    <span class="pj-scale__name">Midnight</span>
    <span class="pj-scale__meta">dark · step 9 #1d3352</span>
  </div>
  <div class="pj-scale__steps">
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#0e1720;border:1px solid var(--pj-border)" title="1 · #0e1720"></div>
      <span class="pj-scale__num">1</span>
      <span class="pj-scale__role">App bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#131e2b;border:1px solid var(--pj-border)" title="2 · #131e2b"></div>
      <span class="pj-scale__num">2</span>
      <span class="pj-scale__role">Subtle bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#1a2b3e" title="3 · #1a2b3e"></div>
      <span class="pj-scale__num">3</span>
      <span class="pj-scale__role">Elem bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#20354d" title="4 · #20354d"></div>
      <span class="pj-scale__num">4</span>
      <span class="pj-scale__role">Hover bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#263f5a" title="5 · #263f5a"></div>
      <span class="pj-scale__num">5</span>
      <span class="pj-scale__role">Active bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#2e4b68" title="6 · #2e4b68"></div>
      <span class="pj-scale__num">6</span>
      <span class="pj-scale__role">Subtle brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#3a5c7e" title="7 · #3a5c7e"></div>
      <span class="pj-scale__num">7</span>
      <span class="pj-scale__role">Border</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#4d7098" title="8 · #4d7098"></div>
      <span class="pj-scale__num">8</span>
      <span class="pj-scale__role">Strong brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#1d3352" title="9 · #1d3352"></div>
      <span class="pj-scale__num">9</span>
      <span class="pj-scale__role">Solid bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#2b4d78" title="10 · #2b4d78"></div>
      <span class="pj-scale__num">10</span>
      <span class="pj-scale__role">Solid hvr</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#8aacc8" title="11 · #8aacc8"></div>
      <span class="pj-scale__num">11</span>
      <span class="pj-scale__role">Lo text</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#c5daf0" title="12 · #c5daf0"></div>
      <span class="pj-scale__num">12</span>
      <span class="pj-scale__role">Hi text</span>
    </div>
  </div>
</div>

Midnight is the primary. It carries structure, text, and the calm end of the
system. Step 9 (`#1d3352`) is the brand primary and is identical in both modes.

## Orange

<div class="pj-scale">
  <div class="pj-scale__head">
    <span class="pj-scale__name">Orange</span>
    <span class="pj-scale__meta">light · step 9 #E05232</span>
  </div>
  <div class="pj-scale__steps">
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#fef9f7;border:1px solid var(--pj-border)" title="1 · #fef9f7"></div>
      <span class="pj-scale__num">1</span>
      <span class="pj-scale__role">App bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#fef0ea;border:1px solid var(--pj-border)" title="2 · #fef0ea"></div>
      <span class="pj-scale__num">2</span>
      <span class="pj-scale__role">Subtle bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#fde0d5" title="3 · #fde0d5"></div>
      <span class="pj-scale__num">3</span>
      <span class="pj-scale__role">Elem bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#fccebd" title="4 · #fccebd"></div>
      <span class="pj-scale__num">4</span>
      <span class="pj-scale__role">Hover bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f8baa5" title="5 · #f8baa5"></div>
      <span class="pj-scale__num">5</span>
      <span class="pj-scale__role">Active bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f0a48c" title="6 · #f0a48c"></div>
      <span class="pj-scale__num">6</span>
      <span class="pj-scale__role">Subtle brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#e58a6e" title="7 · #e58a6e"></div>
      <span class="pj-scale__num">7</span>
      <span class="pj-scale__role">Border</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#d86e4e" title="8 · #d86e4e"></div>
      <span class="pj-scale__num">8</span>
      <span class="pj-scale__role">Strong brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#E05232" title="9 · #E05232"></div>
      <span class="pj-scale__num">9</span>
      <span class="pj-scale__role">Solid bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#cc4528" title="10 · #cc4528"></div>
      <span class="pj-scale__num">10</span>
      <span class="pj-scale__role">Solid hvr</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#c04424" title="11 · #c04424"></div>
      <span class="pj-scale__num">11</span>
      <span class="pj-scale__role">Lo text</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#6e2714" title="12 · #6e2714"></div>
      <span class="pj-scale__num">12</span>
      <span class="pj-scale__role">Hi text</span>
    </div>
  </div>
</div>
<div class="pj-scale">
  <div class="pj-scale__head">
    <span class="pj-scale__name">Orange</span>
    <span class="pj-scale__meta">dark · step 9 #E05232</span>
  </div>
  <div class="pj-scale__steps">
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#1c110d;border:1px solid var(--pj-border)" title="1 · #1c110d"></div>
      <span class="pj-scale__num">1</span>
      <span class="pj-scale__role">App bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#271610;border:1px solid var(--pj-border)" title="2 · #271610"></div>
      <span class="pj-scale__num">2</span>
      <span class="pj-scale__role">Subtle bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#3d1e13" title="3 · #3d1e13"></div>
      <span class="pj-scale__num">3</span>
      <span class="pj-scale__role">Elem bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#522616" title="4 · #522616"></div>
      <span class="pj-scale__num">4</span>
      <span class="pj-scale__role">Hover bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#643019" title="5 · #643019"></div>
      <span class="pj-scale__num">5</span>
      <span class="pj-scale__role">Active bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#7a3c20" title="6 · #7a3c20"></div>
      <span class="pj-scale__num">6</span>
      <span class="pj-scale__role">Subtle brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#974b28" title="7 · #974b28"></div>
      <span class="pj-scale__num">7</span>
      <span class="pj-scale__role">Border</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#b85c32" title="8 · #b85c32"></div>
      <span class="pj-scale__num">8</span>
      <span class="pj-scale__role">Strong brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#E05232" title="9 · #E05232"></div>
      <span class="pj-scale__num">9</span>
      <span class="pj-scale__role">Solid bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#ea7558" title="10 · #ea7558"></div>
      <span class="pj-scale__num">10</span>
      <span class="pj-scale__role">Solid hvr</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f09878" title="11 · #f09878"></div>
      <span class="pj-scale__num">11</span>
      <span class="pj-scale__role">Lo text</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#fcddd2" title="12 · #fcddd2"></div>
      <span class="pj-scale__num">12</span>
      <span class="pj-scale__role">Hi text</span>
    </div>
  </div>
</div>

Orange is the accent. It marks the primary action, the active state, and little
else. Step 9 (`#E05232`) is constant across modes.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Use orange for the single most important action in a view, active navigation
state, and focus emphasis.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Use orange for large background fills, body text, or more than one competing
call to action on the same screen.</p>
</div>
</div>


## Slate

<div class="pj-scale">
  <div class="pj-scale__head">
    <span class="pj-scale__name">Slate</span>
    <span class="pj-scale__meta">light · step 9 #546a82</span>
  </div>
  <div class="pj-scale__steps">
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f9f9fa;border:1px solid var(--pj-border)" title="1 · #f9f9fa"></div>
      <span class="pj-scale__num">1</span>
      <span class="pj-scale__role">App bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#f1f2f4;border:1px solid var(--pj-border)" title="2 · #f1f2f4"></div>
      <span class="pj-scale__num">2</span>
      <span class="pj-scale__role">Subtle bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#e6e8eb" title="3 · #e6e8eb"></div>
      <span class="pj-scale__num">3</span>
      <span class="pj-scale__role">Elem bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#dadce0" title="4 · #dadce0"></div>
      <span class="pj-scale__num">4</span>
      <span class="pj-scale__role">Hover bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#cdd0d5" title="5 · #cdd0d5"></div>
      <span class="pj-scale__num">5</span>
      <span class="pj-scale__role">Active bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#bec2c8" title="6 · #bec2c8"></div>
      <span class="pj-scale__num">6</span>
      <span class="pj-scale__role">Subtle brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#adb2ba" title="7 · #adb2ba"></div>
      <span class="pj-scale__num">7</span>
      <span class="pj-scale__role">Border</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#9299a4" title="8 · #9299a4"></div>
      <span class="pj-scale__num">8</span>
      <span class="pj-scale__role">Strong brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#546a82" title="9 · #546a82"></div>
      <span class="pj-scale__num">9</span>
      <span class="pj-scale__role">Solid bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#4a5e74" title="10 · #4a5e74"></div>
      <span class="pj-scale__num">10</span>
      <span class="pj-scale__role">Solid hvr</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#5c6f82" title="11 · #5c6f82"></div>
      <span class="pj-scale__num">11</span>
      <span class="pj-scale__role">Lo text</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#1e2b38" title="12 · #1e2b38"></div>
      <span class="pj-scale__num">12</span>
      <span class="pj-scale__role">Hi text</span>
    </div>
  </div>
</div>
<div class="pj-scale">
  <div class="pj-scale__head">
    <span class="pj-scale__name">Slate</span>
    <span class="pj-scale__meta">dark · step 9 #546a82</span>
  </div>
  <div class="pj-scale__steps">
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#111416;border:1px solid var(--pj-border)" title="1 · #111416"></div>
      <span class="pj-scale__num">1</span>
      <span class="pj-scale__role">App bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#171b1f;border:1px solid var(--pj-border)" title="2 · #171b1f"></div>
      <span class="pj-scale__num">2</span>
      <span class="pj-scale__role">Subtle bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#20262c" title="3 · #20262c"></div>
      <span class="pj-scale__num">3</span>
      <span class="pj-scale__role">Elem bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#283038" title="4 · #283038"></div>
      <span class="pj-scale__num">4</span>
      <span class="pj-scale__role">Hover bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#303a43" title="5 · #303a43"></div>
      <span class="pj-scale__num">5</span>
      <span class="pj-scale__role">Active bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#3a454f" title="6 · #3a454f"></div>
      <span class="pj-scale__num">6</span>
      <span class="pj-scale__role">Subtle brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#47545f" title="7 · #47545f"></div>
      <span class="pj-scale__num">7</span>
      <span class="pj-scale__role">Border</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#5a6a78" title="8 · #5a6a78"></div>
      <span class="pj-scale__num">8</span>
      <span class="pj-scale__role">Strong brd</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#546a82" title="9 · #546a82"></div>
      <span class="pj-scale__num">9</span>
      <span class="pj-scale__role">Solid bg</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#627a92" title="10 · #627a92"></div>
      <span class="pj-scale__num">10</span>
      <span class="pj-scale__role">Solid hvr</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#97a8b8" title="11 · #97a8b8"></div>
      <span class="pj-scale__num">11</span>
      <span class="pj-scale__role">Lo text</span>
    </div>
    <div class="pj-scale__step">
      <div class="pj-scale__chip" style="background:#d5dee8" title="12 · #d5dee8"></div>
      <span class="pj-scale__num">12</span>
      <span class="pj-scale__role">Hi text</span>
    </div>
  </div>
</div>

Slate is the secondary — supporting text, borders, and neutral surfaces. Step 9
(`#546a82`) is the brand secondary and is constant across modes.

## Terminal

The three scales cover every surface that has a light mode. A terminal does not:
it has one surface, it is dark, and every colour in it is measured against that
one background. It also needs six hues where the interface needs three, because
programs have been writing to sixteen ANSI slots since long before this system
existed.

So the terminal palette is a fourth member of the system rather than a fifth
scale — a fixed sixteen-slot palette plus its chrome, derived from the ramps and
measured against `midnight-dark-1`.

<div class="pj-scroll-x">
<table class="pj-table pj-terminal-palette">
  <thead>
    <tr>
      <th class="pj-table__num">#</th>
      <th>Name</th>
      <th>Normal</th>
      <th class="pj-table__num">On surface</th>
      <th>Bright</th>
      <th class="pj-table__num">On surface</th>
      <th>Provenance</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="pj-table__num">0</td>
      <td>black</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span>
        <code>#0e1720</code>
      </td>
      <td class="pj-table__num">—</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #2e4b68" aria-hidden="true"></span>
        <code>#2e4b68</code>
      </td>
      <td class="pj-table__num">2.00:1</td>
      <td>midnight-dark-1 / midnight-dark-6 — Box drawing and rules, not text — deliberately below the floor.</td>
    </tr>
    <tr>
      <td class="pj-table__num">1</td>
      <td>red</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #e55b5b" aria-hidden="true"></span>
        <code>#e55b5b</code>
      </td>
      <td class="pj-table__num">5.15:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #f08b80" aria-hidden="true"></span>
        <code>#f08b80</code>
      </td>
      <td class="pj-table__num">7.49:1</td>
      <td>bright = danger-dark — Never the accent — an error and the brand must not look alike.</td>
    </tr>
    <tr>
      <td class="pj-table__num">2</td>
      <td>green</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #3f9d74" aria-hidden="true"></span>
        <code>#3f9d74</code>
      </td>
      <td class="pj-table__num">5.41:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #6cc090" aria-hidden="true"></span>
        <code>#6cc090</code>
      </td>
      <td class="pj-table__num">8.24:1</td>
      <td>bright = success-dark</td>
    </tr>
    <tr>
      <td class="pj-table__num">3</td>
      <td>yellow</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #c08a1e" aria-hidden="true"></span>
        <code>#c08a1e</code>
      </td>
      <td class="pj-table__num">5.93:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #e0a92a" aria-hidden="true"></span>
        <code>#e0a92a</code>
      </td>
      <td class="pj-table__num">8.50:1</td>
      <td>bright = warning-dark — Gold, matching the warning role in the interface.</td>
    </tr>
    <tr>
      <td class="pj-table__num">4</td>
      <td>blue</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #6289b3" aria-hidden="true"></span>
        <code>#6289b3</code>
      </td>
      <td class="pj-table__num">4.95:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #8aacc8" aria-hidden="true"></span>
        <code>#8aacc8</code>
      </td>
      <td class="pj-table__num">7.59:1</td>
      <td>bright = midnight-dark-11</td>
    </tr>
    <tr>
      <td class="pj-table__num">5</td>
      <td>magenta</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #bd6d96" aria-hidden="true"></span>
        <code>#bd6d96</code>
      </td>
      <td class="pj-table__num">4.98:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #d491b4" aria-hidden="true"></span>
        <code>#d491b4</code>
      </td>
      <td class="pj-table__num">7.32:1</td>
      <td>terminal-only — The brand defines no magenta; this slot exists only here.</td>
    </tr>
    <tr>
      <td class="pj-table__num">6</td>
      <td>cyan</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #3f97a3" aria-hidden="true"></span>
        <code>#3f97a3</code>
      </td>
      <td class="pj-table__num">5.31:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #74c0c9" aria-hidden="true"></span>
        <code>#74c0c9</code>
      </td>
      <td class="pj-table__num">8.71:1</td>
      <td>terminal-only — The brand defines no cyan; this slot exists only here.</td>
    </tr>
    <tr>
      <td class="pj-table__num">7</td>
      <td>white</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #97a8b8" aria-hidden="true"></span>
        <code>#97a8b8</code>
      </td>
      <td class="pj-table__num">7.41:1</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span>
        <code>#c5daf0</code>
      </td>
      <td class="pj-table__num">12.62:1</td>
      <td>slate-dark-11 / midnight-dark-12</td>
    </tr>
  </tbody>
</table>
</div>

Read the provenance column carefully. The **bright** ramp is the brand: where a
hue already exists in the system, the bright slot takes that step verbatim. The
**normal** ramp has no brand equivalent — the scales define one value per
semantic role, not a dim and a bright — so each normal slot is its bright
counterpart darkened until it reads a step back while still clearing the floor.

Magenta and cyan exist in neither half of the brand. They are here because a
terminal requires them, and nowhere else.

<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">A terminal value is not a brand value</div>


`#e55b5b` is the terminal's red. It is **not** `$danger`, which is `#a8261c`.
The normal ramp exists to fill ANSI slots and is measured only against the
terminal surface; using one of its values in the interface puts an unmeasured
colour on an unrelated background.
</div>


### Terminal chrome

The accent gets no ANSI slot, because it is not semantic — it marks *where you
are*. That, and the surfaces around the sixteen, live here.

<div class="pj-scroll-x">
<table class="pj-table pj-terminal-palette">
  <thead>
    <tr><th>Role</th><th>Value</th><th class="pj-table__num">Measured</th></tr>
  </thead>
  <tbody>
    <tr>
      <td>Background</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span>
        <code>#0e1720</code>
      </td>
      <td class="pj-table__num">the surface</td>
    </tr>
    <tr>
      <td>Foreground</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span>
        <code>#c5daf0</code>
      </td>
      <td class="pj-table__num">12.62:1</td>
    </tr>
    <tr>
      <td>Cursor</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #e05232" aria-hidden="true"></span>
        <code>#e05232</code>
      </td>
      <td class="pj-table__num">4.67:1</td>
    </tr>
    <tr>
      <td>Cursor text</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #0e1720" aria-hidden="true"></span>
        <code>#0e1720</code>
      </td>
      <td class="pj-table__num">4.67:1 on the cursor</td>
    </tr>
    <tr>
      <td>Selection background</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #20354d" aria-hidden="true"></span>
        <code>#20354d</code>
      </td>
      <td class="pj-table__num">—</td>
    </tr>
    <tr>
      <td>Selection text</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span>
        <code>#c5daf0</code>
      </td>
      <td class="pj-table__num">8.74:1</td>
    </tr>
    <tr>
      <td>Dim / comment</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #72889d" aria-hidden="true"></span>
        <code>#72889d</code>
      </td>
      <td class="pj-table__num">4.93:1</td>
    </tr>
    <tr>
      <td>Status bar surface</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #131e2b" aria-hidden="true"></span>
        <code>#131e2b</code>
      </td>
      <td class="pj-table__num">—</td>
    </tr>
    <tr>
      <td>Status bar text</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span>
        <code>#c5daf0</code>
      </td>
      <td class="pj-table__num">11.74:1</td>
    </tr>
    <tr>
      <td>Inactive tab and pane label</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #7b8da3" aria-hidden="true"></span>
        <code>#7b8da3</code>
      </td>
      <td class="pj-table__num">4.95:1</td>
    </tr>
    <tr>
      <td>Active tab fill</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #e05232" aria-hidden="true"></span>
        <code>#e05232</code>
      </td>
      <td class="pj-table__num">4.67:1 with #0e1720 text</td>
    </tr>
    <tr>
      <td>Active pane border</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #e05232" aria-hidden="true"></span>
        <code>#e05232</code>
      </td>
      <td class="pj-table__num">4.67:1</td>
    </tr>
    <tr>
      <td>Inactive pane border</td>
      <td class="pj-inline-color">
        <span class="pj-color-chip" style="--pj-chip: #7b8da3" aria-hidden="true"></span>
        <code>#7b8da3</code>
      </td>
      <td class="pj-table__num">5.32:1</td>
    </tr>
  </tbody>
</table>
</div>

Every non-background value clears 4.5:1 against the surface; the measured floor
is 4.95:1. ANSI 0 bright is the one deliberate exception — programs use it for
box drawing and rules, not for text.

Configuration for tmux, WezTerm, Kitty, Ghostty, iTerm2, and Zellij is on the
[Terminal theming page](/brand/v2.1.0/docs/themes/terminal/).

## Contrast rules

- **Never use pure `#000` or `#fff` as text.** Use step 12 of the relevant
  scale: `#142438` on light, `#c5daf0` on dark.
- **Step 9 is constant across modes.** The solid accent does not shift when the
  theme changes.
- **Body text targets 4.5:1**, large text (≥24px, or ≥18.66px bold) targets 3:1.
- **Verify against the actual surface.** A step that passes on the app
  background may fail on an elevated panel.

### Where an identity colour cannot carry text

Being the brand colour does not make a value a legible background. White on
`orange-9` (`#E05232`) measures **3.87:1** — fine as a mark or a border, but
below the floor for button labels. Rather than dilute the accent, the system
adds a separate fill for that job:

| Token | Hex | With white text |
|---|---|---|
| `--color-accent` | `#E05232` | 3.87:1 — identity only, not for text |
| `--color-accent-solid` | `#cc4528` | 4.72:1 — solid controls |
| `--color-accent-dark` | `#b84228` | 5.46:1 — hover and pressed |

The same principle produced the
[`code-comment` token](/brand/v2.1.0/docs/interface/code/): when no existing
step can do the job accessibly, name a new one rather than misuse a step.

### Semantic colours are mode-specific

The callout hues are tuned for **dark text on tinted light backgrounds**. Used
as foregrounds on the dark app surface they fall below AA, so dark mode has its
own set:

| Role | Light | Dark | On `#0e1720` |
|---|---|---|---|
| Success | `#2f7d65` | `#6cc090` | 3.65:1 → 8.24:1 |
| Warning | `#8b6508` | `#e0a92a` | 3.41:1 → 8.50:1 |
| Danger | `#a8261c` | `#f08b80` | 2.55:1 → 7.49:1 |
| Info | `#3a5a82` | `#8aacc8` | 2.55:1 → 7.59:1 |

## Data visualisation

A chart palette introduces no new colours. It is a set of rules for which
existing steps may sit beside each other in a plot, and — more usefully — for
when colour stops being the right tool.

### Categorical: three series

| Series | Token | Hex | On white |
|---|---|---|---|
| 1 | `--midnight-9` | `#1d3352` | 12.75:1 |
| 2 | `--orange-9` | `#E05232` | 3.87:1 |
| 3 | `--slate-9` | `#546a82` | 5.58:1 |

One step-9 solid per family, in that order. All three clear the **3:1 non-text
contrast floor** against a white plot area, so a bar or a line is visible
without a border.

Assign them in order and keep the assignment stable across every chart in a
deck or a dashboard: if midnight is "cloud" on slide four, it is "cloud" on
slide nine. A series that changes colour between charts costs the reader more
than a fourth series would have gained them.

<div class="pj-demo"><div class="pj-demo__label">Three-series grouped bars — the whole categorical palette</div>
  <div class="pj-demo__body pj-demo__body--stack">
    
<div style="display:flex;align-items:flex-end;gap:1.5rem;height:132px;padding:0 .25rem;border-bottom:1px solid var(--pj-slate-4)">
  <div style="display:flex;align-items:flex-end;gap:3px;height:100%"><span style="width:18px;height:78%;background:var(--pj-midnight-9);display:block"></span><span style="width:18px;height:52%;background:var(--pj-orange-9);display:block"></span><span style="width:18px;height:35%;background:var(--pj-slate-9);display:block"></span></div>
  <div style="display:flex;align-items:flex-end;gap:3px;height:100%"><span style="width:18px;height:61%;background:var(--pj-midnight-9);display:block"></span><span style="width:18px;height:70%;background:var(--pj-orange-9);display:block"></span><span style="width:18px;height:28%;background:var(--pj-slate-9);display:block"></span></div>
  <div style="display:flex;align-items:flex-end;gap:3px;height:100%"><span style="width:18px;height:44%;background:var(--pj-midnight-9);display:block"></span><span style="width:18px;height:38%;background:var(--pj-orange-9);display:block"></span><span style="width:18px;height:66%;background:var(--pj-slate-9);display:block"></span></div>
</div>
<div style="display:flex;gap:1rem;margin-top:.625rem;font-size:.75rem;color:var(--pj-muted-fg)">
  <span><span style="display:inline-block;width:9px;height:9px;background:var(--pj-midnight-9);margin-right:.3rem"></span>Cloud</span>
  <span><span style="display:inline-block;width:9px;height:9px;background:var(--pj-orange-9);margin-right:.3rem"></span>Agentic AI</span>
  <span><span style="display:inline-block;width:9px;height:9px;background:var(--pj-slate-9);margin-right:.3rem"></span>Agile</span>
</div>

  </div>
</div>


<div class="alert alert-warning" role="alert"><div class="h4 alert-heading" role="heading">Orange and slate differ in hue, not in value</div>


`orange-9` against `slate-9` measures **1.44:1**. On screen they are easy to
tell apart — orange against blue-grey is also one of the safest pairs for the
common colour-vision deficiencies. Printed in greyscale, or on a projector with
the colour turned down, they merge.

So when exactly two series are being compared, use **midnight-9 and orange-9**
(3.29:1) and leave slate for the third. And direct-label every series — the
legend is the fallback, not the mechanism.
</div>


### There is no fourth series

The palette stops at three, and extending it is the wrong fix. The step-6 tier
is not an option: `midnight-6` and `slate-6` measure **1.03:1 against each
other** — the same colour, for practical purposes — and all three step-6 values
sit at 1.8–2.0:1 against white, below the 3:1 floor for a mark you have to see.

When a chart has more than three categories, one of these is the answer:

- **Group the tail.** Rank the categories and collapse everything past the third
  into "Other". If the fourth is genuinely interesting, it is the subject of its
  own chart.
- **Small multiples.** One chart per category, same axes, same scale. Reading
  eight small charts is faster than decoding an eight-colour legend.
- **Direct labelling with one highlight.** Draw every series in `slate-7`, draw
  the one being discussed in `orange-9`, and label it in place. This is the
  house style for a line chart in a
  [deck](/brand/v2.1.0/docs/media/presentations/) — one idea per slide holds
  for charts too.
- **Stop using colour.** A ranked bar chart in a single colour, sorted by value,
  answers "which is biggest" better than any palette does.

### Sequential and ordinal scales

A magnitude scale uses **one family, steps 3 through 8**:

`--midnight-3` → `--midnight-4` → `--midnight-5` → `--midnight-6` →
`--midnight-7` → `--midnight-8`

Six levels, stepping evenly in luminance (each 1.06–1.40× its neighbour) — which
is what makes the ramp readable as an ordered scale rather than as six colours.

**Step 9 is not the top of that ramp.** It is 3.87× darker than step 8, which is
a jump the eye reads as a category boundary rather than one more level. Use it
deliberately for exactly that: a four-bucket choropleth of `3 · 5 · 7 · 9`,
where the top bucket is meant to separate itself. Do not append it to a
six-level heatmap.

Steps 3–7 are all below 3:1 against a white plot area, so a sequential fill
needs an edge: give the plot a 1px `slate-4` cell grid, or the reader loses the
boundary between a light cell and the page.

For a diverging scale — where the middle is neutral and both ends are extreme —
run `midnight-8 → midnight-3 → orange-3 → orange-8`, with `--midnight-1` at the
midpoint. Never build a diverging scale from success and danger: those hues
carry a judgement, and "below average" is not "wrong".

### Chart furniture

| Element | Value |
|---|---|
| Axis line, ticks | `--slate-5` |
| Grid lines | `--slate-3`, horizontal only |
| Axis labels, legend | `--slate-11`, 12px |
| Value labels | `--midnight-12`, 12px, IBM Plex Mono |
| Plot background | none — the page surface |
| Annotation, callout rule | `--orange-9` |

Numbers are set in IBM Plex Mono, right-aligned, for the same reason
[table numerics are](/brand/v2.1.0/docs/interface/components/): digits have
to line up to be compared.

<div class="pj-rules"><div class="pj-rule pj-rule--do">
  <div class="pj-rule__label">Do</div>
  <p>Keep categorical charts to three series and label them directly. Hold a series'
colour constant across a deck. Use one family&rsquo;s steps 3–8 for magnitude.</p>
</div>
<div class="pj-rule pj-rule--dont">
  <div class="pj-rule__label">Don't</div>
  <p>Invent a fourth categorical colour from the step-6 tier, rely on a legend as the
only way to identify a series, append step 9 to a sequential ramp, or build a
diverging scale from the success and danger hues.</p>
</div>
</div>


## Dark mode

Both modes are equally supported. See
[Dark mode](/brand/v2.1.0/docs/interface/dark-mode/) for the implementation
rules — theme switching, persistence, image treatment, and the always-dark code
surface.
