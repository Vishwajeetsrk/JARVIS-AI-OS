/** Hash routes registered in App.tsx and lib/preset-site-routing.ts */
export const TOONHUB_ROUTES = [
  "",
  "shop",
  "about",
  "faq",
  "drops",
  "artists",
  "privacy",
  "terms",
] as const;

export type ToonhubRoute = (typeof TOONHUB_ROUTES)[number];
