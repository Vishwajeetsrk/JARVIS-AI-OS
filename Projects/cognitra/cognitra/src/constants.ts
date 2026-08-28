export const BACKGROUND_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260514_135830_bb6491d1-9b66-4aec-9722-13b4dfe3fb46.mp4";

export const SERVICE_CARDS = [
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_220333_48163edc-995f-4513-9f44-48dbb07a7329.mp4",
    title: "Process Streamlining",
    text: "We automate your processes by linking together the daily tools you rely upon. Lifting throughput and improving overall output.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221040_e6ba7c5a-864e-46e9-871e-341a176a7e3e.mp4",
    title: "Strategic advisory",
    text: "We craft intelligent assistants that are adaptive, grasp context, and are skilled enough to handle highly intricate customer requests.",
  },
  {
    video:
      "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260513_221104_fb538584-5b87-495f-952e-09ddd5a1792a.mp4",
    title: "Assistant engineering",
    text: "Through our knowledge, we explore deep into your business and advise you on how AI powered automations may transform your operations.",
  },
] as const;

export const CASE_STUDIES = [
  {
    client: "Northline Logistics",
    outcome: "42% faster quote turnaround after workflow automation.",
    tag: "Operations",
  },
  {
    client: "Harbor Health",
    outcome: "AI triage assistant handling 68% of inbound scheduling requests.",
    tag: "Healthcare",
  },
  {
    client: "Meridian Retail",
    outcome: "Unified product data pipeline across 11 legacy tools.",
    tag: "Commerce",
  },
] as const;

export const RATE_TIERS = [
  {
    name: "Discovery",
    price: "$4,800",
    period: "one-time sprint",
    features: ["Workflow audit", "Automation roadmap", "Executive readout"],
  },
  {
    name: "Build",
    price: "$12,500",
    period: "per month",
    features: ["Custom AI products", "Integration engineering", "Dedicated squad"],
    highlight: true,
  },
  {
    name: "Scale",
    price: "Custom",
    period: "enterprise",
    features: ["Multi-team rollout", "SLA & governance", "24/7 optimization"],
  },
] as const;

export const CREW = [
  { name: "Elena Voss", role: "Founding Partner", focus: "Automation strategy" },
  { name: "Marcus Hale", role: "Lead Engineer", focus: "Assistant systems" },
  { name: "Priya Nair", role: "Product Director", focus: "Client delivery" },
  { name: "Jonah Reed", role: "Solutions Architect", focus: "Integrations" },
] as const;
