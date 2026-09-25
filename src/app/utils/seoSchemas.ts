/**
 * Coffee Cabs — SEO-Safe JSON-LD Structured Data Generators
 * Standardized schema.org compliant schemas matching actual visible page content.
 */

export const SITE_URL = "https://gagangowdap.github.io/coffee-cabs";
export const BRAND_NAME = "Coffee Cabs";
export const BRAND_LOGO = `${SITE_URL}/images/logo.png`;
export const BRAND_IMAGE = `${SITE_URL}/images/hero.png`;
export const BRAND_PHONE = "+91-7676726209";
export const BRAND_EMAIL = "info@coffeecabs.in";

export const ORGANIZATION_SCHEMA = {
  "@type": ["LocalBusiness", "TaxiService"],
  "@id": `${SITE_URL}/#organization`,
  "name": BRAND_NAME,
  "url": `${SITE_URL}/`,
  "logo": BRAND_LOGO,
  "image": BRAND_IMAGE,
  "telephone": BRAND_PHONE,
  "email": BRAND_EMAIL,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bengaluru",
    "addressRegion": "Karnataka",
    "addressCountry": "IN"
  },
  "areaServed": {
    "@type": "State",
    "name": "Karnataka"
  },
  "description": "Premium chauffeur-driven travel across Karnataka. Luxury Toyota Innova Crysta, Force Urbania, and Tempo Traveller rentals."
};

/**
 * 1. Homepage Schema (WebSite + LocalBusiness + FAQPage)
 */
export function getHomePageSchema(faqs?: Array<{ q: string; a: string }>) {
  const graph: object[] = [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      "url": `${SITE_URL}/`,
      "name": BRAND_NAME,
      "description": "Bengaluru's premier luxury cab service for outstation Karnataka travel, airport transfers & tour packages."
    },
    ORGANIZATION_SCHEMA
  ];

  if (faqs && faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.q,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.a
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

/**
 * 2. Fleet Overview Page Schema
 */
export function getFleetIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Fleet", "item": `${SITE_URL}/fleet` }
        ]
      },
      {
        "@type": "Service",
        "name": "Coffee Cabs Executive Fleet Rentals",
        "description": "Chauffeur-driven luxury fleet rentals including Toyota Innova Crysta, Force Urbania, and Tempo Travellers.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "State", "name": "Karnataka" }
      }
    ]
  };
}

/**
 * 3. Vehicle Detail Page Schema
 */
export function getVehicleDetailSchema(vehicle: {
  name: string;
  slug: string;
  category: string;
  description: string;
  capacity?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Fleet", "item": `${SITE_URL}/fleet` },
          { "@type": "ListItem", "position": 3, "name": vehicle.name, "item": `${SITE_URL}/fleet/${vehicle.slug}` }
        ]
      },
      {
        "@type": "TaxiService",
        "name": `${vehicle.name} Chauffeur-Driven Rental`,
        "description": vehicle.description,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "State", "name": "Karnataka" },
        "serviceType": "Chauffeur-Driven Vehicle Rental"
      }
    ]
  };
}

/**
 * 4. Outstation Routes Index Page Schema
 */
export function getRoutesIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Outstation Routes", "item": `${SITE_URL}/routes` }
        ]
      },
      {
        "@type": "Service",
        "name": "Karnataka Outstation Cab & Taxi Routes",
        "description": "Chauffeur-driven outstation cab service covering popular Karnataka travel routes.",
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "State", "name": "Karnataka" }
      }
    ]
  };
}

/**
 * 5. Outstation Route Detail Page Schema
 */
export function getRouteDetailSchema(route: {
  title: string;
  slug: string;
  origin: string;
  destination: string;
  summary?: string;
  heroDescription?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Outstation Routes", "item": `${SITE_URL}/routes` },
          { "@type": "ListItem", "position": 3, "name": route.title, "item": `${SITE_URL}/routes/${route.slug}` }
        ]
      },
      {
        "@type": "TaxiService",
        "name": `${route.title} Chauffeur-Driven Cab Service`,
        "description": route.summary || route.heroDescription || `Chauffeur-driven cab service from ${route.origin} to ${route.destination}.`,
        "provider": { "@id": `${SITE_URL}/#organization` },
        "areaServed": { "@type": "State", "name": "Karnataka" },
        "serviceType": "Outstation Taxi"
      }
    ]
  };
}

/**
 * 6. Travel Index Page Schema (Destinations Directory)
 */
