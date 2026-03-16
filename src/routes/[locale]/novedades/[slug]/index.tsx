import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getBlogPostBySlug, getBlogPostContent, formatDate, blogPosts, categoryIcons, categoryGradients } from "~/data/blog";
import type { ContentBlock } from "~/data/blog";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

export const useBlogPost = routeLoader$(({ params, status }) => {
  const post = getBlogPostBySlug(params.slug);
  if (!post) {
    status(404);
    return null;
  }
  return post;
});

const ui = (locale: Locale) => {
  const c = {
    en: {
      news: "News",
      notFound: "Article Not Found",
      notFoundText: "The article you're looking for doesn't exist.",
      backToNews: "Back to News",
      minRead: "min read",
      shareTitle: "Share this article",
      relatedTitle: "Related Articles",
      readMore: "Read more",
      ctaTitle: "Stay ahead of the curve",
      ctaSub: "Subscribe to our insights or get in touch to discuss how we can help your business.",
      contactUs: "Contact Us",
      viewAll: "View All News",
    },
    es: {
      news: "Novedades",
      notFound: "Articulo No Encontrado",
      notFoundText: "El articulo que buscas no existe.",
      backToNews: "Volver a Novedades",
      minRead: "min de lectura",
      shareTitle: "Comparte este articulo",
      relatedTitle: "Articulos Relacionados",
      readMore: "Leer mas",
      ctaTitle: "Mantente a la vanguardia",
      ctaSub: "Suscribete a nuestros insights o contactanos para discutir como podemos ayudar a tu negocio.",
      contactUs: "Contactanos",
      viewAll: "Ver Todas las Novedades",
    },
    fr: {
      news: "Actualites",
      notFound: "Article Non Trouve",
      notFoundText: "L'article que vous recherchez n'existe pas.",
      backToNews: "Retour aux Actualites",
      minRead: "min de lecture",
      shareTitle: "Partager cet article",
      relatedTitle: "Articles Associes",
      readMore: "Lire la suite",
      ctaTitle: "Gardez une longueur d'avance",
      ctaSub: "Abonnez-vous a nos analyses ou contactez-nous pour discuter de la maniere dont nous pouvons aider votre entreprise.",
      contactUs: "Contactez-nous",
      viewAll: "Voir Toutes les Actualites",
    },
  };
  return c[locale as keyof typeof c] || c.en;
};

