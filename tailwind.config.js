/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Font Family start
      fontFamily: {
        'Poppins': ['Poppins'],
        'Roboto': ['Roboto'],
      },
      // Font Family end
    },
  },
  plugins: [],
}