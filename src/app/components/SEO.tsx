import { useEffect } from "react";

export const SITE_BASE_URL = "https://gagangowdap.github.io/coffee-cabs";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  robots?: string;
  schemaJson?: object | object[];
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=800&fit=crop",
  ogType = "website",
  robots = "index, follow",
  schemaJson
}: SEOProps) {
  useEffect(() => {
    // 1. Page Title
    const formattedTitle = title.includes("Coffee Cabs") ? title : `${title} | Coffee Cabs`;
    document.title = formattedTitle;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Meta Robots Directive
    let metaRobots = document.querySelector('meta[name="robots"]');
    if (!metaRobots) {
      metaRobots = document.createElement("meta");
      metaRobots.setAttribute("name", "robots");
      document.head.appendChild(metaRobots);
    }
    metaRobots.setAttribute("content", robots);

    // 4. Canonical URL
    let fullCanonical = SITE_BASE_URL;
    if (canonicalUrl) {
      if (canonicalUrl.startsWith("http://") || canonicalUrl.startsWith("https://")) {
        fullCanonical = canonicalUrl;
      } else {
        const path = canonicalUrl.startsWith("/") ? canonicalUrl : `/${canonicalUrl}`;
        fullCanonical = `${SITE_BASE_URL}${path}`;
      }
    } else if (typeof window !== "undefined") {
      let pathName = window.location.pathname;
      if (pathName.startsWith("/coffee-cabs")) {
        pathName = pathName.replace(/^\/coffee-cabs/, "") || "/";
      }
      fullCanonical = `${SITE_BASE_URL}${pathName}`;
    }

    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", fullCanonical);

    // 5. Open Graph & Twitter Meta Tags
    const metaTags: Array<{ selectorName: string; attrName: string; attrVal: string; content: string }> = [
      { selectorName: "property", attrName: "property", attrVal: "og:title", content: formattedTitle },
      { selectorName: "property", attrName: "property", attrVal: "og:description", content: description },
      { selectorName: "property", attrName: "property", attrVal: "og:type", content: ogType },
      { selectorName: "property", attrName: "property", attrVal: "og:url", content: fullCanonical },
      { selectorName: "property", attrName: "property", attrVal: "og:image", content: ogImage },
      { selectorName: "property", attrName: "property", attrVal: "og:site_name", content: "Coffee Cabs" },
      { selectorName: "name", attrName: "name", attrVal: "twitter:card", content: "summary_large_image" },
      { selectorName: "name", attrName: "name", attrVal: "twitter:title", content: formattedTitle },
      { selectorName: "name", attrName: "name", attrVal: "twitter:description", content: description },
      { selectorName: "name", attrName: "name", attrVal: "twitter:image", content: ogImage }
    ];

    metaTags.forEach(({ selectorName, attrName, attrVal, content }) => {
      let el = document.querySelector(`meta[${selectorName}="${attrVal}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    });

    // 6. JSON-LD Structured Data
    let scriptTag = document.getElementById("jsonld-structured-data") as HTMLScriptElement | null;
    if (schemaJson) {
      if (!scriptTag) {
        scriptTag = document.createElement("script");
        scriptTag.id = "jsonld-structured-data";
        scriptTag.type = "application/ld+json";
        document.head.appendChild(scriptTag);
      }
      scriptTag.text = JSON.stringify(schemaJson);
    } else if (scriptTag) {
      scriptTag.remove();
    }
  }, [title, description, canonicalUrl, ogImage, ogType, robots, schemaJson]);

  return null;
}
