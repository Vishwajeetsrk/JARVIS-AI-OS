import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import {
  listConnections, connectProvider, disconnectProvider, testConnection,
} from "@/lib/connections.functions";
import type { ProviderDef } from "@/lib/connectors";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { CheckCircle2, AlertTriangle, ExternalLink, Loader2, Plug, Unplug, RefreshCw } from "lucide-react";

export function useConnections() {
  const listFn = useServerFn(listConnections);
  return useQuery({ queryKey: ["connections"], queryFn: () => listFn({}) });
}

export function ConnectionGrid({ providers }: { providers: ProviderDef[] }) {
  const qc = useQueryClient();
  const { data: connections = [], isLoading } = useConnections();
  const connectFn = useServerFn(connectProvider);
  const disconnectFn = useServerFn(disconnectProvider);
  const testFn = useServerFn(testConnection);

  const [open, setOpen] = useState<ProviderDef | null>(null);
  const [credential, setCredential] = useState("");

  const invalidate = () => qc.invalidateQueries({ queryKey: ["connections"] });

  const mConnect = useMutation({
    mutationFn: (vars: { provider: string; credential: string }) => connectFn({ data: vars }),
    onSuccess: (res) => {
      if (res.ok) {
        toast.success(`Connected — ${res.label}`);
        setOpen(null);
        setCredential("");
        invalidate();
      } else {
        toast.error(res.error);
      }
    },
    onError: (e: Error) => toast.error(e.message),
  });

  const mDisconnect = useMutation({
    mutationFn: (provider: string) => disconnectFn({ data: { provider } }),
    onSuccess: () => { toast.success("Disconnected."); invalidate(); },
    onError: (e: Error) => toast.error(e.message),
  });

  const mTest = useMutation({
    mutationFn: (provider: string) => testFn({ data: { provider } }),
    onSuccess: (res) => {
      if (res.ok) toast.success(`Live — ${res.label}`);
      else toast.error(res.error);
      invalidate();
    },
    onError: (e: Error) => toast.error(e.message),
  });

  return (
    <>
      <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
        {providers.map((p) => {
          const conn = connections.find((c) => c.provider === p.id);
          const Icon = p.icon;
          const connected = conn?.status === "connected";
          return (
            <div
              key={p.id}
              className="group rounded-xl border border-border bg-card p-4 transition-all hover:border-primary/40"
            >
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-2">
                    <div className="truncate font-medium">{p.name}</div>
                    {connected && <CheckCircle2 className="h-4 w-4 text-sage" />}
                    {conn?.status === "error" && <AlertTriangle className="h-4 w-4 text-amber" />}
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">{p.description}</p>
                  {conn?.account_label && (
                    <p className="mt-1 truncate font-mono text-[11px] text-sage">{conn.account_label}</p>
                  )}
                </div>
              </div>

              <div className="mt-4 flex items-center gap-2">
                {connected ? (
                  <>
                    <Button size="sm" variant="outline" onClick={() => mTest.mutate(p.id)} disabled={mTest.isPending}>
                      <RefreshCw className="mr-1.5 h-3.5 w-3.5" /> Test
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="text-muted-foreground hover:text-destructive"
                      onClick={() => mDisconnect.mutate(p.id)}
                    >
                      <Unplug className="mr-1.5 h-3.5 w-3.5" /> Disconnect
                    </Button>
                  </>
                ) : (
                  <Button
                    size="sm"
                    className="bg-primary text-primary-foreground"
                    disabled={isLoading}
                    onClick={() => {
                      if (p.auth === "local") mConnect.mutate({ provider: p.id, credential: "" });
                      else { setCredential(""); setOpen(p); }
                    }}
                  >
                    <Plug className="mr-1.5 h-3.5 w-3.5" /> Connect
                  </Button>
                )}
              </div>
            </div>
          );
        })}
      </div>

      <Dialog open={!!open} onOpenChange={(v) => !v && setOpen(null)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Connect {open?.name}</DialogTitle>
            <DialogDescription>
              Jarvis verifies the credential against the live {open?.name} API before saving it. It is stored
              server-side and never returned to the browser.
            </DialogDescription>
          </DialogHeader>

          <div className="grid gap-2">
            <Label>{open?.credentialLabel}</Label>
            <Input
              type="password"
              autoComplete="off"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder="Paste credential…"
            />
            {open?.helpText && <p className="text-xs text-muted-foreground">{open.helpText}</p>}
            {open?.helpUrl && (
              <a
                href={open.helpUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs text-primary hover:underline"
              >
                Get a credential <ExternalLink className="h-3 w-3" />
              </a>
            )}
          </div>

          <DialogFooter>
            <Button variant="outline" onClick={() => setOpen(null)}>Cancel</Button>
            <Button
              className="bg-primary text-primary-foreground"
              disabled={mConnect.isPending || !credential.trim()}
              onClick={() => open && mConnect.mutate({ provider: open.id, credential })}
            >
              {mConnect.isPending && <Loader2 className="mr-1.5 h-3.5 w-3.5 animate-spin" />}
              Verify & connect
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
