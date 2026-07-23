import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import serviceHouseImg from "@/assets/service-house.jpg";
import serviceRoofImg from "@/assets/service-roof.jpg";
import serviceDrivewayImg from "@/assets/service-driveway.jpg";
import svcResidential from "@/assets/svc-residential.png";
import svcRoof from "@/assets/svc-roof.png";
import svcSiding from "@/assets/svc-siding.png";
import svcConcrete from "@/assets/svc-concrete.png";
import svcPainting from "@/assets/svc-painting.png";
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
  Zap,
  ShieldCheck,
  Home,
  Sparkles,
  Shield,
  Droplets,
  Paintbrush,
  MapPin,
  Clock,
  HeartHandshake,
  Award,
  Check,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

/* ── Tiny water-drop icon ─────────────────────────────────────────── */
const TinyDropletIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

/* ── Data ─────────────────────────────────────────────────────────── */
const residentialServices = [
  {
    id: "roof-washing",
    title: "Roof Washing",
    image: svcRoof,
    bgImg: serviceRoofImg,
    badge: "Soft Wash Tech",
    tagline: "Low-Pressure Restoration",
    desc: "Gently remove unsightly and damaging black algae, moss, and lichen to extend your roof's lifespan and restore its original color. We use low-pressure soft wash techniques that clean effectively without causing damage to shingles or seals.",
    features: [
      "Extends shingle & roof lifespan",
      "Kills black algae (Gloeocapsa Magma)",
      "Zero high-pressure damage risk",
      "Restores curb appeal & property value",
    ],
  },
  {
    id: "siding-cleaning",
    title: "Siding & Exterior Wall Cleaning",
    image: svcSiding,
    bgImg: serviceHouseImg,
    badge: "All Exterior Surfaces",
    tagline: "Safe Grime & Mold Removal",
    desc: "Whether you have vinyl, brick, stucco, or hardie board, we safely eliminate grime, mold, mildew, and pollen, revealing the true beauty of your home’s exterior without harming your paint or delicate finishes.",
    features: [
      "Vinyl, brick, stucco & hardie board safe",
      "Eliminates pollen, mold & mildew spores",
      "Eco-friendly, family & pet-safe solutions",
      "Instant bright, fresh appearance",
    ],
  },
  {
    id: "concrete-cleaning",
    title: "Concrete & Driveway Cleaning",
    image: svcConcrete,
    bgImg: serviceDrivewayImg,
    badge: "Heavy Duty Wash",
    tagline: "Oil & Stain Eradication",
    desc: "Erase oil stains, tire marks, dirt, and weathering from your driveway, walkways, patios, and pool decks. We restore concrete to a like-new condition, dramatically boosting your home's curb appeal.",
    features: [
      "Removes stubborn oil & grease stains",
      "Deep surface dirt & tire mark extraction",
      "Safe for driveways, patios & pool decks",
      "Protects concrete from premature cracking",
    ],
  },
  {
    id: "painting-services",
    title: "Professional Painting Services",
    image: svcPainting,
    bgImg: serviceHouseImg,
    badge: "Exterior Refresh",
    tagline: "Flawless & Durable Finish",
    desc: "Refresh and protect your home with our expert exterior painting. We prepare surfaces meticulously and use high-quality materials for a flawless, durable finish that withstands the North Carolina elements.",
    features: [
      "Meticulous surface prep & pressure prep",
      "Premium, weather-resistant paint products",
      "Clean lines & flawless craftsmanship",
      "Adds long-lasting protection & value",
    ],
  },
  {
    id: "full-property-wash",
    title: "Full-Property Soft Washing",
    image: svcResidential,
    bgImg: heroImg,
    badge: "Complete Cleanse",
    tagline: "Top-to-Bottom Sanitization",
    desc: "A complete exterior cleanse for your home's siding, trim, windows, gutters, and outdoor living areas using eco-friendly solutions to brighten, sanitize, and restore your entire property in one comprehensive visit.",
    features: [
      "Total exterior house & trim wash",
      "Gentle low-pressure soft wash method",
      "Brightens windows, gutters & soffits",
      "Complete 100% satisfaction guarantee",
    ],
  },
];

const whyTrustUs = [
  {
    icon: Award,
    title: "Owner-On-Site Quality",
    desc: "Owner David Hudson is directly involved in overseeing your project, guaranteeing personal accountability and attention to detail.",
  },
  {
    icon: ShieldCheck,
    title: "Home-Safe Methods",
    desc: "We are experts in soft wash technology for roofs and siding, which cleans thoroughly without high-pressure risks that damage shingles or seals.",
  },
  {
    icon: FileText,
    title: "Transparent & Honest",
    desc: "We begin every relationship with a free, 24/7 estimate. No hidden fees, just straightforward pricing and clear communication.",
  },
  {
    icon: Shield,
    title: "Fully Protected",
    desc: "We are Licensed and Insured, so you and your property are protected throughout every step of the cleaning job.",
  },
  {
    icon: HeartHandshake,
    title: "Built on Integrity",
    desc: "As a Christian-owned company, we conduct our business with honesty, reliability, and a deep commitment to your complete satisfaction.",
  },
  {
    icon: MapPin,
    title: "Deep Local Experience",
    desc: "With 15 years serving Mooresville and surrounding Lake Norman communities, we know the specific environmental factors affecting local homes.",
  },
];

