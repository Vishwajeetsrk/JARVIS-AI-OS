/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Schibsted Grotesk"', "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        body: ['"Noto Sans"', "system-ui", "sans-serif"],
        accent: ["Fustat", "system-ui", "sans-serif"],
      },
      colors: {
        canvas: "#05070d",
        panel: "#0c1018",
        line: "rgba(255,255,255,0.08)",
        cyan: "#5eead4",
        violet: "#a78bfa",
      },
    },
  },
  plugins: [],
};
