import { component$ } from "@builder.io/qwik";
import { routeAction$, zod$, z, Form, type DocumentHead } from "@builder.io/qwik-city";
import { useLocation } from "@builder.io/qwik-city";
import { createTransport } from "nodemailer";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";

export const useContactAction = routeAction$(
  async (data, { env }) => {
    const host = env.get("SMTP_HOST");
    const port = Number(env.get("SMTP_PORT") || "587");
    const user = env.get("SMTP_USER");
    const pass = env.get("SMTP_PASS");
    const to = env.get("CONTACT_TO_EMAIL") || "hello@eurosynapse.com";
    if (!host || !user || !pass) return { success: false, message: "SMTP is not configured. Please try again later." };
    const transporter = createTransport({ host, port, secure: port === 465, auth: { user, pass } });
    const htmlBody = `<h2>New Contact Form Submission</h2><table style="border-collapse:collapse;width:100%;max-width:600px;"><tr><td style="padding:8px;font-weight:bold;">Name</td><td style="padding:8px;">${data.firstName} ${data.lastName}</td></tr><tr><td style="padding:8px;font-weight:bold;">Email</td><td style="padding:8px;">${data.email}</td></tr><tr><td style="padding:8px;font-weight:bold;">Company</td><td style="padding:8px;">${data.company || "N/A"}</td></tr><tr><td style="padding:8px;font-weight:bold;">Message</td><td style="padding:8px;">${data.message.replace(/\n/g, "<br>")}</td></tr></table>`;
    try {
      await transporter.sendMail({ from: `"Eurosynapse Website" <${user}>`, replyTo: data.email, to, subject: `Contact Form: ${data.firstName} ${data.lastName} - ${data.company || "No company"}`, html: htmlBody });
      return { success: true, message: "Message sent successfully!" };
    } catch (err) {
      console.error("SMTP error:", err);
      return { success: false, message: "Failed to send message. Please try again later." };
    }
  },
  zod$({ firstName: z.string().min(1, "First name is required"), lastName: z.string().min(1, "Last name is required"), email: z.string().email("Invalid email address"), company: z.string().optional(), message: z.string().min(1, "Message is required") }),
);

const content = (locale: Locale) => {
  const c = {
    en: {
      label: "Get in Touch", title: "Contact", subtitle: "Ready to start a project or need support? We'd love to hear from you.",
      talkTitle: "Let's Talk", talkText: "Whether you have a project in mind, need technical support, or simply want to explore how we can help, reach out to us.",
      email: "Email", phone: "Phone", address: "Address",
      formTitle: "Send us a message", firstName: "First Name", lastName: "Last Name", emailLabel: "Email", company: "Company", message: "Message",
      phFirst: "John", phLast: "Doe", phEmail: "john@company.com", phCompany: "Acme Corp", phMessage: "Tell us about your project or inquiry...",
      sending: "Sending...", send: "Send Message", sentTitle: "Message Sent!", sentText: "Thank you for reaching out. We'll get back to you shortly.",
    },
    es: {
      label: "Contactanos", title: "Contacto", subtitle: "Listo para iniciar un proyecto o necesitas soporte? Nos encantaria saber de ti.",
      talkTitle: "Hablemos", talkText: "Ya sea que tengas un proyecto en mente, necesites soporte tecnico o simplemente quieras explorar como podemos ayudar, contactanos.",
      email: "Email", phone: "Telefono", address: "Direccion",
      formTitle: "Envianos un mensaje", firstName: "Nombre", lastName: "Apellido", emailLabel: "Email", company: "Empresa", message: "Mensaje",
      phFirst: "Juan", phLast: "Garcia", phEmail: "juan@empresa.com", phCompany: "Empresa S.A.", phMessage: "Cuentanos sobre tu proyecto o consulta...",
      sending: "Enviando...", send: "Enviar Mensaje", sentTitle: "Mensaje Enviado!", sentText: "Gracias por contactarnos. Te responderemos pronto.",
    },
    fr: {
      label: "Nous Contacter", title: "Contact", subtitle: "Pret a demarrer un projet ou besoin d'assistance? Nous serions ravis de vous entendre.",
      talkTitle: "Parlons-en", talkText: "Que vous ayez un projet en tete, besoin d'un support technique ou que vous souhaitiez explorer comment nous pouvons aider, contactez-nous.",
      email: "Email", phone: "Telephone", address: "Adresse",
      formTitle: "Envoyez-nous un message", firstName: "Prenom", lastName: "Nom", emailLabel: "Email", company: "Entreprise", message: "Message",
      phFirst: "Jean", phLast: "Dupont", phEmail: "jean@entreprise.com", phCompany: "Entreprise SA", phMessage: "Parlez-nous de votre projet ou demande...",
      sending: "Envoi...", send: "Envoyer le Message", sentTitle: "Message Envoye!", sentText: "Merci de nous avoir contactes. Nous vous repondrons rapidement.",
    },
  };
  return c[locale] || c.en;
};

