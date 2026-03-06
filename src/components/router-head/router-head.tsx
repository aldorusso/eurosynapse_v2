import { component$ } from "@builder.io/qwik";
import { useDocumentHead, useLocation } from "@builder.io/qwik-city";
import { LOCALES } from "~/i18n/config";

export const RouterHead = component$(() => {
  const head = useDocumentHead();
  const loc = useLocation();

  const currentLocale = loc.params.locale || "en";
  const pathWithoutLocale = loc.url.pathname.replace(
    new RegExp(`^/${currentLocale}`),
    "",
  );
  const origin = loc.url.origin;

  return (
    <>
      <title>{head.title}</title>

      <link rel="canonical" href={loc.url.href} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />

      {/* Hreflang tags for SEO */}
      {LOCALES.map((l) => (
        <link
          key={l}
          rel="alternate"
          hreflang={l}
          href={`${origin}/${l}${pathWithoutLocale}`}
        />
      ))}
      <link
        rel="alternate"
        hreflang="x-default"
        href={`${origin}/en${pathWithoutLocale}`}
      />

      {head.meta.map((m) => (
        <meta key={m.key} {...m} />
      ))}

      {head.links.map((l) => (
        <link key={l.key} {...l} />
      ))}

      {head.styles.map((s) => (
        <style
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.style })}
        />
      ))}

      {head.scripts.map((s) => (
        <script
          key={s.key}
          {...s.props}
          {...(s.props?.dangerouslySetInnerHTML
            ? {}
            : { dangerouslySetInnerHTML: s.script })}
        />
      ))}
    </>
  );
});
