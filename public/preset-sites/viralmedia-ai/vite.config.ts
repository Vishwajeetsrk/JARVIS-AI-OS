import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/preset-sites/viralmedia-ai/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
