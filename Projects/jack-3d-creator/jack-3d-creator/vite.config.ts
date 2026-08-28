import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/jack-3d-creator/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
