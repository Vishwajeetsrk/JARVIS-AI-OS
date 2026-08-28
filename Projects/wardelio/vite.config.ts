import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

const isCapacitor = process.argv.includes("capacitor") || process.env.CAPACITOR === "true";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: isCapacitor ? "/" : "/preset-sites/wardelio/",
  build: { outDir: "dist" },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
