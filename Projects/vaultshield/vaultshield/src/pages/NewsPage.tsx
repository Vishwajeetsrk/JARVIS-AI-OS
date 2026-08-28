export function NewsPage() {
  const posts = [
    {
      date: "March 2026",
      title: "Passkey unlock on desktop extensions",
      body: "Sign in with device biometrics—no master password re-entry on trusted machines.",
    },
    {
      date: "February 2026",
      title: "Family vault sharing improvements",
      body: "Granular roles let guardians approve teen account changes.",
    },
    {
      date: "January 2026",
      title: "Security audit published",
      body: "Independent review confirms zero-knowledge architecture end-to-end.",
    },
  ];

  return (
    <main className="relative z-10 mx-auto max-w-[1280px] px-5 py-16 sm:px-8">
      <section id="news" className="scroll-mt-24">
        <h1
          className="mb-4"
          style={{ fontFamily: "var(--font-heading)", fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
        >
          News
        </h1>
        <p className="mb-10 max-w-xl opacity-80">
          Product updates and security advisories from the VaultShield team.
        </p>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.title} className="rounded-xl border border-[#192837]/10 bg-white/50 p-5">
              <p className="text-xs font-medium uppercase tracking-wide opacity-60">{post.date}</p>
              <h2 className="mt-2 text-lg font-semibold">{post.title}</h2>
              <p className="mt-2 text-sm opacity-80">{post.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
