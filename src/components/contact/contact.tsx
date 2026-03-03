import { component$, useSignal } from "@builder.io/qwik";

export const Contact = component$(() => {
  const submitted = useSignal(false);

  return (
    <section id="contact" class="bg-white py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left side: text */}
          <div>
            <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              Contact
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Let's Work Together
            </h2>
            <p class="mt-6 text-lg leading-relaxed text-gray-600">
              Ready to start your next project? Get in touch and let's discuss
              how Eurosynapse can help transform your business.
            </p>
            <div class="mt-8 space-y-4">
              <div class="flex items-center gap-3 text-gray-600">
                <svg
                  class="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hello@eurosynapse.com</span>
              </div>
              <div class="flex items-center gap-3 text-gray-600">
                <svg
                  class="h-5 w-5 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Barcelona, Spain</span>
              </div>
            </div>
          </div>

          {/* Right side: form */}
          <div class="rounded-xl bg-gray-50 p-8">
            {submitted.value ? (
              <div class="flex h-full flex-col items-center justify-center py-12 text-center">
                <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                  <svg
                    class="h-8 w-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 class="mt-4 text-lg font-semibold text-gray-900">
                  Message Sent!
                </h3>
                <p class="mt-2 text-gray-500">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
              </div>
            ) : (
              <form
                preventdefault:submit
                onSubmit$={() => {
                  submitted.value = true;
                }}
              >
                <div class="space-y-5">
                  <div>
                    <label
                      for="name"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      for="email"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      class="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="you@company.com"
                    />
                  </div>
                  <div>
                    <label
                      for="message"
                      class="block text-sm font-medium text-gray-700"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      class="mt-1 block w-full resize-none rounded-lg border border-gray-300 px-4 py-2.5 text-gray-900 placeholder-gray-400 transition-colors focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 focus:outline-none"
                      placeholder="Tell us about your project..."
                    />
                  </div>
                  <button
                    type="submit"
                    class="w-full rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
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
  );
});
