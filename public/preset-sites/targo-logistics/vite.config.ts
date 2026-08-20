import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/targo-logistics/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
