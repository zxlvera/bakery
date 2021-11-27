const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(380px,1fr))',
      },
        backgroundImage: {
         'hero-img': "url('./img/hero-img.jpg')",
        }
    },
    colors: {
      primary: '#FDEFEC',
      tertiary: '#574B40',
      secondary: '#D65780',
      neutral: '#FFFFF9',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
