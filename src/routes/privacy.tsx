import { createFileRoute } from "@tanstack/react-router";
import { PrivacyPage } from "@/components/site/PrivacyPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Steam On Wheels NC" },
      {
        name: "description",
        content:
          "Read the official Privacy Policy for Steam On Wheels LLC in Mooresville NC. Learn how we collect, protect & respect your personal information.",
      },
      { property: "og:title", content: "Privacy Policy | Steam On Wheels NC" },
      {
        property: "og:description",
        content:
          "Privacy Policy and data protection terms for Steam On Wheels LLC in Mooresville & Lake Norman NC.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/privacy" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/privacy" }],
  }),
  component: PrivacyRoute,
});

function PrivacyRoute() {
  return <PrivacyPage />;
}
