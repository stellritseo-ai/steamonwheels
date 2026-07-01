import { Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";
import serviceImg from "@/assets/service-house.jpg";

export function About() {
  return (
    <section id="about" className="relative py-[60px] overflow-hidden bg-slate-50/50">
      {/* Subtle Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-sky-500/5 rounded-full blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
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
              style={{
                fontWeight: 800,
                marginBottom: "-17px",
                marginTop: "15px"
              }}
            >
              15+ Years of{" "}
              <span className="text-[#0ea5e9]" style={{ fontWeight: 800 }}>
                Exterior Cleaning Expertise
              </span>{" "}
              – For Every Home and Business.
            </h2>
            
            {/* Paragraph Description */}
            <p 
              className="mt-6 font-normal"
              style={{
                fontSize: "16px",
                lineHeight: "32px",
                color: "#000",
                fontWeight: 400,
                marginBottom: "-10px"
              }}
            >
              Providing Top-Tier Exterior Cleaning Services for Homeowners &amp; Business Owners in North Carolina. Backed by 15+ years of experience, we bring showroom-grade shine to your siding, roofs, concrete, and decks. Fully Licensed, Insured, and Bonded — handling everything from soft washing and roof cleaning to high-pressure concrete restoration. Whether you're a homeowner, a property manager, or a business owner, we treat your job with the same level of care, respect, and professionalism. No mess is too big. No job is too small. Let us get your property shining like new.
            </p>
            
            {/* Info Cards Row */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {/* Card 1: Phone */}
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

              {/* Card 2: Email */}
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

            {/* Buttons Row */}
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

          {/* Right Column: Graphics layout mirroring the upload image structure */}
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

            {/* Main Arch Container (incorporating welcome video mask with float animation) */}
            <motion.div 
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative h-[480px] w-[320px] rounded-t-full rounded-b-[4.5rem] overflow-hidden border-8 border-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.15)] bg-slate-100 z-10 group"
            >
              <video
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://res.cloudinary.com/m3oqblqp/video/upload/v1782931767/welcome_vy5flk.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent pointer-events-none" />
            </motion.div>

            {/* Small Overlapping Circular Image (Bottom Right with out-of-sync float animation) */}
            <motion.div 
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-[210px] w-[210px] rounded-full overflow-hidden border-8 border-white shadow-[0_20px_45px_-10px_rgba(0,0,0,0.2)] absolute -bottom-4 right-2 lg:-right-4 z-20 bg-slate-200"
            >
              <img
                src={serviceImg}
                alt="Steam On Wheels House Washing"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
              />
            </motion.div>

            {/* Overlapping Logo-Colored Badge (Top Right with out-of-sync float animation) */}
            <motion.div 
              animate={{ y: [0, -12, 0] }}
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="h-[140px] w-[140px] rounded-full bg-[#0ea5e9] border-8 border-white shadow-[0_15px_35px_-8px_rgba(14,165,233,0.35)] absolute top-8 right-2 lg:-right-10 z-30 flex flex-col items-center justify-center text-center p-2 hover:scale-105 transition-transform duration-300 select-none cursor-pointer"
            >
              <span className="text-3xl font-black text-white leading-none">15+</span>
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest mt-1">Years Of</span>
              <span className="text-[10px] font-bold text-white/90 uppercase tracking-widest leading-none">Experience</span>
            </motion.div>

            {/* Owner/Lead Technician Card (Bottom Left with premium glassmorphism) */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/95 backdrop-blur-md border border-slate-200/50 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] rounded-2xl p-4.5 flex items-center justify-between gap-4 absolute bottom-4 left-2 lg:-left-12 z-30 min-w-[285px] hover:translate-y-[-4px] transition-transform duration-300"
            >
              <div className="text-left">
                <p className="text-[8px] sm:text-[9px] font-bold text-slate-400 uppercase tracking-widest">OWNER / LEAD TECHNICIAN</p>
                <p className="text-sm font-extrabold text-slate-800 mt-0.5">Steam On Wheels</p>
              </div>
              <div className="shrink-0">
                <span className="text-[9px] font-black text-[#0ea5e9] bg-[#0ea5e9]/10 px-2.5 py-1.5 rounded-full uppercase tracking-wider shadow-sm">
                  15+ YRS EXP
                </span>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
