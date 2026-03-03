import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const strategicPartners = [
  "Microsoft",
  "SAP",
  "HPE",
  "IBM",
  "Cisco",
  "Dell Technologies",
  "Fortinet",
  "AWS",
];

export default component$(() => {
  return (
    <div class="pt-16">
      {/* Header */}
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Stronger Together
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Partner Ecosystem
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            We collaborate with the world's leading technology providers
            to deliver best-in-class solutions.
          </p>
        </div>
      </section>

      {/* Strategic Partners */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold text-heading">Strategic Alliances</h2>
            <p class="mt-4 text-lg text-text">
              Our partnerships with industry leaders ensure we deliver proven,
              enterprise-grade technology solutions.
            </p>
          </div>

          <div class="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
            {strategicPartners.map((partner) => (
              <div
                key={partner}
                class="flex h-24 items-center justify-center rounded-xl border border-heading/10 bg-white shadow-sm transition-all hover:shadow-md"
              >
                <span class="text-lg font-bold text-text">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Alliances */}
      <section class="bg-section-bg py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-bold text-heading">Global Alliances</h2>
            <p class="mt-4 text-lg text-text">
              As part of international provider networks, we extend our reach
              and capabilities to deliver consistent quality across borders.
            </p>
          </div>
          <div class="mt-12 rounded-2xl bg-white p-10 text-center shadow-sm">
            <p class="text-text">
              Eurosynapse belongs to global networks of technology providers,
              enabling scalable delivery models and cross-border collaboration
              to support our clients' international expansion strategies.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Partner Ecosystem | Eurosynapse",
  meta: [
    {
      name: "description",
      content: "Eurosynapse partners with Microsoft, SAP, HPE, IBM, Cisco, Dell Technologies, Fortinet and more to deliver enterprise solutions.",
    },
  ],
};
