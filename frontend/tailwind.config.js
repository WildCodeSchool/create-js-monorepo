/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["My Font", "sans-serif"],
    },
    extend: {
      colors: {
        "main-blue": "#257492",
      },
    },
  },
  plugins: [],
};
