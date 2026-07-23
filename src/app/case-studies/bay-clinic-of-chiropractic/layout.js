import { buildPageMetadata } from "../../../../lib/siteMetadata";
import { BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY } from "../../../../lib/caseStudies/bayClinicOfChiropracticData";
import JsonLd from "../../../../components/seo/JsonLd";
import { breadcrumbJsonLd, caseStudyJsonLd } from "../../../../lib/jsonLd";

export const metadata = buildPageMetadata({
  title: `${BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.name} Case Study`,
  description: BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.heroIntro,
  path: "/case-studies/bay-clinic-of-chiropractic",
});

export default function Layout({ children }) {
  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: "/" },
            { name: "Work", url: "/work" },
            { name: BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.name, url: "/case-studies/bay-clinic-of-chiropractic" },
          ]),
          caseStudyJsonLd({
            name: BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.name,
            description: BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.heroIntro,
            url: "/case-studies/bay-clinic-of-chiropractic",
          }),
        ]}
      />
      {children}
    </>
  );
}
