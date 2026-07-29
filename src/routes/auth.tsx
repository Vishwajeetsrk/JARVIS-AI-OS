import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { toast } from "sonner";
import { z } from "zod";

const searchSchema = z.object({ next: z.string().optional() });

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  validateSearch: (s) => searchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Sign in — Jarvis" },
      { name: "description", content: "Sign in to Vishwajeet's Jarvis AI console." },
    ],
  }),
});

function AuthPage() {
  const navigate = useNavigate();
  const { next } = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: next || "/console" });
    });
  }, [navigate, next]);

  const withPassword = async (e: React.FormEvent) => {
    e.preventDefault();
    setBusy(true);
    try {
      if (mode === "signup") {
        const { error } = await supabase.auth.signUp({
          email,
          password,
          options: { emailRedirectTo: `${window.location.origin}${next || "/console"}` },
        });
        if (error) throw error;
        toast.success("Check your email to confirm your account.");
      } else {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate({ to: next || "/console" });
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  };

  const withGoogle = async () => {
    setBusy(true);
    const result = await lovable.auth.signInWithOAuth("google", {
      redirect_uri: window.location.origin,
    });
    if (result.error) {
      toast.error(result.error.message || "Google sign-in failed");
      setBusy(false);
      return;
    }
    if (result.redirected) return;
    navigate({ to: next || "/console" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-6">
          <Link to="/"><JarvisWordmark /></Link>
        </div>
      </header>
      <main
        className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="w-full max-w-md rounded-2xl border border-border bg-card p-8 shadow-[var(--shadow-elevated)] reveal">
          <div className="mb-6 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
              <JarvisStar className="text-primary" />
            </div>
            <div>
              <div className="text-mono-xs">Console access</div>
              <h1 className="font-display text-2xl">
                {mode === "signin" ? "Welcome back." : "Create your account."}
              </h1>
            </div>
          </div>

          <button
            type="button"
            onClick={withGoogle}
            disabled={busy}
            className="mb-4 flex w-full items-center justify-center gap-3 rounded-md border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-colors hover:bg-background disabled:opacity-50"
          >
            <GoogleIcon />
            Continue with Google
          </button>

          <div className="my-4 flex items-center gap-3 text-mono-xs">
            <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
          </div>

          <form onSubmit={withPassword} className="space-y-3">
            <label className="block">
              <span className="text-mono-xs">Email</span>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>
            <label className="block">
              <span className="text-mono-xs">Password</span>
              <input
                type="password"
                required
                minLength={6}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full rounded-md border border-border bg-surface px-3 py-2 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25"
              />
            </label>
            <button
              type="submit"
              disabled={busy}
              className="btn-hero w-full disabled:opacity-50"
            >
              {busy ? "…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>

          <button
            type="button"
            onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
            className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground"
          >
            {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
          </button>
        </div>
      </main>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 48 48" aria-hidden>
      <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.8 1.1 7.9 3l5.7-5.7C33.7 6.1 29.1 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.2-.1-2.3-.4-3.5z"/>
      <path fill="#FF3D00" d="M6.3 14.7l6.6 4.8C14.7 15.1 19 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C33.7 6.1 29.1 4 24 4 16.1 4 9.3 8.4 6.3 14.7z"/>
      <path fill="#4CAF50" d="M24 44c5 0 9.6-1.9 13-5l-6-5.2c-2 1.4-4.5 2.2-7 2.2-5.3 0-9.7-3.4-11.3-8l-6.5 5C9.2 39.6 16 44 24 44z"/>
      <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.3 4.3-4.3 5.7l6 5.2c-.4.4 6.6-4.8 6.6-14.9 0-1.2-.1-2.3-.4-3.5z"/>
    </svg>
  );
}
