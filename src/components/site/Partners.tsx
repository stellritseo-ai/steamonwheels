import logo1 from "@/assets/logos/slogo1-1.png";
import logo2 from "@/assets/logos/slogo2.png";
import logo3 from "@/assets/logos/slogo3.png";
import logo4 from "@/assets/logos/slogo4.png";

const logos = [logo1, logo2, logo3, logo4];

export function Partners() {
  // Quadruple the list of logos to guarantee it spans wider than any viewport width
  const duplicatedLogos = [...logos, ...logos, ...logos, ...logos, ...logos, ...logos];

  return (
    <section className="bg-slate-50/50 py-5 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-6">
          Licensed, Certified & Highly Rated Contractors
        </p>
        
        {/* Marquee Slider Container */}
        <div className="relative flex overflow-hidden w-full before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-[#fafbfc] before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-[#fafbfc] after:to-transparent after:content-['']">
          <div className="flex gap-16 items-center animate-marquee hover-pause w-max">
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex justify-center items-center h-12 w-28 shrink-0">
                <img
                  src={logo}
                  alt={`Certification Logo ${index + 1}`}
                  className="max-h-full max-w-full object-contain filter grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer mix-blend-multiply"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
