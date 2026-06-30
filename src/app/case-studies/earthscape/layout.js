import { EARTHSCAPE_CASE_STUDY } from "../../../../lib/caseStudies/earthscapeData";

export const metadata = {
  title: `${EARTHSCAPE_CASE_STUDY.name} Case Study`,
  description: EARTHSCAPE_CASE_STUDY.heroIntro,
};

export default function EarthscapeLayout({ children }) {
  return children;
}
