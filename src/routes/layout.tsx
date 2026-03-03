import { component$, Slot } from "@builder.io/qwik";
import { Navbar } from "~/components/navbar/navbar";
import { Footer } from "~/components/footer/footer";

export default component$(() => {
  return (
    <>
      <Navbar />
      <main>
        <Slot />
      </main>
      <Footer />
    </>
  );
});
