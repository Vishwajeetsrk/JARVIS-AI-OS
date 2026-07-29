import os from 'os';

export interface HardwareProfile {
  platform: string;
  cpus: number;
  totalMemoryGB: number;
  freeMemoryGB: number;
  memoryUsagePercent: number;
  recommendedExecutionMode: 'HYBRID_FREE_CLOUD' | 'FREE_CLOUD_API' | 'CLOUD_API' | 'LOCAL_OLLAMA';
  activeFreeApiProviders: string[];
}

export function detectHardwareSpecs(): HardwareProfile {
  const cpus = os.cpus().length;
  const totalMem = os.totalmem() / (1024 * 1024 * 1024);
  const freeMem = os.freemem() / (1024 * 1024 * 1024);
  const usedPercent = Math.round(((totalMem - freeMem) / totalMem) * 100);

  // Default recommended mode prioritizes $0 Free Cloud APIs (Groq + Gemini Flash) for maximum performance at $0 recurring cost
  const recommendedMode: HardwareProfile['recommendedExecutionMode'] = 'HYBRID_FREE_CLOUD';

  return {
    platform: os.platform(),
    cpus,
    totalMemoryGB: Math.round(totalMem * 10) / 10,
    freeMemoryGB: Math.round(freeMem * 10) / 10,
    memoryUsagePercent: usedPercent,
    recommendedExecutionMode: recommendedMode,
    activeFreeApiProviders: [
      'Google Gemini 2.0 Flash (Free Tier)',
      'Groq Llama 3.3 70B (Free Tier)',
      'OpenRouter Free Auto Fallback'
    ],
  };
}
