import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Marketing Pro",
  description: "Marketing-focused WordPress services—landing pages, funnels, and growth experiments.",
  path: "/wordpress/marketing-pro",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Marketing Pro","url":"/wordpress/marketing-pro"}]),
          serviceJsonLd({
            name: "WordPress Marketing Pro",
            description: "Marketing-focused WordPress services—landing pages, funnels, and growth experiments.",
            url: "/wordpress/marketing-pro",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What is web accessibility?","answer":"Web accessibility ensures that websites are designed and developed so that all users, including people with disabilities, can navigate, understand, and interact with content effectively using assistive technologies."},{"question":"What is WordPress ADA compliance?","answer":"WordPress ADA compliance refers to adapting a WordPress website to meet accessibility standards such as ADA guidelines and WCAG requirements, ensuring equal access for all users."},{"question":"Do I really need my WordPress website to be ADA compliant?","answer":"If your website serves the public or customers, accessibility is strongly recommended and often legally required, especially if you want to reduce risk and improve usability for all visitors."},{"question":"Can I use a WordPress ADA plugin?","answer":"Yes, accessibility plugins can help improve compliance, but they are not a complete solution. Full compliance usually requires a combination of audits, fixes, and ongoing maintenance."},{"question":"Can you help me test my WordPress ADA compliance?","answer":"Yes, Saqrih can perform accessibility testing and audits to identify issues and recommend improvements for better WordPress ADA compliance."},{"question":"Will my WordPress website be certified as compliant?","answer":"There is no official universal \"ADA certification.\" Compliance is based on meeting accessibility standards such as WCAG, supported by audits and best practices."},{"question":"What's the difference between Conformance Level A and AA?","answer":"Level A covers the most basic accessibility requirements, while Level AA includes a broader and more widely accepted standard that addresses the majority of real-world accessibility barriers."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
