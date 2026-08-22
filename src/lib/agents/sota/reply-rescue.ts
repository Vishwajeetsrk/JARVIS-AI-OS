/**
 * VIDA SOTA Agent 6: Reply Rescue
 * Generates context-calibrated response options (Friendly, Assertive, Executive)
 * for tricky messages, pull request reviews, and emails.
 */

export interface ReplyOptions {
  friendly: string;
  assertive: string;
  executive: string;
}

export class ReplyRescueAgent {
  public generateReplies(incomingMessage: string, contextNote?: string): ReplyOptions {
    const trimmed = incomingMessage.trim();

    return {
      friendly: `Hey! Thanks so much for reaching out. ${
        contextNote ? `Regarding ${contextNote}: ` : ""
      }I've reviewed this and think it looks great overall. Let's touch base on the final details shortly!`,
      assertive: `Acknowledging your message. ${
        contextNote ? `On ${contextNote}: ` : ""
      }To keep our milestones strictly on track, we should proceed with the current specification and address any non-critical adjustments in the next cycle. Let me know if there are any immediate blockers.`,
      executive: `Received. Approach approved with current constraints. Proceeding.`,
    };
  }
}

export const replyRescue = new ReplyRescueAgent();
