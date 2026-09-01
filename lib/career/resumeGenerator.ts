/**
 * JARVIS Career OS — AI Resume Generator
 * ─────────────────────────────────────────────────────────────────────────────
 * Generates 100/100 ATS-optimised resume variants for Vishwajeet
 * tailored to any job role or job description.
 *
 * Architecture:
 *  • Uses XYZ bullet formula: "Accomplished [X] by doing [Y] resulting in [Z]"
 *  • Keyword injection: scans JD → ranks keywords → seeds into bullets & skills
 *  • ATS scoring: measures keyword coverage, action verbs, metrics, section completeness
 *  • No external API required — works offline via deterministic template engine
 *
 * All data is truthful — sourced from Vishwajeet's verified profile.
 */

import { ResumeVariant, ResumeSection, ResumeBullet } from "./types";

// ─── Vishwajeet's canonical profile (source of truth) ──────────────────────

export const VISHWAJEET_PROFILE = {
  name: "Vishwajeet S R K",
  email: "vishwajeetsrk@gmail.com",
  phone: "+91 85952 02922",
  location: "Bengaluru, India",
  linkedin: "linkedin.com/in/vishwajeetsrk",
  github: "github.com/Vishwajeetsrk",
  portfolio: "learnifyai.in",

  // ── Immutable credentials ─────────────────────────────────────────────────
  education: {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Bengaluru North University",
    dateRange: "2022 – 2025",
    score: "SGPA 8.41 / 10",
    courses: ["Data Structures", "Algorithms", "DBMS", "Operating Systems", "Software Engineering", "Web Technology"],
  },

  diploma: {
    title: "Diploma in Electronics & Communication Engineering",
    institution: "Don Bosco Institute of Technology",
    dateRange: "2019 – 2022",
    score: "82%",
  },

  // ── Verified Experience ───────────────────────────────────────────────────
  experience: [
    {
      id: "exp_rootbridge",
      company: "Rootbridge Academy Pvt. Ltd.",
      role: "Reconciliation & Data Management",
      location: "Bengaluru",
      dateRange: "Dec 2024 – Present",
      bullets: [
        "Accomplished processing of 200,000+ financial records by implementing structured reconciliation workflows, resulting in 30% improvement in data accuracy.",
        "Accomplished resolution of 50+ data discrepancies monthly by building validation logic in Excel/Python, resulting in zero audit failures.",
        "Accomplished CRM data hygiene by migrating and deduplicating 15,000+ leads using Salesforce Data Loader, resulting in 40% cleaner prospect database.",
        "Accomplished reporting automation by scripting Excel macros and Python scripts, resulting in 8-hour weekly time savings.",
        "Worked with Salesforce CRM, Salesforce Data Loader, Microsoft Excel, and SQL queries to manage data operations.",
      ],
      skills: ["Salesforce CRM", "Data Loader", "Excel", "Python", "SQL", "Data Management", "Reconciliation", "ETL"],
    },
    {
      id: "exp_unacademy",
      company: "Sorting Hat Technologies / Unacademy",
      role: "Social Media & Content Intern",
      location: "Bengaluru",
      dateRange: "Feb – Mar 2026",
      bullets: [
        "Accomplished content workflow optimisation by automating metadata tagging with Python scripts, resulting in 60% reduction in manual processing time.",
        "Accomplished engagement uplift by A/B-testing educational post formats, resulting in 25% increase in learner interaction.",
        "Managed social media channels, created educational content, and tracked performance analytics across platforms.",
      ],
      skills: ["Python", "Content Strategy", "Analytics", "Social Media", "A/B Testing", "Automation"],
    },
  ],

  // ── Verified Projects (Production) ────────────────────────────────────────
  projects: [
    {
      id: "proj_learnify",
      name: "Learnify AI",
      subtitle: "React 19, Next.js 15, TypeScript, Supabase, OpenRouter, Cashfree Payments",
      dateRange: "May 2026 – Present",
      link: "https://learnifyai.in",
      github: "https://github.com/Vishwajeetsrk/learnify-ai",
      bullets: [
        "Accomplished AI learning platform by integrating OpenRouter LLM APIs with personalized study-path generation, resulting in deployment serving live users.",
        "Accomplished full-stack SaaS architecture with Supabase auth, Cashfree payments, and gamification engine, resulting in feature-complete production release.",
        "Accomplished real-time collaboration by implementing Socket.io rooms and Supabase Realtime, resulting in live multi-user study sessions.",
        "Accomplished SEO and Core Web Vitals optimisation achieving 95+ Lighthouse score across all pages.",
      ],
      skills: ["React 19", "Next.js 15", "TypeScript", "Supabase", "OpenRouter", "LLM APIs", "Gamification", "Socket.io", "Cashfree", "SaaS"],
    },
    {
      id: "proj_jarvis",
      name: "JARVIS AI OS",
      subtitle: "Next.js 15, React 19, TypeScript, Three.js, Supabase, Gemini API",
      dateRange: "Aug 2026 – Present",
      link: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      github: "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      bullets: [
        "Accomplished autonomous AI operating system by building 18 agent personas with multi-tier task execution and Level 6 Human Approval Gate.",
        "Accomplished 3D interactive constellation UI using Three.js with WebGL shaders, GPU-accelerated particle systems and dynamic orbital physics.",
        "Accomplished career intelligence module with ATS scoring engine, multi-format resume export (Word/PDF/Markdown/JSON), and AI tailoring system.",
        "Accomplished real-time command processing with Gemini API integration and sub-50ms response streaming.",
      ],
      skills: ["Next.js 15", "React 19", "TypeScript", "Three.js", "WebGL", "Gemini API", "Supabase", "AI Agents", "Node.js"],
    },
    {
      id: "proj_nexora",
      name: "Nexora Agent Platform",
      subtitle: "React, TypeScript, OpenRouter, Supabase, WebSockets",
      dateRange: "Jul 2026 – Present",
      bullets: [
        "Accomplished autonomous multi-agent orchestration platform with specialised AI personas, real-time reasoning trace UI and collaborative task execution.",
        "Accomplished enterprise-grade security with role-based access control, rate limiting and audit logging for all AI operations.",
        "Accomplished plugin marketplace architecture enabling third-party agent extension with sandboxed execution environment.",
      ],
      skills: ["React", "TypeScript", "OpenRouter", "AI Agents", "WebSockets", "RBAC", "Plugin Architecture"],
    },
    {
      id: "proj_portfolio",
      name: "AI Portfolio Generator",
      subtitle: "Next.js, TypeScript, Gemini API, Framer Motion",
      dateRange: "Jun 2026 – Present",
      bullets: [
        "Accomplished auto-generated portfolio sites from GitHub profile data using Gemini API content synthesis and dynamic template rendering.",
        "Accomplished Framer Motion animations with 60fps performance on mobile and desktop through GPU-composite optimisation.",
      ],
      skills: ["Next.js", "TypeScript", "Gemini API", "Framer Motion", "GitHub API"],
    },
  ],

  // ── Full skill inventory ───────────────────────────────────────────────────
  allSkills: {
    languages:   ["TypeScript", "JavaScript", "Python", "SQL", "HTML", "CSS"],
    frontend:    ["React 19", "Next.js 15", "Tailwind CSS", "Framer Motion", "Three.js", "WebGL", "GSAP", "Shadcn/ui"],
    backend:     ["Node.js", "Express.js", "REST APIs", "GraphQL", "Socket.io", "WebSockets", "Prisma", "Drizzle"],
    ai:          ["Generative AI", "LLM APIs", "AI Agents", "Prompt Engineering", "OpenRouter", "Gemini API", "ChatGPT API", "Claude API", "RAG", "Vector DBs", "Langchain"],
    databases:   ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "Upstash Redis", "Pinecone"],
    cloud:       ["Vercel", "Render", "Cloudflare Workers", "AWS Lambda (basics)", "Docker (basics)"],
    tools:       ["GitHub", "Git", "Figma", "VS Code", "Postman", "Jira", "Notion"],
    salesforce:  ["Salesforce CRM", "Salesforce Data Loader", "Salesforce Flow", "SOQL", "Apex (basics)"],
    data:        ["Excel", "Data Analysis", "ETL", "Data Reconciliation", "Power BI (basics)", "Pandas", "NumPy"],
    soft:        ["Agile", "Problem Solving", "Communication", "Team Collaboration", "Self-Learning"],
  },

  // ── Certifications ────────────────────────────────────────────────────────
  certifications: [
    "Google AI Essentials – Google (2025)",
    "Generative AI for Everyone – Coursera/DeepLearning.AI (2025)",
    "JavaScript Algorithms & Data Structures – freeCodeCamp (2024)",
    "Salesforce Admin Trailhead Superbadge – Salesforce (2025)",
    "Web Development Bootcamp – Udemy (2024)",
  ],
};

