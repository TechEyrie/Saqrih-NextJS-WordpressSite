import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "WordPress by Industry",
  description: "Industry-specific WordPress solutions from Saqrih.",
  path: "/wordpress/industries",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"WordPress","url":"/wordpress"},{"name":"WordPress by Industry","url":"/wordpress/industries"}])} />
      {children}
    </>
  );
}
