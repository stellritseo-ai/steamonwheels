import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Steam On Wheels NC | #1 Pressure Washing & Exterior Cleaning Mooresville & Lake Norman" },
      {
        name: "description",
        content:
          "Top-rated pressure washing, soft roof cleaning, house washing, concrete degreasing & exterior painting in Mooresville, NC & 40-mile radius. Call David Hudson: (704) 516-9509.",
      },
      { name: "keywords", content: "Pressure Washing NC, Pressure Washing Mooresville NC, House Washing Near Me, Roof Cleaning Lake Norman, Soft Washing, Driveway Cleaning, Steam On Wheels" },
      { name: "author", content: "Steam On Wheels LLC" },
      { name: "geo.region", content: "US-NC" },
      { name: "geo.placename", content: "Mooresville" },
      { name: "geo.position", content: "35.5849;-80.8101" },
      { name: "ICBM", content: "35.5849, -80.8101" },
      { property: "og:site_name", content: "Steam On Wheels NC" },
      { property: "og:title", content: "Steam On Wheels NC | #1 Pressure Washing & Exterior Cleaning" },
      {
        property: "og:description",
        content:
          "Licensed & Insured exterior cleaning specialists. 15+ years experience. 100% 5-star customer reviews. Free estimates 24/7.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Steam On Wheels NC | Pressure Washing & Soft Washing" },
      { name: "twitter:description", content: "Commercial & Residential exterior pressure washing in Mooresville & Lake Norman NC." },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

const jsonLdSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://steamonwheelsnc.com/#business",
      "name": "Steam On Wheels",
      "legalName": "Steam On Wheels LLC",
      "url": "https://steamonwheelsnc.com",
      "logo": "https://steamonwheelsnc.com/favicon.png",
      "image": "https://steamonwheelsnc.com/favicon.png",
      "telephone": "+1-704-516-9509",
      "email": "motivate71@yahoo.com",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "107 Kase Ct",
        "addressLocality": "Mooresville",
        "addressRegion": "NC",
        "postalCode": "28115",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.5849,
        "longitude": -80.8101
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          "opens": "08:00",
          "closes": "20:00"
        }
      ],
      "areaServed": [
        "Mooresville, NC", "Cornelius, NC", "Davidson, NC", "Huntersville, NC",
        "Statesville, NC", "Troutman, NC", "Denver, NC", "Sherrills Ford, NC",
        "Mount Mourne, NC", "Hickory, NC", "Lincolnton, NC", "Maiden, NC",
        "Newton, NC", "Conover, NC", "Charlotte, NC", "Gastonia, NC",
        "Lake Norman", "Iredell County", "Mecklenburg County", "Catawba County", "Lincoln County"
      ],
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "5.0",
        "reviewCount": "412",
        "bestRating": "5",
        "worstRating": "1"
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Pressure Washing & Exterior Cleaning Services",
        "itemListElement": [
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Residential Pressure Washing & House Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Soft Wash Roof Cleaning & Algae Removal" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Concrete & Driveway Degreasing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Building Washing & Parking Lot Power Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding & Vinyl Soft Washing" } },
          { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Exterior Painting & Deck Staining Prep" } }
        ]
      },
      "founder": {
        "@type": "Person",
        "name": "David Hudson"
      },
      "sameAs": [
        "https://www.facebook.com",
        "https://www.nextdoor.com",
        "https://www.google.com/maps"
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://steamonwheelsnc.com/#website",
      "url": "https://steamonwheelsnc.com",
      "name": "Steam On Wheels NC",
      "publisher": {
        "@id": "https://steamonwheelsnc.com/#business"
      }
    }
  ]
};

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
