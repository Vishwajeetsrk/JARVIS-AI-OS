/**
 * Canonical Types for JARVIS Client Finder & Freelance Agency OS
 */

export type FreelanceServiceCategory =
  | "website_design"
  | "ui_ux"
  | "ai_agents"
  | "python_automation"
  | "salesforce_data"
  | "content_writing"
  | "video_ads"
  | "consulting";

export interface ClientGig {
  id: string;
  title: string;
  clientName: string;
  company?: string;
  platform: "Upwork" | "LinkedIn" | "Twitter / X" | "Wellfound" | "Direct B2B";
  budget: { amount: number; currency: string; type: "fixed" | "hourly" };
  category: FreelanceServiceCategory;
  description: string;
  requiredSkills: string[];
  postedAt: string;
  clientVerified: boolean;
  rating?: number;
  matchScore: number; // 0 - 100
  applicationUrl?: string;
}

export interface ProposalDraft {
  id: string;
  gigId: string;
  clientName: string;
  projectTitle: string;
  pitchText: string;
  portfolioProofLinks: string[];
  milestones: Array<{ name: string; days: number; cost: number }>;
  estimatedDays: number;
  proposedBudget: number;
  cta: string;
}

export interface ServicePackage {
  id: string;
  category: FreelanceServiceCategory;
  name: string;
  description: string;
  deliverables: string[];
  starterPriceINR: number;
  proPriceINR: number;
  enterprisePriceINR: number;
}

export type DealStatus =
  | "prospects"
  | "pitched"
  | "negotiation"
  | "active"
  | "delivered"
  | "paid";

export interface ClientDeal {
  id: string;
  clientName: string;
  company?: string;
  projectTitle: string;
  category: FreelanceServiceCategory;
  dealValueINR: number;
  status: DealStatus;
  nextFollowup?: string;
  contractDate: string;
  notes?: string;
}

export interface InvoiceItem {
  id: string;
  clientName: string;
  projectTitle: string;
  amountINR: number;
  status: "draft" | "sent" | "paid" | "overdue";
  dueDate: string;
  paymentGateway: "Cashfree" | "Razorpay" | "Stripe" | "Bank Transfer";
}
