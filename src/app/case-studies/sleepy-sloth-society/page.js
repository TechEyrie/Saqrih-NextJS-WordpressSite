"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { SLEEPY_SLOTH_SOCIETY_CASE_STUDY } from "../../../../lib/caseStudies/sleepySlothSocietyData";

export default function SleepySlothSocietyCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={SLEEPY_SLOTH_SOCIETY_CASE_STUDY}
      pageKey="case-study-sleepy-sloth-society"
    />
  );
}
