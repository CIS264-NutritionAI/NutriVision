/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        matcha: '#A0BC4B',
        caramel: '#FFF7F0',
        cream: '#FFFBF8',
      },
    },
  },
  plugins: [],
}
