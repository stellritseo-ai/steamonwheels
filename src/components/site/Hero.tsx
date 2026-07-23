import { useState } from "react";
import heroImg from "@/assets/hero.jpg";
import heroVideo from "@/assets/hero.mp4";
import { Phone, CheckCircle2, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";

export function Hero() {
  return (
    <div className="w-full bg-background relative">
      <Nav />
      <section
        className="relative w-full overflow-hidden min-h-[520px] sm:min-h-[580px] md:min-h-[660px] flex items-center justify-start text-left px-4 sm:px-8 md:px-12 lg:px-16 pt-[140px] sm:pt-[160px] md:pt-[180px] lg:pt-[200px] pb-12 sm:pb-16 md:pb-24"
      >
        {/* Background Video (with fallback image behind it) */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
          {/* Static image fallback */}
          <div
            className="absolute inset-0 bg-cover bg-center -z-10"
            style={{ backgroundImage: `url(${heroImg})` }}
          />
          {/* Local Background Video */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* Premium Dark overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-l from-transparent via-[#090d16]/70 to-[#090d16]/95 z-10"
        />

        {/* Dynamic content container */}
        <div className="relative z-20 max-w-4xl w-full flex flex-col items-start space-y-4 sm:space-y-6 md:space-y-8 text-white">

          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full border border-white/15 bg-white/10 backdrop-blur-md text-white text-[10px] sm:text-xs md:text-sm font-semibold uppercase tracking-wider shadow-sm select-none"
            style={{ marginTop: "100px", marginBottom: "20px" }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
             <span>#1 Pressure Washing in Lake Norman, NC</span>
          </motion.div>

          <h1
            className="text-white tracking-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)] -mt-2 mb-2 text-[25px] leading-[38px] md:text-[43px] md:leading-[60px]"
            style={{ fontWeight: 800, fontFamily: "inherit" }}
          >
            Professional Residential &amp;
            Commercial Pressure
            Washing...{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-500">
              On Demand
            </span>
          </h1>

          {/* Subheadline description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)]"
            style={{ marginBottom: "20px" }}
          >
            Providing top-rated pressure washing, soft roof cleaning, house washing, driveway concrete degreasing, and exterior painting across Mooresville, Lake Norman, Cornelius, Huntersville, Denver, Statesville, Hickory &amp; Charlotte, NC. 15+ years of experience. Fully Licensed &amp; Insured.
          </motion.p>

          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            <a
              href="tel:7045169509"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-primary hover:opacity-95 px-5 sm:px-7 py-3 sm:py-3.5 text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 shadow-glow w-full sm:w-auto"
            >
              <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current text-primary-foreground" />
              <span>Call: (704) 516-9509</span>
            </a>
            <a
              href="/estimate"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Get Free Estimate</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </motion.div>

          {/* Star Rating Trust Widget */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex items-center gap-2 text-neutral-400 text-xs select-none"
          >
            <div className="flex gap-0.5 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-[9px] sm:text-[10px] font-bold text-neutral-300 uppercase tracking-wide">Based on 412+ Google Reviews</span>
          </motion.div>

          {/* Trust Indicators / Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="w-full border-t border-white/10 pt-5 sm:pt-6 mt-0 max-w-2xl text-left"
            style={{ marginTop: "0px" }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">Commercial Quality</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">Industrial Hot-Water Wash</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">Licensed &amp; Insured</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">Complete $2M Liability</p>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-sky-400 shrink-0 animate-pulse" />
                <div>
                  <h4 className="text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider">100% Satisfaction</h4>
                  <p className="text-[9px] sm:text-[10px] text-neutral-400 font-light">Or We Re-Clean For Free</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
