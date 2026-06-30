import { PATHFINDERS_CASE_STUDY } from "../../../../lib/caseStudies/pathfindersData";

export const metadata = {
  title: `${PATHFINDERS_CASE_STUDY.name} Case Study`,
  description: PATHFINDERS_CASE_STUDY.heroIntro,
};

export default function PathfindersLayout({ children }) {
  return children;
}
