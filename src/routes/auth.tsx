import { createFileRoute, useNavigate, useSearch, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { lovable } from "@/integrations/lovable/index";
import { JarvisStar, JarvisWordmark } from "@/components/jarvis/logo";
import { toast } from "sonner";
import { z } from "zod";
import { Sparkles, ArrowRight, Eye, EyeOff, ShieldCheck, Zap, Brain } from "lucide-react";

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

const TRUST_BADGES = [
  { icon: Zap, label: "Free Gemini + Groq" },
  { icon: Brain, label: "Persistent memory" },
  { icon: ShieldCheck, label: "Supabase-secured" },
];

function AuthPage() {
  const navigate = useNavigate();
  const { next } = useSearch({ from: "/auth" });
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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

  const asGuest = () => {
    localStorage.setItem("jarvis-guest-mode", "true");
    toast.success("Entering guest demo mode…");
    navigate({ to: "/console" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Animated background blobs */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-1/4 -top-1/4 h-[600px] w-[600px] rounded-full opacity-[0.08] blur-3xl"
          style={{ background: "radial-gradient(circle, var(--color-primary), transparent)" }}
        />
        <div
          className="absolute -bottom-1/4 -right-1/4 h-[500px] w-[500px] rounded-full opacity-[0.06] blur-3xl"
          style={{ background: "radial-gradient(circle, #58A65C, transparent)" }}
        />
      </div>

      <header className="border-b border-border/60 bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <Link to="/"><JarvisWordmark /></Link>
          <Link to="/" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>
      </header>

      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center px-6 py-16">
        <div className="w-full max-w-md space-y-5">

          {/* Trust badges */}
          <div className="flex items-center justify-center gap-5 flex-wrap">
            {TRUST_BADGES.map(({ icon: Icon, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground/70 font-mono">
                <Icon className="h-3 w-3 text-primary/60" />
                {label}
              </span>
            ))}
          </div>

          {/* Main auth card */}
          <div className="rounded-2xl border border-border bg-card/80 backdrop-blur-sm p-8 shadow-[0_8px_48px_-12px_rgba(0,0,0,0.5)] reveal">
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 ring-1 ring-primary/20">
                <JarvisStar className="text-primary" />
              </div>
              <div>
                <div className="text-mono-xs text-muted-foreground">Console access</div>
                <h1 className="font-display text-2xl">
                  {mode === "signin" ? "Welcome back." : "Create your account."}
                </h1>
              </div>
            </div>

            <button
              type="button"
              onClick={withGoogle}
              disabled={busy}
              className="mb-4 flex w-full items-center justify-center gap-3 rounded-lg border border-border bg-surface px-4 py-2.5 text-sm font-medium transition-all hover:bg-background hover:border-primary/30 disabled:opacity-50 active:scale-[0.98]"
            >
              <GoogleIcon />
              Continue with Google
            </button>

            <div className="my-4 flex items-center gap-3 text-mono-xs text-muted-foreground">
              <span className="h-px flex-1 bg-border" /> or <span className="h-px flex-1 bg-border" />
            </div>

            <form onSubmit={withPassword} className="space-y-3">
              <label className="block">
                <span className="text-mono-xs text-muted-foreground">Email</span>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="mt-1 block w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 placeholder:text-muted-foreground/40 transition-colors"
                />
              </label>
              <label className="block">
                <span className="text-mono-xs text-muted-foreground">Password</span>
                <div className="relative mt-1">
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    minLength={6}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    autoComplete={mode === "signin" ? "current-password" : "new-password"}
                    className="block w-full rounded-lg border border-border bg-surface px-3 py-2.5 pr-11 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/25 placeholder:text-muted-foreground/40 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword((v) => !v)}
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    title={showPassword ? "Hide password" : "Show password"}
                    className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </label>
              <button
                type="submit"
                disabled={busy}
                className="btn-hero w-full disabled:opacity-50 mt-1 active:scale-[0.98] transition-transform"
              >
                {busy ? "…" : mode === "signin" ? "Sign in" : "Create account"}
              </button>
            </form>

            <button
              type="button"
              onClick={() => setMode(mode === "signin" ? "signup" : "signin")}
              className="mt-4 w-full text-center text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {mode === "signin" ? "Need an account? Sign up" : "Have an account? Sign in"}
            </button>
          </div>

          {/* Guest mode card */}
          <div className="rounded-xl border border-border/40 bg-surface/40 p-4 text-center backdrop-blur-sm">
            <div className="mb-2 flex items-center justify-center gap-2">
              <Sparkles className="h-3.5 w-3.5 text-primary" />
              <span className="text-sm font-medium">Just exploring?</span>
            </div>
            <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
              Try the Jarvis console in guest mode — no account needed. Data resets on refresh.
            </p>
            <button
              onClick={asGuest}
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition-all hover:bg-primary/10 hover:border-primary/50 active:scale-[0.98]"
            >
              Explore as Guest <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
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
