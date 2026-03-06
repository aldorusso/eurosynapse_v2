import { component$, Slot } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { RequestHandler } from "@builder.io/qwik-city";
import { isValidLocale } from "~/i18n/config";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer/footer";
import { CookieConsent } from "~/components/cookie-consent/cookie-consent";
import { GoogleAnalytics } from "~/components/analytics/google-analytics";

export const onRequest: RequestHandler = async ({ params, status }) => {
  if (!isValidLocale(params.locale)) {
    status(404);
  }
};

export default component$(() => {
  const loc = useLocation();
  const locale = loc.params.locale;

  if (!isValidLocale(locale)) {
    return (
      <div class="flex min-h-screen items-center justify-center">
        <div class="text-center">
          <h1 class="text-4xl font-extrabold text-heading">404</h1>
          <p class="mt-4 text-text">Page not found.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
      <CookieConsent />
      <GoogleAnalytics />
    </>
  );
});
