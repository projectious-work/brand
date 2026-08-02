# Terminal

> The projectious.work terminal palette and the configuration that applies it to tmux, WezTerm, Kitty, iTerm2, and Zellij.

---

LLMS index: [llms.txt](/brand/v2.0.1/llms.txt)

---

This page is the source of truth for rendering the projectious.work brand in a
terminal. It answers which sixteen colours the brand uses, which program owns
each part of the result, and how to prove a configuration is conformant.

The terminal is where the brand's rule that *code surfaces stay dark in both
modes* stops being a stylistic choice and becomes the only option: a terminal
has one surface, it is dark, and everything is measured against it.

## Implementation contract

### What owns what

A terminal's appearance is produced by two programs that do not overlap, and
almost every "my theme is wrong" report is a confusion between them.

| Layer | Owns | Examples |
|---|---|---|
| **Emulator** | The sixteen ANSI colours, background, foreground, cursor, selection, its own tabs and splits | WezTerm, Kitty, iTerm2, Windows Terminal, GNOME Terminal |
| **Multiplexer** | Only its own chrome — status bar, pane borders, message line, copy mode, popups | tmux, Zellij, screen |

A multiplexer cannot fix a wrong ANSI palette, and an emulator cannot style a
status bar. Configure the emulator first; a multiplexer theme applied over an
unbranded emulator will look wrong no matter how carefully it is written.

<div class="alert alert-info" role="alert"><div class="h4 alert-heading" role="heading">Zellij is the exception worth knowing</div>


Zellij is a multiplexer, but its theme definition also *declares* the sixteen
colour names it paints its own UI with. It still does not change the ANSI
palette programs receive — that remains the emulator's. Set both.
</div>


### Inputs and ownership

| Need | Canonical input | Do not do this |
|---|---|---|
| The sixteen colours | The ANSI table on this page | Import a third-party scheme and rename it |
| Surface, cursor, selection | The chrome table on this page | Let the emulator keep its default background |
| Monospace face | IBM Plex Mono | Substitute a different mono face for the brand |
| Multiplexer chrome | The tmux / Zellij sections below | Style a status bar in colours not on this page |

### Non-negotiable rules

1. The background is `midnight-dark-1` (`#0e1720`). The terminal has one
   surface and it does not follow a light mode.
2. Every one of the fourteen non-background colours clears **4.5:1** against
   that surface. The measured floor for this palette is 4.95:1.
3. `orange-9` (`#e05232`) is the cursor and the active marker. It is not a
   text colour in the palette, and it is never ANSI red — an error and the
   brand accent must not look alike.
4. Use IBM Plex Mono. Enable its ligatures only if the team has agreed to them;
   they change how operators read in diffs.
5. Dim text uses the dedicated comment token (`#72889d`), not ANSI bright black.
   Bright black is a *border* value here and fails text contrast on purpose.
6. Do not rely on colour alone for state. A red segment needs a word or glyph
   beside it.

## The palette

### Sixteen colours

The palette is defined in the [Colour foundations](/brand/v2.0.1/docs/foundations/color/)
and rendered here from the same source, so this page cannot state a value the
foundations do not.

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

The **bright** ramp is the brand: where a hue already exists in the system, the
bright slot takes that step verbatim. The **normal** ramp is derived from it —
darkened until it reads a step back while still clearing the floor — and magenta
and cyan exist in neither half of the brand. A normal-ramp value is a terminal
value only: `#e55b5b` is the terminal's red, not `$danger` (`#a8261c`).

Bright black is the one deliberate exception to the 4.5:1 floor: programs use it
for box drawing and rules, not for text. If a program uses it for prose that is
the program's bug, and the fix is to configure the program — not to lighten the
palette until unreadable text becomes readable.

The brand accent has no ANSI slot, because it is not a semantic colour: it marks
*where you are*, which the chrome table covers.

### Chrome

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

## tmux

tmux styles its own chrome only. Everything inside a pane keeps the colours the
emulator supplied, so configure the emulator first.

### Required capability

tmux must be told the terminal supports true colour, or every hex value silently
degrades to the nearest of 256 approximations — which is the usual cause of a
status bar that is "nearly right".

```tmux
# ~/.tmux.conf
set -g default-terminal "tmux-256color"
set -ga terminal-overrides ",*256col*:Tc"
set -ga terminal-overrides ",xterm-256color:Tc"
```

Verify with `tmux info | grep -i Tc`, or print a truecolour ramp inside tmux and
check for banding.

