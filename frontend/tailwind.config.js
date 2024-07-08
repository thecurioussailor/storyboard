/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      transitionTimingFunction: {
        'custom': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
    },
    fontFamily: {
      anton: ["Anton SC", "sans-serif"]
    }
  },
  plugins: [],
}