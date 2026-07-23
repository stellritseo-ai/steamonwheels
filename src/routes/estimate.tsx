import { createFileRoute } from "@tanstack/react-router";
import { EstimatePage } from "@/components/site/EstimatePage";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { title: "Free Pressure Washing Estimate Mooresville NC | Steam On Wheels" },
      {
        name: "description",
        content:
          "Fast, fair & 100% free no-obligation estimates on pressure washing, soft roof cleaning, siding wash & painting in Mooresville, NC & 40-mile radius. Call David Hudson: (704) 516-9509.",
      },
      { name: "keywords", content: "Free Pressure Washing Estimate, Pressure Washing Quote Mooresville NC, Affordable Pressure Washing NC" },
      { property: "og:title", content: "Free Pressure Washing Estimate Mooresville NC | Steam On Wheels" },
      {
        property: "og:description",
        content:
          "Transparent pricing with no hidden fees or booking pressure. Call (704) 516-9509 or submit your quote request online.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/estimate" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/estimate" }],
  }),
  component: EstimateRoute,
});

function EstimateRoute() {
  return <EstimatePage />;
}
