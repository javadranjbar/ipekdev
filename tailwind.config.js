/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#e0f3ff",
          100: "#b2d7ff",
          200: "#82b8fd",
          300: "#5196f9",
          400: "#2270f6",
          500: "#0950dd",
          600: "#0249ad",
          700: "#003d7d",
          800: "#002a4e",
          900: "#001220",
        },
        "main": {
          from: "#2270f6",
          via: "#935bd5",
          to: "#935bd5"
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
