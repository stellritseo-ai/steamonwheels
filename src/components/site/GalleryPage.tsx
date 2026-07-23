import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";

// Assets Imports from @/assets/steam
import heroVideo from "@/assets/hero.mp4";
import beforeImg from "@/assets/before.jpg";
import afterImg from "@/assets/after.jpg";
import serviceHouseImg from "@/assets/service-house.jpg";
import serviceDrivewayImg from "@/assets/service-driveway.jpg";
import serviceRoofImg from "@/assets/service-roof.jpg";
import serviceDeckImg from "@/assets/service-deck.jpg";

// Video Assets from src/assets/steam
import steamVid1 from "@/assets/steam/02e05799-b826-476a-bc01-115d06231e2d.mp4";
import steamVid2 from "@/assets/steam/09920d55-798c-4fc4-b990-0b8a84d4bea7.mp4";
import steamVid3 from "@/assets/steam/17dc8191-f6c9-4a51-883a-28250ae91db6.mp4";
import steamVid4 from "@/assets/steam/4da066a4-6a9e-4bae-bf7b-223a1a6fbec3.mp4";

// Image Assets from src/assets/steam
import gal1 from "@/assets/steam/gallery1.jpg";
import gal2 from "@/assets/steam/gallery2.jpg";
import gal3 from "@/assets/steam/gallery3.jpg";
import gal4 from "@/assets/steam/gallery4.jpg";
import gal5 from "@/assets/steam/gallery5.jpg";
import gal6 from "@/assets/steam/gallery6.jpg";
import gal8 from "@/assets/steam/gallery8.jpg";
import gal14 from "@/assets/steam/gallery14.jpg";
import gal18 from "@/assets/steam/gallery18.jpg";
import gal22 from "@/assets/steam/gallery22.jpg";
import unt1 from "@/assets/steam/untitled.jpg";
import unt10 from "@/assets/steam/untitled_10.jpg";
import unt12 from "@/assets/steam/untitled_12.jpg";

import {
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  X,
  MapPin,
  Play,
  Sparkles,
  Award,
  ShieldCheck,
  Camera,
  Layers,
  Building2,
  Home,
  Star,
  Check,
  ExternalLink,
  MessageSquare,
  Facebook,
} from "lucide-react";

