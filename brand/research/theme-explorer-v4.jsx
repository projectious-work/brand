import { useState } from "react";

// ─────────────────────────────────────────────────────────────────────────────
// REAL THEME DATA — researched from official sources
// ─────────────────────────────────────────────────────────────────────────────

const THEMES = {
  // ── NORD ──────────────────────────────────────────────────────────────────
  "nord": {
    name: "Nord", type: "dark", family: "Nord",
    source: "nordtheme.com",
    description: "Arctic, north-bluish. Four palettes: Polar Night, Snow Storm, Frost, Aurora.",
    colors: {
      bg:       "#2e3440", // nord0 – Polar Night base
      bgAlt:    "#3b4252", // nord1 – elevated panels
      bgSel:    "#434c5e", // nord2 – active line / selection
      border:   "#4c566a", // nord3 – guides, comments
      fg:       "#eceff4", // nord6 – primary text
      fgMuted:  "#d8dee9", // nord4 – variables, constants
      fgSubtle: "#e5e9f0", // nord5 – hover states
      comment:  "#4c566a", // nord3 – comments
      keyword:  "#81a1c1", // nord9 – keywords, operators
      string:   "#a3be8c", // nord14 – strings
      func:     "#88c0d0", // nord8 – functions (primary accent)
      type:     "#8fbcbb", // nord7 – types, classes
      number:   "#b48ead", // nord15 – numbers
      constant: "#5e81ac", // nord10 – pragmas, comment keywords
      error:    "#bf616a", // nord11 – errors
      warn:     "#ebcb8b", // nord13 – warnings
      success:  "#a3be8c", // nord14 – success
      accent:   "#88c0d0", // nord8 – primary UI accent
    },
    tokens: [
      { name: "Background (nord0)",      hex: "#2e3440", role: "Base editor background" },
      { name: "bg panels (nord1)",       hex: "#3b4252", role: "Status bars, gutters, panels" },
      { name: "Active Line (nord2)",     hex: "#434c5e", role: "Current line & selection highlight" },
      { name: "Guides (nord3)",          hex: "#4c566a", role: "Indent guides, comments, invisibles" },
      { name: "Variables (nord4)",       hex: "#d8dee9", role: "Variables, constants, attributes" },
      { name: "Subtle text (nord5)",     hex: "#e5e9f0", role: "Hover states, secondary text" },
      { name: "Foreground (nord6)",      hex: "#eceff4", role: "Primary plain text, brackets" },
      { name: "Types (nord7)",           hex: "#8fbcbb", role: "Classes, types, primitives" },
      { name: "Functions (nord8)",       hex: "#88c0d0", role: "Functions, methods — primary accent" },
      { name: "Keywords (nord9)",        hex: "#81a1c1", role: "Keywords, operators, tags" },
      { name: "Pragmas (nord10)",        hex: "#5e81ac", role: "Pragmas, preprocessor statements" },
      { name: "Errors (nord11)",         hex: "#bf616a", role: "Errors, diff deletions" },
      { name: "Decorators (nord12)",     hex: "#d08770", role: "Annotations, decorators" },
      { name: "Warnings (nord13)",       hex: "#ebcb8b", role: "Warnings, escape chars, regex" },
      { name: "Strings (nord14)",        hex: "#a3be8c", role: "All string literals" },
      { name: "Numbers (nord15)",        hex: "#b48ead", role: "All numeric literals" },
    ]
  },

  // ── DRACULA ───────────────────────────────────────────────────────────────
  "dracula": {
    name: "Dracula", type: "dark", family: "Dracula",
    source: "draculatheme.com/spec",
    description: "The most famous dark theme ever. High-contrast vibrant accents on deep navy.",
    colors: {
      bg:       "#282a36", // Background
      bgAlt:    "#343746", // Background Light
      bgSel:    "#44475a", // Selection
      border:   "#6272a4", // Current Line / Comment
      fg:       "#f8f8f2", // Foreground
      fgMuted:  "#f8f8f2",
      fgSubtle: "#6272a4", // Comment
      comment:  "#6272a4", // Comment
      keyword:  "#ff79c6", // Pink – keywords, storage
      string:   "#f1fa8c", // Yellow – strings
      func:     "#50fa7b", // Green – functions, methods
      type:     "#8be9fd", // Cyan – classes, types, support
      number:   "#ffb86c", // Orange – numbers, booleans
      constant: "#bd93f9", // Purple – instance reserved words
      error:    "#ff5555", // Red
      warn:     "#ffb86c", // Orange
      success:  "#50fa7b", // Green
      accent:   "#bd93f9", // Purple
    },
    tokens: [
      { name: "Background",    hex: "#282a36", role: "Main editor background" },
      { name: "Current Line",  hex: "#44475a", role: "Active line highlight & selection" },
      { name: "Foreground",    hex: "#f8f8f2", role: "Default text, variables, identifiers" },
      { name: "Comment",       hex: "#6272a4", role: "Comments, disabled code, borders" },
      { name: "Pink",          hex: "#ff79c6", role: "Keywords: if, else, return, const, let…" },
      { name: "Green",         hex: "#50fa7b", role: "Functions, methods, built-ins" },
      { name: "Cyan",          hex: "#8be9fd", role: "Classes, types, interfaces, regex" },
      { name: "Yellow",        hex: "#f1fa8c", role: "Strings, text content, attribute values" },
      { name: "Orange",        hex: "#ffb86c", role: "Numbers, booleans, constants" },
      { name: "Purple",        hex: "#bd93f9", role: "Instance reserved words (this/self/super)" },
      { name: "Red",           hex: "#ff5555", role: "Errors, warnings, diff deletions" },
    ]
  },

  // ── DRACULA SOFT ─────────────────────────────────────────────────────────
  "dracula-soft": {
    name: "Dracula Soft", type: "dark", family: "Dracula",
    source: "draculatheme.com",
    description: "Softened Dracula — same hues, desaturated for a less intense look.",
    colors: {
      bg:       "#22212c", bgAlt: "#2d2b3d", bgSel: "#3c3a54",
      border:   "#524f6b", fg: "#f8f8f2", fgMuted: "#cac7e3",
      fgSubtle: "#7970a9", comment: "#7970a9",
      keyword:  "#e87aa0", string: "#e9e987", func: "#62e884",
      type:     "#a1f0fe", number: "#ffca80", constant: "#c8a8f9",
      error:    "#e76d6d", warn:    "#ffca80", success:  "#62e884", accent: "#c8a8f9",
    },
    tokens: [
      { name: "Background",   hex: "#22212c", role: "Editor background (darker than classic)" },
      { name: "Selection",    hex: "#3c3a54", role: "Selection, active line" },
      { name: "Foreground",   hex: "#f8f8f2", role: "Default text" },
      { name: "Comment",      hex: "#7970a9", role: "Comments (muted violet)" },
      { name: "Soft Pink",    hex: "#e87aa0", role: "Keywords" },
      { name: "Soft Green",   hex: "#62e884", role: "Functions" },
      { name: "Soft Cyan",    hex: "#a1f0fe", role: "Types, classes" },
      { name: "Soft Yellow",  hex: "#e9e987", role: "Strings" },
      { name: "Soft Orange",  hex: "#ffca80", role: "Numbers, constants" },
      { name: "Soft Purple",  hex: "#c8a8f9", role: "Instance reserved words" },
    ]
  },

  // ── CATPPUCCIN MOCHA ──────────────────────────────────────────────────────
  "catppuccin-mocha": {
    name: "Catppuccin Mocha", type: "dark", family: "Catppuccin",
    source: "catppuccin.com/palette",
    description: "The original Catppuccin. Darkest variant — cozy feeling with color-rich accents.",
    colors: {
      bg:       "#1e1e2e", // base
      bgAlt:    "#181825", // mantle
      bgSel:    "#313244", // surface0
      border:   "#45475a", // surface1
      fg:       "#cdd6f4", // text
      fgMuted:  "#bac2de", // subtext1
      fgSubtle: "#a6adc8", // subtext0
      comment:  "#6c7086", // overlay0
      keyword:  "#cba6f7", // mauve – keywords
      string:   "#a6e3a1", // green – strings
      func:     "#89b4fa", // blue – functions
      type:     "#89dceb", // sky – types
      number:   "#fab387", // peach – numbers
      constant: "#f5c2e7", // pink – constants
      error:    "#f38ba8", // red
      warn:     "#f9e2af", // yellow
      success:  "#a6e3a1", // green
      accent:   "#cba6f7", // mauve
    },
    tokens: [
      { name: "Base",      hex: "#1e1e2e", role: "Default background" },
      { name: "Mantle",    hex: "#181825", role: "Status bar, darker panels" },
      { name: "Crust",     hex: "#11111b", role: "Deepest background layer" },
      { name: "Surface0",  hex: "#313244", role: "Active line, selection" },
      { name: "Surface1",  hex: "#45475a", role: "Borders, separators" },
      { name: "Surface2",  hex: "#585b70", role: "Subtle borders, comments bg" },
      { name: "Overlay0",  hex: "#6c7086", role: "Comments, disabled text" },
      { name: "Overlay1",  hex: "#7f849c", role: "Line numbers" },
      { name: "Overlay2",  hex: "#9399b2", role: "Fold markers, inactive" },
      { name: "Subtext0",  hex: "#a6adc8", role: "Secondary text" },
      { name: "Subtext1",  hex: "#bac2de", role: "Muted text" },
      { name: "Text",      hex: "#cdd6f4", role: "Primary text / foreground" },
      { name: "Lavender",  hex: "#b4befe", role: "Parameter names" },
      { name: "Blue",      hex: "#89b4fa", role: "Functions, methods" },
      { name: "Sapphire",  hex: "#74c7ec", role: "Constructors" },
      { name: "Sky",       hex: "#89dceb", role: "Types, interfaces" },
      { name: "Teal",      hex: "#94e2d5", role: "Built-ins, support" },
      { name: "Green",     hex: "#a6e3a1", role: "Strings" },
      { name: "Yellow",    hex: "#f9e2af", role: "Warnings, escape chars" },
      { name: "Peach",     hex: "#fab387", role: "Numbers, attributes" },
      { name: "Maroon",    hex: "#eba0ac", role: "Deprecated, errors (soft)" },
      { name: "Red",       hex: "#f38ba8", role: "Errors, diff deletions" },
      { name: "Mauve",     hex: "#cba6f7", role: "Keywords, storage" },
      { name: "Pink",      hex: "#f5c2e7", role: "Constants, decorators" },
      { name: "Flamingo",  hex: "#f2cdcd", role: "Regex, punctuation (special)" },
      { name: "Rosewater", hex: "#f5e0dc", role: "Cursor, special highlights" },
    ]
  },

  // ── CATPPUCCIN MACCHIATO ──────────────────────────────────────────────────
  "catppuccin-macchiato": {
    name: "Catppuccin Macchiato", type: "dark", family: "Catppuccin",
    source: "catppuccin.com/palette",
    description: "Medium contrast with gentle colors — a soothing atmosphere.",
    colors: {
      bg:       "#24273a", bgAlt: "#1e2030", bgSel: "#363a4f",
      border:   "#494d64", fg: "#cad3f5", fgMuted: "#b8c0e0",
      fgSubtle: "#a5adcb", comment: "#6e738d",
      keyword:  "#c6a0f6", string: "#a6da95", func: "#8aadf4",
      type:     "#91d7e3", number: "#f5a97f", constant: "#f0c6c6",
      error:    "#ed8796", warn:    "#eed49f", success:  "#a6da95", accent: "#c6a0f6",
    },
    tokens: [
      { name: "Base",     hex: "#24273a", role: "Default background" },
      { name: "Surface0", hex: "#363a4f", role: "Selection, active line" },
      { name: "Text",     hex: "#cad3f5", role: "Primary foreground" },
      { name: "Overlay0", hex: "#6e738d", role: "Comments" },
      { name: "Mauve",    hex: "#c6a0f6", role: "Keywords" },
      { name: "Blue",     hex: "#8aadf4", role: "Functions" },
      { name: "Sky",      hex: "#91d7e3", role: "Types" },
      { name: "Green",    hex: "#a6da95", role: "Strings" },
      { name: "Peach",    hex: "#f5a97f", role: "Numbers" },
      { name: "Red",      hex: "#ed8796", role: "Errors" },
    ]
  },

  // ── CATPPUCCIN FRAPPE ─────────────────────────────────────────────────────
  "catppuccin-frappe": {
    name: "Catppuccin Frappé", type: "dark", family: "Catppuccin",
    source: "catppuccin.com/palette",
    description: "Less vibrant alternative — subdued colors for a muted aesthetic.",
    colors: {
      bg:       "#303446", bgAlt: "#292c3c", bgSel: "#414559",
      border:   "#51576d", fg: "#c6d0f5", fgMuted: "#b5bfe2",
      fgSubtle: "#a5adce", comment: "#737994",
      keyword:  "#ca9ee6", string: "#a6d189", func: "#8caaee",
      type:     "#85c1dc", number: "#ef9f76", constant: "#eebebe",
      error:    "#e78284", warn:    "#e5c890", success:  "#a6d189", accent: "#ca9ee6",
    },
    tokens: [
      { name: "Base",     hex: "#303446", role: "Default background" },
      { name: "Surface0", hex: "#414559", role: "Selection, active line" },
      { name: "Text",     hex: "#c6d0f5", role: "Primary foreground" },
      { name: "Overlay0", hex: "#737994", role: "Comments" },
      { name: "Mauve",    hex: "#ca9ee6", role: "Keywords" },
      { name: "Blue",     hex: "#8caaee", role: "Functions" },
      { name: "Sky",      hex: "#85c1dc", role: "Types" },
      { name: "Green",    hex: "#a6d189", role: "Strings" },
      { name: "Peach",    hex: "#ef9f76", role: "Numbers" },
      { name: "Red",      hex: "#e78284", role: "Errors" },
    ]
  },

  // ── CATPPUCCIN LATTE ──────────────────────────────────────────────────────
  "catppuccin-latte": {
    name: "Catppuccin Latte", type: "light", family: "Catppuccin",
    source: "catppuccin.com/palette",
    description: "The lightest flavor — harmoniously inverting the Catppuccin essence.",
    colors: {
      bg:       "#eff1f5", bgAlt: "#e6e9ef", bgSel: "#ccd0da",
      border:   "#bcc0cc", fg: "#4c4f69", fgMuted: "#5c5f77",
      fgSubtle: "#6c6f85", comment: "#8c8fa1",
      keyword:  "#8839ef", string: "#40a02b", func: "#1e66f5",
      type:     "#04a5e5", number: "#fe640b", constant: "#ea76cb",
      error:    "#d20f39", warn:    "#df8e1d", success:  "#40a02b", accent: "#8839ef",
    },
    tokens: [
      { name: "Base",     hex: "#eff1f5", role: "Default background" },
      { name: "Surface0", hex: "#ccd0da", role: "Selection, active line" },
      { name: "Text",     hex: "#4c4f69", role: "Primary foreground" },
      { name: "Overlay0", hex: "#8c8fa1", role: "Comments" },
      { name: "Mauve",    hex: "#8839ef", role: "Keywords" },
      { name: "Blue",     hex: "#1e66f5", role: "Functions" },
      { name: "Sky",      hex: "#04a5e5", role: "Types" },
      { name: "Green",    hex: "#40a02b", role: "Strings" },
      { name: "Peach",    hex: "#fe640b", role: "Numbers" },
      { name: "Red",      hex: "#d20f39", role: "Errors" },
      { name: "Lavender", hex: "#7287fd", role: "Parameters" },
      { name: "Teal",     hex: "#179299", role: "Built-ins" },
    ]
  },

  // ── MONOKAI ───────────────────────────────────────────────────────────────
  "monokai": {
    name: "Monokai", type: "dark", family: "Monokai",
    source: "monokai.pro",
    description: "The iconic theme by Wimer Hazenberg (2006). Sublime Text's original default.",
    colors: {
      bg:       "#272822", bgAlt: "#3e3d32", bgSel: "#49483e",
      border:   "#75715e", fg: "#f8f8f2", fgMuted: "#f8f8f2",
      fgSubtle: "#75715e", comment: "#75715e",
      keyword:  "#f92672", // Pink/Red – keywords
      string:   "#e6db74", // Yellow – strings
      func:     "#a6e22e", // Green – functions
      type:     "#66d9ef", // Cyan – types, classes
      number:   "#ae81ff", // Purple – numbers
      constant: "#ae81ff", // Purple
      error:    "#f92672", warn: "#e6db74", success: "#a6e22e", accent: "#f92672",
    },
    tokens: [
      { name: "Background",   hex: "#272822", role: "Editor background" },
      { name: "Active Line",  hex: "#3e3d32", role: "Current line highlight" },
      { name: "Selection",    hex: "#49483e", role: "Text selection" },
      { name: "Foreground",   hex: "#f8f8f2", role: "Default text" },
      { name: "Comment",      hex: "#75715e", role: "Comments — warm gray" },
      { name: "Red/Pink",     hex: "#f92672", role: "Keywords: if, return, class…" },
      { name: "Green",        hex: "#a6e22e", role: "Functions, method declarations" },
      { name: "Cyan",         hex: "#66d9ef", role: "Types, classes, built-ins, CSS properties" },
      { name: "Yellow",       hex: "#e6db74", role: "Strings — double & single quoted" },
      { name: "Orange",       hex: "#fd971f", role: "Function parameters (italic)" },
      { name: "Purple",       hex: "#ae81ff", role: "Numbers, hex values, constants" },
    ]
  },

  // ── ONE DARK PRO ─────────────────────────────────────────────────────────
  "one-dark-pro": {
    name: "One Dark Pro", type: "dark", family: "One Dark",
    source: "github.com/Binaryify/OneDark-Pro",
    description: "Atom's iconic One Dark theme, ported and refined for VS Code.",
    colors: {
      bg:       "#282c34", bgAlt: "#21252b", bgSel: "#3e4452",
      border:   "#4b5263", fg: "#abb2bf", fgMuted: "#abb2bf",
      fgSubtle: "#5c6370", comment: "#5c6370",
      keyword:  "#c678dd", // Purple – keywords
      string:   "#98c379", // Green – strings
      func:     "#61afef", // Blue – functions
      type:     "#e5c07b", // Yellow/Gold – types, classes
      number:   "#d19a66", // Orange – numbers
      constant: "#e06c75", // Red – constants
      error:    "#e06c75", warn: "#e5c07b", success: "#98c379", accent: "#61afef",
    },
    tokens: [
      { name: "Background",  hex: "#282c34", role: "Editor background — Atom-inspired gray" },
      { name: "bg Dark",     hex: "#21252b", role: "Sidebar, activity bar" },
      { name: "Selection",   hex: "#3e4452", role: "Active line, text selection" },
      { name: "Foreground",  hex: "#abb2bf", role: "Default text" },
      { name: "Comment",     hex: "#5c6370", role: "Comments (italic)" },
      { name: "Purple",      hex: "#c678dd", role: "Keywords, storage modifiers" },
      { name: "Blue",        hex: "#61afef", role: "Functions, method calls" },
      { name: "Cyan",        hex: "#56b6c2", role: "Built-in functions, CSS values" },
      { name: "Green",       hex: "#98c379", role: "Strings" },
      { name: "Yellow",      hex: "#e5c07b", role: "Classes, types, object keys" },
      { name: "Orange",      hex: "#d19a66", role: "Numbers, booleans, constants" },
      { name: "Red",         hex: "#e06c75", role: "Variables, errors, diff deletions" },
    ]
  },

  // ── ONE LIGHT ─────────────────────────────────────────────────────────────
  "one-light": {
    name: "One Light", type: "light", family: "One Dark",
    source: "github.com/Binaryify/OneDark-Pro",
    description: "Atom's One Light — warm off-white background with harmonious syntax colors.",
    colors: {
      bg:       "#fafafa", bgAlt: "#f0f0f0", bgSel: "#d9e1e8",
      border:   "#c8c8c8", fg: "#383a42", fgMuted: "#696c77",
      fgSubtle: "#a0a1a7", comment: "#a0a1a7",
      keyword:  "#a626a4", string: "#50a14f", func: "#4078f2",
      type:     "#c18401", number: "#986801", constant: "#ca1243",
      error:    "#ca1243", warn: "#c18401", success: "#50a14f", accent: "#4078f2",
    },
    tokens: [
      { name: "Background",  hex: "#fafafa", role: "Editor background — warm white" },
      { name: "Selection",   hex: "#d9e1e8", role: "Text selection, active line" },
      { name: "Foreground",  hex: "#383a42", role: "Default text" },
      { name: "Comment",     hex: "#a0a1a7", role: "Comments (italic)" },
      { name: "Purple",      hex: "#a626a4", role: "Keywords" },
      { name: "Blue",        hex: "#4078f2", role: "Functions" },
      { name: "Green",       hex: "#50a14f", role: "Strings" },
      { name: "Yellow",      hex: "#c18401", role: "Types, classes" },
      { name: "Orange",      hex: "#986801", role: "Numbers, constants" },
      { name: "Red",         hex: "#ca1243", role: "Errors, variables (special)" },
    ]
  },

  // ── TOKYO NIGHT ───────────────────────────────────────────────────────────
  "tokyo-night": {
    name: "Tokyo Night", type: "dark", family: "Tokyo Night",
    source: "github.com/enkia/tokyo-night-vscode-theme",
    description: "Deep, rich backgrounds with vibrant accents — inspired by Tokyo's city lights at night.",
    colors: {
      bg:       "#1a1b26", bgAlt: "#1f2335", bgSel: "#283457",
      border:   "#3b4261", fg: "#c0caf5", fgMuted: "#a9b1d6",
      fgSubtle: "#565f89", comment: "#565f89",
      keyword:  "#bb9af7", // purple – keywords (italic)
      string:   "#9ece6a", // green – strings
      func:     "#7aa2f7", // blue – functions
      type:     "#2ac3de", // cyan – types
      number:   "#ff9e64", // orange – numbers
      constant: "#ff9e64",
      error:    "#f7768e", warn: "#e0af68", success: "#9ece6a", accent: "#7aa2f7",
    },
    tokens: [
      { name: "Background",    hex: "#1a1b26", role: "Editor background — deepest dark" },
      { name: "bg Active",     hex: "#1f2335", role: "Sidebar, active tab bg" },
      { name: "Selection",     hex: "#283457", role: "Text selection" },
      { name: "Foreground",    hex: "#c0caf5", role: "Primary text — blue-tinted white" },
      { name: "Alt Text",      hex: "#a9b1d6", role: "Secondary text" },
      { name: "Comment",       hex: "#565f89", role: "Comments (italic)" },
      { name: "Purple",        hex: "#bb9af7", role: "Keywords (italic)" },
      { name: "Blue",          hex: "#7aa2f7", role: "Functions, declarations" },
      { name: "Cyan",          hex: "#2ac3de", role: "Types, CSS properties" },
      { name: "Sky Blue",      hex: "#7dcfff", role: "Object props, regex, md headings" },
      { name: "Green",         hex: "#9ece6a", role: "Strings" },
      { name: "Orange",        hex: "#ff9e64", role: "Numbers, constants" },
      { name: "Red",           hex: "#f7768e", role: "Errors, diff deletions" },
      { name: "Yellow",        hex: "#e0af68", role: "Warnings, class names" },
    ]
  },

  // ── ROSE PINE ─────────────────────────────────────────────────────────────
  "rose-pine": {
    name: "Rosé Pine", type: "dark", family: "Rosé Pine",
    source: "rosepinetheme.com",
    description: "All natural pine, faux fur and a bit of soho vibes. Main (darkest) variant.",
    colors: {
      bg:       "#191724", // base
      bgAlt:    "#1f1d2e", // surface
      bgSel:    "#403d52", // highlight-med
      border:   "#524f67", // highlight-high
      fg:       "#e0def4", // text
      fgMuted:  "#908caa", // subtle
      fgSubtle: "#6e6a86", // muted
      comment:  "#6e6a86", // muted
      keyword:  "#31748f", // pine – keywords
      string:   "#f6c177", // gold – strings
      func:     "#ebbcba", // rose – functions
      type:     "#9ccfd8", // foam – types
      number:   "#f6c177", // gold
      constant: "#eb6f92", // love – constants, love
      error:    "#eb6f92", // love
      warn:     "#f6c177", // gold
      success:  "#9ccfd8", // foam
      accent:   "#c4a7e7", // iris
    },
    tokens: [
      { name: "Base",           hex: "#191724", role: "Deepest background" },
      { name: "Surface",        hex: "#1f1d2e", role: "Panels, sidebars" },
      { name: "Overlay",        hex: "#26233a", role: "Floating panels, modals" },
      { name: "Muted",          hex: "#6e6a86", role: "Comments, disabled elements" },
      { name: "Subtle",         hex: "#908caa", role: "Punctuation, tab names" },
      { name: "Text",           hex: "#e0def4", role: "Primary foreground" },
      { name: "Love",           hex: "#eb6f92", role: "Errors, deletion, critical" },
      { name: "Gold",           hex: "#f6c177", role: "Strings, warnings, numbers" },
      { name: "Rose",           hex: "#ebbcba", role: "Functions, methods" },
      { name: "Pine",           hex: "#31748f", role: "Keywords, links" },
      { name: "Foam",           hex: "#9ccfd8", role: "Types, support, regex" },
      { name: "Iris",           hex: "#c4a7e7", role: "Variables, constants, accent" },
      { name: "Highlight Low",  hex: "#21202e", role: "Subtle backgrounds, folds" },
      { name: "Highlight Med",  hex: "#403d52", role: "Selection, active line" },
      { name: "Highlight High", hex: "#524f67", role: "Borders, focused selection" },
    ]
  },

  // ── ROSE PINE MOON ────────────────────────────────────────────────────────
  "rose-pine-moon": {
    name: "Rosé Pine Moon", type: "dark", family: "Rosé Pine",
    source: "rosepinetheme.com",
    description: "Slightly lighter and cooler — more purple-tinted than Main.",
    colors: {
      bg:       "#232136", bgAlt: "#2a273f", bgSel: "#44415a",
      border:   "#56526e", fg: "#e0def4", fgMuted: "#908caa",
      fgSubtle: "#6e6a86", comment: "#6e6a86",
      keyword:  "#3e8fb0", string: "#f6c177", func: "#ea9a97",
      type:     "#9ccfd8", number: "#f6c177", constant: "#eb6f92",
      error:    "#eb6f92", warn: "#f6c177", success: "#9ccfd8", accent: "#c4a7e7",
    },
    tokens: [
      { name: "Base",     hex: "#232136", role: "Background (cooler than main)" },
      { name: "Surface",  hex: "#2a273f", role: "Panels" },
      { name: "Muted",    hex: "#6e6a86", role: "Comments" },
      { name: "Text",     hex: "#e0def4", role: "Foreground" },
      { name: "Love",     hex: "#eb6f92", role: "Errors, constants" },
      { name: "Gold",     hex: "#f6c177", role: "Strings, numbers" },
      { name: "Rose",     hex: "#ea9a97", role: "Functions (moon variant)" },
      { name: "Pine",     hex: "#3e8fb0", role: "Keywords" },
      { name: "Foam",     hex: "#9ccfd8", role: "Types" },
      { name: "Iris",     hex: "#c4a7e7", role: "Variables, accent" },
    ]
  },

  // ── ROSE PINE DAWN ────────────────────────────────────────────────────────
  "rose-pine-dawn": {
    name: "Rosé Pine Dawn", type: "light", family: "Rosé Pine",
    source: "rosepinetheme.com",
    description: "The light variant — warm cream background with the same Rosé Pine palette.",
    colors: {
      bg:       "#faf4ed", bgAlt: "#fffaf3", bgSel: "#dfdad9",
      border:   "#cecacd", fg: "#575279", fgMuted: "#797593",
      fgSubtle: "#9893a5", comment: "#9893a5",
      keyword:  "#286983", string: "#ea9d34", func: "#d7827e",
      type:     "#56949f", number: "#ea9d34", constant: "#b4637a",
      error:    "#b4637a", warn: "#ea9d34", success: "#56949f", accent: "#907aa9",
    },
    tokens: [
      { name: "Base",     hex: "#faf4ed", role: "Background — warm cream" },
      { name: "Surface",  hex: "#fffaf3", role: "Lighter panels" },
      { name: "Muted",    hex: "#9893a5", role: "Comments" },
      { name: "Text",     hex: "#575279", role: "Primary foreground" },
      { name: "Love",     hex: "#b4637a", role: "Errors, key accents" },
      { name: "Gold",     hex: "#ea9d34", role: "Strings, numbers" },
      { name: "Rose",     hex: "#d7827e", role: "Functions (dawn variant)" },
      { name: "Pine",     hex: "#286983", role: "Keywords, links" },
      { name: "Foam",     hex: "#56949f", role: "Types" },
      { name: "Iris",     hex: "#907aa9", role: "Variables, accent" },
    ]
  },

  // ── GITHUB DARK ───────────────────────────────────────────────────────────
  "github-dark": {
    name: "GitHub Dark", type: "dark", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "GitHub's official dark theme — the exact colors used on github.com.",
    colors: {
      bg:       "#0d1117", bgAlt: "#161b22", bgSel: "#1f2937",
      border:   "#30363d", fg: "#c9d1d9", fgMuted: "#8b949e",
      fgSubtle: "#6e7681", comment: "#8b949e",
      keyword:  "#ff7b72", string: "#a5d6ff", func: "#d2a8ff",
      type:     "#79c0ff", number: "#79c0ff", constant: "#79c0ff",
      error:    "#f85149", warn: "#d29922", success: "#3fb950", accent: "#58a6ff",
    },
    tokens: [
      { name: "Background",  hex: "#0d1117", role: "Editor background — GitHub's darkest" },
      { name: "bg Secondary",hex: "#161b22", role: "Sidebar, panels" },
      { name: "Selection",   hex: "#1f2937", role: "Active line, text selection" },
      { name: "Border",      hex: "#30363d", role: "Borders, separators" },
      { name: "Foreground",  hex: "#c9d1d9", role: "Primary text" },
      { name: "Comment",     hex: "#8b949e", role: "Comments" },
      { name: "Red",         hex: "#ff7b72", role: "Keywords, HTML tags" },
      { name: "Purple",      hex: "#d2a8ff", role: "Functions, methods" },
      { name: "Blue",        hex: "#79c0ff", role: "Types, numbers, constants" },
      { name: "Light Blue",  hex: "#a5d6ff", role: "Strings, attribute values" },
      { name: "Teal",        hex: "#39d353", role: "Added lines (diff)" },
      { name: "Link Blue",   hex: "#58a6ff", role: "Links, primary accent" },
    ]
  },

  // ── GITHUB LIGHT ──────────────────────────────────────────────────────────
  "github-light": {
    name: "GitHub Light", type: "light", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "GitHub's official light theme — matches github.com's code view exactly.",
    colors: {
      bg:       "#ffffff", bgAlt: "#f6f8fa", bgSel: "#e8f3fe",
      border:   "#d0d7de", fg: "#24292f", fgMuted: "#57606a",
      fgSubtle: "#6e7781", comment: "#6a737d",
      keyword:  "#cf222e", string: "#0a3069", func: "#8250df",
      type:     "#0550ae", number: "#0550ae", constant: "#0550ae",
      error:    "#cf222e", warn: "#9a6700", success: "#116329", accent: "#0969da",
    },
    tokens: [
      { name: "Background",  hex: "#ffffff", role: "Editor background — pure white" },
      { name: "bg Secondary",hex: "#f6f8fa", role: "Sidebar, inactive tabs" },
      { name: "Selection",   hex: "#e8f3fe", role: "Text selection" },
      { name: "Border",      hex: "#d0d7de", role: "Borders, dividers" },
      { name: "Foreground",  hex: "#24292f", role: "Primary text" },
      { name: "Comment",     hex: "#6a737d", role: "Comments" },
      { name: "Red",         hex: "#cf222e", role: "Keywords, HTML tags" },
      { name: "Purple",      hex: "#8250df", role: "Functions" },
      { name: "Blue",        hex: "#0550ae", role: "Types, numbers, constants" },
      { name: "Dark Blue",   hex: "#0a3069", role: "Strings" },
      { name: "Link Blue",   hex: "#0969da", role: "Links, primary accent" },
    ]
  },

  // ── GITHUB DARK DIMMED ────────────────────────────────────────────────────
  "github-dark-dimmed": {
    name: "GitHub Dark Dimmed", type: "dark", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "A softer take on GitHub Dark — dimmed for reduced eye strain.",
    colors: {
      bg:       "#22272e", bgAlt: "#2d333b", bgSel: "#363d47",
      border:   "#444c56", fg: "#adbac7", fgMuted: "#768390",
      fgSubtle: "#636e7b", comment: "#768390",
      keyword:  "#f47067", string: "#96d0ff", func: "#dcbdfb",
      type:     "#6cb6ff", number: "#6cb6ff", constant: "#6cb6ff",
      error:    "#f47067", warn: "#c69026", success: "#57ab5a", accent: "#539bf5",
    },
    tokens: [
      { name: "Background",  hex: "#22272e", role: "Editor background — dimmed" },
      { name: "bg Alt",      hex: "#2d333b", role: "Sidebar, panels" },
      { name: "Foreground",  hex: "#adbac7", role: "Primary text" },
      { name: "Comment",     hex: "#768390", role: "Comments" },
      { name: "Red",         hex: "#f47067", role: "Keywords" },
      { name: "Purple",      hex: "#dcbdfb", role: "Functions" },
      { name: "Blue",        hex: "#6cb6ff", role: "Types, numbers" },
      { name: "Sky Blue",    hex: "#96d0ff", role: "Strings" },
      { name: "Accent",      hex: "#539bf5", role: "Links, primary UI accent" },
    ]
  },

  // ── MATERIAL THEME ────────────────────────────────────────────────────────
  "material-theme": {
    name: "Material Theme", type: "dark", family: "Material",
    source: "material-theme.com",
    description: "The original Material Design theme — deep ocean base with vibrant syntax.",
    colors: {
      bg:       "#212121", bgAlt: "#1a1a1a", bgSel: "#3c3c3c",
      border:   "#4a4a4a", fg: "#eeffff", fgMuted: "#b0bec5",
      fgSubtle: "#546e7a", comment: "#546e7a",
      keyword:  "#89ddff", string: "#c3e88d", func: "#82aaff",
      type:     "#ffcb6b", number: "#f78c6c", constant: "#ff5370",
      error:    "#ff5370", warn: "#ffcb6b", success: "#c3e88d", accent: "#89ddff",
    },
    tokens: [
      { name: "Background",  hex: "#212121", role: "Editor background" },
      { name: "bg Darker",   hex: "#1a1a1a", role: "Sidebar, title bar" },
      { name: "Selection",   hex: "#3c3c3c", role: "Selection, active line" },
      { name: "Foreground",  hex: "#eeffff", role: "Primary text — cool white" },
      { name: "Comment",     hex: "#546e7a", role: "Comments (italic)" },
      { name: "Cyan",        hex: "#89ddff", role: "Keywords, operators" },
      { name: "Blue",        hex: "#82aaff", role: "Functions, methods" },
      { name: "Yellow",      hex: "#ffcb6b", role: "Types, classes, attributes" },
      { name: "Green",       hex: "#c3e88d", role: "Strings" },
      { name: "Orange",      hex: "#f78c6c", role: "Numbers" },
      { name: "Red",         hex: "#ff5370", role: "Constants, tags, errors" },
      { name: "Purple",      hex: "#c792ea", role: "Properties, punctuation" },
    ]
  },

  // ── MATERIAL OCEAN ────────────────────────────────────────────────────────
  "material-theme-ocean": {
    name: "Material Ocean", type: "dark", family: "Material",
    source: "material-theme.com",
    description: "Deep blue-gray base inspired by ocean depths.",
    colors: {
      bg:       "#0f111a", bgAlt: "#090b10", bgSel: "#1f2233",
      border:   "#2e3250", fg: "#8f93a2", fgMuted: "#717cb4",
      fgSubtle: "#4b526d", comment: "#464b5d",
      keyword:  "#89ddff", string: "#c3e88d", func: "#82aaff",
      type:     "#ffcb6b", number: "#f78c6c", constant: "#ff5370",
      error:    "#ff5370", warn: "#ffcb6b", success: "#c3e88d", accent: "#89ddff",
    },
    tokens: [
      { name: "Background",  hex: "#0f111a", role: "Deepest oceanic background" },
      { name: "bg Alt",      hex: "#090b10", role: "Sidebar, title bar" },
      { name: "Foreground",  hex: "#8f93a2", role: "Primary text — ocean blue-gray" },
      { name: "Comment",     hex: "#464b5d", role: "Comments" },
      { name: "Cyan",        hex: "#89ddff", role: "Keywords" },
      { name: "Blue",        hex: "#82aaff", role: "Functions" },
      { name: "Yellow",      hex: "#ffcb6b", role: "Types, classes" },
      { name: "Green",       hex: "#c3e88d", role: "Strings" },
      { name: "Orange",      hex: "#f78c6c", role: "Numbers" },
      { name: "Red",         hex: "#ff5370", role: "Constants, errors" },
    ]
  },

  // ── MATERIAL PALENIGHT ────────────────────────────────────────────────────
  "material-theme-palenight": {
    name: "Material Palenight", type: "dark", family: "Material",
    source: "material-theme.com",
    description: "Pale, cool purple-gray tones. Very popular for long sessions.",
    colors: {
      bg:       "#292d3e", bgAlt: "#1b1e2b", bgSel: "#32374d",
      border:   "#3e4462", fg: "#a6accd", fgMuted: "#676e95",
      fgSubtle: "#4b526d", comment: "#676e95",
      keyword:  "#89ddff", string: "#c3e88d", func: "#82aaff",
      type:     "#ffcb6b", number: "#f78c6c", constant: "#ff5370",
      error:    "#ff5370", warn: "#ffcb6b", success: "#c3e88d", accent: "#c792ea",
    },
    tokens: [
      { name: "Background",  hex: "#292d3e", role: "Editor background — purple-slate" },
      { name: "Foreground",  hex: "#a6accd", role: "Primary text" },
      { name: "Comment",     hex: "#676e95", role: "Comments" },
      { name: "Cyan",        hex: "#89ddff", role: "Keywords" },
      { name: "Blue",        hex: "#82aaff", role: "Functions" },
      { name: "Yellow",      hex: "#ffcb6b", role: "Types" },
      { name: "Green",       hex: "#c3e88d", role: "Strings" },
      { name: "Orange",      hex: "#f78c6c", role: "Numbers" },
      { name: "Red",         hex: "#ff5370", role: "Constants" },
      { name: "Purple",      hex: "#c792ea", role: "Properties" },
    ]
  },

  // ── MATERIAL LIGHTER ──────────────────────────────────────────────────────
  "material-theme-lighter": {
    name: "Material Lighter", type: "light", family: "Material",
    source: "material-theme.com",
    description: "Material Design light — clean white with vibrant saturated accents.",
    colors: {
      bg:       "#fafafa", bgAlt: "#e7e7e8", bgSel: "#cceae7",
      border:   "#90a4ae", fg: "#546e7a", fgMuted: "#90a4ae",
      fgSubtle: "#b0bec5", comment: "#aabfc9",
      keyword:  "#39adb5", string: "#91b859", func: "#6182b8",
      type:     "#e2931d", number: "#f76d47", constant: "#e53935",
      error:    "#e53935", warn: "#e2931d", success: "#91b859", accent: "#39adb5",
    },
    tokens: [
      { name: "Background",  hex: "#fafafa", role: "Editor background" },
      { name: "Selection",   hex: "#cceae7", role: "Text selection" },
      { name: "Foreground",  hex: "#546e7a", role: "Primary text — blue-gray" },
      { name: "Comment",     hex: "#aabfc9", role: "Comments" },
      { name: "Teal",        hex: "#39adb5", role: "Keywords" },
      { name: "Blue",        hex: "#6182b8", role: "Functions" },
      { name: "Green",       hex: "#91b859", role: "Strings" },
      { name: "Orange",      hex: "#e2931d", role: "Types, classes" },
      { name: "Deep Orange", hex: "#f76d47", role: "Numbers" },
      { name: "Red",         hex: "#e53935", role: "Constants, errors" },
    ]
  },

  // ── SOLARIZED DARK ────────────────────────────────────────────────────────
  "solarized-dark": {
    name: "Solarized Dark", type: "dark", family: "Solarized",
    source: "ethanschoonover.com/solarized",
    description: "Ethan Schoonover's perceptually balanced palette. Selective contrast design.",
    colors: {
      bg:       "#002b36", // base03
      bgAlt:    "#073642", // base02
      bgSel:    "#073642",
      border:   "#586e75", // base01
      fg:       "#839496", // base0
      fgMuted:  "#657b83", // base00
      fgSubtle: "#586e75", // base01
      comment:  "#586e75", // base01
      keyword:  "#859900", // green – keywords
      string:   "#2aa198", // cyan – strings
      func:     "#268bd2", // blue – functions
      type:     "#b58900", // yellow – types
      number:   "#d33682", // magenta – numbers
      constant: "#cb4b16", // orange – constants
      error:    "#dc322f", // red
      warn:     "#b58900", // yellow
      success:  "#859900", // green
      accent:   "#268bd2", // blue
    },
    tokens: [
      { name: "Base03",   hex: "#002b36", role: "Background — the deepest shade" },
      { name: "Base02",   hex: "#073642", role: "Background highlights (slightly lighter)" },
      { name: "Base01",   hex: "#586e75", role: "Comments, secondary content (optional)" },
      { name: "Base00",   hex: "#657b83", role: "Body text (optional use)" },
      { name: "Base0",    hex: "#839496", role: "Primary body text" },
      { name: "Base1",    hex: "#93a1a1", role: "Emphasis content" },
      { name: "Base2",    hex: "#eee8d5", role: "Background for light theme" },
      { name: "Base3",    hex: "#fdf6e3", role: "Light theme main background" },
      { name: "Yellow",   hex: "#b58900", role: "Types, class names" },
      { name: "Orange",   hex: "#cb4b16", role: "Constants, special identifiers" },
      { name: "Red",      hex: "#dc322f", role: "Errors" },
      { name: "Magenta",  hex: "#d33682", role: "Numbers, regex" },
      { name: "Violet",   hex: "#6c71c4", role: "Properties, variables (special)" },
      { name: "Blue",     hex: "#268bd2", role: "Functions, links" },
      { name: "Cyan",     hex: "#2aa198", role: "Strings" },
      { name: "Green",    hex: "#859900", role: "Keywords" },
    ]
  },

  // ── SOLARIZED LIGHT ───────────────────────────────────────────────────────
  "solarized-light": {
    name: "Solarized Light", type: "light", family: "Solarized",
    source: "ethanschoonover.com/solarized",
    description: "The same perceptually balanced palette, inverted for bright environments.",
    colors: {
      bg:       "#fdf6e3", bgAlt: "#eee8d5", bgSel: "#eee8d5",
      border:   "#93a1a1", fg: "#657b83", fgMuted: "#839496",
      fgSubtle: "#93a1a1", comment: "#93a1a1",
      keyword:  "#859900", string: "#2aa198", func: "#268bd2",
      type:     "#b58900", number: "#d33682", constant: "#cb4b16",
      error:    "#dc322f", warn: "#b58900", success: "#859900", accent: "#268bd2",
    },
    tokens: [
      { name: "Base3",  hex: "#fdf6e3", role: "Main background — warm cream" },
      { name: "Base2",  hex: "#eee8d5", role: "Background highlights" },
      { name: "Base1",  hex: "#93a1a1", role: "Comments" },
      { name: "Base00", hex: "#657b83", role: "Primary foreground" },
      { name: "Yellow", hex: "#b58900", role: "Types" },
      { name: "Orange", hex: "#cb4b16", role: "Constants" },
      { name: "Red",    hex: "#dc322f", role: "Errors" },
      { name: "Blue",   hex: "#268bd2", role: "Functions" },
      { name: "Cyan",   hex: "#2aa198", role: "Strings" },
      { name: "Green",  hex: "#859900", role: "Keywords" },
    ]
  },

  // ── VITESSE DARK ──────────────────────────────────────────────────────────
  "vitesse-dark": {
    name: "Vitesse Dark", type: "dark", family: "Vitesse",
    source: "github.com/antfu/vscode-theme-vitesse",
    description: "Anthony Fu's clean, minimal theme. Reduced noise, focused syntax.",
    colors: {
      bg:       "#121212", bgAlt: "#1a1a1a", bgSel: "#282828",
      border:   "#2e2e2e", fg: "#dbd7ca", fgMuted: "#9b9b9b",
      fgSubtle: "#666", comment: "#758575",
      keyword:  "#4d9375", string: "#c98a7d", func: "#80a0c0",
      type:     "#5da0ad", number: "#6496c8", constant: "#e6c87b",
      error:    "#e06c75", warn: "#d4976c", success: "#80a070", accent: "#4d9375",
    },
    tokens: [
      { name: "Background",  hex: "#121212", role: "Near-black base" },
      { name: "bg Alt",      hex: "#1a1a1a", role: "Slightly lighter panels" },
      { name: "Selection",   hex: "#282828", role: "Active line, selection" },
      { name: "Foreground",  hex: "#dbd7ca", role: "Warm off-white text" },
      { name: "Comment",     hex: "#758575", role: "Comments — olive green" },
      { name: "Teal-Green",  hex: "#4d9375", role: "Keywords, booleans" },
      { name: "Salmon",      hex: "#c98a7d", role: "Strings — warm salmon" },
      { name: "Blue",        hex: "#80a0c0", role: "Functions" },
      { name: "Teal",        hex: "#5da0ad", role: "Types" },
      { name: "Blue Dark",   hex: "#6496c8", role: "Numbers" },
      { name: "Yellow",      hex: "#e6c87b", role: "Constants, attributes" },
    ]
  },

  // ── VITESSE LIGHT ─────────────────────────────────────────────────────────
  "vitesse-light": {
    name: "Vitesse Light", type: "light", family: "Vitesse",
    source: "github.com/antfu/vscode-theme-vitesse",
    description: "Vitesse Light — the same gentle palette on a warm white background.",
    colors: {
      bg:       "#ffffff", bgAlt: "#f8f8f8", bgSel: "#e6e6e6",
      border:   "#cccccc", fg: "#393a34", fgMuted: "#666",
      fgSubtle: "#999", comment: "#a0a077",
      keyword:  "#1e754f", string: "#b56959", func: "#59873a",
      type:     "#2e808f", number: "#296aa3", constant: "#a65e2b",
      error:    "#ab5959", warn: "#b07d48", success: "#4e9969", accent: "#1e754f",
    },
    tokens: [
      { name: "Background", hex: "#ffffff", role: "Pure white base" },
      { name: "Foreground", hex: "#393a34", role: "Near-black text" },
      { name: "Comment",    hex: "#a0a077", role: "Olive-toned comments" },
      { name: "Green",      hex: "#1e754f", role: "Keywords" },
      { name: "Red",        hex: "#b56959", role: "Strings" },
      { name: "Teal",       hex: "#2e808f", role: "Types" },
      { name: "Blue",       hex: "#296aa3", role: "Numbers" },
      { name: "Brown",      hex: "#a65e2b", role: "Constants, attributes" },
    ]
  },

  // ── VITESSE BLACK ─────────────────────────────────────────────────────────
  "vitesse-black": {
    name: "Vitesse Black", type: "dark", family: "Vitesse",
    source: "github.com/antfu/vscode-theme-vitesse",
    description: "Maximum darkness variant — pure #000000 background.",
    colors: {
      bg:       "#000000", bgAlt: "#0d0d0d", bgSel: "#1a1a1a",
      border:   "#222", fg: "#dbd7ca", fgMuted: "#858585",
      fgSubtle: "#505050", comment: "#606060",
      keyword:  "#4d9375", string: "#c98a7d", func: "#80a0c0",
      type:     "#5da0ad", number: "#6496c8", constant: "#e6c87b",
      error:    "#e06c75", warn: "#d4976c", success: "#80a070", accent: "#4d9375",
    },
    tokens: [
      { name: "Background",  hex: "#000000", role: "Pure black — maximum OLED contrast" },
      { name: "Foreground",  hex: "#dbd7ca", role: "Warm off-white text" },
      { name: "Comment",     hex: "#606060", role: "Comments" },
      { name: "Green",       hex: "#4d9375", role: "Keywords" },
      { name: "Salmon",      hex: "#c98a7d", role: "Strings" },
      { name: "Blue",        hex: "#80a0c0", role: "Functions" },
      { name: "Yellow",      hex: "#e6c87b", role: "Constants" },
    ]
  },

  // ── MIN DARK ──────────────────────────────────────────────────────────────
  "min-dark": {
    name: "Min Dark", type: "dark", family: "Min",
    source: "github.com/miguelsolorio/min-theme",
    description: "Minimal, calm. Near-monochrome dark with subtle accent hints.",
    colors: {
      bg:       "#1f1f1f", bgAlt: "#181818", bgSel: "#2d2d2d",
      border:   "#333", fg: "#b2b2b2", fgMuted: "#888",
      fgSubtle: "#555", comment: "#525252",
      keyword:  "#c586c0", string: "#ce9178", func: "#dcdcaa",
      type:     "#4ec9b0", number: "#b5cea8", constant: "#9cdcfe",
      error:    "#f44747", warn: "#cca700", success: "#89d185", accent: "#569cd6",
    },
    tokens: [
      { name: "Background",  hex: "#1f1f1f", role: "Editor background" },
      { name: "Foreground",  hex: "#b2b2b2", role: "Default text — gentle gray" },
      { name: "Comment",     hex: "#525252", role: "Comments" },
      { name: "Purple",      hex: "#c586c0", role: "Keywords" },
      { name: "Orange",      hex: "#ce9178", role: "Strings" },
      { name: "Yellow",      hex: "#dcdcaa", role: "Functions" },
      { name: "Teal",        hex: "#4ec9b0", role: "Types" },
      { name: "Blue",        hex: "#569cd6", role: "Variables, numbers" },
      { name: "Green",       hex: "#b5cea8", role: "Numbers" },
    ]
  },

  // ── MIN LIGHT ─────────────────────────────────────────────────────────────
  "min-light": {
    name: "Min Light", type: "light", family: "Min",
    source: "github.com/miguelsolorio/min-theme",
    description: "Minimal, calm light. Clean white with subtle, accessible accents.",
    colors: {
      bg:       "#f8f8f8", bgAlt: "#eeeeee", bgSel: "#d6ebff",
      border:   "#d4d4d4", fg: "#333333", fgMuted: "#666",
      fgSubtle: "#999", comment: "#9a9a9a",
      keyword:  "#7c30d4", string: "#c1440e", func: "#795e26",
      type:     "#267f99", number: "#098658", constant: "#001080",
      error:    "#e50000", warn: "#865f00", success: "#067d17", accent: "#0000ff",
    },
    tokens: [
      { name: "Background",  hex: "#f8f8f8", role: "Editor background" },
      { name: "Foreground",  hex: "#333333", role: "Primary text" },
      { name: "Comment",     hex: "#9a9a9a", role: "Comments" },
      { name: "Purple",      hex: "#7c30d4", role: "Keywords" },
      { name: "Red-Orange",  hex: "#c1440e", role: "Strings" },
      { name: "Brown",       hex: "#795e26", role: "Functions" },
      { name: "Teal",        hex: "#267f99", role: "Types" },
      { name: "Green",       hex: "#098658", role: "Numbers" },
    ]
  },

  // ── POIMANDRES ────────────────────────────────────────────────────────────
  "poimandres": {
    name: "Poimandres", type: "dark", family: "Indie",
    source: "github.com/drcmda/poimandres-theme",
    description: "Cool, cosmic dark theme by react-spring / pmndrs authors.",
    colors: {
      bg:       "#1b1e28", bgAlt: "#171922", bgSel: "#303345",
      border:   "#3d405f", fg: "#a6accd", fgMuted: "#767c9d",
      fgSubtle: "#506477", comment: "#767c9d",
      keyword:  "#91b4d5", string: "#5de4c7", func: "#add7ff",
      type:     "#5de4c7", number: "#d0679d", constant: "#add7ff",
      error:    "#d0679d", warn: "#fffac2", success: "#5de4c7", accent: "#a6da95",
    },
    tokens: [
      { name: "Background", hex: "#1b1e28", role: "Deep blue-gray background" },
      { name: "Foreground", hex: "#a6accd", role: "Primary text" },
      { name: "Comment",    hex: "#767c9d", role: "Comments" },
      { name: "Blue",       hex: "#91b4d5", role: "Keywords" },
      { name: "Cyan",       hex: "#5de4c7", role: "Strings, types — vibrant teal" },
      { name: "Light Blue", hex: "#add7ff", role: "Functions, constants" },
      { name: "Pink",       hex: "#d0679d", role: "Numbers, errors" },
      { name: "Yellow",     hex: "#fffac2", role: "Warnings" },
    ]
  },

  // ── SYNTHWAVE 84 ──────────────────────────────────────────────────────────
  "synthwave-84": {
    name: "SynthWave '84", type: "dark", family: "Indie",
    source: "github.com/robb0wen/synthwave-vscode",
    description: "1980s retro-futurism. Neon glow aesthetic with deep purple background.",
    colors: {
      bg:       "#2a2139", bgAlt: "#1d1a2f", bgSel: "#3a2f5b",
      border:   "#4a3f6b", fg: "#ffffff", fgMuted: "#b8b8c8",
      fgSubtle: "#848082", comment: "#848082",
      keyword:  "#fede5d", string: "#ff7edb", func: "#36f9f6",
      type:     "#72f1b8", number: "#f97e72", constant: "#fe4450",
      error:    "#fe4450", warn: "#fede5d", success: "#72f1b8", accent: "#36f9f6",
    },
    tokens: [
      { name: "Background",  hex: "#2a2139", role: "Deep purple-dark background" },
      { name: "Foreground",  hex: "#ffffff", role: "Primary text — pure white" },
      { name: "Comment",     hex: "#848082", role: "Comments — muted gray" },
      { name: "Yellow",      hex: "#fede5d", role: "Keywords, CSS properties" },
      { name: "Cyan",        hex: "#36f9f6", role: "Functions — electric cyan" },
      { name: "Teal",        hex: "#72f1b8", role: "Types — emerald glow" },
      { name: "Pink",        hex: "#ff7edb", role: "Strings — hot pink" },
      { name: "Orange",      hex: "#f97e72", role: "Numbers" },
      { name: "Red",         hex: "#fe4450", role: "Constants, errors — neon red" },
    ]
  },

  // ── ANDROMEEDA ────────────────────────────────────────────────────────────
  "andromeeda": {
    name: "Andromeeda", type: "dark", family: "Indie",
    source: "github.com/EliverLara/Andromeda",
    description: "Deep space purple with vibrant accents. Inspired by the Andromeda galaxy.",
    colors: {
      bg:       "#23262e", bgAlt: "#1a1c22", bgSel: "#31343e",
      border:   "#464b5d", fg: "#d5ced9", fgMuted: "#b5adb5",
      fgSubtle: "#77757c", comment: "#6b6b6b",
      keyword:  "#ee5d43", string: "#89e044", func: "#00e8c6",
      type:     "#ffcc00", number: "#f39c12", constant: "#ee5d43",
      error:    "#ee5d43", warn: "#ffcc00", success: "#89e044", accent: "#00e8c6",
    },
    tokens: [
      { name: "Background", hex: "#23262e", role: "Deep space background" },
      { name: "Foreground", hex: "#d5ced9", role: "Soft lavender text" },
      { name: "Comment",    hex: "#6b6b6b", role: "Comments" },
      { name: "Red",        hex: "#ee5d43", role: "Keywords, errors" },
      { name: "Cyan",       hex: "#00e8c6", role: "Functions — electric teal" },
      { name: "Green",      hex: "#89e044", role: "Strings" },
      { name: "Yellow",     hex: "#ffcc00", role: "Types, warnings" },
      { name: "Orange",     hex: "#f39c12", role: "Numbers" },
    ]
  },

  // ── AURORA X ──────────────────────────────────────────────────────────────
  "aurora-x": {
    name: "Aurora X", type: "dark", family: "Indie",
    source: "github.com/auraxtheme",
    description: "Northern lights aesthetic — shifting aurora palette on deep navy.",
    colors: {
      bg:       "#07090f", bgAlt: "#0d1117", bgSel: "#151c2c",
      border:   "#1f2937", fg: "#d4d4d4", fgMuted: "#808080",
      fgSubtle: "#555", comment: "#5c6370",
      keyword:  "#569cd6", string: "#ce9178", func: "#dcdcaa",
      type:     "#4ec9b0", number: "#b5cea8", constant: "#9cdcfe",
      error:    "#f44747", warn: "#ce9178", success: "#4ec9b0", accent: "#569cd6",
    },
    tokens: [
      { name: "Background", hex: "#07090f", role: "Near-black space background" },
      { name: "Foreground", hex: "#d4d4d4", role: "VS Code-style gray text" },
      { name: "Comment",    hex: "#5c6370", role: "Comments" },
      { name: "Blue",       hex: "#569cd6", role: "Keywords" },
      { name: "Orange",     hex: "#ce9178", role: "Strings" },
      { name: "Yellow",     hex: "#dcdcaa", role: "Functions" },
      { name: "Teal",       hex: "#4ec9b0", role: "Types" },
      { name: "Light Blue", hex: "#9cdcfe", role: "Variables" },
    ]
  },

  // ── AYU DARK ─────────────────────────────────────────────────────────────
  "ayu-dark": {
    name: "Ayu Dark", type: "dark", family: "Indie",
    source: "github.com/dempfi/ayu",
    description: "Simple, bright, elegant. Ayu's deep dark variant with warm accents.",
    colors: {
      bg:       "#0d1018", bgAlt: "#0a0e14", bgSel: "#253340",
      border:   "#1a2433", fg: "#bfbdb6", fgMuted: "#5c6773",
      fgSubtle: "#3e4b59", comment: "#5c6773",
      keyword:  "#ff8f40", string: "#aad94c", func: "#ffb454",
      type:     "#59c2ff", number: "#e6b673", constant: "#ff8f40",
      error:    "#d95757", warn: "#e7c547", success: "#aad94c", accent: "#59c2ff",
    },
    tokens: [
      { name: "Background", hex: "#0d1018", role: "Deep dark background" },
      { name: "Foreground", hex: "#bfbdb6", role: "Warm gray text" },
      { name: "Comment",    hex: "#5c6773", role: "Comments" },
      { name: "Orange",     hex: "#ff8f40", role: "Keywords" },
      { name: "Green",      hex: "#aad94c", role: "Strings" },
      { name: "Yellow",     hex: "#ffb454", role: "Functions" },
      { name: "Blue",       hex: "#59c2ff", role: "Types" },
      { name: "Gold",       hex: "#e6b673", role: "Numbers, attributes" },
    ]
  },

  // ── KANAGAWA WAVE ─────────────────────────────────────────────────────────
  "kanagawa-wave": {
    name: "Kanagawa Wave", type: "dark", family: "Kanagawa",
    source: "github.com/rebelot/kanagawa.nvim",
    description: "Inspired by The Great Wave off Kanagawa. Warm blue-dark palette.",
    colors: {
      bg:       "#1f1f28", bgAlt: "#16161d", bgSel: "#2d4f67",
      border:   "#363646", fg: "#dcd7ba", fgMuted: "#c8c093",
      fgSubtle: "#727169", comment: "#727169",
      keyword:  "#957fb8", string: "#98bb6c", func: "#7e9cd8",
      type:     "#7aa89f", number: "#d27e99", constant: "#e6c384",
      error:    "#c34043", warn: "#ff9e3b", success: "#76946a", accent: "#7e9cd8",
    },
    tokens: [
      { name: "Sumi-Ink 0",   hex: "#16161d", role: "Darkest background" },
      { name: "Sumi-Ink 1",   hex: "#1f1f28", role: "Editor background" },
      { name: "Sumi-Ink 3",   hex: "#363646", role: "Borders" },
      { name: "Fuji White",   hex: "#dcd7ba", role: "Foreground — warm white" },
      { name: "Old White",    hex: "#c8c093", role: "Secondary text" },
      { name: "Fuji Gray",    hex: "#727169", role: "Comments" },
      { name: "Oni Violet",   hex: "#957fb8", role: "Keywords" },
      { name: "Spring Green", hex: "#98bb6c", role: "Strings" },
      { name: "Crystal Blue", hex: "#7e9cd8", role: "Functions" },
      { name: "Wave Aqua",    hex: "#7aa89f", role: "Types" },
      { name: "Sakura Pink",  hex: "#d27e99", role: "Numbers" },
      { name: "Carp Yellow",  hex: "#e6c384", role: "Constants, identifiers" },
      { name: "Autumn Red",   hex: "#c34043", role: "Errors" },
      { name: "Autumn Yellow",hex: "#ff9e3b", role: "Warnings" },
      { name: "Spring Blue",  hex: "#7fb4ca", role: "Special tokens" },
    ]
  },

  // ── KANAGAWA DRAGON ───────────────────────────────────────────────────────
  "kanagawa-dragon": {
    name: "Kanagawa Dragon", type: "dark", family: "Kanagawa",
    source: "github.com/rebelot/kanagawa.nvim",
    description: "Darker, more subdued variant of Kanagawa.",
    colors: {
      bg:       "#181616", bgAlt: "#0d0c0c", bgSel: "#282727",
      border:   "#2d2b2b", fg: "#c5c9c5", fgMuted: "#a6a69c",
      fgSubtle: "#625e5a", comment: "#8a8980",
      keyword:  "#9cabca", string: "#87a987", func: "#7eb3c9",
      type:     "#8ea4a2", number: "#c4746e", constant: "#c4b28a",
      error:    "#c4746e", warn: "#b6927b", success: "#87a987", accent: "#7eb3c9",
    },
    tokens: [
      { name: "Dragon Black",  hex: "#0d0c0c", role: "Deepest background" },
      { name: "Dragon bg",     hex: "#181616", role: "Editor background" },
      { name: "Dragon White",  hex: "#c5c9c5", role: "Foreground" },
      { name: "Dragon Gray",   hex: "#8a8980", role: "Comments" },
      { name: "Dragon Blue",   hex: "#9cabca", role: "Keywords" },
      { name: "Dragon Green",  hex: "#87a987", role: "Strings" },
      { name: "Dragon Aqua",   hex: "#7eb3c9", role: "Functions" },
      { name: "Dragon Red",    hex: "#c4746e", role: "Numbers, errors" },
      { name: "Dragon Yellow", hex: "#c4b28a", role: "Constants" },
    ]
  },

  // ── KANAGAWA LOTUS ────────────────────────────────────────────────────────
  "kanagawa-lotus": {
    name: "Kanagawa Lotus", type: "light", family: "Kanagawa",
    source: "github.com/rebelot/kanagawa.nvim",
    description: "The light variant — lotus flower warmth on pale parchment.",
    colors: {
      bg:       "#f2ecbc", bgAlt: "#e7dba0", bgSel: "#c9cbd1",
      border:   "#c8c2a4", fg: "#545464", fgMuted: "#716e61",
      fgSubtle: "#a09f8f", comment: "#a09f8f",
      keyword:  "#624a8c", string: "#4e7c3f", func: "#1f5f8a",
      type:     "#536a5b", number: "#b5485d", constant: "#836f4a",
      error:    "#c84053", warn: "#835c00", success: "#6f894e", accent: "#1f5f8a",
    },
    tokens: [
      { name: "Lotus White",  hex: "#f2ecbc", role: "Warm parchment background" },
      { name: "Lotus Text",   hex: "#545464", role: "Primary foreground" },
      { name: "Lotus Gray",   hex: "#a09f8f", role: "Comments" },
      { name: "Lotus Violet", hex: "#624a8c", role: "Keywords" },
      { name: "Lotus Green",  hex: "#4e7c3f", role: "Strings" },
      { name: "Lotus Blue",   hex: "#1f5f8a", role: "Functions" },
      { name: "Lotus Pink",   hex: "#b5485d", role: "Numbers" },
    ]
  },

  // ── VESPER ────────────────────────────────────────────────────────────────
  "vesper": {
    name: "Vesper", type: "dark", family: "Indie",
    source: "github.com/raunofreiberg/vesper",
    description: "Raunó Freiberg's dark-minimal theme. Warm dark with amber accents.",
    colors: {
      bg:       "#101010", bgAlt: "#1a1a1a", bgSel: "#242424",
      border:   "#2e2e2e", fg: "#ffffff", fgMuted: "#9e9e9e",
      fgSubtle: "#555", comment: "#5c5c5c",
      keyword:  "#ff7b00", string: "#99ffe4", func: "#ffc799",
      type:     "#ffc799", number: "#ffc799", constant: "#ff7b00",
      error:    "#f44747", warn: "#ff7b00", success: "#99ffe4", accent: "#ff7b00",
    },
    tokens: [
      { name: "Background", hex: "#101010", role: "Near-black background" },
      { name: "Foreground", hex: "#ffffff", role: "Pure white text" },
      { name: "Comment",    hex: "#5c5c5c", role: "Comments" },
      { name: "Orange",     hex: "#ff7b00", role: "Keywords, constants — amber glow" },
      { name: "Mint",       hex: "#99ffe4", role: "Strings — cool mint" },
      { name: "Peach",      hex: "#ffc799", role: "Functions, types, numbers" },
    ]
  },

  // ── LASERWAVE ─────────────────────────────────────────────────────────────
  "laserwave": {
    name: "Laserwave", type: "dark", family: "Indie",
    source: "github.com/Jaredk3nt/laserwave",
    description: "80s neon aesthetic — synthwave gradient colors meet laser grid.",
    colors: {
      bg:       "#27212e", bgAlt: "#1f1a25", bgSel: "#3b3249",
      border:   "#4d4260", fg: "#ffffff", fgMuted: "#8f8899",
      fgSubtle: "#574d68", comment: "#6b5f7d",
      keyword:  "#eb64b9", string: "#b4dce7", func: "#74dfc4",
      type:     "#41f9dc", number: "#ffee79", constant: "#ff8b39",
      error:    "#fe4450", warn: "#ffee79", success: "#74dfc4", accent: "#eb64b9",
    },
    tokens: [
      { name: "Background", hex: "#27212e", role: "Deep purple background" },
      { name: "Foreground", hex: "#ffffff", role: "White text" },
      { name: "Comment",    hex: "#6b5f7d", role: "Muted purple comments" },
      { name: "Pink",       hex: "#eb64b9", role: "Keywords — laser pink" },
      { name: "Cyan",       hex: "#74dfc4", role: "Functions — laser cyan" },
      { name: "Teal",       hex: "#41f9dc", role: "Types — neon teal" },
      { name: "Blue",       hex: "#b4dce7", role: "Strings — ice blue" },
      { name: "Yellow",     hex: "#ffee79", role: "Numbers — laser yellow" },
      { name: "Orange",     hex: "#ff8b39", role: "Constants — neon orange" },
    ]
  },

  // ── PLASTIC ────────────────────────────────────────────────────────────────
  "plastic": {
    name: "Plastic", type: "dark", family: "Indie",
    source: "github.com/will-stone/plastic",
    description: "Will Stone's minimal dark. Low-distraction, gentle on the eyes.",
    colors: {
      bg:       "#1b1d23", bgAlt: "#14151a", bgSel: "#2b2d37",
      border:   "#3a3c4a", fg: "#abb2bf", fgMuted: "#7a7e8a",
      fgSubtle: "#54566a", comment: "#7a7e8a",
      keyword:  "#c586c0", string: "#98c379", func: "#61afef",
      type:     "#e5c07b", number: "#d19a66", constant: "#e06c75",
      error:    "#e06c75", warn: "#e5c07b", success: "#98c379", accent: "#61afef",
    },
    tokens: [
      { name: "Background", hex: "#1b1d23", role: "Deep blue-black background" },
      { name: "Foreground", hex: "#abb2bf", role: "Gray text" },
      { name: "Comment",    hex: "#7a7e8a", role: "Comments" },
      { name: "Purple",     hex: "#c586c0", role: "Keywords" },
      { name: "Blue",       hex: "#61afef", role: "Functions" },
      { name: "Green",      hex: "#98c379", role: "Strings" },
      { name: "Yellow",     hex: "#e5c07b", role: "Types" },
      { name: "Orange",     hex: "#d19a66", role: "Numbers" },
      { name: "Red",        hex: "#e06c75", role: "Constants, errors" },
    ]
  },

  // ── HOUSTON ────────────────────────────────────────────────────────────────
  "houston": {
    name: "Houston", type: "dark", family: "Indie",
    source: "github.com/withastro/houston-vscode",
    description: "Official Astro framework theme. Space-dark with nebula accents.",
    colors: {
      bg:       "#17191e", bgAlt: "#13151a", bgSel: "#212428",
      border:   "#282c34", fg: "#cdd6f4", fgMuted: "#858aa7",
      fgSubtle: "#525674", comment: "#545878",
      keyword:  "#ff6e96", string: "#4af2c8", func: "#f9c86a",
      type:     "#c2a8fa", number: "#81d4fa", constant: "#f9c86a",
      error:    "#ff5370", warn: "#ffa726", success: "#4af2c8", accent: "#f9c86a",
    },
    tokens: [
      { name: "Background", hex: "#17191e", role: "Astro space background" },
      { name: "Foreground", hex: "#cdd6f4", role: "Soft blue-white text" },
      { name: "Comment",    hex: "#545878", role: "Deep blue comments" },
      { name: "Pink",       hex: "#ff6e96", role: "Keywords — nebula pink" },
      { name: "Cyan",       hex: "#4af2c8", role: "Strings — stellar cyan" },
      { name: "Gold",       hex: "#f9c86a", role: "Functions, constants — solar gold" },
      { name: "Purple",     hex: "#c2a8fa", role: "Types — cosmic purple" },
      { name: "Blue",       hex: "#81d4fa", role: "Numbers" },
    ]
  },

  // ── RED ──────────────────────────────────────────────────────────────────
  "red": {
    name: "Red", type: "dark", family: "Indie",
    source: "github.com/microsoft/vscode/blob/main/extensions/theme-red",
    description: "Microsoft's Red theme. Bold crimson tones on deep charcoal.",
    colors: {
      bg:       "#390000", bgAlt: "#2e0000", bgSel: "#4d0000",
      border:   "#6a0000", fg: "#f8f8f8", fgMuted: "#d4a0a0",
      fgSubtle: "#a06060", comment: "#a06060",
      keyword:  "#ff0000", string: "#f4c2c2", func: "#ff6666",
      type:     "#ff9999", number: "#ffd0d0", constant: "#ff4444",
      error:    "#ff0000", warn: "#ff8800", success: "#88ff88", accent: "#ff6666",
    },
    tokens: [
      { name: "Background", hex: "#390000", role: "Deep red-black background" },
      { name: "Foreground", hex: "#f8f8f8", role: "White text" },
      { name: "Comment",    hex: "#a06060", role: "Muted rose comments" },
      { name: "Red",        hex: "#ff0000", role: "Keywords — pure red" },
      { name: "Pink",       hex: "#ff6666", role: "Functions" },
      { name: "Light Pink", hex: "#f4c2c2", role: "Strings" },
      { name: "Rose",       hex: "#ff9999", role: "Types" },
    ]
  },

  // ── NIGHT OWL ─────────────────────────────────────────────────────────────
  "night-owl": {
    name: "Night Owl", type: "dark", family: "Indie",
    source: "github.com/sdras/night-owl-vscode-theme",
    description: "Sarah Drasner's Night Owl — designed for night coders with low eye strain.",
    colors: {
      bg:       "#011627", bgAlt: "#010e1a", bgSel: "#1d3b53",
      border:   "#1f4462", fg: "#d6deeb", fgMuted: "#637777",
      fgSubtle: "#355875", comment: "#637777",
      keyword:  "#c792ea", string: "#addb67", func: "#82aaff",
      type:     "#ffcb8b", number: "#f78c6c", constant: "#7fdbca",
      error:    "#ff5874", warn: "#ffcb8b", success: "#addb67", accent: "#82aaff",
    },
    tokens: [
      { name: "Background",  hex: "#011627", role: "Deep ocean blue-black" },
      { name: "Selection",   hex: "#1d3b53", role: "Active line, selection" },
      { name: "Foreground",  hex: "#d6deeb", role: "Soft blue-white text" },
      { name: "Comment",     hex: "#637777", role: "Muted teal comments (italic)" },
      { name: "Purple",      hex: "#c792ea", role: "Keywords (italic)" },
      { name: "Blue",        hex: "#82aaff", role: "Functions" },
      { name: "Green",       hex: "#addb67", role: "Strings" },
      { name: "Yellow",      hex: "#ffcb8b", role: "Types, classes" },
      { name: "Orange",      hex: "#f78c6c", role: "Numbers" },
      { name: "Teal",        hex: "#7fdbca", role: "Constants, built-ins" },
      { name: "Red",         hex: "#ff5874", role: "Errors" },
    ]
  },

  // ── SLACK DARK ────────────────────────────────────────────────────────────
  "slack-dark": {
    name: "Slack Dark", type: "dark", family: "Slack",
    source: "github.com/nickcoutsos/slack-vscode",
    description: "Slack's own dark UI theme, adapted for code editing.",
    colors: {
      bg:       "#222529", bgAlt: "#1a1d21", bgSel: "#383c40",
      border:   "#4a4f54", fg: "#d1d2d3", fgMuted: "#868d94",
      fgSubtle: "#60656a", comment: "#60656a",
      keyword:  "#8cc4ff", string: "#afe3a4", func: "#dfc55a",
      type:     "#98d1e0", number: "#dfc55a", constant: "#d0a9f5",
      error:    "#e07070", warn: "#dfc55a", success: "#afe3a4", accent: "#8cc4ff",
    },
    tokens: [
      { name: "Background", hex: "#222529", role: "Slack-gray dark background" },
      { name: "Foreground", hex: "#d1d2d3", role: "Light gray text" },
      { name: "Comment",    hex: "#60656a", role: "Comments" },
      { name: "Blue",       hex: "#8cc4ff", role: "Keywords" },
      { name: "Green",      hex: "#afe3a4", role: "Strings" },
      { name: "Yellow",     hex: "#dfc55a", role: "Functions, numbers" },
      { name: "Cyan",       hex: "#98d1e0", role: "Types" },
      { name: "Purple",     hex: "#d0a9f5", role: "Constants" },
    ]
  },

  // ── SLACK OCHIN ───────────────────────────────────────────────────────────
  "slack-ochin": {
    name: "Slack Ochin", type: "light", family: "Slack",
    source: "github.com/nickcoutsos/slack-vscode",
    description: "Slack Ochin — the light companion to Slack Dark.",
    colors: {
      bg:       "#f9f9f9", bgAlt: "#f1f1f1", bgSel: "#dce9f5",
      border:   "#d8d8d8", fg: "#383a3c", fgMuted: "#787c80",
      fgSubtle: "#a0a4a8", comment: "#a0a4a8",
      keyword:  "#0070d1", string: "#268829", func: "#8d4fd8",
      type:     "#007a7a", number: "#c64b10", constant: "#d0104c",
      error:    "#d0104c", warn: "#c64b10", success: "#268829", accent: "#0070d1",
    },
    tokens: [
      { name: "Background", hex: "#f9f9f9", role: "White-gray light background" },
      { name: "Foreground", hex: "#383a3c", role: "Dark gray text" },
      { name: "Comment",    hex: "#a0a4a8", role: "Comments" },
      { name: "Blue",       hex: "#0070d1", role: "Keywords" },
      { name: "Green",      hex: "#268829", role: "Strings" },
      { name: "Purple",     hex: "#8d4fd8", role: "Functions" },
      { name: "Teal",       hex: "#007a7a", role: "Types" },
      { name: "Orange",     hex: "#c64b10", role: "Numbers" },
    ]
  },

  // ── EVERFOREST DARK ───────────────────────────────────────────────────────
  "everforest-dark": {
    name: "Everforest Dark", type: "dark", family: "Everforest",
    source: "github.com/sainnhe/everforest",
    description: "Sainnhe's forest-inspired warm dark theme. Easy on the eyes.",
    colors: {
      bg:       "#2d353b", bgAlt: "#272e33", bgSel: "#3d484d",
      border:   "#475258", fg: "#d3c6aa", fgMuted: "#9da9a0",
      fgSubtle: "#7a8478", comment: "#7a8478",
      keyword:  "#e67e80", string: "#a7c080", func: "#83c092",
      type:     "#7fbbb3", number: "#d699b6", constant: "#dbbc7f",
      error:    "#e67e80", warn: "#dbbc7f", success: "#a7c080", accent: "#7fbbb3",
    },
    tokens: [
      { name: "Background",  hex: "#2d353b", role: "Forest dark background" },
      { name: "bg Dim",      hex: "#272e33", role: "Panels, sidebar" },
      { name: "Foreground",  hex: "#d3c6aa", role: "Warm off-white text" },
      { name: "Comment",     hex: "#7a8478", role: "Earthy gray comments" },
      { name: "Red",         hex: "#e67e80", role: "Keywords, errors" },
      { name: "Green",       hex: "#a7c080", role: "Strings" },
      { name: "Aqua",        hex: "#83c092", role: "Functions" },
      { name: "Blue",        hex: "#7fbbb3", role: "Types" },
      { name: "Purple",      hex: "#d699b6", role: "Numbers" },
      { name: "Yellow",      hex: "#dbbc7f", role: "Constants, warnings" },
    ]
  },

  // ── EVERFOREST LIGHT ──────────────────────────────────────────────────────
  "everforest-light": {
    name: "Everforest Light", type: "light", family: "Everforest",
    source: "github.com/sainnhe/everforest",
    description: "Everforest Light — warm, forest-inspired pale green background.",
    colors: {
      bg:       "#fdf6e3", bgAlt: "#f4f0d9", bgSel: "#e5dfc5",
      border:   "#c9c19f", fg: "#5c6a72", fgMuted: "#829181",
      fgSubtle: "#939f91", comment: "#939f91",
      keyword:  "#f85552", string: "#8da101", func: "#35a77c",
      type:     "#3a94c5", number: "#df69ba", constant: "#dfa000",
      error:    "#f85552", warn: "#dfa000", success: "#8da101", accent: "#3a94c5",
    },
    tokens: [
      { name: "Background",  hex: "#fdf6e3", role: "Warm parchment background" },
      { name: "Foreground",  hex: "#5c6a72", role: "Forest gray-green text" },
      { name: "Comment",     hex: "#939f91", role: "Muted sage comments" },
      { name: "Red",         hex: "#f85552", role: "Keywords, errors" },
      { name: "Green",       hex: "#8da101", role: "Strings" },
      { name: "Aqua",        hex: "#35a77c", role: "Functions" },
      { name: "Blue",        hex: "#3a94c5", role: "Types" },
      { name: "Yellow",      hex: "#dfa000", role: "Constants, warnings" },
    ]
  },

  // ── SNAZZY LIGHT ──────────────────────────────────────────────────────────
  "snazzy-light": {
    name: "Snazzy Light", type: "light", family: "Indie",
    source: "github.com/antfu/vscode-theme-snazzy-light",
    description: "Anthony Fu's light port of hyper-snazzy. Elegant and playful.",
    colors: {
      bg:       "#fafbfc", bgAlt: "#f1f3f5", bgSel: "#dde4ea",
      border:   "#c8d0d9", fg: "#2d2d2d", fgMuted: "#737373",
      fgSubtle: "#a0a0a0", comment: "#9e9e9e",
      keyword:  "#ff5c57", string: "#5af78e", func: "#57c7ff",
      type:     "#f3f99d", number: "#ff6ac1", constant: "#ff9f43",
      error:    "#ff5c57", warn: "#ff9f43", success: "#5af78e", accent: "#57c7ff",
    },
    tokens: [
      { name: "Background", hex: "#fafbfc", role: "Clean white-gray background" },
      { name: "Foreground", hex: "#2d2d2d", role: "Dark gray text" },
      { name: "Comment",    hex: "#9e9e9e", role: "Medium gray comments" },
      { name: "Red",        hex: "#ff5c57", role: "Keywords, errors — snazzy red" },
      { name: "Cyan",       hex: "#57c7ff", role: "Functions — sky blue" },
      { name: "Green",      hex: "#5af78e", role: "Strings — vibrant lime" },
      { name: "Yellow",     hex: "#f3f99d", role: "Types — pale yellow" },
      { name: "Pink",       hex: "#ff6ac1", role: "Numbers — hot pink" },
      { name: "Orange",     hex: "#ff9f43", role: "Constants — warm orange" },
    ]
  },

  // ── DARK PLUS ─────────────────────────────────────────────────────────────
  "dark-plus": {
    name: "Dark+", type: "dark", family: "VS Code",
    source: "github.com/microsoft/vscode",
    description: "VS Code's default dark theme. The most widely used theme in the world.",
    colors: {
      bg:       "#1e1e1e", bgAlt: "#252526", bgSel: "#264f78",
      border:   "#3f3f3f", fg: "#d4d4d4", fgMuted: "#808080",
      fgSubtle: "#569cd6", comment: "#6a9955",
      keyword:  "#569cd6", string: "#ce9178", func: "#dcdcaa",
      type:     "#4ec9b0", number: "#b5cea8", constant: "#9cdcfe",
      error:    "#f44747", warn: "#cca700", success: "#89d185", accent: "#569cd6",
    },
    tokens: [
      { name: "Background",  hex: "#1e1e1e", role: "VS Code default dark background" },
      { name: "bg Sidebar",  hex: "#252526", role: "Sidebar, activity bar" },
      { name: "Selection",   hex: "#264f78", role: "Text selection — distinct blue" },
      { name: "Foreground",  hex: "#d4d4d4", role: "Default text" },
      { name: "Comment",     hex: "#6a9955", role: "Comments — green (italic)" },
      { name: "Blue",        hex: "#569cd6", role: "Keywords, type keywords, links" },
      { name: "Cyan",        hex: "#4ec9b0", role: "Types, classes" },
      { name: "Orange",      hex: "#ce9178", role: "Strings" },
      { name: "Yellow",      hex: "#dcdcaa", role: "Functions, methods" },
      { name: "Light Blue",  hex: "#9cdcfe", role: "Variables, parameters" },
      { name: "Green",       hex: "#b5cea8", role: "Numbers" },
      { name: "Red",         hex: "#f44747", role: "Errors" },
    ]
  },

  // ── LIGHT PLUS ────────────────────────────────────────────────────────────
  "light-plus": {
    name: "Light+", type: "light", family: "VS Code",
    source: "github.com/microsoft/vscode",
    description: "VS Code's default light theme. Pure white, accessible, widely tested.",
    colors: {
      bg:       "#ffffff", bgAlt: "#f3f3f3", bgSel: "#add6ff",
      border:   "#e7e7e7", fg: "#000000", fgMuted: "#616161",
      fgSubtle: "#787878", comment: "#008000",
      keyword:  "#0000ff", string: "#a31515", func: "#795e26",
      type:     "#267f99", number: "#098658", constant: "#0070c1",
      error:    "#cd3131", warn: "#a65e00", success: "#14532d", accent: "#0000ff",
    },
    tokens: [
      { name: "Background",  hex: "#ffffff", role: "Pure white background" },
      { name: "Selection",   hex: "#add6ff", role: "Text selection — clear blue" },
      { name: "Foreground",  hex: "#000000", role: "Pure black text" },
      { name: "Comment",     hex: "#008000", role: "Comments — standard green" },
      { name: "Blue",        hex: "#0000ff", role: "Keywords" },
      { name: "Teal",        hex: "#267f99", role: "Types, classes" },
      { name: "Red",         hex: "#a31515", role: "Strings" },
      { name: "Brown",       hex: "#795e26", role: "Functions" },
      { name: "Dark Blue",   hex: "#0070c1", role: "Variables, constants" },
      { name: "Green",       hex: "#098658", role: "Numbers" },
    ]
  },

  // (remaining themes use shorter token lists for brevity while still being accurate)

  "github-dark-default": {
    name: "GitHub Dark Default", type: "dark", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "GitHub's refreshed dark default — cleaner than classic Dark.",
    colors: {
      bg: "#0d1117", bgAlt: "#161b22", bgSel: "#1f2937", border: "#30363d",
      fg: "#e6edf3", fgMuted: "#8b949e", fgSubtle: "#6e7681", comment: "#8b949e",
      keyword: "#ff7b72", string: "#a5d6ff", func: "#d2a8ff",
      type: "#79c0ff", number: "#79c0ff", constant: "#79c0ff",
      error: "#f85149", warn: "#d29922", success: "#3fb950", accent: "#58a6ff",
    },
    tokens: [
      { name: "Background",   hex: "#0d1117", role: "Editor background" },
      { name: "Foreground",   hex: "#e6edf3", role: "Primary text (slightly brighter than Dark)" },
      { name: "Comment",      hex: "#8b949e", role: "Comments" },
      { name: "Red",          hex: "#ff7b72", role: "Keywords" },
      { name: "Purple",       hex: "#d2a8ff", role: "Functions" },
      { name: "Blue",         hex: "#79c0ff", role: "Types, numbers" },
      { name: "Light Blue",   hex: "#a5d6ff", role: "Strings" },
    ]
  },

  "github-dark-high-contrast": {
    name: "GitHub Dark HC", type: "dark", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "GitHub Dark with maximum contrast ratios for accessibility.",
    colors: {
      bg: "#0a0c10", bgAlt: "#161b22", bgSel: "#1f2937", border: "#21262d",
      fg: "#f0f3f6", fgMuted: "#9198a1", fgSubtle: "#656d76", comment: "#9198a1",
      keyword: "#ff9492", string: "#addcff", func: "#dbb7ff",
      type: "#91cbff", number: "#91cbff", constant: "#91cbff",
      error: "#ff6a69", warn: "#f0b72f", success: "#26cd4d", accent: "#71b7ff",
    },
    tokens: [
      { name: "Background", hex: "#0a0c10", role: "Maximum contrast background" },
      { name: "Foreground", hex: "#f0f3f6", role: "High-contrast text" },
      { name: "Comment",    hex: "#9198a1", role: "Comments" },
      { name: "Red",        hex: "#ff9492", role: "Keywords" },
      { name: "Purple",     hex: "#dbb7ff", role: "Functions" },
      { name: "Blue",       hex: "#91cbff", role: "Types, numbers" },
    ]
  },

  "github-light-default": {
    name: "GitHub Light Default", type: "light", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "GitHub's refreshed light default.",
    colors: {
      bg: "#ffffff", bgAlt: "#f6f8fa", bgSel: "#dce8fe", border: "#d0d7de",
      fg: "#1f2328", fgMuted: "#59636e", fgSubtle: "#818b98", comment: "#57606a",
      keyword: "#cf222e", string: "#0a3069", func: "#8250df",
      type: "#0550ae", number: "#0550ae", constant: "#0550ae",
      error: "#cf222e", warn: "#9a6700", success: "#1a7f37", accent: "#0969da",
    },
    tokens: [
      { name: "Background", hex: "#ffffff", role: "Pure white" },
      { name: "Foreground", hex: "#1f2328", role: "Near-black text" },
      { name: "Comment",    hex: "#57606a", role: "Comments" },
      { name: "Red",        hex: "#cf222e", role: "Keywords" },
      { name: "Purple",     hex: "#8250df", role: "Functions" },
      { name: "Blue",       hex: "#0550ae", role: "Types, numbers" },
      { name: "Dark Blue",  hex: "#0a3069", role: "Strings" },
    ]
  },

  "github-light-high-contrast": {
    name: "GitHub Light HC", type: "light", family: "GitHub",
    source: "github.com/primer/github-vscode-theme",
    description: "GitHub Light with WCAG AAA contrast for accessibility.",
    colors: {
      bg: "#ffffff", bgAlt: "#f6f8fa", bgSel: "#c8e1ff", border: "#0e1116",
      fg: "#0e1116", fgMuted: "#3b434b", fgSubtle: "#69717b", comment: "#69717b",
      keyword: "#a0111f", string: "#032f62", func: "#4e0a99",
      type: "#034188", number: "#034188", constant: "#034188",
      error: "#a0111f", warn: "#7d4e00", success: "#104f24", accent: "#1a69db",
    },
    tokens: [
      { name: "Background", hex: "#ffffff", role: "White background" },
      { name: "Foreground", hex: "#0e1116", role: "Maximum contrast black text" },
      { name: "Comment",    hex: "#69717b", role: "Comments" },
      { name: "Red",        hex: "#a0111f", role: "Keywords — deep red" },
      { name: "Purple",     hex: "#4e0a99", role: "Functions" },
      { name: "Blue",       hex: "#034188", role: "Types, numbers" },
    ]
  },

  "material-theme-darker": {
    name: "Material Darker", type: "dark", family: "Material",
    source: "material-theme.com",
    description: "Darker variant of Material Theme — deeper background, same vibrant tokens.",
    colors: {
      bg: "#212121", bgAlt: "#171717", bgSel: "#303030", border: "#424242",
      fg: "#eeffff", fgMuted: "#b0bec5", fgSubtle: "#546e7a", comment: "#546e7a",
      keyword: "#89ddff", string: "#c3e88d", func: "#82aaff",
      type: "#ffcb6b", number: "#f78c6c", constant: "#ff5370",
      error: "#ff5370", warn: "#ffcb6b", success: "#c3e88d", accent: "#89ddff",
    },
    tokens: [
      { name: "Background", hex: "#212121", role: "Dark charcoal background" },
      { name: "Foreground", hex: "#eeffff", role: "Cool white text" },
      { name: "Comment",    hex: "#546e7a", role: "Blue-gray comments" },
      { name: "Cyan",       hex: "#89ddff", role: "Keywords" },
      { name: "Blue",       hex: "#82aaff", role: "Functions" },
      { name: "Green",      hex: "#c3e88d", role: "Strings" },
      { name: "Orange",     hex: "#f78c6c", role: "Numbers" },
      { name: "Red",        hex: "#ff5370", role: "Constants, errors" },
    ]
  },
};

