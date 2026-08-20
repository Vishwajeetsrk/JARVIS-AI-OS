export interface MockInterviewQuestion {
  id: string;
  category: "Salesforce/Operations" | "Full-Stack Dev" | "AI & Automation" | "HR Screening";
  question: string;
  keyPointsToCover: string[];
  idealResponseSummary: string;
}

export const MOCK_INTERVIEW_QUESTIONS: MockInterviewQuestion[] = [
  {
    id: "sf-1",
    category: "Salesforce/Operations",
    question: "How do you handle data reconciliation between an external payment gateway (like Razorpay) and Salesforce?",
    keyPointsToCover: [
      "Exporting transaction logs and cleaning in Excel (VLOOKUP, duplicate removal)",
      "Matching existing contacts/accounts via Email or Phone",
      "Lead creation and conversion process",
      "Using Salesforce Data Loader for Opportunity records and PAN updates",
      "Verification and stakeholder status reporting",
    ],
    idealResponseSummary:
      "I follow a systematic 7-step process: extract payment logs, sanitize phone/email/PAN fields in Excel, verify contact existence in Salesforce, convert new leads, and batch insert Opportunities via Data Loader with 100% accuracy.",
  },
  {
    id: "dev-1",
    category: "Full-Stack Dev",
    question: "How do you manage application state and optimize rendering performance in React 19 / TypeScript apps?",
    keyPointsToCover: [
      "Server vs Client component separation",
      "Using TanStack React Query for cached server state",
      "Avoiding unnecessary re-renders with useMemo/useCallback/refs",
      "Strict TypeScript interfaces to eliminate runtime bugs",
    ],
    idealResponseSummary:
      "I separate server state (managed via TanStack Query) from local UI state, leverage strict TypeScript types to prevent runtime errors, and optimize animations with requestAnimationFrame and Framer Motion.",
  },
  {
    id: "ai-1",
    category: "AI & Automation",
    question: "What is Model Context Protocol (MCP) and how do multi-agent systems use persistent memory?",
    keyPointsToCover: [
      "MCP as an open standard for LLM tool integration",
      "Separating episodic memory from semantic vector memory",
      "Multi-agent task delegation and verification gates",
    ],
    idealResponseSummary:
      "MCP enables AI models to safely execute local and cloud tools. In multi-agent architectures, agents share unified episodic and semantic memory to maintain context across sessions without prompt explosion.",
  },
  {
    id: "hr-1",
    category: "HR Screening",
    question: "Tell me about yourself and your approach to learning new technologies.",
    keyPointsToCover: [
      "Background in operations and full-stack AI development",
      "Project-first learning approach (building real solutions)",
      "Passion for building production-grade systems",
    ],
    idealResponseSummary:
      "I am a Full-Stack AI product builder with hands-on business operations experience. I learn by building practical projects, turning technical concepts into working software that solves real business problems.",
  },
];

export class InterviewEngine {
  public static getQuestions(): MockInterviewQuestion[] {
    return MOCK_INTERVIEW_QUESTIONS;
  }
}
