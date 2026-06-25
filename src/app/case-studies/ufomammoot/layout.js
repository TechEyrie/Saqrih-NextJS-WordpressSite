import { UFOMAMMOOT_CASE_STUDY } from "../../../../lib/caseStudies/ufomammootData";

export const metadata = {
  title: `${UFOMAMMOOT_CASE_STUDY.name} Case Study`,
  description: UFOMAMMOOT_CASE_STUDY.heroIntro,
};

export default function UfomammootLayout({ children }) {
  return children;
}
