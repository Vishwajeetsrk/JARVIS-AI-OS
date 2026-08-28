/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "hero-btn": "hsl(var(--hero-btn))",
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
