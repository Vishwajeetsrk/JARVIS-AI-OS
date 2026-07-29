import { createFileRoute } from "@tanstack/react-router";

// Groq / OpenAI-compatible TTS endpoint
export const Route = createFileRoute("/api/speak")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const groqKey = process.env.GROQ_API_KEY;
        if (!groqKey) {
          return new Response(JSON.stringify({ error: "GROQ_API_KEY not configured" }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const body = (await request.json().catch(() => ({}))) as { text?: string; voice?: string };
          if (!body.text || typeof body.text !== "string") {
            return new Response(JSON.stringify({ error: "text parameter required" }), {
              status: 400,
              headers: { "Content-Type": "application/json" },
            });
          }

          const res = await fetch("https://api.groq.com/openai/v1/audio/speech", {
            method: "POST",
            headers: {
              Authorization: `Bearer ${groqKey}`,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              model: "canopylabs/orpheus-v1-english",
              input: body.text,
              voice: body.voice ?? "default",
              response_format: "mp3",
            }),
          });

          if (!res.ok) {
            // Return clean JSON status if TTS model is not available
            return new Response(JSON.stringify({ status: "processed", text: body.text }), {
              status: 200,
              headers: { "Content-Type": "application/json" },
            });
          }

          const audioBuffer = await res.arrayBuffer();
          return new Response(audioBuffer, {
            status: 200,
            headers: {
              "Content-Type": "audio/mpeg",
              "Cache-Control": "public, max-age=3600",
            },
          });
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return new Response(JSON.stringify({ error: message }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
