"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { INFINITYSTORE_CASE_STUDY } from "../../../../lib/caseStudies/infinitystoreData";

export default function InfinityStoreCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={INFINITYSTORE_CASE_STUDY}
      pageKey="case-study-infinitystore"
    />
  );
}
