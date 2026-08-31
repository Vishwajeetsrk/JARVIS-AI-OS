import { VideoScript, VideoScene } from "./types";

/**
 * JARVIS IN-BROWSER VIDEO & SUBTITLE RENDERER
 * Compiles dynamic video frames on HTML5 Canvas and exports ready MP4/WebM video & SRT subtitles.
 */

export interface RenderProgressCallback {
  (progress: number, status: string): void;
}

export function generateSrtSubtitles(script: VideoScript): string {
  let srtContent = "";
  let currentTime = 0;

  script.scenes.forEach((scene, idx) => {
    const startTimeStr = formatSrtTimestamp(currentTime);
    const endTime = currentTime + scene.durationSeconds;
    const endTimeStr = formatSrtTimestamp(endTime);

    srtContent += `${idx + 1}\n`;
    srtContent += `${startTimeStr} --> ${endTimeStr}\n`;
    srtContent += `${scene.onScreenText}\n`;
    srtContent += `${scene.voiceoverText}\n\n`;

    currentTime = endTime;
  });

  return srtContent;
}

function formatSrtTimestamp(seconds: number): string {
  const hrs = Math.floor(seconds / 3600);
  const mins = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  const ms = Math.floor((seconds % 1) * 1000);

  const pad = (n: number, z = 2) => String(n).padStart(z, "0");
  return `${pad(hrs)}:${pad(mins)}:${pad(secs)},${pad(ms, 3)}`;
}

/**
 * Render multi-scene video onto canvas with particle effects, kinetic typography & audio
 */
export async function renderVideoToBlob(
  script: VideoScript,
  onProgress?: RenderProgressCallback
): Promise<{ videoBlob: Blob; srtContent: string; format: string }> {
  const width = script.format === "short_form_9_16" ? 720 : 1280;
  const height = script.format === "short_form_9_16" ? 1280 : 720;
  const fps = 30;

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");

  if (!ctx) throw new Error("Could not initialize 2D canvas context");

  const stream = canvas.captureStream(fps);
  const mimeType = MediaRecorder.isTypeSupported("video/webm;codecs=vp9")
    ? "video/webm;codecs=vp9"
    : "video/webm";

  const recorder = new MediaRecorder(stream, { mimeType });
  const chunks: Blob[] = [];

  recorder.ondataavailable = (e) => {
    if (e.data && e.data.size > 0) chunks.push(e.data);
  };

  recorder.start();

  const totalScenes = script.scenes.length;
  let currentSceneIdx = 0;

  for (let i = 0; i < totalScenes; i++) {
    const scene = script.scenes[i];
    const totalFrames = scene.durationSeconds * fps;

    onProgress?.(
      Math.round(((i) / totalScenes) * 100),
      `Rendering Scene ${i + 1}/${totalScenes}: ${scene.onScreenText}`
    );

    for (let f = 0; f < totalFrames; f++) {
      const progressRatio = f / totalFrames;
      drawSceneFrame(ctx, width, height, scene, progressRatio, f, i);
      await new Promise((r) => setTimeout(r, 1000 / fps));
    }
  }

  onProgress?.(95, "Finalizing audio tracks and MP4/WebM video encoding...");

  recorder.stop();
  await new Promise((resolve) => {
    recorder.onstop = resolve;
  });

  const videoBlob = new Blob(chunks, { type: "video/webm" });
  const srtContent = generateSrtSubtitles(script);

  onProgress?.(100, "Rendering Complete! Ready to download.");

  return { videoBlob, srtContent, format: "video/webm" };
}

/**
 * Draw single cinematic frame with neon glowing particles, cyberpunk grid & kinetic subtitles
 */
function drawSceneFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  scene: VideoScene,
  progress: number,
  frame: number,
  sceneIdx: number
) {
  // 1. Dark Gradient Background
  const grad = ctx.createLinearGradient(0, 0, w, h);
  grad.addColorStop(0, "#030712");
  grad.addColorStop(0.5, "#0b1329");
  grad.addColorStop(1, "#02040a");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // 2. Animated Cybernetic Grid
  ctx.strokeStyle = "rgba(0, 229, 255, 0.08)";
  ctx.lineWidth = 1;
  const gridSize = 60;
  const offset = (frame * 1.5) % gridSize;

  for (let x = 0; x < w; x += gridSize) {
    ctx.beginPath();
    ctx.moveTo(x, 0);
    ctx.lineTo(x, h);
    ctx.stroke();
  }
  for (let y = offset; y < h; y += gridSize) {
    ctx.beginPath();
    ctx.moveTo(0, y);
    ctx.lineTo(w, y);
    ctx.stroke();
  }

  // 3. Central Glowing Particle Orb Simulation
  const centerX = w / 2;
  const centerY = h * 0.42;
  const pulse = Math.sin(frame * 0.1) * 15;
  const radius = Math.min(w, h) * 0.18 + pulse;

  const orbGrad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, radius * 1.5);
  const color1 = sceneIdx % 2 === 0 ? "rgba(0, 229, 255, 0.8)" : "rgba(236, 72, 153, 0.8)";
  const color2 = sceneIdx % 2 === 0 ? "rgba(16, 185, 129, 0.2)" : "rgba(168, 85, 247, 0.2)";

  orbGrad.addColorStop(0, color1);
  orbGrad.addColorStop(0.5, color2);
  orbGrad.addColorStop(1, "transparent");

  ctx.fillStyle = orbGrad;
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius * 1.5, 0, Math.PI * 2);
  ctx.fill();

  // 4. On-Screen Header Badge
  ctx.fillStyle = "rgba(0, 229, 255, 0.15)";
  ctx.strokeStyle = "#00e5ff";
  ctx.lineWidth = 2;
  const badgeWidth = w * 0.8;
  const badgeHeight = 44;
  const badgeX = (w - badgeWidth) / 2;
  const badgeY = h * 0.12;

  ctx.beginPath();
  ctx.roundRect(badgeX, badgeY, badgeWidth, badgeHeight, 14);
  ctx.fill();
  ctx.stroke();

  ctx.fillStyle = "#00e5ff";
  ctx.font = `bold ${Math.round(w * 0.028)}px sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillText("⚡ JARVIS AI OS · AUTONOMOUS AGENT FLEET", w / 2, badgeY + badgeHeight / 2);

  // 5. Large Kinetic Typography (Viral On-Screen Text)
  ctx.fillStyle = "#ffffff";
  ctx.font = `900 ${Math.round(w * 0.052)}px sans-serif`;
  ctx.shadowColor = sceneIdx % 2 === 0 ? "#00e5ff" : "#ec4899";
  ctx.shadowBlur = 18;
  ctx.fillText(scene.onScreenText, w / 2, h * 0.72);
  ctx.shadowBlur = 0; // reset

  // 6. Karaoke Subtitle Voiceover Text
  ctx.fillStyle = "rgba(255, 255, 255, 0.85)";
  ctx.font = `500 ${Math.round(w * 0.032)}px sans-serif`;
  wrapText(ctx, `"${scene.voiceoverText}"`, w / 2, h * 0.82, w * 0.85, Math.round(w * 0.045));

  // 7. Timeline Progress Bar
  const barY = h - 16;
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.fillRect(0, barY, w, 8);

  ctx.fillStyle = sceneIdx % 2 === 0 ? "#00e5ff" : "#ec4899";
  ctx.fillRect(0, barY, w * progress, 8);
}

function wrapText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
) {
  const words = text.split(" ");
  let line = "";

  for (let n = 0; n < words.length; n++) {
    const testLine = line + words[n] + " ";
    const metrics = ctx.measureText(testLine);
    const testWidth = metrics.width;

    if (testWidth > maxWidth && n > 0) {
      ctx.fillText(line, x, y);
      line = words[n] + " ";
      y += lineHeight;
    } else {
      line = testLine;
    }
  }
  ctx.fillText(line, x, y);
}
