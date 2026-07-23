import { useState, useRef, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Play, Pause } from "lucide-react";

const features = [
  { title: "Decades of Expertise", desc: "15 years perfecting the art of exterior Cleaning." },
  { title: "Owner-Operated Service", desc: "David is directly involved, ensuring unmatched quality and attention to detail." },
  { title: "Our Promise", desc: "We are Licensed & Insured for your complete protection and peace of mind." },
  { title: "Always Available", desc: "Get a free, no-obligation estimate 24/7. We work hard Mon-Sat, 8am-8pm, and offer 24/7 emergency services when you need us most." },
  { title: "Faith in Action", desc: "We conduct our business with integrity, respect, and a commitment to your satisfaction." },
];

const TinyDropletIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

export function WhyChooseUs() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);

    if (!video.paused) {
      setIsPlaying(true);
    }

    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
    };
  }, []);

  const togglePlay = (e?: React.MouseEvent) => {
    if (e) {
      e.stopPropagation();
      e.preventDefault();
    }
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch((err) => {
        console.error("Video playback failed:", err);
      });
    } else {
      video.pause();
    }
  };

  return (
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
              {/* Badge with Ping */}
              <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm select-none">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
                </span>
                <span>Why Choose Us</span>
              </div>

              <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[24px] sm:text-[30px] capitalize mt-[-10px] mb-[10px]">
                Why Homeowners & <span className="text-[#0ea5e9]">Business Owners</span> Trust Us
              </h2>

              {/* Description */}
              <p className="text-slate-500 text-[15px] leading-[28px] mb-6 font-medium max-w-[95%]">
                We've built our reputation on doing the job right the first time — with the safety, craftsmanship, and transparent communication that North Carolina homeowners and businesses rely on.
              </p>

              {/* Feature items */}
              <div className="space-y-1 mb-8 w-full text-left">
                {features.map((f) => (
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

              {/* CTAs */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <a
                  href="/#services"
                  className="inline-flex items-center justify-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(15,23,42,0.15)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  Explore Services
                </a>
                <a
                  href="tel:7045169509"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:from-[#0ea5e9] hover:to-[#0369a1] text-white text-[11px] md:text-xs font-bold uppercase tracking-widest rounded-full px-7 py-3.5 transition-all duration-300 shadow-[0_4px_14px_rgba(14,165,233,0.25)] hover:scale-[1.03] active:scale-[0.97]"
                >
                  Call (704) 516-9509
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Video Showcase Card */}
          <div className="relative w-full order-1 lg:order-2 lg:sticky lg:top-[100px] lg:self-start group/video-container">
            {/* Ambient Glow Backdrop (creates a soft cyan glow behind the card on hover) */}
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
                playsInline
                loop
                muted
                autoPlay
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />

              {/* Vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-slate-950/45 pointer-events-none transition-opacity duration-300 group-hover:opacity-90" />

              {/* Glossy sheen overlay */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />

              {/* Central Play/Pause Toggle Overlay Button */}
              <button
                onClick={togglePlay}
                aria-label={isPlaying ? "Pause Video" : "Play Video"}
                className="absolute inset-0 w-full h-full flex items-center justify-center cursor-pointer transition-all duration-300 z-20 opacity-0 group-hover:opacity-100 bg-slate-950/25"
              >
                {/* Glow behind the button */}
                <div className={`absolute w-24 h-24 rounded-full bg-[#0ea5e9]/20 blur-md transition-all duration-300 ${isPlaying ? 'scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100' : 'scale-100 opacity-100'}`} />

                <div className="relative w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-lg border border-white/30 flex items-center justify-center text-white shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 hover:border-white/50">
                  {isPlaying ? (
                    <Pause className="w-5 h-5 fill-white" />
                  ) : (
                    <Play className="w-5 h-5 fill-white translate-x-[2px]" />
                  )}
                </div>
              </button>

              {/* Premium Dark Glassmorphic Info Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-slate-950/75 backdrop-blur-md border border-white/10 rounded-[10px] p-4 sm:p-5 shadow-2xl flex items-center justify-between select-none transition-all duration-300 group-hover:bottom-5 group-hover:bg-slate-950/85">
                <div className="text-left">
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                    Steam On Wheels
                  </p>
                  <p className="text-xs sm:text-[13px] font-extrabold text-white mt-1">Fully Licensed & Insured</p>
                </div>
                <div className="flex items-center gap-2">
                  {/* Subtle video control state badge */}
                  <span className="text-[9px] font-bold text-[#bae6fd] bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-2 py-0.5 rounded-md uppercase tracking-wider">
                    {isPlaying ? "Playing" : "Paused"}
                  </span>
                  <span className="text-[10px] font-black text-white bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] px-3 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                    Active Work
                  </span>
                </div>
              </div>

              {/* Crisp Sub-pixel border line */}
              <div className="absolute inset-0 rounded-[10px] border border-white/10 pointer-events-none z-10" />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
