import { createFileRoute } from '@tanstack/react-router'
export const Route = createFileRoute("/api/sitemap")({
  server: {
    handlers: {
      GET: async () => {
        const base = "https://jarvisaios.vercel.app";
        const pages = [
          { loc: "/", priority: "1.0" },
          { loc: "/auth", priority: "0.5" },
          { loc: "/how-it-works", priority: "0.8" },
          { loc: "/skills", priority: "0.8" },
          { loc: "/projects", priority: "0.7" },
          { loc: "/console", priority: "0.3" },
        ];

        const urls = pages
          .map(
            (p) => `  <url>
    <loc>${base}${p.loc}</loc>
    <changefreq>weekly</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
          )
          .join("\n");

        const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

        return new Response(xml, {
          status: 200,
          headers: { "content-type": "application/xml; charset=utf-8" },
        });
      },
    },
  },
});
