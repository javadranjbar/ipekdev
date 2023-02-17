/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0e9ff",
          100: "#b2c1ff",
          200: "#829cfd",
          300: "#517af9",
          400: "#225cf6",
          500: "#0949dd",
          600: "#022ead",
          700: "#00187d",
          800: "#00084e",
          900: "#010020",
        },
        "main": {
          from: "#098fdc",
          via: "#0949dc",
          to: "#1009dc",
          "from-dark": "#54bcf8",
          "via-dark": "#5485f8",
          "to-dark": "#5954f8"
        }
      }
    },
    container: {
      center: true,
    },
    fontFamily:{
      'body': ['yekan', '"sans-serif"'],
      'heading': ['dana', '"sans-serif"']
    }
  },
  plugins: [],
}
