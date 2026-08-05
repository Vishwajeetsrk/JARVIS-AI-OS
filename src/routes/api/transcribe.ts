import { createFileRoute } from "@tanstack/react-router";

// Groq Whisper STT endpoint — 2,000 req/day free, 7,200 audio seconds/hour free
export const Route = createFileRoute("/api/transcribe")({
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

        let formData: FormData | null = null;
        try {
          formData = await request.formData();
        } catch {
          return new Response(JSON.stringify({ error: "Audio file blob required in 'file' form field" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const file = formData?.get("file");
        if (!file || !(file instanceof Blob)) {
          return new Response(JSON.stringify({ error: "Audio file blob required in 'file' form field" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        try {
          const mimeToExt: Record<string, string> = {
            "audio/webm": "webm",
            "audio/webm;codecs=opus": "webm",
            "audio/ogg": "ogg",
            "audio/mp4": "m4a",
            "audio/mpeg": "mp3",
            "audio/wav": "wav",
            "audio/wave": "wav",
          };
          const type = (file.type || "").split(";")[0].toLowerCase();
          const ext = mimeToExt[type] ?? "webm";

          const groqFormData = new FormData();
          groqFormData.append("file", file, `audio.${ext}`);
          groqFormData.append("model", "whisper-large-v3-turbo");
          groqFormData.append("response_format", "json");

          const res = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
            method: "POST",
            headers: { Authorization: `Bearer ${groqKey}` },
            body: groqFormData,
          });

          if (!res.ok) {
            const errText = await res.text();
            return new Response(JSON.stringify({ error: `Groq Whisper error: ${errText}` }), {
              status: res.status,
              headers: { "Content-Type": "application/json" },
            });
          }

          const data = await res.json();
          return new Response(JSON.stringify({ text: data.text }), {
            status: 200,
            headers: { "Content-Type": "application/json" },
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
