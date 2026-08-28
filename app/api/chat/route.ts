import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { message, model = "gemini-2.0-flash", agentId, systemPrompt, history = [] } = await req.json();

    if (!message) {
      return NextResponse.json({ error: "Message is required" }, { status: 400 });
    }

    const effectiveSystemPrompt =
      systemPrompt ||
      `You are an advanced autonomous AI specialist in JARVIS APEX AI OS, architected by Vishwajeet. Provide crisp, professional, high-precision technical answers, actionable code, and strategic insights.`;

    // 1. Try Google Gemini API if key exists
    const geminiKey = process.env.GEMINI_API_KEY || process.env.GOOGLE_GENERATIVE_AI_API_KEY;
    if (geminiKey && (!model || model.includes("gemini"))) {
      try {
        const geminiContents = [
          ...history.map((h: any) => ({
            role: h.role === "assistant" ? "model" : "user",
            parts: [{ text: h.text }]
          })),
          { role: "user", parts: [{ text: message }] }
        ];

        const res = await fetch(
          `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${geminiKey}`,
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              system_instruction: { parts: [{ text: effectiveSystemPrompt }] },
              contents: geminiContents,
              generationConfig: { maxOutputTokens: 2048, temperature: 0.7 },
            }),
          }
        );
        if (res.ok) {
          const data = await res.json();
          const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text;
          if (reply) {
            return NextResponse.json({
              reply,
              model: "gemini-2.0-flash",
              provider: "Google Gemini",
              agentId,
            });
          }
        }
      } catch (e) {
        console.warn("Gemini execution fallback:", e);
      }
    }

    // Common messages format for OpenAI-compatible APIs (Groq, OpenRouter)
    const openAiMessages = [
      { role: "system", content: effectiveSystemPrompt },
      ...history.map((h: any) => ({ role: h.role, content: h.text })),
      { role: "user", content: message }
    ];

    // 2. Try Groq (Llama 3.3 70B) if key exists
    const groqKey = process.env.GROQ_API_KEY;
    if (groqKey) {
      try {
        const res = await fetch("https://api.groq.com/openai/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${groqKey}`,
          },
          body: JSON.stringify({
            model: "llama-3.3-70b-versatile",
            messages: openAiMessages,
            temperature: 0.7,
            max_tokens: 2048,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({
              reply,
              model: "llama-3.3-70b-versatile",
              provider: "Groq",
              agentId,
            });
          }
        }
      } catch (e) {
        console.warn("Groq execution fallback:", e);
      }
    }

    // 3. Try OpenRouter (DeepSeek R1 / LLaMA 3.3)
    const openrouterKey = process.env.OPENROUTER_API_KEY;
    if (openrouterKey) {
      try {
        const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${openrouterKey}`,
          },
          body: JSON.stringify({
            model: "deepseek/deepseek-r1:free",
            messages: openAiMessages,
          }),
        });
        if (res.ok) {
          const data = await res.json();
          const reply = data?.choices?.[0]?.message?.content;
          if (reply) {
            return NextResponse.json({
              reply,
              model: "deepseek-r1",
              provider: "OpenRouter",
              agentId,
            });
          }
        }
      } catch (e) {
        console.warn("OpenRouter execution fallback:", e);
      }
    }

    // Default simulated response if all external APIs are unreachable
    return NextResponse.json({
      reply: `[JARVIS Autonomous Execution] Task analyzed for ${agentId || "Specialist"}. System status: Online. Ready to process workflow.`,
      model: "local-synthesizer",
      provider: "JARVIS Core",
      agentId,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Internal Execution Error" }, { status: 500 });
  }
}
