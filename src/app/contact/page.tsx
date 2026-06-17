"use client";

import { useState } from "react";
import { motion } from "framer-motion";
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

const whyItems = [
  {
    icon: Star,
    title: "Superb Products",
    desc: "High quality or great price — we find you the best of both.",
    color: "#d4a843",
  },
  {
    icon: Thermometer,
    title: "Temperature-Controlled",
    desc: "Specialized vehicles keep every product at peak condition.",
    color: "#4ade80",
  },
  {
    icon: ClipboardList,
    title: "Hassle-Free",
    desc: "Orders, claims, tracking — all in one place while you work less.",
    color: "#d4a843",
  },
  {
    icon: Zap,
    title: "Fast Response",
    desc: "Time is money. We move fast so your business never skips a beat.",
    color: "#4ade80",
  },
];

const contactItems = [
  {
    icon: Phone,
    label: "Call Us",
    value: "(786) 305-7470",
    sub: "Tap to call",
    href: "tel:+17863057470",
    color: "#4ade80",
  },
  {
    icon: Mail,
    label: "Email Us",
    value: "fresh@starfruitexpress.com",
    sub: "Reply in hours",
    href: "mailto:fresh@starfruitexpress.com",
    color: "#4ade80",
  },
  {
    icon: Clock,
    label: "Business Hours",
    value: "Monday – Friday",
    sub: "9:00 AM – 6:00 PM EST",
    href: null,
    color: "#d4a843",
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
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col bg-white">

        {/* ══════════════════════════════════════════
            SPLIT SECTION — Info left / Form right
        ══════════════════════════════════════════ */}
        <section className="flex-1 flex items-center px-6 pt-28 pb-16 bg-white">
          <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 items-start">

            {/* ══ LEFT — Info ══ */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col gap-8 lg:sticky lg:top-28"
            >
              {/* Eyebrow — hero-style */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex items-center gap-3"
              >
                <div className="h-[2px] w-10 bg-gradient-to-r from-amber-500 to-green-600 rounded-full" />
                <span className="text-sm font-semibold italic tracking-wide text-slate-600">
                  We&apos;re here to help
                </span>
              </motion.div>

              {/* Headline — matches hero pattern */}
              <div>
                <p
                  className="text-[clamp(1.35rem,3vw,2rem)] font-semibold not-italic leading-tight text-[#1a2010]"
                >
                  Start the restaurant logistics
                </p>
                <p
                  className="font-black italic leading-[0.95] tracking-tight"
                  style={{
                    fontSize: "clamp(2.8rem, 6.5vw, 4.6rem)",
                    background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 45%, #2d6a35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  conversation.
                </p>
              </div>

              <p className="max-w-sm text-[15px] leading-relaxed text-slate-600">
                Most companies ask for your business first. We&apos;d rather be useful first —
                let us show you how Starfruit maximizes your profits before you pay a dime.
              </p>

              {/* Contact cards */}
              <div className="flex flex-col gap-3">
                {contactItems.map((item) => {
                  const Tag = item.href ? "a" : "div";
                  return (
                    <Tag
                      key={item.label}
                      {...(item.href ? { href: item.href } : {})}
                      className="group flex items-center gap-4 rounded-2xl px-5 py-4 transition-all duration-200 hover:shadow-md"
                      style={{
                        background: "#f8faf6",
                        border: "1.5px solid rgba(20,39,26,0.08)",
                        boxShadow: "0 1px 8px rgba(0,0,0,0.04)",
                      }}
                      onMouseOver={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = `${item.color}55`;
                        (e.currentTarget as HTMLElement).style.background = "#f2f8f0";
                      }}
                      onMouseOut={(e) => {
                        (e.currentTarget as HTMLElement).style.borderColor = "rgba(20,39,26,0.08)";
                        (e.currentTarget as HTMLElement).style.background = "#f8faf6";
                      }}
                    >
                      <div
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl"
                        style={{
                          background: `${item.color}18`,
                          border: `1px solid ${item.color}44`,
                        }}
                      >
                        <item.icon style={{ color: item.color, width: 17, height: 17 }} />
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-[0.18em] mb-0.5 text-slate-400">
                          {item.label}
                        </span>
                        <span className="text-[14px] font-bold text-[#1a2010] truncate">
                          {item.value}
                        </span>
                        <span className="text-[11px] text-slate-400">{item.sub}</span>
                      </div>
                    </Tag>
                  );
                })}
              </div>
            </motion.div>

            {/* ══ RIGHT — Form card ══ */}
            <motion.div
              initial={{ opacity: 0, x: 28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.32, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-3xl p-8 lg:p-10"
              style={{
                background: "#fff",
                border: "1.5px solid rgba(20,39,26,0.08)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
              }}
            >
              {/* Form eyebrow */}
              <div className="flex items-center gap-3 mb-1">
                <div className="h-[2px] w-8 bg-gradient-to-r from-amber-500 to-green-600 rounded-full" />
                <span className="text-[11px] font-semibold italic tracking-wide text-slate-500">
                  Send a message
                </span>
              </div>

              <h2
                className="font-black leading-tight mb-7 text-[#1a2010]"
                style={{ fontSize: "clamp(1.7rem, 3.5vw, 2.4rem)", letterSpacing: "-0.03em" }}
              >
                Let&apos;s get your deliveries{" "}
                <span
                  className="italic"
                  style={{
                    background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 60%, #2d6a35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  sorted.
                </span>
              </h2>

              <form className="flex flex-col gap-4">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { label: "Name", name: "name", type: "text", placeholder: "Your Name" },
                    { label: "Email", name: "email", type: "email", placeholder: "you@mail.com" },
                  ].map((f) => (
                    <div key={f.name} className="flex flex-col gap-1.5">
                      <label className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                        {f.label}
                      </label>
                      <input
                        type={f.type}
                        name={f.name}
                        value={form[f.name as keyof typeof form]}
                        onChange={handleChange}
                        placeholder={f.placeholder}
                        className="rounded-xl px-4 py-3 text-[13.5px] outline-none transition-all placeholder:text-slate-300 text-[#1a2010]"
                        style={{ background: "#f8faf6", border: "1.5px solid rgba(20,39,26,0.1)" }}
                        onFocus={(e) => (e.target.style.borderColor = "rgba(42,160,80,0.5)")}
                        onBlur={(e) => (e.target.style.borderColor = "rgba(20,39,26,0.1)")}
                      />
                    </div>
                  ))}
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="(305) 456-7890"
                    className="rounded-xl px-4 py-3 text-[13.5px] outline-none transition-all placeholder:text-slate-300 text-[#1a2010]"
                    style={{ background: "#f8faf6", border: "1.5px solid rgba(20,39,26,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(42,160,80,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(20,39,26,0.1)")}
                  />
                </div>

                {/* SMS consent */}
                <label className="flex items-start gap-3 cursor-pointer select-none">
                  <div className="relative mt-0.5 shrink-0">
                    <input type="checkbox" className="sr-only" checked={smsConsent} onChange={() => setSmsConsent((v) => !v)} />
                    <div
                      className="h-4 w-4 rounded flex items-center justify-center transition-all"
                      style={{
                        background: smsConsent ? "#16a34a" : "#f8faf6",
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
                  <span className="text-[11.5px] leading-relaxed text-slate-500">
                    I agree to receive SMS notifications.{" "}
                    <span className="text-slate-400">Msg &amp; data rates may apply. Reply STOP to opt-out. </span>
                    <a href="#" className="underline text-green-700">Privacy Policy</a>
                  </span>
                </label>

                {/* Subject */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    How can we help?
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="rounded-xl px-4 py-3 text-[13.5px] outline-none transition-all appearance-none text-[#1a2010]"
                    style={{
                      background: "#f8faf6",
                      border: "1.5px solid rgba(20,39,26,0.1)",
                      color: form.subject ? "#1a2010" : "#94a3b8",
                    }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(42,160,80,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(20,39,26,0.1)")}
                  >
                    <option value="" disabled>Select a topic…</option>
                    <option value="pricing">Pricing &amp; Quotes</option>
                    <option value="delivery">Delivery &amp; Logistics</option>
                    <option value="products">Products &amp; Quality</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10.5px] font-bold uppercase tracking-[0.16em] text-slate-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you need…"
                    className="rounded-xl px-4 py-3 text-[13.5px] outline-none transition-all resize-none placeholder:text-slate-300 text-[#1a2010]"
                    style={{ background: "#f8faf6", border: "1.5px solid rgba(20,39,26,0.1)" }}
                    onFocus={(e) => (e.target.style.borderColor = "rgba(42,160,80,0.5)")}
                    onBlur={(e) => (e.target.style.borderColor = "rgba(20,39,26,0.1)")}
                  />
                </div>

                {/* Submit — hero primary button style */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, brightness: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: "spring", stiffness: 340, damping: 18 }}
                  className="group relative flex items-center justify-center gap-2.5 w-full overflow-hidden rounded-full bg-gradient-to-r from-[#1a4020] to-[#2d6e35] py-4 text-[15px] font-bold text-white shadow-lg shadow-green-900/25 transition-all hover:shadow-green-900/40 hover:brightness-110 active:scale-95"
                >
                  <span className="relative z-10">Send Message</span>
                  <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  <div className="absolute inset-0 -translate-x-full skew-x-12 bg-white/10 transition-transform duration-500 group-hover:translate-x-full" />
                </motion.button>

                <div className="flex items-center justify-center gap-2 text-slate-400">
                  <ShieldCheck className="h-3.5 w-3.5 shrink-0 text-green-600" />
                  <span className="text-[11px]">No spam. Your info is never shared.</span>
                </div>
              </form>
            </motion.div>
          </div>
        </section>

        {/* ══════════════════════════════════════════
            WHY CHOOSE US — horizontal band below
        ══════════════════════════════════════════ */}
        <section
          className="px-6 py-14"
          style={{
            background: "linear-gradient(135deg, #0d1f12 0%, #122a1a 50%, #0f2318 100%)",
          }}
        >
          <div className="mx-auto max-w-7xl">
            {/* Section header */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="mb-10 flex items-end justify-between flex-wrap gap-4"
            >
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-[2px] w-8 bg-gradient-to-r from-amber-500 to-green-500 rounded-full" />
                  <span className="text-[11px] font-semibold italic tracking-wide" style={{ color: "rgba(212,168,67,0.8)" }}>
                    Why choose us
                  </span>
                </div>
                <h2
                  className="font-black italic leading-none"
                  style={{
                    fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                    background: "linear-gradient(to right, #c97d10 0%, #7a9e2e 50%, #2d6a35 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    letterSpacing: "-0.03em",
                  }}
                >
                  Why Starfruit Express
                </h2>
              </div>

              {/* Urgent CTA chip */}
              <a
                href="tel:+17863057470"
                className="flex items-center gap-2.5 rounded-full px-5 py-2.5 transition-all hover:brightness-110"
                style={{
                  background: "rgba(212,168,67,0.1)",
                  border: "1px solid rgba(212,168,67,0.28)",
                }}
              >
                <Phone style={{ color: "#d4a843", width: 14, height: 14 }} />
                <span className="text-[12.5px] font-semibold" style={{ color: "rgba(212,168,67,0.9)" }}>
                  Urgent? Call (786) 305-7470
                </span>
              </a>
            </motion.div>

            {/* 4-column horizontal grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {whyItems.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col gap-3 rounded-2xl p-5 transition-all duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                  onMouseOver={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = `${item.color}0d`;
                    (e.currentTarget as HTMLDivElement).style.borderColor = `${item.color}33`;
                  }}
                  onMouseOut={(e) => {
                    (e.currentTarget as HTMLDivElement).style.background = "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLDivElement).style.borderColor = "rgba(255,255,255,0.07)";
                  }}
                >
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl"
                    style={{
                      background: `${item.color}18`,
                      border: `1px solid ${item.color}33`,
                      boxShadow: `0 0 12px ${item.color}22`,
                    }}
                  >
                    <item.icon style={{ color: item.color, width: 17, height: 17 }} />
                  </div>
                  <div>
                    <p
                      className="text-[14px] font-bold mb-1 text-white"
                      style={{ filter: `drop-shadow(0 0 6px ${item.color}44)` }}
                    >
                      {item.title}
                    </p>
                    <p className="text-[12.5px] leading-relaxed" style={{ color: "rgba(200,215,185,0.65)" }}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
