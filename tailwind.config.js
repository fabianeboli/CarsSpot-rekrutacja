/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      fontFamily: {
        'sans': ['Roboto Flex'],
        'header': ['Bebas Neue'],
        'secondHeader': ['Roboto Condensed'],
      },

      colors: {
        'accent': '#0147FF',
        'primary': '#282828',
        'secondary': '#282828',
        'customWhite': '#F7F7F7',
        'headerTitle': '#1D1D1B',
        'customGray': '#F1F1F1',
      },
    },
  },
  plugins: [],
}