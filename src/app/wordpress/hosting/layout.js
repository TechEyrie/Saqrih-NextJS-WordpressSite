import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Elite Managed WordPress Hosting",
  description: "Managed WordPress hosting with security, speed, and expert support from Saqrih.",
  path: "/wordpress/hosting",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"Elite Managed WordPress Hosting","url":"/wordpress/hosting"}]),
          serviceJsonLd({
            name: "Elite Managed WordPress Hosting",
            description: "Managed WordPress hosting with security, speed, and expert support from Saqrih.",
            url: "/wordpress/hosting",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What is WordPress web hosting?","answer":"WordPress web hosting is a hosting setup tuned specifically for WordPress sites. It usually includes server-level caching, optimized databases, security hardening, and support teams familiar with WordPress issues."},{"question":"Is Saqrih WordPress hosting shared?","answer":"Hosting environments can vary depending on the selected plan and workload needs. Some plans may use isolated shared infrastructure, while others are provisioned with dedicated resources for stronger performance consistency."},{"question":"Is managed WordPress hosting worth it?","answer":"For most growing businesses, managed hosting is worth it because updates, monitoring, backups, and security are handled for you. It saves internal time and reduces risk from downtime, plugin conflicts, and security incidents."},{"question":"Which hosting is best for WordPress?","answer":"The best WordPress hosting is fast, secure, and backed by responsive support. Look for daily backups, uptime monitoring, automatic updates, strong caching, and a team that can quickly troubleshoot WordPress-specific problems."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
