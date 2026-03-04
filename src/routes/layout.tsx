import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer/footer";
import { CookieConsent } from "~/components/cookie-consent/cookie-consent";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
      <CookieConsent />
    </>
  );
});
