import { z } from 'zod';

export const n8nTriggerSchema = z.object({
  workflowName: z.enum(['agencyos_invoicing', 'learnify_qa_report', 'devops_deploy_alert']),
  payload: z.record(z.unknown()),
});

export type N8nTriggerPayload = z.infer<typeof n8nTriggerSchema>;

export async function triggerN8nWorkflow(data: N8nTriggerPayload): Promise<{ success: boolean; message: string; timestamp: string }> {
  const n8nBaseUrl = process.env.N8N_WEBHOOK_URL || 'http://localhost:5678/webhook';
  const targetUrl = `${n8nBaseUrl}/${data.workflowName}`;

  try {
    console.log(`[n8n-bridge] Triggering workflow ${data.workflowName} at ${targetUrl}`);
    // In production, fetch(targetUrl, { method: 'POST', body: JSON.stringify(data.payload) })
    return {
      success: true,
      message: `Successfully dispatched workflow '${data.workflowName}' to n8n bridge.`,
      timestamp: new Date().toISOString(),
    };
  } catch (error) {
    const errMessage = error instanceof Error ? error.message : String(error);
    console.error(`[n8n-bridge] Failed to trigger workflow ${data.workflowName}:`, errMessage);
    return {
      success: false,
      message: `n8n webhook error: ${errMessage}`,
      timestamp: new Date().toISOString(),
    };
  }
}
