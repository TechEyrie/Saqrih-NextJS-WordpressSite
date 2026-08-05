import { SITE_ORIGIN } from "../../lib/siteOrigin";
import { WORDPRESS_SERVICE_METADATA } from "../../lib/siteMetadata";
import { INDUSTRY_SLUGS } from "../../lib/industries/industryRegistry";
import { LOCATION_SLUGS } from "../../lib/locations/locationRegistry";
import { US_STATES, stateSlug } from "../../components/icomat1-market/marketStates";
import { fetchAllWpBlogPosts } from "../../lib/wordpressBlog";
import { getAllBlogPosts } from "../../components/icomat1-blog/blogPostsData";
import {
  WEBSITE_DEVELOPMENT,
  WEBSITE_DEVELOPMENT_SUB_SERVICES,
} from "../../lib/services/websiteDevelopment";
import {
  WEBSITE_SUPPORT_MAINTENANCE,
  WEBSITE_SUPPORT_MAINTENANCE_SUB_SERVICES,
} from "../../lib/services/websiteSupportMaintenance";
import {
  SAAS_DEVELOPMENT,
  SAAS_DEVELOPMENT_SUB_SERVICES,
} from "../../lib/services/saasDevelopment";
import {
  API_INTEGRATION_DEVELOPMENT,
  API_INTEGRATION_SUB_SERVICES,
} from "../../lib/services/apiIntegrationDevelopment";
import {
  CMS_HEADLESS_DEVELOPMENT,
  CMS_HEADLESS_SUB_SERVICES,
} from "../../lib/services/cmsHeadlessDevelopment";
import {
  MOBILE_APP_DEVELOPMENT,
  MOBILE_APP_SUB_SERVICES,
} from "../../lib/services/mobileAppDevelopment";
import { WEBSITE_DEV_HOME } from "../../lib/services/websiteDevelopmentHome";
import { WEB_APP_DEV_HOME } from "../../lib/services/webApplicationDevelopmentHome";
import { SAAS_DEV_HOME } from "../../lib/services/saasDevelopmentHome";
import { ECOM_DEV_HOME } from "../../lib/services/ecommerceDevelopmentHome";
import { MOBILE_DEV_HOME } from "../../lib/services/mobileAppDevelopmentHome";
import { CMS_DEV_HOME } from "../../lib/services/cmsHeadlessDevelopmentHome";
import { API_DEV_HOME } from "../../lib/services/apiIntegrationDevelopmentHome";
import { WSM_DEV_HOME } from "../../lib/services/websiteSupportMaintenanceHome";
import { WORDPRESS_DEV_HOME } from "../../lib/services/wordpressDevelopmentHome";
import {
  getAllWordpressDevSubPageSlugs,
  WORDPRESS_DEV_PARENT,
} from "../../lib/services/wordpressDevelopmentSubPages";
import {
  getAllWebsiteDevSubPageSlugs,
  WEBSITE_DEV_PARENT,
} from "../../lib/services/websiteDevelopmentSubPages";
import {
  getAllWebAppDevSubPageSlugs,
  WEB_APP_DEV_PARENT,
} from "../../lib/services/webApplicationDevelopmentSubPages";
import {
  getAllSaasDevSubPageSlugs,
  SAAS_DEV_PARENT,
} from "../../lib/services/saasDevelopmentSubPages";
import {
  getAllEcomDevSubPageSlugs,
  ECOM_DEV_PARENT,
} from "../../lib/services/ecommerceDevelopmentSubPages";
import {
  getAllMobileDevSubPageSlugs,
  MOBILE_DEV_PARENT,
} from "../../lib/services/mobileAppDevelopmentSubPages";
import {
  getAllCmsDevSubPageSlugs,
  CMS_DEV_PARENT,
} from "../../lib/services/cmsHeadlessDevelopmentSubPages";
import {
  getAllApiDevSubPageSlugs,
  API_DEV_PARENT,
} from "../../lib/services/apiIntegrationDevelopmentSubPages";
import {
  getAllWsmDevSubPageSlugs,
  WSM_DEV_PARENT,
} from "../../lib/services/websiteSupportMaintenanceSubPages";

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

/** Canonical public URLs only — no mirrors, typos, thin locals, or legacy shells */
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
  "/llms.txt",
];

/** Map metadata keys → sitemap paths (fix typos / skip odd duplicates) */
function canonicalWordpressPaths() {
  const paths = [];
  for (const slug of Object.keys(WORDPRESS_SERVICE_METADATA)) {
    if (slug === "maintainance") {
      paths.push("/wordpress/maintenance");
      continue;
    }
    if (slug === "premium-support1") continue;
    paths.push(`/wordpress/${slug}`);
  }
  return paths;
}

