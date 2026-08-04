import { createFileRoute, Outlet, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

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

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background text-muted-foreground">
        <span className="font-mono text-xs uppercase tracking-widest animate-pulse">Loading console…</span>
      </div>
    );
  }
  return <Outlet />;
}
