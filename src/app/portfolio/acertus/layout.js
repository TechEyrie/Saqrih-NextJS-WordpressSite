import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Acertus Case Study",
  description: "Portfolio showcase: Acertus project by Saqrih.",
  path: "/portfolio/acertus",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Acertus Case Study","url":"/portfolio/acertus"}])} />
      {children}
    </>
  );
}
