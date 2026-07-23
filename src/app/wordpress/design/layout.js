import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, serviceJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Beautiful WordPress Website Design",
  description: "Custom WordPress website design from Saqrih—Qatar-based experts in UX, branding, and conversion-focused layouts.",
  path: "/wordpress/design",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"Beautiful WordPress Website Design","url":"/wordpress/design"}]),
          serviceJsonLd({
            name: "Beautiful WordPress Website Design",
            description: "Custom WordPress website design from Saqrih—Qatar-based experts in UX, branding, and conversion-focused layouts.",
            url: "/wordpress/design",
            serviceType: "WordPress services",
          }),
          
        ].filter(Boolean)}
      />
      {children}
    </>
  );
}
