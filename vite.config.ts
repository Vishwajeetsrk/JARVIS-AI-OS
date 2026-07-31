// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - TanStack devtools (dev-only, first), tanstackStart, viteReact, tailwindcss, tsConfigPaths,
//     nitro (build-only using cloudflare as a default target), VITE_* env injection, @ path alias,
//     React/TanStack dedupe, error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... }, etc... }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: {
    preset: "vercel",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
  vite: {
    server: {
      host: "localhost",
      hmr: {
        timeout: 120_000,
      },
      fs: {
        allow: ["."],
      },
      // The workspace root contains huge unrelated directories (GitHub Repo has ~590k files).
      // Watching them floods the fs threadpool and starves module transforms for minutes.
      watch: {
        ignored: [
          "**/.git/**",
          "**/node_modules/**",
          "**/.vite/**",
          "**/GitHub Repo/**",
          "**/Projects/**",
          "**/data/**",
          "**/.vercel/**",
          "**/agent-team-source/**",
          "**/skills/**",
          "**/dist/**",
          "**/archive/**",
          "**/knowledge/**",
          "**/registries/**",
        ],
      },
    },
  },
});
