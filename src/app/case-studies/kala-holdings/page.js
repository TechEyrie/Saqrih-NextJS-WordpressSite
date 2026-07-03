"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { KALA_HOLDINGS_CASE_STUDY } from "../../../../lib/caseStudies/kalaHoldingsData";

export default function KalaHoldingsCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={KALA_HOLDINGS_CASE_STUDY}
      pageKey="case-study-kala-holdings"
    />
  );
}
