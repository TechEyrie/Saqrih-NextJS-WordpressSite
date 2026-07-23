import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Retained Services",
  description: "Dedicated WordPress design and development capacity on retainer.",
  path: "/wordpress/retained-services",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Retained Services","url":"/wordpress/retained-services"}]),
          serviceJsonLd({
            name: "WordPress Retained Services",
            description: "Dedicated WordPress design and development capacity on retainer.",
            url: "/wordpress/retained-services",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What is WordPress website maintenance & management?","answer":"WordPress maintenance and management covers everything needed to keep your site secure, fast, and up to date. This includes plugin and theme updates, WordPress core upgrades, daily backups, uptime monitoring, security scanning, and performance optimisation. A managed WordPress service means you never have to worry about the technical side of running your site."},{"question":"Why is WordPress management important?","answer":"Without regular maintenance, WordPress sites become vulnerable to security exploits, suffer performance degradation, and risk data loss. Outdated plugins are the number one cause of WordPress hacks. Proactive management ensures your site stays protected, loads fast, and provides a consistently great experience for your visitors."},{"question":"What's typically included in the paid WordPress management plan?","answer":"Paid WordPress management plans typically include regular core, plugin, and theme updates, automated daily or weekly backups with offsite storage, uptime monitoring, malware scanning and removal, performance audits, and priority support. Higher-tier plans often add developer hours for custom changes, monthly reports, and WooCommerce-specific care."},{"question":"How often will my WordPress site be updated?","answer":"Most managed WordPress plans perform updates on a weekly basis at minimum, with security patches applied immediately as they are released. Critical vulnerabilities are addressed within 24 hours. You will receive a report after every update cycle detailing exactly what was changed and the current status of your site."},{"question":"Will I lose any data or content during maintenance?","answer":"No. Before any updates or changes are applied, a full backup of your site is created and stored securely off-site. If anything unexpected occurs during the update process, we can restore your site to its previous state within minutes. Data loss during routine maintenance is extremely rare with a proper backup strategy in place."},{"question":"Do you support WooCommerce and eCommerce sites?","answer":"Yes. We have deep experience managing WooCommerce stores, including product catalogue maintenance, payment gateway updates, order management support, and performance tuning for high-traffic stores. eCommerce sites require extra care due to the transactional nature of the platform, and our plans are specifically designed to address those needs."},{"question":"Can I upgrade or downgrade my maintenance plan?","answer":"Absolutely. You can change your plan at any time with no lock-in contracts. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle. We are happy to discuss which plan best suits your current stage and scale up as your business grows."},{"question":"What happens if my site goes down?","answer":"Our uptime monitoring checks your site every minute from multiple global locations. If a downtime event is detected, our team is alerted instantly and begins investigating. For clients on premium plans, we aim to have sites restored within one hour. You will be notified by email and a full incident report is provided once the issue is resolved."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
