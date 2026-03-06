import type { RequestHandler } from "@builder.io/qwik-city";
import { DEFAULT_LOCALE, isValidLocale } from "~/i18n/config";

export const onGet: RequestHandler = async ({ redirect, headers }) => {
  const accept = headers.get("accept-language") || "";
  const preferred = accept.split(",")[0]?.split("-")[0]?.toLowerCase();
  const locale = preferred && isValidLocale(preferred) ? preferred : DEFAULT_LOCALE;
  throw redirect(302, `/${locale}/`);
};
