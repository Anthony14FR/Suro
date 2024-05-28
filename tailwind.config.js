/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.js",
    "./lib/**/*.js",
    "./pages/**/*.js",
    "./index.html",
    "./main.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
