/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      'bodyFont': ['blinker', 'sans-serif'],
      'titleFont': ['play', 'serif']
    },
    extend: {},
  },
  plugins: [],
}
