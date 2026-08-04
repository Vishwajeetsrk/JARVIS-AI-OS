import { createFileRoute } from "@tanstack/react-router";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { getSettings, updateSettings } from "@/lib/threads.functions";
import { CONNECTORS } from "@/lib/catalog";
import { PageHeader } from "@/components/jarvis/catalog-grid";
import { useState } from "react";
import { CheckCircle2, Circle, Key, ExternalLink, Cable } from "lucide-react";
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
  const { data } = useQuery({ queryKey: ["settings"], queryFn: () => getFn({}) });
  const enabled = (data?.enabled_connectors as string[] | undefined) ?? [];

  const [connectingId, setConnectingId] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");

  const m = useMutation({
    mutationFn: (next: string[]) => updFn({ data: { enabled_connectors: next } }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["settings"] });
    },
  });

  const handleConnect = (id: string) => {
    if (enabled.includes(id)) {
      m.mutate(enabled.filter((x) => x !== id));
      toast.success("Connector disconnected.");
    } else {
      setConnectingId(id);
      setApiKey("");
    }
  };

  const confirmConnect = () => {
    if (!connectingId) return;
    m.mutate([...enabled, connectingId]);
    toast.success(`${CONNECTORS.find((c) => c.id === connectingId)?.name} connected!`);
    setConnectingId(null);
    setApiKey("");
  };

  const connectingConnector = CONNECTORS.find((c) => c.id === connectingId);

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl p-8 space-y-6">
        <div className="flex items-start justify-between gap-4 flex-wrap">
          <PageHeader title="Connectors" subtitle="External services Jarvis can read from and write to." />
          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface/60 px-2 py-1.5 text-xs font-medium">
            <Cable className="h-3.5 w-3.5 text-primary" />
            <span>{enabled.length} connected</span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {CONNECTORS.map((connector) => {
            const isEnabled = enabled.includes(connector.id);
            return (
              <div
                key={connector.id}
                className={`flex items-center gap-4 rounded-xl border p-4 transition-all ${
                  isEnabled
                    ? "border-primary/40 bg-primary/5"
                    : "border-border bg-card"
                }`}
              >
                <div className={`shrink-0 rounded-lg p-2.5 ${isEnabled ? "bg-primary/10" : "bg-surface"}`}>
                  <connector.icon className={`h-5 w-5 ${isEnabled ? "text-primary" : "text-muted-foreground"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium">{connector.name}</span>
                    {isEnabled && (
                      <span className="flex items-center gap-1 text-[10px] font-medium text-sage">
                        <CheckCircle2 className="h-3 w-3" /> Connected
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 text-xs text-muted-foreground">{connector.description}</p>
                </div>
                <button
                  onClick={() => handleConnect(connector.id)}
                  className={`shrink-0 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                    isEnabled
                      ? "border-border text-muted-foreground hover:border-destructive/40 hover:text-destructive"
                      : "border-primary/40 text-primary hover:bg-primary/5"
                  }`}
                >
                  {isEnabled ? "Disconnect" : "Connect"}
                </button>
              </div>
            );
          })}
        </div>
      </div>

      {/* Connect dialog */}
      <Dialog open={!!connectingId} onOpenChange={(o) => !o && setConnectingId(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Key className="h-4 w-4 text-primary" />
              Connect {connectingConnector?.name}
            </DialogTitle>
          </DialogHeader>
          <p className="text-sm text-muted-foreground">
            Enter your {connectingConnector?.name} API key or token. It will be stored securely in your Jarvis settings.
          </p>
          <Input
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            placeholder={`${connectingConnector?.name} API key…`}
            type="password"
            autoFocus
          />
          <p className="text-xs text-muted-foreground flex items-center gap-1">
            <ExternalLink className="h-3 w-3" />
            Keys are stored in Supabase encrypted settings — never sent to third parties.
          </p>
          <DialogFooter>
            <Button variant="ghost" onClick={() => setConnectingId(null)}>Cancel</Button>
            <Button onClick={confirmConnect} disabled={!apiKey.trim()}>
              Save & Connect
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
