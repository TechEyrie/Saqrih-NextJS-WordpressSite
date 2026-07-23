import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress Website Development",
  description: "Professional WordPress development from Saqrih—custom builds, integrations, and scalable architecture.",
  path: "/wordpress/development",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress Website Development","url":"/wordpress/development"}]),
          serviceJsonLd({
            name: "WordPress Website Development",
            description: "Professional WordPress development from Saqrih—custom builds, integrations, and scalable architecture.",
            url: "/wordpress/development",
            serviceType: "WordPress services",
          }),
          
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
