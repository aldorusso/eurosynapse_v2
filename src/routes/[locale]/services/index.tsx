import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const serviceIcons = [
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
];

const slugs = ["artificial-intelligence", "digital-transformation", "data-analytics", "cybersecurity", "cloud-infrastructure", "enterprise-solutions", "it-advisory"];

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Our Expertise", title: "Services & Solutions", subtitle: "End-to-end technology services designed to accelerate innovation and deliver measurable business outcomes.",
      explore: "Explore this service",
      categories: [
        { title: "Artificial Intelligence & Automation", items: [{ name: "AI Platforms & Workflows", description: "Agent orchestration, content generation and intelligent automation pipelines." }, { name: "Applied AI", description: "Chatbots, natural language processing and predictive models tailored to your business." }] },
        { title: "Digital Transformation & Software", items: [{ name: "Custom Software Development", description: "Bespoke applications and legacy system modernization for the digital age." }, { name: "Digital Commerce", description: "Customer experience transformation and end-to-end digital commerce solutions." }] },
        { title: "Data & Analytics", items: [{ name: "Data Intelligence", description: "Interactive dashboards, Big Data processing and actionable business insights." }, { name: "Geospatial Intelligence", description: "Location-based analytics and spatial data solutions for strategic decision-making." }] },
        { title: "Cybersecurity & Compliance", items: [{ name: "SecureOps", description: "Infrastructure protection, threat detection and security operations management." }, { name: "Risk & Compliance", description: "Regulatory compliance management and enterprise risk assessment frameworks." }] },
        { title: "Cloud & Infrastructure", items: [{ name: "Cloud Services", description: "Cloud migration, multi-cloud strategies and scalable infrastructure solutions." }, { name: "IT Operations", description: "Continuous monitoring, managed IT support and operational optimization." }] },
        { title: "Enterprise Solutions (ERP & CRM)", items: [{ name: "SAP Consulting & Implementation", description: "SAP S/4HANA, SAP Business ByDesign and full-cycle SAP transformation." }, { name: "HCM & CRM", description: "Human Capital Management and Customer Relationship Management solutions." }] },
        { title: "IT Advisory & Talent Services", items: [{ name: "Managed & On-Demand Services", description: "Flexible IT staffing and managed technology services for every scale." }, { name: "HR & Tech Talent Acquisition", description: "Recruiting specialized technology professionals to drive your initiatives." }] },
      ],
    },
    es: {
      label: "Nuestra Experiencia", title: "Servicios y Soluciones", subtitle: "Servicios tecnologicos integrales disenados para acelerar la innovacion y entregar resultados medibles.",
      explore: "Explorar este servicio",
      categories: [
        { title: "Inteligencia Artificial y Automatizacion", items: [{ name: "Plataformas y Flujos de IA", description: "Orquestacion de agentes, generacion de contenido y automatizacion inteligente." }, { name: "IA Aplicada", description: "Chatbots, procesamiento de lenguaje natural y modelos predictivos adaptados a tu negocio." }] },
        { title: "Transformacion Digital y Software", items: [{ name: "Desarrollo de Software a Medida", description: "Aplicaciones personalizadas y modernizacion de sistemas para la era digital." }, { name: "Comercio Digital", description: "Transformacion de la experiencia del cliente y soluciones de comercio digital." }] },
        { title: "Datos y Analitica", items: [{ name: "Inteligencia de Datos", description: "Dashboards interactivos, procesamiento Big Data e insights accionables." }, { name: "Inteligencia Geoespacial", description: "Analitica basada en ubicacion y soluciones de datos espaciales." }] },
        { title: "Ciberseguridad y Cumplimiento", items: [{ name: "SecureOps", description: "Proteccion de infraestructura, deteccion de amenazas y gestion de operaciones de seguridad." }, { name: "Riesgo y Cumplimiento", description: "Gestion de cumplimiento normativo y marcos de evaluacion de riesgos." }] },
        { title: "Cloud e Infraestructura", items: [{ name: "Servicios Cloud", description: "Migracion cloud, estrategias multi-cloud y soluciones de infraestructura escalable." }, { name: "Operaciones IT", description: "Monitoreo continuo, soporte IT gestionado y optimizacion operativa." }] },
        { title: "Soluciones Empresariales (ERP y CRM)", items: [{ name: "Consultoria e Implementacion SAP", description: "SAP S/4HANA, SAP Business ByDesign y transformacion SAP completa." }, { name: "HCM y CRM", description: "Soluciones de Gestion de Capital Humano y Gestion de Relaciones con Clientes." }] },
        { title: "Consultoria IT y Servicios de Talento", items: [{ name: "Servicios Gestionados y Bajo Demanda", description: "Staffing IT flexible y servicios tecnologicos gestionados a cualquier escala." }, { name: "Adquisicion de Talento Tech", description: "Reclutamiento de profesionales tecnologicos especializados." }] },
      ],
    },
    fr: {
      label: "Notre Expertise", title: "Services et Solutions", subtitle: "Des services technologiques complets concus pour accelerer l'innovation et produire des resultats mesurables.",
      explore: "Explorer ce service",
      categories: [
        { title: "Intelligence Artificielle et Automatisation", items: [{ name: "Plateformes et Workflows IA", description: "Orchestration d'agents, generation de contenu et automatisation intelligente." }, { name: "IA Appliquee", description: "Chatbots, traitement du langage naturel et modeles predictifs adaptes a votre entreprise." }] },
        { title: "Transformation Digitale et Logiciel", items: [{ name: "Developpement Logiciel Sur Mesure", description: "Applications personnalisees et modernisation des systemes pour l'ere numerique." }, { name: "Commerce Digital", description: "Transformation de l'experience client et solutions de commerce digital." }] },
        { title: "Donnees et Analytique", items: [{ name: "Intelligence des Donnees", description: "Tableaux de bord interactifs, traitement Big Data et insights actionnables." }, { name: "Intelligence Geospatiale", description: "Analytique basee sur la localisation et solutions de donnees spatiales." }] },
        { title: "Cybersecurite et Conformite", items: [{ name: "SecureOps", description: "Protection d'infrastructure, detection des menaces et gestion des operations de securite." }, { name: "Risque et Conformite", description: "Gestion de la conformite reglementaire et cadres d'evaluation des risques." }] },
        { title: "Cloud et Infrastructure", items: [{ name: "Services Cloud", description: "Migration cloud, strategies multi-cloud et solutions d'infrastructure evolutives." }, { name: "Operations IT", description: "Surveillance continue, support IT gere et optimisation operationnelle." }] },
        { title: "Solutions Entreprise (ERP et CRM)", items: [{ name: "Conseil et Implementation SAP", description: "SAP S/4HANA, SAP Business ByDesign et transformation SAP complete." }, { name: "HCM et CRM", description: "Solutions de Gestion du Capital Humain et de Gestion de la Relation Client." }] },
        { title: "Conseil IT et Services de Talents", items: [{ name: "Services Geres et A la Demande", description: "Staffing IT flexible et services technologiques geres a toute echelle." }, { name: "Acquisition de Talents Tech", description: "Recrutement de professionnels technologiques specialises." }] },
      ],
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
          <div class="space-y-16">
            {c.categories.map((category, idx) => (
              <div key={category.title} class="rounded-2xl border border-heading/10 bg-white p-8 shadow-sm lg:p-10">
                <div class="flex items-start gap-4">
                  <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-6 w-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={serviceIcons[idx]} />
                    </svg>
                  </div>
                  <div><h2 class="text-2xl font-bold text-heading">{category.title}</h2></div>
                </div>
                <div class="mt-8 grid gap-6 sm:grid-cols-2">
                  {category.items.map((item) => (
                    <div key={item.name} class="rounded-xl bg-section-bg p-6">
                      <h3 class="text-lg font-semibold text-heading">{item.name}</h3>
                      <p class="mt-2 text-sm leading-relaxed text-text">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div class="mt-6 flex justify-end">
                  <a href={lp(`/services/${slugs[idx]}/`)} class="inline-flex items-center gap-1 text-sm font-medium text-red transition-colors hover:text-red-hover">
                    {c.explore}
                    <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" /></svg>
                  </a>
                </div>
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
    en: { title: "Services & Solutions | Eurosynapse", desc: "Explore Eurosynapse's full range of technology services." },
    es: { title: "Servicios y Soluciones | Eurosynapse", desc: "Explora la gama completa de servicios tecnologicos de Eurosynapse." },
    fr: { title: "Services et Solutions | Eurosynapse", desc: "Explorez la gamme complete de services technologiques d'Eurosynapse." },
  };
  const l = params.locale || "en"; const d = t[l] || t.en;
  return { title: d.title, meta: [{ name: "description", content: d.desc }] };
};
