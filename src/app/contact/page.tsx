"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import {
  Phone,
  Mail,
  Clock,
  ArrowRight,
  ShieldCheck,
  Star,
  Thermometer,
  ClipboardList,
  Zap,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
  }),
};

const whyItems = [
  {
    icon: Star,
    title: "Superb Products",
    desc: "Whether you want high quality or great price, we find you the best of both!",
    color: "#d4a843",
  },
  {
    icon: Thermometer,
    title: "Temperature-Controlled",
    desc: "Specialized vehicles maintain ideal temperatures for all your food products.",
    color: "#4ade80",
  },
  {
    icon: ClipboardList,
    title: "Hassle-Free",
    desc: "Manage orders, handle claims, track your orders — all in one place while working less.",
    color: "#d4a843",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "We move fast to ensure your business runs smooth. Time is money. We save you both!",
    color: "#4ade80",
  },
];

export default function ContactPage() {
  const [smsConsent, setSmsConsent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ background: "#f7f6f2" }}>

        {/* ── Hero banner ── */}
        <section
          className="pt-36 pb-16 text-center px-6"
          style={{ background: "linear-gradient(180deg, #f7f6f2 0%, #eef0ea 100%)" }}
        >
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            custom={0}
            className="mx-auto max-w-3xl"
          >
            <p className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-8 bg-amber-500/60 inline-block" />
              <span className="text-sm font-semibold italic tracking-wide text-amber-700">
                We&apos;re here to help
              </span>
              <span className="h-px w-8 bg-amber-500/60 inline-block" />
            </p>
            <h1
              className="font-black leading-tight tracking-tight"
              style={{
                fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
                color: "#14271a",
                letterSpacing: "-0.03em",
              }}
            >
              Start the restaurant logistics{" "}
              <span style={{ color: "#4ade80" }}>conversation.</span>
            </h1>
            <p
              className="mt-5 mx-auto max-w-xl text-[15.5px] leading-relaxed"
              style={{ color: "rgba(30,50,30,0.65)" }}
            >
              Most companies ask for your business first. We&apos;d rather be useful first.
              Reach out and let us show you how Starfruit can maximize your profits before
              you even pay a dime!
            </p>
          </motion.div>
        </section>

        {/* ── Contact strip ── */}
        <section className="px-6 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto max-w-5xl rounded-2xl overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #0d1f12 0%, #122a1a 50%, #0f2318 100%)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.22)",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_1fr_1fr]">
              {/* Label */}
              <div className="flex flex-col justify-center px-8 py-7 border-b md:border-b-0 md:border-r border-white/8">
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-1.5" style={{ color: "#d4a843" }}>
                  — Direct contact
                </p>
                <p
                  className="font-black leading-tight"
                  style={{ fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "#fff", lineHeight: 1.1 }}
                >
                  Find the<br />right line.
                </p>
              </div>

              {/* Phone */}
              <div
                className="flex flex-col justify-center px-8 py-7 border-b md:border-b-0 md:border-r border-white/8 group cursor-pointer transition-colors hover:bg-white/5"
              >
                <div className="flex items-center gap-2.5 mb-2">
                  <Phone className="h-4 w-4" style={{ color: "#4ade80" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(180,200,160,0.5)" }}>
                    Call Us
                  </span>
                </div>
                <a
                  href="tel:+17863057470"
                  className="text-[17px] font-black text-white hover:text-green-300 transition-colors"
                >
                  (786) 305-7470
                </a>
                <p className="text-[11px] mt-0.5" style={{ color: "rgba(160,185,145,0.55)" }}>
                  Tap to call
                </p>
              </div>

              {/* Email */}
              <div className="flex flex-col justify-center px-8 py-7 border-b md:border-b-0 md:border-r border-white/8 group cursor-pointer transition-colors hover:bg-white/5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Mail className="h-4 w-4" style={{ color: "#4ade80" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(180,200,160,0.5)" }}>
                    Email Us
                  </span>
                </div>
                <a
                  href="mailto:fresh@starfruitexpress.com"
                  className="text-[14px] font-bold text-white hover:text-green-300 transition-colors break-all"
                >
                  fresh@starfruitexpress.com
                </a>
                <p className="text-[11px] mt-0.5" style={{ color: "rgba(160,185,145,0.55)" }}>
                  Reply in hours
                </p>
              </div>

              {/* Hours */}
              <div className="flex flex-col justify-center px-8 py-7 group cursor-pointer transition-colors hover:bg-white/5">
                <div className="flex items-center gap-2.5 mb-2">
                  <Clock className="h-4 w-4" style={{ color: "#d4a843" }} />
                  <span className="text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: "rgba(180,200,160,0.5)" }}>
                    Business Hours
                  </span>
                </div>
                <p className="text-[15px] font-black text-white">Monday – Friday</p>
                <p className="text-[11px] mt-0.5" style={{ color: "rgba(160,185,145,0.55)" }}>
                  9:00 AM – 6:00 PM EST
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* ── Form + Why Choose ── */}
        <section className="px-6 pb-20">
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] gap-10 items-start">

            {/* LEFT — Form */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-1" style={{ color: "#d4a843" }}>
                — Send a message
              </p>
              <h2
                className="font-black leading-tight mb-8"
                style={{
                  fontSize: "clamp(2rem, 4vw, 2.9rem)",
                  color: "#14271a",
                  letterSpacing: "-0.03em",
                }}
              >
                Let&apos;s get your<br />
                deliveries{" "}
                <span style={{ color: "#d4a843" }}>sorted.</span>
              </h2>

              <form className="flex flex-col gap-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "rgba(20,39,26,0.5)" }}>
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="rounded-lg px-4 py-3 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-green-400/40"
                      style={{
                        background: "#fff",
                        border: "1.5px solid rgba(20,39,26,0.12)",
                        color: "#14271a",
                      }}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "rgba(20,39,26,0.5)" }}>
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@mail.com"
                      className="rounded-lg px-4 py-3 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-green-400/40"
                      style={{
                        background: "#fff",
                        border: "1.5px solid rgba(20,39,26,0.12)",
                        color: "#14271a",
                      }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "rgba(20,39,26,0.5)" }}>
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(305) 456-7890"
                    className="rounded-lg px-4 py-3 text-[14px] outline-none transition-all placeholder:text-gray-400 focus:ring-2 focus:ring-green-400/40"
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(20,39,26,0.12)",
                      color: "#14271a",
                    }}
                  />
                </div>

                {/* SMS consent */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      className="sr-only"
                      checked={smsConsent}
                      onChange={() => setSmsConsent((v) => !v)}
                    />
                    <div
                      className="h-4 w-4 rounded flex items-center justify-center transition-all"
                      style={{
                        background: smsConsent ? "#16a34a" : "#fff",
                        border: smsConsent ? "1.5px solid #16a34a" : "1.5px solid rgba(20,39,26,0.2)",
                      }}
                    >
                      {smsConsent && (
                        <svg className="h-2.5 w-2.5" viewBox="0 0 12 10" fill="none">
                          <path d="M1 5l3.5 3.5L11 1" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                    </div>
                  </div>
                  <span className="text-[12px] leading-relaxed" style={{ color: "rgba(20,39,26,0.6)" }}>
                    I agree to receive SMS notifications about my order or inquiry.{" "}
                    <span style={{ color: "rgba(20,39,26,0.4)" }}>
                      Message frequency varies. Msg &amp; data rates may apply. Reply STOP to opt-out.{" "}
                    </span>
                    <a href="#" className="underline" style={{ color: "#16a34a" }}>Privacy Policy</a>
                  </span>
                </label>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "rgba(20,39,26,0.5)" }}>
                    How can we help?
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="rounded-lg px-4 py-3 text-[14px] outline-none transition-all focus:ring-2 focus:ring-green-400/40 appearance-none"
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(20,39,26,0.12)",
                      color: form.subject ? "#14271a" : "#9ca3af",
                    }}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="pricing">Pricing & Quotes</option>
                    <option value="delivery">Delivery & Logistics</option>
                    <option value="products">Products & Quality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold uppercase tracking-[0.16em]" style={{ color: "rgba(20,39,26,0.5)" }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you need…"
                    className="rounded-lg px-4 py-3 text-[14px] outline-none transition-all resize-none placeholder:text-gray-400 focus:ring-2 focus:ring-green-400/40"
                    style={{
                      background: "#fff",
                      border: "1.5px solid rgba(20,39,26,0.12)",
                      color: "#14271a",
                    }}
                  />
                </div>

                {/* Submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 340, damping: 18 }}
                  className="group relative flex items-center justify-center gap-2.5 w-full overflow-hidden rounded-full py-4 text-[15px] font-bold text-white shadow-lg shadow-green-900/25 transition-all"
                  style={{
                    background: "linear-gradient(135deg, #0f2d12 0%, #1a4a1e 50%, #1e5624 100%)",
                    border: "1px solid rgba(74,222,128,0.2)",
                  }}
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/8 transition-transform duration-500 group-hover:translate-x-full" />
                </motion.button>

                <div className="flex items-center gap-2" style={{ color: "rgba(20,39,26,0.4)" }}>
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-green-600" />
                  <span className="text-[11.5px]">No spam. Your info is never shared.</span>
                </div>
              </form>
            </motion.div>

            {/* RIGHT — Why Choose */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-2xl p-8 lg:sticky lg:top-28"
              style={{
                background: "linear-gradient(135deg, #0d1f12 0%, #122a1a 50%, #0f2318 100%)",
                boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.22em] mb-2" style={{ color: "rgba(212,168,67,0.7)" }}>
                Why choose us
              </p>
              <h3
                className="font-black leading-tight mb-7"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2.1rem)", color: "#fff", letterSpacing: "-0.025em" }}
              >
                Why Choose{" "}
                <span style={{ color: "#d4a843" }}>Starfruit Express</span>
              </h3>

              {/* Why items */}
              <div className="flex flex-col gap-4">
                {whyItems.map((item, i) => (
                  <motion.div
                    key={item.title}
                    custom={i}
                    initial="hidden"
                    animate="show"
                    variants={fadeUp}
                    className="flex gap-4 rounded-xl p-4 transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.07)",
                    }}
                    onMouseOver={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(74,222,128,0.07)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(74,222,128,0.18)";
                    }}
                    onMouseOut={(e) => {
                      (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.05)";
                      (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                    }}
                  >
                    <div
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg mt-0.5"
                      style={{
                        background: "rgba(255,255,255,0.07)",
                        border: `1px solid ${item.color}33`,
                        boxShadow: `0 0 10px ${item.color}22`,
                      }}
                    >
                      <item.icon className="h-4 w-4" style={{ color: item.color }} />
                    </div>
                    <div>
                      <p className="text-[14px] font-bold mb-1" style={{ color: "#fff", filter: `drop-shadow(0 0 6px ${item.color}44)` }}>
                        {item.title}
                      </p>
                      <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(200,215,185,0.7)" }}>
                        {item.desc}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Urgent contact */}
              <div
                className="mt-6 rounded-xl px-5 py-4"
                style={{
                  background: "rgba(212,168,67,0.08)",
                  border: "1px solid rgba(212,168,67,0.2)",
                }}
              >
                <div className="flex items-center gap-2 mb-1">
                  <Phone className="h-3.5 w-3.5" style={{ color: "#d4a843" }} />
                  <span className="text-[11px] font-bold uppercase tracking-[0.15em]" style={{ color: "rgba(212,168,67,0.8)" }}>
                    Urgent?
                  </span>
                </div>
                <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(200,215,185,0.75)" }}>
                  For urgent delivery questions, call us directly at{" "}
                  <a href="tel:+17863057470" className="font-bold" style={{ color: "#4ade80" }}>
                    (786) 305-7470
                  </a>
                </p>
              </div>
            </motion.div>

          </div>
        </section>

        {/* ── Social / Follow the journey ── */}
        <section
          className="px-6 py-20"
          style={{ background: "linear-gradient(180deg, #eef0ea 0%, #e4e8df 100%)" }}
        >
          <div className="mx-auto max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.2em] mb-2" style={{ color: "#d4a843" }}>
                — Beyond the route
              </p>
              <h2
                className="font-black leading-tight mb-5"
                style={{
                  fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
                  color: "#14271a",
                  letterSpacing: "-0.03em",
                }}
              >
                Follow the<br />journey.
              </h2>
              <p className="max-w-sm text-[14px] leading-relaxed" style={{ color: "rgba(20,39,26,0.6)" }}>
                Stay connected for industry tips, live route optimization insights, and what
                happens behind the scenes of premium food logistics.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { name: "Instagram", color: "#d4a843" },
                { name: "Google", color: "#4ade80" },
                { name: "Facebook", color: "#d4a843" },
              ].map((social, i) => (
                <motion.a
                  key={social.name}
                  href="#"
                  custom={i}
                  initial="hidden"
                  animate="show"
                  variants={fadeUp}
                  whileHover={{ x: 6 }}
                  transition={{ type: "spring", stiffness: 280, damping: 20 }}
                  className="group flex items-center justify-between rounded-2xl px-7 py-5 transition-all duration-200"
                  style={{
                    background: "#fff",
                    border: "1.5px solid rgba(20,39,26,0.08)",
                    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = social.color + "55";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = `0 4px 24px ${social.color}22`;
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(20,39,26,0.08)";
                    (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
                  }}
                >
                  <span
                    className="text-[24px] font-black tracking-tight"
                    style={{ color: "#14271a", letterSpacing: "-0.03em" }}
                  >
                    {social.name}
                  </span>
                  <ArrowRight
                    className="h-5 w-5 transition-transform group-hover:translate-x-1"
                    style={{ color: social.color }}
                  />
                </motion.a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
