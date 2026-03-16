import { component$ } from "@builder.io/qwik";
import { routeLoader$, useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getServiceBySlug, getRelatedServices } from "~/data/services";
import { getServiceContent } from "~/data/services-i18n";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

export const useServiceDetail = routeLoader$(({ params, status }) => {
  const service = getServiceBySlug(params.slug);
  if (!service) { status(404); return null; }
  const related = getRelatedServices(service.relatedSlugs);
  return { service, related };
});

const ui = (locale: Locale) => {
  const c = {
    en: { services: "Services", notFound: "Service Not Found", notFoundText: "The service you're looking for doesn't exist.", viewAll: "View All Services", talkProject: "Let's Talk About Your Project", allyTitle: "More Than a Vendor — Your Strategic Ally", allyText: "We believe the best technology outcomes come from genuine partnership. We embed ourselves in your context, understand your challenges and work shoulder-to-shoulder with your team to deliver results that last.", learnApproach: "Learn more about our approach", whatWeDo: "What We Do Together", capSub: "Our capabilities in", capSub2: "— designed to deliver real business impact through close collaboration.", howTitle: "How We Work With You", howSub: "A proven methodology built around partnership, transparency and continuous feedback.", relatedTitle: "Explore Related Services", relatedSub: "Our services work best together. Discover how complementary capabilities can amplify your results.", learnMore: "Learn More", ctaTitle: "Ready to become our next success story?", ctaSub: "Let's talk about how we can partner with you on", startConv: "Start a Conversation" },
    es: { services: "Servicios", notFound: "Servicio No Encontrado", notFoundText: "El servicio que buscas no existe.", viewAll: "Ver Todos los Servicios", talkProject: "Hablemos de Tu Proyecto", allyTitle: "Mas que un Proveedor — Tu Aliado Estrategico", allyText: "Creemos que los mejores resultados tecnologicos provienen de alianzas genuinas. Nos integramos en tu contexto, entendemos tus desafios y trabajamos codo a codo con tu equipo para entregar resultados duraderos.", learnApproach: "Conoce mas sobre nuestro enfoque", whatWeDo: "Lo Que Hacemos Juntos", capSub: "Nuestras capacidades en", capSub2: "— disenadas para generar impacto real a traves de estrecha colaboracion.", howTitle: "Como Trabajamos Contigo", howSub: "Una metodologia probada basada en alianza, transparencia y retroalimentacion continua.", relatedTitle: "Explora Servicios Relacionados", relatedSub: "Nuestros servicios funcionan mejor juntos. Descubre como capacidades complementarias amplifican tus resultados.", learnMore: "Saber Mas", ctaTitle: "Listo para ser nuestra proxima historia de exito?", ctaSub: "Hablemos de como podemos ser tu aliado en", startConv: "Iniciar una Conversacion" },
    fr: { services: "Services", notFound: "Service Non Trouve", notFoundText: "Le service que vous recherchez n'existe pas.", viewAll: "Voir Tous les Services", talkProject: "Parlons de Votre Projet", allyTitle: "Plus qu'un Fournisseur — Votre Allie Strategique", allyText: "Nous croyons que les meilleurs resultats technologiques proviennent de partenariats authentiques. Nous nous integrons dans votre contexte et travaillons epaule contre epaule avec votre equipe.", learnApproach: "En savoir plus sur notre approche", whatWeDo: "Ce Que Nous Faisons Ensemble", capSub: "Nos capacites en", capSub2: "— concues pour generer un impact reel grace a une collaboration etroite.", howTitle: "Comment Nous Travaillons avec Vous", howSub: "Une methodologie eprouvee basee sur le partenariat, la transparence et le feedback continu.", relatedTitle: "Explorez les Services Associes", relatedSub: "Nos services fonctionnent mieux ensemble. Decouvrez comment des capacites complementaires amplifient vos resultats.", learnMore: "En Savoir Plus", ctaTitle: "Pret a devenir notre prochain succes?", ctaSub: "Parlons de comment nous pouvons etre votre partenaire en", startConv: "Demarrer une Conversation" },
  };
  return c[locale] || c.en;
};

