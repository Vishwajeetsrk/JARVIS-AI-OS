import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/brandly/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
