/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./components/**/*.js",
    "./lib/**/*.js",
    "./pages/**/*.js",
    "./index.html",
    "./main.js",
    "./api/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'black-50': '#E5E5E5',
        'black-100': '#B4B4B4',
        'black-200': '#969696',
        'black-primary': '#5A5A5A',
        'black-300': '#2E2E2E',
        'black-400': '#000000',
        'blue-50': '#ABEBFF',
        'blue-100': '#5ED6FF',
        'blue-200': '#00B4EB',
        'blue-primary': '#0078D0',
        'blue-300': '#0049AA',
        'blue-400': '#00287F',
        'green-50': '#AAE8B8',
        'green-100': '#6BDB83',
        'green-200': '#00CB50',
        'green-primary': '#00A651',
        'green-300': '#00804D',
        'green-400': '#005A46',
        'orange-50': '#FFF08C',
        'orange-100': '#FFE045',
        'orange-200': '#FFCE19',
        'orange-primary': '#FFB114',
        'orange-300': '#FA841E',
        'orange-400': '#E67324',
        'red-50': '#FFC7C9',
        'red-100': '#FF9196',
        'red-200': '#FF555F',
        'red-primary': '#F0282D',
        'red-300': '#BF192B',
        'red-400': '#980F30',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['dark', 'hover', 'dark:hover'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ["light", "night"],
  },
};
