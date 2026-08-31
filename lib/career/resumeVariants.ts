import { ResumeVariant } from "./types";

/**
 * 8 CANONICAL ONE-PAGE ATS RESUMES FOR VISHWAJEET
 *
 * Sourced directly from verified BCA marks, diplomas, certificates, employment records,
 * LinkedIn, and GitHub production repositories.
 */

export const RESUME_VARIANTS: ResumeVariant[] = [
  // ==============================================================================
  // RESUME 1 — AI SOFTWARE ENGINEER (⭐ BEST OVERALL · MATCH 10/10 · 50% ALLOCATION)
  // ==============================================================================
  {
    id: "res_ai_software_engineer",
    slug: "ai-software-engineer",
    title: "AI Software Engineer / AI Application Developer",
    targetRole: "AI Software Engineer | AI Application Developer | Full Stack Developer",
    category: "ai_engineer",
    allocationPercent: 50,
    atsScore: 98,
    templateType: "cyberpunk",
    version: "v7.2 (Production)",
    updatedAt: "2026-08-31",
    summary: "AI-focused Full Stack Developer experienced in building AI-powered SaaS applications, LLM-integrated products, automation workflows, and modern web platforms. Skilled in React, Next.js, TypeScript, JavaScript, Python, Node.js, PostgreSQL, Supabase, Firebase, REST APIs, OpenRouter and Gemini. Built AI products for learning, career intelligence, resume optimization, ATS analysis, portfolio generation and SaaS management.",
    sections: [
      {
        id: "sec_skills_r1",
        title: "SKILLS",
        type: "skills",
        bullets: [
          { id: "s1_1", text: "AI: Generative AI, LLM APIs, AI Applications, AI Agents, Prompt Engineering, OpenRouter, Gemini, ChatGPT, Claude, GitHub Copilot", verified: true, highlightSkills: ["Generative AI", "LLM APIs", "AI Agents", "Prompt Engineering", "OpenRouter", "Gemini"] },
          { id: "s1_2", text: "Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS, Framer Motion", verified: true, highlightSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
          { id: "s1_3", text: "Backend: Node.js, Express.js, REST APIs, Socket.io", verified: true, highlightSkills: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
          { id: "s1_4", text: "Data: PostgreSQL, MySQL, MongoDB, Supabase, Firebase, Prisma, Upstash Redis", verified: true, highlightSkills: ["PostgreSQL", "Supabase", "Firebase", "Prisma", "Upstash Redis"] },
          { id: "s1_5", text: "Cloud/Tools: Vercel, Render, Cloudflare, GitHub, Cloudinary", verified: true, highlightSkills: ["Vercel", "GitHub", "Cloudflare"] },
        ],
      },
      {
        id: "sec_exp_r1",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp1_rootbridge",
            title: "Rootbridge Academy Pvt. Ltd. — Reconciliation & Data Management",
            location: "Bengaluru",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e1_1", text: "Processed and maintained 200,000+ records across reconciliation and data-management operations.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e1_2", text: "Resolved 50+ recurring data mismatches monthly through validation and reconciliation workflows.", verified: true, highlightSkills: ["50+ recurring data mismatches"] },
              { id: "e1_3", text: "Improved reported data accuracy by 30% through structured quality-control processes.", verified: true, highlightSkills: ["30% accuracy"] },
              { id: "e1_4", text: "Worked with Excel, Salesforce CRM and Salesforce Data Loader.", verified: true, highlightSkills: ["Salesforce CRM", "Data Loader", "Excel"] },
            ],
          },
          {
            id: "exp1_unacademy",
            title: "Sorting Hat Technologies / Unacademy — Social Media Intern",
            location: "Bengaluru",
            dateRange: "Feb–Mar 2026",
            bullets: [
              { id: "e1_5", text: "Managed educational content workflows and optimized digital content metadata.", verified: true, highlightSkills: ["Content workflows", "Metadata"] },
              { id: "e1_6", text: "Improved workflow efficiency using Python-based automation.", verified: true, highlightSkills: ["Python-based automation"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r1",
        title: "PROJECTS",
        type: "projects",
        items: [
          {
            id: "proj1_learnify",
            title: "Learnify AI — AI Learning & Career Platform",
            subtitle: "React 19, TypeScript, Supabase, OpenRouter, Cashfree",
            dateRange: "May 2026–Present",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p1_1", text: "Built AI-powered learning, career guidance, creator, gamification and community functionality.", verified: true, highlightSkills: ["AI-powered learning", "Gamification"] },
              { id: "p1_2", text: "Integrated LLM capabilities using OpenRouter and backend services through Supabase.", verified: true, highlightSkills: ["OpenRouter", "Supabase"] },
            ],
          },
          {
            id: "proj1_dreamsync",
            title: "DreamSync — AI Career Intelligence Platform",
            subtitle: "Next.js, React, Firebase, OpenRouter, Gemini, Upstash Redis",
            dateRange: "Feb–Apr 2026",
            bullets: [
              { id: "p1_3", text: "Built AI Resume Builder, ATS Checker, LinkedIn Optimizer and Portfolio Generator.", verified: true, highlightSkills: ["AI Resume Builder", "ATS Checker", "LinkedIn Optimizer"] },
              { id: "p1_4", text: "Developed responsive AI-powered career workflows.", verified: true, highlightSkills: ["AI-powered workflows"] },
            ],
          },
          {
            id: "proj1_luxury",
            title: "Luxury Laundry — SaaS Platform",
            subtitle: "Next.js, Express.js, PostgreSQL, Prisma, Socket.io",
            dateRange: "Apr–May 2026",
            bullets: [
              { id: "p1_5", text: "Developed customer/admin dashboards and real-time SaaS functionality.", verified: true, highlightSkills: ["Real-time SaaS", "Dashboards"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r1",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu1_bca",
            title: "BCA — St. Aloysius Degree College, Bengaluru",
            dateRange: "Jul 2023–Jul 2026",
            bullets: [
              { id: "ed1_1", text: "CGPA 8.1/10 | Final SGPA 9.06/10 | 89.57% (627/700) | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 Final SGPA", "First Class Exemplary"] },
            ],
          },
          {
            id: "edu1_dip",
            title: "Diploma in Software Development — Oxford Software Institute",
            bullets: [
              { id: "ed1_2", text: "Grade A Certification in full-stack software development & database engineering.", verified: true, highlightSkills: ["Grade A"] },
            ],
          },
        ],
      },
      {
        id: "sec_cert_r1",
        title: "CERTIFICATIONS / AWARD",
        type: "certifications",
        bullets: [
          { id: "c1_1", text: "AI Pair Programming with GitHub Copilot — LinkedIn", verified: true, highlightSkills: ["GitHub Copilot"] },
          { id: "c1_2", text: "Tata GenAI Data Analytics — Forage", verified: true, highlightSkills: ["Tata GenAI"] },
          { id: "c1_3", text: "Power BI for Data Analysts — LinkedIn Learning", verified: true, highlightSkills: ["Power BI"] },
          { id: "c1_4", text: "1st Prize, NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize NEURO2026"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 2 — FULL STACK DEVELOPER (⭐ VERY STRONG · MATCH 9.5/10 · 25% ALLOCATION)
  // ==============================================================================
  {
    id: "res_fullstack_dev",
    slug: "full-stack-developer",
    title: "Full Stack Developer",
    targetRole: "Full Stack Developer | React | Next.js | Node.js | TypeScript",
    category: "fullstack",
    allocationPercent: 25,
    atsScore: 96,
    templateType: "executive",
    version: "v6.4 (Production)",
    updatedAt: "2026-08-31",
    summary: "Full Stack Developer experienced in building responsive SaaS platforms, AI-powered applications, dashboards, APIs and database-driven web applications. Skilled in React, Next.js, TypeScript, JavaScript, Node.js, Express.js, PostgreSQL, MySQL, Supabase, Firebase, Prisma, REST APIs and Tailwind CSS. Built and deployed projects across EdTech, career technology and business SaaS.",
    sections: [
      {
        id: "sec_skills_r2",
        title: "SKILLS",
        type: "skills",
        bullets: [
          { id: "s2_1", text: "Languages: JavaScript, TypeScript, Python, SQL, HTML5, CSS3", verified: true, highlightSkills: ["JavaScript", "TypeScript", "Python", "SQL"] },
          { id: "s2_2", text: "Frontend: React, Next.js, Tailwind CSS, Responsive Design, Framer Motion", verified: true, highlightSkills: ["React", "Next.js", "Tailwind CSS"] },
          { id: "s2_3", text: "Backend: Node.js, Express.js, REST APIs, Socket.io", verified: true, highlightSkills: ["Node.js", "Express.js", "REST APIs"] },
          { id: "s2_4", text: "Database: PostgreSQL, MySQL, MongoDB, Supabase, Firebase, Prisma, Upstash Redis", verified: true, highlightSkills: ["PostgreSQL", "Supabase", "Prisma"] },
          { id: "s2_5", text: "Cloud: Vercel, Render, Cloudflare, Cloudinary", verified: true, highlightSkills: ["Vercel", "Render"] },
          { id: "s2_6", text: "Tools: Git, GitHub, VS Code", verified: true, highlightSkills: ["Git", "GitHub"] },
        ],
      },
      {
        id: "sec_exp_r2",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp2_rootbridge",
            title: "Rootbridge Academy Pvt. Ltd. — Reconciliation & Data Management",
            location: "Bengaluru",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e2_1", text: "Processed and maintained 200,000+ records in operational data workflows.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e2_2", text: "Resolved 50+ recurring mismatches monthly through systematic validation.", verified: true, highlightSkills: ["50+ recurring mismatches"] },
              { id: "e2_3", text: "Improved reported data accuracy by 30% through reconciliation and quality-control processes.", verified: true, highlightSkills: ["30% accuracy"] },
            ],
          },
          {
            id: "exp2_unacademy",
            title: "Sorting Hat Technologies / Unacademy — Social Media Intern",
            location: "Bengaluru",
            dateRange: "Feb–Mar 2026",
            bullets: [
              { id: "e2_4", text: "Managed digital content workflows and developed Python-based automation.", verified: true, highlightSkills: ["Python automation"] },
              { id: "e2_5", text: "Supported structured content delivery and metadata optimization.", verified: true, highlightSkills: ["Metadata"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r2",
        title: "PROJECTS",
        type: "projects",
        items: [
          {
            id: "proj2_learnify",
            title: "Learnify AI — Full Stack AI Platform",
            subtitle: "React 19 | TypeScript | Tailwind | Supabase | OpenRouter | Cashfree",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p2_1", text: "Built full-stack learning and career platform with AI tutoring, career guidance, creator tools and community functionality.", verified: true, highlightSkills: ["Full-stack learning", "AI tutoring"] },
              { id: "p2_2", text: "Developed responsive interfaces and integrated AI/backend services.", verified: true, highlightSkills: ["Supabase", "OpenRouter"] },
            ],
          },
          {
            id: "proj2_luxury",
            title: "Luxury Laundry — Full Stack SaaS",
            subtitle: "Next.js | Express.js | PostgreSQL | Prisma | Socket.io",
            bullets: [
              { id: "p2_3", text: "Developed customer and admin dashboards.", verified: true, highlightSkills: ["Dashboards"] },
              { id: "p2_4", text: "Built backend/database functionality and real-time application features.", verified: true, highlightSkills: ["PostgreSQL", "Socket.io"] },
            ],
          },
          {
            id: "proj2_dreamsync",
            title: "DreamSync — Career Platform",
            subtitle: "Next.js | React | Firebase | OpenRouter | Gemini | Redis",
            bullets: [
              { id: "p2_5", text: "Developed AI Resume Builder, ATS Checker, LinkedIn Optimizer and Portfolio Generator.", verified: true, highlightSkills: ["AI Resume Builder", "ATS Checker"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r2",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu2_bca",
            title: "BCA — St. Aloysius Degree College",
            dateRange: "Jul 2023–Jul 2026",
            bullets: [
              { id: "ed2_1", text: "8.1/10 CGPA | 9.06/10 Final SGPA | 89.57% | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 SGPA"] },
            ],
          },
          {
            id: "edu2_dip",
            title: "Diploma in Software Development — Oxford Software Institute",
            bullets: [
              { id: "ed2_2", text: "Grade A", verified: true, highlightSkills: ["Grade A"] },
            ],
          },
        ],
      },
      {
        id: "sec_ach_r2",
        title: "ACHIEVEMENT",
        type: "awards",
        bullets: [
          { id: "a2_1", text: "1st Prize — NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 3 — GENERATIVE AI / AI DEVELOPER (MATCH 9/10 · 15% ALLOCATION)
  // ==============================================================================
  {
    id: "res_genai_dev",
    slug: "genai-developer",
    title: "Generative AI / AI Developer",
    targetRole: "Generative AI Developer | AI Application Developer | LLM Engineer",
    category: "genai",
    allocationPercent: 15,
    atsScore: 94,
    templateType: "cyberpunk",
    version: "v5.8 (Production)",
    updatedAt: "2026-08-31",
    summary: "AI Application Developer focused on building LLM-powered products, Generative AI workflows and AI SaaS applications. Hands-on experience integrating OpenRouter and Gemini into production-oriented web applications using React, Next.js, TypeScript, Node.js, Supabase and Firebase. Built AI products covering learning, career coaching, resume generation, ATS analysis and portfolio generation.",
    sections: [
      {
        id: "sec_skills_r3",
        title: "AI / TECHNICAL SKILLS",
        type: "skills",
        bullets: [
          { id: "s3_1", text: "Generative AI: LLM APIs, AI Applications, AI Agents, Prompt Engineering, AI Workflows, OpenRouter, Gemini, ChatGPT, Claude, GitHub Copilot", verified: true, highlightSkills: ["LLM APIs", "AI Agents", "Prompt Engineering", "OpenRouter", "Gemini"] },
          { id: "s3_2", text: "Development: Python, TypeScript, JavaScript, React, Next.js, Node.js, Express.js", verified: true, highlightSkills: ["Python", "TypeScript", "React", "Next.js"] },
          { id: "s3_3", text: "Data: PostgreSQL, MySQL, Supabase, Firebase, Prisma, Upstash Redis", verified: true, highlightSkills: ["Supabase", "Firebase", "PostgreSQL"] },
          { id: "s3_4", text: "UI: Tailwind CSS, Framer Motion, Responsive Design", verified: true, highlightSkills: ["Tailwind CSS", "Framer Motion"] },
          { id: "s3_5", text: "Cloud: Vercel, Render, GitHub, Cloudflare", verified: true, highlightSkills: ["Vercel", "GitHub"] },
        ],
      },
      {
        id: "sec_exp_r3",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp3_rootbridge",
            title: "Rootbridge Academy Pvt. Ltd. — Reconciliation & Data Management",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e3_1", text: "Processed 200,000+ records through structured data-management workflows.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e3_2", text: "Resolved 50+ recurring data mismatches monthly through validation and reconciliation.", verified: true, highlightSkills: ["50+ recurring mismatches"] },
              { id: "e3_3", text: "Improved reported data accuracy by 30%.", verified: true, highlightSkills: ["30% accuracy"] },
            ],
          },
          {
            id: "exp3_unacademy",
            title: "Sorting Hat Technologies / Unacademy — Social Media Intern",
            dateRange: "Feb–Mar 2026",
            bullets: [
              { id: "e3_4", text: "Improved workflow efficiency using Python-based automation.", verified: true, highlightSkills: ["Python-based automation"] },
              { id: "e3_5", text: "Managed structured educational content workflows.", verified: true, highlightSkills: ["Content workflows"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r3",
        title: "AI PROJECTS",
        type: "projects",
        items: [
          {
            id: "proj3_learnify",
            title: "Learnify AI — AI Learning & Career Platform",
            subtitle: "React 19 | TypeScript | Supabase | OpenRouter | Cashfree",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p3_1", text: "Built AI-powered tutoring, career guidance, creator and community functionality.", verified: true, highlightSkills: ["AI tutoring", "Career guidance"] },
              { id: "p3_2", text: "Integrated LLM capabilities through OpenRouter.", verified: true, highlightSkills: ["OpenRouter"] },
            ],
          },
          {
            id: "proj3_dreamsync",
            title: "DreamSync — AI Career Intelligence Platform",
            subtitle: "Next.js | React | OpenRouter | Gemini | Firebase | Upstash Redis",
            bullets: [
              { id: "p3_3", text: "Built AI Resume Builder, ATS Checker, LinkedIn Optimizer and Portfolio Generator.", verified: true, highlightSkills: ["AI Resume Builder", "ATS Checker", "Portfolio Generator"] },
              { id: "p3_4", text: "Integrated LLM-powered career functionality.", verified: true, highlightSkills: ["LLM-powered"] },
            ],
          },
          {
            id: "proj3_luxury",
            title: "Luxury Laundry",
            subtitle: "Next.js | Express.js | PostgreSQL | Prisma | Socket.io",
            bullets: [
              { id: "p3_5", text: "Built full-stack SaaS dashboards and real-time functionality.", verified: true, highlightSkills: ["Dashboards"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r3",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu3_bca",
            title: "BCA — St. Aloysius Degree College",
            bullets: [
              { id: "ed3_1", text: "8.1/10 CGPA | 9.06/10 Final SGPA | 89.57% | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 Final SGPA"] },
            ],
          },
        ],
      },
      {
        id: "sec_cert_r3",
        title: "CERTIFICATIONS / AWARD",
        type: "certifications",
        bullets: [
          { id: "c3_1", text: "AI Pair Programming with GitHub Copilot — LinkedIn", verified: true, highlightSkills: ["GitHub Copilot"] },
          { id: "c3_2", text: "Tata GenAI Powered Data Analytics — Forage", verified: true, highlightSkills: ["Tata GenAI"] },
          { id: "c3_3", text: "Power BI for Data Analysts — LinkedIn Learning", verified: true, highlightSkills: ["Power BI"] },
          { id: "c3_4", text: "1st Prize — NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 4 — SOFTWARE ENGINEER / SOFTWARE DEVELOPER (MATCH 8.8/10)
  // ==============================================================================
  {
    id: "res_swe_dev",
    slug: "software-engineer",
    title: "Software Engineer / Software Developer",
    targetRole: "Software Engineer | Full Stack Developer | AI Software Developer",
    category: "software_engineer",
    allocationPercent: 0,
    atsScore: 92,
    templateType: "minimal",
    version: "v4.2 (Production)",
    updatedAt: "2026-08-31",
    summary: "Software Developer with hands-on experience designing and developing full-stack web applications, SaaS platforms, APIs, database systems and AI-powered applications. Experienced with JavaScript, TypeScript, Python, React, Next.js, Node.js, Express.js, SQL, PostgreSQL, Supabase and Firebase. Strong academic foundation with an 8.1/10 BCA CGPA and 9.06/10 final-semester SGPA.",
    sections: [
      {
        id: "sec_skills_r4",
        title: "TECHNICAL SKILLS",
        type: "skills",
        bullets: [
          { id: "s4_1", text: "JavaScript | TypeScript | Python | SQL | React | Next.js | Node.js | Express.js | REST APIs | PostgreSQL | MySQL | MongoDB | Supabase | Firebase | Prisma | Socket.io | Tailwind CSS | Git | GitHub | Vercel | Render | OpenRouter", verified: true, highlightSkills: ["JavaScript", "TypeScript", "Python", "SQL", "React", "Next.js", "Node.js", "PostgreSQL", "Supabase"] },
        ],
      },
      {
        id: "sec_exp_r4",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp4_rootbridge",
            title: "Rootbridge Academy Pvt. Ltd. — Reconciliation & Data Management",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e4_1", text: "Processed and maintained 200,000+ records across operational data workflows.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e4_2", text: "Resolved 50+ recurring mismatches monthly through systematic reconciliation.", verified: true, highlightSkills: ["50+ recurring mismatches"] },
              { id: "e4_3", text: "Improved reported data accuracy by 30% through validation and quality-control processes.", verified: true, highlightSkills: ["30% accuracy"] },
            ],
          },
          {
            id: "exp4_unacademy",
            title: "Sorting Hat Technologies / Unacademy — Social Media Intern",
            dateRange: "Feb–Mar 2026",
            bullets: [
              { id: "e4_4", text: "Developed Python-based automation workflows to improve operational efficiency.", verified: true, highlightSkills: ["Python-based automation"] },
              { id: "e4_5", text: "Managed structured educational-content workflows.", verified: true, highlightSkills: ["Content workflows"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r4",
        title: "PROJECTS",
        type: "projects",
        items: [
          {
            id: "proj4_learnify",
            title: "Learnify AI",
            subtitle: "React 19 | TypeScript | Supabase | OpenRouter | Cashfree",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p4_1", text: "Built full-stack AI learning and career platform with tutoring, career guidance, creator and community functionality.", verified: true, highlightSkills: ["Full-stack AI"] },
            ],
          },
          {
            id: "proj4_luxury",
            title: "Luxury Laundry",
            subtitle: "Next.js | Express | PostgreSQL | Prisma | Socket.io",
            bullets: [
              { id: "p4_2", text: "Built customer/admin dashboards, backend functionality, database integration and real-time features.", verified: true, highlightSkills: ["Database integration", "Real-time"] },
            ],
          },
          {
            id: "proj4_dreamsync",
            title: "DreamSync",
            subtitle: "Next.js | React | Firebase | OpenRouter | Gemini",
            bullets: [
              { id: "p4_3", text: "Developed AI resume, ATS, LinkedIn optimization and portfolio-generation features.", verified: true, highlightSkills: ["AI resume", "ATS"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r4",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu4_bca",
            title: "BCA — St. Aloysius Degree College",
            dateRange: "2023–2026",
            bullets: [
              { id: "ed4_1", text: "8.1/10 CGPA | 9.06/10 SGPA | 89.57% | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 SGPA"] },
            ],
          },
          {
            id: "edu4_dip",
            title: "Diploma in Software Development — Oxford Software Institute",
            bullets: [
              { id: "ed4_2", text: "Grade A", verified: true, highlightSkills: ["Grade A"] },
            ],
          },
        ],
      },
      {
        id: "sec_ach_r4",
        title: "ACHIEVEMENT",
        type: "awards",
        bullets: [
          { id: "a4_1", text: "1st Prize — NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 5 — FRONTEND / REACT / NEXT.JS DEVELOPER (MATCH 8.5/10)
  // ==============================================================================
  {
    id: "res_frontend_dev",
    slug: "frontend-react-developer",
    title: "Frontend / React / Next.js Developer",
    targetRole: "Frontend Developer | React Developer | Next.js Developer",
    category: "frontend",
    allocationPercent: 0,
    atsScore: 93,
    templateType: "cyberpunk",
    version: "v5.1 (Production)",
    updatedAt: "2026-08-31",
    summary: "Frontend-focused developer experienced in building responsive, modern and user-centered web applications using React, Next.js, TypeScript, JavaScript and Tailwind CSS. Built interfaces for AI learning, career technology and SaaS platforms, including AI resume tools, ATS analysis, dashboards, portfolio tools and responsive customer experiences.",
    sections: [
      {
        id: "sec_skills_r5",
        title: "SKILLS",
        type: "skills",
        bullets: [
          { id: "s5_1", text: "Frontend: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Responsive Design", verified: true, highlightSkills: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
          { id: "s5_2", text: "UI: Framer Motion, UI/UX, Accessibility, Component-based Development", verified: true, highlightSkills: ["Framer Motion", "UI/UX"] },
          { id: "s5_3", text: "Backend: Node.js, Express.js, REST APIs", verified: true, highlightSkills: ["Node.js", "REST APIs"] },
          { id: "s5_4", text: "Database: PostgreSQL, Supabase, Firebase, MySQL", verified: true, highlightSkills: ["Supabase", "PostgreSQL"] },
          { id: "s5_5", text: "AI: OpenRouter, Gemini, Generative AI", verified: true, highlightSkills: ["OpenRouter", "Gemini"] },
          { id: "s5_6", text: "Tools: Git, GitHub, Vercel, Cloudflare, Framer, Canva", verified: true, highlightSkills: ["Vercel", "GitHub"] },
        ],
      },
      {
        id: "sec_exp_r5",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp5_unacademy",
            title: "Sorting Hat Technologies / Unacademy — Social Media Intern",
            dateRange: "Feb–Mar 2026",
            bullets: [
              { id: "e5_1", text: "Designed educational content and optimized digital presentation.", verified: true, highlightSkills: ["Digital presentation"] },
              { id: "e5_2", text: "Managed structured content workflows and Python-based automation.", verified: true, highlightSkills: ["Python automation"] },
            ],
          },
          {
            id: "exp5_rootbridge",
            title: "Rootbridge Academy — Data Management",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e5_3", text: "Processed 200,000+ records and resolved 50+ recurring monthly mismatches.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e5_4", text: "Improved reported data accuracy by 30% through validation workflows.", verified: true, highlightSkills: ["30% accuracy"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r5",
        title: "PROJECTS",
        type: "projects",
        items: [
          {
            id: "proj5_learnify",
            title: "Learnify AI",
            subtitle: "React 19 | TypeScript | Tailwind CSS",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p5_1", text: "Designed responsive interfaces for AI tutoring, career guidance, creator tools, gamification and community learning.", verified: true, highlightSkills: ["Responsive interfaces"] },
              { id: "p5_2", text: "Integrated Supabase and OpenRouter.", verified: true, highlightSkills: ["Supabase", "OpenRouter"] },
            ],
          },
          {
            id: "proj5_dreamsync",
            title: "DreamSync",
            subtitle: "Next.js | React | Tailwind | Framer Motion",
            bullets: [
              { id: "p5_3", text: "Built responsive AI Resume Builder, ATS Checker, LinkedIn Optimizer and Portfolio Generator interfaces.", verified: true, highlightSkills: ["ATS Checker", "Resume Builder"] },
              { id: "p5_4", text: "Implemented animations and user-centered UI patterns.", verified: true, highlightSkills: ["Animations"] },
            ],
          },
          {
            id: "proj5_luxury",
            title: "Luxury Laundry",
            subtitle: "Next.js | Tailwind | PostgreSQL",
            bullets: [
              { id: "p5_5", text: "Built responsive customer and administrative dashboards.", verified: true, highlightSkills: ["Dashboards"] },
              { id: "p5_6", text: "Optimized multi-device user experiences.", verified: true, highlightSkills: ["Multi-device"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r5",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu5_bca",
            title: "BCA — St. Aloysius Degree College",
            bullets: [
              { id: "ed5_1", text: "8.1/10 CGPA | 9.06/10 Final SGPA | 89.57% | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 Final SGPA"] },
            ],
          },
        ],
      },
      {
        id: "sec_ach_r5",
        title: "AWARD",
        type: "awards",
        bullets: [
          { id: "a5_1", text: "1st Prize — NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize NEURO2026"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 6 — BACKEND / NODE.JS DEVELOPER (MATCH 8/10)
  // ==============================================================================
  {
    id: "res_backend_dev",
    slug: "backend-nodejs-developer",
    title: "Backend / Node.js Developer",
    targetRole: "Backend Developer | Node.js | Express.js | PostgreSQL | API Development",
    category: "backend",
    allocationPercent: 0,
    atsScore: 90,
    templateType: "minimal",
    version: "v3.9 (Production)",
    updatedAt: "2026-08-31",
    summary: "Full Stack Developer with hands-on backend experience building database-driven SaaS applications, REST-oriented services, real-time functionality and AI-integrated web platforms. Skilled in Node.js, Express.js, PostgreSQL, Prisma, Supabase, Firebase, REST APIs and Socket.io, with frontend experience in React and Next.js.",
    sections: [
      {
        id: "sec_skills_r6",
        title: "TECHNICAL SKILLS",
        type: "skills",
        bullets: [
          { id: "s6_1", text: "Backend: Node.js, Express.js, REST APIs, Socket.io, PHP", verified: true, highlightSkills: ["Node.js", "Express.js", "REST APIs", "Socket.io"] },
          { id: "s6_2", text: "Database: PostgreSQL, MySQL, MongoDB, Supabase, Firebase, Prisma, Upstash Redis", verified: true, highlightSkills: ["PostgreSQL", "Supabase", "Prisma"] },
          { id: "s6_3", text: "Frontend: React, Next.js, TypeScript, JavaScript, Tailwind CSS", verified: true, highlightSkills: ["React", "Next.js", "TypeScript"] },
          { id: "s6_4", text: "AI: OpenRouter, Gemini, LLM APIs", verified: true, highlightSkills: ["OpenRouter", "Gemini"] },
          { id: "s6_5", text: "Cloud: Vercel, Render, Cloudflare, GitHub", verified: true, highlightSkills: ["Vercel", "Render"] },
        ],
      },
      {
        id: "sec_exp_r6",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp6_rootbridge",
            title: "Rootbridge Academy — Reconciliation & Data Management",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e6_1", text: "Processed 200,000+ records in operational data-management workflows.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e6_2", text: "Resolved 50+ recurring mismatches monthly using systematic validation and reconciliation.", verified: true, highlightSkills: ["50+ recurring mismatches"] },
              { id: "e6_3", text: "Improved reported data accuracy by 30%.", verified: true, highlightSkills: ["30% accuracy"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r6",
        title: "PROJECTS",
        type: "projects",
        items: [
          {
            id: "proj6_luxury",
            title: "Luxury Laundry — Full Stack SaaS",
            subtitle: "Next.js | Express.js | PostgreSQL | Prisma | Socket.io",
            bullets: [
              { id: "p6_1", text: "Developed backend functionality using Express.js.", verified: true, highlightSkills: ["Express.js"] },
              { id: "p6_2", text: "Designed PostgreSQL data architecture with Prisma.", verified: true, highlightSkills: ["PostgreSQL", "Prisma"] },
              { id: "p6_3", text: "Implemented real-time functionality using Socket.io.", verified: true, highlightSkills: ["Socket.io"] },
              { id: "p6_4", text: "Built customer and administrative SaaS workflows.", verified: true, highlightSkills: ["SaaS workflows"] },
            ],
          },
          {
            id: "proj6_learnify",
            title: "Learnify AI",
            subtitle: "React | TypeScript | Supabase | OpenRouter | Cashfree",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p6_5", text: "Integrated backend/database functionality using Supabase.", verified: true, highlightSkills: ["Supabase"] },
              { id: "p6_6", text: "Built AI-powered application workflows using OpenRouter.", verified: true, highlightSkills: ["OpenRouter"] },
            ],
          },
          {
            id: "proj6_dreamsync",
            title: "DreamSync",
            subtitle: "Next.js | Firebase | OpenRouter | Gemini | Upstash Redis",
            bullets: [
              { id: "p6_7", text: "Integrated AI services and application data infrastructure.", verified: true, highlightSkills: ["Data infrastructure"] },
              { id: "p6_8", text: "Built career-focused AI application workflows.", verified: true, highlightSkills: ["AI workflows"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r6",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu6_bca",
            title: "BCA — St. Aloysius Degree College",
            bullets: [
              { id: "ed6_1", text: "8.1/10 CGPA | 9.06/10 Final SGPA | 89.57%", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 Final SGPA"] },
            ],
          },
          {
            id: "edu6_dip",
            title: "Diploma in Software Development — Oxford Software Institute",
            bullets: [
              { id: "ed6_2", text: "Grade A", verified: true, highlightSkills: ["Grade A"] },
            ],
          },
        ],
      },
      {
        id: "sec_cert_r6",
        title: "CERTIFICATION",
        type: "certifications",
        bullets: [
          { id: "c6_1", text: "AI Pair Programming with GitHub Copilot — LinkedIn", verified: true, highlightSkills: ["GitHub Copilot"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 7 — DATA ANALYST / BI ANALYST (MATCH 7.8/10 · 10% ALLOCATION)
  // ==============================================================================
  {
    id: "res_data_analyst",
    slug: "data-bi-analyst",
    title: "Data Analyst / BI Analyst",
    targetRole: "Data Analyst | Data Management | Business Intelligence",
    category: "data_analyst",
    allocationPercent: 10,
    atsScore: 91,
    templateType: "executive",
    version: "v4.5 (Production)",
    updatedAt: "2026-08-31",
    summary: "Data-focused professional with experience in data management, reconciliation, validation, CRM data, Excel-based workflows and operational data analysis. Processed 200,000+ records, resolved 50+ recurring monthly mismatches and achieved a reported 30% improvement in data accuracy. Academic background in Computer Applications with Fundamentals of Data Science and Artificial Intelligence coursework.",
    sections: [
      {
        id: "sec_skills_r7",
        title: "SKILLS",
        type: "skills",
        bullets: [
          { id: "s7_1", text: "Data: Data Analysis, Data Validation, Data Reconciliation, Data Quality, Data Management", verified: true, highlightSkills: ["Data Analysis", "Data Validation", "Data Reconciliation"] },
          { id: "s7_2", text: "Tools: Microsoft Excel, Power BI, Google Sheets, Salesforce, Salesforce Data Loader", verified: true, highlightSkills: ["Microsoft Excel", "Power BI", "Salesforce Data Loader"] },
          { id: "s7_3", text: "Database: SQL, MySQL, PostgreSQL, Supabase, MongoDB", verified: true, highlightSkills: ["SQL", "MySQL", "PostgreSQL"] },
          { id: "s7_4", text: "Programming: Python, JavaScript, TypeScript", verified: true, highlightSkills: ["Python", "SQL"] },
          { id: "s7_5", text: "AI: Generative AI, LLM APIs, ChatGPT, Gemini", verified: true, highlightSkills: ["Generative AI"] },
        ],
      },
      {
        id: "sec_exp_r7",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp7_rootbridge",
            title: "Rootbridge Academy — Reconciliation & Data Management",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e7_1", text: "Processed and maintained 200,000+ records across operational workflows.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e7_2", text: "Identified and resolved 50+ recurring data mismatches monthly.", verified: true, highlightSkills: ["50+ recurring data mismatches"] },
              { id: "e7_3", text: "Improved reported data accuracy by 30% through validation and reconciliation.", verified: true, highlightSkills: ["30% accuracy"] },
              { id: "e7_4", text: "Worked with Excel, Salesforce CRM and Salesforce Data Loader.", verified: true, highlightSkills: ["Salesforce CRM", "Data Loader"] },
            ],
          },
          {
            id: "exp7_viewmyrecords",
            title: "ViewMyRecords Pvt. Ltd. — Employee Data Network Uploader",
            dateRange: "Jan–Apr 2023",
            bullets: [
              { id: "e7_5", text: "Uploaded and managed employee records in company database systems.", verified: true, highlightSkills: ["Employee records"] },
              { id: "e7_6", text: "Supported structured employee-data processing and record management.", verified: true, highlightSkills: ["Record management"] },
            ],
          },
        ],
      },
      {
        id: "sec_proj_r7",
        title: "PROJECT",
        type: "projects",
        items: [
          {
            id: "proj7_learnify",
            title: "Learnify AI",
            link: "https://learnifyai.in",
            bullets: [
              { id: "p7_1", text: "Built an AI-powered learning/career platform integrating structured application data with AI workflows.", verified: true, highlightSkills: ["Structured application data"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r7",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu7_bca",
            title: "BCA — St. Aloysius Degree College",
            bullets: [
              { id: "ed7_1", text: "8.1/10 CGPA | 9.06/10 Final SGPA | 89.57% | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 Final SGPA"] },
            ],
          },
        ],
      },
      {
        id: "sec_cert_r7",
        title: "CERTIFICATIONS",
        type: "certifications",
        bullets: [
          { id: "c7_1", text: "Power BI for Data Analysts — LinkedIn Learning", verified: true, highlightSkills: ["Power BI"] },
          { id: "c7_2", text: "Tata GenAI Powered Data Analytics — Forage", verified: true, highlightSkills: ["Tata GenAI"] },
          { id: "c7_3", text: "Google Sheets — Simplilearn", verified: true, highlightSkills: ["Google Sheets"] },
          { id: "c7_4", text: "Excel — Great Learning", verified: true, highlightSkills: ["Excel"] },
          { id: "c7_5", text: "MySQL Basics — Great Learning", verified: true, highlightSkills: ["MySQL Basics"] },
        ],
      },
      {
        id: "sec_ach_r7",
        title: "AWARD",
        type: "awards",
        bullets: [
          { id: "a7_1", text: "1st Prize — NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize"] },
        ],
      },
    ],
  },

  // ==============================================================================
  // RESUME 8 — SALESFORCE / CRM / DATA OPERATIONS (MATCH 7.5/10 · 10% ALLOCATION)
  // ==============================================================================
  {
    id: "res_salesforce_ops",
    slug: "salesforce-crm-operations",
    title: "Salesforce / CRM / Data Operations Specialist",
    targetRole: "Salesforce & Data Operations Specialist | CRM | Data Management",
    category: "salesforce_ops",
    allocationPercent: 10,
    atsScore: 97,
    templateType: "executive",
    version: "v6.0 (Production)",
    updatedAt: "2026-08-31",
    summary: "Data and CRM professional experienced in large-scale record management, reconciliation, data validation, Salesforce CRM, Salesforce Data Loader and Excel-based operational workflows. Processed 200,000+ records, resolved 50+ recurring monthly data mismatches and achieved a reported 30% improvement in data accuracy. Supported by a BCA degree and software-development background.",
    sections: [
      {
        id: "sec_skills_r8",
        title: "SKILLS",
        type: "skills",
        bullets: [
          { id: "s8_1", text: "CRM: Salesforce CRM, Salesforce Data Loader", verified: true, highlightSkills: ["Salesforce CRM", "Salesforce Data Loader"] },
          { id: "s8_2", text: "Data: Data Management, Data Validation, Data Reconciliation, Data Quality, Data Analysis", verified: true, highlightSkills: ["Data Management", "Data Validation", "Data Reconciliation"] },
          { id: "s8_3", text: "Tools: Microsoft Excel, Power BI, Google Sheets, Microsoft PowerPoint", verified: true, highlightSkills: ["Microsoft Excel", "Power BI"] },
          { id: "s8_4", text: "Database: SQL, MySQL, PostgreSQL, Supabase", verified: true, highlightSkills: ["SQL", "PostgreSQL", "Supabase"] },
          { id: "s8_5", text: "Programming: Python, JavaScript, TypeScript", verified: true, highlightSkills: ["Python", "JavaScript"] },
          { id: "s8_6", text: "AI: ChatGPT, Gemini, Claude, OpenRouter", verified: true, highlightSkills: ["ChatGPT", "Gemini", "Claude"] },
        ],
      },
      {
        id: "sec_exp_r8",
        title: "EXPERIENCE",
        type: "experience",
        items: [
          {
            id: "exp8_rootbridge",
            title: "Rootbridge Academy Pvt. Ltd. — Reconciliation & Data Management",
            dateRange: "Dec 2024–Present",
            bullets: [
              { id: "e8_1", text: "Processed, verified and maintained 200,000+ records.", verified: true, highlightSkills: ["200,000+ records"] },
              { id: "e8_2", text: "Resolved 50+ recurring data mismatches monthly through reconciliation and validation.", verified: true, highlightSkills: ["50+ recurring data mismatches"] },
              { id: "e8_3", text: "Improved reported data accuracy by 30%.", verified: true, highlightSkills: ["30% accuracy"] },
              { id: "e8_4", text: "Worked with Salesforce CRM, Salesforce Data Loader and Microsoft Excel.", verified: true, highlightSkills: ["Salesforce CRM", "Data Loader", "Excel"] },
            ],
          },
          {
            id: "exp8_viewmyrecords",
            title: "ViewMyRecords Pvt. Ltd. — Employee Data Network Uploader",
            dateRange: "Jan–Apr 2023",
            bullets: [
              { id: "e8_5", text: "Uploaded and managed employee records within company database systems.", verified: true, highlightSkills: ["Employee records"] },
              { id: "e8_6", text: "Supported employee-data processing and record-management workflows.", verified: true, highlightSkills: ["Record-management"] },
            ],
          },
          {
            id: "exp8_fundraiser",
            title: "Rootbridge Academy — Fundraiser",
            dateRange: "Apr–Nov 2024 [VERIFY DATE]",
            bullets: [
              { id: "e8_7", text: "Built stakeholder relationships and supported fundraising and outreach activities.", verified: true, highlightSkills: ["Fundraising", "Stakeholder relationships"] },
            ],
          },
        ],
      },
      {
        id: "sec_edu_r8",
        title: "EDUCATION",
        type: "education",
        items: [
          {
            id: "edu8_bca",
            title: "BCA — St. Aloysius Degree College",
            bullets: [
              { id: "ed8_1", text: "8.1/10 CGPA | 9.06/10 Final SGPA | 89.57% | First Class Exemplary", verified: true, highlightSkills: ["8.1/10 CGPA", "9.06/10 Final SGPA"] },
            ],
          },
        ],
      },
      {
        id: "sec_cert_r8",
        title: "CERTIFICATIONS",
        type: "certifications",
        bullets: [
          { id: "c8_1", text: "Power BI for Data Analysts — LinkedIn Learning | Excel — Great Learning | Google Sheets — Simplilearn | Tata GenAI Data Analytics — Forage | MySQL Basics — Great Learning", verified: true, highlightSkills: ["Power BI", "Excel", "Tata GenAI"] },
        ],
      },
      {
        id: "sec_ach_r8",
        title: "AWARD",
        type: "awards",
        bullets: [
          { id: "a8_1", text: "1st Prize — NEURO2026 Web Design Competition", verified: true, highlightSkills: ["1st Prize"] },
        ],
      },
    ],
  },
];
