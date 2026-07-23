import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import serviceHouseImg from "@/assets/service-house.jpg";
import aboutImg from "@/assets/about.jpg";
import {
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  Play,
  Pause,
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
  ArrowRight,
  Zap,
  ShieldCheck,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

/* ── Tiny water-drop icon — exact match to landing WhyChooseUs ─── */
const TinyDropletIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

/* ── Data ─────────────────────────────────────────────────────────── */
const whyFeatures = [
  { title: "Decades of Expertise", desc: "15 years perfecting the art of exterior cleaning across Mooresville and Lake Norman." },
  { title: "Owner-Operated Service", desc: "David Hudson is directly involved on every job, ensuring unmatched quality and attention to detail." },
  { title: "Our Promise", desc: "We are fully Licensed, Insured, and Bonded for your complete protection and peace of mind." },
  { title: "Always Available", desc: "Free, no-obligation estimates. We work Mon–Sat 8AM–8PM and offer 24/7 emergency services when you need us most." },
  { title: "Faith in Action", desc: "We conduct our business with integrity, respect, and a deep commitment to your satisfaction." },
];

const steps = [
  {
    icon: CalendarCheck,
    title: "Schedule Service",
    desc: "Book a consultation online or call us at (704) 516-9509 for immediate response.",
  },
  {
    icon: Search,
    title: "Site Assessment",
    desc: "We inspect your project site, assess the repairs or cleanup, and scope the work precisely.",
  },
  {
    icon: FileText,
    title: "Transparent Quote",
    desc: "Upfront, itemized estimate provided before any work starts. What we quote is what you pay.",
  },
  {
    icon: Wrench,
    title: "Expert Workmanship",
    desc: "Our skilled crews handle the exterior cleaning, power washing, and restoration safely, efficiently, and professionally.",
  },
  {
    icon: BadgeCheck,
    title: "Satisfaction Guarantee",
    desc: "Final walkthrough to check the work and ensure your property is clean, spotless, and shining like new.",
  },
];

const desktopPositions = [
  { left: "20%", top: "50px" },
  { left: "50%", top: "50px" },
  { left: "80%", top: "50px" },
  { left: "20%", top: "310px" },
  { left: "50%", top: "310px" },
];

const promises = [
  { title: "Honest Communication", desc: "Free, no-obligation estimates with clear pricing — no hidden fees, no surprises. Ever." },
  { title: "Professional Standards", desc: "Fully Licensed, Insured, and Bonded for your absolute protection and peace of mind." },
  { title: "Reliable Availability", desc: "Mon–Sat 8 AM–8 PM plus 24/7 emergency services — because problems don't keep business hours." },
  { title: "Respect for Your Property", desc: "We treat your home or business as our own, using the right technique for every surface." },
  { title: "Guaranteed Satisfaction", desc: "We stand behind every job. Your happiness is the final measure of our success." },
];

/* ── CSS keyframes injected once ────────────────────────────────── */
const STYLES = `
  @keyframes spark-flow-anim { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 45; } }
  @keyframes pulse-glow-anim  { 0%,100% { transform:scale(0.96); opacity:0.15; } 50% { transform:scale(1.04); opacity:0.35; } }
  @keyframes pulse-glow-lg    { 0%,100% { transform:scale(0.98); opacity:0.05; } 50% { transform:scale(1.02); opacity:0.15; } }
  @keyframes v-flow {
    0%   { background-position:0 0; }
    100% { background-position:0 -40px; }
  }
  @keyframes sprayWash {
    0% { stroke-dashoffset: 24; opacity: 0.4; }
    50% { opacity: 1; }
    100% { stroke-dashoffset: 0; opacity: 0.4; }
  }
  .spark-flow      { stroke-dasharray:12 24; animation:spark-flow-anim 1.8s infinite linear; }
  .pulse-glow      { animation:pulse-glow-anim 2s infinite ease-in-out; transform-origin:17px 15px; }
  .pulse-glow-lg   { animation:pulse-glow-lg   3s infinite ease-in-out; transform-origin:17px 15px; }
  .mobile-flow {
    background:linear-gradient(to bottom,#0ea5e9 0%,#0ea5e9 30%,#bae6fd 50%,#0ea5e9 70%,#0ea5e9 100%);
    background-size:100% 40px;
    animation:v-flow 1.2s infinite linear;
  }
  .water-spray {
    stroke-dasharray: 4 4;
    animation: sprayWash 0.6s infinite linear;
  }
`;

export function AboutPage() {
  /* ── Video play/pause (WhyChooseUs panel) ────────────────────── */
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => { video.removeEventListener("play", onPlay); video.removeEventListener("pause", onPause); };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play().catch(console.error) : v.pause();
  };

  return (
    <div className="w-full bg-background">
      <style>{STYLES}</style>
      <Nav />

      {/* ═══════════════════════════════════════════════════════════
          HERO / PAGE HEADER — centered text, 50px bottom padding, background video
      ═══════════════════════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 lg:px-16 pt-[120px] sm:pt-[150px] md:pt-[180px] pb-10 sm:pb-16"
      >
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay for High Contrast */}
          <div
            className="absolute inset-0 z-10 pointer-events-none bg-[#090d16]/85 backdrop-blur-[2px]"
          />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-center space-y-4 sm:space-y-6 text-white text-center">

          {/* Pill badge */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs font-semibold uppercase tracking-wider shadow-sm select-none"
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>About Steam On Wheels</span>
          </motion.div>

          {/* H1 */}
          <h1
            className="text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] mb-2 max-w-5xl font-black text-center text-2xl sm:text-4xl md:text-5xl leading-tight sm:leading-none"
            style={{
              fontSize: "clamp(26px, 5.5vw, 48px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Built on craft.{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Powered by trust.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] text-center"
          >
            A Christian-owned, owner-operated team of exterior cleaning professionals serving Mooresville and surrounding communities since 2009. Backed by 15+ years of experience, licensed, insured, and obsessed with quality.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            <a
              href="tel:7045169509"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_24px_rgba(14,165,233,0.45)] w-full sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              <span>Call: (704) 516-9509</span>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Get Free Estimate</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </motion.div>

          {/* Star Rating */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-2 text-neutral-400 text-xs select-none pt-1"
          >
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-neutral-300 uppercase tracking-wide">Based on 412+ Google Reviews</span>
          </motion.div>

          {/* Trust bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-full border-t border-white/10 pt-5 sm:pt-6 mt-0 max-w-2xl text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center">
              {[
                { label: "Owner on Every Job", sub: "David Hudson On-Site" },
                { label: "Licensed & Insured", sub: "Complete $2M Liability" },
                { label: "100% Satisfaction", sub: "Or We Re-Clean For Free" },
              ].map(({ label, sub }) => (
                <div key={label} className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center sm:text-left">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 animate-pulse" />
                  <div>
                    <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">{label}</h4>
                    <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          ABOUT SECTION — mirrors landing About.tsx exactly
      ═══════════════════════════════════════════════════════════ */}
      <section id="about" className="relative py-[60px] overflow-hidden bg-slate-50/50">
        {/* Subtle BG gradients — same as About.tsx */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Left: Copy — exact pattern from About.tsx */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col items-center lg:items-start text-center lg:text-left lg:col-span-7"
            >
              {/* Top Pill */}
              <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">
                  Steam On Wheels, LLC
                </span>
              </div>

              {/* Heading */}
              <h2
                className="text-slate-900 tracking-tight text-[28px] leading-[36px] lg:text-[35px] lg:leading-[49px]"
                style={{ fontWeight: 800, marginBottom: "-17px", marginTop: "15px" }}
              >
                15+ Years of{" "}
                <span className="text-[#0ea5e9]" style={{ fontWeight: 800 }}>
                  Exterior Cleaning Expertise
                </span>{" "}
                – Serving Every Home and Business.
              </h2>

              {/* Body copy */}
              <p
                className="mt-6 font-normal"
                style={{ fontSize: "16px", lineHeight: "32px", color: "#000", fontWeight: 400, marginBottom: "-10px" }}
              >
                Providing Top-Tier Exterior Cleaning Services for Homeowners &amp; Business Owners in North Carolina. Backed by 15+ years of experience, we bring showroom-grade shine to your siding, roofs, concrete, and decks. Fully Licensed, Insured, and Bonded — handling everything from soft washing and roof cleaning to high-pressure concrete restoration. As a proud <strong>Christian-owned business</strong>, founder <strong>David Hudson</strong> is personally on every job site, ensuring unmatched quality and a job not done until you are 100% satisfied.
              </p>

              {/* Contact Cards — exact from About.tsx */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
                <a
                  href="tel:7045169509"
                  className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] group-hover:scale-105 transition-transform duration-300">
                    <Phone className="h-5 w-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Contact Us:</p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-800">(704) 516-9509</p>
                  </div>
                </a>
                <a
                  href="mailto:motivate71@yahoo.com"
                  className="flex items-center gap-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-sm hover:shadow-md hover:border-slate-200 transition-all group"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] group-hover:scale-105 transition-transform duration-300">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Email Us</p>
                    <p className="text-sm sm:text-base font-extrabold text-slate-800 break-all">motivate71@yahoo.com</p>
                  </div>
                </a>
              </div>

              {/* Buttons — exact from About.tsx */}
              <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 w-full">
                <a
                  href="tel:7045169509"
                  className="inline-flex items-center justify-center rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm px-7 py-4 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  Call Now To Get Started!
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#0ea5e9] hover:bg-[#0284c7] text-white font-bold text-sm px-7 py-4 shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] w-full sm:w-auto"
                >
                  Get Your Free Consultation
                </a>
              </div>
            </motion.div>

            {/* Right: Arch video mask — exact from About.tsx */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex justify-center py-10 relative mt-10 lg:mt-0"
            >
              {/* Decorative Grid Pattern */}
              <div className="absolute -right-10 -top-10 w-44 h-44 bg-[radial-gradient(#0ea5e9_1.5px,transparent_1.5px)] [background-size:20px_20px] opacity-20 -z-10" />
              {/* Soft light glow */}
              <div className="absolute -inset-10 bg-gradient-to-tr from-[#0ea5e9]/10 via-[#3b82f6]/5 to-transparent rounded-[4rem] blur-3xl -z-20 pointer-events-none" />

              {/* Main arch container with float animation */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-[480px] w-[320px] rounded-t-full rounded-b-[4.5rem] overflow-hidden border-8 border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-slate-100 z-10 group"
              >
                <video
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  autoPlay loop muted playsInline
                >
                  <source src="https://res.cloudinary.com/m3oqblqp/video/upload/v1782931767/welcome_vy5flk.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Small circular image (bottom right) — exact from About.tsx */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="h-[210px] w-[210px] rounded-full overflow-hidden border-8 border-white shadow-[0_20px_45px_-10px_rgba(0,0,0,0.2)] absolute -bottom-4 right-2 lg:-right-4 z-20 bg-slate-200"
              >
                <img src={serviceHouseImg} alt="Steam On Wheels House Washing" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </motion.div>

              {/* Sky-blue stats badge (top right) — adapted from About.tsx */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="h-[140px] w-[140px] rounded-full bg-[#0ea5e9] border-8 border-white shadow-[0_15px_35px_-8px_rgba(14,165,233,0.35)] absolute top-8 right-2 lg:-right-10 z-30 flex flex-col items-center justify-center text-center p-2 hover:scale-105 transition-transform duration-300 select-none cursor-pointer"
              >
                <span className="text-3xl font-black text-white leading-none">15+</span>
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-1">Years Of</span>
                <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest leading-none">Excellence</span>
              </motion.div>

              {/* Glass bottom-left card — exact from About.tsx */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl p-4 flex items-center justify-between gap-4 absolute bottom-4 left-2 lg:-left-12 z-30 min-w-[285px] hover:translate-y-[-4px] transition-transform duration-300"
              >
                <div className="text-left">
                  <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">Owner / Lead Technician</p>
                  <p className="text-sm font-extrabold text-slate-800 mt-0.5">David Hudson</p>
                </div>
                <div className="shrink-0">
                  <span className="text-[9px] font-black text-[#0ea5e9] bg-[#0ea5e9]/10 px-2.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                    On Every Job
                  </span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY CHOOSE US — mirrors landing WhyChooseUs.tsx exactly
      ═══════════════════════════════════════════════════════════ */}
      <section id="why-choose-us" className="py-[60px] bg-[#fafbfc] border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:gap-16">

            {/* Left Text Block */}
            <motion.div
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex flex-col justify-center h-full w-full order-2 lg:order-1"
            >
              <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full">
                {/* Badge with Ping — exact from WhyChooseUs.tsx */}
                <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm select-none">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]" />
                  </span>
                  <span>Why Choose Us</span>
                </div>

                <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[24px] sm:text-[30px] capitalize mt-[-10px] mb-[10px]">
                  Why Homeowners &amp; <span className="text-[#0ea5e9]">Business Owners</span> Trust Us
                </h2>

                <p className="text-slate-500 text-[15px] leading-[28px] mb-6 font-medium max-w-[95%]">
                  We've built our reputation on doing the job right the first time — with the safety, craftsmanship, and transparent communication that Mooresville homeowners and businesses rely on.
                </p>

                {/* Feature items — exact from WhyChooseUs.tsx */}
                <div className="space-y-1 mb-8 w-full text-left">
                  {whyFeatures.map((f) => (
                    <div
                      key={f.title}
                      className="group/item flex items-start gap-3 hover:bg-[#0ea5e9]/5 p-2.5 rounded-[10px] transition-all duration-300"
                    >
                      <span className="text-[#0ea5e9] mt-1 shrink-0 group-hover/item:translate-x-1.5 transition-transform duration-300 ease-out">
                        <TinyDropletIcon />
                      </span>
                      <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
                        <strong className="font-extrabold text-[#0F172A]">{f.title}:</strong>{" "}
                        <span className="text-slate-500 font-medium">{f.desc}</span>
                      </p>
                    </div>
                  ))}
                </div>

                {/* CTAs — exact from WhyChooseUs.tsx */}
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                  <Link
                    to="/services"
                    className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.15)] hover:scale-[1.03] active:scale-[0.97]"
                  >
                    Explore Services
                  </Link>
                  <a
                    href="tel:7045169509"
                    className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0ea5e9] hover:to-[#0369a1] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(14,165,233,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                  >
                    Call (704) 516-9509
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Right: Video card — exact from WhyChooseUs.tsx */}
            <div className="relative w-full order-1 lg:order-2 lg:sticky lg:top-[100px] lg:self-start group/video-container">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] rounded-[10px] opacity-10 blur-xl group-hover/video-container:opacity-25 transition-opacity duration-500 pointer-events-none" />
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative group rounded-[10px] overflow-hidden shadow-2xl border border-slate-100/10 h-[340px] sm:h-[420px] lg:h-[500px] w-full bg-slate-950"
              >
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/m3oqblqp/video/upload/v1782941833/whychoose_oxdrtb.mp4"
                  playsInline loop muted autoPlay
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/45 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />
                <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />

                {/* Play/Pause button */}
                <button
                  onClick={togglePlay}
                  aria-label={isPlaying ? "Pause Video" : "Play Video"}
                  className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 bg-slate-950/25"
                >
                  <div className={`absolute w-24 h-24 rounded-full bg-[#0ea5e9]/20 blur-md transition-all duration-300 ${isPlaying ? "scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100" : "scale-100 opacity-100"}`} />
                  <div className="relative w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:border-white/50">
                    {isPlaying ? <Pause className="w-5 h-5 fill-white" /> : <Play className="w-5 h-5 fill-white translate-x-[2px]" />}
                  </div>
                </button>

                {/* Dark glassmorphic info card — exact from WhyChooseUs.tsx */}
                <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-md border border-white/10 rounded-[10px] p-4 sm:p-5 shadow-2xl flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-5 group-hover:bg-slate-950/85">
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                      Steam On Wheels
                    </p>
                    <p className="text-xs sm:text-[13px] font-extrabold text-white mt-1">Fully Licensed &amp; Insured</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[9px] font-bold text-[#bae6fd] bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                      {isPlaying ? "Playing" : "Paused"}
                    </span>
                    <span className="text-[10px] font-black text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                      Active Work
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 rounded-[10px] border border-white/10 pointer-events-none z-10" />
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR PROCESS — exact match to landing Process.tsx
      ═══════════════════════════════════════════════════════════ */}
      <section id="process" className="w-full bg-[#fff] py-[60px] px-4 md:px-8 overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-[1400px] w-full relative">

          {/* Background grid texture in brand color */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage:
                "radial-gradient(circle, #0ea5e9 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="mx-auto w-[90%] max-w-7xl relative z-10">

            {/* ── Section Header ──────────────────────────────── */}
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              {/* Eyebrow */}
              <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                Step by Step Process
              </span>

              <h2 
                className="text-[#1c140d] tracking-tight leading-[1.15] font-sans text-[30px] lg:text-[36px]"
                style={{ marginTop: "-15px", marginBottom: "10px", fontWeight: 800 }}
              >
                We Complete Every{" "}
                <span className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] bg-clip-text text-transparent">
                  Step Carefully.
                </span>
              </h2>

              <p 
                className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed"
                style={{ marginBottom: "-50px" }}
              >
                Our proven process guarantees precision, clean jobsites, and solid results — from your first call to our final inspection walkthrough.
              </p>
            </motion.div>

            {/* ── 1. DESKTOP: S-Curve SVG Layout ──────────────── */}
            <div className="hidden lg:block relative w-full h-[500px] select-none">
              <svg
                viewBox="0 0 1200 360"
                className="absolute top-0 left-0 w-full h-[360px] pointer-events-none z-0"
                fill="none"
                preserveAspectRatio="none"
              >
                <defs>
                  <linearGradient id="pipeGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="40%" stopColor="#1e293b" />
                    <stop offset="60%" stopColor="#334155" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                </defs>

                {/* Drop shadow */}
                <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                  stroke="#0f172a" strokeWidth="14" strokeLinecap="round" strokeLinejoin="round" opacity="0.07" />
                {/* Outer conduit */}
                <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                  stroke="#1e293b" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                {/* Animated blue core */}
                <motion.path
                  d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                  stroke="#0ea5e9" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />
                {/* Light blue flow */}
                <path d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                  stroke="#e0f2fe" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"
                  opacity="0.8" className="spark-flow" />
                {/* Glossy highlight */}
                <motion.path
                  d="M 120 50 L 1025 50 A 70 70 0 0 1 1025 190 L 175 190 A 60 60 0 0 0 175 310 L 920 310"
                  stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                  opacity="0.75"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 2.2, ease: "easeInOut" }}
                />

                {/* Water Tanker Truck at start */}
                <g transform="translate(16, -2) scale(1.30)">
                  <rect x="5" y="16" width="18" height="21" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
                  <rect x="7" y="19" width="10" height="8" rx="1" fill="#bae6fd" opacity="0.8" />
                  <rect x="2" y="32" width="4" height="4" rx="1" fill="#94a3b8" />
                  <circle cx="4" cy="27" r="1.5" fill="#fef08a" />
                  <rect x="25" y="11" width="42" height="23" rx="9" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
                  <line x1="35" y1="12" x2="35" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                  <line x1="47" y1="12" x2="47" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                  <line x1="59" y1="12" x2="59" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                  <rect x="42" y="7" width="8" height="4" rx="1.5" fill="#0284c7" />
                  <rect x="5" y="35" width="62" height="3" fill="#475569" rx="1" />
                  <circle cx="14" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <circle cx="14" cy="41" r="2.5" fill="#94a3b8" />
                  <circle cx="40" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <circle cx="40" cy="41" r="2.5" fill="#94a3b8" />
                  <circle cx="56" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <circle cx="56" cy="41" r="2.5" fill="#94a3b8" />
                  <rect x="67" y="26" width="5" height="6" fill="#94a3b8" rx="1" stroke="#475569" strokeWidth="1" />
                  <path d="M 68 28 Q 74 38 80 40" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
                </g>

                {/* Glowing completed project at end with animated pressure washer connected to conduit */}
                <g transform="translate(920, 310)">
                  <polygon points="-4,-6 2,-6 5,-3 5,3 2,6 -4,6" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1" />
                  <rect x="2" y="-3" width="6" height="6" fill="#475569" rx="1" />
                  
                  {/* Pressure Washer Spray Gun Group */}
                  <g className="hover:scale-105 transition-transform duration-300 origin-left">
                    <path d="M 8 3 L 16 13 L 13 19 L 6 15 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                    <path d="M 10 9 C 10 13, 14 13, 14 9" stroke="#0ea5e9" strokeWidth="1" fill="none" />
                    <line x1="11" y1="6" x2="11" y2="10" stroke="#0ea5e9" strokeWidth="1.5" />
                    <rect x="6" y="-4" width="22" height="8" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                    <line x1="12" y1="-2" x2="22" y2="-2" stroke="#0ea5e9" strokeWidth="1" />
                    <rect x="28" y="-3.5" width="4" height="7" fill="#0ea5e9" rx="0.5" />
                    <rect x="32" y="-3" width="12" height="6" fill="#0f172a" rx="1" />
                    <line x1="44" y1="0" x2="74" y2="0" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                    <rect x="74" y="-1.5" width="2" height="3" fill="#cbd5e1" />
                    <polygon points="76,-3 81,-4 83,3 78,4" fill="#ef4444" />
                    
                    {/* Animated Water Spray Jets */}
                    <line x1="81" y1="0" x2="114" y2="-12" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" className="water-spray" />
                    <line x1="81" y1="0" x2="118" y2="-5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.15s" }} />
                    <line x1="81" y1="0" x2="120" y2="0" stroke="#bae6fd" strokeWidth="2" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.3s" }} />
                    <line x1="81" y1="0" x2="118" y2="5" stroke="#60a5fa" strokeWidth="1.5" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.45s" }} />
                    <line x1="81" y1="0" x2="114" y2="12" stroke="#38bdf8" strokeWidth="1.2" strokeLinecap="round" className="water-spray" style={{ animationDelay: "0.6s" }} />

                    {/* Splashing water mist droplets */}
                    <circle cx="110" cy="-6" r="1.5" fill="#e0f2fe" opacity="0.8" className="pulse-glow" />
                    <circle cx="114" cy="4" r="1" fill="#e0f2fe" opacity="0.8" className="pulse-glow" style={{ animationDelay: "0.3s" }} />
                    <circle cx="106" cy="2" r="1.2" fill="#e0f2fe" opacity="0.8" className="pulse-glow" style={{ animationDelay: "0.6s" }} />
                  </g>

                  {/* Glowing Blue Satisfaction Guarantee Seal */}
                  <g>
                    <circle cx="136" cy="0" r="22" fill="#0ea5e9" opacity="0.15" className="pulse-glow" />
                    <circle cx="136" cy="0" r="34" fill="#0284c7" opacity="0.05" className="pulse-glow-large" />
                    <path d="M 126 12 L 130 28 L 136 22 L 142 28 L 146 12" fill="#0284c7" opacity="0.8" />
                    <path d="M 130 10 L 126 28 L 136 22" fill="#0ea5e9" opacity="0.9" />
                    <circle cx="136" cy="0" r="16" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" />
                    <circle cx="136" cy="0" r="12" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="1.5 1.5" />
                    <path d="M 130 1 L 134 5 L 143 -4" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                    <path d="M 118 -16 L 118 -12 M 116 -14 L 120 -14" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" className="pulse-glow" />
                    <path d="M 154 12 L 154 16 M 152 14 L 156 14" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" className="pulse-glow" style={{ animationDelay: "0.5s" }} />
                    <path d="M 150 -14 L 150 -10 M 148 -12 L 152 -12" stroke="#0ea5e9" strokeWidth="1.5" strokeLinecap="round" className="pulse-glow" style={{ animationDelay: "0.8s" }} />
                  </g>
                </g>
              </svg>

              {/* Step nodes */}
              {steps.map((s, i) => {
                const pos = desktopPositions[i];
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: i * 0.12 }}
                    className="absolute group cursor-default"
                    style={{ left: pos.left, top: pos.top }}
                  >
                    {/* Circle node */}
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[78px] h-[78px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(14,165,233,0.25)] group-hover:border-[#0ea5e9]/30">
                      {/* Step number badge */}
                      <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#0ea5e9] flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                      </div>
                      {/* Outer halo */}
                      <div className="absolute -inset-3 rounded-full border border-[#0ea5e9]/15 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-400" />
                      {/* Inner ring */}
                      <div className="absolute inset-1 rounded-full border border-transparent group-hover:border-[#0ea5e9]/30 transition-all duration-300" />
                      {/* Icon */}
                      <Icon className="h-7 w-7 text-neutral-400 group-hover:text-[#0ea5e9] transition-colors duration-300" />
                    </div>

                    {/* Text block below node */}
                    <div className="absolute top-[48px] -translate-x-1/2 text-center w-[220px] flex flex-col items-center pt-1">
                      <h3 className="font-extrabold text-[15px] text-neutral-900 leading-tight mt-1 mb-1.5 group-hover:text-[#0284c7] transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-[11px] text-neutral-500 leading-relaxed font-medium px-1">
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* ── 2. MOBILE: Vertical Timeline ────────────────── */}
            <div className="relative grid gap-8 pl-14 lg:hidden">
              {/* Animated vertical conduit */}
              <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
                <div className="absolute inset-0 bg-neutral-900/10 rounded-full blur-[2px]" />
                <div className="absolute inset-0 bg-[#1e293b] rounded-full" />
                <div className="absolute inset-[2px] rounded-full mobile-electric-flow" />
                <div className="absolute left-[3px] top-[2px] bottom-[2px] w-[1.5px] bg-white/75 rounded-full" />
              </div>

              {/* Water Tanker Truck at top */}
              <div className="absolute left-[0px] -top-8 pointer-events-none z-10 w-[80px] h-[55px]">
                <svg viewBox="0 0 75 50" className="w-full h-full animate-float" fill="none">
                  <rect x="5" y="16" width="18" height="21" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
                  <rect x="7" y="19" width="10" height="8" rx="1" fill="#bae6fd" opacity="0.8" />
                  <rect x="2" y="32" width="4" height="4" rx="1" fill="#94a3b8" />
                  <circle cx="4" cy="27" r="1.5" fill="#fef08a" />
                  <rect x="25" y="11" width="42" height="23" rx="9" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
                  <line x1="35" y1="12" x2="35" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                  <line x1="47" y1="12" x2="47" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                  <line x1="59" y1="12" x2="59" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                  <rect x="42" y="7" width="8" height="4" rx="1.5" fill="#0284c7" />
                  <rect x="5" y="35" width="62" height="3" fill="#475569" rx="1" />
                  <circle cx="14" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <circle cx="14" cy="41" r="2.5" fill="#94a3b8" />
                  <circle cx="40" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <circle cx="40" cy="41" r="2.5" fill="#94a3b8" />
                  <circle cx="56" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                  <circle cx="56" cy="41" r="2.5" fill="#94a3b8" />
                </svg>
              </div>

              {steps.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, x: -16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="relative flex flex-col group text-left"
                  >
                    {/* Circle node */}
                    <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-105 group-hover:border-[#0ea5e9]/30">
                      {/* Step badge */}
                      <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#0ea5e9] flex items-center justify-center border border-white">
                        <span className="text-white text-[8px] font-black">{i + 1}</span>
                      </div>
                      <div className="absolute inset-0.5 rounded-full border border-transparent group-hover:border-[#0ea5e9]/40 transition-colors duration-300" />
                      <div className="absolute -inset-2 rounded-full border border-[#0ea5e9]/20 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
                      <Icon className="h-5 w-5 text-neutral-400 group-hover:text-[#0ea5e9] transition-colors duration-300" />
                    </div>

                    {/* Content */}
                    <div className="pl-4 py-0.5">
                      <h3 className="font-extrabold text-base text-neutral-900 leading-tight mt-0 mb-1.5 group-hover:text-[#0284c7] transition-colors duration-300">
                        {s.title}
                      </h3>
                      <p className="text-xs text-neutral-500 leading-relaxed font-medium max-w-sm">
                        {s.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR PROMISES — clean card grid matching landing card style
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-[60px] bg-slate-50/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">Our Commitment</span>
            </div>
            <h2 className="text-slate-900 tracking-tight text-[30px] sm:text-[38px] md:text-[44px] leading-tight max-w-3xl mx-auto font-extrabold" style={{ fontWeight: 800 }}>
              Five Promises We Make to <span className="text-[#0ea5e9]">Every Client</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {promises.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:border-slate-200 hover:-translate-y-0.5 transition-all duration-300 group"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] mb-4 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all duration-300">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <h3 className="text-sm font-extrabold text-slate-800 mb-1.5 group-hover:text-[#0ea5e9] transition-colors">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — background video, centered text, py-[60px]
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden py-[60px] text-white bg-[#090d16] border-t border-white/5">
        {/* Background Video */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: 0.4 }}
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay for Ultra-High Contrast */}
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              backgroundColor: "rgba(9, 13, 22, 0.86)",
              backdropFilter: "blur(2px)",
              WebkitBackdropFilter: "blur(2px)",
            }}
          />
        </div>

        <div className="relative z-20 mx-auto w-[90%] max-w-4xl text-center flex flex-col items-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 border border-emerald-500/40 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-300 shadow-sm backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>
            Emergency Dispatch Active
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-3xl lg:text-[42px] tracking-tight leading-tight text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontWeight: 800 }}
          >
            Ready to restore your property?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          >
            Contact owner <strong className="text-white font-extrabold underline decoration-sky-400/50 underline-offset-4">David Hudson</strong> today for your free estimate. Whether you're preparing your home for sale, maintaining your business's image, or just want a cleaner property — we're ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-2 text-white"
          >
            {[
              { icon: CheckCircle2, label: "24/7 Emergency Response" },
              { icon: Zap, label: "Fast Dispatch Available" },
              { icon: ShieldCheck, label: "Licensed & Insured Pros" },
              { icon: CheckCircle2, label: "100% Satisfaction Guaranteed" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white bg-white/10 border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
                <Icon className="h-4 w-4 text-sky-400 shrink-0" />
                <span>{label}</span>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.35 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full"
          >
            <a
              href="tel:7045169509"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 px-7 py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-[0_0_30px_rgba(14,165,233,0.45)] w-full sm:w-auto min-w-[240px]"
            >
              <Phone className="w-4 h-4" />
              <span>Call: (704) 516-9509</span>
            </a>
            <a
              href="mailto:motivate71@yahoo.com"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/10 backdrop-blur-md px-7 py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] transition-all duration-300 w-full sm:w-auto min-w-[240px]"
            >
              <Mail className="w-4 h-4" />
              <span>motivate71@yahoo.com</span>
            </a>
          </motion.div>

          <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 select-none pt-2">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Serving Mooresville, NC &amp; a 40-mile radius</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
