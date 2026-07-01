import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import svcPressureWash from "@/assets/svc-pressure-wash.png";

const faqVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

const answerVariants = {
  collapsed: { height: 0, opacity: 0 },
  expanded: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const faqs = [
  {
    q: "What areas do you serve?",
    a: "We proudly serve the Lake Norman region and surrounding areas in North Carolina, including Mooresville, Cornelius, Huntersville, Denver, Hickory, Statesville, Lincolnton, and more. If you're within 50 miles of Mooresville, we've got you covered!"
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, absolutely! Steam On Wheels is fully licensed and carries comprehensive public liability insurance coverage for North Carolina to protect your property and ensure complete peace of mind during every project."
  },
  {
    q: "How do I get a quote, and is it really free?",
    a: "Getting a quote is 100% free and easy! You can call us, text us, or fill out our online Free Estimate form. We will assess your property's exterior cleaning needs and provide a detailed, no-obligation estimate with transparent pricing."
  },
  {
    q: "What is your availability? Do you offer emergency services?",
    a: "We offer flexible scheduling Monday through Saturday to accommodate your routine. For commercial properties or urgent needs, we also provide emergency and after-hours/overnight pressure washing services to minimize disruption to your business."
  },
  {
    q: "What sets Steam On Wheels apart from other cleaning services?",
    a: "Three key things: Experience, Values, and Personal Service. With over 15 years in the business, owner David Hudson brings unmatched expertise. As a Christian-owned company, we operate with integrity, honesty, and respect for your property. Finally, you work directly with the owner, ensuring meticulous quality control and a commitment to your 100% satisfaction on every job, whether residential or commercial."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-[100px] bg-[#fafbfc] border-b border-slate-100 overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="w-full text-left flex flex-col items-start"
          >
            {/* Eyebrow Badge with Pulse */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#0ea5e9]/20 bg-[#0ea5e9]/5 text-[#0ea5e9] text-[10px] md:text-[11px] font-black uppercase tracking-widest mb-6 shadow-sm select-none">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0ea5e9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0ea5e9]"></span>
              </span>
              <span>FAQ</span>
            </div>

            {/* Heading */}
            <h2 className="leading-[1.2] text-neutral-900 tracking-tight font-extrabold text-[28px] sm:text-[36px] lg:text-[42px] capitalize mb-[12px]">
              Frequently Asked <span className="text-[#0ea5e9]">Questions</span>
            </h2>

            {/* Description */}
            <p className="text-[14px] text-neutral-600 leading-[1.7] max-w-[560px] mb-7 font-medium">
              Have questions about our exterior cleaning services? We’ve answered the most common ones below. If you don’t see your question here, give owner David a call—he’s happy to help guide you.
            </p>

            {/* Image */}
            <div className="w-full aspect-[16/7] rounded-xl overflow-hidden border border-neutral-200/60 shadow-[0_2px_12px_rgba(0,0,0,0.06)] group">
              <img
                src={svcPressureWash}
                alt="Pressure washing service"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Right Column: Accordion Container */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="bg-[#f5f4f1] rounded-2xl p-5 lg:p-7 border border-[#e8e6e0] shadow-[0_4px_24px_rgba(0,0,0,0.03)] animate-fade-in"
          >
            <div className="flex flex-col gap-2.5">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <motion.div
                    key={index}
                    custom={index}
                    variants={faqVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className={`w-full rounded-xl overflow-hidden transition-shadow duration-300 ${isOpen
                      ? "border border-[#e2dfd8] shadow-[0_2px_10px_rgba(0,0,0,0.05)]"
                      : "border border-[#ebebeb] bg-white shadow-[0_1px_4px_rgba(0,0,0,0.03)] hover:border-neutral-300/70 hover:shadow-[0_2px_8px_rgba(0,0,0,0.05)]"
                      }`}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className={`w-full text-left flex items-center justify-between px-5 py-[18px] transition-all duration-300 cursor-pointer select-none ${isOpen
                        ? "bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] text-white font-extrabold"
                        : "bg-white text-neutral-900 font-semibold hover:text-[#0284c7] active:bg-neutral-50"
                        }`}
                      aria-expanded={isOpen}
                    >
                      <span className={`text-[13.5px] sm:text-[14.5px] leading-snug pr-4 ${isOpen ? "text-white" : "text-neutral-800"}`}>
                        Q: {faq.q}
                      </span>
                      <ChevronDown
                        className={`w-[17px] h-[17px] shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 text-white" : "text-neutral-400"
                          }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          key="answer"
                          variants={answerVariants}
                          initial="collapsed"
                          animate="expanded"
                          exit="collapsed"
                          className="overflow-hidden bg-white"
                        >
                          {/* Thin separator between question header and answer */}
                          <div className="h-px bg-[#f0ede6] mx-5" />
                          <div className="px-5 py-4">
                            <p className="text-[13px] text-neutral-700 leading-[1.75] font-medium">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
