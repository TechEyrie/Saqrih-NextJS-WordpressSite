/**
 * Production public site origin for sitemap, robots, and metadataBase.
 * Set NEXT_PUBLIC_SITE_URL in production if the live domain differs from saqrih.com.
 * Do not reuse NEXT_PUBLIC_WORDPRESS_URL here — that is often the CMS host.
 */
export const SITE_ORIGIN = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://saqrih.com"
).replace(/\/$/, "");
