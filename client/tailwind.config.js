module.exports = {
  purge: [],
  purge: ['./pages/**/*.js', './components/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // Screens
    screens: {
      sm: { min: '320px', max: '768px' },
    },
    // Extend
    extend: {
      width: {
        container: '840px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
