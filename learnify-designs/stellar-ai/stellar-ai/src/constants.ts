export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260319_165750_358b1e72-c921-48b7-aaac-f200994f32fb.mp4";

export const NAV_LINKS = [
  { label: "Solutions", path: "solutions" },
  { label: "For Teams", path: "for-teams" },
  { label: "About", path: "about" },
  { label: "Learn Hub", path: "learn-hub" },
  { label: "Pricing", path: "pricing" },
  { label: "Contact", path: "contact" },
] as const;

export const HERO_TABS = [
  {
    id: "insights",
    label: "Insights",
    eyebrow: "Real-time intelligence",
    title: "See every signal in one orbit",
    description:
      "Live dashboards surface model drift, spend, and quality without leaving the canvas.",
    stats: [
      { label: "Latency", value: "42ms" },
      { label: "Accuracy", value: "99.2%" },
      { label: "Uptime", value: "99.99%" },
    ],
  },
  {
    id: "teams",
    label: "Teams",
    eyebrow: "Collaborative control",
    title: "Ship together across every squad",
    description: "Shared workspaces, review gates, and role-aware prompts keep humans in the loop.",
    stats: [
      { label: "Members", value: "128" },
      { label: "Reviews", value: "2.4k" },
      { label: "Ship rate", value: "+38%" },
    ],
  },
  {
    id: "pipelines",
    label: "Pipelines",
    eyebrow: "Production flows",
    title: "Orchestrate agents end to end",
    description: "Visual pipelines chain tools, memory, and guardrails with one-click deploy.",
    stats: [
      { label: "Steps", value: "12" },
      { label: "Runs/day", value: "8.1k" },
      { label: "Cost", value: "-24%" },
    ],
  },
  {
    id: "guardrails",
    label: "Guardrails",
    eyebrow: "Enterprise safety",
    title: "Policy layers that never sleep",
    description: "PII filters, audit trails, and compliance templates ship with every environment.",
    stats: [
      { label: "Policies", value: "64" },
      { label: "Blocks", value: "0" },
      { label: "SOC2", value: "Ready" },
    ],
  },
] as const;

export const LOGO_NAMES = [
  "Anthropic",
  "Databricks",
  "Stripe",
  "Notion",
  "Linear",
  "Vercel",
  "Ramp",
  "Figma",
  "Snowflake",
  "OpenAI",
];
