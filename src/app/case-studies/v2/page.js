"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { V2_CASE_STUDY } from "../../../../lib/caseStudies/v2Data";

export default function V2CaseStudyPage() {
  return (
    <CaseStudyPage caseStudy={V2_CASE_STUDY} pageKey="case-study-v2" />
  );
}