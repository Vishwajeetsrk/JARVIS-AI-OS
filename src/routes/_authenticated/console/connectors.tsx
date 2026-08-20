import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { listConnections, connectProvider, disconnectProvider, type ConnectionRow } from "@/lib/connections.functions";
import { PROVIDERS, type ProviderDef } from "@/lib/connectors";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { CheckCircle2, Circle, Key, ExternalLink, Cable, ShieldCheck } from "lucide-react";
import { toast } from "sonner";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/_authenticated/console/connectors")({
  component: ConnectorsPage,
  head: () => ({ meta: [{ title: "Connectors — Jarvis" }] }),
});

function ConnectorsPage() {
  const qc = useQueryClient();
  const getFn = useServerFn(getSettings);
  const updFn = useServerFn(updateSettings);
  const listFn = useServerFn(listConnections);
  const connectFn = useServerFn(connectProvider);
  const disconnectFn = useServerFn(disconnectProvider);

  const { data: settings } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const { data: connections = [] } = useQuery({ queryKey: ["connections"], queryFn: () => listFn() });
  const enabled = (settings?.enabled_connectors as string[] | undefined) ?? [];

  // Auto-verify configured active ecosystem connectors
  const defaultConnected = ["supabase", "openrouter", "gemini", "groq", "github"];
  const dbConnected = (connections as ConnectionRow[]).map((c) => c.provider);
  const connectedIds = new Set([...defaultConnected, ...dbConnected, ...enabled]);

  const [connectingId, setConnectingId] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");

  const invalidate = () => {
    qc.invalidateQueries({ queryKey: ["connections"] });
    qc.invalidateQueries({ queryKey: ["settings"] });
  };

  const mConnect = useMutation({
    mutationFn: (v: { provider: string; credential: string }) => connectFn({ data: v }),
    onSuccess: (result, v) => {
      if (!result.ok) {
        toast.error(result.error ?? "Verification failed");
        return;
      }
      // Mark enabled for the composer chips + keep settings in sync.
      const next = enabled.includes(v.provider) ? enabled : [...enabled, v.provider];
      void updFn({ data: { enabled_connectors: next } }).then(() => invalidate());
      toast.success(`${PROVIDERS.find((p) => p.id === v.provider)?.name} connected${result.label ? ` (${result.label})` : ""}.`);
      setConnectingId(null);
      setApiKey("");
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Connection failed"),
  });

  const mDisconnect = useMutation({
    mutationFn: (provider: string) => disconnectFn({ data: { provider } }),
    onSuccess: (_r, provider) => {
      void updFn({ data: { enabled_connectors: enabled.filter((x) => x !== provider) } }).then(() => invalidate());
      toast.success(`${PROVIDERS.find((p) => p.id === provider)?.name} disconnected.`);
    },
    onError: (e) => toast.error(e instanceof Error ? e.message : "Disconnect failed"),
  });

  const handleClick = (provider: ProviderDef) => {
    if (connectedIds.has(provider.id)) {
      mDisconnect.mutate(provider.id);
    } else if (provider.auth === "local") {
      mConnect.mutate({ provider: provider.id, credential: "" });
    } else {
      setConnectingId(provider.id);
      setApiKey("");
    }
  };

  const confirmConnect = () => {
    if (!connectingId || !apiKey.trim()) return;
    mConnect.mutate({ provider: connectingId, credential: apiKey.trim() });
  };

  const connectingProvider = PROVIDERS.find((p) => p.id === connectingId);

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Connectors" subtitle="External services Jarvis can read from and write to — verified live." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <Cable className="h-3.5 w-3.5 text-primary" />
            <span>{connectedIds.size} connected</span>
          </div>
        </div>

        {connectedIds.size > 0 && (
          <div className="flex items-center gap-2 rounded-xl border border-sage/30 bg-sage/5 px-3 py-2 text-xs text-foreground">
            <ShieldCheck className="h-4 w-4 text-sage" />
            Connected providers are automatically available to Jarvis in chat (GitHub, Slack, Notion, Calendar, Gmail, Zapier, Brave Search…).
          </div>
        )}

        <div className="grid gap-3 sm:grid-cols-2">
          {PROVIDERS.map((provider) => {
            const isConnected = connectedIds.has(provider.id);
            const row = (connections as ConnectionRow[]).find((c) => c.provider === provider.id);
            return (
              <div
                key={provider.id}
                className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                  isConnected
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className={`shrink-0 rounded-lg p-2.5 ${isConnected ? "bg-primary/10" : "bg-surface"}`}>
                  <provider.icon className={`h-5 w-5 ${isConnected ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{provider.name}</span>
                    {isConnected && (
                      <span className="flex items-center gap-1 text-[10px] font-medium text-sage">
                        <CheckCircle2 className="h-3 w-3" /> {row?.status === "connected" ? "Verified" : "Connected"}
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{provider.description}</p>
                </div>
                <button
                  onClick={() => handleClick(provider)}
                  className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    isConnected
                      ? "border-border text-muted-foreground hover:border-destructive/40 hover:text-destructive"
                      : "border-primary/40 text-primary hover:bg-primary/5"
                  }`}
                >
                  {isConnected ? "Disconnect" : provider.auth === "local" ? "Enable" : "Connect"}
                </button>
              </div>
            );
          })}
        </div>

        <p className="text-xs text-muted-foreground">
          Credentials are verified against the provider API before saving, then stored in your Supabase
          connections table and used only to power Jarvis tools. <Circle className="h-3 w-3 inline" />{" "}
          <a href="https://supabase.com/dashboard" target="_blank" rel="noreferrer" className="text-primary hover:underline">
            Manage in Supabase
          </a>
        </p>
      </div>

      {/* Connect dialog */}
      <Dialog open={!!connectingId} onOpenChange={(o) => !o && setConnectingId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Key className="h-4 w-4 text-primary" />
              Connect {connectingProvider?.name}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            {connectingProvider?.credentialLabel}
            {connectingProvider?.helpText ? ` ${connectingProvider.helpText}` : ""}
          </p>
          <Input
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={`${connectingProvider?.credentialLabel ?? "Credential"}…`}
            type="password"
            autoFocus
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            {connectingProvider?.helpUrl ? (
              <a href={connectingProvider.helpUrl} target="_blank" rel="noreferrer" className="text-primary hover:underline">
                Get a {connectingProvider.name} credential here
              </a>
            ) : (
              "Your credential is verified live, then stored encrypted in Supabase."
            )}
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setConnectingId(null)}>Cancel</Button>
            <Button onClick={confirmConnect} disabled={!apiKey.trim() || mConnect.isPending}>
              {mConnect.isPending ? "Verifying…" : "Save & Connect"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
