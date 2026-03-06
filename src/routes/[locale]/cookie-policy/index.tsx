import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div class="pt-16">
      <section class="bg-[#080F1E] pt-20 pb-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">
            Legal
          </p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Cookie Policy
          </h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">
            Last updated: March 2026
          </p>
        </div>
      </section>

      <section class="py-20">
        <div class="prose prose-lg mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div class="space-y-10 text-text">
            <div>
              <h2 class="text-2xl font-bold text-heading">
                1. What Are Cookies?
              </h2>
              <p class="mt-3 leading-relaxed">
                Cookies are small text files that are placed on your device when
                you visit a website. They are widely used to make websites work
                more efficiently and to provide information to website owners.
                Cookies can be "persistent" (stored until they expire or are
                deleted) or "session" (deleted when you close your browser).
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                2. How We Use Cookies
              </h2>
              <p class="mt-3 leading-relaxed">
                Eurosynapse uses cookies to ensure the proper functioning of our
                website, to remember your preferences and, with your consent, to
                analyze traffic and deliver relevant content. We categorize our
                cookies as follows:
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                3. Cookie Categories
              </h2>

              {/* Necessary */}
              <div class="mt-6">
                <h3 class="text-lg font-semibold text-heading">
                  3.1 Necessary Cookies
                </h3>
                <p class="mt-2 leading-relaxed">
                  These cookies are essential for the website to function
                  correctly. They cannot be disabled.
                </p>
                <div class="mt-4 overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-heading/10">
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Cookie
                        </th>
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Purpose
                        </th>
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Duration
                        </th>
                        <th class="py-3 text-left font-semibold text-heading">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-heading/5">
                        <td class="py-3 pr-4 font-mono text-xs">
                          cookie_consent
                        </td>
                        <td class="py-3 pr-4">
                          Stores your cookie preferences
                        </td>
                        <td class="py-3 pr-4">365 days</td>
                        <td class="py-3">First-party</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Analytics */}
              <div class="mt-8">
                <h3 class="text-lg font-semibold text-heading">
                  3.2 Analytics Cookies
                </h3>
                <p class="mt-2 leading-relaxed">
                  These cookies help us understand how visitors interact with
                  our website by collecting and reporting information
                  anonymously. They are only active when you give consent.
                </p>
                <div class="mt-4 overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-heading/10">
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Cookie
                        </th>
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Purpose
                        </th>
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Duration
                        </th>
                        <th class="py-3 text-left font-semibold text-heading">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-heading/5">
                        <td class="py-3 pr-4 font-mono text-xs">_ga</td>
                        <td class="py-3 pr-4">
                          Google Analytics — distinguishes unique users
                        </td>
                        <td class="py-3 pr-4">2 years</td>
                        <td class="py-3">Third-party</td>
                      </tr>
                      <tr class="border-b border-heading/5">
                        <td class="py-3 pr-4 font-mono text-xs">_ga_*</td>
                        <td class="py-3 pr-4">
                          Google Analytics 4 — maintains session state
                        </td>
                        <td class="py-3 pr-4">2 years</td>
                        <td class="py-3">Third-party</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Marketing */}
              <div class="mt-8">
                <h3 class="text-lg font-semibold text-heading">
                  3.3 Marketing Cookies
                </h3>
                <p class="mt-2 leading-relaxed">
                  These cookies are used to deliver relevant advertisements and
                  track campaign performance. They are only active when you give
                  consent.
                </p>
                <div class="mt-4 overflow-x-auto">
                  <table class="w-full text-sm">
                    <thead>
                      <tr class="border-b border-heading/10">
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Cookie
                        </th>
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Purpose
                        </th>
                        <th class="py-3 pr-4 text-left font-semibold text-heading">
                          Duration
                        </th>
                        <th class="py-3 text-left font-semibold text-heading">
                          Type
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="border-b border-heading/5">
                        <td class="py-3 pr-4 font-mono text-xs">_fbp</td>
                        <td class="py-3 pr-4">
                          Meta Pixel — tracks visits across websites
                        </td>
                        <td class="py-3 pr-4">3 months</td>
                        <td class="py-3">Third-party</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p class="mt-3 text-sm italic text-text/70">
                  Note: Marketing cookies listed above are representative. The
                  actual cookies may vary as we integrate new marketing tools.
                </p>
              </div>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                4. Managing Your Cookie Preferences
              </h2>
              <p class="mt-3 leading-relaxed">
                You can manage your cookie preferences at any time using our
                cookie consent tool. Click the{" "}
                <strong>"Cookie Settings"</strong> link in the footer of any
                page to update your choices.
              </p>
              <p class="mt-3 leading-relaxed">
                You can also control cookies through your browser settings. Most
                browsers allow you to:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>View what cookies are stored and delete them individually.</li>
                <li>Block third-party cookies.</li>
                <li>Block cookies from specific websites.</li>
                <li>Block all cookies.</li>
                <li>Delete all cookies when you close your browser.</li>
              </ul>
              <p class="mt-3 leading-relaxed">
                Please note that blocking all cookies may affect the
                functionality of this and other websites you visit.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                5. Changes to This Cookie Policy
              </h2>
              <p class="mt-3 leading-relaxed">
                We may update this Cookie Policy from time to time to reflect
                changes in our practices or for other operational, legal or
                regulatory reasons. Please check this page periodically for
                updates.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">6. Contact Us</h2>
              <p class="mt-3 leading-relaxed">
                If you have questions about our use of cookies, please contact
                us at{" "}
                <a href="mailto:privacy@eurosynapse.com" class="text-red hover:text-red-hover">
                  privacy@eurosynapse.com
                </a>
                .
              </p>
              <p class="mt-3 leading-relaxed">
                For full details on how we handle your personal data, see our{" "}
                <a href="/privacy-policy/" class="text-red hover:text-red-hover">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Cookie Policy | Eurosynapse",
  meta: [
    { name: "description", content: "Eurosynapse Cookie Policy — learn about the cookies we use, their purposes and how to manage your preferences." },
    { property: "og:title", content: "Cookie Policy | Eurosynapse" },
    { property: "og:description", content: "Eurosynapse Cookie Policy — learn about the cookies we use, their purposes and how to manage your preferences." },
    { property: "og:type", content: "website" },
  ],
};
