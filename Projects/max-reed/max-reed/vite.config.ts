import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/max-reed/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
