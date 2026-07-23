import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Elementor Development",
  description: "Custom Elementor builds and theme development from certified WordPress experts.",
  path: "/wordpress/elementor",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Elementor Development","url":"/wordpress/elementor"}]),
          serviceJsonLd({
            name: "WordPress Elementor Development",
            description: "Custom Elementor builds and theme development from certified WordPress experts.",
            url: "/wordpress/elementor",
            serviceType: "WordPress services",
          }),
          faqPageJsonLd([{"question":"All of the Elementor benefits, none of the logistics","answer":"Get the flexibility and power of Elementor without dealing with the technical complexity behind setup, optimization, and maintenance."},{"question":"Tried-and-true success with the WordPress Elementor page builder","answer":"Our team has extensive experience building and supporting Elementor-powered WordPress websites across a wide range of industries."},{"question":"The best page builder keeps getting better","answer":"Elementor continues to evolve with regular updates focused on performance, security, design flexibility, and user experience improvements."},{"question":"WordPress hosting for Elementor websites","answer":"We provide optimized hosting environments designed to keep Elementor websites fast, stable, and reliable."}]),
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