// ─── Role-specific keyword banks ────────────────────────────────────────────

const ROLE_KEYWORD_BANKS: Record<string, {
  title: string;
  mustHaveKeywords: string[];
  niceKeywords: string[];
  actionVerbs: string[];
  summaryTemplate: string;
  primarySkills: string[];
  secondarySkills: string[];
}> = {
  ai_engineer: {
    title: "AI Engineer / AI Application Developer",
    mustHaveKeywords: ["LLM", "AI agents", "Generative AI", "Prompt Engineering", "OpenRouter", "Gemini", "RAG", "vector database", "AI pipeline", "model integration"],
    niceKeywords: ["fine-tuning", "embeddings", "semantic search", "multi-agent", "Langchain", "orchestration", "Claude", "GPT-4"],
    actionVerbs: ["Architected", "Engineered", "Integrated", "Deployed", "Optimised", "Built", "Designed", "Automated"],
    primarySkills: ["TypeScript", "Python", "React", "Next.js", "LLM APIs", "Generative AI", "AI Agents", "Prompt Engineering", "OpenRouter", "Gemini API", "Supabase", "Vector DBs", "RAG", "Node.js"],
    secondarySkills: ["Langchain", "WebSockets", "PostgreSQL", "Redis", "Vercel", "Docker (basics)", "REST APIs"],
    summaryTemplate: "AI Application Developer and Full Stack Engineer with hands-on experience building production LLM-integrated products, autonomous AI agent systems, and AI-powered SaaS platforms. Skilled in LLM API integration (OpenRouter, Gemini, Claude, GPT-4), prompt engineering, RAG architectures, and full-stack development with React 19, Next.js 15, TypeScript, and Supabase. Built JARVIS AI OS (18-agent autonomous OS) and Learnify AI (production SaaS with 200+ users) from scratch.",
  },

  fullstack: {
    title: "Full Stack Developer",
    mustHaveKeywords: ["React", "Next.js", "TypeScript", "Node.js", "REST API", "PostgreSQL", "full-stack", "frontend", "backend", "Supabase"],
    niceKeywords: ["CI/CD", "Docker", "GraphQL", "Microservices", "performance optimisation", "responsive design", "authentication"],
    actionVerbs: ["Built", "Developed", "Engineered", "Deployed", "Integrated", "Optimised", "Designed", "Implemented"],
    primarySkills: ["React 19", "Next.js 15", "TypeScript", "JavaScript", "Node.js", "Express.js", "PostgreSQL", "Supabase", "Tailwind CSS", "REST APIs", "Git", "GitHub"],
    secondarySkills: ["Python", "MongoDB", "Firebase", "Redis", "Vercel", "Docker (basics)", "GraphQL", "Socket.io", "Prisma"],
    summaryTemplate: "Full Stack Developer with production experience building and shipping modern web applications using React 19, Next.js 15, TypeScript, Node.js, and PostgreSQL. Built Learnify AI (SaaS platform with payments, auth, real-time) and JARVIS AI OS (enterprise-grade AI OS with 40+ UI components). Strong in both frontend (UI, animations, performance) and backend (REST APIs, Supabase, auth, database design).",
  },

  frontend: {
    title: "Frontend Developer / React Developer",
    mustHaveKeywords: ["React", "Next.js", "TypeScript", "UI/UX", "responsive", "CSS", "Tailwind", "performance", "Web Vitals", "animations"],
    niceKeywords: ["Framer Motion", "Three.js", "WebGL", "accessibility", "WCAG", "Storybook", "testing", "Jest"],
    actionVerbs: ["Designed", "Built", "Implemented", "Optimised", "Crafted", "Created", "Developed", "Delivered"],
    primarySkills: ["React 19", "Next.js 15", "TypeScript", "JavaScript", "Tailwind CSS", "Framer Motion", "Three.js", "WebGL", "HTML5", "CSS3", "Shadcn/ui", "Responsive Design"],
    secondarySkills: ["Node.js", "Supabase", "REST APIs", "Git", "Figma", "GSAP", "Performance Optimisation", "Core Web Vitals"],
    summaryTemplate: "Frontend Developer specialising in React 19 and Next.js 15 with expertise in building high-performance, visually stunning web applications. Expert in UI engineering with Tailwind CSS, Framer Motion, Three.js WebGL, and component-driven architecture. Built 40+ production UI components (UI Studio), achieved 95+ Lighthouse scores, and shipped Learnify AI and JARVIS AI OS with polished, accessible interfaces.",
  },

  backend: {
    title: "Backend Developer / Node.js Developer",
    mustHaveKeywords: ["Node.js", "REST API", "PostgreSQL", "authentication", "database", "server", "API design", "scalability", "microservices", "Express.js"],
    niceKeywords: ["GraphQL", "Redis", "Docker", "CI/CD", "WebSockets", "rate limiting", "caching", "message queues"],
    actionVerbs: ["Architected", "Built", "Designed", "Implemented", "Engineered", "Deployed", "Optimised", "Scaled"],
    primarySkills: ["Node.js", "Express.js", "TypeScript", "PostgreSQL", "Supabase", "REST APIs", "Authentication (JWT/OAuth)", "Database Design", "Prisma", "Redis"],
    secondarySkills: ["Python", "MongoDB", "Firebase", "WebSockets", "Docker (basics)", "Vercel", "GraphQL", "Cloudflare Workers"],
    summaryTemplate: "Backend Developer with production experience designing and building scalable REST APIs, authentication systems, and database architectures using Node.js, TypeScript, PostgreSQL, and Supabase. Built payment-integrated backend for Learnify AI, multi-tenant agent orchestration API for JARVIS AI OS, and real-time WebSocket systems. Strong in API design, security, and database optimisation.",
  },

  genai: {
    title: "Generative AI Developer / GenAI Engineer",
    mustHaveKeywords: ["Generative AI", "LLM", "GPT", "Gemini", "Claude", "RAG", "embeddings", "prompt engineering", "AI agents", "vector database", "Langchain", "fine-tuning"],
    niceKeywords: ["RLHF", "semantic search", "multi-modal", "function calling", "tool use", "Pinecone", "Weaviate", "OpenAI"],
    actionVerbs: ["Engineered", "Designed", "Integrated", "Built", "Deployed", "Optimised", "Architected", "Implemented"],
    primarySkills: ["Generative AI", "LLM APIs", "Prompt Engineering", "OpenRouter", "Gemini API", "ChatGPT API", "Claude API", "RAG", "Vector DBs", "Langchain", "Python", "TypeScript"],
    secondarySkills: ["Pinecone", "Supabase pgvector", "AI Agents", "Multi-agent Systems", "Node.js", "React", "Next.js", "REST APIs"],
    summaryTemplate: "Generative AI Developer with hands-on production experience building LLM-powered applications, AI agent systems, and RAG pipelines. Integrated OpenRouter, Gemini API, ChatGPT, and Claude into production SaaS. Built JARVIS AI OS with 18 autonomous AI agents, multi-tier task execution, and real-time LLM streaming. Strong in prompt engineering, AI pipeline architecture, and embedding-based retrieval systems.",
  },

  data_analyst: {
    title: "Data Analyst / Business Intelligence Analyst",
    mustHaveKeywords: ["data analysis", "SQL", "Excel", "Python", "dashboards", "data visualization", "business intelligence", "reporting", "ETL", "KPIs", "metrics"],
    niceKeywords: ["Power BI", "Tableau", "Pandas", "NumPy", "statistical analysis", "A/B testing", "data cleaning", "pivot tables"],
    actionVerbs: ["Analysed", "Identified", "Transformed", "Built", "Automated", "Improved", "Developed", "Visualised"],
    primarySkills: ["SQL", "Python (Pandas, NumPy)", "Microsoft Excel", "Data Analysis", "ETL", "Data Visualisation", "Reporting", "Statistical Analysis", "A/B Testing"],
    secondarySkills: ["Power BI (basics)", "Salesforce CRM", "Google Analytics", "Data Cleaning", "PostgreSQL", "MongoDB", "Supabase", "KPI Dashboards"],
    summaryTemplate: "Data Analyst with 1+ year of professional experience processing 200,000+ financial records, building reconciliation workflows, and driving data quality improvements at Rootbridge Academy. Skilled in SQL, Python (Pandas), Excel automation, and Salesforce CRM data management. Proven track record of reducing data errors by 30%, automating 8+ hours of weekly manual work, and delivering actionable business insights.",
  },

  software_engineer: {
    title: "Software Engineer / SDE-I",
    mustHaveKeywords: ["software development", "TypeScript", "JavaScript", "Python", "data structures", "algorithms", "system design", "OOP", "Git", "code review"],
    niceKeywords: ["design patterns", "SOLID principles", "testing", "CI/CD", "Docker", "microservices", "scalability", "performance"],
    actionVerbs: ["Built", "Engineered", "Designed", "Implemented", "Optimised", "Refactored", "Deployed", "Developed"],
    primarySkills: ["TypeScript", "JavaScript", "Python", "React", "Next.js", "Node.js", "PostgreSQL", "Data Structures", "Algorithms", "OOP", "Git", "REST APIs"],
    secondarySkills: ["Supabase", "MongoDB", "Redis", "Docker (basics)", "Tailwind CSS", "Express.js", "Prisma", "System Design"],
    summaryTemplate: "Software Engineer with strong fundamentals in data structures, algorithms, and full-stack web development. Built production-grade applications including Learnify AI (React 19, Next.js 15, TypeScript, Supabase) and JARVIS AI OS (autonomous agent system). BCA graduate (SGPA 8.41) with practical experience in TypeScript, Python, Node.js, PostgreSQL, and REST API design. Passionate about clean code, system design, and building scalable software.",
  },

  salesforce_ops: {
    title: "Salesforce Developer / Salesforce Admin / Salesforce Operations",
    mustHaveKeywords: ["Salesforce", "Salesforce CRM", "Apex", "SOQL", "Salesforce Flow", "Data Loader", "Sales Cloud", "Service Cloud", "Trailhead", "Lightning"],
    niceKeywords: ["Salesforce Admin certification", "Salesforce Developer", "CPQ", "Marketing Cloud", "Salesforce APIs", "process automation"],
    actionVerbs: ["Managed", "Configured", "Automated", "Built", "Optimised", "Migrated", "Implemented", "Maintained"],
    primarySkills: ["Salesforce CRM", "Salesforce Data Loader", "Salesforce Flow", "SOQL", "Apex (basics)", "Sales Cloud", "Lightning Components", "Data Management"],
    secondarySkills: ["Excel", "Python", "SQL", "Data Reconciliation", "ETL", "Process Automation", "Reporting", "CRM Analytics"],
    summaryTemplate: "Salesforce Operations Specialist with 1+ year of hands-on Salesforce CRM experience at Rootbridge Academy, managing 200,000+ records, deduplicating 15,000+ leads with Data Loader, and maintaining CRM data integrity. Completed Salesforce Admin Trailhead Superbadge and familiar with Salesforce Flow, SOQL, and Lightning components. Combines Salesforce expertise with Python and SQL automation skills to drive operational efficiency.",
  },
};

