/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './js/app.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      colors: {
        light_cyan: 'hsl(193, 38%, 86%)',
        neon_green: 'hsl(150, 100%, 66%)',
        grayish_blue: 'hsl(217, 19%, 38%)',
        dark_grayish_blue: 'hsl(217, 19%, 24%)',
        dark_blue: 'hsl(218, 23%, 16%)'
      },
      boxShadow: {
        '3xl': '0 0 10px hsl(150, 100%, 66%)'
      }
    },
  },
  plugins: [],
}

