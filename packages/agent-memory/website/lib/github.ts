import "server-only";

export interface RepoStats {
  stars: number;
  forks: number;
  issues: number;
}

const REPO = "rohitg00/agentmemory";

export async function fetchRepoStats(): Promise<RepoStats> {
  const fallback: RepoStats = { stars: 0, forks: 0, issues: 0 };
  try {
    const headers: Record<string, string> = {
      accept: "application/vnd.github+json",
      "user-agent": "agentmemory-website",
    };
    if (process.env.GITHUB_TOKEN) {
      headers.authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
    }
    const res = await fetch(`https://api.github.com/repos/${REPO}`, {
      headers,
      next: { revalidate: 3600 },
    });
    if (!res.ok) return fallback;
    const data = (await res.json()) as {
      stargazers_count?: number;
      forks_count?: number;
      open_issues_count?: number;
    };
    return {
      stars: data.stargazers_count ?? 0,
      forks: data.forks_count ?? 0,
      issues: data.open_issues_count ?? 0,
    };
  } catch {
    return fallback;
  }
}
