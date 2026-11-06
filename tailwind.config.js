/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // <--- TRÈS IMPORTANT : active le mode sombre via la classe .dark
  theme: {
    extend: {},
  },
  plugins: [],
}