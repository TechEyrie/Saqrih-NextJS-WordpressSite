import { buildPageMetadata } from "../../lib/siteMetadata";
import JsonLd from "../../components/seo/JsonLd";
import { breadcrumbJsonLd, faqPageJsonLd, webPageJsonLd } from "../../lib/jsonLd";
import { HOMEPAGE_FAQS } from "../../lib/homepageFaqs";
import IcomatPage from "./icomat1/page";

const HOME_TITLE = "Saqrih - Web and Software Development Company in Doha, Qatar";
const HOME_DESCRIPTION =
  "Saqrih is a Qatar-based digital agency delivering website development, web apps, SaaS, e-commerce, mobile apps, WordPress, CMS, APIs, and ongoing support.";

export const metadata = buildPageMetadata({
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  path: "/",
});

export default function Home() {
  return (
    <>
      <JsonLd
        data={[
          webPageJsonLd({
            name: HOME_TITLE,
            description: HOME_DESCRIPTION,
            url: "/",
          }),
          breadcrumbJsonLd([{ name: "Home", url: "/" }]),
          faqPageJsonLd(HOMEPAGE_FAQS),
        ]}
      />
      <IcomatPage />
    </>
  );
}
