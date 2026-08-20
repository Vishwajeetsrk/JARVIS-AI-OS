/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Dirtyline 36Daysoftype 2022"', "sans-serif"],
        hero: ["Inter", "sans-serif"],
        body: ["Barlow", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.28em",
        nav: "0.14em",
      },
    },
  },
  plugins: [],
};
