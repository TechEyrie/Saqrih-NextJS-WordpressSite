import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress PCI Compliance",
  description: "PCI compliance for WordPress ecommerce and payment flows.",
  path: "/wordpress/pci-compliance",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress PCI Compliance","url":"/wordpress/pci-compliance"}]),
          serviceJsonLd({
            name: "WordPress PCI Compliance",
            description: "PCI compliance for WordPress ecommerce and payment flows.",
            url: "/wordpress/pci-compliance",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"What is PCI DSS and why does it matter for my WordPress site?","answer":"PCI DSS is a global security standard designed to protect cardholder data during online transactions. If your WordPress website processes payments, PCI compliance helps reduce security risks and protects customer information."},{"question":"Do all WordPress websites need to be PCI compliant?","answer":"Only websites that process, transmit, or store payment card information are required to follow PCI DSS standards. Informational websites without payment functionality typically do not require PCI compliance."},{"question":"Can I achieve PCI compliance using WordPress alone?","answer":"No. WordPress provides the website platform, but PCI compliance also depends on hosting, payment gateways, security practices, server configurations, and ongoing monitoring."},{"question":"What's the easiest way to make my WordPress store PCI compliant?","answer":"The simplest approach is to use trusted payment providers like Stripe or PayPal, secure hosting, SSL certificates, regular updates, and strong website security practices."},{"question":"What are some common mistakes that cause PCI non-compliance on WordPress?","answer":"Common issues include outdated plugins, insecure hosting, weak passwords, storing cardholder data locally, missing SSL certificates, and poor access control practices."},{"question":"Is using an SSL certificate enough to be PCI compliant?","answer":"No. SSL encryption is only one part of PCI compliance. Full compliance also requires secure systems, access controls, monitoring, and proper payment data handling."},{"question":"Does PCI compliance apply if I only use WooCommerce with PayPal or Stripe?","answer":"Yes. Even if third-party gateways handle payment processing, your website still plays a role in the transaction process and should follow PCI security best practices."},{"question":"What happens if I don't comply with PCI DSS?","answer":"Failure to comply can lead to data breaches, financial penalties, increased transaction fees, legal risks, and damage to customer trust."},{"question":"How often do I need to validate PCI compliance?","answer":"PCI compliance should be reviewed regularly through security updates, scans, audits, and ongoing monitoring to ensure your website remains protected."},{"question":"Can I store cardholder data on my WordPress site securely?","answer":"It is generally recommended to avoid storing cardholder data directly on your WordPress website unless you have advanced security infrastructure and strict compliance controls in place."},{"question":"Can I create custom themes and checkout pages on WordPress.com without losing PCI compliance?","answer":"Yes, but custom themes and checkout experiences must still follow PCI DSS requirements and security best practices to maintain compliance."},{"question":"Is there an official level of PCI compliance that WordPress supports for eCommerce sites?","answer":"PCI compliance levels are based on transaction volume and business requirements, not WordPress itself. Your compliance obligations depend on how your ecommerce store processes payments."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