/* ── Interactive Before & After Slider Component ───────────────────── */
function BeforeAfterSlider({
  title,
  service,
  before,
  after,
  beforeDesc,
  afterDesc,
}: {
  title: string;
  service: string;
  before: string;
  after: string;
  beforeDesc: string;
  afterDesc: string;
}) {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPos(percentage);
  };

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm flex flex-col justify-between text-left group hover:border-[#0ea5e9]/30 transition-all duration-300">
      <div>
        {/* Service Tag */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-[10px] font-black uppercase tracking-widest text-[#0ea5e9] bg-[#0ea5e9]/10 px-3 py-1 rounded-full border border-[#0ea5e9]/20">
            {service}
          </span>
          <span className="text-[10px] font-extrabold text-slate-400 uppercase tracking-wider">
            Drag Slider Below
          </span>
        </div>

        <h3 className="text-xl font-extrabold text-slate-900 mb-4">{title}</h3>

        {/* Interactive Comparison Container */}
        <div
          className="relative w-full h-[280px] sm:h-[320px] rounded-2xl overflow-hidden shadow-md select-none cursor-ew-resize border border-slate-200 mb-5"
          onMouseMove={(e) => {
            if (isDragging) {
              const rect = e.currentTarget.getBoundingClientRect();
              handleMove(e.clientX, rect);
            }
          }}
          onMouseDown={() => setIsDragging(true)}
          onMouseUp={() => setIsDragging(false)}
          onMouseLeave={() => setIsDragging(false)}
          onTouchMove={(e) => {
            const rect = e.currentTarget.getBoundingClientRect();
            handleMove(e.touches[0].clientX, rect);
          }}
        >
          {/* AFTER Image (Background) */}
          <img src={after} alt={`${title} After`} className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute top-3 right-3 bg-emerald-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md z-10">
            AFTER
          </div>

          {/* BEFORE Image (Clipped Overlay) */}
          <div
            className="absolute inset-0 overflow-hidden"
            style={{ width: `${sliderPos}%` }}
          >
            <img
              src={before}
              alt={`${title} Before`}
              className="absolute inset-0 w-full h-full object-cover"
              style={{ width: "100%", minWidth: "100%" }}
            />
            <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-md shadow-md z-10">
              BEFORE
            </div>
          </div>

          {/* Divider Line & Handle */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_rgba(0,0,0,0.5)] z-20"
            style={{ left: `${sliderPos}%` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#0ea5e9] border-2 border-white shadow-xl flex items-center justify-center text-white">
              <span className="text-xs font-black">↔</span>
            </div>
          </div>
        </div>

        {/* Descriptions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          <div className="bg-white border border-slate-200/80 p-3 rounded-xl">
            <span className="font-extrabold text-slate-900 text-[11px] uppercase tracking-wider block text-slate-400 mb-1">
              Before Assessment:
            </span>
            <p className="text-slate-600 font-medium leading-relaxed">{beforeDesc}</p>
          </div>
          <div className="bg-white border border-slate-200/80 p-3 rounded-xl border-l-2 border-l-[#0ea5e9]">
            <span className="font-extrabold text-[#0ea5e9] text-[11px] uppercase tracking-wider block mb-1">
              After Transformation:
            </span>
            <p className="text-slate-600 font-medium leading-relaxed">{afterDesc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── 6 Before & After Data Sets ───────────────────────────────────── */
const beforeAfterCases = [
  {
    title: "Concrete & Driveway Degreasing",
    service: "Concrete Cleaning",
    before: beforeImg,
    after: afterImg,
    beforeDesc: "Years of heavy oil stains, tire marks, and ground-in red clay dirt had left this concrete driveway looking aged and stained.",
    afterDesc: "Hot water pressure washing lifted deep-set grease, restoring original bright concrete and dramatically boosting curb appeal.",
  },
  {
    title: "Algae-Free Soft Wash Roof Restoration",
    service: "Roof Washing",
    before: serviceRoofImg,
    after: serviceHouseImg,
    beforeDesc: "Dark black Gloeocapsa magma algae streaks covered shingles, absorbing excessive heat and dulling the roof structure.",
    afterDesc: "Low-pressure soft wash chemistry safely eliminated 100% of organic growth without shingle granule loss.",
  },
  {
    title: "Siding & Full Exterior Soft Wash",
    service: "Siding Cleaning",
    before: serviceHouseImg,
    after: serviceDeckImg,
    beforeDesc: "Heavy green algae, mold spores, and airborne pollen dulled the home's vinyl siding, creating an unkempt appearance.",
    afterDesc: "A complete soft wash revived original vibrant color, sanitizing surface fibers and restoring clean curb appeal.",
  },
  {
    title: "Driveway & Entrance Pavement Revival",
    service: "Driveway Cleaning",
    before: serviceDrivewayImg,
    after: serviceDeckImg,
    beforeDesc: "Tire rubber marks, oil spots, and organic mildew created dark eyesores across the entryway driveway pavement.",
    afterDesc: "Professional surface cleaner pressure washing washed away all stains, delivering a smooth like-new entry.",
  },
  {
    title: "Full Exterior Paint Refresh & Prep",
    service: "Painting Services",
    before: serviceHouseImg,
    after: afterImg,
    beforeDesc: "Chipped, sun-faded siding paint left wood trim exposed to moisture absorption, wood rot, and structural decay.",
    afterDesc: "Thorough pressure wash prep, scraping, priming, and 2 coats of premium weather-shield exterior paint revitalized the home.",
  },
  {
    title: "Commercial Facility Exterior Maintenance",
    service: "Commercial Property",
    before: serviceDrivewayImg,
    after: serviceHouseImg,
    beforeDesc: "Accumulated commercial traffic grime, oil leaks, and algae dulled the building facade and customer entrance walkway.",
    afterDesc: "Industrial hot-water power washing restored a clean, professional, welcoming storefront image that attracts customers.",
  },
];

/* ── Project Tables Data ──────────────────────────────────────────── */
const residentialProjects = [
  { type: "Full Home Transformation", loc: "Mooresville, NC", services: "Siding Cleaning + Driveway Cleaning + Painting" },
  { type: "Roof Restoration", loc: "Cornelius, NC", services: "Roof Washing + Soft Wash Treatment" },
  { type: "Concrete Revival", loc: "Davidson, NC", services: "Driveway & Patio Cleaning" },
  { type: "Curb Appeal Boost", loc: "Huntersville, NC", services: "Full-House Soft Wash + Gutter Cleaning" },
  { type: "Historic Home Refresh", loc: "Statesville, NC", services: "Siding Cleaning + Painting" },
];

const commercialProjects = [
  { type: "Office Building Exterior", loc: "Mooresville, NC", services: "Full Building Wash + Parking Lot Cleaning" },
  { type: "Retail Storefront", loc: "Huntersville, NC", services: "Siding Cleaning + Window Frame Cleaning" },
  { type: "Warehouse & Loading Dock", loc: "Statesville, NC", services: "Concrete Cleaning + Industrial Degreasing" },
  { type: "Restaurant Exterior", loc: "Cornelius, NC", services: "Building Wash + Grease Removal" },
  { type: "Shopping Center", loc: "Mooresville, NC", services: "Complete Exterior Cleaning Package" },
];

/* ── Dynamic Load of All Images in src/assets/steam ──────────────── */
const steamImagesModules = import.meta.glob<{ default: string }>(
  "@/assets/steam/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}",
  { eager: true }
);

const allSteamImages = Object.entries(steamImagesModules).map(([path, mod], idx) => {
  const filename = path.split("/").pop() || `Photo ${idx + 1}`;
  const cleanName = filename
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ")
    .replace(/^(1696255\d+_|2023\d+_)/, "");

  let tag = "Steam Project";
  if (filename.includes("gallery")) tag = "Gallery Photo";
  else if (filename.includes("2023") || filename.includes("1696")) tag = "Job Site Work";
  else if (filename.includes("svc")) tag = "Service Work";

  return {
    id: idx,
    src: mod.default,
    title: cleanName.length > 25 ? `Steam On Wheels Project ${idx + 1}` : cleanName || `Project ${idx + 1}`,
    tag,
  };
});

const steamVideos = [
  { src: steamVid1, title: "Hot Water Concrete Pressure Washing", desc: "Watch high-pressure hot water dissolve years of embedded grease and oil." },
  { src: steamVid2, title: "Low-Pressure Soft Wash Roof Cleaning", desc: "Gentle chemical application lifting dark black algae off shingles." },
  { steamVid3, title: "Driveway Surface Cleaner In Action", desc: "Rotary surface washer delivering streak-free uniform concrete cleaning." },
  { src: steamVid4, title: "Commercial Exterior Facility Wash", desc: "Restoring professional commercial curb appeal for Lake Norman businesses." },
];

export function GalleryPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [showAllPhotos, setShowAllPhotos] = useState(false);

  const displayedImages = showAllPhotos ? allSteamImages : allSteamImages.slice(0, 24);

  return (
    <div className="w-full bg-background overflow-hidden">
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
            <span>Real Projects • Real Results • 15 Years Experience</span>
          </motion.div>

          {/* H1 Headline */}
          <h1
            className="text-white tracking-tight drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)] -mt-2 mb-2 max-w-4xl font-black text-center"
            style={{
              fontSize: "clamp(32px, 4.5vw, 46px)",
              fontWeight: 900,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
            }}
          >
            See the Steam On Wheels Difference —{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Before &amp; After.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] text-center"
          >
            A picture is worth a thousand words. Browse real transformations from residential and commercial properties across Mooresville, NC, and the 40-mile Lake Norman region.
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
              href="#before-after"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Explore Gallery</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
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
                { label: "100% Real Job Photos", sub: "Actual Local Work" },
                { label: "Hot Water & Soft Wash", sub: "State-of-the-Art Rigs" },
                { label: "David Hudson Direct", sub: "Owner Quality Control" },
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
          BEFORE & AFTER TRANSFORMATIONS (6 INTERACTIVE SLIDERS)
      ═══════════════════════════════════════════════════════════ */}
      <section id="before-after" className="py-20 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Interactive Before &amp; After Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Drag the Slider to See the Transformation
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mt-2">
              Our advanced hot-water pressure washing and gentle soft-wash chemistry remove years of built-up oil, algae, and grime.
            </p>
          </motion.div>

          {/* 6 Before & After Slider Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {beforeAfterCases.map((item) => (
              <BeforeAfterSlider
                key={item.title}
                title={item.title}
                service={item.service}
                before={item.before}
                after={item.after}
                beforeDesc={item.beforeDesc}
                afterDesc={item.afterDesc}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PROJECT VIDEOS SHOWCASE (From src/assets/steam folder)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-sky-500/20 border border-sky-500/30 text-sky-400 rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Play className="w-3.5 h-3.5 text-sky-400 fill-sky-400" />
              Real Action Videos From Assets
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Watch Our Commercial &amp; Soft Wash Equipment in Action
            </h2>
            <p className="text-xs sm:text-sm text-neutral-400 font-medium leading-relaxed max-w-xl mx-auto mt-2">
              See the power of industrial hot water pressure washing and gentle soft washing recorded on actual local project sites.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steamVideos.map((vid, idx) => (
              <div key={idx} className="bg-slate-950 border border-white/10 rounded-3xl overflow-hidden shadow-2xl flex flex-col justify-between">
                <div className="relative w-full h-[260px] sm:h-[300px] bg-black">
                  <video
                    controls
                    playsInline
                    preload="metadata"
                    className="w-full h-full object-cover"
                  >
                    <source src={vid.src} type="video/mp4" />
                  </video>
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg font-black text-white mb-1.5 flex items-center gap-2">
                    <Play className="w-4 h-4 text-[#0ea5e9] fill-[#0ea5e9]" />
                    {vid.title}
                  </h3>
                  <p className="text-xs text-neutral-400 font-medium leading-relaxed">{vid.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          PHOTO GALLERY GRID (All Photos From src/assets/steam)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Camera className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Project Photo Showcase ({allSteamImages.length} Photos)
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Recent Work Across Lake Norman &amp; Mooresville
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mt-2">
              Showing authentic photos from actual Steam On Wheels project sites. Click any photo to view in high resolution.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {displayedImages.map((img, idx) => (
              <motion.div
                key={img.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: (idx % 4) * 0.04 }}
                onClick={() => setLightboxIndex(idx)}
                className="group relative h-[220px] sm:h-[260px] rounded-2xl overflow-hidden shadow-md bg-slate-900 border border-slate-200 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-3 left-3 right-3 text-left">
                  <span className="text-[9px] font-black uppercase tracking-widest text-[#38bdf8] bg-black/60 px-2 py-0.5 rounded-md backdrop-blur-md">
                    {img.tag}
                  </span>
                  <h4 className="text-xs font-extrabold text-white mt-1 group-hover:text-[#38bdf8] transition-colors truncate">
                    {img.title}
                  </h4>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Toggle Show All Photos Button */}
          {allSteamImages.length > 24 && (
            <div className="mt-12 text-center">
              <button
                onClick={() => setShowAllPhotos(!showAllPhotos)}
                className="inline-flex items-center gap-2 rounded-full bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 text-xs font-extrabold uppercase tracking-wider shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <Camera className="w-4 h-4 text-[#0ea5e9]" />
                <span>
                  {showAllPhotos
                    ? "Collapse to Top 24 Photos"
                    : `Show All ${allSteamImages.length} Photos from Assets`}
                </span>
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-6 right-6 h-11 w-11 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev === 0 ? displayedImages.length - 1 : prev - 1) : null));
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev !== null ? (prev === displayedImages.length - 1 ? 0 : prev + 1) : null));
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full flex flex-col items-center justify-center text-center select-none"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={displayedImages[lightboxIndex].src}
              alt={displayedImages[lightboxIndex].title}
              className="max-w-full max-h-[75vh] object-contain rounded-2xl shadow-2xl border border-white/10"
            />
            <div className="mt-4 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#38bdf8] bg-white/10 px-3 py-1 rounded-full border border-white/15">
                {displayedImages[lightboxIndex].tag}
              </span>
              <h3 className="text-base font-black text-white mt-2">
                {displayedImages[lightboxIndex].title}
              </h3>
              <p className="text-xs text-neutral-400 font-medium">
                Photo {lightboxIndex + 1} of {displayedImages.length}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════════════════════════════════════════════════
          PROJECT HIGHLIGHTS (Residential & Commercial Tables)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-left">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5 text-[#0ea5e9]" />
              Project Highlights
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Recent Completed Projects Summary
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Residential Showcase Table */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2.5 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]">
                  <Home className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Residential Showcase</h3>
                  <p className="text-xs text-slate-500 font-medium">Home &amp; Estate Transformations</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[10px]">
                      <th className="pb-3">Project Type</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Services Provided</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                    {residentialProjects.map((row) => (
                      <tr key={row.type} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 font-extrabold text-slate-900">{row.type}</td>
                        <td className="py-3 text-[#0ea5e9] font-bold">{row.loc}</td>
                        <td className="py-3 text-slate-600">{row.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Commercial Showcase Table */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-6 border-b border-slate-100 pb-4">
                <div className="p-2.5 rounded-xl bg-[#0ea5e9]/10 text-[#0ea5e9]">
                  <Building2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-black text-slate-900">Commercial Showcase</h3>
                  <p className="text-xs text-slate-500 font-medium">Business &amp; Facility Maintenance</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-xs text-left">
                  <thead>
                    <tr className="border-b border-slate-200 text-slate-400 font-extrabold uppercase tracking-wider text-[10px]">
                      <th className="pb-3">Project Type</th>
                      <th className="pb-3">Location</th>
                      <th className="pb-3">Services Provided</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 font-semibold text-slate-700">
                    {commercialProjects.map((row) => (
                      <tr key={row.type} className="hover:bg-slate-50 transition-colors">
                        <td className="py-3 font-extrabold text-slate-900">{row.type}</td>
                        <td className="py-3 text-[#0ea5e9] font-bold">{row.loc}</td>
                        <td className="py-3 text-slate-600">{row.services}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY OUR RESULTS SPEAK VOLUMES (5 Pillars)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Why Our Results Speak Volumes
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4 text-left">
            {[
              { label: "100% Real Projects", sub: "Every image is from an actual Steam On Wheels job." },
              { label: "Professional Rigs", sub: "State-of-the-art hot water pressure wash & soft wash equipment." },
              { label: "Expert Techniques", sub: "Tailored pressure and chemistry for every single surface." },
              { label: "Attention to Detail", sub: "We don't cut corners—we deliver clean perfection." },
              { label: "Christian Integrity", sub: "Honest work, fair pricing, and trustworthy service." },
            ].map(({ label, sub }) => (
              <div key={label} className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 shadow-sm">
                <CheckCircle2 className="w-6 h-6 text-[#0ea5e9] mb-3" />
                <h4 className="text-sm font-extrabold text-slate-900 mb-1">{label}</h4>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SUBMIT YOUR OWN PHOTOS & SOCIAL LINKS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm">
            <Camera className="w-3.5 h-3.5 text-[#0ea5e9]" />
            <span className="text-xs font-bold text-slate-700 uppercase tracking-wider">Submit Your Own Photos</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Send Us Your Before &amp; After Transformation Photos!
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">
            We love hearing from our clients! If we've worked on your property, send your photos to <a href="mailto:motivate71@yahoo.com" className="text-[#0ea5e9] font-bold hover:underline">motivate71@yahoo.com</a> and we'll feature them in our gallery.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <a
              href="tel:7045169509"
              className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#0284c7] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span>Call (704) 516-9509</span>
            </a>
            <a
              href="mailto:motivate71@yahoo.com"
              className="inline-flex items-center gap-2 bg-white border border-slate-300 text-slate-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm hover:bg-slate-50 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>motivate71@yahoo.com</span>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          FINAL CTA — dark section matching AboutPage style
      ═══════════════════════════════════════════════════════════ */}
      <section className="relative w-full overflow-hidden py-[60px] text-white bg-[#090d16]">
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
            Ready to Transform Your Property?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-3xl lg:text-[42px] tracking-tight leading-tight text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontWeight: 800 }}
          >
            Contact Us Today for a Free, No-Obligation{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Estimate!
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          >
            Serving Mooresville, Troutman, Statesville, Cornelius, Davidson, Huntersville, Denver NC, and Lake Norman.
          </motion.p>

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
            <span>Steam On Wheels: Where Faith Meets Flawless Clean.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