const homeownerProcess = [
  {
    icon: CalendarCheck,
    title: "Free, No-Pressure Estimate",
    desc: "Contact us by phone, text, or email. We'll discuss your home's needs and provide a clear, detailed quote.",
  },
  {
    icon: Clock,
    title: "Convenient Scheduling",
    desc: "We work around your schedule. Hours are 8AM–8PM, Monday–Saturday, with 24/7 emergency dispatch available.",
  },
  {
    icon: Wrench,
    title: "Professional Service",
    desc: "Our uniformed team arrives on time, works efficiently, and treats your property with the utmost respect.",
  },
  {
    icon: BadgeCheck,
    title: "Final Walk-Through",
    desc: "We ensure every detail meets our high standards—and yours—before considering the job complete.",
  },
];

const serviceTowns = [
  "Mooresville",
  "Troutman",
  "Statesville",
  "Cornelius",
  "Davidson",
  "Huntersville",
  "Lake Norman",
  "Denver, NC",
];

const desktopPositions = [
  { left: "15%", top: "50px" },
  { left: "38%", top: "50px" },
  { left: "62%", top: "50px" },
  { left: "85%", top: "50px" },
];

/* ── CSS Keyframes ───────────────────────────────────────────────── */
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

export function ResidentialPage() {
  /* Video state for showcase section */
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const onPlay = () => setIsPlaying(true);
    const onPause = () => setIsPlaying(false);
    video.addEventListener("play", onPlay);
    video.addEventListener("pause", onPause);
    return () => {
      video.removeEventListener("play", onPlay);
      video.removeEventListener("pause", onPause);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    e?.preventDefault();
    const v = videoRef.current;
    if (!v) return;
    v.paused ? v.play().catch(console.error) : v.pause();
  };

  return (
    <div className="w-full bg-background overflow-hidden">
      <style>{STYLES}</style>
      <Nav />

      {/* ═══════════════════════════════════════════════════════════
          HERO / PAGE HEADER — dark section matching AboutPage style
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
            className="absolute inset-0 w-full h-full object-cover opacity-40"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
          {/* Dark Overlay for Ultra-High Contrast */}
          <div className="absolute inset-0 z-10 pointer-events-none bg-[#090d16]/85 backdrop-blur-[2px]" />
        </div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-center space-y-4 sm:space-y-6 text-white text-center">

          {/* Eyebrow Pill Badge */}
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
            <span>Residential Exterior Cleaning Services</span>
          </motion.div>

          {/* H1 Headline */}
          <h1
            className="text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] mb-2 max-w-4xl font-black text-center text-2xl sm:text-4xl md:text-5xl leading-tight sm:leading-none"
            style={{
              fontSize: "clamp(24px, 5.5vw, 46px)",
              fontWeight: 900,
              letterSpacing: "-0.02em",
            }}
          >
            Protect &amp; Beautify{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Your Mooresville Home.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] text-center"
          >
            Your home is more than an investment; it’s your sanctuary. For over 15 years, Steam On Wheels has provided professional residential exterior cleaning across Mooresville and Lake Norman that restores beauty, enhances curb appeal, and protects your property.
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

          {/* Trust Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-full border-t border-white/10 pt-5 sm:pt-6 mt-0 max-w-2xl text-center"
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-center">
              {[
                { label: "Owner on Every Job", sub: "David Hudson On-Site" },
                { label: "Soft Wash Technology", sub: "100% Home-Safe Methods" },
                { label: "Licensed & Insured", sub: "Complete $2M Protection" },
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
          ABOUT RESIDENTIAL / HERO INTRO SECTION — mirrors About.tsx arch video layout
      ═══════════════════════════════════════════════════════════ */}
      <section id="residential-about" className="relative py-[60px] overflow-hidden bg-slate-50/50">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px] -z-10" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">

            {/* Left Copy Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-[#0ea5e9]"
              >
                <TinyDropletIcon />
                <span>Your Home, Treated with Expert Care</span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-[28px] sm:text-[34px] lg:text-[40px] tracking-tight leading-[1.15] text-slate-900"
                style={{ fontWeight: 800 }}
              >
                Residential Exterior Cleaning Solutions{" "}
                <span
                  style={{
                    background: "linear-gradient(to right,#0ea5e9,#0284c7)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Built for Mooresville.
                </span>
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal"
              >
                We specialize in comprehensive exterior cleaning solutions designed to tackle the unique environmental challenges faced by homes in our region. From sun-baked driveways to algae-prone roofs, our expertise ensures safe, effective, and lasting results.
              </motion.p>

              {/* Service Highlight Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2"
              >
                {[
                  "Roof Soft Washing & Algae Removal",
                  "Siding & Exterior Wall Cleansing",
                  "Concrete & Driveway Oil Removal",
                  "Professional Exterior Painting",
                  "Full-Property Soft Washing",
                  "Licensed & Insured Home Care",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2.5 bg-white border border-slate-200/80 rounded-xl px-3.5 py-2.5 shadow-sm">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#0ea5e9]/10 text-[#0ea5e9] shrink-0">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <span className="text-xs sm:text-[13px] font-bold text-slate-800">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Contact Callouts */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex flex-wrap items-center gap-4 pt-4"
              >
                <a
                  href="tel:7045169509"
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 px-6 py-3 text-white text-xs font-bold uppercase tracking-wider hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call David Hudson: (704) 516-9509</span>
                </a>
              </motion.div>
            </div>

            {/* Right: Arch Video Container Mask */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[380px] sm:max-w-[420px]"
              >
                {/* Circle Badge Overlap - OUTSIDE overflow-hidden container */}
                <div className="absolute top-6 right-6 z-30 w-20 h-20 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white flex flex-col items-center justify-center p-2 shadow-2xl border-2 border-white text-center animate-bounce duration-[3000ms]">
                  <span className="text-xs font-black leading-none">SOFT</span>
                  <span className="text-[8px] font-extrabold uppercase tracking-wider mt-0.5">WASH</span>
                </div>

                {/* Outer Arch Container */}
                <div className="relative w-full h-[460px] sm:h-[520px] rounded-t-full overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src={serviceHouseImg}
                    alt="Steam On Wheels Residential Exterior Cleaning"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />

                  {/* Owner Glass Card Overlay */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/80 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left shadow-2xl">
                    <p className="text-[10px] text-[#38bdf8] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                      David Hudson
                    </p>
                    <p className="text-xs font-extrabold text-white mt-0.5">ON EVERY SINGLE RESIDENTIAL JOB</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          RESIDENTIAL SERVICES GRID
      ═══════════════════════════════════════════════════════════ */}
      <section id="services-list" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-[#0ea5e9] animate-pulse" />
              <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-wider text-[#0284c7]">Our Residential Services Include</span>
            </div>
            <h2 className="text-slate-900 tracking-tight text-[28px] sm:text-[38px] leading-tight font-extrabold" style={{ fontWeight: 800 }}>
              Comprehensive Cleaning Solutions for <span className="text-[#0ea5e9]">Every Home Surface</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialServices.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 flex flex-col group"
              >
                {/* Service Card Image */}
                <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.bgImg}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

                  {/* Badge */}
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md border border-white/20 px-3 py-1 rounded-full text-[10px] font-extrabold text-white uppercase tracking-wider">
                    {service.badge}
                  </div>
                </div>

                {/* Service Card Content */}
                <div className="p-6 flex-1 flex flex-col text-left">
                  <span className="text-[11px] font-black text-[#0ea5e9] uppercase tracking-wider mb-1">{service.tagline}</span>
                  <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-[#0ea5e9] transition-colors">{service.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed mb-6 flex-1">{service.desc}</p>

                  {/* Bullet points */}
                  <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                    {service.features.map((feat) => (
                      <div key={feat} className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0ea5e9] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  <a
                    href="tel:7045169509"
                    className="w-full py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 group-hover:bg-[#0ea5e9] group-hover:text-white group-hover:border-[#0ea5e9] transition-all duration-300"
                  >
                    <span>Get Estimate for {service.title.split(" ")[0]}</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY MOORESVILLE HOMEOWNERS TRUST US (6 Trust Pillars Grid)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">Why Mooresville Homeowners Trust Us</span>
            </div>
            <h2 className="text-slate-900 tracking-tight text-[30px] sm:text-[38px] md:text-[44px] leading-tight max-w-3xl mx-auto font-extrabold" style={{ fontWeight: 800 }}>
              6 Reasons Neighbors Choose <span className="text-[#0ea5e9]">Steam On Wheels</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyTrustUs.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:border-slate-200 hover:-translate-y-1 transition-all duration-300 text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-5 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 group-hover:text-[#0ea5e9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          OUR SIMPLE HOMEOWNER PROCESS (4-Step Conduit Timeline)
      ═══════════════════════════════════════════════════════════ */}
      <section id="process" className="w-full bg-[#fff] py-[60px] px-4 md:px-8 overflow-hidden border-b border-slate-100">
        <div className="mx-auto max-w-[1400px] w-full relative">
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

            {/* Header */}
            <motion.div
              className="text-center max-w-3xl mx-auto mb-20"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-5 py-1.5 text-[11px] font-black uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                Our Simple Homeowner Process
              </span>

              <h2
                className="text-[#1c140d] tracking-tight leading-[1.15] font-sans text-[30px] lg:text-[36px]"
                style={{ marginTop: "-15px", marginBottom: "10px", fontWeight: 800 }}
              >
                How We Care for{" "}
                <span className="bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] bg-clip-text text-transparent">
                  Your Property Step by Step.
                </span>
              </h2>

              <p
                className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto font-normal leading-relaxed"
                style={{ marginBottom: "-50px" }}
              >
                From your initial phone call to our final walk-through inspection, we make exterior cleaning easy, transparent, and stress-free.
              </p>
            </motion.div>

            {/* Desktop 4-Step Timeline Grid */}
            <div className="hidden lg:block relative w-full h-[320px] select-none">
              <svg
                viewBox="0 0 1200 180"
                className="absolute top-[50px] left-0 w-full h-[180px] pointer-events-none z-0"
                fill="none"
                preserveAspectRatio="none"
              >
                <path d="M 120 50 L 1050 50" stroke="#1e293b" strokeWidth="10" strokeLinecap="round" />
                <motion.path
                  d="M 120 50 L 1050 50"
                  stroke="#0ea5e9"
                  strokeWidth="6"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 2.0, ease: "easeInOut" }}
                />
                <path d="M 120 50 L 1050 50" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" opacity="0.8" className="spark-flow" />
              </svg>

              {homeownerProcess.map((s, i) => {
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
                    <div className="absolute -translate-x-1/2 -translate-y-1/2 w-[76px] h-[76px] rounded-full bg-white shadow-[0_10px_32px_rgba(15,23,42,0.08)] border border-slate-100 flex items-center justify-center z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_20px_40px_-6px_rgba(14,165,233,0.25)] group-hover:border-[#0ea5e9]/30">
                      <div className="absolute -top-2.5 -right-1 w-5 h-5 rounded-full bg-[#0ea5e9] flex items-center justify-center shadow-md border-2 border-white">
                        <span className="text-white text-[9px] font-black leading-none">{i + 1}</span>
                      </div>
                      <Icon className="h-7 w-7 text-neutral-400 group-hover:text-[#0ea5e9] transition-colors duration-300" />
                    </div>

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

            {/* Mobile Vertical Timeline */}
            <div className="relative grid gap-8 pl-14 lg:hidden">
              <div className="absolute left-[39px] top-6 bottom-6 w-2.5 pointer-events-none z-0">
                <div className="absolute inset-0 bg-[#1e293b] rounded-full" />
                <div className="absolute inset-[2px] rounded-full mobile-flow" />
              </div>

              {homeownerProcess.map((s, i) => {
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
                    <div className="absolute -left-[54px] top-0 w-12 h-12 rounded-full bg-white shadow-[0_4px_16px_rgba(0,0,0,0.07)] border border-slate-100 flex items-center justify-center z-10">
                      <div className="absolute -top-1.5 -right-0.5 w-4 h-4 rounded-full bg-[#0ea5e9] flex items-center justify-center border border-white">
                        <span className="text-white text-[8px] font-black">{i + 1}</span>
                      </div>
                      <Icon className="h-5 w-5 text-neutral-400 group-hover:text-[#0ea5e9] transition-colors duration-300" />
                    </div>

                    <div className="pl-4 py-0.5">
                      <h3 className="font-extrabold text-base text-neutral-900 leading-tight mt-0 mb-1.5 group-hover:text-[#0284c7] transition-colors">
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
          SERVICE TOWNS BADGES / LOCAL COVERAGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
            Proudly Serving Residential Homeowners Across Lake Norman &amp; Surrounding Areas
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceTowns.map((town) => (
              <div
                key={town}
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-xs font-bold text-slate-700 shadow-sm"
              >
                <MapPin className="w-3.5 h-3.5 text-[#0ea5e9]" />
                <span>{town}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — dark section matching AboutPage style
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
            Ready to See Your Home Shine Again?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-3xl lg:text-[42px] tracking-tight leading-tight text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontWeight: 800 }}
          >
            Contact David Hudson Today for Your{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Free Estimate.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          >
            Don’t let dirt, grime, and stains diminish the beauty and value of your home. We proudly serve Mooresville, Troutman, Statesville, Cornelius, Davidson, Huntersville, and beyond.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 pt-2 text-white"
          >
            {[
              { icon: CheckCircle2, label: "24/7 Free Estimates" },
              { icon: Zap, label: "Fast Local Dispatch" },
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
            <span>Serving Our Neighbors with Faith and Flawless Results.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
