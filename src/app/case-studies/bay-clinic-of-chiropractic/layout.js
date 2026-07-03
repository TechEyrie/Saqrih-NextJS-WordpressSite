import { BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY } from "../../../../lib/caseStudies/bayClinicOfChiropracticData";

export const metadata = {
  title: `${BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.name} Case Study | Saqrih`,
  description: BAY_CLINIC_OF_CHIROPRACTIC_CASE_STUDY.heroIntro,
};

export default function BayClinicOfChiropracticLayout({ children }) {
  return children;
}
