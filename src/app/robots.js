import { SITE_ORIGIN } from "../../lib/siteOrigin";

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          // Dev / legacy duplicate shells
          "/icomat",
          "/icomat1",
          "/home1",
          "/icomat1-work",
          "/icomat-work",
          "/icomat1-about-us",
          "/icomat1/wordpress/",
          // Thin placeholder city pages (also noindex in layout)
          "/markets/local/",
        ],
      },
    ],
    sitemap: `${SITE_ORIGIN}/sitemap.xml`,
    host: SITE_ORIGIN,
  };
}
