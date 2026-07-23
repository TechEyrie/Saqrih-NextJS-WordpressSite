import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { D_AND_D_FINANCIAL_CASE_STUDY } from "../../../../lib/caseStudies/dAndDFinancialData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${D_AND_D_FINANCIAL_CASE_STUDY.name} Case Study`,
  description: D_AND_D_FINANCIAL_CASE_STUDY.heroIntro,
  path: "/case-studies/d-and-d-financial",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: D_AND_D_FINANCIAL_CASE_STUDY.name, url: "/case-studies/d-and-d-financial" },
          ]),
          caseStudyJsonLd({
            name: D_AND_D_FINANCIAL_CASE_STUDY.name,
            description: D_AND_D_FINANCIAL_CASE_STUDY.heroIntro,
            url: "/case-studies/d-and-d-financial",
          }),
        ]}
      />
      {children}
    </>
  );
}
