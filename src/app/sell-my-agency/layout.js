import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd } from "../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: "Sell Your Agency",
  description: "Looking to sell your WordPress or design agency? Talk to Saqrih.",
  path: "/sell-my-agency",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd data={breadcrumbJsonLd([{"name":"Home","url":"/"},{"name":"Sell Your Agency","url":"/sell-my-agency"}])} />
      {children}
    </>
  );
}
