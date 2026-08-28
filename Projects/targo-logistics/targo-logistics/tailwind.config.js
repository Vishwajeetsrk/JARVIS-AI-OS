/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#EE3F2C",
      },
      fontFamily: {
        sans: ["Rubik", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
