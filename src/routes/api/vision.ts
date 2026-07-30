/**
 * Vision API — Analyze screenshots and images with Gemini Vision.
 *
 * Captures screen content and sends to Gemini 2.0 Flash for analysis.
 * Supports: screen description, UI review, code review from screenshot, etc.
 */

import { createFileRoute } from "@tanstack/react-router";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const Route = createFileRoute("/api/vision" as any)({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const geminiKey = process.env.GEMINI_API_KEY;
        if (!geminiKey) {
          return new Response(
            JSON.stringify({ error: "GEMINI_API_KEY not configured" }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }

        try {
          const body = (await request.json()) as {
            image?: string; // base64 data URL or URL
            prompt?: string;
            context?: string;
          };

          if (!body.image) {
            return new Response(
              JSON.stringify({ error: "image parameter required (base64 data URL or image URL)" }),
              { status: 400, headers: { "Content-Type": "application/json" } }
            );
          }

          const prompt = body.prompt || "Describe what you see in this image in detail.";
          const context = body.context
            ? `\n\nAdditional context: ${body.context}`
            : "";

          const result = await generateText({
            model: google("gemini-2.0-flash"),
            messages: [
              {
                role: "user",
                content: [
                  {
                    type: "image",
                    image: body.image,
                  },
                  {
                    type: "text",
                    text: prompt + context,
                  },
                ],
              },
            ],
          });

          return new Response(
            JSON.stringify({
              analysis: result.text,
              model: "gemini-2.0-flash",
              usage: result.usage,
            }),
            { status: 200, headers: { "Content-Type": "application/json" } }
          );
        } catch (err: unknown) {
          const message = err instanceof Error ? err.message : String(err);
          return new Response(
            JSON.stringify({ error: message }),
            { status: 500, headers: { "Content-Type": "application/json" } }
          );
        }
      },
    },
  },
});
