import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const content = (locale: Locale) => {
  const c = {
    en: {
      heroTitle1: "Powering results on a ",
      heroTitle2: "new level",
      heroSub: "Advanced technology solutions for managing and transforming your business. Elevate excellence easily and efficiently.",
      requestDemo: "Request a Demo",
      learnMore: "Learn More",
      revenue: "Revenue",
      users: "Users",
      uptime: "Uptime",
      stable: "Stable",
      projectDeployed: "Project Deployed",
      minutesAgo: "2 minutes ago",
      features: [
        { title: "AI & Automation", description: "Agent orchestration, chatbots and predictive models for your business" },
        { title: "Cloud Solutions", description: "Scalable infrastructure, migration and multi-cloud strategies" },
        { title: "Cybersecurity", description: "SecureOps, threat detection and compliance management" },
        { title: "Enterprise ERP", description: "SAP S/4HANA, Business ByDesign and CRM implementations" },
      ],
      aboutTitle: "Technology for easy business transformation",
      aboutText: "Eurosynapse provides comprehensive solutions to control and modernize your entire business ecosystem. Our approach is simple: understand your goals, then deliver measurable results.",
      discoverMore: "Discover More",
      stats: [
        { value: "500+", label: "Happy Clients" },
        { value: "30+", label: "Countries" },
        { value: "15+", label: "Years Experience" },
        { value: "98%", label: "Client Satisfaction" },
      ],
      simpleTitle: "Simple approach for complex challenges",
      simpleText: "Eurosynapse combines deep technical expertise with clear business understanding. One partner that brings your whole digital strategy together.",
      checklist1: ["End-to-end digital transformation consulting", "AI-driven automation and intelligent workflows", "Scalable cloud infrastructure and migration"],
      getStarted: "Get Started",
      servicesTitle: "Awesome services grow your business value",
      servicesSub: "Eurosynapse delivers end-to-end technology solutions. One partner that brings your whole digital strategy together.",
      viewDetails: "View Details",
      dataTitle: "Manage data & get instant insights",
      dataText: "Our data intelligence platform allows you to visualize, analyze and act on your business data in real time.",
      checklist2: ["Interactive dashboards and real-time reporting", "Big Data processing and geospatial intelligence", "Predictive analytics for strategic planning"],
      ctaTitle: "Ready to transform your business?",
      ctaSub: "Let's discuss how Eurosynapse can help you achieve your digital goals.",
    },
    es: {
      heroTitle1: "Impulsando resultados a un ",
      heroTitle2: "nuevo nivel",
      heroSub: "Soluciones tecnologicas avanzadas para gestionar y transformar tu negocio. Eleva la excelencia de forma facil y eficiente.",
      requestDemo: "Solicitar Demo",
      learnMore: "Saber Mas",
      revenue: "Ingresos",
      users: "Usuarios",
      uptime: "Disponibilidad",
      stable: "Estable",
      projectDeployed: "Proyecto Desplegado",
      minutesAgo: "hace 2 minutos",
      features: [
        { title: "IA y Automatizacion", description: "Orquestacion de agentes, chatbots y modelos predictivos para tu negocio" },
        { title: "Soluciones Cloud", description: "Infraestructura escalable, migracion y estrategias multi-cloud" },
        { title: "Ciberseguridad", description: "SecureOps, deteccion de amenazas y gestion de cumplimiento" },
        { title: "ERP Empresarial", description: "SAP S/4HANA, Business ByDesign e implementaciones CRM" },
      ],
      aboutTitle: "Tecnologia para una transformacion empresarial sencilla",
      aboutText: "Eurosynapse ofrece soluciones integrales para controlar y modernizar todo tu ecosistema empresarial. Nuestro enfoque es simple: entender tus objetivos y entregar resultados medibles.",
      discoverMore: "Descubrir Mas",
      stats: [
        { value: "500+", label: "Clientes Satisfechos" },
        { value: "30+", label: "Paises" },
        { value: "15+", label: "Anos de Experiencia" },
        { value: "98%", label: "Satisfaccion del Cliente" },
      ],
      simpleTitle: "Enfoque simple para retos complejos",
      simpleText: "Eurosynapse combina profunda experiencia tecnica con comprension empresarial clara. Un socio que integra toda tu estrategia digital.",
      checklist1: ["Consultoria integral de transformacion digital", "Automatizacion con IA y flujos inteligentes", "Infraestructura cloud escalable y migracion"],
      getStarted: "Comenzar",
      servicesTitle: "Servicios que hacen crecer el valor de tu negocio",
      servicesSub: "Eurosynapse ofrece soluciones tecnologicas de extremo a extremo. Un socio que integra toda tu estrategia digital.",
      viewDetails: "Ver Detalles",
      dataTitle: "Gestiona datos y obtiene insights al instante",
      dataText: "Nuestra plataforma de inteligencia de datos te permite visualizar, analizar y actuar sobre tus datos empresariales en tiempo real.",
      checklist2: ["Dashboards interactivos e informes en tiempo real", "Procesamiento Big Data e inteligencia geoespacial", "Analitica predictiva para planificacion estrategica"],
      ctaTitle: "Listo para transformar tu negocio?",
      ctaSub: "Hablemos de como Eurosynapse puede ayudarte a alcanzar tus objetivos digitales.",
    },
    fr: {
      heroTitle1: "Des resultats a un ",
      heroTitle2: "nouveau niveau",
      heroSub: "Solutions technologiques avancees pour gerer et transformer votre entreprise. Elevez l'excellence facilement et efficacement.",
      requestDemo: "Demander une Demo",
      learnMore: "En Savoir Plus",
      revenue: "Revenus",
      users: "Utilisateurs",
      uptime: "Disponibilite",
      stable: "Stable",
      projectDeployed: "Projet Deploye",
      minutesAgo: "il y a 2 minutes",
      features: [
        { title: "IA et Automatisation", description: "Orchestration d'agents, chatbots et modeles predictifs pour votre entreprise" },
        { title: "Solutions Cloud", description: "Infrastructure evolutive, migration et strategies multi-cloud" },
        { title: "Cybersecurite", description: "SecureOps, detection des menaces et gestion de la conformite" },
        { title: "ERP Entreprise", description: "SAP S/4HANA, Business ByDesign et implementations CRM" },
      ],
      aboutTitle: "La technologie pour une transformation simple",
      aboutText: "Eurosynapse fournit des solutions completes pour controler et moderniser l'ensemble de votre ecosysteme. Notre approche est simple: comprendre vos objectifs, puis livrer des resultats mesurables.",
      discoverMore: "Decouvrir Plus",
      stats: [
        { value: "500+", label: "Clients Satisfaits" },
        { value: "30+", label: "Pays" },
        { value: "15+", label: "Ans d'Experience" },
        { value: "98%", label: "Satisfaction Client" },
      ],
      simpleTitle: "Approche simple pour des defis complexes",
      simpleText: "Eurosynapse combine une expertise technique approfondie avec une comprehension claire des enjeux. Un partenaire qui rassemble toute votre strategie digitale.",
      checklist1: ["Conseil complet en transformation digitale", "Automatisation par IA et workflows intelligents", "Infrastructure cloud evolutive et migration"],
      getStarted: "Commencer",
      servicesTitle: "Des services qui font croitre la valeur de votre entreprise",
      servicesSub: "Eurosynapse fournit des solutions technologiques de bout en bout. Un partenaire qui rassemble toute votre strategie digitale.",
      viewDetails: "Voir Details",
      dataTitle: "Gerez vos donnees et obtenez des insights instantanes",
      dataText: "Notre plateforme d'intelligence vous permet de visualiser, analyser et agir sur vos donnees en temps reel.",
      checklist2: ["Tableaux de bord interactifs et rapports en temps reel", "Traitement Big Data et intelligence geospatiale", "Analytique predictive pour la planification strategique"],
      ctaTitle: "Pret a transformer votre entreprise?",
      ctaSub: "Discutons de la facon dont Eurosynapse peut vous aider a atteindre vos objectifs digitaux.",
    },
  };
  return c[locale] || c.en;
};