function entry(path, changeFrequency, priority) {
  return {
    url: `${SITE_ORIGIN}${path === "/" ? "" : path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default async function sitemap() {
  const urls = [];

  for (const path of STATIC_PATHS) {
    const priority =
      path === "/" ? 1 : path === "/wordpress" || path === "/work" ? 0.9 : 0.8;
    urls.push(entry(path, path === "/" ? "weekly" : "monthly", priority));
  }

  for (const path of canonicalWordpressPaths()) {
    urls.push(entry(path, "monthly", 0.85));
  }

  urls.push(entry(WEBSITE_DEVELOPMENT.path, "monthly", 0.9));
  for (const sub of WEBSITE_DEVELOPMENT_SUB_SERVICES) {
    urls.push(entry(`${WEBSITE_DEVELOPMENT.path}/${sub.slug}`, "monthly", 0.8));
  }

  urls.push(entry(WEBSITE_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllWebsiteDevSubPageSlugs()) {
    urls.push(entry(`${WEBSITE_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(WEB_APP_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllWebAppDevSubPageSlugs()) {
    urls.push(entry(`${WEB_APP_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(SAAS_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllSaasDevSubPageSlugs()) {
    urls.push(entry(`${SAAS_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(ECOM_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllEcomDevSubPageSlugs()) {
    urls.push(entry(`${ECOM_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(MOBILE_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllMobileDevSubPageSlugs()) {
    urls.push(entry(`${MOBILE_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(CMS_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllCmsDevSubPageSlugs()) {
    urls.push(entry(`${CMS_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(API_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllApiDevSubPageSlugs()) {
    urls.push(entry(`${API_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(WSM_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllWsmDevSubPageSlugs()) {
    urls.push(entry(`${WSM_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }
  urls.push(entry(WORDPRESS_DEV_HOME.path, "monthly", 0.9));
  for (const slug of getAllWordpressDevSubPageSlugs()) {
    urls.push(entry(`${WORDPRESS_DEV_PARENT.path}/${slug}`, "monthly", 0.8));
  }

  urls.push(entry(WEBSITE_SUPPORT_MAINTENANCE.path, "monthly", 0.9));
  for (const sub of WEBSITE_SUPPORT_MAINTENANCE_SUB_SERVICES) {
    urls.push(
      entry(`${WEBSITE_SUPPORT_MAINTENANCE.path}/${sub.slug}`, "monthly", 0.8)
    );
  }

  urls.push(entry(SAAS_DEVELOPMENT.path, "monthly", 0.9));
  for (const sub of SAAS_DEVELOPMENT_SUB_SERVICES) {
    urls.push(entry(`${SAAS_DEVELOPMENT.path}/${sub.slug}`, "monthly", 0.8));
  }

  urls.push(entry(API_INTEGRATION_DEVELOPMENT.path, "monthly", 0.9));
  for (const sub of API_INTEGRATION_SUB_SERVICES) {
    urls.push(
      entry(`${API_INTEGRATION_DEVELOPMENT.path}/${sub.slug}`, "monthly", 0.8)
    );
  }

  urls.push(entry(CMS_HEADLESS_DEVELOPMENT.path, "monthly", 0.9));
  for (const sub of CMS_HEADLESS_SUB_SERVICES) {
    urls.push(
      entry(`${CMS_HEADLESS_DEVELOPMENT.path}/${sub.slug}`, "monthly", 0.8)
    );
  }

  urls.push(entry(MOBILE_APP_DEVELOPMENT.path, "monthly", 0.9));
  for (const sub of MOBILE_APP_SUB_SERVICES) {
    urls.push(entry(`${MOBILE_APP_DEVELOPMENT.path}/${sub.slug}`, "monthly", 0.8));
  }

  for (const slug of CASE_STUDY_SLUGS) {
    urls.push(entry(`/case-studies/${slug}`, "monthly", 0.7));
  }

  for (const slug of PORTFOLIO_SLUGS) {
    urls.push(entry(`/portfolio/${slug}`, "monthly", 0.65));
  }

  try {
    const wpPosts = await fetchAllWpBlogPosts({ revalidate: 300 });
    for (const post of wpPosts) {
      urls.push(entry(`/blog/${post.slug}`, "monthly", 0.7));
    }
  } catch {
    for (const post of getAllBlogPosts()) {
      urls.push(entry(`/blog1/${post.slug}`, "monthly", 0.5));
    }
  }

  for (const slug of INDUSTRY_SLUGS) {
    urls.push(entry(`/industries/${slug}`, "monthly", 0.75));
  }

  for (const slug of LOCATION_SLUGS) {
    urls.push(entry(`/locations/${slug}`, "monthly", 0.75));
  }

  for (const state of US_STATES) {
    urls.push(entry(`/markets/${stateSlug(state)}`, "monthly", 0.65));
  }

  return urls;
}
