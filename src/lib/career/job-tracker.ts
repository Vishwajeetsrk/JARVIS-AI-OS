export interface JobApplication {
  id: string;
  company: string;
  role: string;
  location: string;
  salaryRange?: string;
  status: "SAVED" | "READY_TO_APPLY" | "APPLIED" | "ASSESSMENT" | "INTERVIEW" | "FOLLOW_UP" | "OFFER" | "REJECTED";
  appliedDate?: string;
  resumeVersion: string;
  notes: string;
}

export const INITIAL_JOB_APPLICATIONS: JobApplication[] = [
  {
    id: "job-1",
    company: "Global Tech Enterprise",
    role: "Salesforce CRM & Operations Specialist",
    location: "Remote / Hybrid",
    salaryRange: "₹8L - ₹14L / yr",
    status: "READY_TO_APPLY",
    resumeVersion: "Salesforce_Operations_Resume_v2.docx",
    notes: "Requires experience with Salesforce Data Loader, Excel data cleaning, and payment reconciliation.",
  },
  {
    id: "job-2",
    company: "AI Innovation Labs",
    role: "Full-Stack AI Software Engineer",
    location: "Remote",
    salaryRange: "$60,000 - $90,000 / yr",
    status: "SAVED",
    resumeVersion: "FullStack_AI_Builder_Resume_v2.docx",
    notes: "Requires React 19, TypeScript, Node.js, and multi-agent LLM systems experience.",
  },
  {
    id: "job-3",
    company: "Fintech SaaS Platform",
    role: "CRM & Payment Integration Specialist",
    location: "Bengaluru / Remote",
    salaryRange: "₹10L - ₹16L / yr",
    status: "APPLIED",
    appliedDate: "2026-08-18",
    resumeVersion: "Salesforce_Operations_Resume_v2.docx",
    notes: "Applied with tailored cover letter highlighting Razorpay-to-Salesforce automation.",
  },
];

export class JobTracker {
  private static applications: JobApplication[] = [...INITIAL_JOB_APPLICATIONS];

  public static getApplications(): JobApplication[] {
    return this.applications;
  }

  public static updateStatus(id: string, newStatus: JobApplication["status"]): void {
    const job = this.applications.find((j) => j.id === id);
    if (job) {
      job.status = newStatus;
    }
  }
}