// ─────────────────────────────────────────────────────────────────────────────
// FAMILIES for grouping
const FAMILIES = [...new Set(Object.values(THEMES).map(t => t.family))];

// ─────────────────────────────────────────────────────────────────────────────
// UI DEMO — rendered entirely in theme colors
// ─────────────────────────────────────────────────────────────────────────────

function CodeBlock({ theme }) {
  const c = theme.colors;
  const lines = [
    { tokens: [{ text: "// ", color: c.comment }, { text: "Theme: ", color: c.comment }, { text: theme.name, color: c.comment }] },
    { tokens: [] },
    { tokens: [{ text: "import", color: c.keyword }, { text: " { ", color: c.fg }, { text: "useState", color: c.func }, { text: " } from ", color: c.fg }, { text: "'react'", color: c.string }] },
    { tokens: [] },
    { tokens: [{ text: "interface", color: c.keyword }, { text: " ", color: c.fg }, { text: "Config", color: c.type }, { text: " {", color: c.fg }] },
    { tokens: [{ text: "  theme", color: c.fgMuted }, { text: ": ", color: c.fg }, { text: "string", color: c.type }, { text: ";", color: c.fgSubtle }] },
    { tokens: [{ text: "  fontSize", color: c.fgMuted }, { text: ": ", color: c.fg }, { text: "number", color: c.type }, { text: ";", color: c.fgSubtle }] },
    { tokens: [{ text: "  dark", color: c.fgMuted }, { text: ": ", color: c.fg }, { text: "boolean", color: c.type }, { text: ";", color: c.fgSubtle }] },
    { tokens: [{ text: "}", color: c.fg }] },
    { tokens: [] },
    { tokens: [{ text: "const", color: c.keyword }, { text: " ", color: c.fg }, { text: "load", color: c.func }, { text: " = async (", color: c.fg }, { text: "cfg", color: c.fgMuted }, { text: ": ", color: c.fg }, { text: "Config", color: c.type }, { text: ") => {", color: c.fg }] },
    { tokens: [{ text: "  const", color: c.keyword }, { text: " count = ", color: c.fg }, { text: "42", color: c.number }, { text: ";", color: c.fgSubtle }] },
    { tokens: [{ text: "  const", color: c.keyword }, { text: " url = ", color: c.fg }, { text: "`/themes/${", color: c.string }, { text: "cfg.theme", color: c.fgMuted }, { text: "}`", color: c.string }, { text: ";", color: c.fgSubtle }] },
    { tokens: [{ text: "  return", color: c.keyword }, { text: " await ", color: c.fg }, { text: "fetch", color: c.func }, { text: "(url);", color: c.fg }] },
    { tokens: [{ text: "};", color: c.fg }] },
  ];
  return (
    <pre style={{
      background: c.bg, color: c.fg,
      margin: 0, padding: "16px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: "11.5px", lineHeight: "1.65",
      overflowX: "auto",
      borderRadius: "0 0 10px 0",
    }}>
      {lines.map((line, i) => (
        <div key={i} style={{ minHeight: "1.65em" }}>
          {line.tokens.map((tok, j) => (
            <span key={j} style={{ color: tok.color }}>{tok.text}</span>
          ))}
        </div>
      ))}
    </pre>
  );
}

