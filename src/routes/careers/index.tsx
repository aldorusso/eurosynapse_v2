import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const perks = [
  {
    title: "Growth & Learning",
    description: "Continuous training, certifications and career development programs.",
    icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253",
  },
  {
    title: "Flexible Work",
    description: "Remote-friendly culture with flexible hours and work-life balance.",
    icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
  },
  {
    title: "Innovation Culture",
    description: "Work with cutting-edge technologies and contribute to meaningful projects.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    title: "Global Team",
    description: "Collaborate with talented professionals across multiple countries.",
    icon: "M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
];

export default component$(() => {
  return (
    <div class="pt-16">
      {/* Header */}
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Join Us
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Careers
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            Build your career at Eurosynapse. Shape the future of technology
            with a team that values innovation, growth and impact.
          </p>
        </div>
      </section>

      {/* Culture & Perks */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 class="text-center text-3xl font-bold text-heading">Why Work With Us</h2>
          <div class="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {perks.map((perk) => (
              <div key={perk.title} class="rounded-xl bg-section-bg p-6 text-center">
                <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-lg bg-red/10">
                  <svg class="h-6 w-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={perk.icon} />
                  </svg>
                </div>
                <h3 class="mt-4 font-semibold text-heading">{perk.title}</h3>
                <p class="mt-2 text-sm text-text">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold text-heading">Open Positions</h2>
            <p class="mt-4 text-lg text-text">
              We're always looking for talented people. Check back soon for new openings
              or send us your resume.
            </p>
            <div class="mt-8 rounded-2xl bg-white p-10 shadow-sm">
              <p class="text-text">No open positions at the moment.</p>
              <a
                href="/contact/"
                class="mt-6 inline-flex rounded-lg bg-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
              >
                Send Your Resume
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Careers | Eurosynapse",
  meta: [
    {
      name: "description",
      content: "Join Eurosynapse. Explore career opportunities, our culture and what makes us a great place to work in technology.",
    },
  ],
};
