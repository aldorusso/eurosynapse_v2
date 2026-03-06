import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const perkIcons = [
  "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  "M13 10V3L4 14h7v7l9-11h-7z",
  "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
];

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Join Us", title: "Careers", subtitle: "Build your career at Eurosynapse. Shape the future of technology with a team that values innovation, growth and impact.",
      whyTitle: "Why Work With Us",
      perks: [
        { title: "Growth & Learning", description: "Continuous training, certifications and career development programs." },
        { title: "Flexible Work", description: "Remote-friendly culture with flexible hours and work-life balance." },
        { title: "Innovation Culture", description: "Work with cutting-edge technologies and contribute to meaningful projects." },
        { title: "Global Team", description: "Collaborate with talented professionals across multiple countries." },
      ],
      openTitle: "Open Positions", openText: "We're always looking for talented people. Check back soon for new openings or send us your resume.",
      noPositions: "No open positions at the moment.", sendResume: "Send Your Resume",
    },
    es: {
      label: "Unete", title: "Carreras", subtitle: "Construye tu carrera en Eurosynapse. Forma el futuro de la tecnologia con un equipo que valora la innovacion, el crecimiento y el impacto.",
      whyTitle: "Por que Trabajar con Nosotros",
      perks: [
        { title: "Crecimiento y Aprendizaje", description: "Formacion continua, certificaciones y programas de desarrollo profesional." },
        { title: "Trabajo Flexible", description: "Cultura remota con horarios flexibles y equilibrio vida-trabajo." },
        { title: "Cultura de Innovacion", description: "Trabaja con tecnologias de vanguardia y contribuye a proyectos significativos." },
        { title: "Equipo Global", description: "Colabora con profesionales talentosos de multiples paises." },
      ],
      openTitle: "Posiciones Abiertas", openText: "Siempre buscamos personas talentosas. Vuelve pronto para nuevas oportunidades o envianos tu CV.",
      noPositions: "No hay posiciones abiertas en este momento.", sendResume: "Enviar tu CV",
    },
    fr: {
      label: "Rejoignez-nous", title: "Carrieres", subtitle: "Construisez votre carriere chez Eurosynapse. Faconnez l'avenir de la technologie avec une equipe qui valorise l'innovation.",
      whyTitle: "Pourquoi Travailler avec Nous",
      perks: [
        { title: "Croissance et Apprentissage", description: "Formation continue, certifications et programmes de developpement." },
        { title: "Travail Flexible", description: "Culture remote avec horaires flexibles et equilibre vie pro-perso." },
        { title: "Culture d'Innovation", description: "Travaillez avec des technologies de pointe et contribuez a des projets significatifs." },
        { title: "Equipe Mondiale", description: "Collaborez avec des professionnels talentueux de plusieurs pays." },
      ],
      openTitle: "Postes Ouverts", openText: "Nous recherchons toujours des personnes talentueuses. Revenez bientot ou envoyez-nous votre CV.",
      noPositions: "Aucun poste ouvert pour le moment.", sendResume: "Envoyer votre CV",
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
          <h2 class="text-center text-3xl font-bold text-heading">{c.whyTitle}</h2>
          <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {c.perks.map((perk, i) => (
              <div key={perk.title} class="rounded-xl bg-section-bg p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red/10">
                  <svg class="h-6 w-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={perkIcons[i]} />
                  </svg>
                </div>
                <h3 class="mt-4 font-semibold text-heading">{perk.title}</h3>
                <p class="mt-2 text-sm text-text">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold text-heading">{c.openTitle}</h2>
            <p class="mt-4 text-lg text-text">{c.openText}</p>
            <div class="mt-8 rounded-2xl bg-white p-10 shadow-sm">
              <p class="text-text">{c.noPositions}</p>
              <a href={lp("/contact/")} class="mt-6 inline-flex rounded-lg bg-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover">{c.sendResume}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t: Record<string, { title: string; desc: string }> = {
    en: { title: "Careers | Eurosynapse", desc: "Join Eurosynapse. Explore career opportunities and our culture." },
    es: { title: "Carreras | Eurosynapse", desc: "Unete a Eurosynapse. Explora oportunidades laborales y nuestra cultura." },
    fr: { title: "Carrieres | Eurosynapse", desc: "Rejoignez Eurosynapse. Explorez les opportunites et notre culture." },
  };
  const l = params.locale || "en"; const d = t[l] || t.en;
  return { title: d.title, meta: [
    { name: "description", content: d.desc },
    { property: "og:title", content: d.title },
    { property: "og:description", content: d.desc },
    { property: "og:type", content: "website" },
  ] };
};
