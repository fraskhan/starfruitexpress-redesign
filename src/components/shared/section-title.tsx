"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  },
};

export function SectionTitle({
  badge,
  title,
  highlight,
  description,
  align = "center",
  className,
}: SectionTitleProps) {
  const alignClass = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  }[align];

  return (
    <motion.div
      className={cn("flex flex-col gap-4", alignClass, className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
    >
      {badge && (
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-orange-600 dark:border-orange-800/40 dark:bg-orange-950/30 dark:text-orange-400"
        >
          {badge}
        </motion.span>
      )}

      <motion.h2
        variants={itemVariants}
        className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl dark:text-white"
      >
        {highlight ? (
          <>
            {title}{" "}
            <span className="gradient-text">{highlight}</span>
          </>
        ) : (
          title
        )}
      </motion.h2>

      {description && (
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg leading-relaxed text-slate-500 dark:text-slate-400"
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
