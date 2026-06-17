"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, ExternalLink, Heart } from "lucide-react";

/* ─── Ticker items ──────────────────────────────────────── */
const tickerItems = [
  "WHOLESALE TO RESTAURANT",
  "NEXT DAY DELIVERY",
  "FLORIDA-WIDE LOGISTICS",
  "TEMPERATURE-CONTROLLED",
  "ELIMINATE OVERCHARGES",
  "WHOLESALE TO RESTAURANT",
  "NEXT DAY DELIVERY",
  "FLORIDA-WIDE LOGISTICS",
  "TEMPERATURE-CONTROLLED",
  "ELIMINATE OVERCHARGES",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#stats" },
  { label: "Contact", href: "#cta" },
];

const quickLinks2 = [
  { label: "Solutions", href: "#features" },
  { label: "Blog", href: "#blog" },
];

/* ─── Footer ────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer style={{ background: "linear-gradient(135deg, #1a2d1a 0%, #1e2f1c 60%, #1a2a18 100%)" }}>
      {/* ── Scrolling Ticker ── */}
      <div
        className="relative overflow-hidden border-t border-b"
        style={{ borderColor: "rgba(100,130,80,0.3)", background: "rgba(0,0,0,0.18)" }}
      >
        {/* Left / Right fade masks */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10"
          style={{ background: "linear-gradient(to right, #1e2b1a, transparent)" }} />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10"
          style={{ background: "linear-gradient(to left, #1e2b1a, transparent)" }} />

        <div className="flex w-max animate-ticker gap-0 py-3">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-4 px-4 text-[11px] font-bold tracking-[0.2em] uppercase whitespace-nowrap"
              style={{ color: "rgba(200,200,170,0.7)" }}
            >
              {item}
              <span style={{ color: "#c8a84a", fontSize: 7 }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_1fr_1.2fr]">

          {/* ── Brand column ── */}
          <div className="flex flex-col gap-5">
            {/* Logo — same as navbar */}
            <Link href="/" className="flex items-center gap-3 w-fit group">
              <Image
                src="/startfriutlogo.webp"
                alt="Starfruit Express Logo"
                width={48}
                height={48}
                className="object-contain shrink-0"
                style={{ filter: "drop-shadow(0 2px 8px rgba(251,146,60,0.35))" }}
              />
              <div className="flex flex-col leading-none">
                <span
                  className="text-[22px] font-black tracking-tight leading-tight"
                  style={{ color: "#4ade80", fontFamily: "Georgia, serif" }}
                >
                  Starfruit
                </span>
                <span
                  className="text-[11px] font-medium italic tracking-[0.1em] leading-tight"
                  style={{ color: "#d4a843", letterSpacing: "0.12em" }}
                >
                  — Express —
                </span>
              </div>
              {/* Sub-text stacked */}
              <div
                className="ml-1 flex flex-col leading-snug border-l pl-3"
                style={{ borderColor: "rgba(100,130,100,0.35)" }}
              >
                <span className="text-[9px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#7a9e8a" }}>Food</span>
                <span className="text-[9px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#7a9e8a" }}>Procurement</span>
                <span className="text-[9px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#7a9e8a" }}>&amp; Logistics</span>
              </div>
            </Link>

            <p className="max-w-[260px] text-[13px] leading-relaxed" style={{ color: "rgba(180,195,165,0.75)" }}>
              Most restaurants are losing thousands every month without realizing
              it. Starfruit shows restaurants how to maximize profitability by
              exposing hidden overcharges, optimizing purchasing decisions, and
              removing operational friction from the supply chain.
            </p>
          </div>

          {/* ── Quick Links ── */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "rgba(180,190,155,0.5)" }}
            >
              Quick Links
            </h4>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="flex flex-col gap-3">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] font-medium transition-colors duration-150"
                      style={{ color: "rgba(210,215,185,0.8)" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "rgba(210,215,185,0.8)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col gap-3">
                {quickLinks2.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-[13.5px] font-medium transition-colors duration-150"
                      style={{ color: "rgba(210,215,185,0.8)" }}
                      onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
                      onMouseOut={(e) => (e.currentTarget.style.color = "rgba(210,215,185,0.8)")}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── Get In Touch ── */}
          <div className="flex flex-col gap-5">
            <h4
              className="text-[10px] font-bold uppercase tracking-[0.2em]"
              style={{ color: "rgba(180,190,155,0.5)" }}
            >
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              <li>
                <a
                  href="tel:+17863057470"
                  className="group flex items-center gap-3"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-md shrink-0"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <Phone className="h-3.5 w-3.5" style={{ color: "#7a9e8a" }} />
                  </span>
                  <span
                    className="text-[13.5px] font-medium"
                    style={{ color: "rgba(210,215,185,0.85)" }}
                  >
                    (786) 305 7470
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:fresh@starfruitexpress.com"
                  className="group flex items-center gap-3"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center rounded-md shrink-0"
                    style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <Mail className="h-3.5 w-3.5" style={{ color: "#7a9e8a" }} />
                  </span>
                  <span
                    className="text-[13.5px] font-medium"
                    style={{ color: "rgba(210,215,185,0.85)" }}
                  >
                    fresh@starfruitexpress.com
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="#cta"
                  className="inline-flex items-center gap-1.5 text-[13px] font-semibold transition-colors duration-150"
                  style={{ color: "#4ade80" }}
                  onMouseOver={(e) => (e.currentTarget.style.color = "#86efac")}
                  onMouseOut={(e) => (e.currentTarget.style.color = "#4ade80")}
                >
                  Send us a message
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: "rgba(100,130,80,0.25)" }}
      >
        <div className="mx-auto max-w-6xl px-8 py-4 flex flex-col items-center justify-between gap-3 md:flex-row">
          <p className="text-[11px]" style={{ color: "rgba(160,175,140,0.55)" }}>
            © 2026 Starfruit Express Corp. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-[11px] transition-colors duration-150"
              style={{ color: "rgba(160,175,140,0.55)" }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#4ade80")}
              onMouseOut={(e) => (e.currentTarget.style.color = "rgba(160,175,140,0.55)")}
            >
              Privacy Policy
            </a>
            <span className="text-[11px] flex items-center gap-1.5" style={{ color: "rgba(160,175,140,0.55)" }}>
              Made with{" "}
              <Heart className="h-3 w-3 inline" style={{ color: "#e05c5c", fill: "#e05c5c" }} />
              {" "}in Florida
            </span>
          </div>
        </div>
      </div>

      {/* ── Ticker keyframe injected via style tag ── */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 28s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
}