### Theme

```tmux
# ~/.tmux.conf — projectious.work

# Status bar
set -g status-style              "bg=#131e2b,fg=#c5daf0"
set -g status-left-length        32
set -g status-left               "#[bg=#e05232,fg=#0e1720,bold] #S #[bg=#131e2b,fg=#e05232]"
set -g status-right-length       80
set -g status-right              "#[fg=#7b8da3] %Y-%m-%d #[fg=#c5daf0]%H:%M "

# Windows — the active one is the single accent element in the bar
setw -g window-status-format         "#[fg=#7b8da3] #I #W "
setw -g window-status-current-format "#[bg=#e05232,fg=#0e1720,bold] #I #W "
setw -g window-status-activity-style "fg=#e0a92a"
setw -g window-status-bell-style     "fg=#e55b5b,bold"

# Panes
set -g pane-border-style        "fg=#7b8da3"
set -g pane-active-border-style "fg=#e05232"
set -g pane-border-status       top
set -g pane-border-format       " #{pane_index} #{pane_current_command} "

# Messages and the command prompt
set -g message-style       "bg=#131e2b,fg=#c5daf0"
set -g message-command-style "bg=#131e2b,fg=#e0a92a"

# Copy mode — selection matches the emulator's selection pair
setw -g mode-style "bg=#20354d,fg=#c5daf0"

# Popups (tmux 3.2+)
set -g popup-style        "bg=#131e2b,fg=#c5daf0"
set -g popup-border-style "fg=#e05232"

# Clock
setw -g clock-mode-colour "#8aacc8"
```

The active window is the only accent-filled element in the bar. Adding a second
one — an accented session name *and* an accented window — removes the cue that
tells you which window you are in.

### Status-bar frameworks

Many tmux setups do not write `set -g status-*` lines directly. A status-bar
framework — tmux-powerkit, catppuccin/tmux, dracula/tmux and others — takes over
`status-format` and re-renders it on its own schedule, overwriting anything set
before it loads.

That is fine, and it does not need working around. Supply the framework with
brand values through whatever palette hook it documents, rather than fighting it
with `set -g` lines it will discard. The shape differs per framework; the values
do not. A framework that reads an associative array, for example:

```bash
declare -gA THEME_COLORS=(
    [background]="#0E1720"
    [statusbar-bg]="#131E2B"
    [statusbar-fg]="#C5DAF0"
    [session-bg]="#E05232"
    [session-fg]="#0E1720"
    [window-active-base]="#E05232"
    [window-inactive-base]="#7B8DA3"
    [pane-border-active]="#E05232"
    [pane-border-inactive]="#7B8DA3"
    [error-base]="#E55B5B"
    [warning-base]="#E0A92A"
    [info-base]="#8AACC8"
)
```

Every value maps to a row in the tables above. Where a framework offers a slot
the brand has no name for, resolve it from the palette rather than inventing a
colour: a "modified" or "prefix" state is a warning, a "copy mode" state is
informational, and both already have values.

If a framework exposes no palette hook at all, load the `set -g` block above
*after* it — in tmux, later wins — and record the ordering dependency in the
config, because a framework upgrade can silently reintroduce its own colours.

## WezTerm

WezTerm is configured in Lua, so the palette can be a table the rest of the
config refers to.

```lua
-- ~/.config/wezterm/wezterm.lua
local wezterm = require("wezterm")

local pj = {
  bg        = "#0e1720",
  fg        = "#c5daf0",
  accent    = "#e05232",
  surface   = "#131e2b",
  selection = "#20354d",
  dim       = "#7b8da3",
}

return {
  font = wezterm.font_with_fallback({ "IBM Plex Mono", "Symbols Nerd Font Mono" }),
  font_size = 13.0,
  harfbuzz_features = { "calt=0", "liga=0" }, -- opt in to ligatures deliberately

  colors = {
    foreground    = pj.fg,
    background    = pj.bg,
    cursor_bg     = pj.accent,
    cursor_fg     = pj.bg,
    cursor_border = pj.accent,
    selection_bg  = pj.selection,
    selection_fg  = pj.fg,
    split         = pj.dim,

    ansi = {
      "#0e1720", "#e55b5b", "#3f9d74", "#c08a1e",
      "#6289b3", "#bd6d96", "#3f97a3", "#97a8b8",
    },
    brights = {
      "#2e4b68", "#f08b80", "#6cc090", "#e0a92a",
      "#8aacc8", "#d491b4", "#74c0c9", "#c5daf0",
    },

    tab_bar = {
      background = pj.surface,
      active_tab   = { bg_color = pj.accent,  fg_color = pj.bg,  intensity = "Bold" },
      inactive_tab = { bg_color = pj.surface, fg_color = pj.dim },
      inactive_tab_hover = { bg_color = pj.selection, fg_color = pj.fg },
      new_tab      = { bg_color = pj.surface, fg_color = pj.dim },
      new_tab_hover = { bg_color = pj.selection, fg_color = pj.fg },
    },
  },

  use_fancy_tab_bar = false,
  window_padding = { left = 12, right = 12, top = 8, bottom = 8 },
  inactive_pane_hsb = { saturation = 1.0, brightness = 1.0 },
}
```

