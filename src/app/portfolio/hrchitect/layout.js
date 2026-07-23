import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "HRchitect Case Study",
  description: "Portfolio showcase: HRchitect project by Saqrih.",
  path: "/portfolio/hrchitect",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"HRchitect Case Study","url":"/portfolio/hrchitect"}])} />
      {children}
    </>
  );
}
