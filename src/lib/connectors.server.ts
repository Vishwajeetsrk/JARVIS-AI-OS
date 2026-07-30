// Server-only: real credential verification + provider API helpers.
export type VerifyResult = { ok: true; label: string } | { ok: false; error: string };

const json = async (res: Response) => {
  try {
    return (await res.json()) as Record<string, unknown>;
  } catch {
    return {};
  }
};

export async function verifyCredential(provider: string, credential: string): Promise<VerifyResult> {
  try {
    switch (provider) {
      case "github": {
        const r = await fetch("https://api.github.com/user", {
          headers: { Authorization: `Bearer ${credential}`, Accept: "application/vnd.github+json", "User-Agent": "jarvis" },
        });
        if (!r.ok) return { ok: false, error: `GitHub rejected the token (${r.status})` };
        const d = await json(r);
        return { ok: true, label: String(d.login ?? "GitHub account") };
      }
      case "slack": {
        const r = await fetch("https://slack.com/api/auth.test", {
          method: "POST",
          headers: { Authorization: `Bearer ${credential}`, "Content-Type": "application/x-www-form-urlencoded" },
        });
        const d = await json(r);
        if (!d.ok) return { ok: false, error: `Slack: ${String(d.error ?? r.status)}` };
        return { ok: true, label: `${d.team ?? "Slack"} · ${d.user ?? ""}`.trim() };
      }
      case "figma": {
        const r = await fetch("https://api.figma.com/v1/me", { headers: { "X-Figma-Token": credential } });
        if (!r.ok) return { ok: false, error: `Figma rejected the token (${r.status})` };
        const d = await json(r);
        return { ok: true, label: String(d.email ?? d.handle ?? "Figma account") };
      }
      case "notion": {
        const r = await fetch("https://api.notion.com/v1/users/me", {
          headers: { Authorization: `Bearer ${credential}`, "Notion-Version": "2022-06-28" },
        });
        if (!r.ok) return { ok: false, error: `Notion rejected the secret (${r.status})` };
        const d = await json(r);
        return { ok: true, label: String((d as { name?: string }).name ?? "Notion integration") };
      }
      case "gmail":
      case "gcal": {
        const r = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: { Authorization: `Bearer ${credential}` },
        });
        if (!r.ok) return { ok: false, error: `Google rejected the access token (${r.status})` };
        const d = await json(r);
        return { ok: true, label: String(d.email ?? "Google account") };
      }
      case "supabase": {
        const r = await fetch("https://api.supabase.com/v1/projects", {
          headers: { Authorization: `Bearer ${credential}` },
        });
        if (!r.ok) return { ok: false, error: `Supabase rejected the token (${r.status})` };
        const d = (await r.json()) as Array<{ name?: string }>;
        return { ok: true, label: `${d.length} project${d.length === 1 ? "" : "s"}` };
      }
      case "cloudflare": {
        const r = await fetch("https://api.cloudflare.com/client/v4/user/tokens/verify", {
          headers: { Authorization: `Bearer ${credential}` },
        });
        const d = await json(r);
        if (!r.ok || !d.success) return { ok: false, error: `Cloudflare rejected the token (${r.status})` };
        return { ok: true, label: "API token verified" };
      }
      case "brave-search": {
        const r = await fetch("https://api.search.brave.com/res/v1/web/search?q=jarvis&count=1", {
          headers: { "X-Subscription-Token": credential, Accept: "application/json" },
        });
        if (!r.ok) return { ok: false, error: `Brave rejected the token (${r.status})` };
        return { ok: true, label: "Search API verified" };
      }
      case "wolfram": {
        const r = await fetch(`https://api.wolframalpha.com/v1/result?appid=${encodeURIComponent(credential)}&i=2%2B2`);
        if (!r.ok) return { ok: false, error: `Wolfram rejected the App ID (${r.status})` };
        return { ok: true, label: "App ID verified" };
      }
      case "elevenlabs": {
        const r = await fetch("https://api.elevenlabs.io/v1/user", { headers: { "xi-api-key": credential } });
        if (!r.ok) return { ok: false, error: `ElevenLabs rejected the key (${r.status})` };
        return { ok: true, label: "Voice API verified" };
      }
      case "zapier": {
        if (!/^https:\/\/hooks\.zapier\.com\//.test(credential)) {
          return { ok: false, error: "Expected a https://hooks.zapier.com/... webhook URL" };
        }
        return { ok: true, label: "Catch Hook configured" };
      }
      case "guardrails":
      case "vector":
        return { ok: true, label: "Enabled locally" };
      default:
        return { ok: false, error: `Unknown provider: ${provider}` };
    }
  } catch (e) {
    return { ok: false, error: e instanceof Error ? e.message : "Verification failed" };
  }
}

// ── GitHub helpers used by the console + chat tools ────────────────────────
export type GithubRepo = {
  name: string;
  full_name: string;
  private: boolean;
  html_url: string;
  default_branch: string;
  open_issues_count: number;
  stargazers_count: number;
  description: string | null;
  updated_at: string;
};

export async function githubFetch<T>(token: string, path: string): Promise<T> {
  const r = await fetch(`https://api.github.com${path}`, {
    headers: { Authorization: `Bearer ${token}`, Accept: "application/vnd.github+json", "User-Agent": "jarvis" },
  });
  if (!r.ok) throw new Error(`GitHub ${path} failed (${r.status})`);
  return (await r.json()) as T;
}

export async function braveSearch(token: string, query: string, count = 5) {
  const r = await fetch(
    `https://api.search.brave.com/res/v1/web/search?q=${encodeURIComponent(query)}&count=${count}`,
    { headers: { "X-Subscription-Token": token, Accept: "application/json" } },
  );
  if (!r.ok) throw new Error(`Brave search failed (${r.status})`);
  const d = (await r.json()) as { web?: { results?: Array<{ title: string; url: string; description: string }> } };
  return (d.web?.results ?? []).map((x) => ({ title: x.title, url: x.url, snippet: x.description }));
}

export async function wolframAnswer(appId: string, query: string) {
  const r = await fetch(`https://api.wolframalpha.com/v1/result?appid=${encodeURIComponent(appId)}&i=${encodeURIComponent(query)}`);
  if (!r.ok) throw new Error(`Wolfram failed (${r.status})`);
  return await r.text();
}

export async function zapierTrigger(webhookUrl: string, payload: unknown) {
  const r = await fetch(webhookUrl, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  if (!r.ok) throw new Error(`Zapier webhook failed (${r.status})`);
  return { ok: true };
}
