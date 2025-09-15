/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: '#B2C98B',
        caramel: '#FFF7F0',
        cream: '#FFFBF8',
        charcoal: '#4A4A4A'
      },
      fontFamily: {
        peppermint: ['Peppermint', 'cursive'],
        heolgun: ['Heolgun', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
