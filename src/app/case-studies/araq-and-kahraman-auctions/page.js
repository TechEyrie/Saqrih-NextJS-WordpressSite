"use client";

import CaseStudyPage from "../../../../components/case-studies/CaseStudyPage";
import { ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY } from "../../../../lib/caseStudies/araqAndKahramanAuctionsData";

export default function AraqAndKahramanAuctionsCaseStudyPage() {
  return (
    <CaseStudyPage
      caseStudy={ARAQ_AND_KAHRAMAN_AUCTIONS_CASE_STUDY}
      pageKey="case-study-araq-and-kahraman-auctions"
    />
  );
}