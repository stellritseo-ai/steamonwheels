import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/AboutPage";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us | Steam On Wheels Pressure Washing Mooresville NC" },
      {
        name: "description",
        content:
          "For over 15 years, Steam On Wheels & founder David Hudson have delivered Christian-owned, licensed & insured exterior pressure washing & soft wash cleaning across Mooresville & Lake Norman NC.",
      },
      { name: "keywords", content: "Steam On Wheels About Us, Pressure Washing Company Mooresville NC, David Hudson Pressure Washer, Licensed Pressure Washer Lake Norman" },
      { property: "og:title", content: "About Us | Steam On Wheels Pressure Washing NC" },
      {
        property: "og:description",
        content:
          "15+ years of exterior cleaning expertise. Christian-owned, 100% satisfaction guaranteed. Call David Hudson: (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/about" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/about" }],
  }),
  component: AboutRoute,
});

function AboutRoute() {
  return <AboutPage />;
}
