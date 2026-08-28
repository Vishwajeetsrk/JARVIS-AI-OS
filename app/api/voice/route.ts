import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const file = formData.get("file") as Blob | null;

    if (!file) {
      return NextResponse.json({ error: "Audio file is required" }, { status: 400 });
    }

    const groqKey = process.env.GROQ_API_KEY;
    if (!groqKey) {
      return NextResponse.json({
        text: "[Offline Transcription] Audio received. Groq API Key required for cloud STT.",
        provider: "offline",
      });
    }

    // Call Groq Whisper Large v3
    const form = new FormData();
    form.append("file", file, "audio.webm");
    form.append("model", "whisper-large-v3");
    form.append("temperature", "0");
    form.append("response_format", "json");

    const res = await fetch("https://api.groq.com/openai/v1/audio/transcriptions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${groqKey}`,
      },
      body: form,
    });

    if (!res.ok) {
      const err = await res.text();
      throw new Error(`Groq Whisper failed: ${err}`);
    }

    const data = await res.json();
    return NextResponse.json({
      text: data.text,
      provider: "Groq Whisper-large-v3",
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message || "Voice Transcription Failed" }, { status: 500 });
  }
}
