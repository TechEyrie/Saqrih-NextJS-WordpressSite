import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { INFINITYSTORE_CASE_STUDY } from "../../../../lib/caseStudies/infinitystoreData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${INFINITYSTORE_CASE_STUDY.name} Case Study`,
  description: INFINITYSTORE_CASE_STUDY.heroIntro,
  path: "/case-studies/infinitystore",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: INFINITYSTORE_CASE_STUDY.name, url: "/case-studies/infinitystore" },
          ]),
          caseStudyJsonLd({
            name: INFINITYSTORE_CASE_STUDY.name,
            description: INFINITYSTORE_CASE_STUDY.heroIntro,
            url: "/case-studies/infinitystore",
          }),
        ]}
      />
      {children}
    </>
  );
}
