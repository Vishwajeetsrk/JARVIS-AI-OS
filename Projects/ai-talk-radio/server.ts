import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { createInteraction, streamInteraction, API_BASE_URL } from "./server/lib/agentClient.ts";
import { extractJsonBlocks } from "./server/lib/jsonExtractor.ts";
import { exec } from 'child_process';
import util from 'util';
import fs from "fs";
import { Storage } from "@google-cloud/storage";
import crypto from "crypto";
import admin from "firebase-admin";

const execAsync = util.promisify(exec);

function getGcsBucketName(): string | null {
  const bucket = process.env.GCS_BUCKET_NAME;
  if (!bucket || typeof bucket !== "string" || bucket.trim() === "" || bucket.trim() === "undefined" || bucket.trim() === "null") {
    return null;
  }
  return bucket.trim();
}

function extractTarInMemory(tarBuffer: Buffer): Record<string, Buffer> {
  const files: Record<string, Buffer> = {};
  let offset = 0;

  while (offset + 512 <= tarBuffer.length) {
    let isEnd = true;
    for (let i = 0; i < 512; i++) {
      if (tarBuffer[offset + i] !== 0) {
        isEnd = false;
        break;
      }
    }
    if (isEnd) break;

    let name = "";
    for (let i = 0; i < 100; i++) {
      const charCode = tarBuffer[offset + i];
      if (charCode === 0) break;
      name += String.fromCharCode(charCode);
    }
    name = name.trim();

    let sizeStr = "";
    for (let i = 124; i < 136; i++) {
      const charCode = tarBuffer[offset + i];
      if (charCode === 0 || charCode === 32) continue;
      sizeStr += String.fromCharCode(charCode);
    }
    const size = parseInt(sizeStr, 8);

    const typeflag = tarBuffer[offset + 156];
    const isRegularFile = typeflag === 0 || typeflag === 48;

    offset += 512; // skip header

    if (name && isRegularFile && !isNaN(size) && size > 0) {
      if (offset + size <= tarBuffer.length) {
        files[name] = tarBuffer.subarray(offset, offset + size);
      }
    }

    const paddedSize = Math.ceil(size / 512) * 512;
    offset += paddedSize;
  }

  return files;
}


function loadAgentFiles(dir: string, basePath: string): Array<{type: string, content: string, target: string}> {
  let files: Array<{type: string, content: string, target: string}> = [];
  if (!fs.existsSync(dir)) return files;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const targetPath = path.posix.join(basePath, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(loadAgentFiles(fullPath, targetPath));
    } else {
      files.push({
        type: "inline",
        content: fs.readFileSync(fullPath, "utf-8"),
        target: targetPath
      });
    }
  }
  return files;
}

const activeGenerations = new Map<string, AbortController>();

