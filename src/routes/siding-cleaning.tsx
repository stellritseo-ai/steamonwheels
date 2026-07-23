import { createFileRoute } from "@tanstack/react-router";
import { SidingCleaningPage } from "@/components/site/SidingCleaningPage";

export const Route = createFileRoute("/siding-cleaning")({
  head: () => ({
    meta: [
      { title: "House Washing Services Mooresville NC | Gentle Soft Wash Siding Cleaning" },
      {
        name: "description",
        content:
          "Safely clean vinyl siding, brick, stucco, hardie board & wood exteriors with damage-free soft wash technology in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "House Washing Services Mooresville NC, Siding Cleaning NC, Vinyl Siding Soft Wash, Mold Removal Siding, Exterior House Washing Lake Norman" },
      { property: "og:title", content: "House Washing Services Mooresville NC | Gentle Soft Wash Siding Cleaning" },
      {
        property: "og:description",
        content:
          "Reveal the true beauty of your home's exterior with soft-wash siding cleaning. 15+ years experience, licensed & insured. Call David Hudson: (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/siding-cleaning" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/siding-cleaning" }],
  }),
  component: SidingCleaningRoute,
});

function SidingCleaningRoute() {
  return <SidingCleaningPage />;
}
