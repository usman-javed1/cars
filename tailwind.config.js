/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: "#0E0E0E",
        white: colors.white,
        gray: colors.gray,
        emerald: colors.emerald,
        indigo: colors.indigo,
        yellow: colors.yellow,
        brand: {
          main: "#FFB600",
          add1: "#FFE39E",
          add2: "#E3A200"
        },
        lightgray: "#F8F8F8",
      },
      maxWidth: {
        'mobile': '375px', // Define the max width for mobile
      },
      container: {
        center: true, // Center the container
        // padding: '1rem', // Add padding for better layout
        
      },
    },
  },
  plugins: [],
}
