import { createFileRoute } from "@tanstack/react-router";
import { ResidentialPage } from "@/components/site/ResidentialPage";

export const Route = createFileRoute("/residential")({
  head: () => ({
    meta: [
      { title: "Residential House Washing Mooresville NC | Steam On Wheels" },
      {
        name: "description",
        content:
          "Top-rated residential house washing, soft wash roof cleaning, driveway concrete degreasing & exterior painting in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Residential House Washing NC, House Washing Mooresville NC, Soft Wash House Cleaning Near Me, Residential Exterior Cleaning Lake Norman" },
      { property: "og:title", content: "Residential House Washing Mooresville NC | Steam On Wheels" },
      {
        property: "og:description",
        content:
          "Protect and beautify your Mooresville home with gentle soft-wash exterior cleaning by Steam On Wheels. 15+ years experience, licensed & insured.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/residential" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/residential" }],
  }),
  component: ResidentialRoute,
});

function ResidentialRoute() {
  return <ResidentialPage />;
}
