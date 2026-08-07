import { createFileRoute, Outlet, redirect, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { supabase } from "@/integrations/supabase/client";
import { getSettings, createThread } from "@/lib/threads.functions";
import { VoiceAssistantProvider } from "@/components/voice-assistant";
import { VoiceAssistantButton } from "@/components/voice-assistant-button";

export const Route = createFileRoute("/_authenticated")({
  beforeLoad: async ({ location }) => {
    // Client-side only: check if user is signed in via Supabase OR in Guest Demo Mode
    if (typeof window === "undefined") return;
    const isGuest = localStorage.getItem("jarvis-guest-mode") === "true";
    if (isGuest) return; // Guest mode bypasses auth check

    const { data } = await supabase.auth.getSession();
    if (!data.session) {
      throw redirect({ to: "/auth", search: { next: location.pathname } });
    }
  },
  component: AuthGate,
});

function AuthGate() {
  const [ready, setReady] = useState(false);
  const navigate = useNavigate();
  const settingsFn = useServerFn(getSettings);
  const createFn = useServerFn(createThread);

  useEffect(() => {
    const isGuest = typeof localStorage !== "undefined" && localStorage.getItem("jarvis-guest-mode") === "true";
    if (isGuest) {
      setReady(true);
      return;
    }
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        window.location.href = `/auth?next=${encodeURIComponent(window.location.pathname)}`;
      } else {
        setReady(true);
      }
    });
  }, []);

  const { data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: () => settingsFn({}),
    enabled: ready,
  });

  // Whatever the user says (or types via voice), create a thread and let the
  // thread page auto-send it — so Jarvis actually does what was asked.
  const handleCommand = async (text: string) => {
    const t = await createFn({ data: { title: text.slice(0, 60) } });
    navigate({
      to: "/console/$threadId",
      params: { threadId: t.id },
      search: { seed: text },
    });
  };

  const voiceEnabled = (settings as any)?.voice_enabled === true;
  const wakeEnabled = (settings as any)?.wake_word_enabled === true;

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        <span className="font-mono text-xs uppercase tracking-widest animate-pulse">Loading console…</span>
      </div>
    );
  }
  return (
    <VoiceAssistantProvider onCommand={handleCommand} defaultEnabled={voiceEnabled && wakeEnabled}>
      <Outlet />
      <VoiceAssistantButton />
    </VoiceAssistantProvider>
  );
}
