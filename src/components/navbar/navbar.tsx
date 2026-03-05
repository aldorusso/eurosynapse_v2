import { component$, useSignal, $ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  const isOpen = useSignal(false);
  const servicesOpen = useSignal(false);
  const aboutOpen = useSignal(false);

  const closeMenu = $(() => {
    isOpen.value = false;
  });

  const mainLinks = [
    { label: "Home", href: "/" },
    { label: "Industries", href: "/industries/" },
    { label: "Contact", href: "/contact/" },
  ];

  const serviceLinks = [
    { label: "AI & Automation", href: "/services/artificial-intelligence/" },
    { label: "Digital Transformation", href: "/services/digital-transformation/" },
    { label: "Data & Analytics", href: "/services/data-analytics/" },
    { label: "Cybersecurity", href: "/services/cybersecurity/" },
    { label: "Cloud & Infrastructure", href: "/services/cloud-infrastructure/" },
    { label: "Enterprise Solutions", href: "/services/enterprise-solutions/" },
    { label: "IT Advisory & Talent", href: "/services/it-advisory/" },
  ];

  const aboutLinks = [
    { label: "About Us", href: "/about/" },
    { label: "Success Stories", href: "/success-stories/" },
    { label: "Partners", href: "/partners/" },
    { label: "Resources", href: "/resources/" },
    { label: "Careers", href: "/careers/" },
  ];

  return (
    <header class="fixed top-0 left-0 right-0 z-50 bg-[#080F1E]">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <a href="/" class="shrink-0">
            <img
              src="/eurosynapse-dark.png"
              alt="Eurosynapse"
              width={160}
              height={33}
              class="h-11 w-auto"
            />
          </a>

          {/* Desktop links */}
          <nav class="hidden items-center xl:flex">
            <a
              href="/"
              class="px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow"
            >
              Home
            </a>

            {/* Services dropdown */}
            <div
              class="relative"
              onMouseEnter$={() => (servicesOpen.value = true)}
              onMouseLeave$={() => (servicesOpen.value = false)}
            >
              <button
                type="button"
                class="flex items-center gap-1 px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow"
              >
                Services
                <svg
                  class={[
                    "h-3.5 w-3.5 transition-transform",
                    servicesOpen.value && "rotate-180",
                  ]}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {servicesOpen.value && (
                <div class="absolute top-full left-0 min-w-[240px] rounded-lg border border-white/10 bg-[#0d1528] py-2 shadow-xl">
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      class="block px-5 py-2.5 text-[14px] text-white/70 transition-colors hover:bg-white/5 hover:text-yellow"
                    >
                      {link.label}
                    </a>
                  ))}
                  <div class="mx-3 my-2 border-t border-white/10" />
                  <a
                    href="/services/"
                    class="block px-5 py-2.5 text-[14px] font-medium text-yellow transition-colors hover:bg-white/5 hover:text-white"
                  >
                    View All Services
                  </a>
                </div>
              )}
            </div>

            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow"
              >
                {link.label}
              </a>
            ))}

            {/* About dropdown */}
            <div
              class="relative"
              onMouseEnter$={() => (aboutOpen.value = true)}
              onMouseLeave$={() => (aboutOpen.value = false)}
            >
              <button
                type="button"
                class="flex items-center gap-1 px-[14px] py-8 text-[15px] text-white transition-colors hover:text-yellow"
              >
                About
                <svg
                  class={[
                    "h-3.5 w-3.5 transition-transform",
                    aboutOpen.value && "rotate-180",
                  ]}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {aboutOpen.value && (
                <div class="absolute top-full left-0 min-w-[200px] rounded-lg border border-white/10 bg-[#0d1528] py-2 shadow-xl">
                  {aboutLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      class="block px-5 py-2.5 text-[14px] text-white/70 transition-colors hover:bg-white/5 hover:text-yellow"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          {/* CTA */}
          <a
            href="/contact/"
            class="hidden rounded-[3px] border-2 border-red bg-red px-6 py-3 text-[15px] font-medium text-white transition-all hover:border-white hover:bg-white hover:text-dark xl:inline-flex"
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            type="button"
            class="flex items-center xl:hidden"
            onClick$={() => (isOpen.value = !isOpen.value)}
            aria-label="Toggle menu"
          >
            <svg
              class="h-6 w-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen.value ? (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen.value && (
          <div class="border-t border-white/10 pb-6 xl:hidden">
            <a
              href="/"
              class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow"
              onClick$={closeMenu}
            >
              Home
            </a>

            {/* Services section in mobile */}
            <p class="mt-3 px-2 text-xs font-bold tracking-wider text-white/40 uppercase">
              Services
            </p>
            {serviceLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow"
                onClick$={closeMenu}
              >
                {link.label}
              </a>
            ))}
            <a
              href="/services/"
              class="block px-2 py-2.5 text-sm font-medium text-yellow transition-colors hover:text-white"
              onClick$={closeMenu}
            >
              View All Services
            </a>

            {mainLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow"
                onClick$={closeMenu}
              >
                {link.label}
              </a>
            ))}

            {/* About section in mobile */}
            <p class="mt-3 px-2 text-xs font-bold tracking-wider text-white/40 uppercase">
              About
            </p>
            {aboutLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-yellow"
                onClick$={closeMenu}
              >
                {link.label}
              </a>
            ))}

            <a
              href="/contact/"
              class="mt-4 block rounded-md bg-red px-6 py-2.5 text-center text-sm font-semibold text-white transition-colors hover:bg-red-hover"
              onClick$={closeMenu}
            >
              Get Started
            </a>
          </div>
        )}
      </div>
    </header>
  );
});
