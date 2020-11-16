const defaultTheme = require('tailwindcss/defaultTheme')
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        blue: {
          '900': '#034FFE',
          '800': '#145AFB',
          '600': '#195EFE',
          '500': '#195EFE',
          '400': '#2D6DFF',
          '300': '#487FFF',
          '100': '#588AFF',
        },
      },
      boxShadow: theme => ({
        outline: '0 0 0 2px ' + theme('colors.b.500'),
      }),
      fill: theme => theme('colors'),
    }
  },
  variants: {
    fill: ['responsive', 'hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'focus'],
  },
  plugins: []
}