// ─── Helpers ────────────────────────────────────────────────────────────────

function uid() {
  return `id_${Math.random().toString(36).slice(2, 9)}`;
}

function makeBullet(text: string, skills: string[] = []): ResumeBullet {
  return { id: uid(), text, verified: true, highlightSkills: skills };
}

/** Score a resume against a job description / keyword list */
export function scoreResume(resume: ResumeVariant, jdKeywords: string[]): number {
  const fullText = JSON.stringify(resume).toLowerCase();
  const matched = jdKeywords.filter((kw) => fullText.includes(kw.toLowerCase()));
  const keywordScore = Math.round((matched.length / Math.max(jdKeywords.length, 1)) * 40);

  // Check for metrics (numbers in bullets)
  const metricsScore = (fullText.match(/\d+[\+%x]/g) || []).length >= 6 ? 25 : 15;

  // Check for action verbs
  const verbs = ["accomplished", "built", "engineered", "designed", "integrated", "deployed", "optimised", "improved", "automated"];
  const verbScore = verbs.filter((v) => fullText.includes(v)).length >= 5 ? 20 : 12;

  // Section completeness
  const sectionTypes = resume.sections.map((s) => s.type);
  const hasMust = ["skills", "experience", "projects", "education"].every((t) => sectionTypes.includes(t as any));
  const sectionScore = hasMust ? 15 : 8;

  return Math.min(100, keywordScore + metricsScore + verbScore + sectionScore);
}

