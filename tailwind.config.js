/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "lime-green": "#30C88F",
        "dark-blue": "#2D314D",
        grey: "#9597A5",
      },
    },
    fontFamily: {
      PublicSans: ["Public Sans", "sans-serif"],
    },
  },
  plugins: [],
};
