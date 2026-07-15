import { SITE_ORIGIN } from "../../lib/siteOrigin";
import { WORDPRESS_SERVICE_METADATA } from "../../lib/siteMetadata";
import { INDUSTRY_SLUGS } from "../../lib/industries/industryRegistry";
import { LOCATION_SLUGS } from "../../lib/locations/locationRegistry";
import { US_STATES, stateSlug } from "../../components/icomat1-market/marketStates";
import { getLocalCityLines } from "../../components/icomat1-market/marketsData";
import { cityLineSlug } from "../../components/icomat1-market/citySlug";

/** Live case studies only (pages that call notFound() are excluded) */
const CASE_STUDY_SLUGS = [
  "pathfinders",
  "earthscape",
  "d-and-d-financial",
  "infinitystore",
  "premieronesolutions",
  "cash-boys",
  "sleepy-sloth-society",
  "bay-clinic-of-chiropractic",
  "amazed-home-care",
  "expedition-labs",
  "kala-holdings",
];

const PORTFOLIO_SLUGS = ["tiger", "acertus", "azelis-aes", "hrchitect"];

const BLOG_POST_SLUGS = [
  "mls-integration-for-wordpress",
  "idx-integration-for-wordpress",
];

/** Core marketing pages (canonical public URLs — no /icomat1 duplicates) */
const STATIC_PATHS = [
  "/",
  "/about-us",
  "/work",
  "/blog",
  "/reviews",
  "/resources",
  "/security-bulletins",
  "/sell-my-agency",
  "/why-saqrih",
  "/privacy-policy",
  "/markets",
  "/industries",
  "/wordpress",
  "/wordpress/industries",
  "/llms.txt",
];

function entry(path, changeFrequency, priority) {
  return {
    url: `${SITE_ORIGIN}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap() {
  const urls = [];

  for (const path of STATIC_PATHS) {
    const priority = path === "/" ? 1 : path === "/wordpress" || path === "/work" ? 0.9 : 0.8;
    urls.push(entry(path, path === "/" ? "weekly" : "monthly", priority));
  }

  for (const slug of Object.keys(WORDPRESS_SERVICE_METADATA)) {
    urls.push(entry(`/wordpress/${slug}`, "monthly", 0.85));
  }

  // Prefer /wordpress/maintenance over the legacy typo route if both exist in metadata
  if (!WORDPRESS_SERVICE_METADATA.maintenance) {
    urls.push(entry("/wordpress/maintenance", "monthly", 0.85));
  }

  for (const slug of CASE_STUDY_SLUGS) {
    urls.push(entry(`/case-studies/${slug}`, "monthly", 0.7));
  }

  for (const slug of PORTFOLIO_SLUGS) {
    urls.push(entry(`/portfolio/${slug}`, "monthly", 0.65));
  }

  for (const slug of BLOG_POST_SLUGS) {
    urls.push(entry(`/blog/${slug}`, "monthly", 0.7));
  }

  for (const slug of INDUSTRY_SLUGS) {
    urls.push(entry(`/industries/${slug}`, "monthly", 0.75));
    urls.push(entry(`/wordpress/industries/${slug}`, "monthly", 0.7));
  }

  for (const slug of LOCATION_SLUGS) {
    urls.push(entry(`/locations/${slug}`, "monthly", 0.75));
    urls.push(entry(`/wordpress/locations/${slug}`, "monthly", 0.7));
  }

  for (const state of US_STATES) {
    urls.push(entry(`/markets/${stateSlug(state)}`, "monthly", 0.65));
  }

  for (const line of getLocalCityLines()) {
    urls.push(entry(`/markets/local/${cityLineSlug(line)}`, "monthly", 0.55));
  }

  return urls;
}
