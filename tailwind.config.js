/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./Home/index.html'],
  theme: {
    extend: {
      colors:{
        'primary' : '#bbd0ff'
      },
      fontFamily:{
        'display': ['Macondo','poppin','sans-serif'],
        'body':['Inter','sans-serif'],
        'logo-text':['Jersey 15','poppin','sans-serif']
      }
    },
  },
  plugins: [],
}