export default component$(() => {
  const data = useServiceDetail();
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
          <a href={lp("/services/")} class="mt-6 inline-flex rounded-md bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover">{t.viewAll}</a>
        </div>
      </div>
    );
  }

  const { service, related } = data.value;
  const sc = getServiceContent(service, locale);

  return (
    <main id="main-content" class="pt-16">
      <section class="bg-[#080F1E] pt-20 pb-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2 text-sm text-white/40">
            <a href={lp("/services/")} class="transition-colors hover:text-white/70">{t.services}</a>
            <span>/</span>
            <span class="text-white/60">{sc.shortTitle}</span>
          </div>
          <p class="mt-6 text-sm font-semibold tracking-widest text-red uppercase">{sc.accentLabel}</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl lg:max-w-3xl">{sc.heroHeadline}</h1>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">{sc.heroDescription}</p>
          <p class="mt-6 max-w-2xl text-base font-medium italic text-yellow">"{sc.partnershipStatement}"</p>
          <div class="mt-8">
            <a href={lp("/contact/")} class="inline-flex rounded-[3px] border-2 border-red bg-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-dark">{t.talkProject}</a>
          </div>
        </div>
      </section>

      <section class="py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">{t.allyTitle}</h2>
              <p class="mt-5 text-base leading-relaxed text-text">{t.allyText}</p>
              <a href={lp("/about/")} class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-red transition-colors hover:text-red-hover">
                {t.learnApproach}
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" /></svg>
              </a>
            </div>
            <div class="space-y-6">
              {sc.partnershipPoints.map((point) => (
                <div key={point.title} class="flex items-start gap-4">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow/10">
                    <svg class="h-4 w-4 text-yellow" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" /></svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-heading">{point.title}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-text">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section class="bg-section-bg py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">{t.whatWeDo}</h2>
            <p class="mt-4 text-base text-text">{t.capSub} {sc.shortTitle.toLowerCase()} {t.capSub2}</p>
          </div>
          <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {sc.capabilities.map((cap, i) => (
              <div key={cap.title} class="rounded-xl bg-white p-6 transition-colors hover:bg-section-bg">
                <span class="text-2xl font-extrabold text-red/20">{String(i + 1).padStart(2, "0")}</span>
                <h3 class="mt-3 text-base font-bold text-heading">{cap.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-text">{cap.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">{t.howTitle}</h2>
            <p class="mt-4 text-base text-text">{t.howSub}</p>
          </div>
          <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {sc.approachSteps.map((step) => (
              <div key={step.step} class="relative">
                <span class="text-5xl font-extrabold text-red/15">{step.step}</span>
                <h3 class="mt-2 text-lg font-bold text-heading">{step.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-text">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section class="bg-[#080F1E] py-20 lg:py-28">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-center text-3xl font-extrabold text-white sm:text-4xl">{t.relatedTitle}</h2>
            <p class="mx-auto mt-4 max-w-xl text-center text-base text-white/50">{t.relatedSub}</p>
            <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => {
                const rc = getServiceContent(rel, locale);
                return (
                <a key={rel.slug} href={lp(`/services/${rel.slug}/`)} class="group rounded-xl bg-[#0f1a2e] p-8 transition-colors hover:bg-[#142038]">
                  <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-yellow/20">
                    <svg class="h-7 w-7 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={rel.icon} /></svg>
                  </div>
                  <h3 class="mt-5 text-lg font-bold text-white">{rc.shortTitle}</h3>
                  <p class="mt-3 text-sm leading-relaxed text-white/50">{rc.heroDescription.slice(0, 120)}...</p>
                  <span class="mt-4 inline-flex items-center text-sm font-medium text-yellow transition-colors group-hover:text-white">
                    {t.learnMore}
                    <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" /></svg>
                  </span>
                </a>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section class="bg-[#080F1E] border-t border-white/5 py-16">
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">{t.ctaTitle}</h2>
          <p class="mt-4 text-lg text-white/60">{t.ctaSub} {sc.shortTitle.toLowerCase()}.</p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={lp("/contact/")} class="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-red transition-all hover:bg-dark hover:text-white">{t.startConv}</a>
            <a href={lp("/services/")} class="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">{t.viewAll}</a>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ resolveValue, params }) => {
  const data = resolveValue(useServiceDetail);
  if (!data) return { title: "Service Not Found | Eurosynapse" };
  const { service } = data;
  const locale = params.locale || "en";
  const sc = getServiceContent(service, locale);
  const siteUrl = "https://eurosynapse.com";
  const pageUrl = `${siteUrl}/${locale}/services/${service.slug}/`;
  return {
    title: sc.seoTitle,
    meta: [
      { name: "description", content: sc.seoDescription },
      { property: "og:title", content: sc.ogTitle },
      { property: "og:description", content: sc.ogDescription },
      { property: "og:type", content: "website" },
      { property: "og:url", content: pageUrl },
      { property: "og:image", content: `${siteUrl}/eurosynapse-dark.png` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: sc.ogTitle },
      { name: "twitter:description", content: sc.ogDescription },
    ],
    links: [{ rel: "canonical", href: pageUrl }],
    scripts: [
      {
        type: "application/ld+json",
        props: {},
        script: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Service",
          name: sc.shortTitle,
          description: sc.heroDescription,
          provider: { "@type": "Organization", name: "Eurosynapse", url: siteUrl },
          url: pageUrl,
        }),
      },
    ],
  };
};
