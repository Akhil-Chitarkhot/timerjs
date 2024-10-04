/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./main/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
}

