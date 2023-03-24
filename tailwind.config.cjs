/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '96': '24rem',
      },
      height: {
        '96': '24rem',
      }
    },
  },
  plugins: [],
}
