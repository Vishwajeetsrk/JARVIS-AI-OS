// GitHub connector: OAuth device-flow sign-in, repo creation, and direct push.
import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

const GH_API = "https://api.github.com";
const GH_HEADERS = (token: string, extra: Record<string, string> = {}) => ({
  Authorization: `Bearer ${token}`,
  Accept: "application/vnd.github+json",
  "User-Agent": "jarvis-ai-os",
  "X-GitHub-Api-Version": "2022-11-28",
  ...extra,
});

async function gh<T>(token: string, path: string, init?: RequestInit): Promise<T> {
  const r = await fetch(`${GH_API}${path}`, { ...init, headers: GH_HEADERS(token, (init?.headers as Record<string, string>) ?? {}) });
  if (!r.ok) {
    const body = await r.text().catch(() => "");
    throw new Error(`GitHub ${path} failed (${r.status}): ${body.slice(0, 200)}`);
  }
  return (await r.json()) as T;
}

async function getGithubToken(userId: string): Promise<string> {
  const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
  const { data } = await supabaseAdmin
    .from("connections")
    .select("access_token")
    .eq("user_id", userId)
    .eq("provider", "github")
    .maybeSingle();
  if (!data?.access_token) throw new Error("GitHub is not connected. Sign in or add a token in Connectors first.");
  return data.access_token;
}

// ── 1. Device-flow sign in ────────────────────────────────────────────────

/** Starts GitHub OAuth device flow. Shows a code the user enters at github.com/login/device. */
export const githubSignInStart = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const clientId = process.env.GITHUB_CLIENT_ID;
    if (!clientId) {
      return {
        ok: false as const,
        error:
          "GitHub OAuth is not configured on this server (GITHUB_CLIENT_ID env var). You can still connect with a personal access token in Connectors.",
      };
    }
    const r = await fetch("https://github.com/login/device/code", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ client_id: clientId, scope: "repo user workflow" }),
    });
    const d = (await r.json().catch(() => ({}))) as Record<string, string>;
    if (!r.ok || !d.device_code) return { ok: false as const, error: `Device flow failed (${r.status}): ${d.error_description ?? d.error ?? ""}` };
    return {
      ok: true as const,
      deviceCode: d.device_code,
      userCode: d.user_code,
      verificationUri: d.verification_uri ?? "https://github.com/login/device",
      expiresIn: Number(d.expires_in ?? 900),
      interval: Number(d.interval ?? 5),
    };
  });

/** Polls the device flow until the user authorizes, then stores the token. */
export const githubSignInPoll = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) => z.object({ deviceCode: z.string().min(1) }).parse(d))
  .handler(async ({ data, context }) => {
    const clientId = process.env.GITHUB_CLIENT_ID;
    if (!clientId) return { ok: false as const, error: "GITHUB_CLIENT_ID not configured." };
    const r = await fetch("https://github.com/login/oauth/access_token", {
      method: "POST",
      headers: { Accept: "application/json", "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        client_id: clientId,
        device_code: data.deviceCode,
        grant_type: "urn:ietf:params:oauth:grant-type:device_code",
      }),
    });
    const d = (await r.json().catch(() => ({}))) as Record<string, string>;
    if (d.error) {
      if (d.error === "authorization_pending" || d.error === "slow_down") return { ok: "pending" as const };
      if (d.error === "expired_token") return { ok: false as const, error: "The sign-in code expired. Start again." };
      return { ok: false as const, error: d.error_description ?? d.error };
    }
    if (!d.access_token) return { ok: "pending" as const };

    // Verify + label, then store.
    const user = await gh<{ login: string }>(d.access_token, "/user").catch(() => null);
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("connections").upsert(
      {
        user_id: context.userId,
        provider: "github",
        kind: "oauth",
        status: "connected",
        account_label: user?.login ?? "GitHub account",
        access_token: d.access_token,
      },
      { onConflict: "user_id,provider" },
    );
    if (error) return { ok: false as const, error: error.message };
    return { ok: true as const, login: user?.login ?? "GitHub account" };
  });

// ── 2. Repo creation ──────────────────────────────────────────────────────

