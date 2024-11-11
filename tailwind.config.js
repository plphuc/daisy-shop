/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'background': '#eee4c1',
        'primaryButton': '#f7dfdf',
        'activatedButton': '#efbdbd',
        'primaryText': 'black',
        'secondaryText': '#a4935b',
      }
    },
  },
  plugins: [require('daisyui'),],
}