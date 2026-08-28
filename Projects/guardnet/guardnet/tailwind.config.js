/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Futura Md BT Medium"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
