"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronRight, Handshake } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* ── Background ───────────────────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Pure white base — fills entire section */}
        <div className="absolute inset-0 bg-white" />

        {/* Restaurant image — covers right 75% only */}
        <motion.div
          initial={{ opacity: 0, scale: 1.03 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
          className="absolute top-0 right-0 bottom-0"
          style={{ left: "25%" }}
        >
          <Image
            src="/hero_restaurant_bg_1781724387068.png"
            alt="Luxury restaurant at sunset"
            fill
            priority
            className="object-cover object-center"
            sizes="75vw"
          />
        </motion.div>

        {/*
          Transition overlay — multi-stop gradient for a clean, polished fade.
          Solid white → softly dissolves into transparent over ~30% of the width.
          Keeps text perfectly readable while blending naturally into the photo.
        */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #ffffff 0%, #ffffff 22%, rgba(255,255,255,0.96) 28%, rgba(255,255,255,0.80) 34%, rgba(255,255,255,0.50) 42%, rgba(255,255,255,0.18) 52%, rgba(255,255,255,0.04) 60%, transparent 70%)",
          }}
        />

        {/* Subtle bottom fade for depth */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white/30 to-transparent" />
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
            className="leading-[1.1] tracking-tight text-[#1a2010]"
          >
            <span className="text-[clamp(1.6rem,3.8vw,2.6rem)] font-semibold not-italic">
              Restaurants are working
              <br />
              harder than ever while
            </span>
          </motion.h1>

          {/* keeping + less profit — single tight block */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col leading-[0.95]"
          >
            <span
              className="text-[clamp(3rem,7vw,5rem)] font-black italic"
              style={{ color: "#22c55e" }}
            >
              keeping
            </span>

            <span
              className="relative inline-block text-[clamp(3rem,7vw,5rem)] font-black tracking-tight italic"
              style={{ color: "#22c55e" }}
            >
              less profit.
              {/* Animated underline */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
                style={{ originX: 0 }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-green-400 via-emerald-500 to-transparent"
              />
            </span>
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

      {/* ── OUR PROMISE card — bottom-right ──────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-10 right-8 z-20 hidden md:block"
      >
        <div
          className="relative flex items-center gap-4 px-5 py-4 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #0b1f12 0%, #091a0f 60%, #050f08 100%)",
            border: "1px solid rgba(34,197,94,0.28)",
            boxShadow:
              "0 0 0 1px rgba(34,197,94,0.06), 0 12px 40px rgba(0,0,0,0.55), 0 0 50px rgba(34,197,94,0.14)",
            minWidth: "310px",
          }}
        >


          {/* Shimmer sweep */}
          <motion.div
            animate={{ x: ["-120%", "220%"] }}
            transition={{ duration: 2.8, repeat: Infinity, repeatDelay: 5, ease: "easeInOut" }}
            className="absolute inset-0 w-1/3 skew-x-12 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(255,255,255,0.05), transparent)",
            }}
          />

          {/* Icon with ping ripple */}
          <div className="relative shrink-0 ml-2">
            {/* Outer ping ring */}
            <motion.div
              animate={{ scale: [1, 1.75], opacity: [0.45, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", repeatDelay: 0.4 }}
              className="absolute inset-0 rounded-full"
              style={{ background: "rgba(34,197,94,0.3)" }}
            />
            {/* Inner glow ring */}
            <motion.div
              animate={{ scale: [1, 1.35], opacity: [0.6, 0] }}
              transition={{ duration: 2.2, repeat: Infinity, ease: "easeOut", delay: 0.3, repeatDelay: 0.4 }}
              className="absolute inset-0 rounded-full"
              style={{ background: "rgba(74,222,128,0.25)" }}
            />

            {/* Icon */}
            <Handshake className="relative h-8 w-8 text-white" strokeWidth={1.8} />
          </div>

          {/* Text */}
          <div>
            <p
              className="text-[10px] font-bold uppercase tracking-[0.2em] mb-[3px]"
              style={{ color: "#4ade80" }}
            >
              Our Promise
            </p>
            <p className="text-[15px] font-extrabold leading-tight text-white tracking-tight">
              The Restaurant's Ally
            </p>
            <p className="text-[12px] mt-1 leading-snug" style={{ color: "#86efac" }}>
              We only get paid when you profit.
            </p>
          </div>
        </div>
      </motion.div>

    </section>
  );
}
