import { createFileRoute } from "@tanstack/react-router";
import { PaintingServicePage } from "@/components/site/PaintingServicePage";

export const Route = createFileRoute("/painting-service")({
  head: () => ({
    meta: [
      { title: "Exterior Painting Services Mooresville NC | Steam On Wheels" },
      {
        name: "description",
        content:
          "Refresh & protect your property with expert exterior painting. Full house repainting, trim accenting, deck staining & power wash prep in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Exterior Painting Services Mooresville, House Painting Lake Norman, Exterior Painter Near Me, Power Wash Paint Prep NC" },
      { property: "og:title", content: "Exterior Painting Services Mooresville NC | Steam On Wheels" },
      {
        property: "og:description",
        content:
          "Cleaning-first surface preparation for paint jobs that last a decade. Owner-led quality by David Hudson. Call (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/painting-service" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/painting-service" }],
  }),
  component: PaintingServiceRoute,
});

function PaintingServiceRoute() {
  return <PaintingServicePage />;
}
