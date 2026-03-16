import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";
import { blogPosts, getBlogPostContent, formatDate, categoryIcons, categoryGradients } from "~/data/blog";

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Stay Updated",
      title: "News & Insights",
      subtitle:
        "The latest trends, strategies and insights in technology and digital transformation.",
      readMore: "Read more",
      readingTime: "min read",
      allCategories: "All",
    },
    es: {
      label: "Mantente Informado",
      title: "Novedades",
      subtitle:
        "Las ultimas tendencias, estrategias e insights en tecnologia y transformacion digital.",
      readMore: "Leer mas",
      readingTime: "min de lectura",
      allCategories: "Todos",
    },
    fr: {
      label: "Restez Informe",
      title: "Actualites",
      subtitle:
        "Les dernieres tendances, strategies et perspectives en technologie et transformation numerique.",
      readMore: "Lire la suite",
      readingTime: "min de lecture",
      allCategories: "Tous",
    },
  };
  return c[locale as keyof typeof c] || c.en;
};

export default component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const c = content(locale);
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <main id="main-content" class="pt-16">
      {/* Hero */}
      <section class="bg-[#080F1E] pt-20 pb-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">{c.label}</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">{c.title}</h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">{c.subtitle}</p>
        </div>
      </section>

      {/* Posts grid */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const p = getBlogPostContent(post, locale);
              return (
                <a
                  key={post.slug}
                  href={lp(`/novedades/${post.slug}/`)}
                  class="group flex flex-col overflow-hidden rounded-2xl border border-heading/10 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  {post.image.startsWith("http") ? (
                    <img
                      src={post.image}
                      alt={p.title}
                      width={600}
                      height={338}
                      class="aspect-[16/9] w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div class={`aspect-[16/9] flex items-center justify-center bg-gradient-to-br ${categoryGradients[post.category] || "from-gray-600 to-gray-800"}`}>
                      <svg class="h-16 w-16 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={categoryIcons[post.category] || categoryIcons.ai} />
                      </svg>
                    </div>
                  )}
                  <div class="flex flex-1 flex-col p-6">
                    <div class="flex items-center gap-3 text-xs">
                      <span class="rounded-full bg-red/10 px-3 py-1 font-semibold text-red">
                        {p.categoryLabel}
                      </span>
                      <span class="text-text/50">
                        {post.readingTime} {c.readingTime}
                      </span>
                    </div>
                    <h2 class="mt-3 text-lg font-bold leading-snug text-heading group-hover:text-red transition-colors">
                      {p.title}
                    </h2>
                    <p class="mt-2 flex-1 text-sm leading-relaxed text-text/70">{p.excerpt}</p>
                    <div class="mt-4 flex items-center justify-between">
                      <time class="text-xs text-text/40" dateTime={post.date}>
                        {formatDate(post.date, locale)}
                      </time>
                      <span class="inline-flex items-center gap-1 text-sm font-medium text-red transition-colors group-hover:text-red-hover">
                        {c.readMore}
                        <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t: Record<string, { title: string; desc: string }> = {
    en: {
      title: "News & Insights | Eurosynapse",
      desc: "Stay updated with the latest trends, strategies and insights in technology and digital transformation from Eurosynapse.",
    },
    es: {
      title: "Novedades | Eurosynapse",
      desc: "Mantente informado con las ultimas tendencias, estrategias e insights en tecnologia y transformacion digital de Eurosynapse.",
    },
    fr: {
      title: "Actualites | Eurosynapse",
      desc: "Restez informe des dernieres tendances, strategies et perspectives en technologie et transformation numerique d'Eurosynapse.",
    },
  };
  const l = params.locale || "en";
  const d = t[l] || t.en;
  const siteUrl = "https://eurosynapse.com";
  const pageUrl = `${siteUrl}/${l}/novedades/`;
  return {
    title: d.title,
    meta: [
      { name: "description", content: d.desc },
      { property: "og:title", content: d.title },
      { property: "og:description", content: d.desc },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteUrl}/eurosynapse-dark.png` },
    ],
    links: [
      { rel: "canonical", href: pageUrl },
    ],
  };
};
