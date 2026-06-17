"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
  delay?: number;
}

export function TestimonialCard({
  testimonial,
  className,
  delay = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "group relative flex flex-col gap-5 overflow-hidden rounded-2xl p-6",
        "border border-slate-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg",
        "dark:border-zinc-800 dark:bg-zinc-900",
        className,
      )}
    >
      {/* Quote icon */}
      <Quote className="absolute top-5 right-6 h-8 w-8 rotate-180 text-orange-100 dark:text-zinc-800" />

      {/* Stars */}
      {testimonial.rating && (
        <div className="flex gap-0.5">
          {Array.from({ length: testimonial.rating }).map((_, i) => (
            <Star
              key={i}
              className="h-4 w-4 fill-orange-400 text-orange-400"
            />
          ))}
        </div>
      )}

      {/* Quote text */}
      <p className="relative z-10 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-auto flex items-center gap-3">
        {/* Avatar placeholder */}
        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-amber-500 text-sm font-bold text-white">
          {testimonial.author.charAt(0)}
        </div>
        <div>
          <p className="text-sm font-semibold text-slate-900 dark:text-white">
            {testimonial.author}
          </p>
          <p className="text-xs text-slate-400">
            {testimonial.role} · {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
