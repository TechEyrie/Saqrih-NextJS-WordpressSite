"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { D_AND_D_FINANCIAL_CASE_STUDY } from "../../../../lib/caseStudies/dAndDFinancialData";

export default function DAndDFinancialCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={D_AND_D_FINANCIAL_CASE_STUDY}
      pageKey="case-study-d-and-d-financial"
    />
  );
}
