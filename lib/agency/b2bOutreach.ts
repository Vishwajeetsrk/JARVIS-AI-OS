import { ClientGig } from "./types";

export interface OutreachDraft {
  recipientEmail: string;
  recipientName: string;
  subject: string;
  body: string;
  attachedPortfolioLinks: string[];
  gateLevel: 6;
  status: "pending_approval" | "approved" | "rejected" | "dispatched";
}

/**
 * GENERATE B2B OUTREACH DRAFT PROTECTED BY LEVEL 6 HUMAN GATE
 */
export function generateOutreachDraft(gig: ClientGig): OutreachDraft {
  const sanitizedClient = gig.clientName.replace(/\s*\(.*?\)/, "");
  const subject = `Collaborating on ${gig.title} — Vishwajeet Srk Portfolio`;

  const body = `Hi ${sanitizedClient},

I noticed your open requirement for **"${gig.title}"** and wanted to reach out directly.

I am a Full Stack AI Systems Architect with production deployments across:
• **Learnify AI** (https://learnifyai.in): Next.js 15, React 19, Supabase, Cashfree payments.
• **JARVIS AI OS** (https://github.com/Vishwajeetsrk/JARVIS-AI-OS): 18-agent autonomous platform with 3D WebGL and vector context.
• **Wardelio Mobile App**: 150+ interactive screens built with React and Capacitor.
• **Rootbridge Academy**: Managed 200,000+ Salesforce CRM record reconciliations with 30% accuracy boost.

Given your scope, I can have an initial architecture blueprint and functional prototype ready within 48 hours.

Are you available for a brief 10-minute discovery call this week?

Best regards,
**Vishwajeet Srk**
Full Stack AI Systems Specialist
Portfolio: https://vishwajeetsrk.github.io | GitHub: https://github.com/Vishwajeetsrk
Phone: +91 85952 02922`;

  return {
    recipientEmail: `${sanitizedClient.toLowerCase().replace(/\s+/g, ".")}@${gig.company?.toLowerCase().replace(/[^a-z0-9]/g, "") || "company"}.com`,
    recipientName: sanitizedClient,
    subject,
    body,
    attachedPortfolioLinks: [
      "https://learnifyai.in",
      "https://github.com/Vishwajeetsrk/JARVIS-AI-OS",
      "https://vishwajeetsrk.github.io",
    ],
    gateLevel: 6,
    status: "pending_approval",
  };
}
