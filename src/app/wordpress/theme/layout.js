import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Theme & Builder Services",
  description: "Custom WordPress themes and page-builder implementations from Saqrih.",
  path: "/wordpress/theme",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Theme & Builder Services","url":"/wordpress/theme"}]),
          serviceJsonLd({
            name: "WordPress Theme & Builder Services",
            description: "Custom WordPress themes and page-builder implementations from Saqrih.",
            url: "/wordpress/theme",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What is WordPress support?","answer":"WordPress support refers to ongoing technical assistance for your website, including updates, security monitoring, backups, performance optimization, troubleshooting, and general maintenance. At Saqrih, it ensures your WordPress website stays secure, fast, and fully functional at all times."},{"question":"Is there a charge for WordPress support service?","answer":"Yes, WordPress support is typically offered through monthly or custom service plans. The cost depends on your website size, complexity, and required level of support. Saqrih provides flexible WordPress support packages to match different business needs and budgets."},{"question":"What distinguishes Saqrih's WordPress support services in the USA?","answer":"Saqrih stands out by offering experienced, USA-based WordPress support with fast response times, proactive monitoring, and a hands-on engineering approach. Instead of reactive fixes only, we focus on preventing issues before they impact your website, ensuring long-term stability and performance."},{"question":"Why is WordPress support important?","answer":"Without proper support, WordPress websites can become vulnerable to security threats, performance issues, and downtime. Regular WordPress support ensures your site stays updated, secure, and optimized, protecting both your business and your users."},{"question":"Do you offer WordPress repair services for compromised sites?","answer":"Yes. If your WordPress website is hacked or compromised, Saqrih provides full repair and recovery services. This includes malware removal, restoring site functionality, closing security gaps, and strengthening protection to prevent future attacks."},{"question":"How long does WordPress support take?","answer":"Most support requests are handled quickly, depending on complexity and severity. Small fixes can often be resolved the same day, while larger issues like recovery or development tasks may take longer. Saqrih prioritizes fast response times and efficient resolution to minimize downtime."},{"question":"Do you provide WP support services for e-commerce and WooCommerce websites too?","answer":"Yes. Saqrih fully supports WooCommerce and other WordPress-based e-commerce websites. This includes checkout issues, performance optimization, security hardening, plugin compatibility, and ongoing maintenance to ensure your online store runs smoothly and securely."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
