import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const industries = [
  {
    name: "Public Sector & Government",
    description: "Digital solutions for public administration, citizen services and government modernization.",
    icon: "M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4z",
  },
  {
    name: "Healthcare & Social Care",
    description: "Innovative technology for patient care, health systems and social services.",
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
  },
  {
    name: "Financial Services, Banking & Insurance",
    description: "Secure and compliant solutions for banks, insurers and financial institutions.",
    icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z",
  },
  {
    name: "Energy, Utilities & Commodities",
    description: "Driving efficiency and sustainability across the energy and utilities sector.",
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
  },
  {
    name: "Retail & Consumer Products",
    description: "Digital commerce and customer experience transformation for retail brands.",
    icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z",
  },
  {
    name: "Transport, Mobility & Logistics",
    description: "Smart logistics, fleet management and mobility solutions.",
    icon: "M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4",
  },
  {
    name: "Telecommunications, Media & Technology",
    description: "Next-generation networks, media platforms and tech innovation.",
    icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.858 15.355-5.858 21.213 0",
  },
  {
    name: "Manufacturing & Industry",
    description: "Industry 4.0 solutions, IoT, smart factories and supply chain optimization.",
    icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z",
  },
];

export default component$(() => {
  return (
    <div class="pt-16">
      {/* Header */}
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Sectors We Serve
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Industries
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            Deep domain expertise across the sectors that shape our world.
          </p>
        </div>
      </section>

      {/* Industries grid */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {industries.map((industry) => (
              <div
                key={industry.name}
                class="group rounded-xl border border-heading/10 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-red/10 transition-colors group-hover:bg-red">
                  <svg
                    class="h-6 w-6 text-red transition-colors group-hover:text-white"
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={industry.icon} />
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

export const head: DocumentHead = {
  title: "Industries | Eurosynapse",
  meta: [
    {
      name: "description",
      content: "Eurosynapse serves public sector, healthcare, financial services, energy, retail, transport, telecom and manufacturing industries.",
    },
  ],
};
