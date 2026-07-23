import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { CASH_BOYS_CASE_STUDY } from "../../../../lib/caseStudies/cashBoysData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${CASH_BOYS_CASE_STUDY.name} Case Study`,
  description: CASH_BOYS_CASE_STUDY.heroIntro,
  path: "/case-studies/cash-boys",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: CASH_BOYS_CASE_STUDY.name, url: "/case-studies/cash-boys" },
          ]),
          caseStudyJsonLd({
            name: CASH_BOYS_CASE_STUDY.name,
            description: CASH_BOYS_CASE_STUDY.heroIntro,
            url: "/case-studies/cash-boys",
          }),
        ]}
      />
      {children}
    </>
  );
}
