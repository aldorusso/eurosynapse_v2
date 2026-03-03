import { component$ } from "@builder.io/qwik";

const stats = [
  { value: "10+", label: "Years of Experience" },
  { value: "200+", label: "Projects Delivered" },
  { value: "50+", label: "Team Members" },
  { value: "98%", label: "Client Satisfaction" },
];

export const About = component$(() => {
  return (
    <section id="about" class="bg-gray-50 py-20 lg:py-28">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <div>
            <p class="text-sm font-semibold tracking-widest text-blue-600 uppercase">
              About Us
            </p>
            <h2 class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Building the Future, One Solution at a Time
            </h2>
            <p class="mt-6 text-lg leading-relaxed text-gray-600">
              Eurosynapse is a technology company dedicated to helping
              businesses navigate the digital landscape. With a team of
              experienced engineers, architects, and strategists, we deliver
              solutions that are robust, scalable, and built to last.
            </p>
            <p class="mt-4 text-lg leading-relaxed text-gray-600">
              Our approach combines deep technical expertise with a clear
              understanding of business goals. We don't just build software
              — we build partnerships that drive measurable results.
            </p>
          </div>

          {/* Stats grid */}
          <div class="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                class="rounded-xl bg-white p-6 text-center shadow-sm"
              >
                <p class="text-3xl font-bold text-blue-600 sm:text-4xl">
                  {stat.value}
                </p>
                <p class="mt-2 text-sm font-medium text-gray-500">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
});
