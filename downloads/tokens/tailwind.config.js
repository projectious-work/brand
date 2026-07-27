/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    extend: {
      colors: {
        midnight: {
          DEFAULT: '#1d3352',
          light: '#2b4d78',
          dark: '#132440',
          1: '#f8f9fb', 2: '#f0f3f8', 3: '#e2e9f2', 4: '#d3deec',
          5: '#c3d1e3', 6: '#b0c1d6', 7: '#96abc6', 8: '#7490b2',
          9: '#1d3352', 10: '#162944', 11: '#3a5a82', 12: '#142438',
        },
        accent: {
          DEFAULT: '#E05232',
          light: '#ea7558',
          dark: '#b84228',
          // Fill for solid controls carrying white text: white on the DEFAULT
          // accent is 3.87:1, below the 4.5:1 AA floor for normal text. 4.72:1.
          solid: '#cc4528',
          1: '#fef9f7', 2: '#fef0ea', 3: '#fde0d5', 4: '#fccebd',
          5: '#f8baa5', 6: '#f0a48c', 7: '#e58a6e', 8: '#d86e4e',
          9: '#E05232', 10: '#cc4528', 11: '#c04424', 12: '#6e2714',
        },
        slate: {
          DEFAULT: '#546a82',
          1: '#f9f9fa', 2: '#f1f2f4', 3: '#e6e8eb', 4: '#dadce0',
          5: '#cdd0d5', 6: '#bec2c8', 7: '#adb2ba', 8: '#9299a4',
          9: '#546a82', 10: '#4a5e74', 11: '#5c6f82', 12: '#1e2b38',
        },
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['"Source Sans 3"', 'sans-serif'],
        code: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        sm: '3px', md: '6px', lg: '9px', xl: '13px',
      },
      spacing: {
        'px-1': '4px', 'px-2': '8px', 'px-3': '12px',
        'px-4': '16px', 'px-5': '24px', 'px-6': '32px',
        'px-7': '48px', 'px-8': '64px', 'px-9': '96px',
      },
    },
  },
}
