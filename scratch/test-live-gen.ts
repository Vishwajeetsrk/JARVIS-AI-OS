import { resolveChatModel } from "../src/lib/ai-providers.ts";
import { generateText } from "ai";

async function testLiveGeneration() {
  console.log("Testing live text generation from Gemini...");
  try {
    const { model } = await resolveChatModel("gemini-flash-latest");
    const result = await generateText({
      model,
      prompt: "Hello Nia! Please introduce yourself in one short sentence.",
    });
    console.log("Nia Live Response:", result.text);
    console.log("SUCCESS: Real Gemini API is working and generating responses!");
  } catch (err) {
    console.error("Live Generation Error:", err.message);
  }
}

testLiveGeneration();
