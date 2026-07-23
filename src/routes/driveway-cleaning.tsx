import { createFileRoute } from "@tanstack/react-router";
import { DrivewayCleaningPage } from "@/components/site/DrivewayCleaningPage";

export const Route = createFileRoute("/driveway-cleaning")({
  head: () => ({
    meta: [
      { title: "Driveway Pressure Washing NC | Steam On Wheels Mooresville" },
      {
        name: "description",
        content:
          "Transform your entryway with commercial hot-water pressure washing. Erase oil leaks, tire scuffs & red clay stains from driveways in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Driveway Pressure Washing, Driveway Cleaning Services, Oil Stain Removal Driveway, Driveway Pressure Cleaning Mooresville NC" },
      { property: "og:title", content: "Driveway Pressure Washing NC | Steam On Wheels Mooresville" },
      {
        property: "og:description",
        content:
          "200°F hot water stain degreasing for driveways, concrete & asphalt. 15+ years experience. Call David Hudson: (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/driveway-cleaning" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/driveway-cleaning" }],
  }),
  component: DrivewayCleaningRoute,
});

function DrivewayCleaningRoute() {
  return <DrivewayCleaningPage />;
}
