import { createFileRoute } from "@tanstack/react-router";
import { ConcreteCleaningPage } from "@/components/site/ConcreteCleaningPage";

export const Route = createFileRoute("/concrete-cleaning")({
  head: () => ({
    meta: [
      { title: "Concrete Cleaning Mooresville NC | Steam On Wheels" },
      {
        name: "description",
        content:
          "Restore driveways, garage floors, sidewalks & patios with commercial hot-water pressure washing & oil stain removal by Steam On Wheels in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Concrete Cleaning Mooresville NC, Concrete Cleaning Experts, Driveway Cleaning NC, Patio Pressure Washing, Sidewalk Cleaning Lake Norman" },
      { property: "og:title", content: "Concrete Cleaning Mooresville NC | Steam On Wheels" },
      {
        property: "og:description",
        content:
          "Erase stubborn engine oil stains, tire scuffs, and algae from concrete surfaces with hot-water pressure washing. Call David Hudson: (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/concrete-cleaning" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/concrete-cleaning" }],
  }),
  component: ConcreteCleaningRoute,
});

function ConcreteCleaningRoute() {
  return <ConcreteCleaningPage />;
}