export const githubCreateRepo = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({
      name: z.string().regex(/^[a-zA-Z0-9_.-]+$/).min(1).max(100),
      description: z.string().max(300).optional(),
      private: z.boolean().optional(),
      autoInit: z.boolean().optional(),
    }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const token = await getGithubToken(context.userId);
    const repo = await gh<{ full_name: string; html_url: string; default_branch: string }>(token, "/user/repos", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: data.name,
        description: data.description ?? "",
        private: data.private ?? false,
        auto_init: data.autoInit ?? true,
      }),
    });
    return { ok: true as const, fullName: repo.full_name, url: repo.html_url, branch: repo.default_branch };
  });

// ── 3. Direct push (Git Data API — real commits) ─────────────────────────

export interface PushFile {
  path: string;
  content: string;
}

async function pushFilesToRepo(
  token: string,
  fullRepo: string,
  files: PushFile[],
  message: string,
  branch = "main",
): Promise<{ commitSha: string; url: string }> {
  // Resolve the branch head.
  let headSha: string;
  try {
    const ref = await gh<{ object: { sha: string } }>(token, `/repos/${fullRepo}/git/ref/heads/${branch}`);
    headSha = ref.object.sha;
  } catch {
    // Try master, else create the branch from the default branch.
    try {
      const ref = await gh<{ object: { sha: string } }>(token, `/repos/${fullRepo}/git/ref/heads/master`);
      headSha = ref.object.sha;
      branch = "master";
    } catch {
      throw new Error(`Repo ${fullRepo} has no ${branch} branch to push to.`);
    }
  }

  // 1. Blobs.
  const blobs: Array<{ path: string; sha: string }> = [];
  for (const f of files) {
    const b = await gh<{ sha: string }>(token, `/repos/${fullRepo}/git/blobs`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ content: f.content, encoding: "utf-8" }),
    });
    blobs.push({ path: f.path, sha: b.sha });
  }

  // 2. Tree (merge on top of current HEAD so existing files stay).
  const tree = await gh<{ sha: string }>(token, `/repos/${fullRepo}/git/trees`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      base_tree: headSha,
      tree: blobs.map((b) => ({ path: b.path, mode: "100644", type: "blob", sha: b.sha })),
    }),
  });

  // 3. Commit.
  const commit = await gh<{ sha: string }>(token, `/repos/${fullRepo}/git/commits`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message, tree: tree.sha, parents: [headSha] }),
  });

  // 4. Update ref.
  await gh(token, `/repos/${fullRepo}/git/refs/heads/${branch}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sha: commit.sha, force: false }),
  });

  return { commitSha: commit.sha, url: `https://github.com/${fullRepo}/tree/${branch}` };
}

/** Push a set of files to a repo. If the repo doesn't exist, creates it first. */
export const githubPushFiles = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({
      repo: z.string().regex(/^[a-zA-Z0-9_.-]+\/[a-zA-Z0-9_.-]+$/).describe("owner/name (must exist)"),
      files: z.array(z.object({ path: z.string().min(1), content: z.string() })).min(1).max(200),
      message: z.string().min(1).max(200).default("Update via Jarvis AI OS"),
      branch: z.string().default("main"),
    }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const token = await getGithubToken(context.userId);
    const { commitSha, url } = await pushFilesToRepo(token, data.repo, data.files, data.message, data.branch);
    return { ok: true as const, repo: data.repo, commitSha, url, fileCount: data.files.length };
  });

