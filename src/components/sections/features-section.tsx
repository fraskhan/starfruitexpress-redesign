"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { FeatureCard } from "@/components/shared/feature-card";
import { features } from "@/data/features";

export function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative bg-slate-50 py-24 dark:bg-zinc-900"
    >
      {/* Top gradient fade */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent dark:from-zinc-950" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionTitle
          badge="Everything You Need"
          title="Built for the way"
          highlight="you live"
          description="From same-day delivery to fully flexible subscriptions — Starfruit Express is designed around your life, not the other way around."
          align="center"
          className="mb-16"
        />

        {/* Bento grid */}
        <div className="grid auto-rows-auto grid-cols-2 gap-4 md:grid-cols-4">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              badge={feature.badge}
              size={feature.size}
              highlight={feature.highlight}
              delay={Math.min(index * 0.07, 0.5)}
            />
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="pointer-events-none absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent dark:from-zinc-950" />
    </section>
  );
}
