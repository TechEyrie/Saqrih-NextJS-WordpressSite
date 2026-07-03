import { KALA_HOLDINGS_CASE_STUDY } from "../../../../lib/caseStudies/kalaHoldingsData";

export const metadata = {
  title: `${KALA_HOLDINGS_CASE_STUDY.name} Case Study | Saqrih`,
  description: KALA_HOLDINGS_CASE_STUDY.heroIntro,
};

export default function KalaHoldingsLayout({ children }) {
  return children;
}
