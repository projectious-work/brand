# Terminal

> The default dark and optional light projectious.work terminal palettes, plus configuration for tmux, WezTerm, Kitty, Ghostty, iTerm2, and Zellij.


This page is the source of truth for rendering the projectious.work brand in a
terminal. It answers which sixteen colours the brand uses, which program owns
each part of the result, and how to prove a configuration is conformant.

Real terminal and code chrome stays dark by default. The design system also
defines an optional light companion for deliberately light specimens. It is a
separate explicit choice—not a colour-mode response—and every value is measured
against its own surface.

## Implementation contract

### What owns what

A terminal's appearance is produced by two programs that do not overlap, and
almost every "my theme is wrong" report is a confusion between them.

| Layer | Owns | Examples |
|---|---|---|
| **Emulator** | The sixteen ANSI colours, background, foreground, cursor, selection, its own tabs and splits | WezTerm, Kitty, Ghostty, iTerm2, Windows Terminal |
| **Multiplexer** | Only its own chrome — status bar, pane borders, message line, copy mode, popups | tmux, Zellij, screen |

A multiplexer cannot fix a wrong ANSI palette, and an emulator cannot style a
status bar. Configure the emulator first; a multiplexer theme applied over an
unbranded emulator will look wrong no matter how carefully it is written.

{{% callout title="Zellij is the exception worth knowing" type="info" %}}
Zellij is a multiplexer, but its theme definition also *declares* the sixteen
colour names it paints its own UI with. It still does not change the ANSI
palette programs receive — that remains the emulator's. Set both.
{{% /callout %}}

### Inputs and ownership

| Need | Canonical input | Do not do this |
|---|---|---|
| The sixteen colours | The ANSI table on this page | Import a third-party scheme and rename it |
| Surface, cursor, selection | The chrome table on this page | Let the emulator keep its default background |
| Monospace face | IBM Plex Mono | Substitute a different mono face for the brand |
| Multiplexer chrome | The tmux / Zellij sections below | Style a status bar in colours not on this page |

### Non-negotiable rules

1. The default background is `midnight-dark-1` (`#0e1720`). It does not follow
   page colour mode. A light terminal must explicitly select the companion set.
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

The palette is defined in the [Colour foundations](/docs/foundations/color/)
and rendered here from the same source, so this page cannot state a value the
foundations do not.

{{< terminal-palette >}}

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

{{< terminal-palette part="chrome" >}}

### Optional light companion

The optional light terminal uses `#f4f5f7` and a separately measured 16-slot
ANSI palette. It is appropriate for a light-surface specimen or an environment
whose operator has explicitly chosen a light terminal—not as an automatic
response to the surrounding page.

| Slot | Normal | Slot | Bright |
|---|---|---|---|
| 0 black | `#1e2b38` | 8 bright black | `#4a5e74` |
| 1 red | `#b8352f` | 9 bright red | `#a8261c` |
| 2 green | `#276754` | 10 bright green | `#1f7a52` |
| 3 yellow | `#8b6508` | 11 bright yellow | `#6f5106` |
| 4 blue | `#3a5a82` | 12 bright blue | `#1d3352` |
| 5 magenta | `#8a3f6e` | 13 bright magenta | `#752f5c` |
| 6 cyan | `#1c6b6b` | 14 bright cyan | `#125555` |
| 7 white | `#546a82` | 15 bright white | `#142438` |

Chrome uses foreground `#142438`, cursor `#E05232`, selection
`#dae2ec` / `#142438`, dim text `#5c6f82`, status-bar surface `#e6e8eb`, and
inactive pane border `#adb2ba`. The eight base tones clear 4.5:1; bright slots,
the cursor, and UI chrome clear 3:1. Nothing switches to it automatically.

## Syntax in the terminal

An editor running inside a terminal paints code from the sixteen ANSI slots, not
from a stylesheet. Since the [syntax roles](/docs/interface/code/) were
reassigned by measured perceptual distance, seven of the nine now resolve to an
ANSI slot exactly — so a file open in Helix, Neovim or Vim under this palette
looks like the same file on the documentation site.

| Syntax role | Value | ANSI slot |
|---|---|---|
| Plain and variables | <span class="pj-color-chip" style="--pj-chip: #c5daf0" aria-hidden="true"></span> `#c5daf0` | 15 · bright white |
| Keywords and modifiers | <span class="pj-color-chip" style="--pj-chip: #d491b4" aria-hidden="true"></span> `#d491b4` | 13 · bright magenta |
| Types and classes | <span class="pj-color-chip" style="--pj-chip: #6cc090" aria-hidden="true"></span> `#6cc090` | 10 · bright green |
| Functions and methods | <span class="pj-color-chip" style="--pj-chip: #8aacc8" aria-hidden="true"></span> `#8aacc8` | 12 · bright blue |
| Decorators and macros | <span class="pj-color-chip" style="--pj-chip: #74c0c9" aria-hidden="true"></span> `#74c0c9` | 14 · bright cyan |
| Operators and punctuation | <span class="pj-color-chip" style="--pj-chip: #97a8b8" aria-hidden="true"></span> `#97a8b8` | 7 · white |
| Invalid and deprecated | <span class="pj-color-chip" style="--pj-chip: #e55b5b" aria-hidden="true"></span> `#e55b5b` | 1 · red |
| Strings | <span class="pj-color-chip" style="--pj-chip: #ea7558" aria-hidden="true"></span> `#ea7558` | — brand `orange-dark-10` |
| Numbers and constants | <span class="pj-color-chip" style="--pj-chip: #f09878" aria-hidden="true"></span> `#f09878` | — brand `orange-dark-11` |
| Comments | <span class="pj-color-chip" style="--pj-chip: #72889d" aria-hidden="true"></span> `#72889d` | — dedicated token |

