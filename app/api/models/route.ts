import { NextResponse } from "next/server";

export async function GET() {
  const models = [
    {
      id: "gemini-2.0-flash",
      name: "Google Gemini 2.0 Flash",
      provider: "Google AI",
      status: process.env.GEMINI_API_KEY ? "active" : "standby",
      latencyMs: 380,
      contextWindow: "1,000,000 tokens",
      costPerMillion: "$0.10",
      description: "Ultra-fast multimodal reasoning, streaming code generation, and function calling.",
    },
    {
      id: "llama-3.3-70b",
      name: "Meta LLaMA 3.3 70B Versatile",
      provider: "Groq Cloud LPU",
      status: process.env.GROQ_API_KEY ? "active" : "standby",
      latencyMs: 140,
      contextWindow: "128,000 tokens",
      costPerMillion: "$0.59",
      description: "Sub-200ms ultra-low latency execution via Groq LPUs.",
    },
    {
      id: "deepseek-r1",
      name: "DeepSeek R1 Reasoning",
      provider: "OpenRouter",
      status: process.env.OPENROUTER_API_KEY ? "active" : "standby",
      latencyMs: 950,
      contextWindow: "64,000 tokens",
      costPerMillion: "Free Tier",
      description: "Autonomous chain-of-thought mathematical reasoning and logic verification.",
    },
    {
      id: "claude-3-5-sonnet",
      name: "Anthropic Claude 3.5 Sonnet",
      provider: "OpenRouter",
      status: process.env.OPENROUTER_API_KEY ? "active" : "standby",
      latencyMs: 620,
      contextWindow: "200,000 tokens",
      costPerMillion: "$3.00",
      description: "Frontier coding benchmark leader with nuanced architecture design.",
    },
  ];

  return NextResponse.json({
    models,
    activeProvider: "gemini-2.0-flash",
    fallbackProvider: "llama-3.3-70b",
    timestamp: new Date().toISOString(),
  });
}
