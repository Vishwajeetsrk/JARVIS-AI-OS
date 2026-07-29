import { z } from 'zod';
import { triggerN8nWorkflow } from './n8n-bridge.js';

export const razorpayWebhookSchema = z.object({
  event: z.string(),
  paymentId: z.string(),
  orderId: z.string(),
  amountINR: z.number().positive(),
  clientEmail: z.string().email(),
  clientName: z.string(),
  signature: z.string(),
});

export type RazorpayWebhookPayload = z.infer<typeof razorpayWebhookSchema>;

export interface BillingResult {
  success: boolean;
  paymentId: string;
  amountINR: number;
  n8nDispatched: boolean;
  timestamp: string;
}

export async function processAgencyOSBillingWebhook(payload: RazorpayWebhookPayload): Promise<BillingResult> {
  console.log(`[AgencyOS Billing] Processing Razorpay webhook for event '${payload.event}' | Payment ID: ${payload.paymentId}`);
  console.log(`[AgencyOS Billing] Amount: ₹${payload.amountINR} | Client: ${payload.clientName} (${payload.clientEmail})`);

  // Dispatch invoice delivery workflow to n8n
  const n8nResult = await triggerN8nWorkflow({
    workflowName: 'agencyos_invoicing',
    payload: {
      event: payload.event,
      paymentId: payload.paymentId,
      amount: payload.amountINR,
      email: payload.clientEmail,
      name: payload.clientName,
    },
  });

  return {
    success: true,
    paymentId: payload.paymentId,
    amountINR: payload.amountINR,
    n8nDispatched: n8nResult.success,
    timestamp: new Date().toISOString(),
  };
}
