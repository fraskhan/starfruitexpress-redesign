"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  size?: "sm" | "md" | "lg";
  highlight?: boolean;
  className?: string;
  delay?: number;
}

export function FeatureCard({
  title,
  description,
  icon: Icon,
  badge,
  size = "md",
  highlight = false,
  className,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex flex-col gap-4 overflow-hidden rounded-2xl p-6",
        "border transition-all duration-300",
        highlight
          ? "border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 dark:border-orange-800/40 dark:from-orange-950/30 dark:to-amber-950/20"
          : "border-slate-100 bg-white hover:border-orange-100 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-900/40",
        size === "lg" && "col-span-2 row-span-2 md:p-8",
        size === "md" && "col-span-2 md:col-span-1",
        size === "sm" && "col-span-1",
        className,
      )}
    >
      {/* Background glow for highlight cards */}
      {highlight && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-orange-400/5 via-transparent to-amber-400/10" />
      )}

      {/* Icon */}
      <div
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-xl transition-all duration-300",
          highlight
            ? "bg-orange-100 text-orange-600 dark:bg-orange-900/40 dark:text-orange-400"
            : "bg-slate-100 text-slate-600 group-hover:bg-orange-100 group-hover:text-orange-600 dark:bg-zinc-800 dark:text-zinc-400 dark:group-hover:bg-orange-950/40 dark:group-hover:text-orange-400",
        )}
      >
        <Icon className="h-5 w-5" />
      </div>

      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-slate-900 dark:text-white">{title}</h3>
          {badge && (
            <span className="rounded-full bg-orange-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-orange-600 dark:bg-orange-950/50 dark:text-orange-400">
              {badge}
            </span>
          )}
        </div>
        <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">
          {description}
        </p>
      </div>
    </motion.div>
  );
}
