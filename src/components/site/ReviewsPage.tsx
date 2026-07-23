import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import heroVideo from "@/assets/hero.mp4";
import serviceHouseImg from "@/assets/service-house.jpg";
import {
  Phone,
  Mail,
  CheckCircle2,
  ChevronRight,
  MapPin,
  HeartHandshake,
  Award,
  Sparkles,
  Star,
  Quote,
  MessageSquare,
  ThumbsUp,
  ExternalLink,
  ShieldCheck,
  Building2,
  Home,
  Check,
} from "lucide-react";

/* ── Tiny Star Icon ────────────────────────────────────────────────── */
const StarRating = ({ count = 5 }) => (
  <div className="flex gap-1 text-amber-400">
    {[...Array(count)].map((_, i) => (
      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
    ))}
  </div>
);

/* ── 15 Customer Reviews Data ─────────────────────────────────────── */
const reviews = [
  {
    id: 1,
    title: "Absolutely Transformative!",
    quote:
      "Our driveway looked like it had years of oil stains that would never come out. David and his team worked their magic, and now it looks brand new! They were professional, on time, and very respectful of our property. I couldn't believe the difference. Steam On Wheels is truly the best in Mooresville!",
    author: "Sarah M.",
    location: "Mooresville, NC",
    service: "Driveway Cleaning",
    rating: 5,
  },
  {
    id: 2,
    title: "Roof Looks Like New!",
    quote:
      "I was worried about the black streaks on my roof and had called a few companies. David came out, explained the soft wash process, and gave me a very fair quote. The results are incredible—my roof looks like it did when it was first installed. I highly recommend Steam On Wheels to anyone needing roof cleaning.",
    author: "Robert T.",
    location: "Cornelius, NC",
    service: "Roof Washing",
    rating: 5,
  },
  {
    id: 3,
    title: "Honest, Reliable, and Great Work!",
    quote:
      "We needed our siding cleaned before putting our house on the market. Steam On Wheels did an outstanding job. The house looks so much brighter and cleaner. David was honest, showed up when he said he would, and did the work with great attention to detail. I'll definitely call them again for future needs.",
    author: "Jennifer L.",
    location: "Davidson, NC",
    service: "Siding & Exterior Cleaning",
    rating: 5,
  },
  {
    id: 4,
    title: "A Christian Company You Can Trust",
    quote:
      "It's refreshing to work with a company that operates with integrity. David was upfront about everything, no hidden fees, and the work was excellent. He even took the time to walk me through the whole process. As a fellow Christian, I appreciate the values they bring to their business. God bless you guys!",
    author: "Pastor Michael R.",
    location: "Statesville, NC",
    service: "Concrete & Driveway Cleaning",
    rating: 5,
  },
  {
    id: 5,
    title: "Saved Our Business Image!",
    quote:
      "Our commercial building's exterior was looking terrible. We called Steam On Wheels and they came out within a day to give us a quote. They worked around our business hours and did an incredible job power washing the entire building and parking lot. Our customers have commented on how great it looks. Highly recommend for any business in Mooresville!",
    author: "Lisa K.",
    location: "Mooresville, NC",
    service: "Commercial Exterior Cleaning",
    rating: 5,
  },
  {
    id: 6,
    title: "Exceptional Quality Painting",
    quote:
      "We hired Steam On Wheels to paint our entire house exterior. I'm very particular, and David exceeded my expectations. The prep work was thorough, the paint application was flawless, and they cleaned up everything perfectly. Our home looks gorgeous. It's rare to find this level of craftsmanship today.",
    author: "Mark & Diane S.",
    location: "Huntersville, NC",
    service: "Exterior Painting",
    rating: 5,
  },
  {
    id: 7,
    title: "The Best Pressure Washing in Town",
    quote:
      "I've used other pressure washing companies before, but Steam On Wheels is by far the best. Their hot water system really makes a difference—our driveway and walkways are completely stain-free. David is responsive, professional, and truly cares about his customers. 5 stars all the way!",
    author: "Tom W.",
    location: "Troutman, NC",
    service: "Concrete Cleaning",
    rating: 5,
  },
  {
    id: 8,
    title: "Emergency Service - They Came Through!",
    quote:
      "We had a sewer backup that left a terrible mess on our patio and driveway. I called Steam On Wheels at 9 PM and they were here first thing the next morning. They cleaned everything thoroughly and made a stressful situation so much easier to handle. Their 24/7 emergency service is a lifesaver!",
    author: "Karen H.",
    location: "Mooresville, NC",
    service: "Emergency Exterior Cleaning",
    rating: 5,
  },
  {
    id: 9,
    title: "Fast, Affordable, and Great Results!",
    quote:
      "I was blown away by the quality of service from Steam On Wheels. They cleaned my roof, siding, and driveway all in one day. The price was very reasonable, and the team worked efficiently. My house looks like it's brand new. I'm recommending them to all my friends and family.",
    author: "Brian G.",
    location: "Mooresville, NC",
    service: "Full Exterior Package",
    rating: 5,
  },
  {
    id: 10,
    title: "They Treat Your Home Like Their Own",
    quote:
      "David came out personally to assess our property and really took the time to understand what we wanted. When the crew arrived, they were courteous, wore shoe covers indoors when needed, and treated our home with respect. The results? Stunning! You can trust Steam On Wheels.",
    author: "Amanda F.",
    location: "Denver, NC",
    service: "Siding Cleaning & Soft Wash",
    rating: 5,
  },
  {
    id: 11,
    title: "Five Stars Isn't Enough!",
    quote:
      "Our commercial parking lot was covered in oil stains and black spots from cars. Steam On Wheels made it look like a brand new parking lot. They were professional, fast, and very reasonably priced. Our property manager was so impressed, we've signed them up for ongoing maintenance. Highly recommended!",
    author: "Eric N.",
    location: "Statesville, NC",
    service: "Commercial Pavement Cleaning",
    rating: 5,
  },
  {
    id: 12,
    title: "The Perfect Finish to Our Renovation",
    quote:
      "We just finished a home renovation and needed the exterior painted and all the construction dust and residue cleaned off the driveway and siding. Steam On Wheels handled both the painting and the cleaning seamlessly. They made our new home look like a showroom. Absolutely perfect!",
    author: "Julie C.",
    location: "Davidson, NC",
    service: "Painting & Exterior Cleaning Combo",
    rating: 5,
  },
  {
    id: 13,
    title: "Christian Integrity in Action",
    quote:
      "What a blessing to find a company that operates with such honesty. David quoted me a fair price and even offered suggestions to save me money. When they finished, the results were better than I imagined. I will never use anyone else. Steam On Wheels is a business built on a solid foundation.",
    author: "Greg W.",
    location: "Cornelius, NC",
    service: "Roof Washing & Siding Cleaning",
    rating: 5,
  },
  {
    id: 14,
    title: "Amazing Before & After!",
    quote:
      "I took pictures before and after, and the difference is night and day. My driveway and sidewalk had years of grime, and Steam On Wheels made them look like they were poured yesterday. I'm so impressed with the quality of the work. Thank you David!",
    author: "Rachel M.",
    location: "Mooresville, NC",
    service: "Concrete & Driveway Cleaning",
    rating: 5,
  },
  {
    id: 15,
    title: "Local, Reliable, and Skilled",
    quote:
      "I searched for a local company and found Steam On Wheels. I'm so glad I did. David was incredibly professional, answered all my questions, and the work itself was top-notch. Our home has never looked better. Support local businesses—you won't regret choosing Steam On Wheels!",
    author: "Jamie P.",
    location: "Huntersville, NC",
    service: "Full-House Soft Wash & Painting",
    rating: 5,
  },
];

