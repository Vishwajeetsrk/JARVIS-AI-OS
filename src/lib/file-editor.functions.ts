// Server functions for reading/writing project files on disk.
// These run in the Node.js server context, so fs access is safe.
import { createServerFn } from "@tanstack/react-start";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";
import { z } from "zod";
import path from "path";
import fs from "fs";

// ── Safe path resolution ──────────────────────────────────────────────────────
// Projects live under D:\Team of Vishwajeet\Projects\<slug>
const PROJECTS_ROOT = path.resolve(process.cwd(), "Projects");

function safeProjectPath(slug: string, relativePath = ""): string {
  // Sanitize: no traversal
  const clean = slug.replace(/[^a-zA-Z0-9_\-\.]/g, "");
  const base = path.join(PROJECTS_ROOT, clean);
  if (!relativePath) return base;
  const full = path.join(base, relativePath);
  // Guard against path traversal
  if (!full.startsWith(base)) throw new Error("Path traversal attempt blocked");
  return full;
}

// ── Read file tree (recursive, depth limited) ─────────────────────────────────
export interface FileNode {
  name: string;
  path: string; // relative to project root
  type: "file" | "directory";
  size?: number;
  children?: FileNode[];
  language?: string;
}

function getLanguage(filename: string): string {
  const ext = path.extname(filename).toLowerCase();
  const map: Record<string, string> = {
    ".ts": "typescript", ".tsx": "typescript", ".js": "javascript", ".jsx": "javascript",
    ".json": "json", ".css": "css", ".html": "html", ".md": "markdown",
    ".py": "python", ".sh": "shell", ".bat": "bat", ".yaml": "yaml", ".yml": "yaml",
    ".sql": "sql", ".rs": "rust", ".go": "go",
  };
  return map[ext] || "plaintext";
}

const IGNORED_DIRS = new Set(["node_modules", ".git", "dist", ".next", ".vercel", "build", "__pycache__", ".cache"]);

function readTree(dir: string, relBase: string, depth = 0): FileNode[] {
  if (depth > 5) return [];
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const nodes: FileNode[] = [];
  for (const entry of entries) {
    if (entry.name.startsWith(".") && entry.name !== ".env") continue;
    if (IGNORED_DIRS.has(entry.name)) continue;
    const rel = relBase ? `${relBase}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      nodes.push({
        name: entry.name,
        path: rel,
        type: "directory",
        children: readTree(path.join(dir, entry.name), rel, depth + 1),
      });
    } else {
      try {
        const stat = fs.statSync(path.join(dir, entry.name));
        nodes.push({
          name: entry.name,
          path: rel,
          type: "file",
          size: stat.size,
          language: getLanguage(entry.name),
        });
      } catch {
        // skip
      }
    }
  }
  return nodes.sort((a, b) => {
    if (a.type !== b.type) return a.type === "directory" ? -1 : 1;
    return a.name.localeCompare(b.name);
  });
}

// ── API: list project files ───────────────────────────────────────────────────
export const listProjectFiles = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({ slug: z.string().min(1).max(100) }).parse(data))
  .handler(async ({ data }) => {
    const dir = safeProjectPath(data.slug);
    return { files: readTree(dir, ""), exists: fs.existsSync(dir) };
  });

// ── API: read a single file ───────────────────────────────────────────────────
export const readProjectFile = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({
    slug: z.string().min(1).max(100),
    filePath: z.string().min(1).max(500),
  }).parse(data))
  .handler(async ({ data }) => {
    const full = safeProjectPath(data.slug, data.filePath);
    if (!fs.existsSync(full)) throw new Error("File not found");
    const stat = fs.statSync(full);
    if (stat.size > 2 * 1024 * 1024) throw new Error("File too large (>2MB)");
    const content = fs.readFileSync(full, "utf-8");
    return { content, language: getLanguage(data.filePath), size: stat.size };
  });

// ── API: write a file ─────────────────────────────────────────────────────────
export const writeProjectFile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({
    slug: z.string().min(1).max(100),
    filePath: z.string().min(1).max(500),
    content: z.string(),
  }).parse(data))
  .handler(async ({ data }) => {
    const full = safeProjectPath(data.slug, data.filePath);
    const dir = path.dirname(full);
    fs.mkdirSync(dir, { recursive: true });
    fs.writeFileSync(full, data.content, "utf-8");
    return { ok: true, size: Buffer.byteLength(data.content) };
  });

// ── API: create a new file ────────────────────────────────────────────────────
export const createProjectFile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({
    slug: z.string().min(1).max(100),
    filePath: z.string().min(1).max(500),
    type: z.enum(["file", "directory"]),
  }).parse(data))
  .handler(async ({ data }) => {
    const full = safeProjectPath(data.slug, data.filePath);
    if (data.type === "directory") {
      fs.mkdirSync(full, { recursive: true });
    } else {
      const dir = path.dirname(full);
      fs.mkdirSync(dir, { recursive: true });
      if (!fs.existsSync(full)) fs.writeFileSync(full, "", "utf-8");
    }
    return { ok: true };
  });

// ── API: delete a file ────────────────────────────────────────────────────────
export const deleteProjectFile = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator((data) => z.object({
    slug: z.string().min(1).max(100),
    filePath: z.string().min(1).max(500),
  }).parse(data))
  .handler(async ({ data }) => {
    const full = safeProjectPath(data.slug, data.filePath);
    if (!fs.existsSync(full)) throw new Error("File not found");
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      fs.rmSync(full, { recursive: true });
    } else {
      fs.unlinkSync(full);
    }
    return { ok: true };
  });

// ── API: list projects on disk ────────────────────────────────────────────────
export const listWorkspaceProjectsFromDisk = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    if (!fs.existsSync(PROJECTS_ROOT)) return [];
    const entries = fs.readdirSync(PROJECTS_ROOT, { withFileTypes: true });
    return entries
      .filter((e) => e.isDirectory() && !e.name.startsWith("."))
      .map((e) => ({
        id: `local-${e.name}`,
        slug: e.name,
        name: e.name.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        previewUrl: `/preset-sites/${e.name}/index.html`,
      }));
  });
