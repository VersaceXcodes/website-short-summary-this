/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: '#014421',
        cognac: '#8B5E3C',
        ivory: '#F8F4E3',
        burgundy: '#581845',
        gold: '#B08D57',
        rust: '#B7410E',
      },
      fontFamily: {
        'smut': ['"CA SMUT"', 'Impact', 'sans-serif'],
        'smut-full': ['"CA SMUT FULL"', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
