"use client";

import { SectionTitle } from "@/components/shared/section-title";
import { MetricCard } from "@/components/shared/metric-card";
import { stats } from "@/data/stats";

export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden bg-white py-24 dark:bg-zinc-950"
    >
      {/* Subtle brand gradient top edge */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-300/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-6">
        <SectionTitle
          badge="By the Numbers"
          title="Results that"
          highlight="speak for themselves"
          description="We're proud of the trust our community places in us. Here's what that looks like in the numbers."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <MetricCard
              key={stat.id}
              label={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              description={stat.description}
              icon={stat.icon}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