function cleanUpOldGenerations() {
  const outputDir = path.join(process.cwd(), 'output');
  if (!fs.existsSync(outputDir)) return;

  const maxAgeMs = 1 * 60 * 60 * 1000; // 1 hour threshold
  const now = Date.now();

  try {
    const items = fs.readdirSync(outputDir);
    for (const item of items) {
      if (item.startsWith('.')) continue; // ignore hidden items
      if (item === 'shares') continue; // DO NOT CLEAN UP SHARED EPISODES!
      const itemPath = path.join(outputDir, item);
      const stats = fs.statSync(itemPath);
      
      if (stats.isDirectory()) {
        const age = now - stats.mtimeMs;
        if (age > maxAgeMs) {
          console.log(`[cleanup] Directory ${item} is older than 1 hour (${Math.round(age / 1000 / 60)} mins). Deleting to prevent storage bloat.`);
          try {
            fs.rmSync(itemPath, { recursive: true, force: true });
            const zipPath = `${itemPath}.zip`;
            if (fs.existsSync(zipPath)) {
              fs.unlinkSync(zipPath);
            }
          } catch (itemErr) {
            console.error(`[cleanup] Failed to delete ${itemPath}:`, itemErr);
          }
        }
      }
    }
  } catch (err) {
    console.error("[cleanup] Error cleaning up old generations:", err);
  }
}

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Run initial cleanup on startup
  cleanUpOldGenerations();

  app.use(express.json({ limit: '50mb' }));
  app.use('/output', express.static(path.join(process.cwd(), 'output')));

  // API routes FIRST
  app.post("/api/share", async (req, res) => {
    try {
      const { title, summary, transcript, prompt, duration, host, isBase64Encoded, date } = req.body;
      if (!title) {
        return res.status(400).json({ error: "Missing required metadata: title" });
      }

      const bucketName = getGcsBucketName();
      if (!bucketName) {
        console.log("[api/share] GCS_BUCKET_NAME is not configured. Sharing is disabled.");
        return res.status(400).json({ error: "Sharing is disabled because Google Cloud Storage is not configured." });
      }

      // Generate a deterministic 'shareId' based on content to check if it already exists
      const contentString = JSON.stringify({
        title,
        summary: summary || "",
        prompt: prompt || "",
        duration: duration || 0,
        host: host || "",
        transcript: transcript || []
      });
      const hash = crypto.createHash('sha256').update(contentString).digest('hex');
      const shareId = `show-${hash.substring(0, 16)}`;

      const storage = new Storage();
      const bucket = storage.bucket(bucketName);

      // Check if both the json metadata and the mp3 audio stream already exist
      const file = bucket.file(`shares/${shareId}.json`);
      const audioFile = bucket.file(`shares/${shareId}.mp3`);

      let alreadyExists = false;
      try {
        const [jsonExists] = await file.exists();
        if (jsonExists) {
          const [audioExists] = await audioFile.exists();
          if (audioExists) {
            alreadyExists = true;
          }
        }
      } catch (checkErr: any) {
        console.log(`[api/share] Pre-existence check bypassed on GCS: ${checkErr.message}`);
      }

      if (alreadyExists) {
        console.log(`[api/share] Show ${shareId} is already fully uploaded to GCS. Reusing existing files.`);
        return res.json({
          isSharingEnabled: true,
          useGcs: true,
          shareId,
          alreadyExists: true,
          uploadUrl: `/api/shares/${shareId}/upload/audio`,
          uploadCoverUrl: `/api/shares/${shareId}/upload/cover`,
          playbackUrl: `/api/shares/${shareId}/audio`,
          coverUrl: `/api/shares/${shareId}/cover`
        });
      }

      // Save the show metadata JSON directly to GCS
      const payload = {
        shareId,
        title,
        summary,
        transcript,
        prompt: prompt || "",
        duration: duration || 0,
        host: host || "",
        isBase64Encoded: isBase64Encoded || false,
        date: date || new Date().toLocaleDateString(),
        audioUrl: `/api/shares/${shareId}/audio`,
        coverImage: `/api/shares/${shareId}/cover`,
        createdAt: new Date().toISOString()
      };

      await file.save(JSON.stringify(payload, null, 2), {
        contentType: "application/json",
        resumable: false
      });

      console.log(`[api/share] Successfully created metadata on GCS for share ${shareId}`);
      res.json({
        isSharingEnabled: true,
        useGcs: true,
        shareId,
        alreadyExists: false,
        uploadUrl: `/api/shares/${shareId}/upload/audio`,
        uploadCoverUrl: `/api/shares/${shareId}/upload/cover`,
        playbackUrl: `/api/shares/${shareId}/audio`,
        coverUrl: `/api/shares/${shareId}/cover`
      });
    } catch (err: any) {
      console.error(`[api/share] Error initializing GCS dynamic stream or check:`, err);
      res.status(500).json({ error: `GCS publication failed: ${err.message || err}` });
    }
  });

  // Proxy upload route for audio file
  app.put("/api/shares/:id/upload/audio", async (req, res) => {
    try {
      const { id } = req.params;
      const bucketName = getGcsBucketName();
      if (!bucketName) {
        return res.status(400).json({ error: "GCS bucket not configured" });
      }

      const storage = new Storage();
      const bucket = storage.bucket(bucketName);
      const file = bucket.file(`shares/${id}.mp3`);

      console.log(`[Proxy GCS Upload] Starting direct audio stream for ${id}...`);
      const writeStream = file.createWriteStream({
        contentType: "audio/mpeg",
        resumable: false
      });

      req.pipe(writeStream);

      await new Promise<void>((resolve, reject) => {
        writeStream.on("finish", () => {
          console.log(`[Proxy GCS Upload] Audio save completed for share ${id}`);
          resolve();
        });
        writeStream.on("error", (err) => {
          console.error(`[Proxy GCS Upload] GCS audio stream error:`, err);
          reject(err);
        });
      });

      res.json({ success: true, useGcs: true });
    } catch (err: any) {
      console.error(`[Proxy GCS Upload] Handled error in audio:`, err);
      res.status(500).json({ error: err.message });
    }
  });

  // Proxy upload route for cover image
  app.put("/api/shares/:id/upload/cover", async (req, res) => {
    try {
      const { id } = req.params;
      const bucketName = getGcsBucketName();
      if (!bucketName) {
        return res.status(400).json({ error: "GCS bucket not configured" });
      }

      const storage = new Storage();
      const bucket = storage.bucket(bucketName);
      const file = bucket.file(`shares/${id}.png`);

      console.log(`[Proxy GCS Upload] Starting direct cover image stream for ${id}...`);
      const writeStream = file.createWriteStream({
        contentType: "image/png",
        resumable: false
      });

      req.pipe(writeStream);

      await new Promise<void>((resolve, reject) => {
        writeStream.on("finish", () => {
          console.log(`[Proxy GCS Upload] Cover save completed for share ${id}`);
          resolve();
        });
        writeStream.on("error", (err) => {
          console.error(`[Proxy GCS Upload] GCS cover stream error:`, err);
          reject(err);
        });
      });

      res.json({ success: true, useGcs: true });
    } catch (err: any) {
      console.error(`[Proxy GCS Upload] Handled error in cover:`, err);
      res.status(500).json({ error: err.message });
    }
  });

  // Stream proxy for playing audio
  app.get("/api/shares/:id/audio", async (req, res) => {
    try {
      const { id } = req.params;
      const bucketName = getGcsBucketName();
      if (!bucketName) {
        return res.status(400).send("GCS bucket not configured");
      }

      const storage = new Storage();
      const bucket = storage.bucket(bucketName);
      const file = bucket.file(`shares/${id}.mp3`);

      const [exists] = await file.exists();
      if (!exists) {
        return res.status(404).send("Audio file not found or still uploading");
      }

      try {
        const [metadata] = await file.getMetadata();
        res.setHeader("Content-Length", metadata.size);
      } catch (e) {}

      res.setHeader("Content-Type", "audio/mpeg");
      res.setHeader("Cache-Control", "public, max-age=31536000"); // Cache audio aggressively
      file.createReadStream().pipe(res);
    } catch (err: any) {
      console.error(`[Proxy GCS Read] Audio streaming error:`, err);
      res.status(500).send("Error reading audio file from GCS");
    }
  });

  // Stream proxy for loading cover images
  app.get("/api/shares/:id/cover", async (req, res) => {
    try {
      const { id } = req.params;
      const bucketName = getGcsBucketName();
      if (!bucketName) {
        return res.status(400).send("GCS bucket not configured");
      }

      const storage = new Storage();
      const bucket = storage.bucket(bucketName);
      const file = bucket.file(`shares/${id}.png`);

      const [exists] = await file.exists();
      if (!exists) {
        return res.status(404).send("Cover image not found");
      }

      try {
        const [metadata] = await file.getMetadata();
        res.setHeader("Content-Length", metadata.size);
      } catch (e) {}

      res.setHeader("Content-Type", "image/png");
      res.setHeader("Cache-Control", "public, max-age=31536000"); // Cache image aggressively
      file.createReadStream().pipe(res);
    } catch (err: any) {
      console.error(`[Proxy GCS Read] Cover image streaming error:`, err);
      res.status(500).send("Error reading cover image from GCS");
    }
  });

  app.post("/api/shares", (req, res) => {
    return res.status(403).json({ error: "Local sharing fallback has been completely disabled for security and GCS compliance." });
  });

  app.get("/api/shares/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const bucketName = getGcsBucketName();
      if (!bucketName) {
        return res.status(400).json({ error: "Sharing is disabled. No GCS bucket configured." });
      }

      const storage = new Storage();
      const bucket = storage.bucket(bucketName);
      const file = bucket.file(`shares/${id}.json`);
      const [exists] = await file.exists();
      if (exists) {
        const [buffer] = await file.download();
        const showData = JSON.parse(buffer.toString("utf-8"));
        return res.json(showData);
      }

      return res.status(404).json({ error: "Shared show not found on GCS." });
    } catch (err: any) {
      console.log(`[api/shares] Error retrieving GCS share ${req.params.id}:`, err);
      res.status(500).json({ error: "Internal server error" });
    }
  });

  app.post("/api/cancel-show", (req, res) => {
    const { generationId } = req.body;
    if (generationId && activeGenerations.has(generationId)) {
      console.log(`[cancel-show] Human requested abort for ${generationId}`);
      activeGenerations.get(generationId)?.abort();
      activeGenerations.delete(generationId);
      res.json({ success: true });
    } else {
      res.status(404).json({ error: "Not found or already completed" });
    }
  });

  app.get("/api/download-proxy", async (req, res) => {
    const targetUrl = req.query.url as string;
    if (!targetUrl) {
      res.status(400).send("Missing url parameter");
      return;
    }
    try {
      const response = await fetch(targetUrl);
      if (!response.ok) {
        res.status(response.status).send(`Failed to fetch: ${response.statusText}`);
        return;
      }
      res.setHeader("Content-Type", response.headers.get("Content-Type") || "application/octet-stream");
      res.setHeader("Access-Control-Allow-Origin", "*");
      
      const arrayBuffer = await response.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      res.send(buffer);
    } catch (err) {
      console.error("Download proxy failed:", err);
      res.status(500).send(`Internal server error: ${err instanceof Error ? err.message : String(err)}`);
    }
  });

  const QUOTA_CACHE_FILE = path.join(process.cwd(), 'output', 'quota_cache.json');
  const DEFAULT_QUOTA_LIMIT = 3;

  function getQuotaLimit(): number {
    const limitStr = process.env.DAILY_QUOTA_LIMIT;
    if (limitStr) {
      const parsed = parseInt(limitStr, 10);
      if (!isNaN(parsed)) {
        return parsed;
      }
    }
    return DEFAULT_QUOTA_LIMIT;
  }

  function getTodayStr(): string {
    return new Date().toISOString().split('T')[0];
  }

  let isFirebaseAdminInitialized = false;

  function ensureFirebaseAdmin() {
    if (!isFirebaseAdminInitialized) {
      try {
        admin.initializeApp();
        isFirebaseAdminInitialized = true;
        console.log("Firebase Admin initialized successfully (Application Default Credentials).");
      } catch (err: any) {
        console.warn("Could not retrieve Firebase Admin environment configuration from ADC:", err.message);
        try {
          const configPath = path.join(process.cwd(), 'firebase-applet-config.json');
          if (fs.existsSync(configPath)) {
            const config = JSON.parse(fs.readFileSync(configPath, 'utf-8'));
            admin.initializeApp({
              projectId: config.projectId
            });
            isFirebaseAdminInitialized = true;
            console.log("Initialized Firebase Admin with project ID from config layout.");
          }
        } catch (innerErr: any) {
          console.error("Failed to initialize Firebase Admin with local config fallback:", innerErr.message);
        }
      }
    }
  }

  async function getUserHash(req: express.Request): Promise<string | null> {
    const authHeader = req.headers['authorization'];
    if (authHeader && typeof authHeader === 'string' && authHeader.startsWith('Bearer ')) {
      const token = authHeader.substring(7);
      try {
        ensureFirebaseAdmin();
        const decodedToken = await admin.auth().verifyIdToken(token);
        const uid = decodedToken.uid;
        if (uid && typeof uid === 'string' && uid.trim() !== '') {
          return crypto.createHash("sha256").update(uid.trim()).digest("hex");
        }
      } catch (err: any) {
        console.error("Error verifying Firebase ID token:", err.message);
      }
    }
    // Fallback during local development or unauthenticated preview testing
    return "dev-user-hash";
  }

  function getQuotaCount(userHash: string | null): number {
    if (!userHash) return 0;
    try {
      const outputDir = path.dirname(QUOTA_CACHE_FILE);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      if (fs.existsSync(QUOTA_CACHE_FILE)) {
        const data = fs.readFileSync(QUOTA_CACHE_FILE, "utf-8");
        const cache = JSON.parse(data);
        const cacheKey = `${getTodayStr()}_${userHash}`;
        return cache[cacheKey] || 0;
      }
    } catch (err) {
      console.error("Error reading quota cache:", err);
    }
    return 0;
  }

  function incrementQuotaCount(userHash: string | null): void {
    if (!userHash) return;
    try {
      const outputDir = path.dirname(QUOTA_CACHE_FILE);
      if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
      }
      let cache: Record<string, number> = {};
      if (fs.existsSync(QUOTA_CACHE_FILE)) {
        try {
          const data = fs.readFileSync(QUOTA_CACHE_FILE, "utf-8");
          cache = JSON.parse(data);
        } catch (e) {
          console.error("Error parsing quota file cache on increment:", e);
        }
      }
      const cacheKey = `${getTodayStr()}_${userHash}`;
      cache[cacheKey] = (cache[cacheKey] || 0) + 1;
      fs.writeFileSync(QUOTA_CACHE_FILE, JSON.stringify(cache, null, 2), "utf-8");
    } catch (err) {
      console.error("Error incrementing quota cache:", err);
    }
  }

  app.get("/api/quota", async (req, res) => {
    if (process.env.NODE_ENV !== "production") {
      return res.json({ used: 0, limit: 999999 });
    }
    const userHash = await getUserHash(req);
    const limit = getQuotaLimit();
    if (!userHash) {
      return res.json({ used: 0, limit });
    }
    const count = getQuotaCount(userHash);
    return res.json({ used: count, limit });
  });

  app.post("/api/generate-show", async (req, res) => {
    // Run background cleanup list whenever a new show is request to optimize disk space
    cleanUpOldGenerations();

    const { topic, duration = "15", mood = "Informative", generationId } = req.body;

    if (process.env.NODE_ENV !== "production") {
      console.log(`[generate-show] Running in dev mode, skipping daily quota tracking.`);
    } else {
      const userHash = await getUserHash(req);
      if (userHash) {
        const count = getQuotaCount(userHash);
        const limit = getQuotaLimit();
        if (count >= limit) {
          return res.status(429).json({ error: `Daily limit of ${limit} shows reached. Please check back tomorrow!` });
        }
        // Deduct (increment) the quota immediately before starting the generation to prevent concurrent bypasses
        incrementQuotaCount(userHash);
      }
    }

    const prompt = `Generate a radio station about: ${topic}. Target duration: ${duration} minutes. Set the tone and style of the show to: ${mood}. Follow the workflow in AGENTS.md to research, write, generate speech and music, mix the audio, and generate the metadata.`;

    res.writeHead(200, {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      Connection: "keep-alive",
      "X-Accel-Buffering": "no",
    });

    const sendEvent = (event: any) => {
      res.write(`data: ${JSON.stringify(event)}\n\n`);
    };

    // Send a heartbeat every 15 seconds to keep the connection alive
    // (useful for proxies like VS Code port forwarding that drop idle connections)
    const heartbeatInterval = setInterval(() => {
      res.write(`:\n\n`); // SSE comment/ping
    }, 15000);

    let isFinished = false;
    const abortController = new AbortController();

    if (generationId) {
      activeGenerations.set(generationId, abortController);
    }

    req.on('aborted', () => {
      if (!isFinished) {
        console.log(`[generate-show] Client aborted request. Agent will continue running in background unless explicitly cancelled.`);
      }
      clearInterval(heartbeatInterval);
    });
    req.on('close', () => {
      clearInterval(heartbeatInterval);
    });

    try {
      console.log(`[generate-show] Request received for topic: "${topic}", duration: "${duration}", mood: "${mood}", generationId: "${generationId}"`);
      console.log(`[generate-show] GEMINI_API_KEY presence verified: ${!!process.env.GEMINI_API_KEY}`);
      sendEvent({ type: "info", message: "Provisioning environment..." });

      console.log(`[generate-show] Loading agent files from filesystem path: ${path.join(process.cwd(), "agent")}`);
      const agentFiles = loadAgentFiles(path.join(process.cwd(), "agent"), "/.agents");
      console.log(`[generate-show] Finished loading agent files recursively. Count: ${agentFiles.length}`);

      console.log(`[generate-show] Calling createInteraction with prompt: "${prompt.substring(0, 100)}..."`);
      const response = await createInteraction({
        prompt,
        stream: true,
        inlineSources: agentFiles.length > 0 ? agentFiles : undefined,
        signal: abortController.signal
      });

      console.log(`[generate-show] Gemini API responded. HTTP Status: ${response.status} ${response.statusText}`);

      if (!response.ok) {
        const errorText = await response.text();
        console.error(`[generate-show] Gemini API Non-2xx response. Error Payload: ${errorText}`);

        let displayMessage = `Agent API error: ${response.status} - ${errorText}`;
        try {
          const parsed = JSON.parse(errorText);
          if (parsed?.error?.message) {
            displayMessage = parsed.error.message;
          }
        } catch (e) {
          // ignore parsing error, stick to default
        }

        const isQuotaError = 
          response.status === 429 || 
          errorText.toLowerCase().includes("quota") || 
          errorText.toLowerCase().includes("too_many_requests") || 
          errorText.toLowerCase().includes("resource_exhausted") ||
          displayMessage.toLowerCase().includes("quota") ||
          displayMessage.toLowerCase().includes("too_many_requests");

        if (isQuotaError) {
          displayMessage = `Gemini API Quota Limit Reached: ${displayMessage}. The shared free-tier Google Gemini API Key has run out of request quota. To resolve this, go to Settings > Secrets inside AI Studio to verify your personal Gemini API key or set up billing.`;
        }

        sendEvent({ type: "error", message: displayMessage });
        res.end();
        return;
      }

      console.log(`[generate-show] Response remains ok. Constructing SSE stream reader...`);
      let accumulatedText = "";
      let envId: string | undefined;

      let eventCount = 0;
      for await (const event of streamInteraction(response)) {
        eventCount++;
        console.log(`[generate-show] SSE yields streaming event #${eventCount}: type="${event.type}"`);
        if (event.type === "done") {
          console.log(`[generate-show] Received explicit "done" marker from interaction stream.`);
          break;
        }
        if (event.type === "complete") {
          envId = (event.interaction?.environment as any)?.env_id || event.interaction?.environment_id;
          console.log(`[generate-show] Interaction completed. Extracted environment ID: "${envId}"`);
          const usage = event.interaction?.usage as any;
          if (usage) {
            console.log(`[agent] Token usage: ${usage.total_tokens} total tokens (${usage.total_input_tokens} input, ${usage.total_output_tokens} output, ${usage.total_thought_tokens || 0} thought, ${usage.total_cached_tokens || 0} cached)`);
          }

          // Fallback extraction: iterate and combine text from all elements of the steps array 
          const stepsObj = event.interaction?.steps as any[];
          if (Array.isArray(stepsObj)) {
            let combinedStepsText = "";
            for (const step of stepsObj) {
              const isReasoningStep = step.type === 'thinking' || step.type === 'thought' || step.type === 'reasoning';
              if (!isReasoningStep && Array.isArray(step.content)) {
                for (const part of step.content) {
                  if (part && typeof part === 'object') {
                    if (part.type === 'text' && part.text) {
                      combinedStepsText += part.text;
                    } else if (part.text && part.type !== 'thought') {
                      combinedStepsText += part.text;
                    }
                  } else if (typeof part === 'string') {
                    combinedStepsText += part;
                  }
                }
              }
            }
            if (combinedStepsText && combinedStepsText.length > accumulatedText.length) {
              console.log(`[generate-show] Dynamic steps recovery: Reconstructed text of length ${combinedStepsText.length} exceeds accumulated text of length ${accumulatedText.length}. Restoring fallback text.`);
              accumulatedText = combinedStepsText;
            }
          }
        }

        // Log events to the terminal as well
        if (event.type === "thinking") console.log(`[agent] thinking delta: ${event.text?.substring(0, 30)}...`);
        else if (event.type === "tool_call") {
          console.log(`[agent] tool_call: ${event.name}`);
          console.log(`[agent] args:`, JSON.stringify(event.arguments, null, 2));
        }
        else if (event.type === "tool_result") {
          console.log(`[agent] tool_result for tool: ${event.name}`);
        }
        else if (event.type === "text") {
          console.log(`[agent] text output segment: ${event.text?.substring(0, 30)}...`);
        }

        sendEvent(event);

        if (event.type === "text" && event.text) {
          accumulatedText += event.text;
        }
      }

      // Check for JSON blocks fallback after full stream completion to avoid overwhelming stream buffers
      if (accumulatedText) {
        try {
          const blocks = extractJsonBlocks(accumulatedText);
          if (blocks.length > 0) {
            sendEvent({ type: "show_data", data: blocks[blocks.length - 1] });
          }
        } catch (e) {
          console.error("Failed to parse JSON blocks fallback from accumulated text:", e);
        }
      }

      if (envId) {
        sendEvent({ type: "info", message: "Processing final audio and metadata in memory..." });
        try {
          const downloadUrl = `${API_BASE_URL}/files/environment-${envId}:download?alt=media`;
          const res = await fetch(downloadUrl, {
            headers: { "x-goog-api-key": process.env.GEMINI_API_KEY || "" }
          });

          if (res.ok) {
            const arrayBuffer = await res.arrayBuffer();
            const tarBuffer = Buffer.from(arrayBuffer);
            const extractedFiles = extractTarInMemory(tarBuffer);

            let showNotes: any = null;
            let audioBase64 = "";
            let coverBase64 = "";

            for (const [filePath, fileContent] of Object.entries(extractedFiles)) {
              if (filePath.endsWith("show_notes.json")) {
                try {
                  showNotes = JSON.parse(fileContent.toString("utf8"));
                } catch (err) {
                  console.error("Failed to parse show_notes.json from memory:", err);
                }
              } else if (filePath.endsWith("ai_radio.mp3")) {
                audioBase64 = fileContent.toString("base64");
              } else if (filePath.endsWith("cover.png") || filePath.endsWith("cover.jpg") || filePath.endsWith("cover.jpeg")) {
                coverBase64 = fileContent.toString("base64");
              }
            }

            if (showNotes) {
              if (audioBase64) {
                showNotes.audioUrl = `data:audio/mp3;base64,${audioBase64}`;
              }
              if (coverBase64) {
                showNotes.coverImage = `data:image/png;base64,${coverBase64}`;
              }
              showNotes.isBase64Encoded = true;
              sendEvent({ type: "show_data", data: showNotes });
            } else {
              console.error("show_notes.json was not found in the extracted tar archive");
              sendEvent({ type: "error", message: "Successfully extracted the archive but show_notes.json of the show was missing." });
            }
          } else {
            const errBody = await res.text();
            console.error("Failed to download snapshot:", errBody);
            sendEvent({ type: "error", message: `Failed to retrieve files from simulation: ${errBody}` });
          }
        } catch (err: any) {
          console.error("Error processing snapshot in memory:", err);
          sendEvent({ type: "error", message: `Error extracted show files: ${err.message}` });
        }
      }

      isFinished = true;
      sendEvent({ type: "status", status: "completed" });
    } catch (err: any) {
      if (err.name === 'AbortError') {
        console.log(`[generate-show] Agent interaction aborted successfully.`);
      } else {
        console.error(`[generate-show] Error:`, err);
        sendEvent({ type: "error", message: err instanceof Error ? err.message : "Unknown error" });
      }
    } finally {
      isFinished = true;
      clearInterval(heartbeatInterval);
      if (generationId) {
        activeGenerations.delete(generationId);
      }
      res.end();
    }
  });

  app.get("/api/download-zip", async (req, res) => {
    const { notesUrl, audioUrl, coverUrl } = req.query;

    if (!audioUrl || typeof audioUrl !== 'string') {
      return res.status(400).send("Missing audioUrl");
    }

    const getFilePath = (url: string) => {
      if (!url || !url.startsWith('/')) return null;
      const decodedUrl = decodeURIComponent(url);
      if (decodedUrl.startsWith('/output/')) {
        return path.join(process.cwd(), decodedUrl);
      } else if (decodedUrl.startsWith('/shows/')) {
        return path.join(process.cwd(), 'public', decodedUrl);
      }
      return null;
    };

    const notesPath = getFilePath(notesUrl as string);
    const audioPath = getFilePath(audioUrl as string);
    const coverPath = getFilePath(coverUrl as string);

    const tmpDir = path.join(process.cwd(), 'output', `tmp_zip_${Date.now()}_${Math.random().toString(36).substring(7)}`);

    try {
      fs.mkdirSync(tmpDir, { recursive: true });

      let hasFiles = false;
      if (notesPath && fs.existsSync(notesPath)) {
        fs.copyFileSync(notesPath, path.join(tmpDir, 'show_notes.json'));
        hasFiles = true;
      }
      if (audioPath && fs.existsSync(audioPath)) {
        fs.copyFileSync(audioPath, path.join(tmpDir, 'ai_radio.mp3'));
        hasFiles = true;
      }
      if (coverPath && fs.existsSync(coverPath)) {
        fs.copyFileSync(coverPath, path.join(tmpDir, 'cover.png'));
        hasFiles = true;
      }

      if (!hasFiles) {
        return res.status(404).send("No files found to zip");
      }

      const zipPath = `${tmpDir}.zip`;
      await execAsync(`zip -j "${zipPath}" "${tmpDir}"/*`);

      res.download(zipPath, 'radio-show.zip', (err) => {
        // Cleanup
        try {
          fs.rmSync(tmpDir, { recursive: true, force: true });
          if (fs.existsSync(zipPath)) fs.unlinkSync(zipPath);
        } catch (e) {
          console.error("Cleanup error:", e);
        }
      });
    } catch (err) {
      console.error("Zip error:", err);
      res.status(500).send("Error creating zip");
      try {
        fs.rmSync(tmpDir, { recursive: true, force: true });
      } catch (e) {}
    }
  });

  app.get("/api/shows", (req, res) => {
    // Run cleanup on library list check
    cleanUpOldGenerations();

    const showsDir = path.join(process.cwd(), 'public', 'shows');
    const shows: any[] = [];

    if (fs.existsSync(showsDir)) {
      const entries = fs.readdirSync(showsDir, { withFileTypes: true });
      for (const entry of entries) {
        if (entry.isDirectory()) {
          const showPath = path.join(showsDir, entry.name);
          const showNotesPath = path.join(showPath, 'show_notes.json');

          if (fs.existsSync(showNotesPath)) {
            try {
              const showNotes = JSON.parse(fs.readFileSync(showNotesPath, 'utf-8'));
              const folderFiles = fs.readdirSync(showPath);
              const mp3File = folderFiles.find(f => f.endsWith('.mp3'));
              const coverFile = folderFiles.find(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));

              if (entry.name === 'default') {
                showNotes.audioUrl = "https://www.gstatic.com/aistudio/starter-apps/assets/ai_radio/ai_radio.mp3";
                showNotes.coverImage = "https://www.gstatic.com/aistudio/starter-apps/assets/ai_radio/cover.jpg";
              } else {
                showNotes.audioUrl = `/shows/${entry.name}/${mp3File || 'ai_radio.mp3'}`;
                showNotes.coverImage = coverFile ? `/shows/${entry.name}/${coverFile}` : "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop";
              }
              showNotes.notesUrl = `/shows/${entry.name}/show_notes.json`;
              shows.push(showNotes);
            } catch (err) {
              console.error(`Error reading show notes for ${entry.name}:`, err);
            }
          }
        }
      }
    }
    res.json(shows);
  });

  app.get("/api/share/config", (req, res) => {
    res.json({
      isSharingEnabled: !!process.env.GCS_BUCKET_NAME
    });
  });

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok" });
  });

  // Vite middleware for development (with a robust fallback to dev middleware if dist/index.html is missing)
  const distPath = path.join(process.cwd(), 'dist');
  const indexHtmlExists = fs.existsSync(path.join(distPath, 'index.html'));

  if (process.env.NODE_ENV !== "production" || !indexHtmlExists) {
    if (process.env.NODE_ENV === "production") {
      console.warn("Production mode enabled, but dist/index.html not found. Falling back to Vite dev server middleware to ensure app stays operational.");
    }
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(distPath));
    // Express 5 format for catch-all (if using express 5) or Express 4. Let's use *all for v5 or * for v4.
    // We can use default express 4 catch-all
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  const startListening = (port: number) => {
    const server = app.listen(port, "0.0.0.0", () => {
      console.log(`Server running on http://localhost:${port}`);
    }).on('error', (err: any) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is in use, trying ${port + 1}...`);
        startListening(port + 1);
      } else {
        console.error(err);
      }
    });

    // Disable timeouts for long-running agent interactions
    server.setTimeout(0);
    server.requestTimeout = 0;
    server.headersTimeout = 0;
    server.keepAliveTimeout = 0;
  };

  startListening(PORT);
}

startServer();
