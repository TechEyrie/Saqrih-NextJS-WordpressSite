import { SITE_ORIGIN, DEFAULT_OG_IMAGE_PATH } from "./siteOrigin.js";

export { DEFAULT_OG_IMAGE_PATH };
export function absoluteUrl(path = "/") {
  if (!path || path === "/") return SITE_ORIGIN;
  if (/^https?:\/\//i.test(path)) return path;
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": `${SITE_ORIGIN}/#organization`,
    name: "Saqrih",
    legalName: "Saqrih",
    url: SITE_ORIGIN,
    logo: {
      "@type": "ImageObject",
      url: absoluteUrl("/logo/Saqrih_real_logo.png"),
    },
    image: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
    description:
      "Saqrih is a Qatar-based WordPress agency delivering design, development, hosting, maintenance, SEO, and ongoing support.",
    email: "info@saqrih.com",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "info@saqrih.com",
      availableLanguage: ["English", "Arabic"],
      areaServed: ["QA", "AE", "SA", "BH", "OM", "US"],
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Doha",
      addressCountry: "QA",
    },
    areaServed: [
      { "@type": "Country", name: "Qatar" },
      { "@type": "Country", name: "United Arab Emirates" },
      { "@type": "Country", name: "Saudi Arabia" },
      { "@type": "Country", name: "Bahrain" },
      { "@type": "Country", name: "Oman" },
      { "@type": "Country", name: "United States" },
    ],
    knowsAbout: [
      "WordPress",
      "WordPress design",
      "WordPress development",
      "WooCommerce",
      "WordPress hosting",
      "WordPress SEO",
      "WordPress maintenance",
    ],
    priceRange: "$$",
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_ORIGIN}/#website`,
    name: "Saqrih",
    url: SITE_ORIGIN,
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    inLanguage: "en",
  };
}

/** Homepage WebPage node linked to Organization + WebSite. */
export function webPageJsonLd({
  name,
  description,
  url = "/",
}) {
  const pageUrl = absoluteUrl(url);
  const idBase = pageUrl.replace(/\/$/, "");
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${idBase}/#webpage`,
    name,
    description,
    url: pageUrl,
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    about: { "@id": `${SITE_ORIGIN}/#organization` },
    primaryImageOfPage: absoluteUrl(DEFAULT_OG_IMAGE_PATH),
    inLanguage: "en",
  };
}

/**
 * @param {{ name: string; url: string }[]} items
 */
export function breadcrumbJsonLd(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.url),
    })),
  };
}

/**
 * @param {{
 *   name: string;
 *   description: string;
 *   url: string;
 *   serviceType?: string;
 * }} opts
 */
export function serviceJsonLd({
  name,
  description,
  url,
  serviceType = "WordPress services",
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: absoluteUrl(url),
    serviceType,
    provider: { "@id": `${SITE_ORIGIN}/#organization` },
    areaServed: ["QA", "AE", "SA", "BH", "OM", "US"],
  };
}

/**
 * @param {{ question: string; answer: string }[]} faqs
 */
export function faqPageJsonLd(faqs) {
  if (!faqs?.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

/**
 * @param {{
 *   title: string;
 *   description: string;
 *   url: string;
 *   datePublished?: string;
 *   dateModified?: string;
 *   authorName?: string;
 *   image?: string;
 * }} opts
 */
export function articleJsonLd({
  title,
  description,
  url,
  datePublished,
  dateModified,
  authorName = "Saqrih",
  image,
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description,
    url: absoluteUrl(url),
    mainEntityOfPage: absoluteUrl(url),
    image: absoluteUrl(image || DEFAULT_OG_IMAGE_PATH),
    datePublished: datePublished || undefined,
    dateModified: dateModified || datePublished || undefined,
    author: {
      "@type": "Person",
      name: authorName,
    },
    publisher: { "@id": `${SITE_ORIGIN}/#organization` },
    inLanguage: "en",
  };
}

/**
 * @param {{
 *   name: string;
 *   description: string;
 *   url: string;
 *   image?: string;
 * }} opts
 */
export function caseStudyJsonLd({ name, description, url, image }) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: `${name} Case Study`,
    description,
    url: absoluteUrl(url),
    image: absoluteUrl(image || DEFAULT_OG_IMAGE_PATH),
    creator: { "@id": `${SITE_ORIGIN}/#organization` },
    about: name,
  };
}

/** Filter nulls and wrap as @graph when multiple. */
export function jsonLdGraph(nodes) {
  const list = (Array.isArray(nodes) ? nodes : [nodes]).filter(Boolean);
  if (list.length === 0) return null;
  if (list.length === 1) return list[0];
  return {
    "@context": "https://schema.org",
    "@graph": list.map(({ "@context": _c, ...rest }) => rest),
  };
}

/**
 * Blog index / listing as a CollectionPage with ItemList.
 * @param {{
 *   name: string;
 *   description: string;
 *   url: string;
 *   items: { name: string; url: string }[];
 * }} opts
 */
export function blogCollectionJsonLd({ name, description, url, items }) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name,
    description,
    url: absoluteUrl(url),
    isPartOf: { "@id": `${SITE_ORIGIN}/#website` },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        url: absoluteUrl(item.url),
      })),
    },
  };
}
