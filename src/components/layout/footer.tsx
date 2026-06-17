"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Heart, ArrowUpRight, Clock } from "lucide-react";

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

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#stats" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Fresh Produce", href: "/" },
  { label: "Temperature Logistics", href: "/" },
  { label: "Wholesale Pricing", href: "/" },
  { label: "Profit Consulting", href: "/" },
];

/* ─── Footer ────────────────────────────────────────────── */
export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(160deg, #0b1a0f 0%, #0d1f12 40%, #0a1a0d 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient bg glow orbs */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-60px",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(45,106,53,0.13) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "0",
          right: "5%",
          width: "320px",
          height: "320px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,125,16,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* ── Scrolling Ticker ── */}
      <div
        className="relative overflow-hidden border-b"
        style={{ borderColor: "rgba(74,222,128,0.1)", background: "rgba(0,0,0,0.22)" }}
      >
        {/* Fade masks */}
        <div
          className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to right, #0d1f12, transparent)" }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10"
          style={{ background: "linear-gradient(to left, #0d1f12, transparent)" }}
        />

        <div className="flex w-max animate-ticker gap-0 py-3.5">
          {tickerItems.map((item, i) => (
            <span
              key={i}
              className="flex items-center gap-5 px-5 text-[10.5px] font-bold tracking-[0.22em] uppercase whitespace-nowrap"
              style={{ color: "rgba(180,200,155,0.55)" }}
            >
              {item}
              <span style={{ color: "#c8a84a", fontSize: 6, filter: "drop-shadow(0 0 4px rgba(200,168,74,0.6))" }}>◆</span>
            </span>
          ))}
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="mx-auto max-w-7xl px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.8fr_1fr_1fr_1.2fr]">

          {/* ── Col 1: Brand ── */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex items-center gap-3 w-fit">
              <div style={{ position: "relative" }}>
                <Image
                  src="/startfriutlogo.webp"
                  alt="Starfruit Express Logo"
                  width={52}
                  height={52}
                  className="object-contain shrink-0"
                  style={{
                    filter: "drop-shadow(0 0 14px rgba(74,222,128,0.35)) drop-shadow(0 2px 6px rgba(251,146,60,0.2))",
                  }}
                />
              </div>
              <div className="flex flex-col leading-none">
                <span
                  className="text-[23px] font-black tracking-tight leading-tight"
                  style={{
                    color: "#4ade80",
                    fontFamily: "Georgia, serif",
                    textShadow: "0 0 18px rgba(74,222,128,0.45), 0 0 40px rgba(74,222,128,0.2)",
                  }}
                >
                  Starfruit
                </span>
                <span
                  className="text-[11px] font-medium italic tracking-[0.12em] leading-tight"
                  style={{
                    color: "#d4a843",
                    textShadow: "0 0 12px rgba(212,168,67,0.5)",
                  }}
                >
                  — Express —
                </span>
              </div>
            </Link>

            <p
              className="max-w-[270px] text-[13px] leading-[1.75]"
              style={{ color: "rgba(175,195,160,0.65)" }}
            >
              Most restaurants are losing thousands every month without realizing it.
              Starfruit exposes hidden overcharges, optimizes your purchasing, and
              removes friction from your supply chain.
            </p>

            {/* Divider line */}
            <div
              style={{
                height: "1px",
                width: "48px",
                background: "linear-gradient(to right, rgba(74,222,128,0.5), transparent)",
              }}
            />

            {/* CTA link */}
            <a
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 w-fit transition-all duration-200"
              style={{
                background: "rgba(74,222,128,0.07)",
                border: "1px solid rgba(74,222,128,0.18)",
                color: "#4ade80",
                fontSize: "12.5px",
                fontWeight: 600,
              }}
              onMouseOver={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.13)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.35)";
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 16px rgba(74,222,128,0.15)";
              }}
              onMouseOut={(e) => {
                (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.07)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(74,222,128,0.18)";
                (e.currentTarget as HTMLElement).style.boxShadow = "none";
              }}
            >
              Get Started Today
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* ── Col 2: Navigation ── */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[9.5px] font-bold uppercase tracking-[0.25em]"
              style={{
                color: "rgba(74,222,128,0.7)",
                textShadow: "0 0 10px rgba(74,222,128,0.35)",
              }}
            >
              Navigation
            </h4>
            <ul className="flex flex-col gap-3.5">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[13.5px] font-medium transition-all duration-150"
                    style={{ color: "rgba(200,215,180,0.7)" }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#4ade80";
                      (e.currentTarget as HTMLElement).style.textShadow = "0 0 10px rgba(74,222,128,0.5)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(200,215,180,0.7)";
                      (e.currentTarget as HTMLElement).style.textShadow = "none";
                    }}
                  >
                    <span
                      className="inline-block h-px w-3 transition-all duration-200 group-hover:w-5"
                      style={{ background: "rgba(74,222,128,0.5)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 3: Services ── */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[9.5px] font-bold uppercase tracking-[0.25em]"
              style={{
                color: "rgba(212,168,67,0.7)",
                textShadow: "0 0 10px rgba(212,168,67,0.35)",
              }}
            >
              Services
            </h4>
            <ul className="flex flex-col gap-3.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-[13.5px] font-medium transition-all duration-150"
                    style={{ color: "rgba(200,215,180,0.7)" }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "#d4a843";
                      (e.currentTarget as HTMLElement).style.textShadow = "0 0 10px rgba(212,168,67,0.5)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.color = "rgba(200,215,180,0.7)";
                      (e.currentTarget as HTMLElement).style.textShadow = "none";
                    }}
                  >
                    <span
                      className="inline-block h-px w-3 transition-all duration-200 group-hover:w-5"
                      style={{ background: "rgba(212,168,67,0.5)" }}
                    />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Col 4: Contact ── */}
          <div className="flex flex-col gap-6">
            <h4
              className="text-[9.5px] font-bold uppercase tracking-[0.25em]"
              style={{
                color: "rgba(180,210,165,0.6)",
                textShadow: "0 0 10px rgba(74,222,128,0.2)",
              }}
            >
              Get In Touch
            </h4>
            <ul className="flex flex-col gap-4">
              {/* Phone */}
              <li>
                <a
                  href="tel:+17863057470"
                  className="group flex items-center gap-3.5 transition-all duration-150"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0 transition-all duration-200"
                    style={{
                      background: "rgba(74,222,128,0.07)",
                      border: "1px solid rgba(74,222,128,0.15)",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.14)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(74,222,128,0.2)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(74,222,128,0.07)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Phone className="h-3.5 w-3.5" style={{ color: "#4ade80", filter: "drop-shadow(0 0 4px rgba(74,222,128,0.6))" }} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(74,222,128,0.5)" }}>
                      Call Us
                    </span>
                    <span
                      className="text-[13.5px] font-semibold transition-all duration-150"
                      style={{ color: "rgba(210,220,190,0.85)" }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#4ade80";
                        (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(74,222,128,0.4)";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(210,220,190,0.85)";
                        (e.currentTarget as HTMLElement).style.textShadow = "none";
                      }}
                    >
                      (786) 305-7470
                    </span>
                  </div>
                </a>
              </li>

              {/* Email */}
              <li>
                <a
                  href="mailto:fresh@starfruitexpress.com"
                  className="group flex items-center gap-3.5 transition-all duration-150"
                >
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0 transition-all duration-200"
                    style={{
                      background: "rgba(212,168,67,0.07)",
                      border: "1px solid rgba(212,168,67,0.15)",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(212,168,67,0.14)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 0 14px rgba(212,168,67,0.2)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLElement).style.background = "rgba(212,168,67,0.07)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "none";
                    }}
                  >
                    <Mail className="h-3.5 w-3.5" style={{ color: "#d4a843", filter: "drop-shadow(0 0 4px rgba(212,168,67,0.6))" }} />
                  </span>
                  <div className="flex flex-col">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(212,168,67,0.5)" }}>
                      Email Us
                    </span>
                    <span
                      className="text-[12.5px] font-semibold transition-all duration-150 break-all"
                      style={{ color: "rgba(210,220,190,0.85)" }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "#d4a843";
                        (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(212,168,67,0.4)";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.color = "rgba(210,220,190,0.85)";
                        (e.currentTarget as HTMLElement).style.textShadow = "none";
                      }}
                    >
                      fresh@starfruitexpress.com
                    </span>
                  </div>
                </a>
              </li>

              {/* Hours */}
              <li className="flex items-center gap-3.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                  style={{
                    background: "rgba(122,158,138,0.07)",
                    border: "1px solid rgba(122,158,138,0.15)",
                  }}
                >
                  <Clock className="h-3.5 w-3.5" style={{ color: "#7a9e8a", filter: "drop-shadow(0 0 4px rgba(122,158,138,0.5))" }} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(122,158,138,0.5)" }}>
                    Hours
                  </span>
                  <span className="text-[13px] font-medium" style={{ color: "rgba(200,215,180,0.8)" }}>
                    Mon – Fri
                  </span>
                  <span className="text-[11.5px]" style={{ color: "rgba(160,180,145,0.5)" }}>
                    9:00 AM – 6:00 PM EST
                  </span>
                </div>
              </li>

              {/* Location */}
              <li className="flex items-center gap-3.5">
                <span
                  className="flex h-9 w-9 items-center justify-center rounded-xl shrink-0"
                  style={{
                    background: "rgba(122,158,138,0.07)",
                    border: "1px solid rgba(122,158,138,0.15)",
                  }}
                >
                  <MapPin className="h-3.5 w-3.5" style={{ color: "#7a9e8a", filter: "drop-shadow(0 0 4px rgba(122,158,138,0.5))" }} />
                </span>
                <div className="flex flex-col">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.15em] mb-0.5" style={{ color: "rgba(122,158,138,0.5)" }}>
                    Location
                  </span>
                  <span className="text-[13px] font-medium" style={{ color: "rgba(200,215,180,0.8)" }}>
                    Florida, USA
                  </span>
                </div>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* ── Divider ── */}
      <div
        className="mx-auto max-w-7xl px-8"
        style={{
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(74,222,128,0.15), rgba(212,168,67,0.12), transparent)",
        }}
      />

      {/* ── Bottom bar ── */}
      <div className="mx-auto max-w-7xl px-8 py-5 flex flex-col items-center justify-between gap-3 md:flex-row">
        <p className="text-[11px]" style={{ color: "rgba(140,165,120,0.45)" }}>
          © 2026 Starfruit Express Corp. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <a
            href="#"
            className="text-[11px] transition-colors duration-150"
            style={{ color: "rgba(140,165,120,0.45)" }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#4ade80";
              (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(74,222,128,0.4)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(140,165,120,0.45)";
              (e.currentTarget as HTMLElement).style.textShadow = "none";
            }}
          >
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-[11px] transition-colors duration-150"
            style={{ color: "rgba(140,165,120,0.45)" }}
            onMouseOver={(e) => {
              (e.currentTarget as HTMLElement).style.color = "#4ade80";
              (e.currentTarget as HTMLElement).style.textShadow = "0 0 8px rgba(74,222,128,0.4)";
            }}
            onMouseOut={(e) => {
              (e.currentTarget as HTMLElement).style.color = "rgba(140,165,120,0.45)";
              (e.currentTarget as HTMLElement).style.textShadow = "none";
            }}
          >
            Terms of Service
          </a>
          <span
            className="text-[11px] flex items-center gap-1.5"
            style={{ color: "rgba(140,165,120,0.45)" }}
          >
            Made with{" "}
            <Heart
              className="h-2.5 w-2.5 inline"
              style={{ color: "#e05c5c", fill: "#e05c5c", filter: "drop-shadow(0 0 4px rgba(224,92,92,0.5))" }}
            />
            {" "}in Florida
          </span>
        </div>
      </div>

      {/* ── Ticker keyframe ── */}
      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-ticker {
          animation: ticker 32s linear infinite;
        }
        .animate-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </footer>
  );
}
