import { component$ } from "@builder.io/qwik";

export const Footer = component$(() => {
  return (
    <footer class="bg-dark-deep text-white/60">
      <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <a href="/">
              <img
                src="/eurosynapse-dark.png"
                alt="Eurosynapse"
                width={160}
                height={33}
                class="h-11 w-auto"
              />
            </a>
            <p class="mt-5 text-sm leading-relaxed">
              Empowering businesses through innovative software solutions
              and digital transformation across the globe.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h4 class="mb-5 text-sm font-bold tracking-wider text-white uppercase">
              Company
            </h4>
            <ul class="space-y-3">
              {[
                { label: "About Us", href: "/about/" },
                { label: "Services", href: "/services/" },
                { label: "Industries", href: "/industries/" },
                { label: "Partners", href: "/partners/" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    class="text-sm transition-colors hover:text-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 class="mb-5 text-sm font-bold tracking-wider text-white uppercase">
              Services
            </h4>
            <ul class="space-y-3">
              {[
                { label: "AI & Automation", href: "/services/artificial-intelligence/" },
                { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure/" },
                { label: "Cybersecurity", href: "/services/cybersecurity/" },
                { label: "Enterprise Solutions", href: "/services/enterprise-solutions/" },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    class="text-sm transition-colors hover:text-red"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 class="mb-5 text-sm font-bold tracking-wider text-white uppercase">
              Support
            </h4>
            <ul class="space-y-3 text-sm">
              <li>hello@eurosynapse.com</li>
              <li>+34 900 000 000</li>
              <li>Barcelona, Spain</li>
            </ul>
            <div class="mt-6 flex gap-4">
              {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  class="text-xs font-medium transition-colors hover:text-red"
                  aria-label={social}
                >
                  {social}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div class="mt-12 border-t border-white/10 pt-8">
          <div class="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <p class="text-sm">
              &copy; {new Date().getFullYear()} Eurosynapse. All Rights
              Reserved.
            </p>
            <div class="flex flex-wrap items-center gap-4 text-sm">
              <a
                href="/privacy-policy/"
                class="transition-colors hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="/terms/"
                class="transition-colors hover:text-white"
              >
                Terms & Conditions
              </a>
              <a
                href="/cookie-policy/"
                class="transition-colors hover:text-white"
              >
                Cookie Policy
              </a>
              <button
                type="button"
                onClick$={() =>
                  window.dispatchEvent(new Event("open-cookie-settings"))
                }
                class="cursor-pointer transition-colors hover:text-white"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
});
