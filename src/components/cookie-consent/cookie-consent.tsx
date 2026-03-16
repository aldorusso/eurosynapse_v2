import { component$, useSignal, useVisibleTask$, $ } from "@builder.io/qwik";
import { useLocation } from "@builder.io/qwik-city";
import type { Locale } from "~/i18n/config";
import { isValidLocale } from "~/i18n/config";
import { getTranslations } from "~/i18n/translations";
import {
  getCookieConsent,
  setCookieConsent,
  DEFAULT_PREFERENCES,
  ALL_ACCEPTED,
  type CookiePreferences,
} from "~/utils/cookies";

export const CookieConsent = component$(() => {
  const loc = useLocation();
  const locale = (isValidLocale(loc.params.locale) ? loc.params.locale : "en") as Locale;
  const t = getTranslations(locale);

  const visible = useSignal(false);
  const showCustomize = useSignal(false);
  const analytics = useSignal(false);
  const marketing = useSignal(false);

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const existing = getCookieConsent();
    if (!existing) {
      visible.value = true;
    }
  });

  const acceptAll = $(() => {
    setCookieConsent(ALL_ACCEPTED);
    visible.value = false;
    showCustomize.value = false;
  });

  const rejectAll = $(() => {
    setCookieConsent(DEFAULT_PREFERENCES);
    visible.value = false;
    showCustomize.value = false;
  });

  const saveCustom = $(() => {
    const prefs: CookiePreferences = {
      necessary: true,
      analytics: analytics.value,
      marketing: marketing.value,
    };
    setCookieConsent(prefs);
    visible.value = false;
    showCustomize.value = false;
  });

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    const handler = () => {
      const existing = getCookieConsent();
      if (existing) {
        analytics.value = existing.analytics;
        marketing.value = existing.marketing;
      }
      showCustomize.value = true;
      visible.value = true;
    };
    window.addEventListener("open-cookie-settings", handler);
    return () => window.removeEventListener("open-cookie-settings", handler);
  });

  if (!visible.value) return null;

  const lp = (path: string) => `/${locale}${path}`;

  return (
    <div class="fixed inset-0 z-[9999] flex items-end justify-center p-4 sm:p-6">
      <div class="fixed inset-0 bg-black/40" onClick$={rejectAll} />
      <div role="dialog" aria-label="Cookie consent" class="relative z-10 w-full max-w-3xl rounded-2xl border border-white/10 bg-[#0d1528] p-6 shadow-2xl sm:p-8">
        <div class="flex items-start gap-4">
          <div class="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-yellow/10">
            <svg class="h-5 w-5 text-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <div class="flex-1">
            <h3 class="text-lg font-bold text-white">{t.cookie.title}</h3>
            <p class="mt-1 text-sm leading-relaxed text-white/60">
              {t.cookie.description}{" "}
              <a href={lp("/cookie-policy/")} class="text-yellow underline hover:text-white">{t.cookie.cookiePolicyLink}</a>.
            </p>
          </div>
        </div>

        {showCustomize.value && (
          <div class="mt-6 space-y-4 rounded-xl bg-white/5 p-5">
            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold text-white">{t.cookie.necessary}</p>
                <p class="text-xs text-white/50">{t.cookie.necessaryDesc}</p>
              </div>
              <div class="flex h-6 w-11 items-center rounded-full bg-green/30 px-0.5">
                <div class="h-5 w-5 rounded-full bg-green shadow" />
              </div>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold text-white">{t.cookie.analytics}</p>
                <p class="text-xs text-white/50">{t.cookie.analyticsDesc}</p>
              </div>
              <button type="button" role="switch" aria-checked={analytics.value} aria-label="Analytics cookies" onClick$={() => (analytics.value = !analytics.value)}
                class={["flex h-6 w-11 items-center rounded-full px-0.5 transition-colors", analytics.value ? "bg-green/30" : "bg-white/10"]}>
                <div class={["h-5 w-5 rounded-full shadow transition-all", analytics.value ? "translate-x-5 bg-green" : "translate-x-0 bg-white/40"]} />
              </button>
            </div>

            <div class="flex items-center justify-between">
              <div>
                <p class="text-sm font-semibold text-white">{t.cookie.marketing}</p>
                <p class="text-xs text-white/50">{t.cookie.marketingDesc}</p>
              </div>
              <button type="button" role="switch" aria-checked={marketing.value} aria-label="Marketing cookies" onClick$={() => (marketing.value = !marketing.value)}
                class={["flex h-6 w-11 items-center rounded-full px-0.5 transition-colors", marketing.value ? "bg-green/30" : "bg-white/10"]}>
                <div class={["h-5 w-5 rounded-full shadow transition-all", marketing.value ? "translate-x-5 bg-green" : "translate-x-0 bg-white/40"]} />
              </button>
            </div>
          </div>
        )}

        <div class="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-end">
          {!showCustomize.value && (
            <button type="button" onClick$={() => (showCustomize.value = true)}
              class="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/40 hover:text-white">
              {t.cookie.customize}
            </button>
          )}
          {showCustomize.value && (
            <button type="button" onClick$={saveCustom}
              class="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/40 hover:text-white">
              {t.cookie.savePreferences}
            </button>
          )}
          <button type="button" onClick$={rejectAll}
            class="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-white/70 transition-colors hover:border-white/40 hover:text-white">
            {t.cookie.rejectAll}
          </button>
          <button type="button" onClick$={acceptAll}
            class="rounded-lg bg-yellow px-5 py-2.5 text-sm font-semibold text-dark transition-colors hover:bg-yellow/90">
            {t.cookie.acceptAll}
          </button>
        </div>
      </div>
    </div>
  );
});
