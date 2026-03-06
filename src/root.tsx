import { component$, isDev } from "@builder.io/qwik";
import {
  QwikCityProvider,
  RouterOutlet,
  useLocation,
} from "@builder.io/qwik-city";
import { RouterHead } from "./components/router-head/router-head";

import "./global.css";

const Body = component$(() => {
  const loc = useLocation();
  const lang = loc.params.locale || "en";
  return (
    <body lang={lang}>
      <RouterOutlet />
    </body>
  );
});

export default component$(() => {
  return (
    <QwikCityProvider>
      <head>
        <meta charset="utf-8" />
        {!isDev && (
          <link
            rel="manifest"
            href={`${import.meta.env.BASE_URL}manifest.json`}
          />
        )}
        <RouterHead />
      </head>
      <Body />
    </QwikCityProvider>
  );
});
