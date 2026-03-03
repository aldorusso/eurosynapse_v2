import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

const features = [
  {
    title: "AI & Automation",
    description: "Agent orchestration, chatbots and predictive models for your business",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Cloud Solutions",
    description: "Scalable infrastructure, migration and multi-cloud strategies",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Cybersecurity",
    description: "SecureOps, threat detection and compliance management",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Enterprise ERP",
    description: "SAP S/4HANA, Business ByDesign and CRM implementations",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const services = [
  {
    title: "Artificial Intelligence",
    description: "Agent orchestration, content generation, NLP and predictive models tailored to your needs.",
    icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z",
  },
  {
    title: "Digital Transformation",
    description: "Custom software, legacy modernization and digital commerce solutions.",
    icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4",
  },
  {
    title: "Data & Analytics",
    description: "Business intelligence dashboards, Big Data and geospatial intelligence.",
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
  },
  {
    title: "Cybersecurity",
    description: "SecureOps, infrastructure protection and regulatory compliance frameworks.",
    icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    title: "Cloud & Infrastructure",
    description: "Cloud migration, scalability, continuous monitoring and managed IT support.",
    icon: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  },
  {
    title: "Enterprise Solutions",
    description: "SAP consulting, HCM, CRM and full ERP transformation services.",
    icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4",
  },
];

const stats = [
  { value: "500+", label: "Happy Clients" },
  { value: "30+", label: "Countries" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "Client Satisfaction" },
];

export default component$(() => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section class="relative z-[1] overflow-hidden bg-[#080F1E]">
        <div class="relative pt-[100px] pb-40 sm:pt-[120px] md:pt-[140px] lg:pt-[180px]">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
              {/* Left — copy */}
              <div class="relative z-[3] text-center lg:text-left">
                <h1 class="text-[38px] font-bold leading-[1.05] text-white sm:text-[42px] md:text-[50px] lg:text-[60px] xl:text-[80px] 2xl:text-[90px]">
                  Powering results on a{" "}
                  <span class="text-red">new level</span>
                </h1>
                <p class="mx-auto mt-5 max-w-lg text-base leading-relaxed text-[#8a95a5] lg:mx-0 xl:pr-14">
                  Advanced technology solutions for managing and transforming
                  your business. Elevate excellence easily and efficiently.
                </p>
                <div class="mt-10 flex flex-wrap justify-center gap-6 lg:justify-start">
                  <a
                    href="/contact/"
                    class="rounded-[3px] border-2 border-red bg-red px-8 py-4 text-base font-semibold text-white transition-all hover:border-dark hover:bg-dark"
                  >
                    Request a Demo
                  </a>
                  <a
                    href="/services/"
                    class="rounded-[3px] border-2 border-white/20 px-8 py-4 text-base font-semibold text-white/70 transition-all hover:border-red hover:bg-red hover:text-white"
                  >
                    Learn More
                  </a>
                </div>
              </div>

              {/* Right — dashboard mockup */}
              <div class="relative z-[2] hidden lg:block">
                <div class="relative w-full max-w-[520px] ml-auto">
                  {/* Main card */}
                  <div class="rounded-xl border border-white/[0.08] bg-white/[0.04] p-5 backdrop-blur-sm">
                    {/* Top bar */}
                    <div class="mb-4 flex items-center gap-1.5">
                      <span class="h-2.5 w-2.5 rounded-full bg-red" />
                      <span class="h-2.5 w-2.5 rounded-full bg-yellow" />
                      <span class="h-2.5 w-2.5 rounded-full bg-green" />
                      <span class="ml-3 h-2.5 w-28 rounded bg-white/10" />
                    </div>
                    {/* Stat row */}
                    <div class="grid grid-cols-3 gap-3">
                      <div class="rounded-lg bg-white/[0.06] p-3.5">
                        <p class="text-[11px] text-white/40">Revenue</p>
                        <p class="mt-1 text-lg font-bold text-white">$2.4M</p>
                        <span class="text-[11px] text-green">+12.5%</span>
                      </div>
                      <div class="rounded-lg bg-white/[0.06] p-3.5">
                        <p class="text-[11px] text-white/40">Users</p>
                        <p class="mt-1 text-lg font-bold text-white">14.2K</p>
                        <span class="text-[11px] text-green">+8.3%</span>
                      </div>
                      <div class="rounded-lg bg-white/[0.06] p-3.5">
                        <p class="text-[11px] text-white/40">Uptime</p>
                        <p class="mt-1 text-lg font-bold text-white">99.9%</p>
                        <span class="text-[11px] text-green">Stable</span>
                      </div>
                    </div>
                    {/* Chart area */}
                    <div class="mt-3 rounded-lg bg-white/[0.06] p-3.5">
                      <div class="flex items-end justify-between gap-1" style={{ height: "80px" }}>
                        {[35, 50, 40, 65, 55, 80, 70, 90, 60, 75, 85, 95].map(
                          (h, i) => (
                            <div
                              key={i}
                              class="flex-1 rounded-sm"
                              style={{
                                height: `${h}%`,
                                background:
                                  i >= 10
                                    ? "#f54748"
                                    : "rgba(255,255,255,0.12)",
                              }}
                            />
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                  {/* Floating mini-card */}
                  <div class="absolute -bottom-5 -left-6 z-10 rounded-lg border border-white/[0.08] bg-[#0d1528] px-4 py-3 shadow-xl">
                    <div class="flex items-center gap-3">
                      <div class="flex h-9 w-9 items-center justify-center rounded-full bg-green/20">
                        <svg class="h-4 w-4 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <div>
                        <p class="text-[13px] font-semibold text-white">Project Deployed</p>
                        <p class="text-[11px] text-white/40">2 minutes ago</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative hero lines */}
          <img
            src="/hero-line.png"
            alt=""
            class="pointer-events-none absolute top-0 left-[20%] z-0 hidden opacity-15 lg:block"
          />
          <img
            src="/hero-white-line.png"
            alt=""
            class="pointer-events-none absolute right-[10%] bottom-[100px] z-[4] hidden opacity-60 lg:block"
          />

          {/* Subtle radial glow */}
          <div class="pointer-events-none absolute top-1/2 right-0 z-0 hidden h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-red/[0.04] blur-[120px] lg:block" />

          {/* White bottom strip (Xmoze overlap) */}
          <div class="absolute bottom-0 left-0 z-[1] hidden h-[80px] w-full bg-white lg:block" />
        </div>
      </section>

      {/* ===== FEATURES (floating cards, Xmoze mtm-30) ===== */}
      <section class="relative z-10 -mt-[30px] pb-20 lg:pb-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div key={f.title} class="mt-[30px] rounded-[5px] bg-white p-7 shadow-[0_4px_80px_rgba(8,15,30,0.06)] transition-all hover:-translate-y-1">
                <div class="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-red/10">
                  <svg class="h-6 w-6 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={f.icon} />
                  </svg>
                </div>
                <h3 class="mb-2 text-lg font-bold text-heading">{f.title}</h3>
                <p class="text-base leading-relaxed text-text">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT PROMO (light bg) ===== */}
      <section class="bg-section-bg py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div class="overflow-hidden rounded-2xl bg-dark/5">
              <div class="flex aspect-video w-full items-center justify-center bg-gradient-to-br from-dark/10 to-dark/5">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-red text-white shadow-lg">
                  <svg class="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">
                Technology for easy business transformation
              </h2>
              <p class="mt-5 text-base leading-relaxed text-text">
                Eurosynapse provides comprehensive solutions to control and
                modernize your entire business ecosystem. Our approach is simple:
                understand your goals, then deliver measurable results.
              </p>
              <div class="mt-8 flex gap-10">
                {stats.slice(0, 2).map((s) => (
                  <div key={s.label}>
                    <h3 class="text-3xl font-extrabold text-heading">{s.value}</h3>
                    <p class="mt-1 text-sm text-text">{s.label}</p>
                  </div>
                ))}
              </div>
              <a href="/about/" class="mt-8 inline-flex rounded-md bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red">
                Discover More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CONTENT BLOCK (white bg, checklist) ===== */}
      <section class="py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div class="order-2 lg:order-1">
              <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">
                Simple approach for complex challenges
              </h2>
              <p class="mt-5 text-base leading-relaxed text-text">
                Eurosynapse combines deep technical expertise with clear
                business understanding. One partner that brings your whole
                digital strategy together.
              </p>
              <ul class="mt-6 space-y-3">
                {[
                  "End-to-end digital transformation consulting",
                  "AI-driven automation and intelligent workflows",
                  "Scalable cloud infrastructure and migration",
                ].map((item) => (
                  <li key={item} class="flex items-start gap-3">
                    <svg class="mt-0.5 h-5 w-5 shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-text">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/services/" class="mt-8 inline-flex rounded-md bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red">
                Get Started
              </a>
            </div>
            <div class="order-1 lg:order-2">
              <div class="grid grid-cols-4 gap-4">
                {stats.map((s) => (
                  <div key={s.label} class="rounded-xl bg-section-bg p-4 text-center">
                    <p class="text-xl font-extrabold text-heading sm:text-2xl">{s.value}</p>
                    <p class="mt-1 text-xs text-text">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES (dark section) ===== */}
      <section class="bg-dark py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
              Awesome services grow your business value
            </h2>
            <p class="mt-4 text-base text-white/50">
              Eurosynapse delivers end-to-end technology solutions. One partner
              that brings your whole digital strategy together.
            </p>
          </div>
          <div class="mt-14 grid gap-6 text-center sm:grid-cols-2 lg:grid-cols-3 lg:text-left">
            {services.map((s) => (
              <div key={s.title} class="group rounded-xl bg-dark-card p-8 transition-all hover:-translate-y-1 hover:bg-dark-card/80">
                <div class="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-red/20 lg:mx-0">
                  <svg class="h-7 w-7 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={s.icon} />
                  </svg>
                </div>
                <h3 class="mt-5 text-lg font-bold text-white">{s.title}</h3>
                <p class="mt-3 text-sm leading-relaxed text-white/50">{s.description}</p>
                <a href="/services/" class="mt-4 inline-flex items-center text-sm font-medium text-red transition-colors hover:text-yellow">
                  View Details
                  <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
          <div class="mt-12 text-center">
            <a href="/services/" class="inline-flex rounded-md bg-red px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-red-hover">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* ===== DATA SECTION ===== */}
      <section class="py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <div class="grid grid-cols-2 gap-4">
                <div class="rounded-xl bg-section-bg p-6">
                  <div class="h-32 rounded-lg bg-gradient-to-br from-red/10 to-yellow/10" />
                </div>
                <div class="mt-8 rounded-xl bg-section-bg p-6">
                  <div class="h-32 rounded-lg bg-gradient-to-br from-green/10 to-dark/10" />
                </div>
              </div>
            </div>
            <div>
              <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">
                Manage data & get instant insights
              </h2>
              <p class="mt-5 text-base leading-relaxed text-text">
                Our data intelligence platform allows you to visualize,
                analyze and act on your business data in real time.
              </p>
              <ul class="mt-6 space-y-3">
                {[
                  "Interactive dashboards and real-time reporting",
                  "Big Data processing and geospatial intelligence",
                  "Predictive analytics for strategic planning",
                ].map((item) => (
                  <li key={item} class="flex items-start gap-3">
                    <svg class="mt-0.5 h-5 w-5 shrink-0 text-red" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-text">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="/services/" class="mt-8 inline-flex rounded-md bg-dark px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-red">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== CTA BANNER (red) ===== */}
      <section class="bg-red py-16">
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to transform your business?
          </h2>
          <p class="mt-4 text-lg text-white/80">
            Let's discuss how Eurosynapse can help you achieve your digital goals.
          </p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a href="/contact/" class="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-red transition-all hover:bg-dark hover:text-white">
              Request a Demo
            </a>
            <a href="/about/" class="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
      </section>
    </>
  );
});

export const head: DocumentHead = {
  title: "Eurosynapse | Powering Results. Elevating Excellence.",
  meta: [
    {
      name: "description",
      content: "Eurosynapse drives digital transformation through AI, cloud solutions, and enterprise software. Powering results and elevating excellence worldwide.",
    },
    { property: "og:title", content: "Eurosynapse | Powering Results. Elevating Excellence." },
    { property: "og:description", content: "Advanced technology solutions for managing and transforming your business." },
    { property: "og:type", content: "website" },
  ],
};
