import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const sectionIcons = [
  "M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z",
  "M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z",
];

const content = (locale: Locale) => {
  const c = {
    en: { label: "Knowledge Hub", title: "Resources", subtitle: "Insights, demos and documentation to keep you informed.", comingSoon: "Coming soon",
      sections: [{ title: "Blog & Newsroom", description: "Articles on ICT trends, digitalization and the AI era." }, { title: "Demo Library", description: "Interactive demonstrations of our platforms and solutions." }, { title: "Corporate Documentation", description: "Annual reports, privacy policies and compliance documentation." }] },
    es: { label: "Centro de Conocimiento", title: "Recursos", subtitle: "Insights, demos y documentacion para mantenerte informado.", comingSoon: "Proximamente",
      sections: [{ title: "Blog y Noticias", description: "Articulos sobre tendencias TIC, digitalizacion y la era de la IA." }, { title: "Biblioteca de Demos", description: "Demostraciones interactivas de nuestras plataformas y soluciones." }, { title: "Documentacion Corporativa", description: "Informes anuales, politicas de privacidad y documentacion de cumplimiento." }] },
    fr: { label: "Centre de Connaissances", title: "Ressources", subtitle: "Insights, demos et documentation pour vous tenir informe.", comingSoon: "Bientot disponible",
      sections: [{ title: "Blog et Actualites", description: "Articles sur les tendances TIC, la digitalisation et l'ere de l'IA." }, { title: "Bibliotheque de Demos", description: "Demonstrations interactives de nos plateformes et solutions." }, { title: "Documentation Corporate", description: "Rapports annuels, politiques de confidentialite et documentation de conformite." }] },
  };
  return c[locale] || c.en;
};

export default component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const c = content(locale);

  return (
    <div class="pt-16">
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">{c.label}</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">{c.title}</h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">{c.subtitle}</p>
        </div>
      </section>
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-8 sm:grid-cols-3">
            {c.sections.map((section, i) => (
              <div key={section.title} class="rounded-xl border border-heading/10 bg-white p-8 text-center shadow-sm">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-red/10">
                  <svg class="h-7 w-7 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={sectionIcons[i]} />
                  </svg>
                </div>
                <h3 class="mt-6 text-lg font-semibold text-heading">{section.title}</h3>
                <p class="mt-3 text-sm leading-relaxed text-text">{section.description}</p>
                <span class="mt-4 inline-block rounded-full bg-heading/10 px-3 py-1 text-xs font-medium text-text">{c.comingSoon}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t: Record<string, { title: string; desc: string }> = {
    en: { title: "Resources | Eurosynapse", desc: "Eurosynapse resources: blog, demos and corporate documentation." },
    es: { title: "Recursos | Eurosynapse", desc: "Recursos de Eurosynapse: blog, demos y documentacion corporativa." },
    fr: { title: "Ressources | Eurosynapse", desc: "Ressources Eurosynapse: blog, demos et documentation corporate." },
  };
  const l = params.locale || "en"; const d = t[l] || t.en;
  return { title: d.title, meta: [{ name: "description", content: d.desc }] };
};
