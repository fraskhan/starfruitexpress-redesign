"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Star, Truck, Leaf } from "lucide-react";

const floatingBadges = [
  {
    icon: Truck,
    label: "30-min delivery",
    sub: "Average speed",
    color: "bg-white",
    position: "top-24 left-6 md:left-20",
    delay: 0.6,
  },
  {
    icon: Leaf,
    label: "100% Fresh",
    sub: "Locally sourced",
    color: "bg-white",
    position: "bottom-32 right-6 md:right-20",
    delay: 0.8,
  },
];

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b from-orange-50/60 via-white to-white pt-20 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-900">
      {/* Radial glow */}
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="h-[600px] w-[600px] rounded-full bg-orange-400/20 blur-[120px]" />
      </div>

      {/* Grid Lines */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #f97316 1px, transparent 1px), linear-gradient(to bottom, #f97316 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Floating badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.label}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: badge.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute z-10 hidden md:flex ${badge.position}`}
        >
          <div className="flex items-center gap-2.5 rounded-2xl border border-slate-100 bg-white/90 px-4 py-3 shadow-lg backdrop-blur-sm dark:border-zinc-700 dark:bg-zinc-800/90">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-orange-50 dark:bg-orange-950/40">
              <badge.icon className="h-4 w-4 text-orange-500" />
            </div>
            <div>
              <p className="text-xs font-bold text-slate-900 dark:text-white">{badge.label}</p>
              <p className="text-[10px] text-slate-400">{badge.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        {/* Social proof pill */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-200/60 bg-orange-50 px-4 py-1.5 dark:border-orange-800/30 dark:bg-orange-950/20"
        >
          <span className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-3 w-3 fill-orange-400 text-orange-400" />
            ))}
          </span>
          <span className="text-xs font-semibold text-orange-700 dark:text-orange-400">
            Loved by 18,000+ customers
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl dark:text-white"
        >
          Farm Fresh.
          <br />
          <span className="gradient-text">Delivered Fast.</span>
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-slate-500 dark:text-slate-400"
        >
          Starfruit Express connects you directly with local farmers. Get
          seasonal, organic produce at your door in under 45 minutes — every
          single time.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Link
            href="#cta"
            className="group inline-flex h-12 items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-8 text-sm font-semibold text-white shadow-lg shadow-orange-200/60 transition-all hover:shadow-orange-300/80 hover:brightness-110 active:scale-95 dark:shadow-orange-900/30"
          >
            Start Your First Order
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          <Link
            href="#features"
            className="inline-flex h-12 items-center gap-2 rounded-full border border-slate-200 bg-white px-8 text-sm font-semibold text-slate-700 transition-all hover:border-orange-200 hover:bg-orange-50 dark:border-zinc-700 dark:bg-transparent dark:text-white dark:hover:border-orange-800/40 dark:hover:bg-orange-950/10"
          >
            See How It Works
          </Link>
        </motion.div>

        {/* Companies / trust logos placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-20 flex flex-col items-center gap-4"
        >
          <p className="text-xs font-medium uppercase tracking-widest text-slate-400">
            Featured in
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["TechCrunch", "Forbes", "Fast Company", "WIRED", "Inc."].map(
              (name) => (
                <span
                  key={name}
                  className="text-sm font-bold text-slate-300 dark:text-zinc-600"
                >
                  {name}
                </span>
              ),
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
