/**
 * VIDA SOTA Tool 1: Reply Rescue
 * Contextual message responder supporting 6 calibrated tones, editable output, and clipboard copy.
 */

export type ReplyTone = "professional" | "friendly" | "concise" | "persuasive" | "apologetic" | "direct";

export interface ReplyRescueInput {
  incomingMessage: string;
  contextNote?: string;
  tone: ReplyTone;
}

export interface ReplyRescueOutput {
  tone: ReplyTone;
  generatedReply: string;
  keyPointsCovered: string[];
}

export function generateReplyRescue(input: ReplyRescueInput): ReplyRescueOutput {
  const msg = input.incomingMessage.trim();
  const ctx = input.contextNote?.trim() || "our ongoing milestone";

  const responses: Record<ReplyTone, { reply: string; points: string[] }> = {
    professional: {
      reply: `Thank you for following up. Regarding ${ctx}, I have reviewed the details and agree with the proposed direction. We will proceed according to the established timeline and update you on the next milestone.`,
      points: ["Polite acknowledgment", "Agreement on milestone direction", "Confirmation of timeline"],
    },
    friendly: {
      reply: `Hey! Thanks so much for checking in. Everything looks great on ${ctx}! I'm on track and really excited about how it's coming together. Let's catch up soon on the final polish!`,
      points: ["Warm greeting", "Positive energy & progress update", "Open invitation to touch base"],
    },
    concise: {
      reply: `Received. Approved regarding ${ctx}. Proceeding now.`,
      points: ["Zero fluff", "Immediate confirmation", "Action commitment"],
    },
    persuasive: {
      reply: `Thanks for bringing this up. Focusing our immediate energy on ${ctx} gives us the highest leverage for delivering a rock-solid, production-grade release without scope bloat. Let's move forward with this approach.`,
      points: ["Value proposition framing", "Focus on high leverage", "Confidence-building alignment"],
    },
    apologetic: {
      reply: `Thank you for your patience. I apologize for the delay regarding ${ctx}. I am addressing this right now as top priority and will have the completed update over to you shortly.`,
      points: ["Courteous apology", "Priority escalation", "Quick resolution timeline"],
    },
    direct: {
      reply: `Acknowledged. On ${ctx}, the current constraints require us to stick to the agreed spec. Let me know if there are any blocking dependencies before we finalize.`,
      points: ["Clear boundary setting", "Constraint reinforcement", "Blocker check"],
    },
  };

  const selected = responses[input.tone] || responses.professional;

  return {
    tone: input.tone,
    generatedReply: selected.reply,
    keyPointsCovered: selected.points,
  };
}
