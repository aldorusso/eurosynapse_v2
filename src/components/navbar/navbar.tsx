import { component$, useSignal, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { LOCALES, LOCALE_LABELS, isValidLocale } from "~/i18n/config";
import { getTranslations } from "~/i18n/translations";

export const Navbar = component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const t = getTranslations(locale);

  const isOpen = useSignal(false);
  const servicesOpen = useSignal(false);
  const aboutOpen = useSignal(false);
  const langOpen = useSignal(false);

  const closeMenu = $(() => {
    isOpen.value = false;
  });

  const lp = (path: string) => `/${locale}${path}`;

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#080F1E]">
      <a href="#main-content" class="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:rounded-md focus:bg-red focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white">
        Skip to content
      </a>
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-[76px] items-center justify-between">
          <a href={lp("/")} class="shrink-0">
            <img src="/eurosynapse-dark.png" alt="Eurosynapse" width={160} height={33} class="h-11 w-auto" />
          </a>

          <nav class="hidden items-center xl:flex">
            <a href={lp("/")} class="px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow">
              {t.nav.home}
            </a>

            {/* Services dropdown */}
            <div class="relative" onMouseEnter$={() => (servicesOpen.value = true)} onMouseLeave$={() => (servicesOpen.value = false)}>
              <button type="button" aria-haspopup="true" aria-expanded={servicesOpen.value} class="flex items-center gap-1 px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow">
                {t.nav.services}
                <svg aria-hidden="true" class={["h-3.5 w-3.5 transition-transform", servicesOpen.value && "rotate-180"]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {servicesOpen.value && (
                <div class="absolute top-full left-0 min-w-[240px] rounded-lg border border-white/10 bg-[#0d1528] py-2 shadow-xl">
                  {t.nav.serviceLinks.map((link) => (
                    <a key={link.slug} href={lp(`/services/${link.slug}/`)} class="block px-5 py-2.5 text-[14px] text-white/70 transition-colors hover:bg-white/5 hover:text-yellow">
                      {link.label}
                    </a>
                  ))}
                  <div class="mx-3 my-2 border-t border-white/10" />
                  <a href={lp("/services/")} class="block px-5 py-2.5 text-[14px] font-medium text-yellow transition-colors hover:bg-white/5 hover:text-white">
                    {t.nav.viewAllServices}
                  </a>
                </div>
              )}
            </div>

            <a href={lp("/industries/")} class="px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow">{t.nav.industries}</a>
            <a href={lp("/novedades/")} class="px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow">{t.nav.news}</a>
            <a href={lp("/contact/")} class="px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow">{t.nav.contact}</a>

            {/* About dropdown */}
            <div class="relative" onMouseEnter$={() => (aboutOpen.value = true)} onMouseLeave$={() => (aboutOpen.value = false)}>
              <button type="button" aria-haspopup="true" aria-expanded={aboutOpen.value} class="flex items-center gap-1 px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow">
                {t.nav.about}
                <svg aria-hidden="true" class={["h-3.5 w-3.5 transition-transform", aboutOpen.value && "rotate-180"]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {aboutOpen.value && (
                <div class="absolute top-full left-0 min-w-[200px] rounded-lg border border-white/10 bg-[#0d1528] py-2 shadow-xl">
                  {t.nav.aboutLinks.map((link) => (
                    <a key={link.path} href={lp(link.path)} class="block px-5 py-2.5 text-[14px] text-white/70 transition-colors hover:bg-white/5 hover:text-yellow">
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Language switcher */}
            <div class="relative ml-2" onMouseEnter$={() => (langOpen.value = true)} onMouseLeave$={() => (langOpen.value = false)}>
              <button type="button" aria-haspopup="true" aria-expanded={langOpen.value} aria-label="Select language" class="flex items-center gap-1 px-3 py-8 text-[14px] font-medium text-white/70 uppercase transition-colors hover:text-yellow">
                {locale}
                <svg aria-hidden="true" class={["h-3 w-3 transition-transform", langOpen.value && "rotate-180"]} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {langOpen.value && (
                <div class="absolute top-full right-0 min-w-[140px] rounded-lg border border-white/10 bg-[#0d1528] py-2 shadow-xl">
                  {LOCALES.map((l) => (
                    <a key={l} href={`/${l}${loc.url.pathname.replace(new RegExp(`^/${locale}`), "")}`}
                      class={["block px-5 py-2.5 text-[14px] transition-colors hover:bg-white/5 hover:text-yellow", l === locale ? "text-yellow" : "text-white/70"]}>
                      {LOCALE_LABELS[l]}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <a href={lp("/contact/")} class="hidden rounded-[3px] border-2 border-red bg-red px-6 py-3 text-[15px] font-medium text-white transition-all hover:border-white hover:bg-white hover:text-dark xl:inline-flex">
            {t.nav.getStarted}
          </a>

          <button type="button" class="flex items-center xl:hidden" onClick$={() => (isOpen.value = !isOpen.value)} aria-label="Toggle menu" aria-expanded={isOpen.value}>
            <svg class="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen.value ? (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {isOpen.value && (
          <div class="border-t border-white/10 pb-6 xl:hidden">
            <a href={lp("/")} class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow" onClick$={closeMenu}>{t.nav.home}</a>

            <p class="mt-3 px-2 text-xs font-bold tracking-wider text-white/40 uppercase">{t.nav.services}</p>
            {t.nav.serviceLinks.map((link) => (
              <a key={link.slug} href={lp(`/services/${link.slug}/`)} class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow" onClick$={closeMenu}>{link.label}</a>
            ))}
            <a href={lp("/services/")} class="block px-2 py-2.5 text-sm font-medium text-yellow transition-colors hover:text-white" onClick$={closeMenu}>{t.nav.viewAllServices}</a>

            <a href={lp("/industries/")} class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow" onClick$={closeMenu}>{t.nav.industries}</a>
            <a href={lp("/novedades/")} class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow" onClick$={closeMenu}>{t.nav.news}</a>
            <a href={lp("/contact/")} class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow" onClick$={closeMenu}>{t.nav.contact}</a>

            <p class="mt-3 px-2 text-xs font-bold tracking-wider text-white/40 uppercase">{t.nav.about}</p>
            {t.nav.aboutLinks.map((link) => (
              <a key={link.path} href={lp(link.path)} class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow" onClick$={closeMenu}>{link.label}</a>
            ))}

            <p class="mt-3 px-2 text-xs font-bold tracking-wider text-white/40 uppercase">Language</p>
            <div class="flex gap-2 px-2 pt-2">
              {LOCALES.map((l) => (
                <a key={l} href={`/${l}${loc.url.pathname.replace(new RegExp(`^/${locale}`), "")}`}
                  class={["rounded-md px-3 py-1.5 text-sm font-medium uppercase transition-colors", l === locale ? "bg-yellow text-dark" : "border border-white/20 text-white/70 hover:text-yellow"]}
                  onClick$={closeMenu}>{l}</a>
              ))}
            </div>

            <a href={lp("/contact/")} class="mt-4 block rounded-md bg-red px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-red-hover" onClick$={closeMenu}>{t.nav.getStarted}</a>
          </div>
        )}
      </div>
    </header>
  );
});