const reviewPlatforms = [
  { name: "Google Reviews", rating: "5.0 ★★★★★", color: "from-blue-600 to-sky-500", desc: "Read verified customer reviews on Google Maps." },
  { name: "Facebook", rating: "5.0 ★★★★★", color: "from-[#1877F2] to-blue-600", desc: "Check out recommendation posts from Lake Norman locals." },
  { name: "Nextdoor", rating: "#1 Neighborhood Favorite", color: "from-emerald-600 to-green-500", desc: "Recommended by neighbors across Mooresville & Davidson." },
  { name: "Yelp", rating: "5.0 ★★★★★", color: "from-red-600 to-rose-500", desc: "Browse detailed client ratings & service photos." },
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

/* ── CSS Keyframes ───────────────────────────────────────────────── */
const STYLES = `
  @keyframes spark-flow-anim { 0% { stroke-dashoffset: 0; } 100% { stroke-dashoffset: 45; } }
  @keyframes pulse-glow-anim  { 0%,100% { transform:scale(0.96); opacity:0.15; } 50% { transform:scale(1.04); opacity:0.35; } }
  @keyframes pulse-glow-lg    { 0%,100% { transform:scale(0.98); opacity:0.05; } 50% { transform:scale(1.02); opacity:0.15; } }
  .spark-flow      { stroke-dasharray:12 24; animation:spark-flow-anim 1.8s infinite linear; }
  .pulse-glow      { animation:pulse-glow-anim 2s infinite ease-in-out; transform-origin:17px 15px; }
  .pulse-glow-lg   { animation:pulse-glow-lg   3s infinite ease-in-out; transform-origin:17px 15px; }
`;

export function ReviewsPage() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Driveway Cleaning", "Roof Washing", "Siding & Exterior Cleaning", "Commercial Exterior Cleaning", "Exterior Painting"];

  const filteredReviews = filter === "All"
    ? reviews
    : reviews.filter((r) => r.service.toLowerCase().includes(filter.toLowerCase()));

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
            <span>Verified Customer Reviews</span>
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
            What Our Neighbors in Mooresville{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Are Saying.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] text-center"
          >
            At Steam On Wheels, nothing matters more than the satisfaction of our clients. We take pride in delivering exceptional service, honest communication, and results that speak for themselves across Lake Norman.
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
              href="#reviews-grid"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Read 15 Reviews</span>
              <ChevronRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
            </a>
          </motion.div>

          {/* Overall Score Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 text-neutral-300 text-xs select-none pt-2"
          >
            <div className="flex gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current text-amber-400" />
              ))}
            </div>
            <span className="text-[11px] sm:text-xs font-extrabold text-white uppercase tracking-wider">
              5.0 Rating Across 100+ Verified Local Projects
            </span>
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
                { label: "100% 5-Star Reviews", sub: "Verified Local Homeowners" },
                { label: "Christian Integrity", sub: "Transparent Upfront Quotes" },
                { label: "15 Years Experience", sub: "David Hudson Direct Oversight" },
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
          SHOWCASE INTRO SECTION WITH SOFT WASH CIRCLE BADGE (UNCLIPPED)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">

            {/* Left Copy */}
            <div className="lg:col-span-7 text-left space-y-5">
              <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0284c7] rounded-full px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider">
                <HeartHandshake className="w-3.5 h-3.5 text-[#0ea5e9]" />
                Built On Craft. Powered By Trust.
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Real Feedback From Homeowners &amp; Business Owners in Lake Norman
              </h2>
              <p className="text-sm sm:text-base text-slate-600 font-medium leading-relaxed">
                As a locally owned, Christian-operated business, we treat your property with the exact care, integrity, and respect as if it were our own. Browse 15 verified reviews below covering driveway pressure washing, soft roof cleaning, siding restoration, commercial power washing, and exterior painting.
              </p>

              {/* Service Badges Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { value: "100%", label: "Satisfaction" },
                  { value: "15+", label: "Years Operating" },
                  { value: "40 Mi", label: "Service Radius" },
                  { value: "24/7", label: "Emergency Support" },
                ].map(({ value, label }) => (
                  <div key={label} className="bg-white border border-slate-200/80 rounded-2xl p-3 text-center shadow-sm">
                    <span className="text-xl font-black text-[#0ea5e9] block">{value}</span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Showcase Arch Image with SOFT WASH Circle Badge OUTSIDE overflow-hidden */}
            <div className="lg:col-span-5 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[380px] sm:max-w-[420px]"
              >
                {/* Circle Badge Overlap — OUTSIDE overflow-hidden container so it never gets clipped! */}
                <div className="absolute top-6 right-6 z-30 w-20 h-20 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white flex flex-col items-center justify-center p-2 shadow-2xl border-2 border-white text-center animate-bounce duration-[3000ms]">
                  <span className="text-xs font-black leading-none">SOFT</span>
                  <span className="text-[8px] font-extrabold uppercase tracking-wider mt-0.5">WASH</span>
                </div>

                {/* Arch Container */}
                <div className="relative w-full h-[460px] sm:h-[520px] rounded-t-full overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src={serviceHouseImg}
                    alt="Steam On Wheels Verified Reviews"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Glass Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left shadow-2xl">
                    <p className="text-[10px] text-[#38bdf8] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                      David Hudson Guarantee
                    </p>
                    <p className="text-xs font-extrabold text-white mt-0.5">100% SATISFACTION GUARANTEED ON EVERY JOB</p>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          REVIEWS GRID WITH CATEGORY FILTER
      ═══════════════════════════════════════════════════════════ */}
      <section id="reviews-grid" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

          {/* Filter Bar */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs font-extrabold transition-all duration-300 ${
                  filter === cat
                    ? "bg-[#0ea5e9] text-white shadow-md shadow-[#0ea5e9]/30 scale-105"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Reviews Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredReviews.map((rev, index) => (
              <motion.div
                key={rev.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
                className="bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 text-left flex flex-col justify-between group relative"
              >
                <div>
                  {/* Rating + Service Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <StarRating count={rev.rating} />
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#0ea5e9] bg-[#0ea5e9]/10 px-2.5 py-1 rounded-full border border-[#0ea5e9]/20">
                      {rev.service}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#0ea5e9] transition-colors">
                    "{rev.title}"
                  </h3>

                  {/* Quote Body */}
                  <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed mb-6 italic">
                    "{rev.quote}"
                  </p>
                </div>

                {/* Author Info Footer */}
                <div className="border-t border-slate-200/60 pt-4 flex items-center justify-between">
                  <div>
                    <h4 className="text-xs font-black text-slate-900">{rev.author}</h4>
                    <p className="text-[10px] text-slate-400 font-medium flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-[#0ea5e9]" />
                      <span>{rev.location}</span>
                    </p>
                  </div>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SHARE YOUR EXPERIENCE / REVIEW PLATFORMS
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-slate-50/50 border-t border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            className="max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200/80 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <MessageSquare className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">Share Your Story</span>
            </div>
            <h2 className="text-slate-900 tracking-tight text-[30px] sm:text-[38px] md:text-[44px] leading-tight font-extrabold" style={{ fontWeight: 800 }}>
              Had a Great Experience? <span className="text-[#0ea5e9]">Leave Us a Review</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed max-w-xl mx-auto mt-3">
              We'd love to hear from you! Your feedback helps us continue to grow and serve our Lake Norman neighbors with Christian integrity and excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {reviewPlatforms.map((plat) => (
              <a
                key={plat.name}
                href="tel:7045169509"
                className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm hover:shadow-xl hover:border-slate-300 transition-all duration-300 text-left flex flex-col justify-between group"
              >
                <div>
                  <div className={`h-2.5 w-12 rounded-full bg-gradient-to-r ${plat.color} mb-4`} />
                  <h3 className="text-base font-black text-slate-900 group-hover:text-[#0ea5e9] transition-colors">{plat.name}</h3>
                  <p className="text-xs font-extrabold text-[#0ea5e9] mt-0.5">{plat.rating}</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed mt-2">{plat.desc}</p>
                </div>
                <div className="pt-4 flex items-center justify-between text-xs font-bold text-slate-700 group-hover:text-[#0ea5e9]">
                  <span>Leave Review</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          SERVICE TOWNS BADGES / LOCAL COVERAGE
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-xs font-extrabold uppercase tracking-widest text-slate-400 mb-4">
            Serving Happy Clients Across Mooresville &amp; Surrounding 40-Mile Region
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
            Ready to Experience the Steam On Wheels Difference?
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-3xl lg:text-[42px] tracking-tight leading-tight text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontWeight: 800 }}
          >
            Contact Us Today for Your Free, No-Obligation{" "}
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
            Serving Mooresville, NC &amp; Communities Within a 40-Mile Radius. Call David Hudson directly or send us an email to get started.
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
              { icon: ShieldCheck, label: "Mon-Sat 8am-8pm" },
              { icon: ShieldCheck, label: "Licensed & Insured" },
              { icon: CheckCircle2, label: "100% Satisfaction Guaranteed" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-white bg-[#ffffff1a] border border-white/15 rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold backdrop-blur-md shadow-sm">
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
            <span>Steam On Wheels: Where Faith Meets Flawless Clean.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
