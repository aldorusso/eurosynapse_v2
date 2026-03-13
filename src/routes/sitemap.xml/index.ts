import type { RequestHandler } from "@builder.io/qwik-city";
import { LOCALES } from "~/i18n/config";
import { getAllBlogSlugs } from "~/data/blog";

const SITE_URL = "https://eurosynapse.com";

const staticPaths = [
  "/",
  "/about/",
  "/careers/",
  "/contact/",
  "/industries/",
  "/novedades/",
  "/partners/",
  "/resources/",
  "/services/",
  "/success-stories/",
  "/privacy-policy/",
  "/terms/",
  "/cookie-policy/",
];

const serviceSlugs = [
  "artificial-intelligence",
  "digital-transformation",
  "data-analytics",
  "cybersecurity",
  "cloud-infrastructure",
  "enterprise-solutions",
];

export const onGet: RequestHandler = async ({ send }) => {
  const blogSlugs = getAllBlogSlugs();

  const allPaths = [
    ...staticPaths,
    ...serviceSlugs.map((s) => `/services/${s}/`),
    ...blogSlugs.map((s) => `/novedades/${s}/`),
  ];

  const urls = allPaths
    .map((path) => {
      const hreflangs = LOCALES.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE_URL}/${l}${path}" />`,
      ).join("\n");
      const xdefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}/en${path}" />`;

      return LOCALES.map(
        (l) => `  <url>
    <loc>${SITE_URL}/${l}${path}</loc>
${hreflangs}
${xdefault}
    <changefreq>weekly</changefreq>
    <priority>${path === "/" ? "1.0" : "0.8"}</priority>
  </url>`,
      ).join("\n");
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>`;

  send(
    new Response(xml, {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "public, max-age=3600",
      },
    }),
  );
};
