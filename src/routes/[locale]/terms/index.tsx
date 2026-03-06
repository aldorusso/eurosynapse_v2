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
            Terms & Conditions
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
                1. Acceptance of Terms
              </h2>
              <p class="mt-3 leading-relaxed">
                By accessing and using the Eurosynapse website
                (eurosynapse.com), you accept and agree to be bound by these
                Terms and Conditions. If you do not agree, please do not use
                our website.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                2. Company Information
              </h2>
              <p class="mt-3 leading-relaxed">
                This website is operated by Eurosynapse S.L., with registered
                offices in Barcelona, Spain. For any inquiries, you may contact
                us at{" "}
                <a href="mailto:hello@eurosynapse.com" class="text-red hover:text-red-hover">
                  hello@eurosynapse.com
                </a>
                .
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                3. Description of Services
              </h2>
              <p class="mt-3 leading-relaxed">
                Eurosynapse provides technology consulting and software
                development services including, but not limited to: artificial
                intelligence, digital transformation, data analytics,
                cybersecurity, cloud infrastructure, enterprise solutions and IT
                advisory services. The specific terms of any engagement are
                governed by separate service agreements.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                4. Intellectual Property
              </h2>
              <p class="mt-3 leading-relaxed">
                All content on this website — including but not limited to text,
                graphics, logos, icons, images, audio, video and software — is
                the property of Eurosynapse S.L. or its content suppliers and is
                protected by Spanish and international copyright, trademark and
                other intellectual property laws.
              </p>
              <p class="mt-3 leading-relaxed">
                You may not reproduce, distribute, modify, create derivative
                works of, publicly display, publicly perform, republish,
                download, store or transmit any content from this website
                without our prior written consent.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                5. Use of the Website
              </h2>
              <p class="mt-3 leading-relaxed">You agree not to:</p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Use the website in any way that violates applicable laws or
                  regulations.
                </li>
                <li>
                  Attempt to gain unauthorized access to any part of the
                  website or its related systems.
                </li>
                <li>
                  Introduce viruses, trojans, worms or other malicious code.
                </li>
                <li>
                  Use automated tools to scrape or collect data from the
                  website without permission.
                </li>
                <li>
                  Impersonate any person or entity, or misrepresent your
                  affiliation with any person or entity.
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                6. Disclaimer of Warranties
              </h2>
              <p class="mt-3 leading-relaxed">
                This website is provided on an "as is" and "as available" basis.
                Eurosynapse makes no representations or warranties of any kind,
                express or implied, regarding the operation of the website or
                the accuracy, completeness or reliability of any content.
              </p>
              <p class="mt-3 leading-relaxed">
                We do not warrant that the website will be uninterrupted,
                error-free, secure or free of viruses or other harmful
                components.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                7. Limitation of Liability
              </h2>
              <p class="mt-3 leading-relaxed">
                To the fullest extent permitted by applicable law, Eurosynapse
                shall not be liable for any indirect, incidental, special,
                consequential or punitive damages, including without limitation
                loss of profits, data, use, goodwill or other intangible
                losses, resulting from:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>Your access to or use of (or inability to use) the website.</li>
                <li>Any conduct or content of any third party on the website.</li>
                <li>Unauthorized access, use or alteration of your content.</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                8. External Links
              </h2>
              <p class="mt-3 leading-relaxed">
                Our website may contain links to third-party websites. These
                links are provided for your convenience only. We have no
                control over the content or privacy practices of those sites
                and accept no responsibility for them.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                9. Modifications
              </h2>
              <p class="mt-3 leading-relaxed">
                We reserve the right to modify these Terms and Conditions at any
                time. Changes become effective when posted on this page. Your
                continued use of the website after changes constitutes
                acceptance of the modified terms.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                10. Governing Law and Jurisdiction
              </h2>
              <p class="mt-3 leading-relaxed">
                These Terms and Conditions are governed by and construed in
                accordance with the laws of Spain and the European Union. Any
                disputes arising from these terms shall be subject to the
                exclusive jurisdiction of the courts of Barcelona, Spain.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                11. Severability
              </h2>
              <p class="mt-3 leading-relaxed">
                If any provision of these Terms is found to be invalid or
                unenforceable, the remaining provisions shall continue in full
                force and effect.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">12. Contact</h2>
              <p class="mt-3 leading-relaxed">
                For questions about these Terms and Conditions, please contact
                us at{" "}
                <a href="mailto:hello@eurosynapse.com" class="text-red hover:text-red-hover">
                  hello@eurosynapse.com
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
  title: "Terms & Conditions | Eurosynapse",
  meta: [
    { name: "description", content: "Eurosynapse Terms and Conditions — the rules governing your use of our website and services." },
    { property: "og:title", content: "Terms & Conditions | Eurosynapse" },
    { property: "og:description", content: "Eurosynapse Terms and Conditions — the rules governing your use of our website and services." },
    { property: "og:type", content: "website" },
  ],
};
