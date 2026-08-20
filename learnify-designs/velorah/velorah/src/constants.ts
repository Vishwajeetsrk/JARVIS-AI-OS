export const VIDEOS = {
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260324_151826_c7218672-6e92-402c-9e45-f1e0f454bdc4.mp4",
  feature:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  statementHls: "https://stream.mux.com/9njY8qDfS02Uvbll018C8CK39p5EksK7mn02DDC1zYvppI.m3u8",
  cta: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4",
} as const;

export const FEATURE_TABS = [
  {
    id: "electric",
    label: "Living Electric",
    title: "100% Electric",
    description:
      "No more fossil fuels, buzzing generators, and propane tanks. Velorah has power for days.",
  },
  {
    id: "charge",
    label: "Charge Faster",
    title: "Rapid Charging",
    description:
      "Level 2 and DC fast charging keep you moving. Recover range while you sleep, work, or explore.",
  },
  {
    id: "sleep",
    label: "Sleep Well",
    title: "Restful Nights",
    description:
      "Whisper-quiet climate control and blackout shades turn every campsite into a bedroom.",
  },
  {
    id: "acoustic",
    label: "Acoustic Comfort",
    title: "Acoustic Comfort",
    description:
      "Engineered insulation and vibration damping keep road noise outside where it belongs.",
  },
  {
    id: "seasons",
    label: "5+ Seasons",
    title: "All-Season Ready",
    description:
      "Heated floors, thermal glazing, and smart HVAC adapt from desert heat to alpine cold.",
  },
] as const;

export const STATS = [
  { value: "OTA", label: "Over-the-air updates" },
  { value: "360°", label: "System visibility" },
  { value: "AI", label: "Adaptive routines" },
  { value: "24/7", label: "Remote monitoring" },
] as const;

export const FOOTER_LINKS = [
  "product",
  "app",
  "company",
  "community",
  "press",
  "preorder",
] as const;

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Studio", href: "#features" },
  { label: "About", href: "#tagline" },
  { label: "Journal", href: "#statement" },
  { label: "Reach Us", href: "#cta" },
] as const;
