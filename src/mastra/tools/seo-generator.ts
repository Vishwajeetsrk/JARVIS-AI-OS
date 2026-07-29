import { z } from 'zod';

export const seoGeneratorSchema = z.object({
  appName: z.string(),
  baseUrl: z.string().url(),
  routes: z.array(z.string()),
  description: z.string(),
  keywords: z.array(z.string()),
});

export type SeoGeneratorPayload = z.infer<typeof seoGeneratorSchema>;

export interface SeoGeneratorResult {
  sitemapXml: string;
  robotsTxt: string;
  jsonLdSchema: string;
  timestamp: string;
}

export async function generateSeoMetadata(payload: SeoGeneratorPayload): Promise<SeoGeneratorResult> {
  console.log(`[seo-agent Generator] Generating technical SEO metadata for application '${payload.appName}'...`);

  // Generate sitemap.xml
  const sitemapUrls = payload.routes
    .map(r => `  <url>\n    <loc>${payload.baseUrl}${r}</loc>\n    <changefreq>daily</changefreq>\n  </url>`)
    .join('\n');
  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapUrls}\n</urlset>`;

  // Generate robots.txt
  const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${payload.baseUrl}/sitemap.xml`;

  // Generate JSON-LD Schema
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: payload.appName,
    url: payload.baseUrl,
    description: payload.description,
    keywords: payload.keywords.join(', '),
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'All',
  };

  return {
    sitemapXml,
    robotsTxt,
    jsonLdSchema: JSON.stringify(jsonLd, null, 2),
    timestamp: new Date().toISOString(),
  };
}
