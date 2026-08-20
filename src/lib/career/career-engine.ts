import { unifiedMemory } from "../orchestrator/unified-memory";

export interface CareerProfile {
  fullName: string;
  email: string;
  phone: string;
  location: string;
  targetRoles: string[];
  summary: string;
  coreCompetencies: string[];
  professionalExperience: Array<{
    role: string;
    company: string;
    duration: string;
    highlights: string[];
  }>;
  projects: Array<{
    name: string;
    techStack: string;
    description: string;
    impact: string;
  }>;
  certifications: string[];
  education: string;
}

export const DEFAULT_CAREER_PROFILE: CareerProfile = {
  fullName: "Full-Stack AI Engineer",
  email: "developer@example.com",
  phone: "+91-XXXXXXXXXX",
  location: "India (Open to Remote / Hybrid)",
  targetRoles: [
    "AI Systems Architect",
    "Full-Stack AI Product Builder",
    "Salesforce & Business Operations Specialist",
    "AI Automation Engineer"
  ],
  summary: "Results-driven Full-Stack AI Engineer and Business Operations Specialist with hands-on expertise in Salesforce CRM, Microsoft Excel, Data Loader, and Razorpay payment reconciliation. Proven track record of designing multi-agent operating systems, scalable React/TypeScript applications, and automated CRM data pipelines.",
  coreCompetencies: [
    "Salesforce Administration & CRM Workflows",
    "Salesforce Data Loader (Insert/Update/Upsert/Export)",
    "Advanced Microsoft Excel (VLOOKUP, Pivot, Cleaning, Validation)",
    "Razorpay Payment Gateway & Reconciliation",
    "Full-Stack Development (React 19, TypeScript, Tailwind CSS, Node.js)",
    "PostgreSQL, Supabase & Vector Embeddings",
    "Multi-Agent AI Architecture & Model Context Protocol (MCP)",
    "API Integrations & Autonomous Workflow Automation"
  ],
  professionalExperience: [
    {
      role: "Operations & Salesforce Data Specialist",
      company: "Business Operations Team",
      duration: "Present",
      highlights: [
        "Executed end-to-end 7-step Razorpay donation extraction, data sanitization, and Salesforce Lead/Donor reconciliation.",
        "Managed bulk record operations via Salesforce Data Loader for Opportunity records and PAN tax exemption updates.",
        "Created error-free daily reconciliation status reports and stakeholder communications for management review.",
        "Identified and eliminated manual data entry bottlenecks using structured validation templates."
      ]
    }
  ],
  projects: [
    {
      name: "JARVIS AI OS",
      techStack: "TanStack Start, React 19, TypeScript, Mastra TS, Python, Three.js",
      description: "Persistent-memory personal AI operating system with 3D companion avatar, wake-word voice assistant, and 7 context switching modes.",
      impact: "Architected multi-tier unified memory, sub-50ms voice loop, and automated daily planning engine."
    },
    {
      name: "Wardelio Mobile App",
      techStack: "React, Vite, Capacitor iOS/Android, Tailwind CSS, Supabase",
      description: "Next-generation mobile wardrobe and style companion app with 150+ screens and interactive 3D UI.",
      impact: "Built 60fps micro-animations, custom gesture navigation, and cloud profile synchronization."
    },
    {
      name: "AgencyOS Automation Suite",
      techStack: "Node.js, Fastify, Razorpay API, n8n Webhooks, TypeScript",
      description: "Automated client onboarding, invoicing, and payment reconciliation pipeline.",
      impact: "Reduced client onboarding and invoicing turnaround time by over 80%."
    }
  ],
  certifications: [
    "Full-Stack Web & AI Product Development",
    "Salesforce CRM Administration & Data Management"
  ],
  education: "Bachelor's Degree in Computer Science / Information Technology"
};

export class CareerEngine {
  public static getProfile(): CareerProfile {
    return DEFAULT_CAREER_PROFILE;
  }

