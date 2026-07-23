import { useState, FormEvent } from "react";
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
  Clock,
  Send,
  ShieldCheck,
  Award,
  HeartHandshake,
  Sparkles,
  HelpCircle,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Building2,
  Home,
  Check,
  AlertCircle,
  ExternalLink,
} from "lucide-react";

/* ── FAQ Item Component ───────────────────────────────────────────── */
function FaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden transition-all duration-200">
      <button
        onClick={() => setOpen(!open)}
        className="w-full p-5 text-left flex items-center justify-between font-extrabold text-slate-900 text-sm sm:text-base hover:text-[#0ea5e9] transition-colors"
      >
        <span className="flex items-center gap-3">
          <HelpCircle className="w-4 h-4 text-[#0ea5e9] shrink-0" />
          {question}
        </span>
        {open ? <ChevronUp className="w-4 h-4 text-[#0ea5e9]" /> : <ChevronDown className="w-4 h-4 text-slate-400" />}
      </button>
      {open && (
        <div className="px-5 pb-5 pt-0 text-xs sm:text-sm text-slate-600 font-medium leading-relaxed border-t border-slate-100 pt-3">
          {answer}
        </div>
      )}
    </div>
  );
}

/* ── Data ─────────────────────────────────────────────────────────── */
const serviceAreaTowns = [
  "Mooresville",
  "Troutman",
  "Statesville",
  "Cornelius",
  "Davidson",
  "Huntersville",
  "Denver",
  "Sherrills Ford",
  "Mount Mourne",
  "Lake Norman Region",
];

const whyContactUs = [
  {
    icon: Clock,
    title: "Free Estimates 24/7",
    desc: "We provide detailed, no-obligation quotes anytime, day or night.",
  },
  {
    icon: Award,
    title: "Owner-Operated Direct Care",
    desc: "David Hudson is personally involved in every single quote and job site.",
  },
  {
    icon: ShieldCheck,
    title: "Licensed, Insured & Bonded",
    desc: "Full Commercial Liability and Workers' Compensation protection.",
  },
  {
    icon: HeartHandshake,
    title: "15 Years Local Experience",
    desc: "Lake Norman's trusted exterior cleaning & painting specialists since 2011.",
  },
  {
    icon: Sparkles,
    title: "Christian-Owned Integrity",
    desc: "Honest pricing, clear communication, and non-rushed craftsmanship.",
  },
];

