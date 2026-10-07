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
      { title: "Pressure Washing Mooresville NC | Steam On Wheels" },
      {
        name: "description",
        content:
          "Professional pressure washing, soft washing, roof cleaning, house washing & commercial exterior cleaning in Mooresville, NC and Lake Norman. Call Steam On Wheels for a free estimate.",
      },
      { name: "keywords", content: "Pressure Washing Mooresville NC, Pressure Washing Lake Norman NC, Power Washing Mooresville NC, Soft Washing Mooresville NC, House Washing Mooresville NC, Roof Cleaning Mooresville NC, Concrete Cleaning Mooresville NC, Commercial Pressure Washing Mooresville NC, Steam On Wheels" },
      { property: "og:title", content: "Pressure Washing Mooresville NC | Steam On Wheels" },
      {
        property: "og:description",
        content:
          "Professional pressure washing, soft washing, roof cleaning, house washing & commercial exterior cleaning in Mooresville, NC and Lake Norman. 50-mile service radius. Call (704) 516-9509.",
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
