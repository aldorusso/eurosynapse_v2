import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const icons = [
  "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z",
  "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
];

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Sectors We Serve", title: "Industries", subtitle: "Deep domain expertise across the sectors that shape our world.",
      industries: [
        { name: "Public Sector & Government", description: "Digital solutions for public administration, citizen services and government modernization." },
        { name: "Healthcare & Social Care", description: "Innovative technology for patient care, health systems and social services." },
        { name: "Financial Services, Banking & Insurance", description: "Secure and compliant solutions for banks, insurers and financial institutions." },
        { name: "Energy, Utilities & Commodities", description: "Driving efficiency and sustainability across the energy and utilities sector." },
        { name: "Retail & Consumer Products", description: "Digital commerce and customer experience transformation for retail brands." },
        { name: "Transport, Mobility & Logistics", description: "Smart logistics, fleet management and mobility solutions." },
        { name: "Telecommunications, Media & Technology", description: "Next-generation networks, media platforms and tech innovation." },
        { name: "Manufacturing & Industry", description: "Industry 4.0 solutions, IoT, smart factories and supply chain optimization." },
      ],
    },
    es: {
      label: "Sectores que Servimos", title: "Industrias", subtitle: "Profunda experiencia en los sectores que dan forma a nuestro mundo.",
      industries: [
        { name: "Sector Publico y Gobierno", description: "Soluciones digitales para administracion publica, servicios ciudadanos y modernizacion gubernamental." },
        { name: "Salud y Servicios Sociales", description: "Tecnologia innovadora para atencion al paciente, sistemas de salud y servicios sociales." },
        { name: "Servicios Financieros, Banca y Seguros", description: "Soluciones seguras y conformes para bancos, aseguradoras e instituciones financieras." },
        { name: "Energia, Utilities y Commodities", description: "Impulsando eficiencia y sostenibilidad en el sector energetico y de utilities." },
        { name: "Retail y Productos de Consumo", description: "Comercio digital y transformacion de la experiencia del cliente para marcas retail." },
        { name: "Transporte, Movilidad y Logistica", description: "Logistica inteligente, gestion de flotas y soluciones de movilidad." },
        { name: "Telecomunicaciones, Medios y Tecnologia", description: "Redes de nueva generacion, plataformas de medios e innovacion tecnologica." },
        { name: "Manufactura e Industria", description: "Soluciones Industria 4.0, IoT, fabricas inteligentes y optimizacion de cadena de suministro." },
      ],
    },
    fr: {
      label: "Secteurs que Nous Servons", title: "Industries", subtitle: "Une expertise approfondie dans les secteurs qui faconnent notre monde.",
      industries: [
        { name: "Secteur Public et Gouvernement", description: "Solutions numeriques pour l'administration publique, les services aux citoyens et la modernisation gouvernementale." },
        { name: "Sante et Services Sociaux", description: "Technologie innovante pour les soins aux patients, les systemes de sante et les services sociaux." },
        { name: "Services Financiers, Banque et Assurance", description: "Solutions securisees et conformes pour les banques, assureurs et institutions financieres." },
        { name: "Energie, Utilities et Matieres Premieres", description: "Efficacite et durabilite dans le secteur de l'energie et des utilities." },
        { name: "Distribution et Produits de Consommation", description: "Commerce digital et transformation de l'experience client pour les marques retail." },
        { name: "Transport, Mobilite et Logistique", description: "Logistique intelligente, gestion de flottes et solutions de mobilite." },
        { name: "Telecommunications, Medias et Technologie", description: "Reseaux nouvelle generation, plateformes medias et innovation technologique." },
        { name: "Industrie et Manufacture", description: "Solutions Industrie 4.0, IoT, usines intelligentes et optimisation de la chaine d'approvisionnement." },
      ],
    },
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
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.industries.map((industry, i) => (
              <div key={industry.name} class="group rounded-xl border border-heading/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red/10 transition-colors group-hover:bg-red">
                  <svg class="h-6 w-6 text-red transition-colors group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={icons[i]} />
                  </svg>
                </div>
                <h3 class="mt-6 text-base font-semibold text-heading">{industry.name}</h3>
                <p class="mt-3 text-sm leading-relaxed text-text">{industry.description}</p>
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
    en: { title: "Industries | Eurosynapse", desc: "Eurosynapse serves public sector, healthcare, financial services, energy, retail, transport, telecom and manufacturing industries." },
    es: { title: "Industrias | Eurosynapse", desc: "Eurosynapse atiende al sector publico, salud, servicios financieros, energia, retail, transporte, telecomunicaciones y manufactura." },
    fr: { title: "Industries | Eurosynapse", desc: "Eurosynapse sert le secteur public, la sante, les services financiers, l'energie, le retail, le transport, les telecoms et l'industrie." },
  };
  const l = params.locale || "en";
  const d = t[l] || t.en;
  return { title: d.title, meta: [{ name: "description", content: d.desc }] };
};
