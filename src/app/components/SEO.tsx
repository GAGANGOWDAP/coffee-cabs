import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  schemaJson?: object | object[];
}

export default function SEO({
  title,
  description,
  canonicalUrl,
  ogImage = "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=1200&h=800&fit=crop",
  ogType = "website",
  schemaJson
}: SEOProps) {
  useEffect(() => {
    // 1. Title
    document.title = title.includes("Coffee Cabs") ? title : `${title} | Coffee Cabs Executive Chauffeur`;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute("content", description);

    // 3. Canonical URL
    const url = canonicalUrl || window.location.href;
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", url);

    // 4. Open Graph Meta Tags
    const ogTags: Record<string, string> = {
      "og:title": title,
      "og:description": description,
      "og:type": ogType,
      "og:url": url,
      "og:image": ogImage,
      "twitter:card": "summary_large_image",
      "twitter:title": title,
      "twitter:description": description,
      "twitter:image": ogImage
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let ogMeta = document.querySelector(`meta[property="${property}"]`) || document.querySelector(`meta[name="${property}"]`);
      if (!ogMeta) {
        ogMeta = document.createElement("meta");
        ogMeta.setAttribute(property.startsWith("og:") ? "property" : "name", property);
        document.head.appendChild(ogMeta);
      }
      ogMeta.setAttribute("content", content);
    });

    // 5. JSON-LD Structured Data
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
  }, [title, description, canonicalUrl, ogImage, ogType, schemaJson]);

  return null;
}
