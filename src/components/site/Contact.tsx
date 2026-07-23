import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const TinyDropletIcon = () => (
  <svg className="w-3.5 h-3.5 text-[#0ea5e9] fill-[#0ea5e9] shrink-0" viewBox="0 0 24 24">
    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
  </svg>
);

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      await fetch("https://formsubmit.co/ajax/eva@stellrit.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          ...data,
          _subject: `New Steam On Wheels Inquiry from ${data.name || 'Website Visitor'}`,
          _template: "table",
        }),
      });
      setSubmitted(true);
    } catch (err) {
      console.error("FormSubmit Error:", err);
      setSubmitted(true); // fall back to thank you message
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-[100px] bg-white border-b border-slate-100 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />
      <div className="mx-auto w-[90%] max-w-7xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-flex items-center gap-2 bg-[#0ea5e9]/10 border border-[#0ea5e9]/20 text-[#0ea5e9] rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider mb-5">
            <TinyDropletIcon /> Get In Touch <TinyDropletIcon />
          </span>
          <h2 className="text-[27px] lg:text-[40px] font-extrabold text-[#0F172A] leading-tight mt-[-10px] mb-[5px] tracking-tight capitalize">
            Get your <span className="text-[#0ea5e9]">free estimate</span> today.
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-medium leading-relaxed max-w-lg mx-auto">
            Tell us about your exterior cleaning needs or project details — replies within one hour.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left: Dispatch Office Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0284c7] text-white p-8 lg:p-10 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
          >
            <div className="absolute inset-0 bg-grid opacity-10 mix-blend-overlay pointer-events-none" />
            <div className="absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-[#0ea5e9]/25 blur-3xl pointer-events-none" />

            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-bold uppercase tracking-widest mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Dispatch Live
              </span>
              <h3 className="text-2xl font-display font-black uppercase tracking-wider">
                Contact Details
              </h3>
              <p className="mt-3 text-sm text-white/80 font-medium leading-relaxed">
                We stand ready for standard quotes and urgent exterior cleaning mitigation.
              </p>

              <ul className="mt-8 space-y-6">
                <Item
                  icon={Phone}
                  label="Direct Line"
                  value="(704) 516-9509"
                  href="tel:+17045169509"
                  isCall
                />
                <Item
                  icon={Mail}
                  label="Corporate Email"
                  value="motivate71@yahoo.com"
                  href="mailto:motivate71@yahoo.com"
                />
                <Item
                  icon={MapPin}
                  label="Corporate Office"
                  value="107 Kase Ct, Mooresville, NC"
                />
                <Item
                  icon={Clock}
                  label="Operational Hours"
                  value="Mon-Sat: 8am - 8pm | 24/7 Emergency Services"
                />
              </ul>
            </div>

            <div className="relative mt-10 pt-6 border-t border-white/10 flex items-center gap-3">
              <ShieldCheck className="h-5 w-5 text-[#0ea5e9] shrink-0" />
              <span className="text-[10px] uppercase font-bold tracking-wider text-white/70">
                Licensed &amp; Insured Exterior Cleaning Contractor
              </span>
            </div>
          </motion.div>

          {/* Right: Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 150, damping: 20 }}
            className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 relative flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="grid place-items-center text-center py-16"
                >
                  <div className="grid place-items-center h-16 w-16 rounded-full bg-emerald-100 text-emerald-600 mb-5 shadow-sm">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h3 className="text-2xl font-display font-black text-[#0F172A] uppercase tracking-wider">
                    Request Received
                  </h3>
                  <p className="mt-3 text-sm text-slate-500 font-semibold max-w-sm">
                    Thank you! A Steam On Wheels dispatch specialist will contact you in under 60 minutes.
                  </p>
                </motion.div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6 text-left"
                >
                  <div className="grid sm:grid-cols-2 gap-5">
                    <Field
                      label="Full Name"
                      name="name"
                      placeholder="Jane Doe"
                      required
                    />
                    <Field
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      placeholder="(704) 516-9509"
                      required
                    />
                    <Field
                      label="Email Address"
                      name="email"
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="sm:col-span-2"
                    />

                    <div className="sm:col-span-2">
                      <Label>Service Needed</Label>
                      <select
                        name="service"
                        required
                        className="mt-2.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] focus:bg-white transition-all duration-300 cursor-pointer"
                      >
                        <option value="">Select service needed...</option>
                        <option>Pressure Washing</option>
                        <option>Soft Washing</option>
                        <option>Roof Cleaning</option>
                        <option>Gutter Cleaning</option>
                        <option>Concrete &amp; Driveway Cleaning</option>
                        <option>Deck &amp; Fence Cleaning</option>
                        <option>Window Cleaning</option>
                        <option>Exterior Painting Services</option>
                        <option>Other Service</option>
                      </select>
                    </div>

                    <div className="sm:col-span-2">
                      <Label>Project Scope / Problem Description</Label>
                      <textarea
                        name="message"
                        rows={4}
                        placeholder="Describe the surfaces, siding type, gutter issues, or scheduling needs..."
                        className="mt-2.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] focus:bg-white transition-all duration-300 resize-none"
                      />
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-[#0ea5e9] hover:bg-[#0284c7] px-6 py-4.5 text-xs font-bold uppercase tracking-wider text-white shadow-[0_8px_24px_-4px_rgba(14,165,233,0.4)] hover:brightness-110 cursor-pointer transition-all duration-300 disabled:opacity-50"
                  >
                    <span>{loading ? "Sending Request..." : "Send Service Request"}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </motion.button>

                  <p className="text-center text-[10px] text-slate-400 font-semibold">
                    We secure your data. Info only used to dispatch technician updates.
                  </p>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Item({
  icon: Icon,
  label,
  value,
  href,
  isCall,
}: {
  icon: any;
  label: string;
  value: string;
  href?: string;
  isCall?: boolean;
}) {
  const inner = (
    <div className="flex items-start gap-4">
      <motion.div
        whileHover={{ scale: 1.05 }}
        className={`grid place-items-center h-10 w-10 rounded-xl text-white shrink-0 transition-all duration-300 ${
          isCall 
            ? "bg-[#0ea5e9] shadow-[0_0_12px_rgba(14,165,233,0.3)]" 
            : "bg-white/10 border border-white/10 hover:bg-white/15"
        }`}
      >
        <Icon className="h-5 w-5" />
      </motion.div>
      <div className="text-left">
        <div className="text-[9px] uppercase tracking-wider text-white/70 font-bold">
          {label}
        </div>
        <div
          className={`font-display font-bold leading-tight ${isCall ? "text-lg text-white" : "text-sm text-white/95"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
  return href ? (
    <li>
      <motion.a
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 350, damping: 20 }}
        href={href}
        className="block hover:opacity-90 transition-opacity"
      >
        {inner}
      </motion.a>
    </li>
  ) : (
    <li>{inner}</li>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[10px] font-bold uppercase tracking-wider text-slate-400">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
  className = "",
}: any) {
  return (
    <div className={className}>
      <Label>{label}</Label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="mt-2.5 w-full rounded-xl border border-slate-200/80 bg-slate-50/50 px-4 py-3.5 text-xs font-semibold text-slate-600 focus:outline-none focus:ring-4 focus:ring-[#0ea5e9]/10 focus:border-[#0ea5e9] focus:bg-white transition-all duration-300"
      />
    </div>
  );
}
