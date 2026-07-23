import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Divi Development",
  description: "Expert Divi theme development, customization, and performance optimization.",
  path: "/wordpress/divi",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Divi Development","url":"/wordpress/divi"}]),
          serviceJsonLd({
            name: "WordPress Divi Development",
            description: "Expert Divi theme development, customization, and performance optimization.",
            url: "/wordpress/divi",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"All of the Divi Theme Benefits, None of the Logistics","answer":"Get the power of Divi without dealing with technical complexity. We handle setup, customization, and maintenance so you can focus on your business."},{"question":"Tried-and-True Success with the WordPress Divi Theme","answer":"We've built and supported numerous Divi websites, helping businesses get reliable design, performance, and long-term stability."},{"question":"The Best Theme Keeps Getting Better","answer":"Divi is regularly updated with new features, performance improvements, and security enhancements, keeping your site future-ready."},{"question":"WordPress Hosting for Divi Websites","answer":"We provide optimized hosting environments designed specifically for Divi to ensure speed, stability, and smooth performance."},{"question":"What is Divi in WordPress?","answer":"Divi is a premium WordPress theme and visual builder that lets you design websites using drag-and-drop tools without coding."},{"question":"What is the Divi Theme Builder?","answer":"It's a feature that allows you to create custom layouts for headers, footers, and entire page structures across your website."},{"question":"What are the system requirements for running Divi?","answer":"Divi requires a modern WordPress setup with updated PHP, sufficient server resources, and a stable hosting environment for best performance."},{"question":"Where can I find Divi documentation?","answer":"Official documentation is available from Elegant Themes, covering setup guides, features, and troubleshooting resources."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
