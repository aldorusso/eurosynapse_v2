import { component$ } from "@builder.io/qwik";

export const Hero = component$(() => {
  return (
    <section
      id="home"
      class="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 pt-16"
    >
      {/* Background pattern */}
      <div class="absolute inset-0 opacity-10">
        <div class="absolute top-20 left-10 h-72 w-72 rounded-full bg-white blur-3xl" />
        <div class="absolute right-10 bottom-10 h-96 w-96 rounded-full bg-blue-300 blur-3xl" />
      </div>

      <div class="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40">
        <div class="max-w-3xl">
          <p class="mb-4 text-sm font-semibold tracking-widest text-blue-200 uppercase">
            Technology & Innovation
          </p>
          <h1 class="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Empowering Digital{" "}
            <span class="text-blue-200">Transformation</span>
          </h1>
          <p class="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100 sm:text-xl">
            We build innovative software solutions that drive business growth.
            From cloud infrastructure to custom applications, Eurosynapse
            delivers technology that makes a difference.
          </p>
          <div class="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              class="inline-flex items-center justify-center rounded-lg bg-white px-8 py-3.5 text-base font-semibold text-blue-700 shadow-lg transition-all hover:bg-blue-50 hover:shadow-xl"
            >
              Get in Touch
              <svg
                class="ml-2 h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#services"
              class="inline-flex items-center justify-center rounded-lg border-2 border-white/30 px-8 py-3.5 text-base font-semibold text-white transition-all hover:border-white/60 hover:bg-white/10"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
});
