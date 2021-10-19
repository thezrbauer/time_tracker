module.exports = {
  purge: [
  './src/**/*.html',
  './src/**/*.vue',
  './src/**/*.jsx',],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: { 
      transparent: 'transparent',
      current: 'currentColor',
      White:'#FFFFFF',
      Blue: 'hsl(246, 80%, 60%)',
      lightOrange: 'hsl(15, 100%, 70%)',
      softblue:'hsl(195, 74%, 62%)',
      softRed:'hsl(348, 100%, 68%)',
      limeGreen: 'hsl(145, 58%, 55%)',
      violet:'hsl(264, 64%, 52%)',
      softOrange:'hsl(43, 84%, 65%)',
      veryDarkBlue: 'hsl(226, 43%, 10%)',
      darkBlue:'hsl(235, 46%, 20%)',
      lessDarkBlue:'hsl(235, 46%, 30%)',
      desaturatedBlue:'hsl(235, 45%, 61%)',
      PaleBlue: 'hsl(236, 100%, 87%)'



    },
    fontFamily: {
      'rubik': ['rubik, sans-serif']
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