Leave `inactive_pane_hsb` at 1.0. WezTerm's default dims inactive panes, which
silently pushes every measured value in them below the floor.

## Kitty

```conf
# ~/.config/kitty/kitty.conf — projectious.work

font_family      IBM Plex Mono
font_size        13.0
disable_ligatures always

background       #0e1720
foreground       #c5daf0
cursor           #e05232
cursor_text_color #0e1720
selection_background #20354d
selection_foreground #c5daf0
url_color        #8aacc8

# Normal
color0  #0e1720
color1  #e55b5b
color2  #3f9d74
color3  #c08a1e
color4  #6289b3
color5  #bd6d96
color6  #3f97a3
color7  #97a8b8

# Bright
color8  #2e4b68
color9  #f08b80
color10 #6cc090
color11 #e0a92a
color12 #8aacc8
color13 #d491b4
color14 #74c0c9
color15 #c5daf0

# Tabs — the active tab is the single accent element
tab_bar_style          powerline
tab_powerline_style    slanted
active_tab_background  #e05232
active_tab_foreground  #0e1720
active_tab_font_style  bold
inactive_tab_background #131e2b
inactive_tab_foreground #7b8da3
tab_bar_background     #131e2b

# Splits
active_border_color    #e05232
inactive_border_color  #7b8da3
window_padding_width   6

# Marks and bells
mark1_foreground #0e1720
mark1_background #e0a92a
bell_border_color #e55b5b
```

Kitty applies `background_opacity` before contrast is measured. Any value below
1.0 puts whatever is behind the window into every ratio on this page, so the
palette is no longer measurable. Keep it at 1.0 for work that has to meet the
floor.

## iTerm2

iTerm2 stores colours as a plist of floating-point components, so hand-editing
is error-prone. Generate the scheme instead:

```python
#!/usr/bin/env python3
"""Emit projectious.iterm2colors — import via Settings ▸ Profiles ▸ Colors ▸
Color Presets ▸ Import. Regenerate rather than hand-editing the plist."""

PALETTE = {
    "Ansi 0":  "#0e1720", "Ansi 8":  "#2e4b68",
    "Ansi 1":  "#e55b5b", "Ansi 9":  "#f08b80",
    "Ansi 2":  "#3f9d74", "Ansi 10": "#6cc090",
    "Ansi 3":  "#c08a1e", "Ansi 11": "#e0a92a",
    "Ansi 4":  "#6289b3", "Ansi 12": "#8aacc8",
    "Ansi 5":  "#bd6d96", "Ansi 13": "#d491b4",
    "Ansi 6":  "#3f97a3", "Ansi 14": "#74c0c9",
    "Ansi 7":  "#97a8b8", "Ansi 15": "#c5daf0",
    "Background": "#0e1720", "Foreground": "#c5daf0",
    "Bold":       "#c5daf0", "Cursor":     "#e05232",
    "Cursor Text": "#0e1720", "Link":      "#8aacc8",
    "Selection":  "#20354d", "Selected Text": "#c5daf0",
    "Badge":      "#e05232", "Tab":        "#131e2b",
}

def component(value):
    return f"<real>{int(value, 16) / 255:.10f}</real>"

rows = []
for name, hex_value in PALETTE.items():
    h = hex_value.lstrip("#")
    rows.append(
        f"\t<key>{name} Color</key>\n\t<dict>\n"
        f"\t\t<key>Color Space</key>\n\t\t<string>sRGB</string>\n"
        f"\t\t<key>Red Component</key>\n\t\t{component(h[0:2])}\n"
        f"\t\t<key>Green Component</key>\n\t\t{component(h[2:4])}\n"
        f"\t\t<key>Blue Component</key>\n\t\t{component(h[4:6])}\n"
        f"\t\t<key>Alpha Component</key>\n\t\t<real>1</real>\n\t</dict>"
    )

print('<?xml version="1.0" encoding="UTF-8"?>')
print('<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" '
      '"http://www.apple.com/DTDs/PropertyList-1.0.dtd">')
print('<plist version="1.0">\n<dict>')
print("\n".join(rows))
print("</dict>\n</plist>")
```

