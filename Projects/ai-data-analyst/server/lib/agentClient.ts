/**
 * Gemini Managed Agents client.
 * The server only sends user prompts — no inline system instructions.
 */

/* ────────────────────────────────────────────────────────── */
/*  Types                                                      */
/* ────────────────────────────────────────────────────────── */

export interface InteractionOptions {
  prompt: string;
  agentName?: string;
  environmentId?: string;
  previousInteractionId?: string;
  stream?: boolean;
  inlineSources?: Array<
    | { type: "inline"; content: string; target: string }
    | { type: "gcs"; source: string; target: string }
    | { type: "repository"; source: string; target: string }
  >;
  gcsToken?: string;
  signal?: AbortSignal;
}

export interface AgentEvent {
  type:
    | "thinking"
    | "text"
    | "tool_call"
    | "tool_result"
    | "interaction"
    | "complete"
    | "error"
    | "done";
  text?: string;
  name?: string;
  arguments?: Record<string, unknown>;
  result?: string;
  interaction?: Record<string, unknown>;
  message?: string;
}

/* ────────────────────────────────────────────────────────── */
/*  Create an interaction                                       */
/* ────────────────────────────────────────────────────────── */
export const API_BASE_URL = "https://generativelanguage.googleapis.com/v1beta";

export async function createInteraction(
  opts: InteractionOptions
): Promise<Response> {
  const agentName = opts.agentName ?? "antigravity-preview-05-2026";

  const payload: Record<string, unknown> = {
    agent: agentName,
    input: [
      {
        type: "text",
        text: opts.prompt,
      },
    ],
    stream: true,
  };

  // Environment config
  if (opts.environmentId) {
    payload.environment = { env_id: opts.environmentId };
  } else {
    const allowlist: any[] = [
      {
        domain: "generativelanguage.googleapis.com",
        transform: { "x-goog-api-key": process.env.GEMINI_API_KEY },
      }
    ];

    if (opts.gcsToken) {
      allowlist.push({
        domain: "storage.googleapis.com",
        transform: {
          "Authorization": `Bearer ${opts.gcsToken}`
        }
      });
    }

    allowlist.push({ domain: "*" });

    const envConfig: Record<string, unknown> = {
      type: "remote",
      sources: opts.inlineSources ?? [],
      network: {
        allowlist,
      },
    };
    payload.environment = envConfig;
  }

  if (opts.previousInteractionId) {
    payload.previous_interaction_id = opts.previousInteractionId;
  }

  const response = await fetch(`${API_BASE_URL}/interactions`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-goog-api-key": process.env.GEMINI_API_KEY || "",
      "x-server-timeout": "600",
      "Api-Revision": "2026-05-20",
      "x-goog-api-client": "applet-ai-data-analyst/1.0.0",
    },
    body: JSON.stringify(payload),
    signal: opts.signal,
  });

  return response;
}

/* ────────────────────────────────────────────────────────── */
/*  Parse SSE stream                                            */
/* ────────────────────────────────────────────────────────── */

/**
 * Async generator that yields parsed AgentEvent objects from
 * the Gemini Managed Agents SSE stream.
 */
function parseSseLine(line: string): AgentEvent | null {
  const trimmed = line.trim();
  if (!trimmed.startsWith("data:")) return null;

  const dataStr = trimmed.slice(5).trimStart();
  if (dataStr === "[DONE]") {
    return { type: "done" };
  }

  try {
    return parseAgentEvent(JSON.parse(dataStr));
  } catch {
    return null;
  }
}

export async function* streamInteraction(
  response: Response
): AsyncGenerator<AgentEvent> {
  const reader = response.body?.getReader();
  if (!reader) {
    console.error(`[streamInteraction] Error: response.body.getReader() is undefined!`);
    yield { type: "error", message: "No response body" };
    return;
  }

  const decoder = new TextDecoder();
  let buffer = "";
  let chunkCount = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) {
        break;
      }

      chunkCount++;
      const decoded = decoder.decode(value, { stream: true });
      buffer += decoded;

      // Process complete lines
      const lines = buffer.split("\n");
      buffer = lines.pop() ?? ""; // Keep incomplete line in buffer

      for (const line of lines) {
        const event = parseSseLine(line);
        if (!event) continue;
        yield event;
        if (event.type === "done") return;
      }
    }

    // Some proxies close an SSE response without a final newline. Preserve the
    // final event instead of silently dropping interaction.completed metadata.
    buffer += decoder.decode();
    if (buffer.trim()) {
      const event = parseSseLine(buffer);
      if (event) yield event;
    }
  } catch (err: any) {
    console.error(`[streamInteraction] Exception caught in read loop:`, err);
    yield { type: "error", message: `Stream read exception: ${err.message}` };
  } finally {
    reader.releaseLock();
  }
}

/* ────────────────────────────────────────────────────────── */
/*  Parse a single raw SSE event into a frontend-friendly fmt  */
/* ────────────────────────────────────────────────────────── */

