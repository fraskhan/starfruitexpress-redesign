"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, Zap } from "lucide-react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

const navLinks = [
  { label: "Features", href: "#features" },
  { label: "About", href: "#stats" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#cta" },
];

export function Navbar() {
  const { isScrolled } = useScroll(40);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
        isScrolled
          ? "border-b border-white/10 bg-white/80 shadow-sm backdrop-blur-xl dark:bg-zinc-900/80"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-amber-500 shadow-md">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
            Starfruit <span className="text-orange-500">Express</span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-orange-500 dark:text-slate-300 dark:hover:text-orange-400"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#cta"
            className="text-sm font-medium text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="#cta"
            className="inline-flex h-9 items-center rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-5 text-sm font-semibold text-white shadow-md shadow-orange-200 transition-all hover:shadow-orange-300 hover:brightness-110 active:scale-95 dark:shadow-orange-900/30"
          >
            Order Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex h-9 w-9 items-center justify-center rounded-lg hover:bg-slate-100 md:hidden dark:hover:bg-zinc-800"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-slate-100 bg-white/95 backdrop-blur-xl md:hidden dark:border-zinc-800 dark:bg-zinc-900/95"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-lg px-3 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-orange-50 hover:text-orange-600 dark:text-slate-300 dark:hover:bg-orange-950/20"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="#cta"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full rounded-full bg-gradient-to-r from-orange-500 to-amber-500 px-6 py-2.5 text-center text-sm font-semibold text-white"
                >
                  Order Now
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
