import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Privacy Policy",
  description: "Saqrih privacy policy and data handling practices.",
  path: "/privacy-policy",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Privacy Policy","url":"/privacy-policy"}])} />
      {children}
    </>
  );
}
