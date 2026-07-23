import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Resources",
  description: "Guides and resources for WordPress site owners and agencies.",
  path: "/resources",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Resources","url":"/resources"}])} />
      {children}
    </>
  );
}
