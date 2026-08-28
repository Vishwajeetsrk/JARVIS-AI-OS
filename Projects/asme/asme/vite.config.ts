import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/asme/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
