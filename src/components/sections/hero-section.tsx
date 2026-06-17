"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, TrendingDown, Shield, Clock } from "lucide-react";

const floatingStats = [
  {
    icon: TrendingDown,
    value: "23%",
    label: "Cost Reduction",
    sub: "Average for our clients",
    color: "from-emerald-500 to-green-600",
    delay: 0.7,
    position: "bottom-20 right-[38%] md:right-[34%]",
  },
  {
    icon: Shield,
    value: "OUR PROMISE",
    label: "The Restaurant's Ally",
    sub: "Trusted by 500+ restaurants",
    color: "from-amber-500 to-orange-500",
    delay: 0.9,
    position: "bottom-8 right-6 md:right-12",
  },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background image (right ~55% of viewport) ─────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Base warm gradient fill */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#f5f0e8] via-[#eee8d5] to-[#d4c9a8]" />

        {/* The restaurant image covering right portion */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/hero-bg.png"
            alt="Luxury restaurant at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>

        {/* Left-side gradient overlay — smooth fade from cream to transparent */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5f0e8] via-[#f5f0e8]/90 via-30% to-transparent to-65%" />

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#f5f0e8]/60 to-transparent" />

        {/* Subtle warm tint over the whole hero */}
        <div className="absolute inset-0 bg-amber-900/[0.04]" />
      </div>

      {/* ── Floating decorative orbs ──────────────────────────────────── */}
      <div className="pointer-events-none absolute left-[40%] top-20 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px]" />
      <div className="pointer-events-none absolute left-[30%] bottom-20 h-48 w-48 rounded-full bg-green-400/10 blur-[60px]" />

      {/* ── Main content ─────────────────────────────────────────────── */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28 pb-20 lg:pt-36">
        <div className="max-w-[580px]">

          {/* Eyebrow line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-5 flex items-center gap-3"
          >
            <div className="h-[2px] w-10 bg-gradient-to-r from-amber-500 to-green-600 rounded-full" />
            <span className="text-sm font-semibold italic tracking-wide text-slate-600">
              Time is Money. We Save You Both.
            </span>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.6rem,6vw,4.2rem)] font-black leading-[1.05] tracking-tight text-[#1a2010]"
          >
            Restaurants
            <br />
            are working
            <br />
            harder than
            <br />
            ever while
            <br />
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-amber-500"
            >
              keeping
            </motion.span>
          </motion.h1>

          {/* "less profit." with underline accent */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="relative inline-block"
          >
            <span className="text-[clamp(2.6rem,6vw,4.2rem)] font-black tracking-tight text-amber-500 italic">
              less profit.
            </span>
            {/* Animated underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
              style={{ originX: 0 }}
              className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-amber-500 via-green-500 to-transparent"
            />
          </motion.div>

          {/* Sub-description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 max-w-[420px] text-[15px] leading-relaxed text-slate-600"
          >
            We help restaurants uncover hidden profits, simplify purchasing, and
            reduce operational stress — all without adding more work to your
            team.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            {/* Primary CTA */}
            <Link
              href="#cta"
              className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full bg-gradient-to-r from-[#1a4020] to-[#2d6e35] px-7 py-3.5 text-[15px] font-bold text-white shadow-lg shadow-green-900/25 transition-all hover:shadow-green-900/40 hover:brightness-110 active:scale-95"
            >
              <span className="relative z-10">Talk with our team</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
            </Link>

            {/* Secondary CTA */}
            <Link
              href="#features"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-slate-300 bg-white/70 px-7 py-3.5 text-[15px] font-bold text-slate-700 backdrop-blur-sm transition-all hover:border-amber-400 hover:bg-white hover:text-amber-600 active:scale-95"
            >
              See how we help
              <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.1 }}
            className="mt-10 flex items-center gap-6"
          >
            <div className="flex -space-x-2">
              {["#e67e22", "#27ae60", "#2980b9", "#8e44ad"].map((color, i) => (
                <div
                  key={i}
                  className="h-8 w-8 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-slate-800">500+ restaurants</p>
              <p className="text-xs text-slate-500">trust Starfruit Express</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* ── Floating stat cards ───────────────────────────────────────── */}
      {floatingStats.map((stat) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 30, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, delay: stat.delay, ease: [0.16, 1, 0.3, 1] }}
          className={`absolute z-20 hidden md:flex ${stat.position}`}
        >
          <div className="group flex items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-4 py-3 shadow-xl backdrop-blur-md transition-all hover:bg-white hover:shadow-2xl">
            <div
              className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${stat.color} shadow-md`}
            >
              <stat.icon className="h-5 w-5 text-white" />
            </div>
            <div>
              <p className="text-[9px] font-bold uppercase tracking-[0.15em] text-slate-400">
                {stat.value}
              </p>
              <p className="text-[13px] font-extrabold text-slate-900 leading-tight">
                {stat.label}
              </p>
              <p className="text-[10px] text-slate-500">{stat.sub}</p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* ── Scroll indicator ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
      >
        <span className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="h-8 w-[1px] rounded-full bg-gradient-to-b from-amber-500 to-transparent"
        />
      </motion.div>
    </section>
  );
}
