/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        background: "hsl(160 18% 6%)",
        foreground: "hsl(150 12% 96%)",
        muted: "hsl(150 8% 62%)",
        accent: "hsl(168 45% 52%)",
        surface: "hsl(160 14% 10%)",
      },
    },
  },
  plugins: [],
};
