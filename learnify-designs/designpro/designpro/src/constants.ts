export const HERO_VIDEO =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260328_105406_16f4600d-7a92-4292-b96e-b19156c7830a.mp4";

export const COURSES = [
  {
    title: "Product Strategy Sprint",
    duration: "8 weeks",
    level: "Intermediate",
    desc: "Ship portfolio-ready case studies with mentorship from FAANG product leaders.",
  },
  {
    title: "Design Systems Lab",
    duration: "6 weeks",
    level: "Advanced",
    desc: "Build scalable tokens, components, and documentation for cross-platform teams.",
  },
  {
    title: "Leadership Studio",
    duration: "10 weeks",
    level: "Executive",
    desc: "Executive storytelling, stakeholder alignment, and org-level design influence.",
  },
] as const;

export const INSTRUCTORS = [
  { name: "Maya Chen", role: "VP Product, Northwind", focus: "B2B SaaS growth" },
  { name: "Jordan Ellis", role: "Design Director, Lumen", focus: "Systems & accessibility" },
  { name: "Priya Nair", role: "Founder, Framecraft", focus: "Consumer mobile" },
  { name: "Alex Romero", role: "Principal PM, Atlas", focus: "AI-native workflows" },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "DesignPro reframed how I present product decisions. I landed a senior role within three months of graduating.",
    author: "Sofia M., Product Designer",
  },
  {
    quote:
      "The cohort model and live critiques are unmatched. Every module ends with work you can show hiring managers.",
    author: "Devon K., Associate PM",
  },
  {
    quote:
      "Instructors push you past pixel polish into business impact. That shift alone was worth the tuition.",
    author: "Rina T., Design Lead",
  },
] as const;

export const BLOG_POSTS = [
  {
    title: "How to build a product portfolio that gets interviews",
    date: "Mar 12, 2026",
    tag: "Career",
  },
  {
    title: "Design systems in the age of AI copilots",
    date: "Feb 28, 2026",
    tag: "Systems",
  },
  {
    title: "From IC to product leader: a 90-day playbook",
    date: "Feb 14, 2026",
    tag: "Leadership",
  },
] as const;
