import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { AMAZED_HOME_CARE_CASE_STUDY } from "../../../../lib/caseStudies/amazedHomeCareData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${AMAZED_HOME_CARE_CASE_STUDY.name} Case Study`,
  description: AMAZED_HOME_CARE_CASE_STUDY.heroIntro,
  path: "/case-studies/amazed-home-care",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: AMAZED_HOME_CARE_CASE_STUDY.name, url: "/case-studies/amazed-home-care" },
          ]),
          caseStudyJsonLd({
            name: AMAZED_HOME_CARE_CASE_STUDY.name,
            description: AMAZED_HOME_CARE_CASE_STUDY.heroIntro,
            url: "/case-studies/amazed-home-care",
          }),
        ]}
      />
      {children}
    </>
  );
}
