"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { CASH_BOYS_CASE_STUDY } from "../../../../lib/caseStudies/cashBoysData";

export default function CashBoysCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={CASH_BOYS_CASE_STUDY}
      pageKey="case-study-cash-boys"
    />
  );
}
