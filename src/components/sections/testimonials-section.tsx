"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { TestimonialCard } from "@/components/shared/testimonial-card";
import { testimonials } from "@/data/testimonials";

export function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950"
    >
      {/* Background radial */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[500px] w-[800px] rounded-full bg-orange-50 blur-[120px] dark:bg-orange-950/10" />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          badge="What People Say"
          title="Trusted by thousands"
          highlight="across the city"
          description="Don't just take our word for it. Here's what real customers and chefs think about Starfruit Express."
          align="center"
          className="mb-16"
        />

        {/* Masonry-style 3-column grid */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
              className={
                // Span first card across 2 columns on large screens for visual variety
                index === 0 ? "lg:col-span-1" : ""
              }
            />
          ))}
        </div>
      </div>
    </section>
  );
}
