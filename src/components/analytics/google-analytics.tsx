import { component$, useVisibleTask$ } from "@builder.io/qwik";
import { getCookieConsent } from "~/utils/cookies";

const GA_ID = "G-C7ZZBYRPRX";

export const GoogleAnalytics = component$(() => {
  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(() => {
    function loadGA() {
      if (document.getElementById("ga-script")) return;

      // Initialize dataLayer and gtag before loading the script
      window.dataLayer = window.dataLayer || [];
      window.gtag = function () {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };

      window.gtag("consent", "default", {
        analytics_storage: "granted",
      });
      window.gtag("js", new Date());
      window.gtag("config", GA_ID, {
        anonymize_ip: true,
      });

      // Load gtag.js script
      const script = document.createElement("script");
      script.id = "ga-script";
      script.async = true;
      script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
      document.head.appendChild(script);
    }

    function removeGA() {
      const script = document.getElementById("ga-script");
      if (script) script.remove();
      // Clear GA cookies
      document.cookie.split(";").forEach((c) => {
        const name = c.trim().split("=")[0];
        if (name.startsWith("_ga")) {
          document.cookie = `${name}=; path=/; max-age=0; domain=${window.location.hostname}`;
          document.cookie = `${name}=; path=/; max-age=0`;
        }
      });
    }

    // Check initial consent
    const prefs = getCookieConsent();
    if (prefs?.analytics) {
      loadGA();
    }

    // Listen for consent changes
    const handler = (e: Event) => {
      const detail = (e as CustomEvent).detail;
      if (detail?.analytics) {
        loadGA();
      } else {
        removeGA();
      }
    };
    window.addEventListener("cookie-consent-updated", handler);
    return () => window.removeEventListener("cookie-consent-updated", handler);
  });

  return null;
});
