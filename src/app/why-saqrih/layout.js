import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Why Saqrih",
  description: "Why businesses choose Saqrih for WordPress design, development, and ongoing support.",
  path: "/why-saqrih",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Why Saqrih","url":"/why-saqrih"}])} />
      {children}
    </>
  );
}
