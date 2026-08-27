import React, { useState } from "react";
import { Star, MessageSquare, ThumbsUp, Sparkles, CheckCircle2, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating: number;
  content: string;
  verified?: boolean;
  tag: string;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "t1",
    author: "Elena Rostova",
    role: "VP of Engineering",
    company: "NeuralMesh Labs",
    rating: 5,
    tag: "Multi-Agent System",
    verified: true,
    content:
      "JARVIS AI OS transformed our sprint velocity. The autonomous CEO-to-deploy workflow resolved 80% of our code review cycles without manual intervention.",
  },
  {
    id: "t2",
    author: "Marcus Chen",
    role: "Founding Architect",
    company: "Aetherial Protocol",
    rating: 5,
    tag: "Design & Motion",
    verified: true,
    content:
      "The Aceternity UI and Learnify design integration allows our designers to live-preview full code implementations directly inside the browser with zero build setup.",
  },
  {
    id: "t3",
    author: "Sarah Jenkins",
    role: "Lead DevOps Engineer",
    company: "Vortex Cloud",
    rating: 5,
    tag: "Self-Healing AST",
    verified: true,
    content:
      "The 4-tier persistent memory engine actually remembers team conventions and architectural decisions across weeks of conversation. Absolute game changer.",
  },
];

export function InteractiveTestimonials({
  testimonials = DEFAULT_TESTIMONIALS,
  className,
}: {
  testimonials?: TestimonialItem[];
  className?: string;
}) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [feedbackRating, setFeedbackRating] = useState(5);
  const [feedbackSent, setFeedbackSent] = useState(false);

  return (
    <div className={cn("flex flex-col items-center justify-center p-4 sm:p-8", className)}>
      <div className="text-center max-w-xl mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs text-[#e87a3a] mb-3">
          <Star className="h-3.5 w-3.5 fill-[#e87a3a]" />
          <span>Community Reviews & Feedback</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
          Loved by Engineers & Architects
        </h2>
      </div>

      {/* Testimonials Carousel Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl w-full mb-10">
        {testimonials.map((item, idx) => (
          <motion.div
            key={item.id}
            whileHover={{ y: -3 }}
            onClick={() => setActiveIdx(idx)}
            className={cn(
              "flex flex-col justify-between rounded-2xl border p-5 transition-all cursor-pointer",
              activeIdx === idx
                ? "border-[#e87a3a]/60 bg-gradient-to-b from-[#e87a3a]/10 via-zinc-900 to-black shadow-[0_0_25px_rgba(232,122,58,0.12)]"
                : "border-white/10 bg-zinc-900/40 hover:border-white/20"
            )}
          >
            <div>
              {/* Stars & Tag */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex gap-1">
                  {Array.from({ length: item.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="rounded-full bg-white/[0.05] border border-white/10 px-2 py-0.5 text-[10px] text-zinc-400 font-mono">
                  {item.tag}
                </span>
              </div>

              <p className="text-xs sm:text-[13px] leading-relaxed text-zinc-300 font-sans mb-6">
                "{item.content}"
              </p>
            </div>

            {/* Author Meta */}
            <div className="flex items-center gap-3 border-t border-white/[0.06] pt-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-[#e87a3a] to-amber-500 text-xs font-bold text-white uppercase">
                {item.author.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-xs font-semibold text-white truncate">{item.author}</h4>
                  {item.verified && (
                    <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
                  )}
                </div>
                <p className="text-[11px] text-zinc-400 truncate">
                  {item.role} · {item.company}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Interactive Quick Feedback Widget */}
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900/60 p-5 text-center backdrop-blur-md">
        <h4 className="text-sm font-semibold text-white mb-1 flex items-center justify-center gap-2">
          <MessageSquare className="h-4 w-4 text-[#e87a3a]" /> Rate Your Experience
        </h4>
        <p className="text-xs text-zinc-400 mb-4">
          Help us tune the autonomous agents and UI animations.
        </p>

        {feedbackSent ? (
          <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 py-3 text-xs text-emerald-400 font-medium">
            <ThumbsUp className="h-4 w-4" /> Thank you! Your feedback has been stored in agent memory.
          </div>
        ) : (
          <div className="flex flex-col items-center gap-3">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setFeedbackRating(star)}
                  className="p-1 transition-transform hover:scale-125"
                  aria-label={`Rate ${star} stars`}
                >
                  <Star
                    className={cn(
                      "h-6 w-6 transition-colors",
                      star <= feedbackRating
                        ? "fill-amber-400 text-amber-400"
                        : "text-zinc-600 hover:text-zinc-400"
                    )}
                  />
                </button>
              ))}
            </div>
            <button
              onClick={() => setFeedbackSent(true)}
              className="mt-1 rounded-xl bg-[#e87a3a] px-5 py-1.5 text-xs font-semibold text-white hover:bg-[#e87a3a]/90 transition-all shadow-sm"
            >
              Submit Rating ({feedbackRating}/5)
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
