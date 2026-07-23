import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/ContactPage";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Steam On Wheels | Pressure Washing Mooresville NC" },
      {
        name: "description",
        content:
          "Contact David Hudson at (704) 516-9509 for free estimates & 24/7 emergency pressure washing, soft roof cleaning & painting in Mooresville NC & Lake Norman.",
      },
      { name: "keywords", content: "Contact Steam On Wheels, Pressure Washer Phone Number Mooresville, Emergency Pressure Washing Near Me" },
      { property: "og:title", content: "Contact Steam On Wheels | Pressure Washing Mooresville NC" },
      {
        property: "og:description",
        content:
          "Call (704) 516-9509 or fill out our online contact form. 24/7 emergency service available for Mooresville & Lake Norman.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://steamonwheelsnc.com/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://steamonwheelsnc.com/contact" }],
  }),
  component: ContactRoute,
});

function ContactRoute() {
  return <ContactPage />;
}