Strings, numbers and comments are the three that do not map. ANSI has no orange
slot — orange is the brand's accent family — and comments need a value dimmer
than any slot provides while still clearing 4.5:1. An editor that supports
truecolour should be given those three literally; one limited to sixteen colours
should use bright red for strings, red for numbers, and bright black for
comments, accepting that the last of those falls below the text floor.

{{% callout title="This convergence was not designed for; it fell out" type="info" %}}
The syntax roles were reassigned to fix a legibility problem — keywords and
operators measured ΔE2000 5.2 apart, which is the same colour for reading
purposes. Because the only hues available were the ones the terminal palette had
already added to the system, the fix pulled the web theme onto the ANSI slots.
Worth noticing: a constraint that looked like a limitation produced the
coherence.
{{% /callout %}}

## tmux

tmux styles its own chrome only. Everything inside a pane keeps the colours the
emulator supplied, so configure the emulator first.

### Required capability

tmux must be told the terminal supports true colour, or every hex value silently
degrades to the nearest of 256 approximations — which is the usual cause of a
status bar that is "nearly right".

```bash
# ~/.tmux.conf
set -g default-terminal "tmux-256color"
set -ga terminal-overrides ",*256col*:Tc"
set -ga terminal-overrides ",xterm-256color:Tc"
```

Verify with `tmux info | grep -i Tc`, or print a truecolour ramp inside tmux and
check for banding.

### Theme

```bash
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

```ini
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

## Ghostty

Ghostty reads a plain `key = value` file and supports **named themes**, so the
palette is a separate file that the config selects. That is the idiomatic split:
the theme file carries only colour, and the config carries everything else.

```ini
# ~/.config/ghostty/themes/projectious — colour only, nothing else
palette = 0=#0e1720
palette = 1=#e55b5b
palette = 2=#3f9d74
palette = 3=#c08a1e
palette = 4=#6289b3
palette = 5=#bd6d96
palette = 6=#3f97a3
palette = 7=#97a8b8
palette = 8=#2e4b68
palette = 9=#f08b80
palette = 10=#6cc090
palette = 11=#e0a92a
palette = 12=#8aacc8
palette = 13=#d491b4
palette = 14=#74c0c9
palette = 15=#c5daf0

background = #0e1720
foreground = #c5daf0

cursor-color = #e05232
cursor-text = #0e1720

selection-background = #20354d
selection-foreground = #c5daf0
```

```ini
# ~/.config/ghostty/config — projectious.work

theme = projectious

font-family = IBM Plex Mono
font-size = 13
font-feature = -liga
font-feature = -calt

cursor-style = block
cursor-opacity = 1

# The accent marks the focused split, and nothing else in the chrome.
split-divider-color = #7b8da3
unfocused-split-fill = #0e1720

window-padding-x = 6
window-padding-y = 6
window-padding-balance = true

link-url = true
```

`theme` also takes an absolute path, which is the better form for a config
checked into a dotfiles repository: `theme = /Users/you/dotfiles/ghostty/projectious`.

Ghostty's `theme` accepts a `light:…,dark:…` pair that follows the system
appearance. Do not use that automatic pairing for the default configuration:
dark is the product default. If a deliberately light terminal is required,
configure the complete light companion palette as a separate named theme; do
not mix its slots with the dark set. See
[Colour](/docs/foundations/color/).

Four defaults have to be set explicitly, because each one moves rendered colour
off the measured palette:

| Setting | Required | Why |
|---|---|---|
| `minimum-contrast` | `1` | Anything above 1 lets Ghostty rewrite a foreground to reach a ratio it computes itself. The palette already clears 4.95:1; this would replace measured values with generated ones |
| `background-opacity` | `1` | Below 1 puts whatever is behind the window into every ratio on this page |
| `background-blur` | `false` | Only applies under transparency, and blurring the desktop behind the text does not make the ratio measurable again |
| `unfocused-split-opacity` | `1` | Ghostty fades unfocused splits by default. The faded text is still text, and at the default it no longer clears the floor |

```ini
minimum-contrast = 1
background-opacity = 1
background-blur = false
unfocused-split-opacity = 1
```

Leaving `unfocused-split-opacity` at its default is the most common way this
theme fails review: the split you are *not* looking at is the one you are
reading a stack trace in.

Ghostty has no bold-brightening setting to disable — it renders bold as a bold
face and leaves the colour alone, which is the behaviour the other emulators on
this page need to be told to adopt.

Check the parsed result rather than the file, since an unknown key is skipped
rather than reported:

```sh
ghostty +show-config | grep -E 'palette|background|foreground|contrast|opacity'
ghostty +validate-config
```

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
- [Ghostty configuration reference](https://ghostty.org/docs/config/reference)
- [iTerm2 documentation](https://iterm2.com/documentation.html)
- [Zellij theme configuration](https://zellij.dev/documentation/themes)

When a terminal is upgraded, re-print the sixteen-slot ramp before assuming the
theme survived. Emulators change their default handling of bold, dim, and
minimum contrast between releases more often than they change colour parsing,
and each of those silently moves values off the measured palette.


---
Source: https://projectious-work.github.io/brand/docs/themes/terminal/index.md
