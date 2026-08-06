export interface DesignSystemManifest {
  schemaVersion: string;
  id: string;
  name: string;
  category: string;
  description: string;
  source: { type: string; origin: string };
  files: {
    design: string;
    tokens: string;
    designTokens: string;
    tailwind: string;
    components: string;
  };
  usage: string;
  componentsManifest: string;
  importMode: string;
}

export interface DesignSystemSummary {
  id: string;
  name: string;
  category: string;
  description: string;
  tokenCount: number;
  componentCount: number;
}

export interface DesignSystemDetail extends DesignSystemSummary {
  manifest: DesignSystemManifest;
  tokens: string;
  designTokens: Record<string, unknown>;
  tailwind: string;
  components: string;
  usage: string;
  design: string;
}
