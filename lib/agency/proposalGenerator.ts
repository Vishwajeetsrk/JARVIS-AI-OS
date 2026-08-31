import { ClientGig, ProposalDraft } from "./types";

/**
 * GENERATE HIGH-CONVERSION PROPOSAL BACKED BY VERIFIED PORTFOLIO EVIDENCE
 */
export function generateClientProposal(gig: ClientGig): ProposalDraft {
  const isWebOrApp = gig.category === "website_design" || gig.category === "ui_ux";
  const isAI = gig.category === "ai_agents";
  const isDataOrCRM = gig.category === "salesforce_data" || gig.category === "python_automation";

  let specificEvidence = "";
  let proofLinks: string[] = [];

  if (isWebOrApp) {
    specificEvidence = `I have architected and deployed production full-stack systems including **Learnify AI** (live at https://learnifyai.in, combining Next.js 15, React 19, Supabase, and Cashfree payments) and **Wardelio Mobile App** (150+ interactive screens built with React, Vite, and Capacitor for iOS/Android).`;
    proofLinks = [
      "https://learnifyai.in",
      "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      "https://vishwajeetsrk.github.io",
    ];
  } else if (isAI) {
    specificEvidence = `I am the creator of **JARVIS AI OS** (https://github.com/Vishwajeetsrk/JARVIS-AI-OS), an open-source autonomous agent operating system featuring an 18-specialist agent fleet, 3D WebGL interface, vector context memory in Supabase, and Level 6 Human Approval safety gates.`;
    proofLinks = [
      "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      "https://vishwajeetsrk.github.io",
    ];
  } else if (isDataOrCRM) {
    specificEvidence = `At Rootbridge Academy, I personally built and managed the daily 7-step automated reconciliation pipeline matching 200,000+ Salesforce CRM records with Razorpay payment feeds using Data Loader and Python, increasing data accuracy by 30% and eliminating manual error.`;
    proofLinks = [
      "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      "https://vishwajeetsrk.github.io",
    ];
  } else {
    specificEvidence = `I have extensive experience crafting high-authority technical documentation, video scripts, and architectural walkthroughs with verified results across open-source communities.`;
    proofLinks = [
      "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      "https://vishwajeetsrk.github.io",
    ];
  }

  const pitchText = `Hi ${gig.clientName},

I reviewed your project **"${gig.title}"** and I am confident I can deliver a high-performance, production-ready solution that exceeds your expectations.

### Why I Am the Best Fit:
${specificEvidence}

### Proposed Implementation Plan:
1. **Phase 1 (Architecture & Setup)**: Align on data models, system boundaries, and UI wireframes.
2. **Phase 2 (Core Development)**: Build responsive components, backend endpoints, and automated workflows.
3. **Phase 3 (Testing & Optimization)**: Conduct end-to-end testing, security audits, and performance tuning.
4. **Phase 4 (Deployment & Handover)**: Complete deployment, documentation handover, and post-launch support.

I take pride in clean code, rapid communication, and 100% on-time delivery. Let's schedule a brief 10-minute discovery call to discuss your exact timeline and requirements!

Best regards,  
**Vishwajeet**  
Full Stack AI Systems & Automation Specialist  
Portfolio: https://vishwajeetsrk.github.io | GitHub: https://github.com/Vishwajeetsrk`;

  return {
    id: "prop_" + Date.now(),
    gigId: gig.id,
    clientName: gig.clientName,
    projectTitle: gig.title,
    pitchText,
    portfolioProofLinks: proofLinks,
    estimatedDays: gig.category === "website_design" ? 10 : gig.category === "ai_agents" ? 14 : 7,
    proposedBudget: gig.budget.amount,
    milestones: [
      { name: "Milestone 1: Architectural Blueprint & Core Framework", days: 3, cost: Math.round(gig.budget.amount * 0.4) },
      { name: "Milestone 2: Functional Features & Database Integration", days: 5, cost: Math.round(gig.budget.amount * 0.4) },
      { name: "Milestone 3: QA Testing, Deployment & Handover", days: 2, cost: Math.round(gig.budget.amount * 0.2) },
    ],
    cta: "Schedule Discovery Call & Kickoff",
  };
}