/** Create a repo (if needed) and push project files into it. */
export const githubPushProject = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .inputValidator((d) =>
    z.object({
      projectId: z.string().uuid().optional(),
      buildId: z.string().uuid().optional(),
      repoName: z.string().regex(/^[a-zA-Z0-9_.-]+$/).min(1).max(100).describe("Repo name (new or existing, owner/repo allowed)"),
      description: z.string().max(300).optional(),
      private: z.boolean().optional(),
      commitMessage: z.string().optional(),
      includeLegal: z.boolean().optional(),
      includeBrand: z.boolean().optional(),
      html: z.string().optional().describe("Inline HTML to push instead"),
    }).parse(d),
  )
  .handler(async ({ data, context }) => {
    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const token = await getGithubToken(context.userId);

    // Collect the files (same bundle as exportProject).
    let html = data.html;
    let projectName = data.repoName;
    if (!html && data.buildId) {
      const { data: b } = await supabaseAdmin
        .from("project_builds")
        .select("html, name")
        .eq("id", data.buildId)
        .eq("user_id", context.userId)
        .maybeSingle();
      html = b?.html ?? undefined;
      if (b?.name) projectName = slugify(b.name);
    }
    if (!html && data.projectId) {
      const { data: b } = await supabaseAdmin
        .from("project_builds")
        .select("html")
        .eq("project_id", data.projectId)
        .eq("user_id", context.userId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();
      html = b?.html ?? undefined;
    }
    if (!html) throw new Error("No generated HTML found. Generate the site first (recreateDesign / saveProjectBuild) or pass html.");

    const files: PushFile[] = [
      { path: "index.html", content: html },
      {
        path: "vercel.json",
        content: JSON.stringify({ cleanUrls: true, headers: [{ source: "/(.*)", headers: [{ key: "X-Content-Type-Options", value: "nosniff" }, { key: "X-Frame-Options", value: "SAMEORIGIN" }, { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" }] }] }, null, 2),
      },
      {
        path: "netlify.toml",
        content: `[build]\n  publish = "."\n\n[[headers]]\n  for = "/*"\n  [headers.values]\n    X-Content-Type-Options = "nosniff"\n    X-Frame-Options = "SAMEORIGIN"\n    Referrer-Policy = "strict-origin-when-cross-origin"\n`,
      },
      {
        path: "README.md",
        content: `# ${projectName}\n\n> Pushed by Jarvis AI OS\n\nGenerated site. Deploy on Vercel by importing this repo at vercel.com/new.\n`,
      },
    ];

    if (data.includeBrand !== false) {
      const { data: assets } = await supabaseAdmin
        .from("project_brand_assets")
        .select("asset_type, content")
        .eq("user_id", context.userId)
        .order("created_at", { ascending: false })
        .limit(50);
      if (assets) {
        for (const a of assets) {
          if (a.asset_type === "logo") files.push({ path: "assets/logo.svg", content: a.content });
          else if (a.asset_type === "favicon") files.push({ path: "assets/favicon.svg", content: a.content });
          else if (a.asset_type === "og-image") files.push({ path: "assets/og-image.svg", content: a.content });
        }
      }
    }
    if (data.includeLegal !== false) {
      const { data: legal } = await supabaseAdmin
        .from("project_legal_pages")
        .select("slug, html")
        .eq("user_id", context.userId)
        .limit(50);
      if (legal) for (const l of legal) files.push({ path: `legal/${l.slug}.html`, content: l.html });
    }

    // Existing repo or create?
    const fullRepo = data.repoName.includes("/") ? data.repoName : `${await getGithubLogin(token)}/${data.repoName}`;
    let created = false;
    let repoUrl: string;
    let branch = "main";
    try {
      const existing = await gh<{ html_url: string; default_branch: string }>(token, `/repos/${fullRepo}`);
      repoUrl = existing.html_url;
      branch = existing.default_branch;
    } catch {
      const repo = await gh<{ full_name: string; html_url: string; default_branch: string }>(token, "/user/repos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: data.repoName, description: data.description ?? "Created by Jarvis AI OS", private: data.private ?? false, auto_init: true }),
      });
      created = true;
      repoUrl = repo.html_url;
      branch = repo.default_branch;
    }

    const { commitSha, url } = await pushFilesToRepo(
      token,
      fullRepo,
      files,
      data.commitMessage ?? "Ship site via Jarvis AI OS",
      branch,
    );

    return { ok: true as const, repo: fullRepo, created, url: repoUrl, treeUrl: url, commitSha, fileCount: files.length };
  });

// ── helpers ───────────────────────────────────────────────────────────────

async function getGithubLogin(token: string): Promise<string> {
  const u = await gh<{ login: string }>(token, "/user");
  return u.login;
}

const slugify = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "").slice(0, 60) || "project";