function MarkupBlock({ theme }) {
  const c = theme.colors;
  return (
    <pre style={{
      background: c.bg, color: c.fg,
      margin: 0, padding: "16px",
      fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
      fontSize: "11.5px", lineHeight: "1.65",
      overflowX: "auto",
    }}>
      <div>
        <span style={{ color: c.fgSubtle }}>&lt;</span>
        <span style={{ color: c.keyword }}>article</span>
        <span style={{ color: c.fgSubtle }}> </span>
        <span style={{ color: c.type }}>class</span>
        <span style={{ color: c.fg }}>=</span>
        <span style={{ color: c.string }}>"card"</span>
        <span style={{ color: c.fgSubtle }}>&gt;</span>
      </div>
      <div>
        <span style={{ color: c.fgSubtle }}>{"  <"}</span>
        <span style={{ color: c.keyword }}>h2</span>
        <span style={{ color: c.fgSubtle }}>{">"}</span>
        <span style={{ color: c.fg }}>Hello, </span>
        <span style={{ color: c.fgSubtle }}>{"<"}</span>
        <span style={{ color: c.keyword }}>span</span>
        <span style={{ color: c.fgSubtle }}> </span>
        <span style={{ color: c.type }}>id</span>
        <span style={{ color: c.fg }}>=</span>
        <span style={{ color: c.string }}>"name"</span>
        <span style={{ color: c.fgSubtle }}>{"/>"}</span>
        <span style={{ color: c.fgSubtle }}>{"</"}
        </span><span style={{ color: c.keyword }}>h2</span>
        <span style={{ color: c.fgSubtle }}>{">"}</span>
      </div>
      <div>
        <span style={{ color: c.comment }}>{"  <!-- usage count -->"}</span>
      </div>
      <div>
        <span style={{ color: c.fgSubtle }}>{"  <"}</span>
        <span style={{ color: c.keyword }}>p</span>
        <span style={{ color: c.type }}> data-count</span>
        <span style={{ color: c.fg }}>=</span>
        <span style={{ color: c.string }}>"</span>
        <span style={{ color: c.number }}>42</span>
        <span style={{ color: c.string }}>"</span>
        <span style={{ color: c.fgSubtle }}>{"/>"}</span>
      </div>
      <div>
        <span style={{ color: c.fgSubtle }}>{"</"}</span>
        <span style={{ color: c.keyword }}>article</span>
        <span style={{ color: c.fgSubtle }}>{">"}</span>
      </div>
    </pre>
  );
}

