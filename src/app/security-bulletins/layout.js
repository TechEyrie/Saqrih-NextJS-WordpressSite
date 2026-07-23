import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Security Bulletins",
  description: "WordPress security updates and bulletins from Saqrih.",
  path: "/security-bulletins",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Security Bulletins","url":"/security-bulletins"}])} />
      {children}
    </>
  );
}
