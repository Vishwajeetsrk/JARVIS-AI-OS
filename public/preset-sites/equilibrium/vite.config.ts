import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/equilibrium/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
