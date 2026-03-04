import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const values = [
  {
    name: "Innovation",
    description: "We push boundaries and embrace emerging technologies to solve complex challenges.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    name: "Transparency",
    description: "Open communication and honest partnerships built on trust and mutual respect.",
    icon: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z",
  },
  {
    name: "Collaboration",
    description: "We work alongside our clients as true partners, sharing knowledge and driving results together.",
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
  },
];

const team = [
  { name: "CEO", role: "Chief Executive Officer" },
  { name: "CTO", role: "Chief Technology Officer" },
  { name: "COO", role: "Chief Operating Officer" },
  { name: "CFO", role: "Chief Financial Officer" },
];

const locations = [
  { city: "Barcelona", country: "Spain", type: "Headquarters" },
  { city: "Madrid", country: "Spain", type: "Office" },
  { city: "Lisbon", country: "Portugal", type: "Office" },
  { city: "London", country: "United Kingdom", type: "Office" },
];

export default component$(() => {
  return (
    <div class="pt-16">
      {/* Header */}
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Our Story
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            About Eurosynapse
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            A technology company committed to innovation, transparency and
            long-lasting partnerships.
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 class="text-3xl font-bold text-heading">Who We Are</h2>
              <p class="mt-6 text-lg leading-relaxed text-text">
                Eurosynapse is a technology and consulting company dedicated
                to helping organizations navigate and thrive in the digital
                era. With deep expertise across AI, cloud, cybersecurity and
                enterprise solutions, we partner with businesses of all sizes
                to deliver measurable transformation.
              </p>
              <p class="mt-4 text-lg leading-relaxed text-text">
                Our mission is to empower businesses through technology.
                Our vision is to be the trusted partner of choice for
                organizations seeking sustainable digital growth.
              </p>
            </div>
            <div class="rounded-2xl bg-section-bg p-8">
              <h3 class="text-xl font-bold text-heading">Why Choose Eurosynapse?</h3>
              <ul class="mt-6 space-y-4">
                {[
                  "Proven track record with 500+ successful projects",
                  "Deep industry expertise across 8+ sectors",
                  "Strategic partnerships with leading technology vendors",
                  "Agile delivery with a focus on measurable outcomes",
                  "Commitment to security, compliance and best practices",
                ].map((item) => (
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

      {/* Values */}
      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">Our Values</h2>
          <div class="mt-12 grid gap-8 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} class="rounded-xl bg-white p-8 text-center shadow-sm">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-red/10">
                  <svg class="h-7 w-7 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={value.icon} />
                  </svg>
                </div>
                <h3 class="mt-6 text-lg font-semibold text-heading">{value.name}</h3>
                <p class="mt-3 text-sm leading-relaxed text-text">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">Leadership Team</h2>
          <p class="mt-4 text-center text-lg text-text">The people behind Eurosynapse's success.</p>
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

      {/* Locations */}
      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">Our Locations</h2>
          <p class="mt-4 text-center text-lg text-text">Global presence, local expertise.</p>
          <div class="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {locations.map((loc) => (
              <div key={loc.city} class="rounded-xl bg-white p-6 text-center shadow-sm">
                <svg class="mx-auto h-8 w-8 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <h3 class="mt-3 font-semibold text-heading">{loc.city}</h3>
                <p class="text-sm text-text">{loc.country}</p>
                <span class="mt-2 inline-block rounded-full bg-red/10 px-3 py-1 text-xs font-medium text-red">
                  {loc.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "About Us | Eurosynapse",
  meta: [
    {
      name: "description",
      content: "Learn about Eurosynapse's mission, values, leadership team and global presence. Innovation, transparency and collaboration at our core.",
    },
  ],
};
