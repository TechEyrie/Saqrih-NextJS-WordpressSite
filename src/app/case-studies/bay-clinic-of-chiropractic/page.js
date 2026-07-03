"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY } from "../../../../lib/caseStudies/bayClinicOfChiropracticData";

export default function BayClinicOfChiropracticCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY}
      pageKey="case-study-bay-clinic-of-chiropractic"
    />
  );
}