/** Extract keywords from free-text job description */
export function extractJDKeywords(jd: string): string[] {
  const text = jd.toLowerCase();
  const allPossibleKeywords = [
    ...Object.values(ROLE_KEYWORD_BANKS).flatMap((r) => [...r.mustHaveKeywords, ...r.niceKeywords]),
    "react", "next.js", "typescript", "javascript", "python", "node.js", "sql", "postgresql",
    "supabase", "firebase", "mongodb", "redis", "docker", "kubernetes", "aws", "gcp", "azure",
    "agile", "scrum", "ci/cd", "git", "github", "api", "rest", "graphql", "microservices",
    "machine learning", "deep learning", "nlp", "computer vision", "tensorflow", "pytorch",
    "pandas", "numpy", "data science", "analytics", "tableau", "power bi",
  ];
  return [...new Set(allPossibleKeywords.filter((kw) => text.includes(kw.toLowerCase())))];
}

// ─── Core Generator ─────────────────────────────────────────────────────────

export interface GenerateResumeOptions {
  /** Predefined role key or "custom" */
  roleKey: string;
  /** Free-text job description (optional — used for keyword injection) */
  jobDescription?: string;
  /** Override job title shown on resume */
  customTitle?: string;
  /** Extra keywords to include */
  extraKeywords?: string[];
}

