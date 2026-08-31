/**
 * Canonical Types for JARVIS CAREER OS 2.0
 */

export type TargetRoleCategory =
  | "ai_engineer"
  | "fullstack"
  | "genai"
  | "software_engineer"
  | "frontend"
  | "backend"
  | "data_analyst"
  | "salesforce_ops";

export interface ContactInfo {
  name: string;
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  portfolio?: string;
}

export interface TargetRole {
  id: string;
  title: string;
  category: TargetRoleCategory;
  allocationPercent: number; // 50%, 25%, 15%, 10%
  targetAtsScore: number;
  primarySkills: string[];
}

export interface CareerPreferences {
  locations: string[];
  workModes: ("Remote" | "Hybrid" | "Onsite")[];
  minSalary?: { amount: number; currency: string };
  experienceLevel: "Entry" | "Junior" | "Mid-Level" | "Senior";
  autoApplyThresholdScore: number; // e.g. 85
  alertOnNewMatches: boolean;
}

export type EvidenceCategory =
  | "experience"
  | "project"
  | "skill"
  | "education"
  | "certification"
  | "achievement"
  | "metric";

export interface EvidenceItem {
  id: string;
  category: EvidenceCategory;
  title: string;
  description: string;
  source: string; // e.g. "Rootbridge Academy Experience", "JARVIS AI OS Repo"
  verified: boolean;
  confidence: number; // 0.0 to 1.0
  date?: string;
  dateWarning?: "[VERIFY DATE]" | "[VERIFY]";
  tags: string[];
  skills: string[];
  metrics?: Record<string, string | number>;
  allowedOnResume: boolean;
}

export interface ResumeBullet {
  id: string;
  text: string;
  evidenceIdRef?: string;
  verified: boolean;
  highlightSkills: string[];
}

export interface ResumeSection {
  id: string;
  title: string;
  type: "summary" | "skills" | "experience" | "projects" | "education" | "certifications" | "awards";
  bullets?: ResumeBullet[];
  items?: Array<{
    id: string;
    title: string;
    subtitle?: string;
    dateRange?: string;
    location?: string;
    bullets: ResumeBullet[];
    link?: string;
    github?: string;
  }>;
}

export interface ResumeVariant {
  id: string;
  slug: string;
  title: string;
  targetRole: string;
  category: TargetRoleCategory;
  allocationPercent: number;
  atsScore: number;
  templateType: "cyberpunk" | "executive" | "minimal";
  summary: string;
  sections: ResumeSection[];
  version: string;
  updatedAt: string;
}

export interface ResumeVersion {
  id: string;
  resumeId: string;
  versionNumber: number;
  targetJobTitle: string;
  changeSummary: string;
  snapshot: ResumeVariant;
  atsScore: number;
  createdAt: string;
}

export interface JobItem {
  id: string;
  company: string;
  title: string;
  location: string;
  workMode: "Remote" | "Hybrid" | "Onsite" | "Unknown";
  description: string;
  requiredSkills: string[];
  preferredSkills: string[];
  salary?: { min?: number; max?: number; currency: string };
  sources: Array<{ name: string; url: string; externalId?: string }>;
  dedupHash: string;
  applicationUrl: string;
  opportunityScore: number; // 0 - 100
  postedAt: string;
  status: "discovered" | "analyzed" | "saved" | "applied" | "rejected";
}

export interface ATSBreakdown {
  overallScore: number;
  skillsMatch: number;
  experienceMatch: number;
  projectsMatch: number;
  educationMatch: number;
  keywordsMatch: number;
  strongMatches: string[];
  missingGaps: string[];
  potentialConcerns: string[];
  verificationsPassed: boolean;
}

export type ApplicationStatus =
  | "saved"
  | "analyzed"
  | "ready"
  | "applied"
  | "assessment"
  | "interview"
  | "final_round"
  | "offer"
  | "accepted"
  | "rejected"
  | "withdrawn"
  | "ghosted";

export interface ApplicationTimelineEvent {
  id: string;
  date: string;
  type: string;
  label: string;
  completed: boolean;
}

export interface ApplicationItem {
  id: string;
  jobId: string;
  job: JobItem;
  resumeVariantId: string;
  resumeVariantTitle: string;
  status: ApplicationStatus;
  matchScore: number;
  coverLetter?: string;
  applicationAnswers: Record<string, string>;
  notes?: string;
  nextAction?: string;
  nextActionAt?: string;
  submittedAt?: string;
  timeline: ApplicationTimelineEvent[];
  createdAt: string;
}

export interface ApplicationAnswer {
  id: string;
  questionPattern: string;
  approvedAnswer: string;
  category: "general" | "ai_project" | "work_auth" | "salary" | "relocation";
  timesUsed: number;
  lastUsedAt: string;
}

export interface STARStory {
  id: string;
  title: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  linkedProjectOrRole: string;
}

export interface InterviewItem {
  id: string;
  applicationId: string;
  company: string;
  role: string;
  roundName: string;
  scheduledAt: string;
  interviewerInfo?: string;
  meetingUrl?: string;
  likelyQuestions: string[];
  recommendedSTARStories: STARStory[];
  notes?: string;
  status: "scheduled" | "completed" | "cancelled" | "rescheduled";
}

export type ApplicationPermissionLevel =
  | 0 // Read profile
  | 1 // Search jobs
  | 2 // Analyze jobs
  | 3 // Generate tailored resume & cover letter
  | 4 // Prepare application package
  | 5 // Autofill fields
  | 6; // Submit application (Requires explicit user confirmation)
