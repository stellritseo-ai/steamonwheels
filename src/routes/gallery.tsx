import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/site/GalleryPage";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Pressure Washing Before and After Photos | Steam On Wheels NC" },
      {
        name: "description",
        content:
          "Browse real before and after transformations, project videos, and photo showcase from Steam On Wheels exterior pressure washing, soft roof cleaning & painting in Mooresville NC.",
      },
      { name: "keywords", content: "Pressure Washing Before and After, Pressure Washing Photos Mooresville NC, Roof Cleaning Before and After" },
      { property: "og:title", content: "Pressure Washing Before and After Photos | Steam On Wheels NC" },
      {
        property: "og:description",
        content:
          "See the Steam On Wheels difference! Interactive before and after sliders, project highlight tables & video clips from 15 years in Lake Norman.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/gallery" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/gallery" }],
  }),
  component: GalleryRoute,
});

function GalleryRoute() {
  return <GalleryPage />;
}
