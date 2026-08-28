export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4";

export const NAV_ITEMS = [
  { label: "Movies", route: "movies" },
  { label: "TV Series", route: "tv-series" },
  { label: "Editor's Pick", route: "editors-pick" },
  { label: "Interviews", route: "interviews" },
  { label: "User Reviews", route: "user-reviews" },
] as const;

export type StreamRoute = (typeof NAV_ITEMS)[number]["route"] | "" | "contact";
