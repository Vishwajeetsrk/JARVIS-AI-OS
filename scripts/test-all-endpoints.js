// Automated Live Endpoint Test Runner for Jarvis AI OS
import http from "node:http";

const PORT = process.env.PORT || 8080;
const BASE_URL = `http://localhost:${PORT}`;

async function testEndpoint(path, method = "GET", body = null) {
  return new Promise((resolve) => {
    const url = new URL(path, BASE_URL);
    const options = {
      method,
      headers: body ? { "Content-Type": "application/json" } : {},
    };

    const req = http.request(url, options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        resolve({
          status: res.statusCode,
          headers: res.headers,
          data: data.slice(0, 300),
        });
      });
    });

    req.on("error", (err) => {
      resolve({ status: 500, error: err.message });
    });

    if (body) {
      req.write(JSON.stringify(body));
    }
    req.end();
  });
}

async function runAllTests() {
  console.log(`=== JARVIS AI OS AUTOMATED LIVE ENDPOINT TESTS (${BASE_URL}) ===`);

  console.log("\n1. Testing Web Console Root Page (/)....");
  const rootRes = await testEndpoint("/");
  console.log(`   Status: ${rootRes.status} ${rootRes.status === 200 ? "✅ PASSED" : "❌ FAILED"}`);

  console.log("\n2. Testing Desktop System Info API (/api/desktop/system)...");
  const sysRes = await testEndpoint("/api/desktop/system");
  console.log(`   Status: ${sysRes.status} ${sysRes.status === 200 ? "✅ PASSED" : "❌ FAILED"}`);
  console.log(`   Output: ${sysRes.data}`);

  console.log("\n3. Testing Desktop Screenshot API (/api/desktop/screenshot)...");
  const screenRes = await testEndpoint("/api/desktop/screenshot", "POST");
  console.log(`   Status: ${screenRes.status} ${screenRes.status === 200 ? "✅ PASSED" : "❌ FAILED"}`);
  console.log(`   Output: ${screenRes.data}`);

  console.log("\n4. Testing Voice TTS API (/api/speak)...");
  const ttsRes = await testEndpoint("/api/speak", "POST", { text: "Hello Vishwajeet, Jarvis is operational." });
  console.log(`   Status: ${ttsRes.status} ${ttsRes.status === 200 ? "✅ PASSED font" : "❌ FAILED"}`);

  console.log("\n5. Testing Voice STT API (/api/transcribe)...");
  const sttRes = await testEndpoint("/api/transcribe", "POST");
  console.log(`   Status: ${sttRes.status} (400 expected without file payload) ${sttRes.status === 400 ? "✅ PASSED" : "❌ FAILED"}`);

  console.log("\n=== ALL LIVE TESTS COMPLETED ===");
}

runAllTests();
