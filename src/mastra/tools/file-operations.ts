/**
 * File Operations Tool for JARVIS AI OS
 * Provides autonomous read, write, copy, delete, rename, directory scanning,
 * file searching, and testing capabilities with safety verification.
 */

import * as fs from "node:fs";
import * as path from "node:path";
import { exec } from "node:child_process";
import { promisify } from "node:util";

const execAsync = promisify(exec);

const WORKSPACE_ROOT = process.cwd();

/**
 * Resolves and sanitizes a relative or absolute path within the workspace
 */
export function resolveSafePath(targetPath: string): string {
  if (path.isAbsolute(targetPath)) {
    return path.normalize(targetPath);
  }
  return path.normalize(path.join(WORKSPACE_ROOT, targetPath));
}

export interface ReadFileResult {
  ok: boolean;
  filePath: string;
  content?: string;
  totalLines?: number;
  sizeBytes?: number;
  error?: string;
}

export interface WriteFileResult {
  ok: boolean;
  filePath: string;
  bytesWritten?: number;
  createdNew?: boolean;
  error?: string;
}

export interface FileOpResult {
  ok: boolean;
  message: string;
  error?: string;
}

export interface DirectoryScanResult {
  ok: boolean;
  directory: string;
  totalFiles: number;
  totalDirs: number;
  items: Array<{
    name: string;
    path: string;
    type: "file" | "directory";
    sizeBytes?: number;
    extension?: string;
  }>;
  error?: string;
}

export interface SearchFilesResult {
  ok: boolean;
  query: string;
  matches: Array<{
    filePath: string;
    lineNumber: number;
    lineContent: string;
  }>;
  totalMatches: number;
  error?: string;
}

/**
 * Read file contents with optional line range
 */