export function getTravelIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Travel Dictionary", "item": `${SITE_URL}/travel` }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Karnataka Travel Dictionary & 100 Destinations Guide",
        "description": "Explore 100 curated Karnataka travel destinations, heritage towns, hill stations, wildlife sanctuaries & beaches.",
        "url": `${SITE_URL}/travel`
      }
    ]
  };
}

/**
 * 7. Destination Detail Page Schema (TouristAttraction / Place + BreadcrumbList + optional FAQPage)
 */
export function getDestinationDetailSchema(destination: {
  name: string;
  slug: string;
  district: string;
  region: string;
  shortDescription?: string;
  overview?: string;
  heroImage?: string;
  imageUrl?: string;
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const img = destination.heroImage || destination.imageUrl;
  const graph: object[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Travel Dictionary", "item": `${SITE_URL}/travel` },
        { "@type": "ListItem", "position": 3, "name": destination.name, "item": `${SITE_URL}/travel/destinations/${destination.slug}` }
      ]
    },
    {
      "@type": ["TouristAttraction", "Place"],
      "name": destination.name,
      "description": destination.shortDescription || destination.overview || `Explore ${destination.name} in ${destination.district}, Karnataka.`,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": destination.district,
        "addressRegion": "Karnataka",
        "addressCountry": "IN"
      },
      "image": img
    }
  ];

  if (destination.faqs && destination.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": destination.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

/**
 * 8. Tour Packages Index Schema
 */
export function getPackagesIndexSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Tour Packages", "item": `${SITE_URL}/travel/packages` }
        ]
      },
      {
        "@type": "CollectionPage",
        "name": "Karnataka Tour Packages & Outstation Itineraries",
        "description": "Curated Karnataka tour itineraries and outstation travel packages by Coffee Cabs.",
        "url": `${SITE_URL}/travel/packages`
      }
    ]
  };
}

/**
 * 9. Tour Package Detail Page Schema (TouristTrip / Trip + BreadcrumbList + optional FAQPage)
 */
export function getPackageDetailSchema(pkg: {
  title: string;
  slug: string;
  summary?: string;
  overview?: string;
  categories?: string[];
  faqs?: Array<{ question: string; answer: string }>;
}) {
  const graph: object[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
        { "@type": "ListItem", "position": 2, "name": "Travel", "item": `${SITE_URL}/travel` },
        { "@type": "ListItem", "position": 3, "name": "Packages", "item": `${SITE_URL}/travel/packages` },
        { "@type": "ListItem", "position": 4, "name": pkg.title, "item": `${SITE_URL}/travel/packages/${pkg.slug}` }
      ]
    },
    {
      "@type": "TouristTrip",
      "name": pkg.title,
      "description": pkg.summary || pkg.overview || `Explore Karnataka on the ${pkg.title} tour package.`,
      "touristType": pkg.categories || ["Family", "Outstation"],
      "provider": { "@id": `${SITE_URL}/#organization` }
    }
  ];

  if (pkg.faqs && pkg.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      "mainEntity": pkg.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": f.answer
        }
      }))
    });
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

/**
 * 10. Pricing Page Schema
 */
export function getPricingPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Tariff & Pricing", "item": `${SITE_URL}/pricing` }
        ]
      },
      {
        "@type": "WebPage",
        "name": "Official Per-Km Pricing & Tariff Rules",
        "description": "Per-km rates, driver daily allowance, minimum billing distance, and outstation rules for Coffee Cabs.",
        "url": `${SITE_URL}/pricing`
      }
    ]
  };
}

/**
 * 11. Contact Page Schema
 */
export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Contact Us", "item": `${SITE_URL}/contact` }
        ]
      },
      {
        "@type": "ContactPage",
        "name": "Contact Coffee Cabs",
        "description": "Get in touch with Coffee Cabs for outstation cab bookings, pricing enquiries, and fleet reservations.",
        "url": `${SITE_URL}/contact`,
        "mainEntity": { "@id": `${SITE_URL}/#organization` }
      }
    ]
  };
}

/**
 * 12. Booking Page Schema
 */
export function getBookingPageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${SITE_URL}/` },
          { "@type": "ListItem", "position": 2, "name": "Booking & Enquiry", "item": `${SITE_URL}/booking` }
        ]
      },
      {
        "@type": "WebPage",
        "name": "Book Outstation Cab or Request Enquiry",
        "description": "Submit a booking request for Innova Crysta, Force Urbania, or Tempo Traveller for outstation Karnataka journeys.",
        "url": `${SITE_URL}/booking`
      }
    ]
  };
}
