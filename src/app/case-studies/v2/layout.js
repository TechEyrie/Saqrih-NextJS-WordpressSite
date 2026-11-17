import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { V2_CASE_STUDY } from "../../../../lib/caseStudies/v2Data";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${V2_CASE_STUDY.name} Case Study`,
  description: V2_CASE_STUDY.heroIntro,
  path: "/case-studies/v2",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: V2_CASE_STUDY.name, url: "/case-studies/v2" },
          ]),
          caseStudyJsonLd({
            name: V2_CASE_STUDY.name,
            description: V2_CASE_STUDY.heroIntro,
            url: "/case-studies/v2",
          }),
        ]}
      />
      {children}
    </>
  );
}