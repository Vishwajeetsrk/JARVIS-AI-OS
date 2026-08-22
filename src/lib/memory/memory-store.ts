/**
 * Nia 4-Tier Memory Governance System
 * Stores Session, Daily, Project, and Long-Term memories with credential sanitization.
 */

export interface MemoryItem {
  id: string;
  category: "session" | "daily" | "project" | "long_term";
  key: string;
  value: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

const SENSITIVE_PATTERNS = [
  /password\s*[:=]\s*[^\s]+/gi,
  /api[_-]?key\s*[:=]\s*[^\s]+/gi,
  /bearer\s+[A-Za-z0-9\-_.]+/gi,
  /sk-[A-Za-z0-9]{20,}/gi,
  /ghp_[A-Za-z0-9]{20,}/gi,
  /eyJ[A-Za-z0-9\-_.]+/gi, // JWT
];

export class MemoryStore {
  private storageKey = "nia_memory_vault_v1";

  private sanitize(content: string): string {
    let sanitized = content;
    for (const pattern of SENSITIVE_PATTERNS) {
      sanitized = sanitized.replace(pattern, "[REDACTED_CREDENTIAL]");
    }
    return sanitized;
  }

  private loadAll(): MemoryItem[] {
    if (typeof localStorage === "undefined") return [];
    try {
      const raw = localStorage.getItem(this.storageKey);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  }

  private saveAll(items: MemoryItem[]) {
    if (typeof localStorage === "undefined") return;
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(items));
    } catch (e) {
      console.error("Failed to persist Nia memory vault:", e);
    }
  }

  public getMemories(category?: MemoryItem["category"]): MemoryItem[] {
    const items = this.loadAll();
    if (!category) return items;
    return items.filter((item) => item.category === category);
  }

  public setMemory(
    category: MemoryItem["category"],
    key: string,
    value: string,
    tags?: string[]
  ): MemoryItem {
    const items = this.loadAll();
    const cleanVal = this.sanitize(value);
    const existingIdx = items.findIndex((i) => i.category === category && i.key === key);
    const now = new Date().toISOString();

    if (existingIdx >= 0) {
      items[existingIdx].value = cleanVal;
      items[existingIdx].tags = tags ?? items[existingIdx].tags;
      items[existingIdx].updatedAt = now;
      this.saveAll(items);
      return items[existingIdx];
    } else {
      const newItem: MemoryItem = {
        id: `mem_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`,
        category,
        key,
        value: cleanVal,
        tags: tags || [],
        createdAt: now,
        updatedAt: now,
      };
      items.unshift(newItem);
      this.saveAll(items);
      return newItem;
    }
  }

  public deleteMemory(id: string): boolean {
    const items = this.loadAll();
    const filtered = items.filter((i) => i.id !== id);
    if (filtered.length !== items.length) {
      this.saveAll(filtered);
      return true;
    }
    return false;
  }

  public clearCategory(category: MemoryItem["category"]) {
    const items = this.loadAll();
    this.saveAll(items.filter((i) => i.category !== category));
  }

  public exportVault(): string {
    return JSON.stringify(this.loadAll(), null, 2);
  }

  public importVault(jsonStr: string): number {
    try {
      const imported: MemoryItem[] = JSON.parse(jsonStr);
      if (Array.isArray(imported)) {
        const sanitized = imported.map((item) => ({
          ...item,
          value: this.sanitize(item.value),
        }));
        this.saveAll(sanitized);
        return sanitized.length;
      }
    } catch (e) {
      console.error("Invalid memory vault JSON:", e);
    }
    return 0;
  }
}

export const memoryStore = new MemoryStore();
