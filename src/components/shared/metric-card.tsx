"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "./animated-counter";

interface MetricCardProps {
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description?: string;
  icon?: LucideIcon;
  className?: string;
  delay?: number;
}

export function MetricCard({
  label,
  value,
  suffix,
  prefix,
  description,
  icon: Icon,
  className,
  delay = 0,
}: MetricCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm",
        "transition-shadow duration-300 hover:shadow-lg",
        "dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
    >
      {/* Subtle gradient accent top-right */}
      <div className="pointer-events-none absolute -top-8 -right-8 h-24 w-24 rounded-full bg-orange-400/10 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:bg-orange-400/20" />

      <div className="relative flex items-start justify-between gap-4">
        <div className="flex flex-col gap-1">
          {/* Value row */}
          <div className="flex items-baseline gap-0.5">
            {prefix && (
              <span className="text-xl font-bold text-orange-500">{prefix}</span>
            )}
            <AnimatedCounter
              value={value}
              className="text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white"
            />
            <span className="text-xl font-bold text-orange-500">{suffix}</span>
          </div>

          <p className="text-sm font-semibold text-slate-600 dark:text-slate-300">
            {label}
          </p>

          {description && (
            <p className="mt-1 text-xs leading-relaxed text-slate-400 dark:text-slate-500">
              {description}
            </p>
          )}
        </div>

        {Icon && (
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition-colors group-hover:bg-orange-100 dark:bg-orange-950/30 dark:text-orange-400 dark:group-hover:bg-orange-950/50">
            <Icon className="h-5 w-5" />
          </div>
        )}
      </div>
    </motion.div>
  );
}
