import { AMAZED_HOME_CARE_CASE_STUDY } from "../../../../lib/caseStudies/amazedHomeCareData";

export const metadata = {
  title: `${AMAZED_HOME_CARE_CASE_STUDY.name} Case Study | Saqrih`,
  description: AMAZED_HOME_CARE_CASE_STUDY.heroIntro,
};

export default function AmazedHomeCareLayout({ children }) {
  return children;
}
