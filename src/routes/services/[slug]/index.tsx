import { component$ } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { DocumentHead } from "@builder.io/qwik-city";
import { getServiceBySlug, getRelatedServices } from "~/data/services";

export const useServiceDetail = routeLoader$(({ params, status }) => {
  const service = getServiceBySlug(params.slug);
  if (!service) {
    status(404);
    return null;
  }
  const related = getRelatedServices(service.relatedSlugs);
  return { service, related };
});

export default component$(() => {
  const data = useServiceDetail();

  if (!data.value) {
    return (
      <div class="flex min-h-[60vh] items-center justify-center pt-16">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-heading">Service Not Found</h1>
          <p class="mt-4 text-text">The service you're looking for doesn't exist.</p>
          <a
            href="/services/"
            class="mt-6 inline-flex rounded-md bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
          >
            View All Services
          </a>
        </div>
      </div>
    );
  }

  const { service, related } = data.value;

  return (
    <div class="pt-16">
      {/* ===== HERO ===== */}
      <section class="bg-[#080F1E] pt-20 pb-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="flex items-center gap-2 text-sm text-white/40">
            <a href="/services/" class="transition-colors hover:text-white/70">
              Services
            </a>
            <span>/</span>
            <span class="text-white/60">{service.shortTitle}</span>
          </div>
          <p class="mt-6 text-sm font-semibold tracking-widest text-red uppercase">
            {service.accentLabel}
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl lg:max-w-3xl">
            {service.heroHeadline}
          </h1>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-white/60">
            {service.heroDescription}
          </p>
          <p class="mt-6 max-w-2xl text-base font-medium italic text-yellow">
            "{service.partnershipStatement}"
          </p>
          <div class="mt-8">
            <a
              href="/contact/"
              class="inline-flex rounded-[3px] border-2 border-red bg-red px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white hover:text-dark"
            >
              Let's Talk About Your Project
            </a>
          </div>
        </div>
      </section>

      {/* ===== WHY PARTNER WITH US ===== */}
      <section class="py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">
                More Than a Vendor — Your Strategic Ally
              </h2>
              <p class="mt-5 text-base leading-relaxed text-text">
                We believe the best technology outcomes come from genuine
                partnership. We embed ourselves in your context, understand your
                challenges and work shoulder-to-shoulder with your team to
                deliver results that last.
              </p>
              <a
                href="/about/"
                class="mt-8 inline-flex items-center gap-2 text-sm font-medium text-red transition-colors hover:text-red-hover"
              >
                Learn more about our approach
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div class="space-y-6">
              {service.partnershipPoints.map((point) => (
                <div key={point.title} class="flex items-start gap-4">
                  <div class="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-yellow/10">
                    <svg class="h-4 w-4 text-yellow" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-heading">{point.title}</h3>
                    <p class="mt-1 text-sm leading-relaxed text-text">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== CAPABILITIES ===== */}
      <section class="bg-section-bg py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">
              What We Do Together
            </h2>
            <p class="mt-4 text-base text-text">
              Our capabilities in {service.shortTitle.toLowerCase()} — designed
              to deliver real business impact through close collaboration.
            </p>
          </div>
          <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.capabilities.map((cap, i) => (
              <div
                key={cap.title}
                class="rounded-xl bg-white p-6 shadow-sm transition-all hover:-translate-y-1"
              >
                <span class="text-2xl font-extrabold text-red/20">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 class="mt-3 text-base font-bold text-heading">
                  {cap.title}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-text">
                  {cap.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section class="py-20 lg:py-28">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl text-center">
            <h2 class="text-3xl font-extrabold text-heading sm:text-4xl">
              How We Work With You
            </h2>
            <p class="mt-4 text-base text-text">
              A proven methodology built around partnership, transparency and
              continuous feedback.
            </p>
          </div>
          <div class="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {service.approachSteps.map((step) => (
              <div key={step.step} class="relative">
                <span class="text-5xl font-extrabold text-red/15">
                  {step.step}
                </span>
                <h3 class="mt-2 text-lg font-bold text-heading">
                  {step.title}
                </h3>
                <p class="mt-2 text-sm leading-relaxed text-text">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== RELATED SERVICES ===== */}
      {related.length > 0 && (
        <section class="bg-[#080F1E] py-20 lg:py-28">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 class="text-center text-3xl font-extrabold text-white sm:text-4xl">
              Explore Related Services
            </h2>
            <p class="mx-auto mt-4 max-w-xl text-center text-base text-white/50">
              Our services work best together. Discover how complementary
              capabilities can amplify your results.
            </p>
            <div class="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/services/${rel.slug}/`}
                  class="group rounded-xl bg-[#0f1a2e] p-8 transition-all hover:-translate-y-1 hover:bg-[#142038]"
                >
                  <div class="flex h-14 w-14 items-center justify-center rounded-lg bg-white/5 transition-colors group-hover:bg-yellow/20">
                    <svg class="h-7 w-7 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={1.5} d={rel.icon} />
                    </svg>
                  </div>
                  <h3 class="mt-5 text-lg font-bold text-white">
                    {rel.shortTitle}
                  </h3>
                  <p class="mt-3 text-sm leading-relaxed text-white/50">
                    {rel.heroDescription.slice(0, 120)}...
                  </p>
                  <span class="mt-4 inline-flex items-center text-sm font-medium text-yellow transition-colors group-hover:text-white">
                    Learn More
                    <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ===== CTA BANNER ===== */}
      <section class="bg-[#080F1E] border-t border-white/5 py-16">
        <div class="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 class="text-3xl font-extrabold text-white sm:text-4xl">
            Ready to become our next success story?
          </h2>
          <p class="mt-4 text-lg text-white/60">
            Let's talk about how we can partner with you on{" "}
            {service.shortTitle.toLowerCase()}.
          </p>
          <div class="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href="/contact/"
              class="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 text-sm font-semibold text-red transition-all hover:bg-dark hover:text-white"
            >
              Start a Conversation
            </a>
            <a
              href="/services/"
              class="inline-flex items-center justify-center rounded-md border-2 border-white/40 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:border-white hover:bg-white/10"
            >
              View All Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = ({ resolveValue }) => {
  const data = resolveValue(useServiceDetail);
  if (!data) {
    return { title: "Service Not Found | Eurosynapse" };
  }
  const { service } = data;
  return {
    title: service.seoTitle,
    meta: [
      { name: "description", content: service.seoDescription },
      { property: "og:title", content: service.ogTitle },
      { property: "og:description", content: service.ogDescription },
      { property: "og:type", content: "website" },
    ],
  };
};
