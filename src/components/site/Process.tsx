import { motion } from "framer-motion";
import {
  CalendarCheck,
  Search,
  FileText,
  Wrench,
  BadgeCheck,
} from "lucide-react";

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

// Desktop S-curve node positions (centered on the SVG path)
const desktopPositions = [
  { left: "20%", top: "50px" },
  { left: "50%", top: "50px" },
  { left: "80%", top: "50px" },
  { left: "20%", top: "310px" },
  { left: "50%", top: "310px" },
];

export function Process() {
  return (
    <section id="process" className="w-full bg-[#fff] py-[60px] px-4 md:px-8 overflow-hidden">
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

        {/* CSS Animations */}
        <style>{`
          @keyframes electricFlow {
            0%   { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: 30; }
          }
          @keyframes sparkFlow {
            0%   { stroke-dashoffset: 0; }
            100% { stroke-dashoffset: -45; }
          }
          @keyframes verticalElectricFlow {
            0%   { background-position: 0 0; }
            100% { background-position: 0 40px; }
          }
          @keyframes pulseGlow {
            0%,100% { transform: scale(0.96); opacity: 0.15; }
            50%     { transform: scale(1.04); opacity: 0.35; }
          }
          @keyframes pulseGlowLarge {
            0%,100% { transform: scale(0.98); opacity: 0.05; }
            50%     { transform: scale(1.02); opacity: 0.15; }
          }
          @keyframes sprayWash {
            0% { stroke-dashoffset: 24; opacity: 0.4; }
            50% { opacity: 1; }
            100% { stroke-dashoffset: 0; opacity: 0.4; }
          }
          .pulse-glow      { animation: pulseGlow 2s infinite ease-in-out; transform-origin: 17px 15px; }
          .pulse-glow-large{ animation: pulseGlowLarge 3s infinite ease-in-out; transform-origin: 17px 15px; }
          .electric-flow   { stroke-dasharray: 6 6; animation: electricFlow 0.5s infinite linear; }
          .spark-flow      { stroke-dasharray: 12 24; animation: sparkFlow 1.8s infinite linear; }
          .mobile-electric-flow {
            background: linear-gradient(to bottom, #0ea5e9 0%, #0ea5e9 30%, #e0f2fe 50%, #0ea5e9 70%, #0ea5e9 100%);
            background-size: 100% 40px;
            animation: verticalElectricFlow 1.2s infinite linear;
          }
          .water-spray {
            stroke-dasharray: 4 4;
            animation: sprayWash 0.6s infinite linear;
          }
        `}</style>

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
                  <stop offset="0%"   stopColor="#0f172a" />
                  <stop offset="40%"  stopColor="#1e293b" />
                  <stop offset="60%"  stopColor="#334155" />
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
                {/* Truck Cab (front left) */}
                <rect x="5" y="16" width="18" height="21" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
                <rect x="7" y="19" width="10" height="8" rx="1" fill="#bae6fd" opacity="0.8" />
                <rect x="2" y="32" width="4" height="4" rx="1" fill="#94a3b8" />
                <circle cx="4" cy="27" r="1.5" fill="#fef08a" />
                
                {/* Water Tank (back right) */}
                <rect x="25" y="11" width="42" height="23" rx="9" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
                <line x1="35" y1="12" x2="35" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                <line x1="47" y1="12" x2="47" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                <line x1="59" y1="12" x2="59" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                <rect x="42" y="7" width="8" height="4" rx="1.5" fill="#0284c7" />

                {/* Chassis & Wheels */}
                <rect x="5" y="35" width="62" height="3" fill="#475569" rx="1" />
                
                {/* Wheel 1 (front) */}
                <circle cx="14" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <circle cx="14" cy="41" r="2.5" fill="#94a3b8" />
                
                {/* Wheel 2 (rear) */}
                <circle cx="40" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <circle cx="40" cy="41" r="2.5" fill="#94a3b8" />
                
                {/* Wheel 3 (rear) */}
                <circle cx="56" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <circle cx="56" cy="41" r="2.5" fill="#94a3b8" />

                {/* Discharge Valve & Hose Connector */}
                <rect x="67" y="26" width="5" height="6" fill="#94a3b8" rx="1" stroke="#475569" strokeWidth="1" />
                {/* Hose connector loop to the start of the pipeline at parent (120, 50) */}
                <path d="M 68 28 Q 74 38 80 40" stroke="#0ea5e9" strokeWidth="3" fill="none" strokeLinecap="round" />
              </g>

              {/* Glowing completed project at end with animated pressure washer connected to conduit */}
              <g transform="translate(920, 310)">
                {/* Brass hex coupling to background pipe */}
                <polygon points="-4,-6 2,-6 5,-3 5,3 2,6 -4,6" fill="#0ea5e9" stroke="#0284c7" strokeWidth="1" />
                <rect x="2" y="-3" width="6" height="6" fill="#475569" rx="1" />
                
                {/* Pressure Washer Spray Gun Group */}
                <g className="hover:scale-105 transition-transform duration-300 origin-left">
                  {/* Gun handle & trigger guard */}
                  <path d="M 8 3 L 16 13 L 13 19 L 6 15 Z" fill="#0f172a" stroke="#1e293b" strokeWidth="1" />
                  <path d="M 10 9 C 10 13, 14 13, 14 9" stroke="#0ea5e9" strokeWidth="1" fill="none" />
                  <line x1="11" y1="6" x2="11" y2="10" stroke="#0ea5e9" strokeWidth="1.5" />
                  {/* Gun Casing */}
                  <rect x="6" y="-4" width="22" height="8" rx="2" fill="#1e293b" stroke="#0f172a" strokeWidth="1" />
                  {/* Brand color stripe accent */}
                  <line x1="12" y1="-2" x2="22" y2="-2" stroke="#0ea5e9" strokeWidth="1" />
                  {/* Brass lance coupler */}
                  <rect x="28" y="-3.5" width="4" height="7" fill="#0ea5e9" rx="0.5" />
                  {/* Lance rubber hand-sleeve grip */}
                  <rect x="32" y="-3" width="12" height="6" fill="#0f172a" rx="1" />
                  {/* Stainless steel lance extension pipe */}
                  <line x1="44" y1="0" x2="74" y2="0" stroke="#cbd5e1" strokeWidth="2.5" strokeLinecap="round" />
                  {/* Quick-connect nozzle collar */}
                  <rect x="74" y="-1.5" width="2" height="3" fill="#cbd5e1" />
                  {/* High pressure red spray nozzle tip */}
                  <polygon points="76,-3 81,-4 83,3 78,4" fill="#ef4444" />
                  
                  {/* Animated Water Spray Jets (Fan Jet Spray Pattern) */}
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
                  
                  {/* Rosette Ribbon Details */}
                  <path d="M 126 12 L 130 28 L 136 22 L 142 28 L 146 12" fill="#0284c7" opacity="0.8" />
                  <path d="M 130 10 L 126 28 L 136 22" fill="#0ea5e9" opacity="0.9" />

                  {/* Blue Seal Outer Border */}
                  <circle cx="136" cy="0" r="16" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" />
                  {/* Blue Seal Inner Dotted Ring */}
                  <circle cx="136" cy="0" r="12" fill="none" stroke="#0284c7" strokeWidth="1" strokeDasharray="1.5 1.5" />
                  
                  {/* Gold/Blue Checkmark */}
                  <path d="M 130 1 L 134 5 L 143 -4" stroke="#0ea5e9" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  
                  {/* Sparkle effects around the seal */}
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
                {/* Truck Cab (front left) */}
                <rect x="5" y="16" width="18" height="21" rx="3" fill="#1e293b" stroke="#0f172a" strokeWidth="1.5" />
                <rect x="7" y="19" width="10" height="8" rx="1" fill="#bae6fd" opacity="0.8" />
                <rect x="2" y="32" width="4" height="4" rx="1" fill="#94a3b8" />
                <circle cx="4" cy="27" r="1.5" fill="#fef08a" />
                
                {/* Water Tank (back right) */}
                <rect x="25" y="11" width="42" height="23" rx="9" fill="#0ea5e9" stroke="#0284c7" strokeWidth="2" />
                <line x1="35" y1="12" x2="35" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                <line x1="47" y1="12" x2="47" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                <line x1="59" y1="12" x2="59" y2="33" stroke="#bae6fd" strokeWidth="1.5" />
                <rect x="42" y="7" width="8" height="4" rx="1.5" fill="#0284c7" />

                {/* Chassis & Wheels */}
                <rect x="5" y="35" width="62" height="3" fill="#475569" rx="1" />
                
                {/* Wheel 1 */}
                <circle cx="14" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <circle cx="14" cy="41" r="2.5" fill="#94a3b8" />
                
                {/* Wheel 2 */}
                <circle cx="40" cy="41" r="7" fill="#0f172a" stroke="#334155" strokeWidth="1" />
                <circle cx="40" cy="41" r="2.5" fill="#94a3b8" />
                
                {/* Wheel 3 */}
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
  );
}
