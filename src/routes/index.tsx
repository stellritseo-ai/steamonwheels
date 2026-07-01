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
import { Puppies } from "@/components/site/Puppies";
import { Partners } from "@/components/site/Partners";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SteamOnWheels — Premium Exterior Cleaning & Pressure Washing" },
      {
        name: "description",
        content:
          "Licensed, insured, and obsessed with quality. Premium soft-wash and pressure washing services for homes and businesses. 15+ years experience. Free estimates.",
      },
      { property: "og:title", content: "SteamOnWheels — Premium Exterior Cleaning" },
      {
        property: "og:description",
        content:
          "Professional pressure washing that restores your property. 3,000+ happy customers, 5-star rated, eco-friendly.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
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
        <Puppies />
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
