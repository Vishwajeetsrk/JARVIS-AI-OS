import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/preset-sites/pureflow-one/",
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