  public static generateTailoredResume(roleType: "salesforce" | "fullstack" | "automation"): string {
    const p = this.getProfile();
    const date = new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" });

    if (roleType === "salesforce") {
      return `# ${p.fullName}
**Salesforce & Business Operations Specialist**
📧 ${p.email} | 📍 ${p.location} | 📅 Updated: ${date}

---

## PROFESSIONAL SUMMARY
Dedicated Business Operations and Salesforce CRM Specialist with proven expertise in daily transaction reconciliation, bulk data management via Data Loader, and payment verification with Razorpay. Expert at converting raw payment datasets into structured Salesforce Donor, Lead, and Opportunity records.

---

## CORE TECHNICAL SKILLS
- **CRM & Data Management:** Salesforce CRM, Salesforce Data Loader, Lead Conversion, Account/Contact Matching
- **Data Analysis & Processing:** Microsoft Excel (VLOOKUP, INDEX/MATCH, Data Validation, Duplicate Removal, CSV formatting)
- **Payment & Integration:** Razorpay Payment Gateway, Webhooks, 80G Tax Exemption PAN Updates
- **Automation:** Process Automation, Email Status Reporting, Workflow Optimization

---

## PROFESSIONAL EXPERIENCE
**Operations & Salesforce Data Specialist** | *Present*
- Executed daily 7-step Razorpay payment extraction, Excel cleansing, and Salesforce Data Loader bulk uploads.
- Verified donor existence via Phone/Email, created and converted Leads, and mapped Opportunities.
- Updated PAN records for 80G tax receipt generation with 100% accuracy.
- Prepared and delivered daily stakeholder status reports for executive review.

---

## KEY AUTOMATION PROJECTS
- **Salesforce Razorpay Automated Bridge:** Built automated Python and API reconciliation script reducing daily CSV processing time by 75%.
- **JARVIS AI OS:** Developed an autonomous personal operations assistant tracking tasks, project workflows, and daily briefings.

---

## EDUCATION & CERTIFICATIONS
- ${p.education}
- ${p.certifications.join(" | ")}
`;
    }

    // Default Full-Stack & AI Product Builder Resume
    return `# ${p.fullName}
**Full-Stack AI Product Builder & Systems Architect**
📧 ${p.email} | 📍 ${p.location} | 📅 Updated: ${date}

---

## PROFESSIONAL SUMMARY
Innovative Full-Stack AI Engineer with expertise in building production-quality web & mobile applications, multi-agent systems, and business automation pipelines. Proficient in React 19, TypeScript, Tailwind CSS, Python, PostgreSQL, and Model Context Protocol (MCP).

---

## TECHNICAL EXPERTISE
- **Frontend & Mobile:** React 19, TypeScript, Tailwind CSS, Framer Motion, Three.js, Capacitor (iOS/Android)
- **Backend & Cloud:** Node.js, Fastify, Python, FastAPI, Supabase, PostgreSQL, REST APIs, WebSockets
- **AI & Autonomous Agents:** Mastra TS, MCP Tools, Ollama Local LLMs, Vector Embeddings (pgvector)
- **Operations & Tools:** Salesforce CRM, Data Loader, Razorpay, Git, Docker, Vitest

---

## FEATURED PROJECTS
### 1. JARVIS AI OS — Personal Intelligence & Multi-Agent Operating System
- Engineered a persistent-memory desktop and web AI OS featuring wake-word voice loop, 3D avatar animation, and 7 context switching modes.
- Implemented multi-tier memory taxonomy (Identity, Projects, Learning Evidence, Episodic Events).

### 2. Wardelio — Mobile Application (Android & iOS)
- Developed a comprehensive style companion mobile app with 150+ screens using Capacitor, React, and Supabase.
- Implemented 60fps micro-animations, 3D interactive components, and offline-first storage.

### 3. AgencyOS — Business Automation Suite
- Built automated CRM, Razorpay payment capture, and invoicing agent workflows.

---

## EDUCATION
- ${p.education}
`;
  }

  public static generateCoverLetter(companyName: string, roleTitle: string): string {
    const p = this.getProfile();
    return `Dear Hiring Manager at ${companyName},

I am writing to express my strong interest in the ${roleTitle} position. With my hands-on background in full-stack development, Salesforce operations, and AI workflow automation, I am excited about the opportunity to contribute immediately to your team.

In my recent work, I have specialized in building robust software solutions, managing critical CRM workflows, and designing autonomous tools that streamline complex processes. Whether working with React and TypeScript on modern interfaces or executing precise Salesforce data operations and Razorpay payment reconciliations, I focus on delivering clean, reliable, and high-impact results.

I would welcome the opportunity to discuss how my background, practical problem-solving mindset, and passion for technology can support ${companyName}'s goals.

Thank you for your time and consideration.

Warm regards,

${p.fullName}
${p.email}`;
  }
}
