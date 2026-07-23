import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { EARTHSCAPE_CASE_STUDY } from "../../../../lib/caseStudies/earthscapeData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${EARTHSCAPE_CASE_STUDY.name} Case Study`,
  description: EARTHSCAPE_CASE_STUDY.heroIntro,
  path: "/case-studies/earthscape",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: EARTHSCAPE_CASE_STUDY.name, url: "/case-studies/earthscape" },
          ]),
          caseStudyJsonLd({
            name: EARTHSCAPE_CASE_STUDY.name,
            description: EARTHSCAPE_CASE_STUDY.heroIntro,
            url: "/case-studies/earthscape",
          }),
        ]}
      />
      {children}
    </>
  );
}
