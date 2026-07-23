import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Convert Your Website to WordPress",
  description: "Migrate and rebuild your site on WordPress with Saqrih's conversion specialists.",
  path: "/wordpress/convert",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"Convert Your Website to WordPress","url":"/wordpress/convert"}]),
          serviceJsonLd({
            name: "Convert Your Website to WordPress",
            description: "Migrate and rebuild your site on WordPress with Saqrih's conversion specialists.",
            url: "/wordpress/convert",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"Guaranteed security for your WordPress website","answer":"Think of this as having a safety shield around your site. We run layered checks, verify backups, and keep restore points healthy so your content remains protected if something unexpected happens."},{"question":"Zero impact on your site's performance","answer":"Backups are scheduled and optimized to run quietly in the background. Visitors keep getting a smooth browsing experience while your backup routine continues without creating a bottleneck."},{"question":"WordPress backups become effortless","answer":"No spreadsheets, no reminders, no manual exports. Once configured, the process is automatic and predictable, so your team can focus on product, marketing, and growth work instead."},{"question":"Stress-free site restoration","answer":"If a rollback is needed, recovery is direct and fast. You can return to a known-good version without rebuilding pages one by one or spending hours troubleshooting broken changes."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