const faqs = [
  {
    q: "How do I get a free estimate?",
    a: "Simply call us at (704) 516-9509 or fill out our online contact form above. We'll evaluate your project needs and provide a transparent, no-obligation quote.",
  },
  {
    q: "What areas do you serve?",
    a: "We serve Mooresville, NC, and all communities within a 40-mile radius—including Troutman, Statesville, Cornelius, Davidson, Huntersville, Denver NC, and Lake Norman.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes! Steam On Wheels is fully licensed, insured, and bonded for complete property and worker protection.",
  },
  {
    q: "What services do you offer?",
    a: "We specialize in soft-wash roof cleaning, siding & exterior washing, hot-water concrete degreasing, driveway cleaning, and professional exterior painting for homes & businesses.",
  },
  {
    q: "What if I need emergency service outside your regular hours?",
    a: "We offer 24/7 emergency service. If you have an urgent cleanup need (such as sewer backups or storm spills), call (704) 516-9509 anytime day or night.",
  },
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cityZip: "",
    services: [] as string[],
    hearAbout: "",
    propertyType: "Residential",
    preferredContact: "Phone",
    bestTime: "",
    description: "",
  });

  const handleCheckboxChange = (serviceName: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(serviceName)
        ? prev.services.filter((s) => s !== serviceName)
        : [...prev.services, serviceName],
    }));
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...formData,
          services: formData.services.join(", "),
          _subject: `New Steam On Wheels Contact Form from ${formData.name || 'Website Visitor'}`,
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("FormSubmit Error:", err);
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

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
            <span>Contact Steam On Wheels</span>
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
            We're Here to Help —{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Reach Out Today.
            </span>
          </h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="text-xs sm:text-sm md:text-base text-neutral-300 font-medium leading-relaxed max-w-2xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.3)] text-center"
          >
            Have questions about our exterior cleaning or painting services? Ready for a free estimate? Owner David Hudson answers calls directly—no call centers or automated menus. Just honest, helpful communication.
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
              href="#contact-form"
              className="inline-flex items-center justify-center gap-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-md px-5 sm:px-7 py-3 sm:py-3.5 text-white text-[10px] sm:text-xs font-bold uppercase tracking-wider hover:bg-white hover:text-neutral-900 hover:scale-[1.03] active:scale-[0.98] transition-all duration-300 w-full sm:w-auto"
            >
              <span>Fill Contact Form</span>
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
                { label: "Direct Phone Access", sub: "(704) 516-9509" },
                { label: "24/7 Emergency Service", sub: "Day or Night Response" },
                { label: "Mon-Sat 8am-8pm", sub: "Mooresville & 40-Mi Radius" },
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
          CONTACT INFO CARDS + HOURS & SERVICE AREA
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50/50 border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Direct Phone Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-4">
                  <Phone className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">Call Us Directly</h3>
                <a href="tel:7045169509" className="text-lg font-black text-[#0ea5e9] hover:underline block mb-2">
                  (704) 516-9509
                </a>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  We answer our own calls—no call centers or automated trees. Speak directly with owner David Hudson.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-emerald-600 flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>24/7 Emergency Line Active</span>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-4">
                  <Mail className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-1">Email Us</h3>
                <a href="mailto:motivate71@yahoo.com" className="text-sm font-extrabold text-[#0ea5e9] hover:underline block mb-2">
                  motivate71@yahoo.com
                </a>
                <p className="text-xs text-slate-500 font-medium leading-relaxed">
                  Include your name, phone number, property address, and service needed. We aim to respond within 24 hours.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-600">
                Prompt 24-Hour Reply Guarantee
              </div>
            </div>

            {/* Business Hours Card */}
            <div className="bg-white border border-slate-200/80 rounded-3xl p-6 shadow-sm flex flex-col justify-between text-left">
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-4">
                  <Clock className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">Business Hours</h3>
                <div className="space-y-1 text-xs font-semibold text-slate-700">
                  <div className="flex justify-between py-0.5 border-b border-slate-100">
                    <span>Monday – Saturday</span>
                    <span className="font-extrabold text-slate-900">8:00 AM – 8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-0.5 border-b border-slate-100">
                    <span>Sunday</span>
                    <span className="font-extrabold text-amber-600">Closed (24/7 Emergency)</span>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-100 text-[11px] font-bold text-slate-600">
                Mooresville &amp; 40-Mile Region
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          INTERACTIVE CONTACT FORM SECTION WITH UNCLIPPED CIRCLE BADGE
      ═══════════════════════════════════════════════════════════ */}
      <section id="contact-form" className="py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12">

            {/* Left Form Column */}
            <div className="lg:col-span-7 text-left space-y-6">
              <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-4 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest text-[#0ea5e9]">
                <Send className="w-3.5 h-3.5 text-[#0ea5e9]" />
                <span>Send Us a Message</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Request Your Free, No-Obligation Estimate
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 font-medium leading-relaxed">
                Fill out the form below and David Hudson will review your request personally. Your privacy is valued—your information will never be shared or sold.
              </p>

              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-500/40 rounded-3xl p-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto shadow-lg">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">Thank You for Reaching Out!</h3>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium max-w-md mx-auto">
                    We have received your estimate request. David Hudson will review your project details and contact you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-[#0ea5e9] text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider shadow-md hover:bg-[#0284c7] transition-all"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-5 shadow-sm">
                  {/* Name + Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Smith"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                      />
                    </div>
                  </div>

                  {/* Phone + City/Zip */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="(704) 555-0199"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Service Area (City &amp; Zip)
                      </label>
                      <input
                        type="text"
                        placeholder="Mooresville, NC 28115"
                        value={formData.cityZip}
                        onChange={(e) => setFormData({ ...formData, cityZip: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                      />
                    </div>
                  </div>

                  {/* Services of Interest Checkboxes */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-2">
                      Service(s) of Interest
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Concrete Cleaning",
                        "Roof Washing",
                        "Siding & Exterior Cleaning",
                        "Driveway Cleaning",
                        "Painting Services",
                        "Other Service",
                      ].map((serviceName) => (
                        <label
                          key={serviceName}
                          className="flex items-center gap-2 bg-white border border-slate-200 rounded-xl p-2.5 text-xs font-bold text-slate-700 cursor-pointer hover:border-[#0ea5e9] transition-colors"
                        >
                          <input
                            type="checkbox"
                            checked={formData.services.includes(serviceName)}
                            onChange={() => handleCheckboxChange(serviceName)}
                            className="rounded text-[#0ea5e9] focus:ring-[#0ea5e9]"
                          />
                          <span>{serviceName}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Property Type & Contact Method */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Property Type
                      </label>
                      <select
                        value={formData.propertyType}
                        onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                      >
                        <option value="Residential">Residential Home</option>
                        <option value="Commercial">Commercial Facility</option>
                        <option value="Both">Both / Multiple Properties</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                        Preferred Contact Method
                      </label>
                      <select
                        value={formData.preferredContact}
                        onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
                        className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9]"
                      >
                        <option value="Phone">Phone Call</option>
                        <option value="Email">Email Reply</option>
                        <option value="Either">Either Phone or Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <label className="block text-xs font-extrabold uppercase tracking-wider text-slate-700 mb-1.5">
                      Brief Description of Your Needs
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Include any project details, specific stain concerns, or timeline preferences..."
                      value={formData.description}
                      onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                      className="w-full bg-white border border-slate-300 rounded-xl px-4 py-3 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-[#0ea5e9] focus:ring-1 focus:ring-[#0ea5e9]"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] hover:opacity-95 py-4 text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 shadow-lg shadow-[#0ea5e9]/30 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>SUBMIT ESTIMATE REQUEST</span>
                  </button>
                </form>
              )}
            </div>

            {/* Right Column: Showcase Arch Image with SOFT WASH Circle Badge OUTSIDE overflow-hidden */}
            <div className="lg:col-span-5 flex flex-col justify-start space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative w-full max-w-[380px] sm:max-w-[420px] mx-auto"
              >
                {/* Circle Badge Overlap — OUTSIDE overflow-hidden container so it never gets clipped! */}
                <div className="absolute top-6 right-6 z-30 w-20 h-20 rounded-full bg-gradient-to-br from-[#0ea5e9] to-[#0284c7] text-white flex flex-col items-center justify-center p-2 shadow-2xl border-2 border-white text-center animate-bounce duration-[3000ms]">
                  <span className="text-xs font-black leading-none">SOFT</span>
                  <span className="text-[8px] font-extrabold uppercase tracking-wider mt-0.5">WASH</span>
                </div>

                {/* Arch Container */}
                <div className="relative w-full h-[440px] sm:h-[480px] rounded-t-full overflow-hidden shadow-2xl border-4 border-white bg-slate-900 group">
                  <img
                    src={serviceHouseImg}
                    alt="Steam On Wheels Contact David Hudson"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  {/* Glass Card */}
                  <div className="absolute bottom-6 left-6 right-6 bg-slate-950/85 backdrop-blur-md border border-white/10 rounded-2xl p-4 text-left shadow-2xl">
                    <p className="text-[10px] text-[#38bdf8] font-bold uppercase tracking-widest flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0ea5e9] animate-pulse" />
                      David Hudson Direct Contact
                    </p>
                    <p className="text-xs font-extrabold text-white mt-0.5">(704) 516-9509 — CALL ANYTIME 24/7</p>
                  </div>
                </div>
              </motion.div>

              {/* Communities We Serve List */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 text-left">
                <h3 className="text-sm font-black text-slate-900 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#0ea5e9]" />
                  <span>40-Mile Regional Service Area</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {serviceAreaTowns.map((town) => (
                    <span key={town} className="bg-white border border-slate-200 text-[11px] font-bold text-slate-700 px-3 py-1 rounded-full shadow-sm">
                      {town}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════
          WHY CONTACT STEAM ON WHEELS (5 Pillars)
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
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-slate-700">The Steam On Wheels Standard</span>
            </div>
            <h2 className="text-slate-900 tracking-tight text-[30px] sm:text-[38px] md:text-[44px] leading-tight max-w-3xl mx-auto font-extrabold" style={{ fontWeight: 800 }}>
              Why Homeowners &amp; Businesses <span className="text-[#0ea5e9]">Trust Our Team</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyContactUs.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={pillar.title}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="bg-white border border-slate-100 rounded-3xl p-7 shadow-sm hover:shadow-lg hover:border-slate-200 transition-all duration-300 text-left group flex flex-col justify-between"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0ea5e9]/10 text-[#0ea5e9] mb-5 group-hover:bg-[#0ea5e9] group-hover:text-white transition-all duration-300">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-base font-extrabold text-slate-900 mb-2 group-hover:text-[#0ea5e9] transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
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
          FREQUENTLY ASKED QUESTIONS (Accordion)
      ═══════════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 px-4 py-1.5 rounded-full shadow-sm mb-4">
              <HelpCircle className="w-3.5 h-3.5 text-[#0ea5e9]" />
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider text-[#0284c7]">Got Questions?</span>
            </div>
            <h2 className="text-slate-900 tracking-tight text-[28px] sm:text-[38px] leading-tight font-extrabold" style={{ fontWeight: 800 }}>
              Frequently Asked <span className="text-[#0ea5e9]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-4 text-left">
            {faqs.map((f) => (
              <FaqItem key={f.q} question={f.q} answer={f.a} />
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
            Contact Us Today — We Look Forward to Serving You!
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-[28px] sm:text-3xl lg:text-[42px] tracking-tight leading-tight text-white max-w-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]"
            style={{ fontWeight: 800 }}
          >
            Call David Hudson Directly at{" "}
            <span
              style={{
                background: "linear-gradient(to right,#38bdf8,#3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              (704) 516-9509
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base text-white/90 max-w-2xl leading-relaxed font-medium drop-shadow-[0_1px_6px_rgba(0,0,0,0.9)]"
          >
            Serving Mooresville with Faith &amp; Excellence. Email motivate71@yahoo.com or call anytime 24/7 for urgent cleaning requests.
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
            <span>Steam On Wheels: Serving Mooresville with Faith &amp; Excellence.</span>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
