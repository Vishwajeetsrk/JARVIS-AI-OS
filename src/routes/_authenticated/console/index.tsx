import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { createThread } from "@/lib/threads.functions";
import { JarvisStar } from "@/components/jarvis/logo";
import { ChatSuggestions } from "@/components/ai-elements/chat-suggestions";

export const Route = createFileRoute("/_authenticated/console/")({
  component: ConsoleIndex,
});

const SUGGESTIONS = [
  "Draft a launch plan for a Razorpay-based subscription product",
  "Review my architecture for a multi-agent orchestrator",
  "Write a technical blog post about the reasoning layer",
  "Design a landing page hero for a SaaS in 30 minutes",
];

function ConsoleIndex() {
  const navigate = useNavigate();
  const qc = useQueryClient();
  const createFn = useServerFn(createThread);

  const start = useMutation({
    mutationFn: (title?: string) => createFn({ data: { title: title || "New chat" } }),
    onSuccess: (t, title) => {
      qc.invalidateQueries({ queryKey: ["threads"] });
      navigate({
        to: "/console/$threadId",
        params: { threadId: t.id },
        search: title ? { seed: title } : {},
      });
    },
  });

  return (
    <div className="flex h-full flex-col items-center justify-center p-10 bg-noise">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20">
        <JarvisStar className="text-primary" />
      </div>
      <h1 className="font-display text-4xl">How can I help, Vishwajeet?</h1>
      <p className="mt-2 max-w-lg text-center text-sm text-muted-foreground">
        Ask a question, delegate a project, or continue a thread from the sidebar.
      </p>
      <div className="mt-8 w-full max-w-2xl">
        <ChatSuggestions onSelect={(text) => start.mutate(text)} />
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          {SUGGESTIONS.map((s) => (
            <button
              key={s}
              onClick={() => start.mutate(s)}
              disabled={start.isPending}
              className="rounded-lg border border-border bg-card p-4 text-left text-sm text-foreground transition-colors hover:border-primary/40 hover:bg-surface"
            >
              {s}
            </button>
          ))}
        </div>
      </div>
      <button
        onClick={() => start.mutate(undefined)}
        disabled={start.isPending}
        className="btn-hero mt-8"
      >
        {start.isPending ? "Creating…" : "Start a new chat"}
      </button>
    </div>
  );
}