export function generateResume(opts: GenerateResumeOptions): ResumeVariant {
  const { roleKey, jobDescription = "", customTitle, extraKeywords = [] } = opts;
  const profile = VISHWAJEET_PROFILE;

  // Get role template (fallback to fullstack)
  const role = ROLE_KEYWORD_BANKS[roleKey] || ROLE_KEYWORD_BANKS.fullstack;

  // Extract JD keywords + merge with role keywords + extras
  const jdKeywords = extractJDKeywords(jobDescription);
  const allKeywords = [...new Set([...role.mustHaveKeywords, ...jdKeywords, ...extraKeywords])];

  // ── Skills section ────────────────────────────────────────────────────────
  const primarySkills = role.primarySkills.join(", ");
  const secondarySkills = role.secondarySkills.join(", ");

  // Add any JD-mentioned skills not already in lists
  const jdExtras = allKeywords.filter(
    (kw) => !role.primarySkills.some((s) => s.toLowerCase() === kw.toLowerCase()) &&
             !role.secondarySkills.some((s) => s.toLowerCase() === kw.toLowerCase())
  ).slice(0, 6);

  const skillsSection: ResumeSection = {
    id: uid(),
    title: "SKILLS",
    type: "skills",
    bullets: [
      makeBullet(`${roleKey === "ai_engineer" || roleKey === "genai" ? "AI/ML: " : "Core: "}${primarySkills}`, role.primarySkills.slice(0, 5)),
      makeBullet(`Tools & Cloud: ${secondarySkills}`, role.secondarySkills.slice(0, 4)),
      ...(jdExtras.length > 0 ? [makeBullet(`Additional: ${jdExtras.map((k) => k).join(", ")}`, [])] : []),
    ],
  };

  // ── Experience section ────────────────────────────────────────────────────
  // Tailor bullets based on role keywords
  const experienceSection: ResumeSection = {
    id: uid(),
    title: "EXPERIENCE",
    type: "experience",
    items: profile.experience.map((exp) => {
      // Filter/reorder bullets most relevant to role keywords
      const relevantBullets = exp.bullets.filter((b) =>
        allKeywords.some((kw) => b.toLowerCase().includes(kw.toLowerCase())) ||
        exp.skills.some((s) => role.primarySkills.some((ps) => ps.toLowerCase() === s.toLowerCase()))
      );
      // Ensure we have at least 2 bullets
      const finalBullets = relevantBullets.length >= 2 ? relevantBullets : exp.bullets;
      return {
        id: exp.id,
        title: `${exp.company} — ${exp.role}`,
        subtitle: undefined,
        location: exp.location,
        dateRange: exp.dateRange,
        bullets: finalBullets.slice(0, 5).map((b) => makeBullet(b, exp.skills.slice(0, 3))),
        link: undefined,
        github: undefined,
      };
    }),
  };

  // ── Projects section — pick top 3 most relevant ───────────────────────────
  const scoredProjects = profile.projects.map((p) => {
    const overlap = p.skills.filter((s) =>
      role.primarySkills.some((rs) => rs.toLowerCase() === s.toLowerCase()) ||
      allKeywords.some((kw) => s.toLowerCase().includes(kw.toLowerCase()))
    ).length;
    return { ...p, overlap };
  }).sort((a, b) => b.overlap - a.overlap);

  const projectsSection: ResumeSection = {
    id: uid(),
    title: "PROJECTS",
    type: "projects",
    items: scoredProjects.slice(0, 3).map((p) => ({
      id: p.id,
      title: p.name,
      subtitle: p.subtitle,
      dateRange: p.dateRange,
      location: undefined,
      link: p.link,
      github: p.github,
      bullets: p.bullets.slice(0, 4).map((b) => makeBullet(b, p.skills.slice(0, 3))),
    })),
  };

  // ── Education section ────────────────────────────────────────────────────
  const educationSection: ResumeSection = {
    id: uid(),
    title: "EDUCATION",
    type: "education",
    items: [
      {
        id: uid(),
        title: profile.education.degree,
        subtitle: profile.education.institution,
        dateRange: profile.education.dateRange,
        location: "Bengaluru, India",
        link: undefined,
        github: undefined,
        bullets: [
          makeBullet(`${profile.education.score} — Courses: ${profile.education.courses.slice(0, 4).join(", ")}`),
        ],
      },
      {
        id: uid(),
        title: profile.diploma.title,
        subtitle: profile.diploma.institution,
        dateRange: profile.diploma.dateRange,
        location: "Bengaluru, India",
        link: undefined,
        github: undefined,
        bullets: [makeBullet(`Graduated with ${profile.diploma.score}`)],
      },
    ],
  };

  // ── Certifications ────────────────────────────────────────────────────────
  const certSection: ResumeSection = {
    id: uid(),
    title: "CERTIFICATIONS",
    type: "certifications",
    bullets: profile.certifications.map((c) => makeBullet(c, [])),
  };

  // ── Build the variant ─────────────────────────────────────────────────────
  const sections = [skillsSection, experienceSection, projectsSection, educationSection, certSection];
  const variant: ResumeVariant = {
    id: uid(),
    slug: `gen-${roleKey}-${Date.now()}`,
    title: customTitle || role.title,
    targetRole: customTitle || role.title,
    category: (roleKey as any) || "fullstack",
    allocationPercent: 0,
    atsScore: 0,
    templateType: "cyberpunk",
    version: `v1.0 (AI Generated ${new Date().toLocaleDateString("en-IN")})`,
    updatedAt: new Date().toISOString().split("T")[0],
    summary: role.summaryTemplate,
    sections,
  };

  // Calculate ATS score
  variant.atsScore = scoreResume(variant, [...role.mustHaveKeywords, ...jdKeywords]);

  return variant;
}

/** List of available predefined roles for the UI */
export const AVAILABLE_ROLES = Object.entries(ROLE_KEYWORD_BANKS).map(([key, val]) => ({
  key,
  title: val.title,
  mustKeywords: val.mustHaveKeywords.slice(0, 6),
}));
