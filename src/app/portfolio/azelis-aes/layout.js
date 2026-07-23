import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Azelis AES Case Study",
  description: "Portfolio showcase: Azelis AES project by Saqrih.",
  path: "/portfolio/azelis-aes",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Azelis AES Case Study","url":"/portfolio/azelis-aes"}])} />
      {children}
    </>
  );
}
