"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Animated counter ───────────────────────────────────────────────── */
function useCounter(target: number, duration = 1.6, active = false) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const tick = (ts: number) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.floor(eased * target));
      if (p < 1) requestAnimationFrame(tick);
      else setVal(target);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return val;
}

/* ── Single stat item ───────────────────────────────────────────────── */
interface StatProps {
  prefix?: string;
  value: number;
  suffix: string;
  /** hex colour for the big number */
  numColor: string;
  children: React.ReactNode;
  delay: number;
}

function Stat({ prefix, value, suffix, numColor, children, delay }: StatProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const count = useCounter(value, 1.6, inView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex items-center gap-5"
    >
      {/* Big number — Geist Black, same weight as hero headline italic */}
      <span
        className="shrink-0 font-black leading-none tabular-nums"
        style={{
          color: numColor,
          fontSize: "clamp(2.8rem, 5.5vw, 3.8rem)",
          letterSpacing: "-0.025em",
        }}
      >
        {prefix}{count.toLocaleString()}{suffix}
      </span>

      {/* Description */}
      <div
        className="max-w-[148px]"
        style={{ fontSize: "13px", lineHeight: "1.45", color: "#6b7a62" }}
      >
        {children}
      </div>
    </motion.div>
  );
}

/* ── Section ────────────────────────────────────────────────────────── */
export function StatsSection() {
  return (
    <section
      id="stats"
      className="relative overflow-hidden py-14"
      /* Same off-white/sage as the left panel of the hero — seamless visual flow */
      style={{ background: "#f5f7f2" }}
    >
      {/* Hairline top border — echoes hero gradient overlay edge */}
      <div
        className="pointer-events-none absolute top-0 inset-x-0 h-px"
        style={{ background: "rgba(26,64,32,0.12)" }}
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* ── Metrics row ── */}
        <div className="flex flex-col gap-10 sm:flex-row sm:items-center sm:gap-0">

          {/* ── Stat 1 — Restaurants ── */}
          <div className="flex-1 sm:pr-12">
            <Stat value={1000} suffix="+" numColor="#1e3d1e" delay={0}>
              <span style={{ fontWeight: 700, fontSize: "19px", color: "#1e3d1e" }}>restaurants</span>{" "}
              <em style={{ fontStyle: "italic", fontSize: "15px", color: "#7a8a72" }}>
                we&apos;ve learned from and counting
              </em>
            </Stat>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block shrink-0 w-px"
            style={{ height: "60px", background: "rgba(30,61,30,0.18)" }}
          />

          {/* ── Stat 2 — Profits (gradient centre) ── */}
          <div className="flex-1 sm:px-12">
            <div className="flex items-center gap-5">
              {/* Gradient number rendered directly so we can use background-clip */}
              <span
                className="shrink-0 font-black leading-none tabular-nums"
                style={{
                  fontSize: "clamp(2.8rem, 5.5vw, 3.8rem)",
                  letterSpacing: "-0.025em",
                  background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 45%, #2d6a35 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                $10M+
              </span>
              <div
                className="max-w-[160px]"
                style={{ fontSize: "15px", lineHeight: "1.45", color: "#6b7a62" }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: "19px",
                    background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 45%, #2d6a35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  profits
                </span>{" "}
                <em style={{ fontStyle: "italic", fontSize: "15px", color: "#7a8a72" }}>
                  we have uncovered for clients
                </em>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div
            className="hidden sm:block shrink-0 w-px"
            style={{ height: "60px", background: "rgba(30,61,30,0.18)" }}
          />

          {/* ── Stat 3 — Hours Saved ── */}
          <div className="flex-1 sm:pl-12">
            <Stat value={100} suffix="+" numColor="#b45309" delay={0.2}>
              <span style={{ fontWeight: 700, fontSize: "19px", color: "#b45309" }}>hours saved</span>{" "}
              <em style={{ fontStyle: "italic", fontSize: "15px", color: "#7a8a72" }}>per year</em>
              <br />
              <span style={{ fontSize: "12px", color: "#9aaa92" }}>
                for operators like you
              </span>
            </Stat>
          </div>
        </div>

        {/* ── Footer attribution ── */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          {/* Thin rule left */}
          <div className="hidden sm:block h-px w-16" style={{ background: "rgba(26,64,32,0.15)" }} />

          {/* "Built on" — italic olive, "real conversations" — bold dark green */}
          <p style={{ fontSize: "14px", lineHeight: 1 }}>
            <em style={{ fontStyle: "italic", color: "#7a8a72" }}>Built on </em>
            <strong style={{ fontWeight: 800, color: "#1e3d1e", letterSpacing: "-0.01em" }}>
              real conversations
            </strong>
          </p>

          {/* Separator — brand amber */}
          <span style={{ color: "#b45309", fontSize: "18px", lineHeight: 1 }}>·</span>

          {/* "OPERATOR CONVERSATIONS" — amber, spaced caps */}
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

          {/* Thin rule right */}
          <div className="hidden sm:block h-px w-16" style={{ background: "rgba(26,64,32,0.15)" }} />
        </motion.div>
      </div>

      {/* Hairline bottom border */}
      <div
        className="pointer-events-none absolute bottom-0 inset-x-0 h-px"
        style={{ background: "rgba(26,64,32,0.10)" }}
      />
    </section>
  );
}
