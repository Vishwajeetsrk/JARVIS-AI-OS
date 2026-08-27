/**
 * CodeEditor — Full Monaco editor with sidebar file tree + live preview.
 *
 * Features:
 * - File-tree sidebar (collapsible)
 * - Monaco editor (TypeScript / JS / CSS / HTML / JSON / Python / …)
 * - Live iframe preview panel
 * - Create / rename / delete file actions
 * - Auto-save with dirty indicator
 * - Keyboard shortcut: Ctrl+S to save
 */
import { useEffect, useRef, useState, useCallback } from "react";
import Editor from "@monaco-editor/react";
type IStandaloneCodeEditor = any;
import {
  ChevronRight, ChevronDown, Folder, FolderOpen,
  Plus, Trash2, RefreshCw, Eye, EyeOff, Save, X,
  FileCode2, Globe, PanelLeftClose, PanelLeft, ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

// ── Types ────────────────────────────────────────────────────────────────────

export interface FileNode {
  name: string;
  path: string;
  type: "file" | "directory";
  size?: number;
  language?: string;
  children?: FileNode[];
}

interface CodeEditorProps {
  projectSlug: string;
  previewUrl?: string;
  files?: FileNode[];
  onLoadFiles?: () => Promise<FileNode[]>;
  onReadFile?: (filePath: string) => Promise<{ content: string; language: string }>;
  onWriteFile?: (filePath: string, content: string) => Promise<void>;
  onCreateFile?: (filePath: string, type: "file" | "directory") => Promise<void>;
  onDeleteFile?: (filePath: string) => Promise<void>;
  onRefresh?: () => void;
  className?: string;
}

// ── File icon helper ─────────────────────────────────────────────────────────
function getFileIcon(name: string) {
  const ext = name.split(".").pop()?.toLowerCase() || "";
  const iconMap: Record<string, string> = {
    ts: "🔷", tsx: "⚛️", js: "🟡", jsx: "⚛️", css: "🎨", html: "🌐",
    json: "📦", md: "📝", py: "🐍", sh: "📄", sql: "🗄️", rs: "🦀",
    go: "🐹", yaml: "📋", yml: "📋", env: "🔒", txt: "📄",
  };
  return iconMap[ext] || "📄";
}

// ── Tree node ─────────────────────────────────────────────────────────────
function TreeNode({
  node, depth, selectedPath, onSelect, onDelete, onNewFile, onNewFolder,
}: {
  node: FileNode;
  depth: number;
  selectedPath: string | null;
  onSelect: (node: FileNode) => void;
  onDelete: (node: FileNode) => void;
  onNewFile: (dirPath: string) => void;
  onNewFolder: (dirPath: string) => void;
}) {
  const [expanded, setExpanded] = useState(depth < 2);
  const [hovering, setHovering] = useState(false);
  const isDir = node.type === "directory";
  const isSelected = selectedPath === node.path;

  return (
    <div>
      <div
        className={cn(
          "group flex items-center gap-1 rounded px-1 py-0.5 cursor-pointer select-none text-sm",
          "hover:bg-white/[0.06]",
          isSelected && "bg-white/[0.10] text-white",
          !isSelected && "text-zinc-400",
        )}
        style={{ paddingLeft: `${8 + depth * 12}px` }}
        onClick={() => { if (isDir) setExpanded(!expanded); else onSelect(node); }}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
      >
        {isDir ? (
          <span className="text-zinc-500">
            {expanded ? <ChevronDown className="h-3 w-3" /> : <ChevronRight className="h-3 w-3" />}
          </span>
        ) : <span className="w-3" />}

        {isDir ? (
          <span className="text-yellow-400 shrink-0">
            {expanded ? <FolderOpen className="h-3.5 w-3.5" /> : <Folder className="h-3.5 w-3.5" />}
          </span>
        ) : (
          <span className="text-[11px] shrink-0">{getFileIcon(node.name)}</span>
        )}

        <span className="flex-1 truncate leading-5">{node.name}</span>

        {hovering && (
          <span className="flex gap-0.5">
            {isDir && (
              <>
                <button className="rounded p-0.5 hover:bg-white/10" title="New file"
                  onClick={(e) => { e.stopPropagation(); onNewFile(node.path); }}>
                  <Plus className="h-3 w-3" />
                </button>
                <button className="rounded p-0.5 hover:bg-white/10" title="New folder"
                  onClick={(e) => { e.stopPropagation(); onNewFolder(node.path); }}>
                  <Folder className="h-3 w-3" />
                </button>
              </>
            )}
            <button className="rounded p-0.5 hover:bg-red-500/20 text-red-400" title="Delete"
              onClick={(e) => { e.stopPropagation(); onDelete(node); }}>
              <Trash2 className="h-3 w-3" />
            </button>
          </span>
        )}
      </div>

      {isDir && expanded && node.children?.map((child) => (
        <TreeNode key={child.path} node={child} depth={depth + 1} selectedPath={selectedPath}
          onSelect={onSelect} onDelete={onDelete} onNewFile={onNewFile} onNewFolder={onNewFolder} />
      ))}
    </div>
  );
}

// ── Open Tab ─────────────────────────────────────────────────────────────────
interface OpenTab {
  path: string;
  name: string;
  language: string;
  content: string;
  dirty: boolean;
}

// ── Main Component ────────────────────────────────────────────────────────────
export function CodeEditor({
  projectSlug,
  previewUrl,
  files: initialFiles = [],
  onLoadFiles,
  onReadFile,
  onWriteFile,
  onCreateFile,
  onDeleteFile,
  onRefresh,
  className,
}: CodeEditorProps) {
  const editorRef = useRef<IStandaloneCodeEditor | null>(null);
  const [files, setFiles] = useState<FileNode[]>(initialFiles);
  const [openTabs, setOpenTabs] = useState<OpenTab[]>([]);
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const [treeVisible, setTreeVisible] = useState(true);
  const [previewVisible, setPreviewVisible] = useState(!!previewUrl);
  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);
  const [newItemDialog, setNewItemDialog] = useState<{ dir: string; type: "file" | "directory" } | null>(null);
  const [newItemName, setNewItemName] = useState("");
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const refreshFiles = useCallback(async () => {
    if (!onLoadFiles) return;
    setLoading(true);
    try {
      const f = await onLoadFiles();
      setFiles(f);
      onRefresh?.();
    } finally {
      setLoading(false);
    }
  }, [onLoadFiles, onRefresh]);

  useEffect(() => { if (initialFiles.length === 0) refreshFiles(); }, [projectSlug]);

  const openFile = useCallback(async (node: FileNode) => {
    const existing = openTabs.find((t) => t.path === node.path);
    if (existing) { setActiveTab(node.path); return; }
    if (!onReadFile) return;
    setLoading(true);
    try {
      const { content, language } = await onReadFile(node.path);
      const tab: OpenTab = { path: node.path, name: node.name, language, content, dirty: false };
      setOpenTabs((prev) => [...prev, tab]);
      setActiveTab(node.path);
    } catch (e: any) {
      toast.error(`Cannot open file: ${e.message}`);
    } finally {
      setLoading(false);
    }
  }, [openTabs, onReadFile]);

  const saveActive = useCallback(async () => {
    const tab = openTabs.find((t) => t.path === activeTab);
    if (!tab || !onWriteFile) return;
    setSaving(true);
    try {
      await onWriteFile(tab.path, tab.content);
      setOpenTabs((prev) => prev.map((t) => t.path === tab.path ? { ...t, dirty: false } : t));
      toast.success("Saved ✓");
      if (previewVisible && iframeRef.current) iframeRef.current.src = iframeRef.current.src;
    } catch (e: any) {
      toast.error(`Save failed: ${e.message}`);
    } finally {
      setSaving(false);
    }
  }, [openTabs, activeTab, onWriteFile, previewVisible]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "s") { e.preventDefault(); saveActive(); }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [saveActive]);

  const handleEditorChange = useCallback((value: string | undefined) => {
    if (value === undefined || !activeTab) return;
    setOpenTabs((prev) => prev.map((t) => t.path === activeTab ? { ...t, content: value, dirty: true } : t));
  }, [activeTab]);

  const closeTab = useCallback((tabPath: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setOpenTabs((prev) => {
      const next = prev.filter((t) => t.path !== tabPath);
      if (activeTab === tabPath) setActiveTab(next.length > 0 ? next[next.length - 1].path : null);
      return next;
    });
  }, [activeTab]);

  const deleteFile = useCallback(async (node: FileNode) => {
    if (!onDeleteFile) return;
    if (!confirm(`Delete "${node.name}"?`)) return;
    try {
      await onDeleteFile(node.path);
      setOpenTabs((prev) => prev.filter((t) => !t.path.startsWith(node.path)));
      if (activeTab?.startsWith(node.path)) setActiveTab(null);
      await refreshFiles();
      toast.success(`Deleted ${node.name}`);
    } catch (e: any) {
      toast.error(e.message);
    }
  }, [onDeleteFile, activeTab, refreshFiles]);

  const handleCreate = useCallback(async () => {
    if (!newItemDialog || !newItemName.trim() || !onCreateFile) return;
    const fullPath = newItemDialog.dir ? `${newItemDialog.dir}/${newItemName.trim()}` : newItemName.trim();
    try {
      await onCreateFile(fullPath, newItemDialog.type);
      await refreshFiles();
      toast.success(`Created`);
      if (newItemDialog.type === "file") {
        await openFile({ name: newItemName.trim(), path: fullPath, type: "file" });
      }
    } catch (e: any) {
      toast.error(e.message);
    } finally {
      setNewItemDialog(null);
      setNewItemName("");
    }
  }, [newItemDialog, newItemName, onCreateFile, refreshFiles, openFile]);

  const activeTabObj = openTabs.find((t) => t.path === activeTab) ?? null;

  return (
    <div className={cn("flex flex-col h-full bg-[#0d0d0f] text-white overflow-hidden", className)}>
      {/* Toolbar */}
      <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-1.5 shrink-0 bg-[#111114]">
        <button className="rounded p-1 hover:bg-white/10 text-zinc-400" onClick={() => setTreeVisible(!treeVisible)}>
          {treeVisible ? <PanelLeftClose className="h-4 w-4" /> : <PanelLeft className="h-4 w-4" />}
        </button>
        <span className="text-xs text-zinc-500 font-mono truncate">{projectSlug}</span>
        <div className="flex-1" />
        {activeTabObj?.dirty && (
          <Button size="sm" variant="ghost" className="h-6 px-2 text-xs gap-1" onClick={saveActive} disabled={saving}>
            <Save className="h-3.5 w-3.5" /> {saving ? "Saving…" : "Save"}
          </Button>
        )}
        <button className="rounded p-1 hover:bg-white/10 text-zinc-400" onClick={refreshFiles}>
          <RefreshCw className={cn("h-4 w-4", loading && "animate-spin")} />
        </button>
        {previewUrl && (
          <button
            className={cn("rounded p-1 hover:bg-white/10", previewVisible ? "text-indigo-400" : "text-zinc-400")}
            onClick={() => setPreviewVisible(!previewVisible)}
          >
            {previewVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          </button>
        )}
        <button className="rounded p-1 hover:bg-white/10 text-zinc-400"
          onClick={() => setNewItemDialog({ dir: "", type: "file" })}>
          <Plus className="h-4 w-4" />
        </button>
      </div>

      {/* Main split */}
      <div className="flex flex-1 min-h-0">
        {/* File tree */}
        {treeVisible && (
          <div className="w-52 shrink-0 border-r border-white/[0.06] overflow-y-auto bg-[#0d0d0f] py-2">
            {files.length === 0 ? (
              <p className="text-xs text-zinc-600 px-4 py-2">No files — click + to create</p>
            ) : files.map((node) => (
              <TreeNode key={node.path} node={node} depth={0} selectedPath={activeTab}
                onSelect={openFile} onDelete={deleteFile}
                onNewFile={(d) => setNewItemDialog({ dir: d, type: "file" })}
                onNewFolder={(d) => setNewItemDialog({ dir: d, type: "directory" })} />
            ))}
          </div>
        )}

        <div className="flex flex-1 flex-col min-w-0">
          {/* Tab bar */}
          {openTabs.length > 0 && (
            <div className="flex border-b border-white/[0.06] overflow-x-auto shrink-0 bg-[#111114]">
              {openTabs.map((tab) => (
                <div key={tab.path}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-1.5 text-xs cursor-pointer border-r border-white/[0.06] shrink-0",
                    activeTab === tab.path
                      ? "bg-[#1e1e20] text-white border-t-2 border-t-indigo-500"
                      : "text-zinc-500 hover:bg-white/[0.04]",
                  )}
                  onClick={() => setActiveTab(tab.path)}
                >
                  <span className="text-[10px]">{getFileIcon(tab.name)}</span>
                  <span className="max-w-[120px] truncate">{tab.name}</span>
                  {tab.dirty && <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shrink-0" />}
                  <button className="ml-1 rounded hover:bg-white/10 p-0.5 text-zinc-600 hover:text-white"
                    onClick={(e) => closeTab(tab.path, e)}>
                    <X className="h-2.5 w-2.5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Editor + Preview */}
          <div className="flex flex-1 min-h-0">
            <div className={cn("flex flex-col min-h-0", previewVisible && previewUrl ? "w-1/2" : "flex-1")}>
              {activeTabObj ? (
                <Editor
                  height="100%"
                  language={activeTabObj.language}
                  value={activeTabObj.content}
                  theme="vs-dark"
                  onChange={handleEditorChange}
                  onMount={(ed) => { editorRef.current = ed; }}
                  options={{
                    fontSize: 13,
                    fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                    minimap: { enabled: false },
                    scrollBeyondLastLine: false,
                    wordWrap: "on",
                    automaticLayout: true,
                    tabSize: 2,
                    folding: true,
                    bracketPairColorization: { enabled: true },
                    smoothScrolling: true,
                    cursorBlinking: "smooth",
                    cursorSmoothCaretAnimation: "on",
                  }}
                />
              ) : (
                <div className="flex flex-1 flex-col items-center justify-center text-zinc-600 gap-3">
                  <FileCode2 className="h-12 w-12 opacity-30" />
                  <p className="text-sm">Open a file to start editing</p>
                  <Button variant="ghost" size="sm" className="text-xs gap-1"
                    onClick={() => setNewItemDialog({ dir: "", type: "file" })}>
                    <Plus className="h-3.5 w-3.5" /> New file
                  </Button>
                </div>
              )}
            </div>

            {/* Live Preview */}
            {previewVisible && previewUrl && (
              <div className="flex flex-col w-1/2 border-l border-white/[0.06] min-h-0">
                <div className="flex items-center gap-2 px-3 py-1.5 border-b border-white/[0.06] bg-[#111114] shrink-0">
                  <Globe className="h-3.5 w-3.5 text-zinc-400" />
                  <span className="text-xs text-zinc-500 truncate flex-1">{previewUrl}</span>
                  <a href={previewUrl} target="_blank" rel="noreferrer" className="text-zinc-600 hover:text-white">
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                  <button onClick={() => { if (iframeRef.current) iframeRef.current.src = previewUrl; }}>
                    <RefreshCw className="h-3.5 w-3.5 text-zinc-600 hover:text-white" />
                  </button>
                </div>
                <iframe ref={iframeRef} src={previewUrl} className="flex-1 bg-white" title="Live Preview"
                  sandbox="allow-scripts allow-same-origin allow-forms" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* New file/folder dialog */}
      {newItemDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm">
          <div className="rounded-xl border border-white/10 bg-[#18181b] p-5 w-80 shadow-2xl">
            <p className="text-sm font-medium mb-3 text-white">
              New {newItemDialog.type}{newItemDialog.dir && <span className="text-zinc-500"> in {newItemDialog.dir}</span>}
            </p>
            <Input autoFocus value={newItemName} onChange={(e) => setNewItemName(e.target.value)}
              placeholder={newItemDialog.type === "file" ? "file.ts" : "folder"}
              className="bg-[#0d0d0f] border-white/10 mb-3"
              onKeyDown={(e) => { if (e.key === "Enter") handleCreate(); if (e.key === "Escape") setNewItemDialog(null); }} />
            <div className="flex gap-2 justify-end">
              <Button size="sm" variant="ghost" onClick={() => setNewItemDialog(null)}>Cancel</Button>
              <Button size="sm" onClick={handleCreate} disabled={!newItemName.trim()}>
                <Plus className="h-3.5 w-3.5 mr-1" /> Create
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