const services = [
  { slug: "artificial-intelligence", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  { slug: "digital-transformation", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { slug: "data-analytics", icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
  { slug: "cybersecurity", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
  { slug: "cloud-infrastructure", icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" },
  { slug: "enterprise-solutions", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
];

const serviceNames: Record<string, Record<string, string>> = {
  "artificial-intelligence": { en: "Artificial Intelligence", es: "Inteligencia Artificial", fr: "Intelligence Artificielle" },
  "digital-transformation": { en: "Digital Transformation", es: "Transformacion Digital", fr: "Transformation Digitale" },
  "data-analytics": { en: "Data & Analytics", es: "Datos y Analitica", fr: "Donnees et Analytique" },
  "cybersecurity": { en: "Cybersecurity", es: "Ciberseguridad", fr: "Cybersecurite" },
  "cloud-infrastructure": { en: "Cloud & Infrastructure", es: "Cloud e Infraestructura", fr: "Cloud et Infrastructure" },
  "enterprise-solutions": { en: "Enterprise Solutions", es: "Soluciones Empresariales", fr: "Solutions Entreprise" },
};

const serviceDescs: Record<string, Record<string, string>> = {
  "artificial-intelligence": { en: "Agent orchestration, content generation, NLP and predictive models tailored to your needs.", es: "Orquestacion de agentes, generacion de contenido, PLN y modelos predictivos adaptados.", fr: "Orchestration d'agents, generation de contenu, TAL et modeles predictifs adaptes." },
  "digital-transformation": { en: "Custom software, legacy modernization and digital commerce solutions.", es: "Software a medida, modernizacion de sistemas y soluciones de comercio digital.", fr: "Logiciels sur mesure, modernisation et solutions de commerce digital." },
  "data-analytics": { en: "Business intelligence dashboards, Big Data and geospatial intelligence.", es: "Dashboards de inteligencia de negocio, Big Data e inteligencia geoespacial.", fr: "Tableaux de bord BI, Big Data et intelligence geospatiale." },
  "cybersecurity": { en: "SecureOps, infrastructure protection and regulatory compliance frameworks.", es: "SecureOps, proteccion de infraestructura y marcos de cumplimiento normativo.", fr: "SecureOps, protection d'infrastructure et cadres de conformite reglementaire." },
  "cloud-infrastructure": { en: "Cloud migration, scalability, continuous monitoring and managed IT support.", es: "Migracion cloud, escalabilidad, monitoreo continuo y soporte IT gestionado.", fr: "Migration cloud, scalabilite, surveillance continue et support IT gere." },
  "enterprise-solutions": { en: "SAP consulting, HCM, CRM and full ERP transformation services.", es: "Consultoria SAP, HCM, CRM y servicios de transformacion ERP completos.", fr: "Conseil SAP, HCM, CRM et services de transformation ERP complets." },
};

const featureIcons = [
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
];

export default component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const c = content(locale);
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <main id="main-content">
      {/* HERO */}
      <section class="relative z-[1] overflow-hidden bg-[#080F1E]">
        <div class="relative pt-[100px] pb-40 sm:pt-[120px] md:pt-[140px] lg:pt-[180px]">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              <div class="relative z-[3] text-center lg:text-left">
                <h1 class="text-[38px] font-bold leading-[1.05] text-white sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px]">
                  {c.heroTitle1}<span class="text-red">{c.heroTitle2}</span>
                </h1>
                <p class="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#8a95a5] lg:mx-0 xl:pr-14">{c.heroSub}</p>
                <div class="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
                  <a href={lp("/contact/")} class="rounded-[3px] border-2 border-red bg-red px-8 py-4 text-base font-semibold text-white transition-all hover:border-dark hover:bg-dark">{c.requestDemo}</a>
                  <a href={lp("/services/")} class="rounded-[3px] border-2 border-white/20 px-8 py-4 text-base font-semibold text-white/70 transition-all hover:border-red hover:bg-red hover:text-white">{c.learnMore}</a>
                </div>
              </div>
              <div class="relative z-[2] hidden lg:block">
                <div class="relative ml-auto w-full max-w-[480px]">
                  <div class="space-y-5">
                    <div class="flex items-center gap-5">
                      <span class="text-[56px] font-extrabold leading-none text-yellow">500+</span>
                      <span class="text-base leading-snug text-white/50">{c.stats[0].label}</span>
                    </div>
                    <div class="h-px bg-white/10" />
                    <div class="flex items-center gap-5">
                      <span class="text-[56px] font-extrabold leading-none text-white/90">30+</span>
                      <span class="text-base leading-snug text-white/50">{c.stats[1].label}</span>
                    </div>
                    <div class="h-px bg-white/10" />
                    <div class="flex items-center gap-5">
                      <span class="text-[56px] font-extrabold leading-none text-green">98%</span>
                      <span class="text-base leading-snug text-white/50">{c.stats[3].label}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <img src="/hero-line.png" alt="" width={600} height={800} aria-hidden="true" class="pointer-events-none absolute top-0 left-[20%] z-0 hidden opacity-15 lg:block" loading="lazy" />
          <img src="/hero-white-line.png" alt="" width={400} height={600} aria-hidden="true" class="pointer-events-none absolute right-[10%] bottom-[100px] z-[4] hidden opacity-60 lg:block" loading="lazy" />
          {/* subtle accent glow */}
          <div class="absolute bottom-0 left-0 z-[1] hidden h-[80px] w-full bg-white lg:block" />
        </div>
      </section>

      {/* FEATURES */}
      <section class="relative z-10 -mt-[30px] pb-24 lg:pb-32">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-px overflow-hidden rounded-xl bg-heading/5 sm:grid-cols-2 lg:grid-cols-4">
            {c.features.map((f, i) => (
              <div key={f.title} class="group bg-white p-8 transition-colors hover:bg-section-bg">
                <span class="text-sm font-semibold text-red/40">{String(i + 1).padStart(2, "0")}</span>
                <h3 class="mt-3 text-lg font-bold text-heading">{f.title}</h3>
                <p class="mt-2 text-sm leading-relaxed text-text">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PROMO */}
      <section class="py-24 lg:py-36">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-start gap-16 lg:grid-cols-5 lg:gap-20">
            <div class="lg:col-span-3">
              <p class="text-sm font-semibold tracking-widest text-red uppercase">{c.stats[2].value} {c.stats[2].label}</p>
              <h2 class="mt-3 text-3xl font-extrabold text-heading sm:text-4xl lg:text-5xl lg:leading-[1.1]">{c.aboutTitle}</h2>
              <p class="mt-6 text-lg leading-relaxed text-text">{c.aboutText}</p>
              <a href={lp("/about/")} class="mt-10 inline-flex rounded-md bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red">{c.discoverMore}</a>
            </div>
            <div class="lg:col-span-2 lg:pt-8">
              <div class="space-y-8">
                {c.stats.map((s) => (
                  <div key={s.label} class="flex items-baseline gap-4 border-b border-heading/10 pb-6">
                    <span class="text-4xl font-extrabold text-heading">{s.value}</span>
                    <span class="text-sm text-text">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT BLOCK */}
      <section class="bg-section-bg py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-3xl">
            <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">{c.simpleTitle}</h2>
            <p class="mt-5 text-lg leading-relaxed text-text">{c.simpleText}</p>
            <ul class="mt-8 space-y-4">
              {c.checklist1.map((item) => (
                <li key={item} class="flex items-start gap-3 text-base">
                  <svg aria-hidden="true" class="mt-0.5 h-5 w-5 shrink-0 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  <span class="text-text">{item}</span>
                </li>
              ))}
            </ul>
            <a href={lp("/services/")} class="mt-10 inline-flex rounded-md bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red">{c.getStarted}</a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section class="bg-[#080F1E] py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">{c.servicesTitle}</h2>
            <p class="mt-4 text-base text-white/50">{c.servicesSub}</p>
          </div>
          <div class="mt-14 grid gap-px overflow-hidden rounded-xl bg-white/5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <a key={s.slug} href={lp(`/services/${s.slug}/`)} class="group block p-8 transition-colors hover:bg-white/[0.04]">
                <svg aria-hidden="true" class="h-6 w-6 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={s.icon} />
                </svg>
                <h3 class="mt-4 text-lg font-bold text-white">{serviceNames[s.slug]?.[locale] || serviceNames[s.slug]?.en}</h3>
                <p class="mt-2 text-sm leading-relaxed text-white/50">{serviceDescs[s.slug]?.[locale] || serviceDescs[s.slug]?.en}</p>
                <span class="mt-4 inline-flex items-center text-sm font-medium text-yellow opacity-0 transition-opacity group-hover:opacity-100">
                  {c.viewDetails}
                  <svg aria-hidden="true" class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </a>
            ))}
          </div>
          <div class="mt-12 text-center">
            <a href={lp("/services/")} class="inline-flex rounded-md bg-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-hover">{c.getStarted}</a>
          </div>
        </div>
      </section>

      {/* DATA */}
      <section class="py-24 lg:py-36">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-start gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">{c.dataTitle}</h2>
              <p class="mt-5 text-lg leading-relaxed text-text">{c.dataText}</p>
            </div>
            <div>
              <ul class="space-y-4">
                {c.checklist2.map((item) => (
                  <li key={item} class="flex items-start gap-3 text-base">
                    <svg aria-hidden="true" class="mt-0.5 h-5 w-5 shrink-0 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-text">{item}</span>
                  </li>
                ))}
              </ul>
              <a href={lp("/services/")} class="mt-10 inline-flex rounded-md bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red">{c.getStarted}</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section class="bg-[#080F1E] py-16">
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">{c.ctaTitle}</h2>
          <p class="mt-4 text-lg text-white/80">{c.ctaSub}</p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href={lp("/contact/")} class="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-red transition-all hover:bg-dark hover:text-white">{c.requestDemo}</a>
            <a href={lp("/about/")} class="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">{c.learnMore}</a>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const titles: Record<string, string> = {
    en: "Eurosynapse | Powering Results. Elevating Excellence.",
    es: "Eurosynapse | Impulsando Resultados. Elevando la Excelencia.",
    fr: "Eurosynapse | Des Resultats. L'Excellence.",
  };
  const descs: Record<string, string> = {
    en: "Eurosynapse drives digital transformation through AI, cloud solutions, and enterprise software.",
    es: "Eurosynapse impulsa la transformacion digital a traves de IA, soluciones cloud y software empresarial.",
    fr: "Eurosynapse accelere la transformation digitale grace a l'IA, au cloud et aux logiciels d'entreprise.",
  };
  const l = params.locale || "en";
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Eurosynapse",
    url: "https://eurosynapse.com",
    logo: "https://eurosynapse.com/eurosynapse-dark.png",
    description: descs.en,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Barcelona",
      addressCountry: "ES",
    },
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      email: "hello@eurosynapse.com",
      contactType: "customer service",
      availableLanguage: ["English", "Spanish", "French"],
    },
  });
  return {
    title: titles[l] || titles.en,
    meta: [
      { name: "description", content: descs[l] || descs.en },
      { property: "og:title", content: titles[l] || titles.en },
      { property: "og:description", content: descs[l] || descs.en },
      { property: "og:type", content: "website" },
    ],
    scripts: [
      { props: { type: "application/ld+json", dangerouslySetInnerHTML: jsonLd } },
    ],
  };
};
