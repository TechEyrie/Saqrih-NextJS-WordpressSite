import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress GDPR Compliance",
  description: "GDPR-ready WordPress builds, policies, and compliance support from Saqrih.",
  path: "/wordpress/gdpr-compliance",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress GDPR Compliance","url":"/wordpress/gdpr-compliance"}]),
          serviceJsonLd({
            name: "WordPress GDPR Compliance",
            description: "GDPR-ready WordPress builds, policies, and compliance support from Saqrih.",
            url: "/wordpress/gdpr-compliance",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"Why Do I Need Help Ensuring WordPress GDPR Compliance?","answer":["GDPR is a complex piece of legislation that can be difficult to fully understand and implement correctly within a WordPress website.","As covered in the compliance requirements, meeting GDPR standards involves multiple layers of data protection, consent management, security controls, and documentation. For most businesses, managing this properly can quickly become a full-time responsibility.","In some cases, especially for companies outside the EU, a legal representative may also be required to handle communication with data protection authorities. Depending on your business type and how you collect data, Saqrih can help you determine the right approach to reduce compliance risks and avoid violations. With the right guidance and setup, achieving WordPress GDPR compliance becomes far more manageable."]},{"question":"Since Saqrih uses WordPress, are client websites GDPR compliant?","answer":"WordPress itself provides tools and features that can support GDPR compliance, but compliance depends on how a website is configured and managed. Saqrih builds and maintains websites using privacy-conscious practices, but final compliance depends on how data is collected, stored, and used by each business."},{"question":"Can Saqrih help our WordPress website become GDPR compliant?","answer":"Yes. Saqrih can help configure your WordPress website with GDPR-friendly practices, including privacy settings, consent tools, and data handling improvements to support compliance requirements. However, legal compliance ultimately depends on your business policies and how data is processed."},{"question":"A quick legal note about our GDPR compliance service","answer":"Saqrih provides technical support and implementation guidance to help improve GDPR readiness on WordPress websites. However, we do not provide legal advice, and businesses should consult a qualified legal professional to ensure full compliance with applicable data protection laws."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
