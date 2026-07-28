# Colour

> Three 12-step scales in two modes, their step roles, and the contrast rules that govern them.

---

LLMS index: [llms.txt](/brand/v1.0.0/llms.txt)

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
[the code-comment token](/brand/v1.0.0/docs/interface/code/) for a worked
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
[`code-comment` token](/brand/v1.0.0/docs/interface/code/): when no existing
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

## Dark mode

Both modes are equally supported. See
[Dark mode](/brand/v1.0.0/docs/interface/dark-mode/) for the implementation
rules — theme switching, persistence, image treatment, and the always-dark code
surface.
