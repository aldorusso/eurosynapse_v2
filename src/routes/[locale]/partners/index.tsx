import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const strategicPartners = ["Microsoft", "SAP", "HPE", "IBM", "Cisco", "Dell Technologies", "Fortinet", "AWS"];

const content = (locale: Locale) => {
  const c = {
    en: { label: "Stronger Together", title: "Partner Ecosystem", subtitle: "We collaborate with the world's leading technology providers to deliver best-in-class solutions.", alliancesTitle: "Strategic Alliances", alliancesText: "Our partnerships with industry leaders ensure we deliver proven, enterprise-grade technology solutions.", globalTitle: "Global Alliances", globalText: "As part of international provider networks, we extend our reach and capabilities to deliver consistent quality across borders.", globalDesc: "Eurosynapse belongs to global networks of technology providers, enabling scalable delivery models and cross-border collaboration to support our clients' international expansion strategies." },
    es: { label: "Mas Fuertes Juntos", title: "Ecosistema de Partners", subtitle: "Colaboramos con los principales proveedores tecnologicos del mundo para ofrecer soluciones de primer nivel.", alliancesTitle: "Alianzas Estrategicas", alliancesText: "Nuestras alianzas con lideres de la industria garantizan que ofrecemos soluciones tecnologicas probadas y de nivel empresarial.", globalTitle: "Alianzas Globales", globalText: "Como parte de redes internacionales de proveedores, ampliamos nuestro alcance para ofrecer calidad consistente sin fronteras.", globalDesc: "Eurosynapse pertenece a redes globales de proveedores tecnologicos, permitiendo modelos de entrega escalables y colaboracion transfronteriza para apoyar las estrategias de expansion internacional de nuestros clientes." },
    fr: { label: "Plus Forts Ensemble", title: "Ecosysteme Partenaires", subtitle: "Nous collaborons avec les principaux fournisseurs technologiques pour offrir des solutions de premier ordre.", alliancesTitle: "Alliances Strategiques", alliancesText: "Nos partenariats avec les leaders de l'industrie garantissent des solutions technologiques eprouvees.", globalTitle: "Alliances Mondiales", globalText: "En tant que membre de reseaux internationaux, nous etendons notre portee pour offrir une qualite constante au-dela des frontieres.", globalDesc: "Eurosynapse appartient a des reseaux mondiaux de fournisseurs technologiques, permettant des modeles de livraison evolutifs et une collaboration transfrontaliere pour soutenir les strategies d'expansion internationale de nos clients." },
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
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold text-heading">{c.alliancesTitle}</h2>
            <p class="mt-4 text-lg text-text">{c.alliancesText}</p>
          </div>
          <div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {strategicPartners.map((partner) => (
              <div key={partner} class="flex h-24 items-center justify-center rounded-xl border border-heading/10 bg-white shadow-sm transition-all hover:shadow-md">
                <span class="text-lg font-bold text-text">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold text-heading">{c.globalTitle}</h2>
            <p class="mt-4 text-lg text-text">{c.globalText}</p>
          </div>
          <div class="mt-12 rounded-2xl bg-white p-10 text-center shadow-sm">
            <p class="text-text">{c.globalDesc}</p>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t: Record<string, { title: string; desc: string }> = {
    en: { title: "Partner Ecosystem | Eurosynapse", desc: "Eurosynapse partners with Microsoft, SAP, HPE, IBM and more." },
    es: { title: "Ecosistema de Partners | Eurosynapse", desc: "Eurosynapse se asocia con Microsoft, SAP, HPE, IBM y mas." },
    fr: { title: "Ecosysteme Partenaires | Eurosynapse", desc: "Eurosynapse s'associe avec Microsoft, SAP, HPE, IBM et plus." },
  };
  const l = params.locale || "en"; const d = t[l] || t.en;
  return { title: d.title, meta: [
    { name: "description", content: d.desc },
    { property: "og:title", content: d.title },
    { property: "og:description", content: d.desc },
    { property: "og:type", content: "website" },
  ] };
};
