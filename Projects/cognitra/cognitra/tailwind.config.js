/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica Now Var", "Helvetica Neue", "Helvetica", "Arial", "sans-serif"],
      },
      colors: {
        cognitra: {
          ink: "#1a1a1a",
          gray: "#C5C5C5",
          muted: "#5a5a5a",
          body: "#3a3a3a",
        },
      },
    },
  },
  plugins: [],
};
