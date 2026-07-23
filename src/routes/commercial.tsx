import { createFileRoute } from "@tanstack/react-router";
import { CommercialPage } from "@/components/site/CommercialPage";

export const Route = createFileRoute("/commercial")({
  head: () => ({
    meta: [
      { title: "Commercial Pressure Washing NC | Steam On Wheels Mooresville" },
      {
        name: "description",
        content:
          "Professional-grade commercial building washing, parking lot degreasing, storefront washing & warehouse maintenance in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Commercial Pressure Washing NC, Commercial Building Washing, Storefront Pressure Washing Mooresville, Commercial Parking Lot Cleaning" },
      { property: "og:title", content: "Commercial Pressure Washing NC | Steam On Wheels Mooresville" },
      {
        property: "og:description",
        content:
          "Elevate your business image with industrial hot-water power washing. Fully licensed, insured, COI available. Call David Hudson: (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/commercial" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/commercial" }],
  }),
  component: CommercialRoute,
});

function CommercialRoute() {
  return <CommercialPage />;
}
