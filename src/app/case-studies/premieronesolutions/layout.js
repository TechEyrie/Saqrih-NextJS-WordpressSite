import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { PREMIER_ONE_SOLUTIONS_CASE_STUDY } from "../../../../lib/caseStudies/premieronesolutionsData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${PREMIER_ONE_SOLUTIONS_CASE_STUDY.name} Case Study`,
  description: PREMIER_ONE_SOLUTIONS_CASE_STUDY.heroIntro,
  path: "/case-studies/premieronesolutions",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: PREMIER_ONE_SOLUTIONS_CASE_STUDY.name, url: "/case-studies/premieronesolutions" },
          ]),
          caseStudyJsonLd({
            name: PREMIER_ONE_SOLUTIONS_CASE_STUDY.name,
            description: PREMIER_ONE_SOLUTIONS_CASE_STUDY.heroIntro,
            url: "/case-studies/premieronesolutions",
          }),
        ]}
      />
      {children}
    </>
  );
}
