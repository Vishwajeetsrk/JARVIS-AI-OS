import { resolveChatModel } from "../src/lib/ai-providers.js";
import dotenv from "dotenv";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, "../../.env") });

async function testAI() {
  console.log("Testing AI Provider resolution...");
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
