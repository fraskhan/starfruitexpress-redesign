"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

const perks = [
  "No hidden fees",
  "Pause or cancel anytime",
  "First box free",
  "30-min delivery guarantee",
];

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-24 dark:from-zinc-950 dark:to-zinc-900"
    >
      {/* Decorative blobs */}
      <div className="pointer-events-none absolute -top-20 -left-20 h-80 w-80 rounded-full bg-orange-300/20 blur-[80px]" />
      <div className="pointer-events-none absolute -right-20 -bottom-20 h-80 w-80 rounded-full bg-amber-300/20 blur-[80px]" />

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:border-orange-800/30 dark:bg-orange-950/20 dark:text-orange-400"
        >
          <Sparkles className="h-3 w-3" />
          Limited time offer
        </motion.div>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl dark:text-white"
        >
          Your first box is{" "}
          <span className="gradient-text">on us.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-5 max-w-lg text-lg leading-relaxed text-slate-500 dark:text-slate-400"
        >
          Join over 18,000 happy customers. Get farm-fresh seasonal produce
          delivered to your door — with zero risk on your first order.
        </motion.p>

        {/* Perks list */}
        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2"
        >
          {perks.map((perk) => (
            <li
              key={perk}
              className="flex items-center gap-1.5 text-sm text-slate-500 dark:text-slate-400"
            >
              <CheckCircle2 className="h-4 w-4 text-orange-500" />
              {perk}
            </li>
          ))}
        </motion.ul>

        {/* Email CTA form */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-10 flex flex-col items-center gap-4"
        >
          {/* Inline email form */}
          <div className="flex w-full max-w-md overflow-hidden rounded-full border border-slate-200 bg-white shadow-md dark:border-zinc-700 dark:bg-zinc-800">
            <input
              type="email"
              placeholder="Enter your email..."
              className="flex-1 bg-transparent px-5 py-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
            />
            <button className="m-1 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 py-2 text-sm font-semibold text-white transition-all hover:brightness-110 active:scale-95">
              Get Started
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <p className="text-xs text-slate-400">
            No spam, no commitments. Unsubscribe at any time.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
