import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { EXPEDITION_LABS_CASE_STUDY } from "../../../../lib/caseStudies/expeditionLabsData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${EXPEDITION_LABS_CASE_STUDY.name} Case Study`,
  description: EXPEDITION_LABS_CASE_STUDY.heroIntro,
  path: "/case-studies/expedition-labs",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: EXPEDITION_LABS_CASE_STUDY.name, url: "/case-studies/expedition-labs" },
          ]),
          caseStudyJsonLd({
            name: EXPEDITION_LABS_CASE_STUDY.name,
            description: EXPEDITION_LABS_CASE_STUDY.heroIntro,
            url: "/case-studies/expedition-labs",
          }),
        ]}
      />
      {children}
    </>
  );
}
