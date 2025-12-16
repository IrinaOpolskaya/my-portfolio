/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./script.js"],
  theme: {
    extend: {
      colors: {
        beige: '#E4D7B5',
        'light-beige': '#F5EFDF',
        'medium-brown': '#868159',
        'dark-brown': '#4C463A',
        accent: '#BD664B',
        'accent-light': '#C78266',
      },
      fontFamily: {
        'source-serif': ['Source Serif Pro', 'serif'],
        'alegreya': ['Alegreya', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease forwards',
      },
      keyframes: {
        fadeIn: {
          'from': { opacity: '0', transform: 'translateY(20px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      backgroundColor: {
        'beige': '#E4D7B5',
        'beige-light': '#F5EFDF',
      }
    },
  },
  plugins: [],
}