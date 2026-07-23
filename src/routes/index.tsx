import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { About } from "@/components/site/About";
import { WhyChooseUs } from "@/components/site/WhyChooseUs";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceArea } from "@/components/site/ServiceArea";
import { FAQ } from "@/components/site/FAQ";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
// import { Puppies } from "@/components/site/Puppies";
import { Partners } from "@/components/site/Partners";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pressure Washing Mooresville NC & Lake Norman | Steam On Wheels" },
      {
        name: "description",
        content:
          "Professional pressure washing, soft roof washing, house washing & concrete cleaning in Mooresville, Hickory, Statesville & Lake Norman NC. 15+ years experience, licensed & insured. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Pressure Washing Mooresville NC, Pressure Washing NC, House Washing Lake Norman, Soft Wash Roof Cleaning Huntersville NC, Driveway Cleaning Cornelius NC, Commercial Power Washing Hickory NC, Pressure Washing Statesville NC, Concrete Degreasing Denver NC, Exterior Painting Charlotte NC, Pressure Washing Near Me, Pressure Washer Catawba County, Pressure Washing Iredell County, Steam On Wheels" },
      { property: "og:title", content: "Pressure Washing Mooresville NC & Lake Norman | Steam On Wheels" },
      {
        property: "og:description",
        content:
          "Showroom-grade exterior cleaning for residential & commercial properties in NC. 40-mile service radius. 100% 5-star reviews.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Partners />
        <About />
        <Services />
        {/* <Puppies /> */}
        <Process />
        <WhyChooseUs />
        <BeforeAfter />
        <Testimonials />
        <ServiceArea />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