export default component$(() => {
  const data = useBlogPost();
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const t = ui(locale);
  const lp = (path: string) => `/${locale}${path}`;

  if (!data.value) {
    return (
      <div class="flex min-h-[60vh] items-center justify-center pt-16">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-heading">{t.notFound}</h1>
          <p class="mt-4 text-text">{t.notFoundText}</p>
          <a
            href={lp("/novedades/")}
            class="mt-6 inline-flex rounded-md bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
          >
            {t.backToNews}
          </a>
        </div>
      </div>
    );
  }

  const post = data.value;
  const p = getBlogPostContent(post, locale);

  // Get related posts (same category, excluding current)
  const related = blogPosts
    .filter((bp) => bp.slug !== post.slug && bp.category === post.category)
    .slice(0, 2);

  return (
    <main id="main-content" class="pt-16">
      {/* Hero */}
      <section class="bg-[#080F1E] pt-20 pb-16">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2 text-sm text-white/40">
            <a href={lp("/novedades/")} class="transition-colors hover:text-white/70">
              {t.news}
            </a>
            <span>/</span>
            <span class="text-white/60">{p.categoryLabel}</span>
          </div>
          <div class="mt-6 flex items-center gap-3">
            <span class="rounded-full bg-red/20 px-3 py-1 text-xs font-semibold text-red">
              {p.categoryLabel}
            </span>
            <span class="text-sm text-white/40">
              {post.readingTime} {t.minRead}
            </span>
          </div>
          <h1 class="mt-4 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl leading-tight">
            {p.title}
          </h1>
          <p class="mt-5 text-lg leading-relaxed text-white/60">{p.excerpt}</p>
          <div class="mt-6 flex items-center gap-4 text-sm text-white/40">
            <span>{post.author}</span>
            <span>|</span>
            <time dateTime={post.date}>{formatDate(post.date, locale)}</time>
          </div>
        </div>
      </section>

      {/* Featured image */}
      <section class="bg-white pt-10">
        <div class="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          {post.image.startsWith("http") ? (
            <img
              src={post.image}
              alt={p.title}
              width={1200}
              height={675}
              class="aspect-[16/9] w-full rounded-2xl object-cover shadow-xl"
              loading="eager"
            />
          ) : (
            <div class={`overflow-hidden rounded-2xl shadow-xl aspect-[16/9] flex items-center justify-center bg-gradient-to-br ${categoryGradients[post.category] || "from-gray-600 to-gray-800"}`}>
              <svg aria-hidden="true" class="h-24 w-24 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={categoryIcons[post.category] || categoryIcons.ai} />
              </svg>
            </div>
          )}
        </div>
      </section>

      {/* Article body */}
      <article class="py-16 lg:py-20">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div class="max-w-none">
            {p.body.map((block: ContentBlock, i: number) => {
              switch (block.type) {
                case "heading":
                  return (
                    <h2 key={i} class="mt-10 mb-4 text-2xl font-extrabold text-heading sm:text-3xl">
                      {block.text}
                    </h2>
                  );
                case "paragraph":
                  return (
                    <p key={i} class="mb-6 text-base leading-relaxed text-text">
                      {block.text}
                    </p>
                  );
                case "list":
                  return (
                    <div key={i} class="mb-8">
                      {block.title && (
                        <p class="mb-3 text-base font-semibold text-heading">{block.title}</p>
                      )}
                      <ul class="space-y-3">
                        {block.items.map((item, j) => (
                          <li key={j} class="flex items-start gap-3 text-base leading-relaxed text-text">
                            <svg class="mt-1.5 h-4 w-4 shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                case "highlight":
                  return (
                    <div key={i} class="my-8 rounded-xl border-l-4 border-red bg-red/5 p-6">
                      <p class="text-base font-medium leading-relaxed text-heading italic">
                        {block.text}
                      </p>
                    </div>
                  );
                case "cta":
                  return (
                    <div key={i} class="my-10 flex justify-center">
                      <a
                        href={block.href.startsWith("/") ? lp(block.href) : block.href}
                        class="inline-flex items-center gap-2 rounded-md bg-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-red-hover"
                      >
                        {block.text}
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  );
                default:
                  return null;
              }
            })}
          </div>
        </div>
      </article>

      {/* Related posts */}
      {related.length > 0 && (
        <section class="border-t border-heading/10 py-16 lg:py-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-2xl font-extrabold text-heading">{t.relatedTitle}</h2>
            <div class="mt-8 grid gap-8 sm:grid-cols-2">
              {related.map((rel) => {
                const rc = getBlogPostContent(rel, locale);
                return (
                  <a
                    key={rel.slug}
                    href={lp(`/novedades/${rel.slug}/`)}
                    class="group flex flex-col overflow-hidden rounded-2xl border border-heading/10 bg-white transition-colors hover:bg-section-bg"
                  >
                    <div class={`aspect-[16/9] flex items-center justify-center bg-gradient-to-br ${categoryGradients[rel.category] || "from-gray-600 to-gray-800"}`}>
                      <svg aria-hidden="true" class="h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={categoryIcons[rel.category] || categoryIcons.ai} />
                      </svg>
                    </div>
                    <div class="p-6">
                      <span class="rounded-full bg-red/10 px-3 py-1 text-xs font-semibold text-red">
                        {rc.categoryLabel}
                      </span>
                      <h3 class="mt-3 text-lg font-bold text-heading group-hover:text-red transition-colors">
                        {rc.title}
                      </h3>
                      <p class="mt-2 text-sm text-text/70">{rc.excerpt}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section class="bg-[#080F1E] py-16">
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p class="mt-4 text-lg text-white/60">{t.ctaSub}</p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={lp("/contact/")}
              class="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-red transition-all hover:bg-dark hover:text-white"
            >
              {t.contactUs}
            </a>
            <a
              href={lp("/novedades/")}
              class="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              {t.viewAll}
            </a>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ resolveValue, params }) => {
  const post = resolveValue(useBlogPost);
  if (!post) return { title: "Article Not Found | Eurosynapse" };

  const locale = (params.locale || "en") as Locale;
  const p = getBlogPostContent(post, locale);
  const siteUrl = "https://eurosynapse.com";
  const articleUrl = `${siteUrl}/${locale}/novedades/${post.slug}/`;

  return {
    title: p.seoTitle,
    meta: [
      { name: "description", content: p.seoDescription },
      { property: "og:title", content: p.ogTitle },
      { property: "og:description", content: p.ogDescription },
      { property: "og:type", content: "article" },
      { property: "og:url", content: articleUrl },
      { property: "og:image", content: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}` },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "675" },
      { property: "article:published_time", content: post.date },
      { property: "article:author", content: post.author },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: p.ogTitle },
      { name: "twitter:description", content: p.ogDescription },
      { name: "twitter:image", content: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}` },
    ],
    links: [
      { rel: "canonical", href: articleUrl },
    ],
    scripts: [
      {
        type: "application/ld+json",
        props: {},
        script: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: p.title,
          description: p.excerpt,
          image: post.image.startsWith("http") ? post.image : `${siteUrl}${post.image}`,
          datePublished: post.date,
          author: {
            "@type": "Organization",
            name: post.author,
            url: siteUrl,
          },
          publisher: {
            "@type": "Organization",
            name: "Eurosynapse",
            url: siteUrl,
            logo: {
              "@type": "ImageObject",
              url: `${siteUrl}/eurosynapse-dark.png`,
            },
          },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": articleUrl,
          },
        }),
      },
    ],
  };
};
