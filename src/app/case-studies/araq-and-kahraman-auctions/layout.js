import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY } from "../../../../lib/caseStudies/araqAndKahramanAuctionsData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY.name} Case Study`,
  description: ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY.heroIntro,
  path: "/case-studies/araq-and-kahraman-auctions",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            {
              name: ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY.name,
              url: "/case-studies/araq-and-kahraman-auctions",
            },
          ]),
          caseStudyJsonLd({
            name: ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY.name,
            description: ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY.heroIntro,
            url: "/case-studies/araq-and-kahraman-auctions",
          }),
        ]}
      />
      {children}
    </>
  );
}