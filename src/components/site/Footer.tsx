import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";
import logoImg from "@/assets/logo.png";

// Inline SVG Social Icons for maximum reliability
const FacebookIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const socials = [
  { icon: FacebookIcon, href: "#", label: "Facebook" },
  { icon: InstagramIcon, href: "#", label: "Instagram" },
];

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Before & After Gallery", href: "/gallery" },
  { label: "Client Reviews", href: "/reviews" },
  { label: "Free Estimate", href: "/estimate" },
  { label: "Contact Us", href: "/contact" },
];

const servicesLinks = [
  { label: "Residential Wash", href: "/residential" },
  { label: "Commercial Cleaning", href: "/commercial" },
  { label: "Roof Washing", href: "/roof-washing" },
  { label: "Siding & Exterior Wash", href: "/siding-cleaning" },
  { label: "Concrete Cleaning", href: "/concrete-cleaning" },
  { label: "Driveway Cleaning", href: "/driveway-cleaning" },
  { label: "Exterior Painting", href: "/painting-service" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#050b1a] text-white overflow-hidden border-t border-slate-900">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-grid opacity-[0.02] pointer-events-none" />

      {/* Decorative Blur Blobs */}
      <div className="absolute -top-40 left-1/4 w-[400px] h-[400px] bg-[#0ea5e9]/10 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
      <div className="absolute -bottom-40 right-10 w-[350px] h-[350px] bg-[#0284c7]/5 rounded-full blur-3xl pointer-events-none animate-pulse" style={{ animationDuration: '10s' }} />

      <div className="relative mx-auto w-[90%] max-w-7xl py-20 lg:py-24 z-10 text-left">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-10">

          {/* Logo & Description */}
          <div className="col-span-2 lg:col-span-4">
            <div className="flex items-center">
              <img
                src={logoImg}
                alt="Steam On Wheels Logo"
                className="h-20 w-auto object-contain"
              />
            </div>

            <p className="mt-6 text-sm text-slate-400 leading-relaxed max-w-sm font-semibold">
              Premium exterior cleaning and pressure washing for residential and commercial properties in North Carolina. Fully licensed, insured, and obsessed with quality.
            </p>

            {/* Socials row */}
            <div className="mt-8 flex gap-3 select-none">
              {socials.map(({ icon: Icon, href, label }, i) => (
                <motion.a
                  key={i}
                  whileHover={{ y: -4, scale: 1.05, backgroundColor: "rgba(14, 165, 233, 0.15)", borderColor: "rgba(14, 165, 233, 0.3)" }}
                  whileTap={{ scale: 0.95 }}
                  href={href}
                  aria-label={label}
                  className="grid place-items-center h-10 w-10 rounded-xl bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-colors shadow-sm"
                >
                  <Icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>

            {/* Trust Badges */}
            <div className="mt-8 flex flex-wrap gap-2 select-none">
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                15+ Years Experience
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Licensed &amp; Insured
              </div>
              <div className="flex items-center gap-2 bg-slate-900/40 border border-slate-800/80 rounded-xl px-3 py-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Mooresville, NC &amp; Surrounds
              </div>
            </div>
          </div>

          {/* Quick Links Column */}
          <Col title="Quick Links" items={quickLinks} />

          {/* Services Column */}
          <Col title="Our Services" items={servicesLinks} />

          {/* Contact & Hours Column (4-span grid layout subsplit) */}
          <div className="col-span-2 lg:col-span-4 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-6">

            {/* Contact Details */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                Contact Us
              </div>
              <ul className="space-y-4.5 text-sm">
                <li>
                  <a
                    href="tel:+17045169509"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9]/10 group-hover:border-[#0ea5e9]/30 transition-all shrink-0">
                      <Phone className="h-4 w-4 group-hover:rotate-12 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Phone</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5">(704) 516-9509</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:motivate71@yahoo.com"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9]/10 group-hover:border-[#0ea5e9]/30 transition-all shrink-0">
                      <Mail className="h-4 w-4 group-hover:scale-110 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Email</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5 text-wrap break-all">motivate71@yahoo.com</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a
                    href="https://maps.google.com/?q=107+Kase+Ct,+Mooresville,+NC"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                  >
                    <div className="h-9 w-9 rounded-lg bg-slate-900/50 border border-slate-800 flex items-center justify-center text-[#0ea5e9] group-hover:bg-[#0ea5e9]/10 group-hover:border-[#0ea5e9]/30 transition-all shrink-0">
                      <MapPin className="h-4 w-4 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase font-bold text-slate-500 tracking-wider">Office</span>
                      <span className="font-semibold text-white tracking-tight mt-0.5 leading-snug">
                        107 Kase Ct<br />
                        Mooresville, NC
                      </span>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            {/* Hours Info */}
            <div>
              <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
                Service Hours
              </div>
              <div className="bg-slate-900/30 border border-slate-800/80 rounded-2xl p-5">
                <span className="text-[#0ea5e9] font-black uppercase tracking-wider block mb-3 text-[10px] flex items-center gap-2">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
                  </span>
                  Emergency Line Active
                </span>
                <p className="text-xs text-slate-400 leading-relaxed font-semibold">
                  We are available 24/7 for emergency dispatches across Lake Norman &amp; Mooresville.<br /><br />
                  <span className="text-white block font-bold mb-1">Standard Office:</span>
                  Mon–Sat: 8am–8pm<br />
                  Sun: Closed
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Copy/Trademark Row with Back to Top trigger */}
        <div className="mt-16 pt-8 border-t border-slate-900 flex flex-wrap items-center justify-between gap-6 mb-[-60px]">
          <p className="text-xs text-slate-500 font-semibold">
            © {new Date().getFullYear()} Steam On Wheels. All rights reserved. Design By StellR IT LLC
          </p>

          <div className="flex items-center gap-6">
            <p className="text-xs text-slate-500 font-semibold hidden sm:block">
              Licensed, Bonded &amp; Insured
            </p>

            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs text-slate-400 hover:text-white transition-colors font-bold flex items-center gap-2 cursor-pointer select-none"
            >
              <span>Back to Top</span>
              <ArrowRight className="h-4 w-4 -rotate-90 text-[#0ea5e9]" />
            </motion.button>
          </div>
        </div>

      </div>
    </footer>
  );
}

function Col({ title, items }: { title: string; items: { label: string; href: string }[] }) {
  return (
    <div className="col-span-1 lg:col-span-2">
      <div className="text-xs uppercase tracking-widest text-slate-400 font-bold mb-6">
        {title}
      </div>
      <ul className="space-y-4">
        {items.map(({ label, href }) => (
          <li key={label}>
            <motion.a
              whileHover={{ x: 4, color: "#0ea5e9" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href={href}
              className="text-sm text-slate-400 hover:text-white transition-colors block font-semibold"
            >
              {label}
            </motion.a>
          </li>
        ))}
      </ul>
    </div>
  );
}
