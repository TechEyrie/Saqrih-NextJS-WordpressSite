"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { EXPEDITION_LABS_CASE_STUDY } from "../../../../lib/caseStudies/expeditionLabsData";

export default function ExpeditionLabsCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={EXPEDITION_LABS_CASE_STUDY}
      pageKey="case-study-expedition-labs"
    />
  );
}
