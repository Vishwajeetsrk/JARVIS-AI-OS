import React, { useState } from "react";
import { Check, Sparkles, Zap, Shield, Rocket } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface PricingTier {
  id: string;
  name: string;
  badge?: string;
  description: string;
  monthlyPrice: number;
  annualPrice: number;
  popular?: boolean;
  features: string[];
  cta: string;
  icon: React.ElementType;
}

const DEFAULT_TIERS: PricingTier[] = [
  {
    id: "developer",
    name: "Developer Core",
    description: "Ideal for individual engineers and rapid local prototyping with autonomous agents.",
    monthlyPrice: 19,
    annualPrice: 15,
    popular: false,
    icon: Zap,
    features: [
      "100+ Live UI Components & Presets",
      "Full Monaco Code Editor + Live Preview",
      "4-Tier Persistent Agent Memory",
      "Standard Web Speech Voice Control",
      "Community GitHub Integrations",
    ],
    cta: "Start Free Prototyping",
  },
  {
    id: "pro",
    name: "Autonomous Pro",
    badge: "Most Popular",
    description: "Uncapped multi-agent coordination with full MCP tools and cloud auto-deploys.",
    monthlyPrice: 49,
    annualPrice: 39,
    popular: true,
    icon: Rocket,
    features: [
      "Everything in Developer Core",
      "Unlimited Multi-Agent Pipelines",
      "Deep MCP Connector Gateway",
      "High-FPS 3D Avatars & Hologram HUD",
      "Automated Self-Healing Code AST Fixer",
      "Priority 24/7 Agent Diagnostics",
    ],
    cta: "Deploy Autonomous Pro",
  },
  {
    id: "enterprise",
    name: "Enterprise Grid",
    description: "Dedicated neural cluster, custom LLM fine-tuning, and on-premise memory isolation.",
    monthlyPrice: 149,
    annualPrice: 119,
    popular: false,
    icon: Shield,
    features: [
      "Everything in Autonomous Pro",
      "Dedicated Private VPC / Node Clusters",
      "Custom LoRA & Fine-Tuned Weights",
      "SLA 99.99% Uptime Guarantee",
      "Zero-Retention Data Security Vault",
      "Dedicated Solutions Architect",
    ],
    cta: "Contact Enterprise",
  },
];

export function InteractivePricing({
  tiers = DEFAULT_TIERS,
  className,
}: {
  tiers?: PricingTier[];
  className?: string;
}) {
  const [annual, setAnnual] = useState(true);

  return (
    <div className={cn("flex flex-col items-center justify-center p-4 sm:p-8", className)}>
      {/* Header & Billing Toggle */}
      <div className="text-center max-w-xl mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#e87a3a] mb-3">
          <Sparkles className="h-3.5 w-3.5" />
          <span>Flexible Scalability</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Transparent, Predictive Pricing
        </h2>
        <p className="text-xs sm:text-sm text-zinc-400 mt-2">
          Scale effortlessly from individual hacker tools to enterprise multi-agent clusters.
        </p>

        {/* Toggle Pill */}
        <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-zinc-900/80 p-1">
          <button
            onClick={() => setAnnual(false)}
            className={cn(
              "rounded-full px-4 py-1.5 text-xs font-medium transition-all",
              !annual ? "bg-white text-black font-semibold shadow" : "text-zinc-400 hover:text-white"
            )}
          >
            Monthly
          </button>
          <button
            onClick={() => setAnnual(true)}
            className={cn(
              "flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-medium transition-all",
              annual ? "bg-[#e87a3a] text-white font-semibold shadow" : "text-zinc-400 hover:text-white"
            )}
          >
            <span>Annual</span>
            <span className="rounded-full bg-black/30 px-1.5 py-0.2 text-[10px] text-white font-mono">
              Save 20%
            </span>
          </button>
        </div>
      </div>

      {/* Grid of Pricing Cards */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3 max-w-5xl w-full">
        {tiers.map((tier) => {
          const Icon = tier.icon;
          const price = annual ? tier.annualPrice : tier.monthlyPrice;

          return (
            <motion.div
              key={tier.id}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className={cn(
                "relative flex flex-col justify-between rounded-2xl border p-6 transition-all",
                tier.popular
                  ? "border-[#e87a3a]/60 bg-gradient-to-b from-[#e87a3a]/10 via-zinc-900/90 to-black shadow-[0_0_30px_rgba(232,122,58,0.15)]"
                  : "border-white/10 bg-zinc-900/50 hover:border-white/20"
              )}
            >
              {tier.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[#e87a3a] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white shadow">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="rounded-xl border border-white/10 bg-white/[0.05] p-2.5">
                    <Icon className="h-5 w-5 text-[#e87a3a]" />
                  </div>
                  <h3 className="font-bold text-lg text-white">{tier.name}</h3>
                </div>

                <p className="text-xs text-zinc-400 min-h-[36px] mb-6 leading-relaxed">
                  {tier.description}
                </p>

                <div className="flex items-baseline gap-1 mb-6 border-b border-white/[0.08] pb-6">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono">
                    ${price}
                  </span>
                  <span className="text-xs text-zinc-400 font-mono">/ user / mo</span>
                </div>

                {/* Feature List */}
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-zinc-300">
                      <Check className="h-4 w-4 text-[#e87a3a] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                className={cn(
                  "w-full rounded-xl py-2.5 text-xs font-semibold tracking-wide transition-all shadow-sm",
                  tier.popular
                    ? "bg-[#e87a3a] text-white hover:bg-[#e87a3a]/90 hover:shadow-[0_0_20px_rgba(232,122,58,0.4)]"
                    : "border border-white/10 bg-white/[0.04] text-zinc-200 hover:bg-white/10 hover:text-white"
                )}
              >
                {tier.cta}
              </button>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
