import PageShell from "../components/PageShell";
import { BLOG_POSTS } from "../constants";

export function BlogPage() {
  return (
    <PageShell
      eyebrow="Blog"
      title="Insights for aspiring product leaders"
      description="Essays on portfolios, design systems, and the skills that separate senior ICs from directors."
    >
      <ul className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
        {BLOG_POSTS.map((post) => (
          <li
            key={post.title}
            className="flex flex-col gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-xs uppercase tracking-wider text-[#64CEFB]">{post.tag}</p>
              <h2 className="mt-1 text-base font-medium sm:text-lg">{post.title}</h2>
            </div>
            <time className="text-sm text-white/50">{post.date}</time>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}
