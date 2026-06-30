import { D_AND_D_FINANCIAL_CASE_STUDY } from "../../../../lib/caseStudies/dAndDFinancialData";

export const metadata = {
  title: `${D_AND_D_FINANCIAL_CASE_STUDY.name} Case Study`,
  description: D_AND_D_FINANCIAL_CASE_STUDY.heroIntro,
};

export default function DAndDFinancialLayout({ children }) {
  return children;
}
