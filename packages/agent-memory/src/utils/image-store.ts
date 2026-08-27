import { homedir } from "node:os";
import { join, resolve, sep } from "node:path";
import { existsSync } from "node:fs";
import { mkdir, writeFile, unlink, utimes, stat } from "node:fs/promises";
import { createHash } from "node:crypto";

export const IMAGES_DIR = join(homedir(), ".agentmemory", "images");

const DEFAULT_MAX_BYTES = 500 * 1024 * 1024;

export function getMaxBytes(): number {
  return Number(process.env.AGENTMEMORY_IMAGE_STORE_MAX_BYTES) || DEFAULT_MAX_BYTES;
}

export function isManagedImagePath(filePath: string): boolean {
  const resolved = resolve(filePath);
  const normalizedImagesDir = resolve(IMAGES_DIR);
  return resolved.startsWith(normalizedImagesDir + sep) || resolved === normalizedImagesDir;
}

function contentHash(data: string): string {
  return createHash("sha256").update(data).digest("hex");
}

export async function saveImageToDisk(base64Data: string): Promise<{ filePath: string; bytesWritten: number }> {
  if (!base64Data) return { filePath: "", bytesWritten: 0 };

  if (!existsSync(IMAGES_DIR)) {
    await mkdir(IMAGES_DIR, { recursive: true });
  }

  let cleanBase64 = base64Data;
  let ext = "png";

  if (base64Data.startsWith("data:image/")) {
     const commaIdx = base64Data.indexOf(",");
     if (commaIdx !== -1) {
       const meta = base64Data.substring(0, commaIdx);
       if (meta.includes("jpeg") || meta.includes("jpg")) ext = "jpg";
       else if (meta.includes("webp")) ext = "webp";
       else if (meta.includes("gif")) ext = "gif";
       cleanBase64 = base64Data.substring(commaIdx + 1);
     }
  } else if (base64Data.startsWith("/9j/")) {
     ext = "jpg";
  }

  const hash = contentHash(cleanBase64);
  const filePath = join(IMAGES_DIR, `${hash}.${ext}`);

  if (existsSync(filePath)) {
    return { filePath, bytesWritten: 0 };
  }

  const buffer = Buffer.from(cleanBase64, "base64");
  await writeFile(filePath, buffer);

  const s = await stat(filePath);

  return { filePath, bytesWritten: s.size };
}

export async function deleteImage(filePath: string | undefined): Promise<{ deletedBytes: number }> {
  if (!filePath) return { deletedBytes: 0 };
  if (!isManagedImagePath(filePath)) return { deletedBytes: 0 };
  try {
    if (existsSync(filePath)) {
      const s = await stat(filePath);
      const size = s.size;
      await unlink(filePath);
      return { deletedBytes: size };
    }
  } catch (err) {
    console.error("[agentmemory] Failed to delete image context:", err);
  }
  return { deletedBytes: 0 };
}

/** Touch an image file to update its mtime (marking it as recently used for LRU eviction) */
export async function touchImage(filePath: string): Promise<void> {
  if (!filePath || !isManagedImagePath(filePath)) return;
  try {
    if (existsSync(filePath)) {
      const now = new Date();
      await utimes(filePath, now, now);
    }
  } catch (err) {
    // Ignore touch errors silently
  }
}
