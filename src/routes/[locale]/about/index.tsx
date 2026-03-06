import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Our Story", title: "About Eurosynapse",
      subtitle: "A technology company committed to innovation, transparency and long-lasting partnerships.",
      whoTitle: "Who We Are",
      whoP1: "Eurosynapse is a technology and consulting company dedicated to helping organizations navigate and thrive in the digital era. With deep expertise across AI, cloud, cybersecurity and enterprise solutions, we partner with businesses of all sizes to deliver measurable transformation.",
      whoP2: "Our mission is to empower businesses through technology. Our vision is to be the trusted partner of choice for organizations seeking sustainable digital growth.",
      whyTitle: "Why Choose Eurosynapse?",
      whyItems: ["Proven track record with 500+ successful projects", "Deep industry expertise across 8+ sectors", "Strategic partnerships with leading technology vendors", "Agile delivery with a focus on measurable outcomes", "Commitment to security, compliance and best practices"],
      valuesTitle: "Our Values",
      values: [
        { name: "Innovation", description: "We push boundaries and embrace emerging technologies to solve complex challenges." },
        { name: "Transparency", description: "Open communication and honest partnerships built on trust and mutual respect." },
        { name: "Collaboration", description: "We work alongside our clients as true partners, sharing knowledge and driving results together." },
      ],
      leaderTitle: "Leadership Team", leaderSub: "The people behind Eurosynapse's success.",
      locTitle: "Our Locations", locSub: "Global presence, local expertise.",
      hq: "Headquarters", office: "Office",
    },
    es: {
      label: "Nuestra Historia", title: "Sobre Eurosynapse",
      subtitle: "Una empresa tecnologica comprometida con la innovacion, la transparencia y alianzas duraderas.",
      whoTitle: "Quienes Somos",
      whoP1: "Eurosynapse es una empresa de tecnologia y consultoria dedicada a ayudar a las organizaciones a navegar y prosperar en la era digital. Con profunda experiencia en IA, cloud, ciberseguridad y soluciones empresariales, nos asociamos con empresas de todos los tamanos para entregar transformacion medible.",
      whoP2: "Nuestra mision es empoderar negocios a traves de la tecnologia. Nuestra vision es ser el socio de confianza para organizaciones que buscan crecimiento digital sostenible.",
      whyTitle: "Por que elegir Eurosynapse?",
      whyItems: ["Historial probado con mas de 500 proyectos exitosos", "Profunda experiencia en mas de 8 sectores", "Alianzas estrategicas con proveedores tecnologicos lideres", "Entrega agil con enfoque en resultados medibles", "Compromiso con la seguridad, cumplimiento y mejores practicas"],
      valuesTitle: "Nuestros Valores",
      values: [
        { name: "Innovacion", description: "Superamos limites y adoptamos tecnologias emergentes para resolver retos complejos." },
        { name: "Transparencia", description: "Comunicacion abierta y alianzas honestas construidas sobre confianza y respeto mutuo." },
        { name: "Colaboracion", description: "Trabajamos junto a nuestros clientes como verdaderos socios, compartiendo conocimiento e impulsando resultados juntos." },
      ],
      leaderTitle: "Equipo Directivo", leaderSub: "Las personas detras del exito de Eurosynapse.",
      locTitle: "Nuestras Ubicaciones", locSub: "Presencia global, experiencia local.",
      hq: "Sede Central", office: "Oficina",
    },
    fr: {
      label: "Notre Histoire", title: "A propos d'Eurosynapse",
      subtitle: "Une entreprise technologique engagee dans l'innovation, la transparence et les partenariats durables.",
      whoTitle: "Qui Sommes-Nous",
      whoP1: "Eurosynapse est une entreprise de technologie et de conseil dediee a aider les organisations a naviguer et prosperer a l'ere numerique. Avec une expertise approfondie en IA, cloud, cybersecurite et solutions d'entreprise, nous nous associons a des entreprises de toutes tailles pour delivrer une transformation mesurable.",
      whoP2: "Notre mission est d'autonomiser les entreprises grace a la technologie. Notre vision est d'etre le partenaire de confiance pour les organisations en quete de croissance digitale durable.",
      whyTitle: "Pourquoi choisir Eurosynapse?",
      whyItems: ["Bilan prouve avec plus de 500 projets reussis", "Expertise approfondie dans plus de 8 secteurs", "Partenariats strategiques avec les principaux fournisseurs", "Livraison agile axee sur des resultats mesurables", "Engagement envers la securite, la conformite et les meilleures pratiques"],
      valuesTitle: "Nos Valeurs",
      values: [
        { name: "Innovation", description: "Nous repoussons les limites et adoptons les technologies emergentes pour resoudre des defis complexes." },
        { name: "Transparence", description: "Communication ouverte et partenariats honnetes batis sur la confiance et le respect mutuel." },
        { name: "Collaboration", description: "Nous travaillons aux cotes de nos clients en tant que veritables partenaires, partageant les connaissances et generant des resultats ensemble." },
      ],
      leaderTitle: "Equipe de Direction", leaderSub: "Les personnes derriere le succes d'Eurosynapse.",
      locTitle: "Nos Bureaux", locSub: "Presence mondiale, expertise locale.",
      hq: "Siege Social", office: "Bureau",
    },
  };
  return c[locale] || c.en;
};