function UIDemo({ theme }) {
  const c = theme.colors;
  const [tab, setTab] = useState(0);
  const [checked, setChecked] = useState(true);
  const [toggled, setToggled] = useState(false);
  const [selected, setSelected] = useState("opt1");
  const [sliderVal, setSliderVal] = useState(65);
  const [inputVal, setInputVal] = useState("hello@example.com");

  const btnBase = {
    border: "none", borderRadius: "6px", cursor: "pointer",
    fontFamily: "inherit", fontWeight: 500, fontSize: "12px",
    padding: "6px 14px", transition: "opacity .15s",
  };

  return (
    <div style={{ background: c.bg, padding: "16px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: c.fg }}>
      {/* Tabs */}
      <div style={{ display: "flex", borderBottom: `1px solid ${c.border}`, marginBottom: "14px", gap: "2px" }}>
        {["Code", "Markup", "Settings"].map((lbl, i) => (
          <button key={i} onClick={() => setTab(i)} style={{
            ...btnBase,
            padding: "6px 12px",
            borderRadius: "6px 6px 0 0",
            background: tab === i ? c.bgSel : "transparent",
            color: tab === i ? c.accent : c.fgSubtle,
            borderBottom: tab === i ? `2px solid ${c.accent}` : "2px solid transparent",
          }}>{lbl}</button>
        ))}
      </div>

      {tab === 0 && <CodeBlock theme={theme} />}
      {tab === 1 && <MarkupBlock theme={theme} />}
      {tab === 2 && (
        <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          {/* Input */}
          <div>
            <label style={{ display: "block", fontSize: "11px", color: c.fgMuted, marginBottom: "4px", letterSpacing: ".04em", textTransform: "uppercase" }}>Email address</label>
            <input value={inputVal} onChange={e => setInputVal(e.target.value)}
              style={{ width: "100%", boxSizing: "border-box", background: c.bgAlt, border: `1px solid ${c.border}`, borderRadius: "6px", padding: "7px 10px", color: c.fg, fontFamily: "inherit", fontSize: "12px", outline: "none" }} />
          </div>
          {/* Select */}
          <div>
            <label style={{ display: "block", fontSize: "11px", color: c.fgMuted, marginBottom: "4px", letterSpacing: ".04em", textTransform: "uppercase" }}>Variant</label>
            <select value={selected} onChange={e => setSelected(e.target.value)}
              style={{ background: c.bgAlt, border: `1px solid ${c.border}`, borderRadius: "6px", padding: "7px 10px", color: c.fg, fontFamily: "inherit", fontSize: "12px", width: "100%", outline: "none" }}>
              <option value="opt1">Option Alpha</option>
              <option value="opt2">Option Beta</option>
              <option value="opt3">Option Gamma</option>
            </select>
          </div>
          {/* Slider */}
          <div>
            <label style={{ display: "block", fontSize: "11px", color: c.fgMuted, marginBottom: "4px", letterSpacing: ".04em", textTransform: "uppercase" }}>Font size — {sliderVal}px</label>
            <input type="range" min="8" max="24" value={sliderVal} onChange={e => setSliderVal(+e.target.value)}
              style={{ width: "100%", accentColor: c.accent }} />
          </div>
          {/* Checkboxes & toggles */}
          <div style={{ display: "flex", gap: "16px", alignItems: "center", flexWrap: "wrap" }}>
            <label style={{ display: "flex", alignItems: "center", gap: "6px", cursor: "pointer" }}>
              <input type="checkbox" checked={checked} onChange={e => setChecked(e.target.checked)}
                style={{ accentColor: c.accent, width: "14px", height: "14px" }} />
              <span style={{ fontSize: "12px", color: c.fg }}>Auto-save</span>
            </label>
            <label style={{ display: "flex", alignItems: "center", gap: "8px", cursor: "pointer" }} onClick={() => setToggled(p => !p)}>
              <div style={{ width: "32px", height: "18px", borderRadius: "9px", background: toggled ? c.accent : c.border, position: "relative", transition: "background .2s" }}>
                <div style={{ position: "absolute", top: "2px", left: toggled ? "16px" : "2px", width: "14px", height: "14px", borderRadius: "50%", background: c.fg, transition: "left .2s" }} />
              </div>
              <span style={{ fontSize: "12px", color: c.fg }}>Word wrap</span>
            </label>
          </div>
          {/* Buttons */}
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
            <button style={{ ...btnBase, background: c.accent, color: c.bg }}>Save Changes</button>
            <button style={{ ...btnBase, background: "transparent", border: `1px solid ${c.accent}`, color: c.accent }}>Reset</button>
            <button style={{ ...btnBase, background: c.bgSel, color: c.fgMuted }}>Cancel</button>
            <button style={{ ...btnBase, background: c.error, color: "#fff" }}>Delete</button>
          </div>
          {/* Status badges */}
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap" }}>
            {[
              { label: "Saved", color: c.success },
              { label: "Warning", color: c.warn },
              { label: "Error", color: c.error },
              { label: `Type: ${theme.type}`, color: c.accent },
            ].map(b => (
              <span key={b.label} style={{
                background: `${b.color}22`, border: `1px solid ${b.color}55`,
                color: b.color, borderRadius: "20px", padding: "2px 10px",
                fontSize: "11px", fontWeight: 500, letterSpacing: ".02em",
              }}>{b.label}</span>
            ))}
          </div>
          {/* Alert boxes */}
          <div style={{ background: `${c.error}18`, border: `1px solid ${c.error}44`, borderLeft: `3px solid ${c.error}`, borderRadius: "6px", padding: "8px 12px" }}>
            <span style={{ color: c.error, fontWeight: 600, fontSize: "12px" }}>Error · </span>
            <span style={{ color: c.fg, fontSize: "12px" }}>Compilation failed in 3 files</span>
          </div>
          <div style={{ background: `${c.warn}18`, border: `1px solid ${c.warn}44`, borderLeft: `3px solid ${c.warn}`, borderRadius: "6px", padding: "8px 12px" }}>
            <span style={{ color: c.warn, fontWeight: 600, fontSize: "12px" }}>Warning · </span>
            <span style={{ color: c.fg, fontSize: "12px" }}>Deprecated API detected</span>
          </div>
          <div style={{ background: `${c.success}18`, border: `1px solid ${c.success}44`, borderLeft: `3px solid ${c.success}`, borderRadius: "6px", padding: "8px 12px" }}>
            <span style={{ color: c.success, fontWeight: 600, fontSize: "12px" }}>Success · </span>
            <span style={{ color: c.fg, fontSize: "12px" }}>All 47 tests passed</span>
          </div>
        </div>
      )}
    </div>
  );
}

function TokenTable({ theme }) {
  return (
    <div style={{ padding: "12px 16px 16px", background: theme.colors.bg }}>
      <div style={{ fontSize: "10px", fontFamily: "monospace", color: theme.colors.fgSubtle, letterSpacing: ".1em", textTransform: "uppercase", marginBottom: "10px" }}>
        Color Tokens — {theme.tokens.length} defined · Source: {theme.source}
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6px" }}>
        {theme.tokens.map(tok => (
          <div key={tok.name} style={{
            display: "flex", alignItems: "center", gap: "8px",
            padding: "5px 8px", borderRadius: "6px",
            background: `${theme.colors.bgAlt}`,
            border: `1px solid ${theme.colors.border}`,
          }}>
            <div style={{
              width: "24px", height: "24px", borderRadius: "5px",
              background: tok.hex, flexShrink: 0,
              border: `1px solid ${theme.colors.border}`,
              boxShadow: `0 1px 4px ${tok.hex}40`,
            }} title={tok.hex} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: theme.colors.fgMuted, lineHeight: 1.3 }}>{tok.name}</div>
              <div style={{ fontFamily: "monospace", fontSize: "10px", color: theme.colors.fgSubtle, lineHeight: 1.3 }}>{tok.hex}</div>
            </div>
            <div style={{ fontSize: "9px", color: theme.colors.fgSubtle, textAlign: "right", maxWidth: "90px", lineHeight: 1.3 }}>{tok.role}</div>
          </div>
        ))}
      </div>
      {/* Palette strip */}
      <div style={{ display: "flex", gap: "4px", marginTop: "12px", flexWrap: "wrap" }}>
        {theme.tokens.map(tok => (
          <div key={tok.hex} title={`${tok.name}: ${tok.hex}`} style={{
            width: "18px", height: "18px", borderRadius: "3px", background: tok.hex,
            border: `1px solid ${theme.colors.border}`, flexShrink: 0,
          }} />
        ))}
      </div>
    </div>
  );
}

