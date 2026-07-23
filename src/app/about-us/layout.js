import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "About Saqrih",
  description: "Meet Saqrih—a Qatar-based WordPress agency serving the Gulf and international clients since 2011.",
  path: "/about-us",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"About Saqrih","url":"/about-us"}])} />
      {children}
    </>
  );
}
