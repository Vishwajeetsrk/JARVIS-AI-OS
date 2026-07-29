import { z } from 'zod';

export const openHandsTaskSchema = z.object({
  taskTitle: z.string(),
  instructions: z.string(),
  targetDirectory: z.string().default('./src'),
  maxIterations: z.number().default(10),
});

export type OpenHandsTaskPayload = z.infer<typeof openHandsTaskSchema>;

export interface OpenHandsRunResult {
  taskId: string;
  status: 'COMPLETED' | 'FAILED' | 'IN_PROGRESS';
  filesModified: string[];
  diffSummary: string;
  timestamp: string;
}

export async function runOpenHandsTask(payload: OpenHandsTaskPayload): Promise<OpenHandsRunResult> {
  const openHandsUrl = process.env.OPENHANDS_API_URL || 'http://localhost:3000/api';
  console.log(`[OpenHands Runner] Dispatching sandboxed task "${payload.taskTitle}" to ${openHandsUrl}...`);
  console.log(`[OpenHands Runner] Target directory: ${payload.targetDirectory} | Max Iterations: ${payload.maxIterations}`);

  // Simulated execution returning clean sandboxed result
  const taskId = `oh-task-${Date.now()}`;
  return {
    taskId,
    status: 'COMPLETED',
    filesModified: ['src/components/Card.tsx', 'src/styles/theme.css'],
    diffSummary: `Applied clean design tokens to Card component and updated theme variable imports.`,
    timestamp: new Date().toISOString(),
  };
}
