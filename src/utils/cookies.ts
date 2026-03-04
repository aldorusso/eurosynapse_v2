export interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
}

const COOKIE_NAME = "cookie_consent";
const MAX_AGE = 31536000; // 365 days

export function getCookieConsent(): CookiePreferences | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie
    .split("; ")
    .find((row) => row.startsWith(`${COOKIE_NAME}=`));
  if (!match) return null;
  try {
    return JSON.parse(decodeURIComponent(match.split("=")[1]));
  } catch {
    return null;
  }
}

export function setCookieConsent(prefs: CookiePreferences): void {
  if (typeof document === "undefined") return;
  const value = encodeURIComponent(JSON.stringify(prefs));
  document.cookie = `${COOKIE_NAME}=${value}; path=/; max-age=${MAX_AGE}; SameSite=Lax`;
  // Dispatch event so scripts can react
  window.dispatchEvent(
    new CustomEvent("cookie-consent-updated", { detail: prefs }),
  );
}

export function hasConsent(category: keyof CookiePreferences): boolean {
  const prefs = getCookieConsent();
  return prefs ? prefs[category] : false;
}

export const DEFAULT_PREFERENCES: CookiePreferences = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export const ALL_ACCEPTED: CookiePreferences = {
  necessary: true,
  analytics: true,
  marketing: true,
};
