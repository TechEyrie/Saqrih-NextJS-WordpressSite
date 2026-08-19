import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd, contactPageJsonLd } from "../../../lib/jsonLd";
import ContactPageClient from "./ContactPageClient";

export const metadata = buildPageMetadata({
  title: "Contact Saqrih",
  description:
    "Contact Saqrih in Doha, Qatar for website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support across the GCC.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
          contactPageJsonLd(),
        ]}
      />
      <ContactPageClient />
    </>
  );
}
