"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, ArrowRight } from "lucide-react";

/* ─── Nav items ─────────────────────────────────────── */
const navLinks = [
  {
    label: "HOME",
    href: "/",
    icon: (
      // House icon — outline
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9.5L12 3l9 6.5V20a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5z" />
        <path d="M9 21V12h6v9" />
      </svg>
    ),
  },
  {
    label: "SOLUTIONS",
    href: "#",
    icon: (
      // Stack / layers icon
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2" />
        <polyline points="2 17 12 22 22 17" />
        <polyline points="2 12 12 17 22 12" />
      </svg>
    ),
  },
  {
    label: "ABOUT",
    href: "#",
    icon: (
      // Person silhouette
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="7" r="4" />
        <path d="M4 21v-1a8 8 0 0 1 16 0v1" />
      </svg>
    ),
  },
  {
    label: "BLOG",
    href: "#",
    icon: (
      // Document with lines
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="2" width="16" height="20" rx="2" />
        <line x1="8" y1="8" x2="16" y2="8" />
        <line x1="8" y1="12" x2="16" y2="12" />
        <line x1="8" y1="16" x2="12" y2="16" />
      </svg>
    ),
  },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("HOME");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 right-0 left-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "shadow-2xl shadow-black/40 backdrop-blur-xl"
            : ""
        }`}
        style={{ background: "linear-gradient(135deg, #1a2d1a 0%, #1e2f1c 40%, #22301e 70%, #1a2a18 100%)" }}
      >
        <nav className="mx-auto flex w-full items-center justify-between">

          {/* ── LOGO ─────────────────────────────────────────────── */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-3 pl-4 sm:pl-8 md:pl-12 lg:pl-16 xl:pl-[72px] pr-3 sm:pr-6 py-3 group"
          >
            {/* Star logo image */}
            <motion.div
              whileHover={{ scale: 1.06, rotate: 3 }}
              transition={{ type: "spring", stiffness: 350 }}
              className="relative shrink-0 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14"
            >
              <Image
                src="/startfriutlogo.webp"
                alt="Starfruit Express Logo"
                fill
                priority
                className="object-contain"
                style={{
                  filter: "drop-shadow(0 2px 8px rgba(251,146,60,0.35))"
                }}
              />
            </motion.div>

            {/* Brand name column */}
            <div className="flex flex-col leading-none shrink-0">
              {/* "Starfruit" */}
              <span
                className="text-[20px] sm:text-[23px] md:text-[26px] font-black tracking-tight leading-tight"
                style={{ color: "#4ade80", fontFamily: "Georgia, serif" }}
              >
                Starfruit
              </span>
              {/* "— Express —" */}
              <span
                className="text-[11px] sm:text-[13px] font-medium italic tracking-[0.08em] leading-tight"
                style={{ color: "#d4a843", letterSpacing: "0.12em" }}
              >
                — Express —
              </span>
            </div>

            {/* "FOOD / PROCUREMENT / & LOGISTICS" small stacked text — hidden on small screens */}
            <div
              className="hidden sm:flex ml-2 flex-col leading-snug border-l pl-3"
              style={{ borderColor: "rgba(100,130,100,0.4)" }}
            >
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#7a9e8a" }}>
                Food
              </span>
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#7a9e8a" }}>
                Procurement
              </span>
              <span className="text-[10px] font-semibold tracking-[0.14em] uppercase" style={{ color: "#7a9e8a" }}>
                &amp; Logistics
              </span>
            </div>
          </Link>

          {/* ── NAVIGATION BOXES ─────────────────────────────────── */}
          <ul className="hidden h-full items-stretch md:flex">
            {navLinks.map((link) => {
              const isActive = activeLink === link.label;
              return (
                <li key={link.label} className="flex">
                  <Link
                    href={link.href}
                    onClick={() => setActiveLink(link.label)}
                    className={`group relative flex flex-col items-center justify-center gap-1.5 px-4 lg:px-6 xl:px-8 py-4 transition-all duration-200 border-x`}
                    style={{
                      borderColor: isActive
                        ? "rgba(212,168,67,0.5)"
                        : "rgba(255,255,255,0.06)",
                      background: isActive
                        ? "linear-gradient(180deg, rgba(212,168,67,0.12) 0%, rgba(212,168,67,0.04) 100%)"
                        : "transparent",
                    }}
                  >
                    {/* Icon */}
                    <span
                      style={{
                        color: isActive ? "#d4a843" : "rgba(200,200,180,0.55)",
                        transition: "color 0.2s",
                      }}
                      className="group-hover:text-amber-400"
                    >
                      {link.icon}
                    </span>

                    {/* Label */}
                    <span
                      className="text-[12px] font-black tracking-[0.14em]"
                      style={{
                        color: isActive ? "#d4a843" : "rgba(210,200,170,0.75)",
                        transition: "color 0.2s",
                      }}
                    >
                      {link.label}
                    </span>

                    {/* Active bottom underline */}
                    {isActive && (
                      <motion.div
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-4 right-4 h-[2px] rounded-full"
                        style={{ background: "#d4a843" }}
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* ── CONTACT BUTTON ────────────────────────────────────── */}
          <div className="hidden md:flex items-center pl-3 pr-4 lg:pr-8 xl:pr-10 py-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }} transition={{ type: "spring", stiffness: 400, damping: 20 }}>
              <Link
                href="/contact"
                className="group relative flex items-center gap-3 rounded-xl px-5 py-2.5 overflow-hidden transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #0d2210 0%, #122a14 60%, #0f2012 100%)",
                  border: "1.5px solid rgba(201,162,39,0.55)",
                  boxShadow: "0 0 18px rgba(201,162,39,0.18), 0 4px 20px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Ambient glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{
                    background: "linear-gradient(135deg, rgba(201,162,39,0.08) 0%, rgba(201,162,39,0.14) 100%)",
                    boxShadow: "inset 0 0 20px rgba(201,162,39,0.1)",
                  }}
                />

                {/* Text block */}
                <div className="relative flex flex-col leading-none gap-1">
                  <span
                    className="text-[15px] font-black tracking-[0.1em] uppercase text-white leading-none group-hover:text-amber-100 transition-colors duration-200"
                    style={{ textShadow: "0 0 16px rgba(255,255,255,0.1)" }}
                  >
                    Contact Us
                  </span>
                  <span
                    className="text-[9px] font-black tracking-[0.24em] uppercase"
                    style={{
                      color: "#e8c040",
                      textShadow: "0 0 8px rgba(232,192,64,0.7), 0 0 16px rgba(232,192,64,0.4)",
                    }}
                  >
                    Free Consultation
                  </span>
                </div>

                {/* Divider */}
                <div
                  className="relative self-stretch w-px mx-1"
                  style={{ background: "linear-gradient(to bottom, transparent, rgba(201,162,39,0.4), transparent)" }}
                />

                {/* Arrow circle */}
                <div
                  className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_14px_rgba(201,162,39,0.6)]"
                  style={{
                    background: "linear-gradient(135deg, #c9a227 0%, #e8c040 60%, #c4981e 100%)",
                    boxShadow: "0 0 10px rgba(201,162,39,0.35), inset 0 1px 0 rgba(255,255,255,0.3)",
                  }}
                >
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5"
                    style={{ color: "#0d2210", strokeWidth: 2.8 }}
                  />
                </div>

                {/* Bottom amber hairline glow */}
                <div
                  className="absolute bottom-0 left-4 right-4 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(to right, transparent, #c9a227, transparent)" }}
                />
              </Link>
            </motion.div>
          </div>

          {/* Mobile hamburger */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 md:hidden transition-colors mx-4"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className="h-5 w-5 text-white" />
            ) : (
              <Menu className="h-5 w-5 text-white" />
            )}
          </motion.button>
        </nav>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden backdrop-blur-xl border-t border-white/10 md:hidden"
            style={{ background: "#1a2d1a" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    onClick={() => {
                      setActiveLink(link.label);
                      setMobileOpen(false);
                    }}
                    className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-black tracking-wider transition-all ${
                      activeLink === link.label
                        ? "text-amber-400"
                        : "text-white/60 hover:text-white"
                    }`}
                    style={{
                      background:
                        activeLink === link.label
                          ? "rgba(212,168,67,0.1)"
                          : "transparent",
                    }}
                  >
                    <span style={{ color: activeLink === link.label ? "#d4a843" : "rgba(200,200,180,0.55)" }}>
                      {link.icon}
                    </span>
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full rounded-xl border-2 border-green-800 px-6 py-3 text-sm font-extrabold text-white tracking-wider"
                  style={{ background: "linear-gradient(135deg, #1a3a1a 0%, #2a5a2a 100%)" }}
                >
                  <span style={{ color: "#d4a843", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    FREE CONSULTATION —{" "}
                  </span>
                  CONTACT US
                  <ArrowRight className="h-4 w-4" style={{ color: "#d4a843" }} />
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