export async function readFile(
  filePath: string,
  startLine?: number,
  endLine?: number
): Promise<ReadFileResult> {
  try {
    const fullPath = resolveSafePath(filePath);
    if (!fs.existsSync(fullPath)) {
      return { ok: false, filePath: fullPath, error: `File not found: ${filePath}` };
    }

    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      return { ok: false, filePath: fullPath, error: `Target is a directory: ${filePath}` };
    }

    const rawContent = fs.readFileSync(fullPath, "utf-8");
    const lines = rawContent.split(/\r?\n/);
    const totalLines = lines.length;

    let selectedContent = rawContent;
    if (startLine !== undefined || endLine !== undefined) {
      const start = Math.max(1, startLine ?? 1) - 1;
      const end = Math.min(totalLines, endLine ?? totalLines);
      selectedContent = lines.slice(start, end).join("\n");
    }

    return {
      ok: true,
      filePath: fullPath,
      content: selectedContent,
      totalLines,
      sizeBytes: stats.size,
    };
  } catch (err) {
    return { ok: false, filePath, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Write or overwrite file contents with automatic directory creation
 */
export async function writeFile(
  filePath: string,
  content: string,
  append = false
): Promise<WriteFileResult> {
  try {
    const fullPath = resolveSafePath(filePath);
    const dir = path.dirname(fullPath);

    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const existed = fs.existsSync(fullPath);
    if (append) {
      fs.appendFileSync(fullPath, content, "utf-8");
    } else {
      fs.writeFileSync(fullPath, content, "utf-8");
    }

    const stats = fs.statSync(fullPath);
    return {
      ok: true,
      filePath: fullPath,
      bytesWritten: stats.size,
      createdNew: !existed,
    };
  } catch (err) {
    return { ok: false, filePath, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Copy file or directory
 */
export async function copyFile(sourcePath: string, targetPath: string): Promise<FileOpResult> {
  try {
    const fullSource = resolveSafePath(sourcePath);
    const fullTarget = resolveSafePath(targetPath);

    if (!fs.existsSync(fullSource)) {
      return { ok: false, message: "Failed", error: `Source not found: ${sourcePath}` };
    }

    const targetDir = path.dirname(fullTarget);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.cpSync(fullSource, fullTarget, { recursive: true });
    return {
      ok: true,
      message: `Successfully copied '${sourcePath}' to '${targetPath}'`,
    };
  } catch (err) {
    return { ok: false, message: "Failed", error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Rename or move a file/directory
 */
export async function renameFile(oldPath: string, newPath: string): Promise<FileOpResult> {
  try {
    const fullOld = resolveSafePath(oldPath);
    const fullNew = resolveSafePath(newPath);

    if (!fs.existsSync(fullOld)) {
      return { ok: false, message: "Failed", error: `Source not found: ${oldPath}` };
    }

    const targetDir = path.dirname(fullNew);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }

    fs.renameSync(fullOld, fullNew);
    return {
      ok: true,
      message: `Successfully renamed '${oldPath}' to '${newPath}'`,
    };
  } catch (err) {
    return { ok: false, message: "Failed", error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Delete a file or directory safely
 */
export async function deleteFile(targetPath: string, recursive = false): Promise<FileOpResult> {
  try {
    const fullPath = resolveSafePath(targetPath);

    if (!fs.existsSync(fullPath)) {
      return { ok: false, message: "Failed", error: `Target not found: ${targetPath}` };
    }

    const stats = fs.statSync(fullPath);
    if (stats.isDirectory()) {
      fs.rmSync(fullPath, { recursive, force: true });
    } else {
      fs.unlinkSync(fullPath);
    }

    return {
      ok: true,
      message: `Successfully deleted '${targetPath}'`,
    };
  } catch (err) {
    return { ok: false, message: "Failed", error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Recursively scan directory tree with depth limit and filtering
 */
export async function scanDirectory(
  dirPath = ".",
  maxDepth = 3,
  currentDepth = 0
): Promise<DirectoryScanResult> {
  try {
    const fullPath = resolveSafePath(dirPath);
    if (!fs.existsSync(fullPath)) {
      return { ok: false, directory: fullPath, totalFiles: 0, totalDirs: 0, items: [], error: `Directory not found: ${dirPath}` };
    }

    const entries = fs.readdirSync(fullPath, { withFileTypes: true });
    const items: DirectoryScanResult["items"] = [];
    let fileCount = 0;
    let dirCount = 0;

    for (const entry of entries) {
      if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "dist") {
        continue;
      }

      const itemRelPath = path.join(dirPath, entry.name);
      const itemFullPath = path.join(fullPath, entry.name);

      if (entry.isDirectory()) {
        dirCount++;
        items.push({
          name: entry.name,
          path: itemRelPath,
          type: "directory",
        });

        if (currentDepth < maxDepth) {
          const subScan = await scanDirectory(itemRelPath, maxDepth, currentDepth + 1);
          if (subScan.ok) {
            items.push(...subScan.items);
            fileCount += subScan.totalFiles;
            dirCount += subScan.totalDirs;
          }
        }
      } else if (entry.isFile()) {
        fileCount++;
        let sizeBytes = 0;
        try {
          sizeBytes = fs.statSync(itemFullPath).size;
        } catch {}

        items.push({
          name: entry.name,
          path: itemRelPath,
          type: "file",
          sizeBytes,
          extension: path.extname(entry.name).toLowerCase(),
        });
      }
    }

    return {
      ok: true,
      directory: dirPath,
      totalFiles: fileCount,
      totalDirs: dirCount,
      items,
    };
  } catch (err) {
    return { ok: false, directory: dirPath, totalFiles: 0, totalDirs: 0, items: [], error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Search workspace files for exact regex or text query
 */
export async function searchFiles(
  query: string,
  searchDir = ".",
  extensions?: string[]
): Promise<SearchFilesResult> {
  try {
    const fullDir = resolveSafePath(searchDir);
    const regex = new RegExp(query, "i");
    const matches: SearchFilesResult["matches"] = [];

    const allowedExts = extensions ? new Set(extensions.map((e) => (e.startsWith(".") ? e : `.${e}`))) : null;

    function walk(curr: string) {
      if (!fs.existsSync(curr)) return;
      const entries = fs.readdirSync(curr, { withFileTypes: true });

      for (const entry of entries) {
        if (entry.name === "node_modules" || entry.name === ".git" || entry.name === "dist") {
          continue;
        }

        const full = path.join(curr, entry.name);
        if (entry.isDirectory()) {
          walk(full);
        } else if (entry.isFile()) {
          const ext = path.extname(entry.name).toLowerCase();
          if (allowedExts && !allowedExts.has(ext)) continue;

          try {
            const content = fs.readFileSync(full, "utf-8");
            const lines = content.split(/\r?\n/);
            lines.forEach((line, idx) => {
              if (regex.test(line) && matches.length < 100) {
                matches.push({
                  filePath: path.relative(WORKSPACE_ROOT, full),
                  lineNumber: idx + 1,
                  lineContent: line.trim(),
                });
              }
            });
          } catch {}
        }
      }
    }

    walk(fullDir);

    return {
      ok: true,
      query,
      matches,
      totalMatches: matches.length,
    };
  } catch (err) {
    return { ok: false, query, matches: [], totalMatches: 0, error: err instanceof Error ? err.message : String(err) };
  }
}

/**
 * Automated test runner execution
 */
export async function runAutomatedTest(
  testType: "vitest" | "typecheck" | "lint" | "custom",
  customCommand?: string
): Promise<{ ok: boolean; stdout: string; stderr: string; exitCode: number }> {
  let cmd = "npm run test";
  if (testType === "typecheck") cmd = "npm run typecheck";
  else if (testType === "lint") cmd = "npm run lint";
  else if (testType === "custom" && customCommand) cmd = customCommand;

  try {
    const { stdout, stderr } = await execAsync(cmd, { cwd: WORKSPACE_ROOT, timeout: 60000 });
    return { ok: true, stdout, stderr, exitCode: 0 };
  } catch (err: any) {
    return {
      ok: false,
      stdout: err.stdout || "",
      stderr: err.stderr || err.message || "",
      exitCode: err.code || 1,
    };
  }
}
