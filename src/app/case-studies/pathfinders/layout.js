import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { PATHFINDERS_CASE_STUDY } from "../../../../lib/caseStudies/pathfindersData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${PATHFINDERS_CASE_STUDY.name} Case Study`,
  description: PATHFINDERS_CASE_STUDY.heroIntro,
  path: "/case-studies/pathfinders",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: PATHFINDERS_CASE_STUDY.name, url: "/case-studies/pathfinders" },
          ]),
          caseStudyJsonLd({
            name: PATHFINDERS_CASE_STUDY.name,
            description: PATHFINDERS_CASE_STUDY.heroIntro,
            url: "/case-studies/pathfinders",
          }),
        ]}
      />
      {children}
    </>
  );
}
