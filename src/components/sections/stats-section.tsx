"use client";

import { motion } from "framer-motion";

/* ── Stat definitions ────────────────────────────────────────────────── */
const STATS = [
  {
    id: "restaurants",
    number: "1,000+",
    numberStyle: { color: "#1e3d1e" } as React.CSSProperties,
    keyword: "restaurants",
    keywordStyle: { color: "#1e3d1e" } as React.CSSProperties,
    description: "we've learned from and counting",
  },
  {
    id: "profits",
    number: "$10M+",
    numberStyle: {
      background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 45%, #2d6a35 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    } as React.CSSProperties,
    keyword: "profits",
    keywordStyle: {
      background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 45%, #2d6a35 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    } as React.CSSProperties,
    description: "we have uncovered for clients",
  },
  {
    id: "hours",
    number: "100+",
    numberStyle: { color: "#b45309" } as React.CSSProperties,
    keyword: "hours saved",
    keywordStyle: { color: "#b45309" } as React.CSSProperties,
    description: "per year, for operators like you",
  },
];

/* Duplicate for seamless loop */
const TRACK = [...STATS, ...STATS];

/* ── Single stat pill ─────────────────────────────────────────────────── */
function StatPill({ stat }: { stat: typeof STATS[number] }) {
  return (
    <span className="inline-flex items-center gap-3 shrink-0 px-10">
      {/* Number */}
      <span
        className="font-black leading-none tabular-nums"
        style={{
          fontSize: "clamp(2.6rem, 5vw, 4rem)",
          letterSpacing: "-0.03em",
          ...stat.numberStyle,
        }}
      >
        {stat.number}
      </span>

      {/* Keyword */}
      <span
        className="font-bold"
        style={{
          fontSize: "clamp(1.2rem, 2.2vw, 1.75rem)",
          letterSpacing: "-0.01em",
          ...stat.keywordStyle,
        }}
      >
        {stat.keyword}
      </span>

      {/* Description */}
      <em
        style={{
          fontStyle: "italic",
          fontSize: "clamp(0.95rem, 1.6vw, 1.2rem)",
          color: "#7a8a72",
        }}
      >
        {stat.description}
      </em>

      {/* Separator */}
      <span style={{ color: "rgba(26,64,32,0.2)", fontSize: "2rem", marginLeft: "1rem" }}>
        /
      </span>
    </span>
  );
}

/* ── Section ──────────────────────────────────────────────────────────── */
export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-12"
      style={{ background: "#f5f7f2" }}
    >
      {/* Hairline top */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{ background: "rgba(26,64,32,0.12)" }}
      />

      {/* Left + right fade masks */}
      <div
        className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10"
        style={{ background: "linear-gradient(to right, #f5f7f2, transparent)" }}
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10"
        style={{ background: "linear-gradient(to left, #f5f7f2, transparent)" }}
      />

      {/* ── Scrolling track ── */}
      <div className="overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 22,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {TRACK.map((stat, i) => (
            <StatPill key={`${stat.id}-${i}`} stat={stat} />
          ))}
        </motion.div>
      </div>

      {/* ── Footer attribution ── */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-8 flex items-center justify-center gap-4 relative z-10"
      >
        <div className="hidden sm:block h-px w-16" style={{ background: "rgba(26,64,32,0.15)" }} />

        <p style={{ fontSize: "14px", lineHeight: 1 }}>
          <em style={{ fontStyle: "italic", color: "#7a8a72" }}>Built on </em>
          <strong style={{ fontWeight: 800, color: "#1e3d1e", letterSpacing: "-0.01em" }}>
            real conversations
          </strong>
        </p>

        <span style={{ color: "#b45309", fontSize: "18px", lineHeight: 1 }}>·</span>

        <p
          style={{
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "0.22em",
            color: "#b45309",
            textTransform: "uppercase",
          }}
        >
          Operator Conversations
        </p>

        <div className="hidden sm:block h-px w-16" style={{ background: "rgba(26,64,32,0.15)" }} />
      </motion.div>

      {/* Hairline bottom */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{ background: "rgba(26,64,32,0.10)" }}
      />
    </section>
  );
}
