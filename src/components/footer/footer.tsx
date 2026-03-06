import { component$ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";
import { getTranslations } from "~/i18n/translations";

export const Footer = component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const t = getTranslations(locale);
  const lp = (path: string) => `/${locale}${path}`;

  return (
    <footer class="bg-dark-deep text-white/60">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a href={lp("/")}>
              <img src="/eurosynapse-dark.png" alt="Eurosynapse" width={160} height={33} class="h-11 w-auto" />
            </a>
            <p class="mt-5 text-sm leading-relaxed">{t.footer.tagline}</p>
          </div>

          <div>
            <h4 class="mb-5 text-sm font-bold tracking-wider text-white uppercase">{t.footer.company}</h4>
            <ul class="space-y-3">
              {t.footer.companyLinks.map((link) => (
                <li key={link.path}>
                  <a href={lp(link.path)} class="text-sm transition-colors hover:text-red">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 class="mb-5 text-sm font-bold tracking-wider text-white uppercase">{t.footer.services}</h4>
            <ul class="space-y-3">
              {t.footer.serviceLinks.map((link) => (
                <li key={link.path}>
                  <a href={lp(link.path)} class="text-sm transition-colors hover:text-red">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 class="mb-5 text-sm font-bold tracking-wider text-white uppercase">{t.footer.support}</h4>
            <ul class="space-y-3 text-sm">
              <li>hello@eurosynapse.com</li>
              <li>+34 900 000 000</li>
              <li>Barcelona, Spain</li>
            </ul>
            <div class="mt-6 flex gap-4">
              {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                <a key={social} href="#" class="text-xs font-medium transition-colors hover:text-red" aria-label={social}>{social}</a>
              ))}
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-white/10 pt-8">
          <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p class="text-sm">&copy; {new Date().getFullYear()} Eurosynapse. {t.footer.allRights}</p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
              <a href={lp("/privacy-policy/")} class="transition-colors hover:text-white">{t.footer.privacyPolicy}</a>
              <a href={lp("/terms/")} class="transition-colors hover:text-white">{t.footer.terms}</a>
              <a href={lp("/cookie-policy/")} class="transition-colors hover:text-white">{t.footer.cookiePolicy}</a>
              <button type="button" onClick$={() => window.dispatchEvent(new Event("open-cookie-settings"))} class="cursor-pointer transition-colors hover:text-white">{t.footer.cookieSettings}</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