export default component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const c = content(locale);
  const action = useContactAction();

  return (
    <main id="main-content" class="pt-16">
      <section class="bg-[#080F1E] pt-20 py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p class="text-sm font-semibold tracking-widest text-red uppercase">{c.label}</p>
          <h1 class="mt-2 text-4xl font-extrabold text-white sm:text-5xl">{c.title}</h1>
          <p class="mt-4 max-w-2xl text-lg text-white/60">{c.subtitle}</p>
        </div>
      </section>

      <section class="py-20">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 class="text-2xl font-bold text-heading">{c.talkTitle}</h2>
              <p class="mt-4 text-lg leading-relaxed text-text">{c.talkText}</p>
              <div class="mt-10 space-y-6">
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-5 w-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  </div>
                  <div><h3 class="font-semibold text-heading">{c.email}</h3><p class="mt-1 text-text">hello@eurosynapse.com</p></div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-5 w-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  </div>
                  <div><h3 class="font-semibold text-heading">{c.phone}</h3><p class="mt-1 text-text">+34 900 000 000</p></div>
                </div>
                <div class="flex items-start gap-4">
                  <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-red/10">
                    <svg class="h-5 w-5 text-red" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  </div>
                  <div><h3 class="font-semibold text-heading">{c.address}</h3><p class="mt-1 text-text">Barcelona, Spain</p></div>
                </div>
              </div>
            </div>

            <div class="rounded-xl bg-section-bg p-8">
              {action.value?.success ? (
                <div class="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div class="flex h-16 w-16 items-center justify-center rounded-full bg-green/10">
                    <svg class="h-8 w-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <h3 class="mt-4 text-lg font-semibold text-heading">{c.sentTitle}</h3>
                  <p class="mt-2 text-text">{c.sentText}</p>
                </div>
              ) : (
                <Form action={action}>
                  <h3 class="text-lg font-semibold text-heading">{c.formTitle}</h3>
                  {action.value?.success === false && (<div class="mt-4 rounded-lg bg-red/10 px-4 py-3 text-sm text-red">{action.value.message}</div>)}
                  <div class="mt-6 space-y-5">
                    <div class="grid gap-5 sm:grid-cols-2">
                      <div>
                        <label for="firstName" class="block text-sm font-medium text-heading">{c.firstName}</label>
                        <input id="firstName" name="firstName" type="text" required class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none" placeholder={c.phFirst} />
                      </div>
                      <div>
                        <label for="lastName" class="block text-sm font-medium text-heading">{c.lastName}</label>
                        <input id="lastName" name="lastName" type="text" required class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none" placeholder={c.phLast} />
                      </div>
                    </div>
                    <div>
                      <label for="email" class="block text-sm font-medium text-heading">{c.emailLabel}</label>
                      <input id="email" name="email" type="email" required class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none" placeholder={c.phEmail} />
                    </div>
                    <div>
                      <label for="company" class="block text-sm font-medium text-heading">{c.company}</label>
                      <input id="company" name="company" type="text" class="mt-1 block w-full rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none" placeholder={c.phCompany} />
                    </div>
                    <div>
                      <label for="message" class="block text-sm font-medium text-heading">{c.message}</label>
                      <textarea id="message" name="message" rows={4} required class="mt-1 block w-full resize-none rounded-lg border border-heading/20 px-4 py-2.5 text-heading placeholder-text transition-colors focus:border-red focus:ring-2 focus:ring-red/20 focus:outline-none" placeholder={c.phMessage} />
                    </div>
                    <button type="submit" disabled={action.isRunning} class="w-full rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-hover disabled:opacity-60">
                      {action.isRunning ? c.sending : c.send}
                    </button>
                  </div>
                </Form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
});

export const head: DocumentHead = ({ params }) => {
  const t: Record<string, { title: string; desc: string }> = {
    en: { title: "Contact | Eurosynapse", desc: "Contact Eurosynapse for projects, support or inquiries." },
    es: { title: "Contacto | Eurosynapse", desc: "Contacta a Eurosynapse para proyectos, soporte o consultas." },
    fr: { title: "Contact | Eurosynapse", desc: "Contactez Eurosynapse pour des projets, du support ou des demandes." },
  };
  const l = params.locale || "en";
  const d = t[l] || t.en;
  return { title: d.title, meta: [
    { name: "description", content: d.desc },
    { property: "og:title", content: d.title },
    { property: "og:description", content: d.desc },
    { property: "og:type", content: "website" },
  ] };
};
