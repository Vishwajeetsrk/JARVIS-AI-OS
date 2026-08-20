/**
 * Tauri desktop runtime helper.
 *
 * The desktop build (Jarvis AI OS installer) wraps the web app in a Tauri
 * shell. When running inside Tauri, `window.__TAURI_INTERNALS__` is injected
 * by the Rust runtime and lets us invoke native commands (local file access,
 * media playback, shell). When running in a plain browser these calls are
 * unavailable and every helper resolves to `null` / `false`.
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare global {
  interface Window {
    __TAURI_INTERNALS__?: {
      invoke: (cmd: string, args?: Record<string, unknown>) => Promise<unknown>;
      transformCallback?: unknown;
    };
  }
}

export function isTauriRuntime(): boolean {
  return typeof window !== "undefined" && !!window.__TAURI_INTERNALS__?.invoke;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function invokeTauri<T = any>(cmd: string, args?: Record<string, unknown>): Promise<T | null> {
  if (!isTauriRuntime()) return null;
  try {
    return (await window.__TAURI_INTERNALS__!.invoke(cmd, args ?? {})) as T;
  } catch (e) {
    console.error(`[tauri] ${cmd} failed`, e);
    return null;
  }
}

export interface LocalEntry {
  name: string;
  path: string;
  is_dir: boolean;
  size: number;
}

export interface LocalFs {
  available: boolean;
  listDir: (path?: string) => Promise<LocalEntry[] | null>;
  readFile: (path: string) => Promise<string | null>;
  writeFile: (path: string, content: string, append?: boolean) => Promise<number | null>;
  copy: (src: string, dst: string) => Promise<boolean>;
  move: (src: string, dst: string) => Promise<boolean>;
  remove: (path: string, recursive?: boolean) => Promise<boolean>;
  openPath: (path: string) => Promise<boolean>;
}

/** Local filesystem bridge. Returns an object with `available: false` outside Tauri. */
export function getLocalFs(): LocalFs {
  const available = isTauriRuntime();
  return {
    available,
    listDir: (path = "") => invokeTauri<LocalEntry[]>("list_local_dir", { path }),
    readFile: (path) => invokeTauri<string>("read_local_file", { path }),
    writeFile: (path, content, append = false) => invokeTauri<number>("write_local_file", { path, content, append }),
    copy: async (src, dst) => (await invokeTauri("copy_local_path", { src, dst })) !== null,
    move: async (src, dst) => (await invokeTauri("move_local_path", { src, dst })) !== null,
    remove: async (path, recursive = false) => (await invokeTauri("delete_local_path", { path, recursive })) !== null,
    openPath: async (path) => (await invokeTauri("open_local_path", { path })) !== null,
  };
}

/** Bundle exported for the chat action handler. */
export function getTauriBridge() {
  return {
    isTauriRuntime,
    invokeTauri,
    getLocalFs,
    /** Open a local file via its default handler (Tauri native when available, else browser window). */
    open: async (path: string) => {
      if (isTauriRuntime()) return (await invokeTauri("open_local_path", { path })) !== null;
      window.open(path, "_blank", "noopener");
      return false;
    },
  };
}