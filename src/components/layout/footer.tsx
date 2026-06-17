"use client";

import Link from "next/link";
import { Zap, Globe, Share2, AtSign, ExternalLink } from "lucide-react";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "How It Works", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Fresh Boxes", href: "#" },
      { label: "Subscriptions", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "#" },
      { label: "Our Farms", href: "#" },
      { label: "Sustainability", href: "#" },
      { label: "Careers", href: "#" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "FAQ", href: "#" },
      { label: "Delivery Coverage", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Track Order", href: "#" },
    ],
  },
];

const socials = [
  { icon: AtSign, label: "Twitter / X", href: "#" },
  { icon: Share2, label: "Instagram", href: "#" },
  { icon: Globe, label: "LinkedIn", href: "#" },
  { icon: ExternalLink, label: "GitHub", href: "#" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white dark:border-zinc-800 dark:bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 py-16">
        {/* Top: Brand + columns */}
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="col-span-2 flex flex-col gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-orange-400 to-amber-500">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="font-bold text-slate-900 dark:text-white">
                Starfruit <span className="text-orange-500">Express</span>
              </span>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400">
              Fresh produce from local farms to your door. Delivered daily.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, label, href }) => (
                <Link
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition-colors hover:bg-orange-50 hover:text-orange-500 dark:hover:bg-orange-950/20 dark:hover:text-orange-400"
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Navigation columns */}
          {footerColumns.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 transition-colors hover:text-orange-500 dark:text-slate-400 dark:hover:text-orange-400"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-100 pt-8 md:flex-row dark:border-zinc-800">
          <p className="text-xs text-slate-400 dark:text-zinc-500">
            © {new Date().getFullYear()} Starfruit Express. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-xs text-slate-400 hover:text-orange-500 dark:text-zinc-500 dark:hover:text-orange-400"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
