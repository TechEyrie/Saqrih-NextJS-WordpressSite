import { CASH_BOYS_CASE_STUDY } from "../../../../lib/caseStudies/cashBoysData";

export const metadata = {
  title: `${CASH_BOYS_CASE_STUDY.name} Case Study | Saqrih`,
  description: CASH_BOYS_CASE_STUDY.heroIntro,
};

export default function CashBoysLayout({ children }) {
  return children;
}