```sh
python3 make-iterm-scheme.py > projectious.itermcolors
open projectious.itermcolors     # registers it as a preset
```

Two iTerm2 defaults have to be turned off, both under **Settings ▸ Profiles ▸
Colors**:

| Setting | Required | Why |
|---|---|---|
| Minimum contrast | `0` | Non-zero silently rewrites foreground colours, so the measured palette is not what renders |
| Brighten bold text | off | Repaints normal colours as brights and collapses the two halves of the palette |
| Smart cursor colour | off | Overrides the accent cursor with a computed colour |
| Transparency / blur | `0` | Puts the desktop behind the window into every contrast ratio |

## Zellij

Zellij declares a named theme in KDL and paints its own UI from it.

```kdl
// ~/.config/zellij/config.kdl
themes {
    projectious {
        fg      "#c5daf0"
        bg      "#0e1720"
        black   "#0e1720"
        red     "#e55b5b"
        green   "#3f9d74"
        yellow  "#c08a1e"
        blue    "#6289b3"
        magenta "#bd6d96"
        cyan    "#3f97a3"
        white   "#97a8b8"
        orange  "#e05232"
    }
}

theme "projectious"

pane_frames true
ui {
    pane_frames {
        rounded_corners true
        hide_session_name false
    }
}
```

Zellij's `orange` slot is what it paints the active pane frame and the session
name with, so it takes the brand accent. Its `red`/`green`/`yellow` slots drive
mode indicators — locked, pane, resize — which is why they must be the semantic
values and not decorative choices.

Zellij has no separate bright ramp: it derives emphasis from the ten names
above. Programs running inside it still receive the emulator's sixteen, so the
bright half of the palette is not lost.

## Verify

### Palette

Print the sixteen slots and compare them against the table above:

```sh
for i in $(seq 0 15); do
  printf "\033[48;5;%dm  %3d  \033[0m" "$i" "$i"
  [ $(( (i + 1) % 8 )) -eq 0 ] && echo
done
```

Confirm true colour reaches the terminal — this must print a smooth ramp, not
bands:

```sh
awk 'BEGIN{for(i=0;i<256;i++){printf "\033[48;2;%d;%d;%dm ", i, 90, 120}print "\033[0m"}'
```

### States to review

A terminal theme that only renders a prompt is not complete.

| State | What it proves |
|---|---|
| `git diff` with colour | Red and green are distinguishable and neither is the accent |
| `ls --color` on a mixed directory | Blue, cyan and green separate at a glance |
| A failing command's stderr | Red reads as an error, not as brand emphasis |
| `man` or a pager | Bold, underline, and dim all stay readable |
| Split panes, one active | The active border is the only accent element |
| Copy / visual mode | Selection contrast holds over both normal and coloured text |
| A full-screen TUI (`htop`, `lazygit`) | Bright black is used for rules, not for text |
| 256-colour and truecolour output | No banding, no fallback to the nearest ANSI slot |

### Release evidence

- the emulator and multiplexer versions, and the config files changed;
- a screenshot of the sixteen-slot ramp beside the table on this page;
- `git diff`, a failing command, and a split-pane view captured at the working
  font size;
- confirmation that minimum-contrast, bold-brightening, and transparency
  settings are off;
- for a multiplexer, evidence that true colour survives inside a session.

## Sources and upgrade boundary

- [tmux manual](https://man7.org/linux/man-pages/man1/tmux.1.html)
- [WezTerm colour configuration](https://wezterm.org/config/appearance.html)
- [Kitty configuration](https://sw.kovidgoyal.net/kitty/conf/)
- [iTerm2 documentation](https://iterm2.com/documentation.html)
- [Zellij theme configuration](https://zellij.dev/documentation/themes)

When a terminal is upgraded, re-print the sixteen-slot ramp before assuming the
theme survived. Emulators change their default handling of bold, dim, and
minimum contrast between releases more often than they change colour parsing,
and each of those silently moves values off the measured palette.
