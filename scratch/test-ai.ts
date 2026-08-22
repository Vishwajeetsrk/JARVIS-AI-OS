import { resolveChatModel } from "../src/lib/ai-providers.ts";

async function testAI() {
  console.log("Testing AI Provider resolution with real keys...");
  try {
    const resolved = await resolveChatModel("gemini-flash-latest");
    console.log("Resolved Provider:", resolved.provider);
    console.log("Resolved ModelId:", resolved.modelId);
    console.log("Used Fallback:", resolved.usedFallback);
    console.log("SUCCESS: Real AI Provider is configured and accessible!");
  } catch (err) {
    console.error("AI Resolution Error:", err.message);
  }
}

testAI();