function parseAgentEvent(
  event: Record<string, unknown>
): AgentEvent | null {
  const eventType = event.event_type as string | undefined;

  // The environment ID is available when the interaction is created. Surface
  // it immediately so callers can recover sandbox artifacts even if a hosted
  // proxy closes the stream before interaction.completed.
  if (eventType === "interaction.created") {
    const nestedData = event.data as Record<string, unknown> | undefined;
    return {
      type: "interaction",
      interaction:
        (event.interaction as Record<string, unknown>) ??
        (nestedData?.interaction as Record<string, unknown>) ??
        event,
    };
  }

  if (eventType === "step.delta") {
    const delta = event.delta as Record<string, unknown> | undefined;
    if (!delta) return null;

    // 1. Tool Call results (function results, code execution output etc.)
    const resultVal = delta.result !== undefined ? delta.result : delta.response;
    if (resultVal !== undefined && resultVal !== null) {
      let resultStr = "";
      if (typeof resultVal === "object") {
        resultStr = JSON.stringify(resultVal);
      } else {
        resultStr = String(resultVal);
      }
      return {
        type: "tool_result",
        name: delta.name as string | undefined,
        result: resultStr,
      };
    }

    // 2. Tool Calls (function calls, code execution triggers etc.)
    let argumentsObj = (delta.arguments as Record<string, unknown> | undefined) || 
                       ((delta.call as any)?.arguments as Record<string, unknown> | undefined);
                       
    // The Interactions API sometimes returns arguments as an escaped string
    if (typeof argumentsObj === "string") {
      try {
        argumentsObj = JSON.parse(argumentsObj);
      } catch (e) {
        // If it fails to parse, we leave it as is or wrap it
      }
    }

    const callName = (delta.name as string | undefined) || 
                     ((delta.call as any)?.name as string | undefined) || 
                     (delta.type === "code_execution_call" ? "code_execution_call" : undefined);

    if (callName || argumentsObj) {
      return {
        type: "tool_call",
        name: callName || "code_execution_call",
        arguments: argumentsObj ?? {},
      };
    }

    // 3. Text & Reasoning / Thinking deltas (content modalities)
    let extractedText = "";
    let isThinking = false;

    // Check if the step delta is annotated as a thought/reasoning step
    if (
      delta.type === "thought_summary" || 
      delta.type === "thinking" || 
      delta.type === "thought" || 
      delta.type === "thought_delta"
    ) {
      isThinking = true;
    }

    if (typeof delta.text === "string") {
      extractedText = delta.text;
    } else if (typeof delta.thought === "string") {
      extractedText = delta.thought;
      isThinking = true;
    } else if (typeof delta.summary === "string" && isThinking) {
      extractedText = delta.summary;
    }

    // Parse the content modalities representation: "content" represents modalities only
    const content = delta.content;
    if (content !== undefined && content !== null) {
      if (Array.isArray(content)) {
        for (const part of content) {
          if (part && typeof part === "object") {
            const partObj = part as Record<string, unknown>;
            if (partObj.type === "thought") {
              isThinking = true;
              if (typeof partObj.text === "string") {
                extractedText += partObj.text;
              } else if (typeof partObj.thought === "string") {
                extractedText += partObj.thought;
              }
            } else if (partObj.type === "text" && typeof partObj.text === "string") {
              extractedText += partObj.text;
            } else if (typeof partObj.text === "string") {
              extractedText += partObj.text;
            } else if (typeof partObj.thought === "string") {
              extractedText += partObj.thought;
              isThinking = true;
            }
          } else if (typeof part === "string") {
            extractedText += part;
          }
        }
      } else if (typeof content === "object") {
        const cObj = content as Record<string, unknown>;
        if (cObj.type === "thought") {
          isThinking = true;
          if (typeof cObj.text === "string") {
            extractedText = cObj.text;
          } else if (typeof cObj.thought === "string") {
            extractedText = cObj.thought;
          }
        } else if (cObj.type === "text" && typeof cObj.text === "string") {
          extractedText = cObj.text;
        } else if (typeof cObj.text === "string") {
          extractedText = cObj.text;
        } else if (typeof cObj.thought === "string") {
          extractedText = cObj.thought;
          isThinking = true;
        }
      } else if (typeof content === "string") {
        extractedText = content;
      }
    }

    if (extractedText) {
      return {
        type: isThinking ? "thinking" : "text",
        text: extractedText,
      };
    }
  }

  // Interaction complete
  if (eventType === "interaction.completed") {
    return {
      type: "complete",
      interaction: (event.interaction as Record<string, unknown>) ?? {},
    };
  }

  // Safely ignore metadata events we don't need to surface
  if (
    eventType === "step.start" ||
    eventType === "step.stop" ||
    eventType === "step.delta" // Usually handled above, but if it reaches here, it had no actionable delta
  ) {
    return null;
  }

  return null;
}
