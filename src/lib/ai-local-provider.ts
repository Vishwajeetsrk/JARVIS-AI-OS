export interface OllamaModel {
  name: string;
  size: number;
  digest: string;
  modified_at: string;
}

export interface LocalAIConfig {
  baseUrl: string;
  defaultModel: string;
  timeoutMs: number;
}

export const DEFAULT_LOCAL_CONFIG: LocalAIConfig = {
  baseUrl: "http://localhost:11434",
  defaultModel: "llama3:latest",
  timeoutMs: 30000,
};

export class LocalAIProvider {
  private static instance: LocalAIProvider;
  private config: LocalAIConfig = { ...DEFAULT_LOCAL_CONFIG };

  private constructor() {}

  public static getInstance(): LocalAIProvider {
    if (!LocalAIProvider.instance) {
      LocalAIProvider.instance = new LocalAIProvider();
    }
    return LocalAIProvider.instance;
  }

  public async isAvailable(): Promise<boolean> {
    try {
      const ctrl = new AbortController();
      const id = setTimeout(() => ctrl.abort(), 2000);
      const res = await fetch(`${this.config.baseUrl}/api/tags`, { signal: ctrl.signal });
      clearTimeout(id);
      return res.ok;
    } catch {
      return false;
    }
  }

  public async listModels(): Promise<OllamaModel[]> {
    try {
      const res = await fetch(`${this.config.baseUrl}/api/tags`);
      if (!res.ok) return [];
      const data = (await res.json()) as { models?: OllamaModel[] };
      return data.models ?? [];
    } catch {
      return [];
    }
  }

  public async generateCompletion(prompt: string, systemPrompt?: string, model?: string): Promise<string> {
    const targetModel = model ?? this.config.defaultModel;
    const body = {
      model: targetModel,
      prompt,
      system: systemPrompt,
      stream: false,
    };

    const res = await fetch(`${this.config.baseUrl}/api/generate`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      throw new Error(`Ollama generate failed with status ${res.status}: ${res.statusText}`);
    }

    const data = (await res.json()) as { response?: string };
    return data.response ?? "";
  }
}

export const localAI = LocalAIProvider.getInstance();
