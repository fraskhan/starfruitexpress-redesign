import type { LucideIcon } from "lucide-react";

/* ─── Stat / Metric ─────────────────────────────── */
export interface Stat {
  id: string;
  label: string;
  value: number;
  suffix: string;
  prefix?: string;
  description?: string;
  icon?: LucideIcon;
}

/* ─── Feature ──────────────────────────────────── */
export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  badge?: string;
  /** Visual size of card in bento grid */
  size?: "sm" | "md" | "lg";
  highlight?: boolean;
}

/* ─── Testimonial ──────────────────────────────── */
export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
  rating?: number;
}

/* ─── Nav Link ─────────────────────────────────── */
export interface NavLink {
  label: string;
  href: string;
  external?: boolean;
}

/* ─── Footer Column ────────────────────────────── */
export interface FooterColumn {
  title: string;
  links: NavLink[];
}
