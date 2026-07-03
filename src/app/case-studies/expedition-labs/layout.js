import { EXPEDITION_LABS_CASE_STUDY } from "../../../../lib/caseStudies/expeditionLabsData";

export const metadata = {
  title: `${EXPEDITION_LABS_CASE_STUDY.name} Case Study | Saqrih`,
  description: EXPEDITION_LABS_CASE_STUDY.heroIntro,
};

export default function ExpeditionLabsLayout({ children }) {
  return children;
}
