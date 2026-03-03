import { component$, useSignal } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  const submitted = useSignal(false);

  return (
    <div class="pt-16">
      {/* Header */}
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Get in Touch
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Contact
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            Ready to start a project or need support? We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Contact info */}
            <div>
              <h2 class="text-2xl font-bold text-heading">Let's Talk</h2>
              <p class="mt-4 text-lg leading-relaxed text-text">
                Whether you have a project in mind, need technical support,
                or simply want to explore how we can help, reach out to us.
              </p>

              <div class="mt-10 space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-5 w-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-heading">Email</h3>
                    <p class="mt-1 text-text">hello@eurosynapse.com</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-5 w-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-heading">Phone</h3>
                    <p class="mt-1 text-text">+34 900 000 000</p>
                  </div>
                </div>

                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-5 w-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 class="font-semibold text-heading">Address</h3>
                    <p class="mt-1 text-text">Barcelona, Spain</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <div class="rounded-xl bg-section-bg p-8">
              {submitted.value ? (
                <div class="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
                    <svg class="h-8 w-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 class="mt-4 text-lg font-semibold text-heading">Message Sent!</h3>
                  <p class="mt-2 text-text">Thank you for reaching out. We'll get back to you shortly.</p>
                </div>
              ) : (
                <form
                  preventdefault:submit
                  onSubmit$={() => {
                    submitted.value = true;
                  }}
                >
                  <h3 class="text-lg font-semibold text-heading">Send us a message</h3>
                  <div class="mt-6 space-y-5">
                    <div class="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label for="firstName" class="block text-sm font-medium text-heading">First Name</label>
                        <input
                          id="firstName" name="firstName" type="text" required
                          class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label for="lastName" class="block text-sm font-medium text-heading">Last Name</label>
                        <input
                          id="lastName" name="lastName" type="text" required
                          class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-heading">Email</label>
                      <input
                        id="email" name="email" type="email" required
                        class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div>
                      <label for="company" class="block text-sm font-medium text-heading">Company</label>
                      <input
                        id="company" name="company" type="text"
                        class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none"
                        placeholder="Acme Corp"
                      />
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-heading">Message</label>
                      <textarea
                        id="message" name="message" rows={4} required
                        class="mt-1 block w-full resize-none rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>
                    <button
                      type="submit"
                      class="w-full rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Contact | Eurosynapse",
  meta: [
    {
      name: "description",
      content: "Contact Eurosynapse for projects, support or inquiries. Reach us by email, phone or visit our offices in Barcelona.",
    },
  ],
};
