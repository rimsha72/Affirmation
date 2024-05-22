/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  darkMode: "class",
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        blue: {
          950: '#1380FF',
          850: '#2F80ED',
          750: '#10B3FF'
        },
      }
    },

  },
  plugins: [
  ],
}

