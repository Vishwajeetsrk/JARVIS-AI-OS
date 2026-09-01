/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Compiler optimisations ─────────────────────────────────────────────────
  reactStrictMode: true,
  // Remove console.log in production
  compiler: {
    removeConsole: process.env.NODE_ENV === "production" ? { exclude: ["error", "warn"] } : false,
  },

  // ── Experimental perf features ─────────────────────────────────────────────
  experimental: {
    // Optimise package imports — tree-shake lucide-react & three
    optimizePackageImports: [
      "lucide-react",
      "three",
      "@react-three/fiber",
      "@react-three/postprocessing",
    ],
    // Turbopack is enabled via CLI flag `next dev --turbo`; safe to leave here
  },

  // ── Image domains ──────────────────────────────────────────────────────────
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 86400, // 24 h
    remotePatterns: [
      { protocol: "https", hostname: "assets.aceternity.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "**.aceternity.com" },
    ],
  },

  // ── Headers (cache static assets aggressively) ─────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico|woff2))",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  // ── Webpack bundle splitting ───────────────────────────────────────────────
  webpack(config, { isServer }) {
    if (!isServer) {
      config.optimization.splitChunks = {
        chunks: "all",
        cacheGroups: {
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: "chunk-three",
            priority: 30,
            reuseExistingChunk: true,
          },
          lucide: {
            test: /[\\/]node_modules[\\/]lucide-react[\\/]/,
            name: "chunk-lucide",
            priority: 25,
            reuseExistingChunk: true,
          },
          supabase: {
            test: /[\\/]node_modules[\\/]@supabase[\\/]/,
            name: "chunk-supabase",
            priority: 20,
            reuseExistingChunk: true,
          },
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: "chunk-vendor",
            priority: 10,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },
};

export default nextConfig;
