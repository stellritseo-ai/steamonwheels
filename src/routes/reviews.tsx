import { createFileRoute } from "@tanstack/react-router";
import { ReviewsPage } from "@/components/site/ReviewsPage";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Steam On Wheels Reviews | Best Pressure Washing Mooresville NC" },
      {
        name: "description",
        content:
          "Read 15 verified 5-star customer reviews for Steam On Wheels in Mooresville & Lake Norman NC. See why homeowners & businesses trust David Hudson. Call (704) 516-9509.",
      },
      { name: "keywords", content: "Steam On Wheels Reviews, Best Pressure Washing Company Near Me, Pressure Washer Reviews Mooresville NC" },
      { property: "og:title", content: "Steam On Wheels Reviews | Best Pressure Washing Mooresville NC" },
      {
        property: "og:description",
        content:
          "100% 5-star rating for pressure washing, soft roof cleaning, siding wash & painting in Mooresville, NC. Call (704) 516-9509.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/reviews" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/reviews" }],
  }),
  component: ReviewsRoute,
});

function ReviewsRoute() {
  return <ReviewsPage />;
}
