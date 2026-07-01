import { useRef } from "react";
import { Star, Check } from "lucide-react";

interface Review {
  text: string;
  name: string;
  role: string;
  rating: number;
  initials: string;
  avatarColor: string;
}

const reviews: Review[] = [
  {
    name: "Sarah Mitchell",
    role: "Homeowner · Mooresville",
    text: "Absolutely incredible. Our 15-year-old driveway and brick siding look brand new. Punctual, professional, and very respectful of our garden.",
    initials: "SM",
    rating: 5,
    avatarColor: "#0ea5e9",
  },
  {
    name: "James O'Connor",
    role: "Property Manager",
    text: "We manage 40+ properties in the Lake Norman region and Steam On Wheels is the only pressure washing crew we trust. Consistent 5-star results every time.",
    initials: "JO",
    rating: 5,
    avatarColor: "#0284c7",
  },
  {
    name: "Priya Desai",
    role: "Homeowner · Cornelius",
    text: "From quote to final walkthrough — flawless. Eco-friendly cleaning products meant our plants were totally safe, and our deck looks stunning.",
    initials: "PD",
    rating: 5,
    avatarColor: "#4f46e5",
  },
  {
    name: "Michael Chen",
    role: "Restaurant Owner",
    text: "They cleaned our outdoor seating area and kitchen exterior grease traps overnight. Customers complimented the cleanliness. Worth every penny.",
    initials: "MC",
    rating: 5,
    avatarColor: "#0f766e",
  },
  {
    name: "Rebecca Lawrence",
    role: "Homeowner · Huntersville",
    text: "Best house project decision we made all year. The before/after on our roof cedar shingles was shocking. Highly recommend their soft wash!",
    initials: "RL",
    rating: 5,
    avatarColor: "#7c3aed",
  },
  {
    name: "David Patel",
    role: "Homeowner · Denver, NC",
    text: "Professional crew that treats your house like their own. Punctual, answered all my questions, and cleaned up everything before leaving.",
    initials: "DP",
    rating: 5,
    avatarColor: "#BE185D",
  },
  {
    name: "Amanda K.",
    role: "Homeowner · Statesville",
    text: "Very responsive customer service. They fit me in within 48 hours and did an amazing job cleaning rust stains off our concrete patio.",
    initials: "AK",
    rating: 5,
    avatarColor: "#1e3a8a",
  },
  {
    name: "Robert T.",
    role: "Business Owner",
    text: "Excellent commercial storefront cleaning. Removed all dirt, bubblegum, and graffiti. Our entryway looks extremely welcoming now.",
    initials: "RT",
    rating: 5,
    avatarColor: "#B45309",
  },
  {
    name: "Jessica Lopez",
    role: "Homeowner · Medford",
    text: "Super happy with the gutter and roof washing service! They cleaned all debris and left our gutters flushing perfectly. Great rates too.",
    initials: "JL",
    rating: 5,
    avatarColor: "#059669",
  },
  {
    name: "Thomas D.",
    role: "Property Owner · Lake Norman",
    text: "We hired them for a full estate wash: roof, siding, fence, and driveway. Exceptional thoroughness and absolute professional grade machinery.",
    initials: "TD",
    rating: 5,
    avatarColor: "#312e81",
  }
];

const row1 = reviews.slice(0, 5);
const row2 = reviews.slice(5, 10);

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star
          key={i}
          className="w-3.5 h-3.5 fill-[#FBBF24] text-[#FBBF24]"
        />
      ))}
    </div>
  );
}

function TestimonialCard({ review }: { review: Review }) {
  return (
    <div className="relative flex-shrink-0 w-[340px] sm:w-[380px] mx-3 bg-white border border-slate-200 shadow-[0_2px_20px_rgba(0,0,0,0.06)] rounded-2xl p-6 flex flex-col gap-4 group hover:shadow-[0_6px_30px_rgba(0,0,0,0.10)] hover:border-slate-300 transition-all duration-300">
      {/* Top Section: Stars & Google/Verified badges */}
      <div className="flex items-center justify-between">
        <StarRating count={review.rating} />

        <div className="flex items-center gap-1.5 select-none">
          {/* Google text logo */}
          <span className="flex items-center text-[10px] font-extrabold bg-slate-50 border border-slate-200/60 px-2 py-0.5 rounded-md">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </span>
          {/* Verified check badge */}
          <span className="inline-flex items-center gap-0.5 text-[9px] font-bold text-emerald-600 bg-emerald-50 border border-emerald-100/80 px-2 py-0.5 rounded-full uppercase tracking-wider">
            <Check className="w-2.5 h-2.5 stroke-[4px]" />
            Verified
          </span>
        </div>
      </div>

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed font-medium flex-1">
        "{review.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
        <div
          className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
          style={{ backgroundColor: review.avatarColor }}
        >
          {review.initials}
        </div>
        <div>
          <p className="text-slate-900 font-semibold text-sm leading-tight">
            {review.name}
          </p>
          <p className="text-slate-400 text-xs mt-0.5">{review.role}</p>
        </div>
      </div>
    </div>
  );
}

function MarqueeRow({
  items,
  direction = "left",
}: {
  items: Review[];
  direction?: "left" | "right";
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const duplicated = [...items, ...items, ...items];

  const animClass =
    direction === "left" ? "marquee-track-left" : "marquee-track-right";

  return (
    <div
      className="overflow-hidden relative group/row"
      onMouseEnter={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "paused";
        }
      }}
      onMouseLeave={() => {
        if (trackRef.current) {
          trackRef.current.style.animationPlayState = "running";
        }
      }}
    >
      {/* Fade edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-[#F8FAFC] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-[#F8FAFC] to-transparent" />

      <div ref={trackRef} className={`flex ${animClass}`}>
        {duplicated.map((review, i) => (
          <TestimonialCard key={i} review={review} />
        ))}
      </div>
    </div>
  );
}

export function Testimonials() {
  return (
    <section
      id="reviews"
      className="relative py-[100px] bg-[#F8FAFC] overflow-hidden"
    >
      {/* Background glow accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[400px] rounded-full bg-sky-200/40 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-1/4 w-[400px] h-[300px] rounded-full bg-indigo-200/30 blur-[100px]" />

      {/* Section Header */}
      <div className="mx-auto w-[90%] max-w-7xl text-center mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 text-xs font-semibold text-slate-500 uppercase tracking-widest mb-5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
          Client Reviews
        </div>

        <h2 className="text-[40px] font-extrabold text-slate-900 tracking-tight leading-tight capitalize -mt-[5px] mb-[10px]">
          Trusted by{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5e9] to-[#0284c7]">
            Thousands
          </span>{" "}
          of customers
        </h2>

        <p className="mx-auto max-w-xl text-slate-500 text-sm sm:text-base leading-relaxed -mb-[35px] font-medium">
          Real experiences from real clients across Mooresville, Cornelius &amp; the Lake Norman region. See
          why homeowners and businesses choose us every time.
        </p>
      </div>

      {/* Marquee Rows */}
      <div className="relative z-10 flex flex-col gap-5">
        <MarqueeRow items={row1} direction="left" />
        <MarqueeRow items={row2} direction="right" />
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes marquee-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        @keyframes marquee-right {
          0%   { transform: translateX(-33.3333%); }
          100% { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 30s linear infinite;
          width: max-content;
        }
        .marquee-track-right {
          animation: marquee-right 30s linear infinite;
          width: max-content;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover,
        .group\\/row:hover .marquee-track-left,
        .group\\/row:hover .marquee-track-right {
          animation-play-state: paused !important;
        }
      `}</style>
    </section>
  );
}
