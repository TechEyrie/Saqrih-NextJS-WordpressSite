import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Security Services",
  description: "Hardening, monitoring, and incident response for WordPress sites from Saqrih security experts.",
  path: "/wordpress/security",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Security Services","url":"/wordpress/security"}]),
          serviceJsonLd({
            name: "WordPress Security Services",
            description: "Hardening, monitoring, and incident response for WordPress sites from Saqrih security experts.",
            url: "/wordpress/security",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"How does Saqrih daily monitoring of my website work?","answer":"Saqrih continuously monitors your WordPress website for unusual activity, performance issues, and potential security threats. This includes automated scans, uptime tracking, and early detection of suspicious behavior so issues can be identified and handled before they become serious problems."},{"question":"Can you get rid of malware?","answer":"Yes. If malware is detected, Saqrih performs a full cleanup process to remove malicious code, infected files, and hidden threats. After removal, we also secure your WordPress website to reduce the chance of reinfection."},{"question":"If my website has been hacked, can you fix it?","answer":"Yes. If your WordPress site is compromised, Saqrih provides hack recovery services to restore access, clean infected files, remove backdoors, and strengthen security. The goal is not only recovery but also preventing the same attack from happening again."},{"question":"Do I need a WordPress security plugin?","answer":"A WordPress security plugin can help, but it is not enough on its own. Plugins are just one layer of protection. Real security requires ongoing monitoring, updates, vulnerability checks, and server-level protection. Saqrih combines all of these layers to provide complete WordPress website security, not just basic plugin-based protection."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
