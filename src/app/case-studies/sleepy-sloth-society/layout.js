import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { SLEEPY_SLOTH_SOCIETY_CASE_STUDY } from "../../../../lib/caseStudies/sleepySlothSocietyData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${SLEEPY_SLOTH_SOCIETY_CASE_STUDY.name} Case Study`,
  description: SLEEPY_SLOTH_SOCIETY_CASE_STUDY.heroIntro,
  path: "/case-studies/sleepy-sloth-society",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: SLEEPY_SLOTH_SOCIETY_CASE_STUDY.name, url: "/case-studies/sleepy-sloth-society" },
          ]),
          caseStudyJsonLd({
            name: SLEEPY_SLOTH_SOCIETY_CASE_STUDY.name,
            description: SLEEPY_SLOTH_SOCIETY_CASE_STUDY.heroIntro,
            url: "/case-studies/sleepy-sloth-society",
          }),
        ]}
      />
      {children}
    </>
  );
}
