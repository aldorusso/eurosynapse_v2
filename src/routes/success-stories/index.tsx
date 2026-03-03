import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const stories = [
  {
    client: "Global Financial Group",
    industry: "Financial Services",
    title: "AI-Driven Risk Assessment Platform",
    result: "40% reduction in risk evaluation time",
    description: "Implemented a predictive analytics engine that transformed risk management operations across 12 countries.",
  },
  {
    client: "National Health Service",
    industry: "Healthcare",
    title: "Digital Patient Care Modernization",
    result: "60% improvement in patient data processing",
    description: "Legacy system modernization and cloud migration enabling real-time patient care coordination.",
  },
  {
    client: "European Logistics Corp",
    industry: "Transport & Logistics",
    title: "Smart Supply Chain Optimization",
    result: "35% reduction in operational costs",
    description: "End-to-end IoT and analytics solution for fleet management and route optimization.",
  },
];

export default component$(() => {
  return (
    <div class="pt-16">
      {/* Header */}
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Proven Impact
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Success Stories
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            Real results from real partnerships. Discover how we help
            organizations achieve measurable outcomes.
          </p>
        </div>
      </section>

      {/* Stories */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="space-y-10">
            {stories.map((story) => (
              <div key={story.title} class="rounded-2xl border border-heading/10 bg-white p-8 shadow-sm lg:p-10">
                <div class="flex flex-wrap items-center gap-3">
                  <span class="rounded-full bg-red/10 px-3 py-1 text-xs font-semibold text-red">
                    {story.industry}
                  </span>
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
            <h3 class="text-xl font-bold text-heading">Have a project in mind?</h3>
            <p class="mt-2 text-text">Let's create your own success story.</p>
            <a
              href="/contact/"
              class="mt-6 inline-flex rounded-lg bg-red px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Success Stories | Eurosynapse",
  meta: [
    {
      name: "description",
      content: "Discover how Eurosynapse has helped organizations modernize, adopt AI, reduce costs and achieve digital transformation success.",
    },
  ],
};
