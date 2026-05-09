/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors: {
        ink:    '#1a1a1a',
        paper:  '#fafaf7',
        muted:  '#5e5e5a',
        rule:   '#dcdcd6',
        accent: '#7a5a32',
        hover:  '#5e4a30',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans:  ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        display: ['clamp(3rem, 8vw, 6rem)',    { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        h1:      ['clamp(2.25rem, 5vw, 3.5rem)', { lineHeight: '1.1' }],
        h2:      ['clamp(1.75rem, 3.5vw, 2.5rem)', { lineHeight: '1.2' }],
        h3:      ['1.5rem',     { lineHeight: '1.3' }],
        lead:    ['1.25rem',    { lineHeight: '1.6' }],
        body:    ['1rem',       { lineHeight: '1.7' }],
        small:   ['0.875rem',   { lineHeight: '1.5' }],
        caption: ['0.8125rem',  { lineHeight: '1.4', letterSpacing: '0.01em' }],
        eyebrow: ['0.75rem',    { lineHeight: '1',   letterSpacing: '0.18em' }],
      },
      maxWidth: {
        prose: '65ch',
      },
    },
  },
  plugins: [],
};
