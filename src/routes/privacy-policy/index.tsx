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
            Privacy Policy
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
              <h2 class="text-2xl font-bold text-heading">1. Data Controller</h2>
              <p class="mt-3 leading-relaxed">
                Eurosynapse S.L. ("Eurosynapse", "we", "us" or "our"), with
                registered offices in Barcelona, Spain, is the data controller
                responsible for the processing of your personal data as
                described in this Privacy Policy.
              </p>
              <p class="mt-2 leading-relaxed">
                Contact email for data protection inquiries:{" "}
                <a href="mailto:privacy@eurosynapse.com" class="text-red hover:text-red-hover">
                  privacy@eurosynapse.com
                </a>
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                2. Personal Data We Collect
              </h2>
              <p class="mt-3 leading-relaxed">
                We collect personal data that you voluntarily provide through our
                contact form and other interactions with our website:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact form:</strong> First name, last name, email
                  address, company name and message content.
                </li>
                <li>
                  <strong>Automatically collected data:</strong> IP address,
                  browser type, operating system, pages visited, date and time
                  of access, and referring URL (only when analytics cookies are
                  accepted).
                </li>
                <li>
                  <strong>Cookies:</strong> See our{" "}
                  <a href="/cookie-policy/" class="text-red hover:text-red-hover">
                    Cookie Policy
                  </a>{" "}
                  for full details.
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                3. Purpose and Legal Basis
              </h2>
              <p class="mt-3 leading-relaxed">
                We process your personal data for the following purposes:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Responding to inquiries</strong> (legal basis:
                  legitimate interest / pre-contractual measures) — to process
                  and reply to your contact form submissions.
                </li>
                <li>
                  <strong>Website analytics</strong> (legal basis: consent) — to
                  understand how visitors use our website and improve our
                  services. Only active when you consent to analytics cookies.
                </li>
                <li>
                  <strong>Marketing communications</strong> (legal basis:
                  consent) — only if you explicitly opt-in. You can withdraw
                  consent at any time.
                </li>
                <li>
                  <strong>Legal obligations</strong> (legal basis: legal
                  obligation) — to comply with applicable laws, regulations and
                  legal processes.
                </li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                4. Data Retention
              </h2>
              <p class="mt-3 leading-relaxed">
                We retain your personal data only for as long as necessary to
                fulfill the purposes for which it was collected:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>Contact form submissions: 24 months from the date of inquiry.</li>
                <li>Analytics data: 14 months (aggregated and anonymized where possible).</li>
                <li>Cookie consent preferences: 12 months.</li>
              </ul>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                5. Data Sharing and Transfers
              </h2>
              <p class="mt-3 leading-relaxed">
                We do not sell your personal data. We may share your data with:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Email service providers:</strong> to deliver contact
                  form messages via SMTP (data processed in the EU).
                </li>
                <li>
                  <strong>Analytics providers:</strong> only if you consent to
                  analytics cookies (e.g., Google Analytics, with IP
                  anonymization enabled).
                </li>
                <li>
                  <strong>Legal authorities:</strong> when required by law or
                  legal process.
                </li>
              </ul>
              <p class="mt-3 leading-relaxed">
                If any data transfer occurs outside the European Economic Area
                (EEA), we ensure appropriate safeguards are in place, such as
                Standard Contractual Clauses (SCCs) approved by the European
                Commission.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                6. Your Rights Under GDPR
              </h2>
              <p class="mt-3 leading-relaxed">
                Under the General Data Protection Regulation (GDPR), you have
                the following rights:
              </p>
              <ul class="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Right of access:</strong> request a copy of the
                  personal data we hold about you.
                </li>
                <li>
                  <strong>Right to rectification:</strong> request correction of
                  inaccurate or incomplete data.
                </li>
                <li>
                  <strong>Right to erasure:</strong> request deletion of your
                  personal data ("right to be forgotten").
                </li>
                <li>
                  <strong>Right to restriction:</strong> request that we limit
                  the processing of your data.
                </li>
                <li>
                  <strong>Right to data portability:</strong> receive your data
                  in a structured, machine-readable format.
                </li>
                <li>
                  <strong>Right to object:</strong> object to processing based
                  on legitimate interest.
                </li>
                <li>
                  <strong>Right to withdraw consent:</strong> withdraw consent
                  at any time without affecting the lawfulness of prior
                  processing.
                </li>
              </ul>
              <p class="mt-3 leading-relaxed">
                To exercise any of these rights, contact us at{" "}
                <a href="mailto:privacy@eurosynapse.com" class="text-red hover:text-red-hover">
                  privacy@eurosynapse.com
                </a>
                . We will respond within 30 days.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                7. Security Measures
              </h2>
              <p class="mt-3 leading-relaxed">
                We implement appropriate technical and organizational measures
                to protect your personal data against unauthorized access,
                alteration, disclosure or destruction. These include encrypted
                data transmission (TLS/SSL), access controls and regular
                security assessments.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                8. Children's Privacy
              </h2>
              <p class="mt-3 leading-relaxed">
                Our website is not directed at individuals under the age of 16.
                We do not knowingly collect personal data from children. If you
                believe we have collected data from a minor, please contact us
                immediately.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                9. Changes to This Policy
              </h2>
              <p class="mt-3 leading-relaxed">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this policy periodically.
              </p>
            </div>

            <div>
              <h2 class="text-2xl font-bold text-heading">
                10. Supervisory Authority
              </h2>
              <p class="mt-3 leading-relaxed">
                If you believe that our processing of your personal data
                violates the GDPR, you have the right to lodge a complaint with
                the Spanish Data Protection Agency (Agencia Española de
                Protección de Datos — AEPD) at{" "}
                <span class="text-red">www.aepd.es</span>.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Privacy Policy | Eurosynapse",
  meta: [
    {
      name: "description",
      content:
        "Eurosynapse Privacy Policy — learn how we collect, use and protect your personal data in compliance with GDPR.",
    },
  ],
};
