import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { KALA_HOLDINGS_CASE_STUDY } from "../../../../lib/caseStudies/kalaHoldingsData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${KALA_HOLDINGS_CASE_STUDY.name} Case Study`,
  description: KALA_HOLDINGS_CASE_STUDY.heroIntro,
  path: "/case-studies/kala-holdings",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: KALA_HOLDINGS_CASE_STUDY.name, url: "/case-studies/kala-holdings" },
          ]),
          caseStudyJsonLd({
            name: KALA_HOLDINGS_CASE_STUDY.name,
            description: KALA_HOLDINGS_CASE_STUDY.heroIntro,
            url: "/case-studies/kala-holdings",
          }),
        ]}
      />
      {children}
    </>
  );
}
