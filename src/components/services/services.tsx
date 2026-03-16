import { component$ } from "@builder.io/qwik";

const services = [
  {
    title: "Custom Software",
    description:
      "Tailored applications built to fit your unique business needs, from concept to deployment and beyond.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Cloud Solutions",
    description:
      "Scalable cloud infrastructure and seamless migration strategies that grow with your business.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Data & Analytics",
    description:
      "Transform raw data into actionable insights with advanced analytics and business intelligence tools.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Digital Strategy",
    description:
      "End-to-end digital transformation consulting to future-proof your operations and accelerate growth.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
];

export const Services = component$(() => {
  return (
    <section id="services" class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div class="mx-auto max-w-2xl text-center">
          <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">
            What We Do
          </p>
          <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Our Services
          </h2>
          <p class="mt-4 text-lg text-gray-500">
            We deliver comprehensive technology solutions tailored to your
            business objectives.
          </p>
        </div>

        {/* Cards grid */}
        <div class="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              class="group rounded-xl border border-gray-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div class="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-50 transition-colors group-hover:bg-blue-600">
                <svg
                  class="h-6 w-6 text-blue-600 transition-colors group-hover:text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={1.5}
                    d={service.icon}
                  />
                </svg>
              </div>
              <h3 class="mt-6 text-lg font-semibold text-gray-900">
                {service.title}
              </h3>
              <p class="mt-3 text-sm leading-relaxed text-gray-500">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
});