const valueIcons = [
  "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
];

const team = [
  { name: "CEO", role: "Chief Executive Officer" },
  { name: "CTO", role: "Chief Technology Officer" },
  { name: "COO", role: "Chief Operating Officer" },
  { name: "CFO", role: "Chief Financial Officer" },
];

const locations = [
  { city: "Barcelona", country: "Spain", isHQ: true },
  { city: "Madrid", country: "Spain", isHQ: false },
  { city: "Lisbon", country: "Portugal", isHQ: false },
  { city: "London", country: "United Kingdom", isHQ: false },
];

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
          <div class="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold text-heading">{c.whoTitle}</h2>
              <p class="mt-6 text-lg leading-relaxed text-text">{c.whoP1}</p>
              <p class="mt-4 text-lg leading-relaxed text-text">{c.whoP2}</p>
            </div>
            <div class="rounded-2xl bg-section-bg p-8">
              <h3 class="text-xl font-bold text-heading">{c.whyTitle}</h3>
              <ul class="mt-6 space-y-4">
                {c.whyItems.map((item) => (
                  <li key={item} class="flex items-start gap-3">
                    <svg class="mt-1 h-5 w-5 shrink-0 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span class="text-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">{c.valuesTitle}</h2>
          <div class="mt-12 grid gap-8 sm:grid-cols-3">
            {c.values.map((value, i) => (
              <div key={value.name} class="rounded-xl bg-white p-8 text-center shadow-sm">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-red/10">
                  <svg class="h-7 w-7 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={valueIcons[i]} />
                  </svg>
                </div>
                <h3 class="mt-6 text-lg font-semibold text-heading">{value.name}</h3>
                <p class="mt-3 text-sm leading-relaxed text-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">{c.leaderTitle}</h2>
          <p class="mt-4 text-center text-lg text-text">{c.leaderSub}</p>
          <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => (
              <div key={member.role} class="rounded-xl bg-section-bg p-6 text-center">
                <div class="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-red/10">
                  <svg class="h-10 w-10 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 class="mt-4 font-semibold text-heading">{member.name}</h3>
                <p class="mt-1 text-sm text-text">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">{c.locTitle}</h2>
          <p class="mt-4 text-center text-lg text-text">{c.locSub}</p>
          <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((l) => (
              <div key={l.city} class="rounded-xl bg-white p-6 text-center shadow-sm">
                <svg class="mx-auto h-8 w-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 class="mt-3 font-semibold text-heading">{l.city}</h3>
                <p class="text-sm text-text">{l.country}</p>
                <span class="mt-2 inline-block rounded-full bg-red/10 px-3 py-1 text-xs font-medium text-red">
                  {l.isHQ ? c.hq : c.office}
                </span>
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
    en: { title: "About Us | Eurosynapse", desc: "Learn about Eurosynapse's mission, values, leadership team and global presence." },
    es: { title: "Sobre Nosotros | Eurosynapse", desc: "Conoce la mision, valores, equipo directivo y presencia global de Eurosynapse." },
    fr: { title: "A propos | Eurosynapse", desc: "Decouvrez la mission, les valeurs, l'equipe de direction et la presence mondiale d'Eurosynapse." },
  };
  const l = params.locale || "en";
  const d = t[l] || t.en;
  return { title: d.title, meta: [{ name: "description", content: d.desc }] };
};