function ThemeCard({ id, theme }) {
  const [expanded, setExpanded] = useState(false);
  const [showTokens, setShowTokens] = useState(false);
  const c = theme.colors;

  return (
    <div style={{
      borderRadius: "12px", overflow: "hidden",
      border: expanded ? `2px solid ${c.accent}` : `1px solid ${c.border}`,
      transition: "box-shadow .2s, border .2s",
      boxShadow: expanded ? `0 8px 40px ${c.accent}30` : "0 2px 12px rgba(0,0,0,.25)",
    }}>
      {/* Header */}
      <div
        onClick={() => setExpanded(p => !p)}
        style={{
          background: c.bgAlt, padding: "12px 16px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          cursor: "pointer", userSelect: "none",
          borderBottom: `1px solid ${c.border}`,
        }}
      >
        <div>
          <div style={{ fontWeight: 700, fontSize: "14px", color: c.fg, fontFamily: "'DM Sans', sans-serif" }}>{theme.name}</div>
          <div style={{ fontSize: "10px", color: c.fgSubtle, fontFamily: "monospace", marginTop: "2px" }}>
            {id} · {theme.family}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          {/* Palette preview dots */}
          <div style={{ display: "flex", gap: "3px" }}>
            {[c.keyword, c.string, c.func, c.type, c.number, c.accent].map((col, i) => (
              <div key={i} style={{ width: "10px", height: "10px", borderRadius: "50%", background: col }} />
            ))}
          </div>
          <span style={{
            fontSize: "9px", fontFamily: "'DM Sans', sans-serif", fontWeight: 700,
            letterSpacing: ".08em", textTransform: "uppercase",
            padding: "2px 8px", borderRadius: "20px",
            background: theme.type === "dark" ? `${c.accent}20` : `${c.keyword}20`,
            color: theme.type === "dark" ? c.accent : c.keyword,
            border: `1px solid ${theme.type === "dark" ? c.accent + "50" : c.keyword + "50"}`,
          }}>{theme.type}</span>
          <span style={{ color: c.fgSubtle, fontSize: "14px", transition: "transform .2s", display: "block", transform: expanded ? "rotate(180deg)" : "none" }}>▾</span>
        </div>
      </div>

      {/* Description */}
      <div style={{ background: c.bg, padding: "8px 16px 0", fontSize: "11px", color: c.fgSubtle, fontStyle: "italic", fontFamily: "'DM Sans', sans-serif" }}>
        {theme.description}
      </div>

      {/* Always-visible UI demo */}
      <UIDemo theme={theme} />

      {/* Token table toggle */}
      {expanded && (
        <>
          <div style={{ background: c.bgAlt, borderTop: `1px solid ${c.border}`, padding: "8px 16px" }}>
            <button
              onClick={() => setShowTokens(p => !p)}
              style={{
                background: "transparent",
                border: `1px solid ${c.accent}50`,
                borderRadius: "6px", color: c.accent, cursor: "pointer",
                fontFamily: "'DM Sans', sans-serif", fontSize: "11px",
                fontWeight: 600, padding: "5px 12px", letterSpacing: ".04em",
              }}
            >
              {showTokens ? "▲ Hide" : "▼ Show"} Color Tokens ({theme.tokens.length})
            </button>
          </div>
          {showTokens && <TokenTable theme={theme} />}
        </>
      )}
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN APP
// ─────────────────────────────────────────────────────────────────────────────

export default function App() {
  const [typeFilter, setTypeFilter] = useState("all");
  const [familyFilter, setFamilyFilter] = useState("All");
  const [search, setSearch] = useState("");

  const allFamilies = ["All", ...FAMILIES];
  const entries = Object.entries(THEMES);

  const filtered = entries.filter(([id, theme]) => {
    if (typeFilter !== "all" && theme.type !== typeFilter) return false;
    if (familyFilter !== "All" && theme.family !== familyFilter) return false;
    if (search) {
      const q = search.toLowerCase();
      return id.includes(q) || theme.name.toLowerCase().includes(q) || theme.description.toLowerCase().includes(q);
    }
    return true;
  });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { background: #0a0a0f; }
        body { background: #0a0a0f; color: #e0e0f0; font-family: 'DM Sans', sans-serif; min-height: 100vh; }
        ::-webkit-scrollbar { width: 6px; height: 6px; }
        ::-webkit-scrollbar-track { background: #111; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        input:focus, select:focus { outline: none; }
        button:focus { outline: none; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(10px); } to { opacity:1; transform:none; } }
      `}</style>

      <div style={{ maxWidth: "1300px", margin: "0 auto", padding: "0 20px 80px" }}>

        {/* HEADER */}
        <div style={{ padding: "44px 0 32px", borderBottom: "1px solid #1e1e2e" }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#444", letterSpacing: ".2em", textTransform: "uppercase", marginBottom: "10px" }}>
            {entries.length} themes · researched from official sources
          </div>
          <h1 style={{
            fontSize: "clamp(28px, 4vw, 52px)", fontWeight: 700,
            letterSpacing: "-0.035em", lineHeight: 1.05,
            background: "linear-gradient(120deg, #fff 0%, #a080f0 55%, #f080c0 100%)",
            WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
            marginBottom: "10px",
          }}>Code Theme Explorer</h1>
          <p style={{ color: "#555", fontSize: "13px", maxWidth: "600px", lineHeight: 1.7 }}>
            Every theme rendered with its real, researched color palette. Click any card
            to expand — see live syntax highlighting, markup, full UI controls, and all
            documented color tokens with their intended roles.
          </p>
        </div>

        {/* CONTROLS */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", padding: "20px 0", alignItems: "center", borderBottom: "1px solid #141420" }}>
          <input
            value={search} onChange={e => setSearch(e.target.value)}
            placeholder="Search themes…"
            style={{
              background: "#111", border: "1px solid #222", borderRadius: "8px",
              padding: "7px 14px", color: "#ddd", fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px", width: "200px",
            }}
          />
          {["all", "dark", "light"].map(f => (
            <button key={f} onClick={() => setTypeFilter(f)} style={{
              padding: "7px 16px", borderRadius: "8px", cursor: "pointer",
              border: typeFilter === f ? "1px solid #7060d0" : "1px solid #222",
              background: typeFilter === f ? "#1a1530" : "transparent",
              color: typeFilter === f ? "#a090f8" : "#555",
              fontFamily: "'DM Sans', sans-serif", fontSize: "12px", fontWeight: 500,
              transition: "all .15s", textTransform: "capitalize",
            }}>{f}</button>
          ))}
          <div style={{ height: "20px", width: "1px", background: "#222" }} />
          {allFamilies.map(fam => (
            <button key={fam} onClick={() => setFamilyFilter(fam)} style={{
              padding: "5px 12px", borderRadius: "20px", cursor: "pointer",
              border: familyFilter === fam ? "1px solid #a060d0" : "1px solid #1e1e2e",
              background: familyFilter === fam ? "#200e30" : "transparent",
              color: familyFilter === fam ? "#c090f0" : "#444",
              fontFamily: "'DM Sans', sans-serif", fontSize: "11px", fontWeight: 500,
              transition: "all .15s",
            }}>{fam}</button>
          ))}
          <div style={{ marginLeft: "auto", fontFamily: "'JetBrains Mono', monospace", fontSize: "10px", color: "#333" }}>
            {filtered.length} / {entries.length}
          </div>
        </div>

        {/* GRID */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(380px, 1fr))",
          gap: "24px",
          paddingTop: "28px",
        }}>
          {filtered.map(([id, theme], i) => (
            <div key={id} style={{ animation: `fadeUp .3s ease ${Math.min(i * 0.04, 0.6)}s both` }}>
              <ThemeCard id={id} theme={theme} />
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "80px 0", color: "#333", fontFamily: "'JetBrains Mono', monospace", fontSize: "13px" }}>
            no themes match
          </div>
        )}

        {/* FOOTER */}
        <div style={{ marginTop: "60px", paddingTop: "20px", borderTop: "1px solid #111", fontSize: "10px", color: "#333", fontFamily: "'JetBrains Mono', monospace", lineHeight: 2 }}>
          Palettes sourced from: nordtheme.com · draculatheme.com/spec · catppuccin.com/palette · rosepinetheme.com · github.com/enkia/tokyo-night-vscode-theme · material-theme.com · ethanschoonover.com/solarized · monokai.pro · github.com/Binaryify/OneDark-Pro · github.com/antfu/vscode-theme-vitesse · github.com/rebelot/kanagawa.nvim · github.com/sainnhe/everforest · and others
        </div>
      </div>
    </>
  );
}
