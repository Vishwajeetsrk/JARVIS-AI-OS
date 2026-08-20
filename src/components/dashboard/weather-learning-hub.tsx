import { useState, useEffect } from "react";
import {
  Sun, CloudRain, Cloud, CloudSun, Wind, Droplets, Clock, Calendar,
  Code2, Database, Smartphone, Bot, TrendingUp, DollarSign, Sparkles,
  CheckCircle2, ArrowRight, BookOpen, Layers, ShieldCheck, Zap
} from "lucide-react";

interface WeatherData {
  temp: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  city: string;
}

export function WeatherLearningHub() {
  // Weather & Clock State
  const [timeStr, setTimeStr] = useState("");
  const [dateStr, setDateStr] = useState("");
  const [dayStr, setDayStr] = useState("");
  const [weather, setWeather] = useState<WeatherData>({
    temp: 28,
    condition: "Partly Cloudy",
    humidity: 65,
    windSpeed: 12,
    city: "New Delhi / Local",
  });

  // Track active tab
  const [hubTab, setHubTab] = useState<"learning" | "income" | "self-learn">("learning");

  // Clock Ticker
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTimeStr(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      setDateStr(now.toLocaleDateString([], { month: "short", day: "numeric", year: "numeric" }));
      setDayStr(now.toLocaleDateString([], { weekday: "long" }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // Fetch Live Weather (Open-Meteo free API)
  useEffect(() => {
    const fetchWeather = async () => {
      try {
        if ("geolocation" in navigator) {
          navigator.geolocation.getCurrentPosition(async (pos) => {
            const { latitude, longitude } = pos.coords;
            const res = await fetch(
              `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&hourly=relativehumidity_2m`
            );
            if (res.ok) {
              const data = await res.json();
              const cur = data.current_weather;
              const wCode = cur.weathercode;
              let cond = "Clear Sky";
              if (wCode >= 1 && wCode <= 3) cond = "Partly Cloudy";
              else if (wCode >= 45 && wCode <= 48) cond = "Foggy";
              else if (wCode >= 51 && wCode <= 67) cond = "Light Rain";
              else if (wCode >= 80) cond = "Rain Showers";

              setWeather({
                temp: Math.round(cur.temperature),
                condition: cond,
                humidity: 65,
                windSpeed: Math.round(cur.windspeed),
                city: "Your Location",
              });
            }
          });
        }
      } catch {
        // Fallback default
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      {/* 1. Header: Live Weather, Clock & Status Banner */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {/* Real-time Clock & Day */}
        <div className="flex items-center justify-between rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-5 shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
              <Clock className="h-4 w-4 text-primary" /> Live System Clock
            </div>
            <div className="mt-2 font-mono text-3xl font-bold tracking-tight text-foreground">
              {timeStr || "12:00:00 PM"}
            </div>
            <div className="mt-1 flex items-center gap-1.5 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>{dayStr}, {dateStr}</span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
            <Sparkles className="h-6 w-6 animate-pulse" />
          </div>
        </div>

        {/* Live Weather Forecast */}
        <div className="flex items-center justify-between rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-5 shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-amber-400">
              <CloudSun className="h-4 w-4 text-amber-400" /> Today's Weather & Climate
            </div>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="font-display text-3xl font-bold text-foreground">{weather.temp}°C</span>
              <span className="text-sm font-medium text-muted-foreground">{weather.condition}</span>
            </div>
            <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1">
                <Droplets className="h-3 w-3 text-cyan-400" /> {weather.humidity}% Hum
              </span>
              <span className="flex items-center gap-1">
                <Wind className="h-3 w-3 text-emerald-400" /> {weather.windSpeed} km/h
              </span>
            </div>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
            {weather.condition.includes("Rain") ? (
              <CloudRain className="h-6 w-6" />
            ) : weather.condition.includes("Cloud") ? (
              <Cloud className="h-6 w-6" />
            ) : (
              <Sun className="h-6 w-6 animate-spin" style={{ animationDuration: "20s" }} />
            )}
          </div>
        </div>

        {/* Autonomous Learning & Upgrade Health */}
        <div className="flex items-center justify-between rounded-2xl border border-border bg-gradient-to-br from-card to-surface p-5 shadow-lg">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-emerald-400">
              <ShieldCheck className="h-4 w-4 text-emerald-400" /> Daily Self-Upgrade Engine
            </div>
            <div className="mt-2 text-sm font-bold text-foreground">Jarvis Core MK-85</div>
            <div className="mt-1 text-xs text-muted-foreground">
              Self-learning active • 53 Design Systems • Vector Memory
            </div>
          </div>
          <span className="inline-flex h-3 w-3 items-center justify-center">
            <span className="absolute inline-flex h-3 w-3 animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
          </span>
        </div>
      </div>

      {/* 2. Interactive Full Stack Learning & Side Income Master Track */}
      <div className="rounded-2xl border border-border bg-card p-5">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400">
              <Code2 className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-semibold text-foreground">
                Master Track: Full Stack Development & Side Income Blueprint
              </h3>
              <p className="text-xs text-muted-foreground">
                Step-by-step progress tracking, building real-world projects & scaling passive revenue
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-border bg-surface p-1">
            <button
              onClick={() => setHubTab("learning")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                hubTab === "learning" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Full Stack Roadmap
            </button>
            <button
              onClick={() => setHubTab("income")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                hubTab === "income" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Side Income Plan
            </button>
            <button
              onClick={() => setHubTab("self-learn")}
              className={`rounded-md px-3 py-1.5 text-xs font-medium transition-colors ${
                hubTab === "self-learn" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Jarvis Self-Learning
            </button>
          </div>
        </div>

        {/* Tab 1: Full Stack Roadmap */}
        {hubTab === "learning" && (
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {FULL_STACK_MODULES.map((mod) => (
              <div
                key={mod.title}
                className="group relative flex flex-col justify-between rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40 hover:shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="rounded-md px-2 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider"
                      style={{ background: `${mod.color}20`, color: mod.color }}
                    >
                      {mod.stage}
                    </span>
                    <span className="font-mono text-xs font-semibold text-foreground">
                      {mod.progress}%
                    </span>
                  </div>

                  <h4 className="mt-3 font-medium text-foreground">{mod.title}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">{mod.description}</p>

                  {/* Milestones list */}
                  <ul className="mt-4 space-y-1.5 text-xs text-muted-foreground">
                    {mod.milestones.map((m, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 border-t border-border/50 pt-3">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-border">
                    <div
                      className="h-full rounded-full transition-all duration-500"
                      style={{ width: `${mod.progress}%`, background: mod.color }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Side Income Plan */}
        {hubTab === "income" && (
          <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {SIDE_INCOME_STREAMS.map((stream) => (
              <div
                key={stream.title}
                className="rounded-xl border border-border bg-surface p-4 transition-all hover:border-primary/40"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-4 w-4 text-emerald-400" />
                    <span className="font-medium text-foreground">{stream.title}</span>
                  </div>
                  <span className="rounded-md border border-emerald-500/30 bg-emerald-500/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-emerald-400">
                    {stream.potential}
                  </span>
                </div>

                <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{stream.strategy}</p>

                <div className="mt-4 space-y-1.5 rounded-lg border border-border/50 bg-card p-2.5 text-xs">
                  <div className="font-semibold text-foreground">Action Steps:</div>
                  {stream.actionSteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-1.5 text-muted-foreground">
                      <span className="h-1 w-1 rounded-full bg-primary" />
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Jarvis Self-Learning */}
        {hubTab === "self-learn" && (
          <div className="mt-5 space-y-4">
            <div className="rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Bot className="h-4 w-4 text-cyan-400" />
                  <span className="font-medium text-foreground">Continuous Self-Learning Loop</span>
                </div>
                <span className="text-xs font-semibold text-emerald-400">● 100% Autonomous</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                Whenever you speak or give a task, Jarvis analyzes requirements, researches best architectural patterns, creates reusable skills in `skills/`, and permanently indexes decisions in `~/.agent-memory/`.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              <div className="rounded-xl border border-border bg-card p-3.5">
                <div className="text-xs font-semibold uppercase text-primary">53 Design Systems</div>
                <p className="mt-1 text-xs text-muted-foreground">Tailwind, Framer Motion, Glassmorphism, Cyber & Minimal tokens ready for any web/mobile request.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3.5">
                <div className="text-xs font-semibold uppercase text-purple-400">Vector Knowledge</div>
                <p className="mt-1 text-xs text-muted-foreground">Supabase vector memory permanently stores mistakes, decisions, and patterns across reboots.</p>
              </div>
              <div className="rounded-xl border border-border bg-card p-3.5">
                <div className="text-xs font-semibold uppercase text-emerald-400">Tool Auto-Expansion</div>
                <p className="mt-1 text-xs text-muted-foreground">Dynamically compiles and installs new MCP tools and scripts as your project needs evolve.</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const FULL_STACK_MODULES = [
  {
    stage: "Module 1",
    title: "Modern Frontend Mastery",
    progress: 92,
    color: "#06b6d4",
    description: "React 19, TypeScript, Tailwind CSS, TanStack Router & 60fps Micro-Animations",
    milestones: ["Tailwind & CSS Tokens", "Responsive UI Components", "Framer Motion 3D Cards"],
  },
  {
    stage: "Module 2",
    title: "High-Performance Backend",
    progress: 88,
    color: "#8b5cf6",
    description: "Node.js, Express, Python FastAPI, WebSockets & Serverless Edge Functions",
    milestones: ["REST & GraphQL APIs", "JWT / OAuth Auth Flows", "WebSocket Realtime Stream"],
  },
  {
    stage: "Module 3",
    title: "Database & Cloud Architecture",
    progress: 85,
    color: "#10b981",
    description: "PostgreSQL, Supabase, Prisma, Redis Caching & Vector Embeddings",
    milestones: ["Postgres Schemas & RLS", "Vector Similarity Search", "Redis High-Speed Cache"],
  },
  {
    stage: "Module 4",
    title: "Mobile App Development",
    progress: 80,
    color: "#f59e0b",
    description: "Capacitor iOS & Android, React Native & Native Bridge Automation",
    milestones: ["Wardelio Mobile App", "Push Notifications & Camera", "3D Interactive Buttons"],
  },
  {
    stage: "Module 5",
    title: "Autonomous AI & MCP Agents",
    progress: 94,
    color: "#ec4899",
    description: "Mastra TS AI-OS Engine, Model Context Protocol (MCP) & Local Voice Engines",
    milestones: ["Deep Research Pipeline", "Autonomous File CRUD", "Groq Whisper Desktop Engine"],
  },
  {
    stage: "Module 6",
    title: "DevOps, CI/CD & Deployments",
    progress: 90,
    color: "#3b82f6",
    description: "Docker, GitHub Actions, Vercel, Nitro Server & Automated QA Gates",
    milestones: ["Automated Vitest Gates", "Zero-Downtime Deploys", "SEO & Sitemap Automation"],
  },
];

const SIDE_INCOME_STREAMS = [
  {
    title: "1. Client Workflow Automation (AgencyOS)",
    potential: "$2,000 - $5,000 / month",
    strategy: "Deliver automated Salesforce + Razorpay sync, n8n webhook pipelines, and CRM bridges for local businesses.",
    actionSteps: ["Package Salesforce sync tool", "Offer CRM automation service", "Set up recurring maintenance retainer"],
  },
  {
    title: "2. Micro-SaaS Platforms (Learnify & Wardelio)",
    potential: "$1,500 - $10,000 / month",
    strategy: "Launch subscription-based adaptive learning tools and mobile productivity apps with Razorpay / Stripe billing.",
    actionSteps: ["Deploy Wardelio on Play Store & App Store", "Add in-app subscriptions", "Run user acquisition loops"],
  },
  {
    title: "3. Premium Design Systems & UI Components",
    potential: "$500 - $3,000 / month",
    strategy: "Sell curated design system templates, Tailwind animated components, and dashboard kits to developers.",
    actionSteps: ["Bundle 53 design system kits", "List on Gumroad / ThemeForest", "Promote on Twitter & GitHub"],
  },
  {
    title: "4. Custom AI Agent Operating Systems",
    potential: "$3,000 - $8,000 / project",
    strategy: "Build and deploy custom voice-controlled AI OS assistants (like Jarvis) for executive founders and creators.",
    actionSteps: ["Demonstrate 3D Arc Reactor HUD", "Offer private desktop AI installation", "Provide enterprise knowledge integration"],
  },
];
