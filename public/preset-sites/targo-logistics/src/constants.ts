import type { PresetHashTarget } from "../../_shared/preset-site-routing";

export const HERO_VIDEO_URL =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260227_042027_c4b2f2ea-1c7c-4d6e-9e3d-81a78063703f.mp4";

export const BRAND_RED = "#EE3F2C";

export const HOME_ROUTE: PresetHashTarget = { kind: "route", path: "" };
export const CONTACT_ROUTE: PresetHashTarget = { kind: "route", path: "contact" };

export const NAV_LINKS: { label: string; target: PresetHashTarget }[] = [
  { label: "Home", target: HOME_ROUTE },
  { label: "About", target: { kind: "route", path: "about" } },
  { label: "Contact Us", target: CONTACT_ROUTE },
];
