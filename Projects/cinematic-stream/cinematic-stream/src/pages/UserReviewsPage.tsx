import { Star } from "lucide-react";
import { StreamPageShell } from "../components/StreamPageShell";

const REVIEWS = [
  {
    user: "alex_m",
    title: "Step Through",
    excerpt: "The third act lands — rare for streaming originals.",
    score: "9/10",
  },
  {
    user: "filmgrid",
    title: "Northern Passage",
    excerpt: "Sound design carries every exterior shot.",
    score: "8/10",
  },
  {
    user: "scene_notes",
    title: "Glass Meridian",
    excerpt: "Scene-level notes on the rooftop sequence are worth it.",
    score: "8/10",
  },
  {
    user: "verified_cine",
    title: "Echo Division",
    excerpt: "Tight pacing, zero filler episodes.",
    score: "9/10",
  },
];

export function UserReviewsPage() {
  return (
    <StreamPageShell
      eyebrow="Community"
      title="User Reviews"
      description="Community ratings and scene-level notes from verified Framecast members."
    >
      <ul className="space-y-4">
        {REVIEWS.map((review) => (
          <li key={review.user} className="liquid-glass rounded-2xl p-5">
            <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
              <span className="text-sm font-medium text-white/80">@{review.user}</span>
              <span className="inline-flex items-center gap-1 text-xs font-medium">
                <Star className="h-3.5 w-3.5 fill-white" />
                {review.score}
              </span>
            </div>
            <h2 className="text-base font-medium">{review.title}</h2>
            <p className="mt-2 text-sm text-gray-400">{review.excerpt}</p>
          </li>
        ))}
      </ul>
    </StreamPageShell>
  );
}
