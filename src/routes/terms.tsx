import { createFileRoute } from "@tanstack/react-router";
import { TermsPage } from "@/components/site/TermsPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Steam On Wheels NC" },
      {
        name: "description",
        content:
          "Review the official Terms & Conditions and service agreement for Steam On Wheels LLC pressure washing & exterior cleaning in Mooresville NC.",
      },
      { property: "og:title", content: "Terms & Conditions | Steam On Wheels NC" },
      {
        property: "og:description",
        content:
          "Service terms, satisfaction guarantee and licensing policy for Steam On Wheels LLC in Mooresville & Lake Norman NC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/terms" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/terms" }],
  }),
  component: TermsRoute,
});

function TermsRoute() {
  return <TermsPage />;
}
