/** Media URLs for Mindloop newsletter preset (CloudFront + Mux HLS). */
export const VIDEOS = {
  hero: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4",
  mission:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260418_080021_d598092b-c4c2-4e53-8e46-94cf9064cd50.mp4",
  solution:
    "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4",
  ctaHls: "https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8",
} as const;

const base = import.meta.env.BASE_URL;

export const AVATARS = [
  `${base}avatars/avatar-1.jpg`,
  `${base}avatars/avatar-2.jpg`,
  `${base}avatars/avatar-3.jpg`,
] as const;

export const PLATFORM_ICONS = {
  chatgpt: `${base}platforms/chatgpt.svg`,
  perplexity: `${base}platforms/perplexity.svg`,
  googleAi: `${base}platforms/google-ai.svg`,
} as const;
