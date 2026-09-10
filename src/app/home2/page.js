import { buildPageMetadata } from "../../../lib/siteMetadata";
import JsonLd from "../../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../../../lib/jsonLd";
import { HOMEPAGE_FAQS } from "../../../lib/homepageFaqs";
import Home2Client from "./Home2Client";

const HOME2_TITLE =
  "Saqrih - Web and Software Development Company in Doha, Qatar";
const HOME2_DESCRIPTION =
  "Saqrih is a Qatar-based digital agency delivering website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support.";

export const metadata = buildPageMetadata({
  title: HOME2_TITLE,
  description: HOME2_DESCRIPTION,
  path: "/home2",
});

export default function Home2Page() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: HOME2_TITLE,
            description: HOME2_DESCRIPTION,
            url: "/home2",
          }),
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Home (Mockup Hero)", url: "/home2" },
          ]),
          faqPageJsonLd(HOMEPAGE_FAQS),
        ]}
      />
      <Home2Client />
    </>
  );
}
