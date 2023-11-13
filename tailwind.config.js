
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["src/*.html"],
  theme: {
    screens: {
      'msm': {'raw': '(min-width: 425px) and (max-width: 640px)'},
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'minh': {'raw': '(max-width: 2697px) and (max-height: 478px)'},
      'centrh': {'raw': '(max-width: 2697px) and (min-height:477px) and (max-height: 610px)'},
      'midleh': {'raw': '(max-width: 2697px) and (min-height:610px) and (max-height: 700px)'},
      'maxh':{'raw': '(min-width: 425px) and (max-width: 2697px) and (min-height:1000px) and (max-height: 2000px)'},
    },
    fontFamily:{
      'kaspersky':['KasperskyBold'],
      'kasperskyMedium':['KasperskyMedium'],
    },
    extend: {},
  },
  plugins: [],
}

