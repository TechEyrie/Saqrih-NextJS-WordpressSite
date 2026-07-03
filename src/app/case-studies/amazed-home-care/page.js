"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { AMAZED_HOME_CARE_CASE_STUDY } from "../../../../lib/caseStudies/amazedHomeCareData";

export default function AmazedHomeCareCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={AMAZED_HOME_CARE_CASE_STUDY}
      pageKey="case-study-amazed-home-care"
    />
  );
}
