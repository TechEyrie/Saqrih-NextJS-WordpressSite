import { PREMIER_ONE_SOLUTIONS_CASE_STUDY } from "../../../../lib/caseStudies/premieronesolutionsData";

export const metadata = {
  title: `${PREMIER_ONE_SOLUTIONS_CASE_STUDY.name} Case Study`,
  description: PREMIER_ONE_SOLUTIONS_CASE_STUDY.heroIntro,
};

export default function PremierOneSolutionsLayout({ children }) {
  return children;
}
