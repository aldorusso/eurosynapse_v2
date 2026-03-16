import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Proven Impact", title: "Success Stories", subtitle: "Real results from real partnerships. Discover how we help organizations achieve measurable outcomes.",
      stories: [
        { client: "Global Financial Group", industry: "Financial Services", title: "AI-Driven Risk Assessment Platform", result: "40% reduction in risk evaluation time", description: "Implemented a predictive analytics engine that transformed risk management operations across 12 countries." },
        { client: "National Health Service", industry: "Healthcare", title: "Digital Patient Care Modernization", result: "60% improvement in patient data processing", description: "Legacy system modernization and cloud migration enabling real-time patient care coordination." },
        { client: "European Logistics Corp", industry: "Transport & Logistics", title: "Smart Supply Chain Optimization", result: "35% reduction in operational costs", description: "End-to-end IoT and analytics solution for fleet management and route optimization." },
      ],
      ctaTitle: "Have a project in mind?", ctaSub: "Let's create your own success story.", ctaBtn: "Get in Touch",
    },
    es: {
      label: "Impacto Probado", title: "Casos de Exito", subtitle: "Resultados reales de alianzas reales. Descubre como ayudamos a las organizaciones a lograr resultados medibles.",
      stories: [
        { client: "Grupo Financiero Global", industry: "Servicios Financieros", title: "Plataforma de Evaluacion de Riesgos con IA", result: "40% de reduccion en tiempo de evaluacion de riesgos", description: "Implementamos un motor de analitica predictiva que transformo las operaciones de gestion de riesgos en 12 paises." },
        { client: "Servicio Nacional de Salud", industry: "Salud", title: "Modernizacion Digital de Atencion al Paciente", result: "60% de mejora en procesamiento de datos de pacientes", description: "Modernizacion de sistemas legacy y migracion cloud para coordinacion de atencion al paciente en tiempo real." },
        { client: "European Logistics Corp", industry: "Transporte y Logistica", title: "Optimizacion Inteligente de Cadena de Suministro", result: "35% de reduccion en costos operativos", description: "Solucion integral de IoT y analitica para gestion de flotas y optimizacion de rutas." },
      ],
      ctaTitle: "Tienes un proyecto en mente?", ctaSub: "Creemos juntos tu propia historia de exito.", ctaBtn: "Contactanos",
    },
    fr: {
      label: "Impact Prouve", title: "Succes Clients", subtitle: "Des resultats reels issus de partenariats reels. Decouvrez comment nous aidons les organisations.",
      stories: [
        { client: "Groupe Financier Global", industry: "Services Financiers", title: "Plateforme d'Evaluation des Risques par IA", result: "40% de reduction du temps d'evaluation des risques", description: "Mise en place d'un moteur d'analytique predictive transformant la gestion des risques dans 12 pays." },
        { client: "Service National de Sante", industry: "Sante", title: "Modernisation Numerique des Soins", result: "60% d'amelioration du traitement des donnees patients", description: "Modernisation des systemes et migration cloud pour la coordination des soins en temps reel." },
        { client: "European Logistics Corp", industry: "Transport et Logistique", title: "Optimisation Intelligente de la Chaine Logistique", result: "35% de reduction des couts operationnels", description: "Solution IoT et analytique de bout en bout pour la gestion de flottes et l'optimisation des itineraires." },
      ],
      ctaTitle: "Vous avez un projet?", ctaSub: "Creons ensemble votre propre succes.", ctaBtn: "Contactez-nous",
    },
  };
  return c[locale] || c.en;
};

export default component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const c = content(locale);
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <main id="main-content" class="pt-16">
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">{c.label}</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">{c.title}</h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">{c.subtitle}</p>
        </div>
      </section>
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="space-y-10">
            {c.stories.map((story) => (
              <div key={story.title} class="rounded-2xl border border-heading/10 bg-white p-8 shadow-sm lg:p-10">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="rounded-full bg-red/10 px-3 py-1 text-xs font-semibold text-red">{story.industry}</span>
                  <span class="text-sm text-text">{story.client}</span>
                </div>
                <h2 class="mt-4 text-2xl font-bold text-heading">{story.title}</h2>
                <p class="mt-3 text-text">{story.description}</p>
                <div class="mt-6 inline-block rounded-lg bg-green/10 px-4 py-2">
                  <p class="text-sm font-semibold text-green">{story.result}</p>
                </div>
              </div>
            ))}
          </div>
          <div class="mt-16 rounded-2xl bg-section-bg p-10 text-center">
            <h3 class="text-xl font-bold text-heading">{c.ctaTitle}</h3>
            <p class="mt-2 text-text">{c.ctaSub}</p>
            <a href={lp("/contact/")} class="mt-6 inline-flex rounded-lg bg-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover">{c.ctaBtn}</a>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t: Record<string, { title: string; desc: string }> = {
    en: { title: "Success Stories | Eurosynapse", desc: "Discover how Eurosynapse has helped organizations achieve digital transformation success." },
    es: { title: "Casos de Exito | Eurosynapse", desc: "Descubre como Eurosynapse ha ayudado a organizaciones a lograr la transformacion digital." },
    fr: { title: "Succes Clients | Eurosynapse", desc: "Decouvrez comment Eurosynapse a aide des organisations a reussir leur transformation digitale." },
  };
  const l = params.locale || "en"; const d = t[l] || t.en;
  return { title: d.title, meta: [
    { name: "description", content: d.desc },
    { property: "og:title", content: d.title },
    { property: "og:description", content: d.desc },
    { property: "og:type", content: "website" },
  ] };
};
