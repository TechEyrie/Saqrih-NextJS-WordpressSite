"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { PATHFINDERS_CASE_STUDY } from "../../../../lib/caseStudies/pathfindersData";

export default function PathfindersCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={PATHFINDERS_CASE_STUDY}
      pageKey="case-study-pathfinders"
    />
  );
}
