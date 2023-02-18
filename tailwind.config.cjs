/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      colors: {
        primary: {
          100: '#06C2AE',
          200: '#02889B'
        },
        secondary: #FF693A
      }
    },
  },
  plugins: [],
}
