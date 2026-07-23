import { createFileRoute } from "@tanstack/react-router";
import { RoofWashingPage } from "@/components/site/RoofWashingPage";

export const Route = createFileRoute("/roof-washing")({
  head: () => ({
    meta: [
      { title: "Roof Soft Washing Near Me | Roof Cleaning Lake Norman & Mooresville NC" },
      {
        name: "description",
        content:
          "Safely remove black algae streaks (Gloeocapsa magma), moss & lichen from shingles with 100% shingle-safe soft wash roof cleaning in Mooresville & Lake Norman NC. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Roof Soft Washing Near Me, Roof Cleaning Lake Norman, Roof Cleaning Charlotte NC, Shingle Algae Removal, Soft Wash Roof Cleaning" },
      { property: "og:title", content: "Roof Soft Washing Near Me | Roof Cleaning Lake Norman & Mooresville NC" },
      {
        property: "og:description",
        content:
          "Protect your roof investment with 100% shingle-safe soft washing. Zero high-pressure damage. Call David Hudson: (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/roof-washing" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/roof-washing" }],
  }),
  component: RoofWashingRoute,
});

function RoofWashingRoute() {
  return <RoofWashingPage />;
}
