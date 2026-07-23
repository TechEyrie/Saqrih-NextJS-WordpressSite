import { buildPageMetadata } from "../../../../lib/siteMetadata";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Tiger Case Study",
  description: "Portfolio showcase: Tiger project by Saqrih.",
  path: "/portfolio/tiger",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Tiger Case Study","url":"/portfolio/tiger"}])} />
      {children}
    </>
  );
}
