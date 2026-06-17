"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck } from "lucide-react";

const steps = [
  { num: "01", label: "You answer a few questions" },
  { num: "02", label: "We provide a full audit" },
  { num: "03", label: "Unlock secrets to more profit" },
];

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-zinc-950"
    >
      {/* Outer glow background */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[340px] w-[800px] rounded-full bg-[#2d5a3d]/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-5xl">
        {/* Main card */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-2xl"
          style={{ background: "linear-gradient(135deg, #1a3d28 0%, #2a5c3e 50%, #1e4730 100%)" }}
        >
          {/* Subtle inner glow top-right */}
          <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rounded-full bg-[#4a8c5c]/20 blur-[60px]" />
          <div className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#b5a36a]/10 blur-[50px]" />

          <div className="relative grid grid-cols-1 gap-0 lg:grid-cols-2">
            {/* ─── LEFT: headline + CTA ─── */}
            <div className="flex flex-col justify-center gap-6 px-10 py-12 lg:py-14">
              {/* Eyebrow */}
              <div className="flex items-center gap-3">
                <div className="h-px w-8 bg-[#b5a36a]/60" />
                <span className="font-medium italic text-[#c8b87a] text-sm tracking-wide">
                  Put Starfruit to the test
                </span>
              </div>

              {/* Headline */}
              <div>
                <h2 className="text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl">
                  See what a<br />
                  restaurant ally
                </h2>
                <p className="mt-1 text-4xl font-extrabold sm:text-5xl leading-[1.1]">
                  <span className="text-[#90c870]">can </span>
                  <span className="text-[#c8b87a]">do </span>
                  <span className="text-[#90c870]">for </span>
                  <span className="text-[#c8b87a]">you.</span>
                </p>
              </div>

              {/* CTA button */}
              <div>
                <a
                  href="#"
                  className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/10 hover:border-white/30"
                >
                  Solutions We Provide
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              </div>

              {/* Trust note */}
              <div className="flex items-center gap-2 text-xs text-white/50">
                <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-[#90c870]/70" />
                A short conversation may show you what your current suppliers never will.
              </div>
            </div>

            {/* ─── RIGHT: What Happens Next panel ─── */}
            <div className="flex items-center justify-center px-8 py-12 lg:py-14">
              <div
                className="w-full max-w-sm rounded-xl p-6"
                style={{ background: "rgba(0,0,0,0.25)", backdropFilter: "blur(8px)" }}
              >
                {/* Panel header */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/50">
                    What Happens Next
                  </span>
                  <Sparkles className="h-4 w-4 text-[#c8b87a]/70" />
                </div>

                {/* Steps */}
                <div className="flex flex-col gap-3">
                  {steps.map((step, i) => (
                    <motion.div
                      key={step.num}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className="flex items-center gap-4 rounded-lg px-4 py-3.5"
                      style={{ background: "rgba(255,255,255,0.05)" }}
                    >
                      <span className="text-xs font-bold tracking-widest text-[#90c870]/80 shrink-0 w-6">
                        {step.num}
                      </span>
                      <span className="text-sm font-medium text-white/85">{step.label}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
