import fs from 'fs';
import path from 'path';

export interface UsageRecord {
  projectName: string;
  modelId: string;
  inputTokens: number;
  outputTokens: number;
  timestamp?: string;
}

const COST_RATES: Record<string, { inputPer1k: number; outputPer1k: number }> = {
  'claude-3-5-sonnet': { inputPer1k: 0.003, outputPer1k: 0.015 },
  'gemini-1-5-pro': { inputPer1k: 0.00125, outputPer1k: 0.005 },
  'llama-3-3-70b-local': { inputPer1k: 0, outputPer1k: 0 }
};

export function calculateExecutionCost(record: UsageRecord): { estimatedCostUSD: number; model: string } {
  const rate = COST_RATES[record.modelId] || { inputPer1k: 0.003, outputPer1k: 0.015 };
  const inputCost = (record.inputTokens / 1000) * rate.inputPer1k;
  const outputCost = (record.outputTokens / 1000) * rate.outputPer1k;
  const totalCost = Math.round((inputCost + outputCost) * 100000) / 100000;

  return {
    estimatedCostUSD: totalCost,
    model: record.modelId
  };
}
