"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { PREMIER_ONE_SOLUTIONS_CASE_STUDY } from "../../../../lib/caseStudies/premieronesolutionsData";

export default function PremierOneSolutionsCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={PREMIER_ONE_SOLUTIONS_CASE_STUDY}
      pageKey="case-study-premieronesolutions"
    />
  );
}
