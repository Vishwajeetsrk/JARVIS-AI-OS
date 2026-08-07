// Vertical org-chart renderer for the agent crew.
// Lays agents out top-down from reports_to, draws connecting SVG lines.
import { useMemo } from "react";

export type OrgAgent = {
  id: string;
  name: string;
  role: string;
  color: string;
  icon: string | null;
  status: string;
  reports_to: string | null;
};

const CARD_W = 150;
const CARD_H = 44;
const GAP_X = 16;
const GAP_Y = 52;

export function OrgChart({ agents }: { agents: OrgAgent[] }) {
  const layout = useMemo(() => buildLayout(agents), [agents]);

  if (agents.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-border bg-surface/30 p-8 text-center text-xs text-muted-foreground">
        No agents yet. Create your first crew member.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto pb-4">
      <svg width={layout.width} height={layout.height} className="mx-auto" role="img" aria-label="Agent org chart">
        {layout.links.map((l, i) => (
          <path
            key={i}
            d={l}
            fill="none"
            stroke="currentColor"
            className="text-border"
            strokeWidth={1.5}
          />
        ))}
        {layout.nodes.map((n) => (
          <g key={n.agent.id}>
            <rect
              x={n.x}
              y={n.y}
              width={CARD_W}
              height={CARD_H}
              rx={10}
              fill="var(--color-card)"
              stroke={n.agent.color}
              strokeWidth={1.5}
            />
            <circle cx={n.x + 17} cy={n.y + CARD_H / 2} r={7} fill={n.agent.color} />
            <text
              x={n.x + 32}
              y={n.y + 18}
              fill="var(--color-foreground)"
              fontSize={12}
              fontWeight={600}
              fontFamily="var(--font-mono)"
            >
              {truncate(n.agent.name, 16)}
            </text>
            <text
              x={n.x + 32}
              y={n.y + 34}
              fill="var(--color-muted-foreground)"
              fontSize={10}
              fontFamily="var(--font-sans)"
            >
              {truncate(n.agent.role, 18)}
            </text>
            <circle cx={n.x + CARD_W - 11} cy={n.y + 12} r={4} fill={statusColor(n.agent.status)} />
          </g>
        ))}
      </svg>
    </div>
  );
}

type Node = { agent: OrgAgent; x: number; y: number };

function buildLayout(agents: OrgAgent[]): { nodes: Node[]; links: string[]; width: number; height: number } {
  const byId = new Map(agents.map((a) => [a.id, a]));
  const children = new Map<string, OrgAgent[]>();
  for (const a of agents) {
    const parent = a.reports_to && byId.has(a.reports_to) ? a.reports_to : "__root";
    const list = children.get(parent) ?? [];
    list.push(a);
    children.set(parent, list);
  }
  for (const list of children.values()) list.sort((a, b) => a.name.localeCompare(b.name));

  const nodes: Node[] = [];
  const links: string[] = [];

  function place(agents: OrgAgent[], y: number): { count: number } {
    if (agents.length === 0) return { count: 0 };
    const ids = agents.map((a) => a.id);
    // Recursively compute subtree widths so each branch centers on its parent.
    const widths: number[] = [];
    let total = 0;
    for (const id of ids) {
      const kids = children.get(id) ?? [];
      const sub = kids.length > 0 ? place(kids, y + GAP_Y) : { count: 1 };
      widths.push(sub.count);
      total += sub.count;
    }
    let cursorX = (total - 1) * (CARD_W + GAP_X) / 2;
    for (let i = 0; i < agents.length; i++) {
      const agent = agents[i]!;
      const w = widths[i]!;
      const cx = cursorX + ((w - 1) * (CARD_W + GAP_X)) / 2;
      nodes.push({ agent, x: cx, y });
      const kids = children.get(agent.id) ?? [];
      for (const k of kids) {
        const kn = nodes.find((n) => n.agent.id === k.id);
        if (kn) {
          links.push(connect(cx + CARD_W / 2, y + CARD_H, kn.x + CARD_W / 2, kn.y));
        }
      }
      cursorX += w * (CARD_W + GAP_X);
    }
    return { count: total };
  }

  const roots = children.get("__root") ?? [];
  place(roots, 16);
  const maxX = Math.max(0, ...nodes.map((n) => n.x + CARD_W));
  const maxY = Math.max(0, ...nodes.map((n) => n.y + CARD_H));
  return { nodes, links, width: Math.max(maxX + 16, 400), height: maxY + 16 };
}

function connect(x1: number, y1: number, x2: number, y2: number): string {
  const mid = y1 + (y2 - y1) / 2;
  return `M ${x1} ${y1} C ${x1} ${mid}, ${x2} ${mid}, ${x2} ${y2}`;
}

function truncate(s: string, n: number): string {
  return s.length > n ? s.slice(0, n - 1) + "…" : s;
}

function statusColor(status: string): string {
  switch (status) {
    case "running":
      return "#4ADE80";
    case "error":
      return "#EF4444";
    case "paused":
      return "#F59E0B";
    case "pending_approval":
      return "#A78BFA";
    default:
      return "#64748B";
  }
}
