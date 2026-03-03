import { component$, useSignal, $ } from "@builder.io/qwik";

export const Navbar = component$(() => {
  const isOpen = useSignal(false);

  const closeMenu = $(() => {
    isOpen.value = false;
  });

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "Industries", href: "/industries/" },
    { label: "Success Stories", href: "/success-stories/" },
    { label: "Partners", href: "/partners/" },
    { label: "About", href: "/about/" },
    { label: "Resources", href: "/resources/" },
    { label: "Careers", href: "/careers/" },
    { label: "Contact", href: "/contact/" },
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
              class="h-8 w-auto"
            />
          </a>

          {/* Desktop links */}
          <nav class="hidden items-center xl:flex">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="px-[14px] py-8 text-[15px] capitalize text-white transition-colors hover:text-yellow"
              >
                {link.label}
              </a>
            ))}
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
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                class="block px-2 py-2.5 text-sm font-medium text-white/80 transition-colors hover:text-red"
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
