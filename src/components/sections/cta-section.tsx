"use client";

import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import Image from "next/image";

const steps = [
  { num: "01", label: "You answer a few questions" },
  { num: "02", label: "We provide a full audit" },
  { num: "03", label: "Unlock secrets to more profit" },
];

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden"
      style={{ minHeight: "560px" }}
    >
      {/* ── Background image ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/cta_bg_light.png"
          alt=""
          fill
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Ambient glows */}
      <div className="pointer-events-none absolute left-[38%] top-16 h-64 w-64 rounded-full bg-amber-400/10 blur-[80px] z-10" />
      <div className="pointer-events-none absolute left-[28%] bottom-16 h-48 w-48 rounded-full bg-green-400/10 blur-[60px] z-10" />

      {/* ── Main content ── */}
      <div className="relative z-20 mx-auto max-w-7xl px-6 py-14 sm:py-20">
        {/* ── Dark green card ── */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl px-6 py-10 sm:px-10 sm:py-12 lg:px-20 lg:py-16"
          style={{
            background: "linear-gradient(135deg, #0d1f12 0%, #122a1a 50%, #0f2318 100%)",
            boxShadow: "0 32px 96px rgba(0,0,0,0.38), 0 4px 28px rgba(0,0,0,0.22), inset 0 1px 0 rgba(144,200,112,0.08)",
          }}
        >
          {/* Inner glow orbs */}
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full blur-[80px]"
            style={{ background: "rgba(74,222,128,0.12)" }}
          />
          <div
            className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full blur-[70px]"
            style={{ background: "rgba(200,184,122,0.08)" }}
          />

          {/* Subtle top border highlight */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-px"
            style={{ background: "linear-gradient(to right, transparent, rgba(144,200,112,0.35), transparent)" }}
          />

          <div className="relative grid grid-cols-1 items-center gap-10 lg:gap-16 lg:grid-cols-[1.4fr_1fr]">

            {/* ── LEFT ── */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-7"
            >
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div
                  className="h-[2px] w-10 rounded-full"
                  style={{ background: "rgba(200,184,122,0.75)", boxShadow: "0 0 8px rgba(200,184,122,0.5)" }}
                />
                <span
                  className="text-sm font-semibold italic tracking-wide"
                  style={{ color: "#c8b87a", filter: "drop-shadow(0 0 6px rgba(200,184,122,0.55))" }}
                >
                  Put Starfruit to the test
                </span>
              </div>

              {/* Headline */}
              <div className="flex flex-col gap-1">
                <p
                  className="font-semibold leading-tight"
                  style={{
                    fontSize: "clamp(1.55rem, 3.2vw, 2.25rem)",
                    color: "rgba(255,255,255,0.9)",
                    letterSpacing: "-0.015em",
                    filter: "drop-shadow(0 0 18px rgba(144,200,112,0.2))",
                  }}
                >
                  See what a restaurant ally
                </p>
                <p
                  className="font-black italic leading-none"
                  style={{
                    fontSize: "clamp(2.8rem, 6vw, 4.2rem)",
                    letterSpacing: "-0.03em",
                    filter: "drop-shadow(0 0 28px rgba(144,200,112,0.35))",
                  }}
                >
                  <span style={{ color: "#90c870" }}>can </span>
                  <span style={{ color: "#c8b87a" }}>do </span>
                  <span style={{ color: "#90c870" }}>for </span>
                  <span style={{ color: "#c8b87a" }}>you.</span>
                </p>
              </div>

              {/* CTA button */}
              <div className="flex flex-wrap items-center gap-4 pt-1">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 340, damping: 18 }}
                  className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-full px-8 py-4 text-[15px] font-bold text-white shadow-lg shadow-green-900/30 transition-all hover:shadow-green-900/45"
                  style={{
                    background: "linear-gradient(135deg, #254d2c 0%, #2f7039 100%)",
                    border: "1px solid rgba(144,200,112,0.22)",
                  }}
                >
                  <span className="relative z-10">Solutions We Provide</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
                </motion.a>
              </div>

              {/* Trust line */}
              <div
                className="flex items-start gap-3"
                style={{ color: "rgba(185,215,165,0.85)" }}
              >
                <ShieldCheck
                  className="h-5 w-5 shrink-0 mt-0.5"
                  style={{ color: "#4ade80", filter: "drop-shadow(0 0 8px rgba(74,222,128,0.7))" }}
                />
                <span className="text-[14.5px] font-medium leading-relaxed" style={{ filter: "drop-shadow(0 0 10px rgba(144,200,112,0.25))" }}>
                  A short conversation may show you what your current suppliers never will.
                </span>
              </div>
            </motion.div>

            {/* ── RIGHT: What Happens Next ── */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center justify-center"
            >
              <div
                className="w-full max-w-sm rounded-2xl p-7"
                style={{
                  background: "rgba(0,0,0,0.22)",
                  backdropFilter: "blur(16px)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {/* Panel header */}
                <div className="mb-6 flex items-center justify-between">
                  <span
                    className="text-[10.5px] font-bold uppercase tracking-[0.24em]"
                    style={{ color: "rgba(180,195,155,0.7)", filter: "drop-shadow(0 0 6px rgba(144,200,112,0.3))" }}
                  >
                    What Happens Next
                  </span>
                  <Sparkles className="h-4 w-4" style={{ color: "rgba(200,184,122,0.9)", filter: "drop-shadow(0 0 8px rgba(200,184,122,0.7))" }} />
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.5,
                        delay: 0.3 + i * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className="flex items-center gap-4 rounded-xl px-4 py-4 transition-all duration-200 cursor-default"
                      style={{
                        background: "rgba(255,255,255,0.055)",
                        border: "1px solid rgba(255,255,255,0.07)",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background =
                          "rgba(74,222,128,0.09)";
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(74,222,128,0.2)";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLDivElement).style.background =
                          "rgba(255,255,255,0.055)";
                        (e.currentTarget as HTMLDivElement).style.borderColor =
                          "rgba(255,255,255,0.07)";
                      }}
                    >
                      {/* Number badge */}
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-[11px] font-black"
                        style={{
                          background: "rgba(74,222,128,0.16)",
                          color: "#4ade80",
                          border: "1px solid rgba(74,222,128,0.28)",
                          boxShadow: "0 0 12px rgba(74,222,128,0.25)",
                          filter: "drop-shadow(0 0 4px rgba(74,222,128,0.4))",
                        }}
                      >
                        {step.num}
                      </span>
                      <span
                        className="text-[14px] font-medium leading-snug"
                        style={{ color: "rgba(225,235,210,0.95)", filter: "drop-shadow(0 0 8px rgba(144,200,112,0.18))" }}
                      >
                        {step.label}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
