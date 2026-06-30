"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { EARTHSCAPE_CASE_STUDY } from "../../../../lib/caseStudies/earthscapeData";

export default function EarthscapeCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={EARTHSCAPE_CASE_STUDY}
      pageKey="case-study-earthscape"
    />
  );
}
