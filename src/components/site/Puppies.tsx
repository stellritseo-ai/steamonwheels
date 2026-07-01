import { Heart } from "lucide-react";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import AutoScroll from "embla-carousel-auto-scroll";
import puppy1 from "@/assets/puppy-1.png";
import puppy2 from "@/assets/puppy-2.png";
import puppy3 from "@/assets/puppy-3.png";
import puppy4 from "@/assets/puppy-4.png";

const puppiesList = [
  {
    name: "puppy1",
    img: puppy1,
  },
  {
    name: "puppy2",
    img: puppy2,
  },
  {
    name: "puppy3",
    img: puppy3,
  },
  {
    name: "puppy4",
    img: puppy4,
  }
];

export function Puppies() {
  // Duplicated list of puppies to support smooth infinite loop scrolling
  const slidePuppies = [
    ...puppiesList,
    ...puppiesList,
    ...puppiesList,
    ...puppiesList,
  ];

  return (
    <section id="puppies" className="relative py-[60px] overflow-hidden bg-gradient-soft">
      {/* Background elements */}
      <div className="absolute -left-20 top-40 h-80 w-80 rounded-full bg-rose-500/5 blur-3xl animate-blob" />
      <div className="absolute -right-20 bottom-40 h-80 w-80 rounded-full bg-primary/10 blur-3xl animate-blob" style={{ animationDelay: "4s" }} />

      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-rose-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-rose-500 border border-rose-500/15">
            <Heart className="h-3.5 w-3.5 fill-current" />
            Our Breeding
          </span>
          <h2
            className="font-extrabold tracking-tight text-foreground leading-tight"
            style={{ fontSize: "37px", marginTop: "10px", marginBottom: "-12px" }}
          >
            Piedmont <span className="gradient-text">Bully Kennel Since 2018</span>
          </h2>
          <p className="mt-5 text-lg text-muted-foreground leading-relaxed">
            You’ve just done something incredible—you’ve opened your heart and home to a loyal companion. Everyone here at Piedmont Bully Kennel, where we’ve been dedicated to the breed since 2018, is overjoyed for you and your new dog.
          </p>
        </div>

        {/* Carousel Slider with Infinite Smooth AutoScroll (pauses on hover) */}
        <div className="mt-8 relative">
          <Carousel
            plugins={[
              AutoScroll({
                speed: 0.8,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
                stopOnFocusIn: true,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full relative"
          >
            <CarouselContent className="-ml-5 transform-gpu" style={{ willChange: "transform" }}>
              {slidePuppies.map((pup, i) => (
                <CarouselItem key={`${pup.name}-${i}`} className="pl-5 basis-full xs:basis-1/2 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <article
                    className="group relative overflow-hidden rounded-[10px] bg-card border border-border/80 shadow-soft transition-all duration-500 hover:-translate-y-2 hover:shadow-elegant transform-gpu"
                  >
                    {/* Card outline hover glow */}
                    <div className="absolute inset-0 rounded-[10px] bg-gradient-to-br from-rose-500/30 to-primary/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" style={{ padding: "1px" }}>
                      <div className="h-full w-full rounded-[10px] bg-card" />
                    </div>

                    <div className="relative">
                      {/* Image Container */}
                      <div className="aspect-square overflow-hidden bg-secondary">
                        <img
                          src={pup.img}
                          alt={pup.name}
                          loading="lazy"
                          width={500}
                          height={500}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 transform-gpu"
                          style={{ willChange: "transform" }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                        {/* Status Badge */}
                        <span className="absolute right-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold shadow-sm backdrop-blur-md bg-emerald-500/10 text-emerald-500 border-emerald-500/20">
                          Available
                        </span>
                      </div>
                    </div>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Call to action */}
        <div className="mt-10 text-center" style={{ marginTop: "40px" }}>
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:scale-[1.03]"
          >
            Inquire About Available Puppies
            <Heart className="h-4 w-4 fill-current transition-transform group-hover:scale-110 text-rose-300" />
          </a>
        </div>
      </div>
    </section>
  );
}
