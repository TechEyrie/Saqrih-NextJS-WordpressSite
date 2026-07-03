import { SLEEPY_SLOTH_SOCIETY_CASE_STUDY } from "../../../../lib/caseStudies/sleepySlothSocietyData";

export const metadata = {
  title: `${SLEEPY_SLOTH_SOCIETY_CASE_STUDY.name} Case Study | Saqrih`,
  description: SLEEPY_SLOTH_SOCIETY_CASE_STUDY.heroIntro,
};

export default function SleepySlothSocietyLayout({ children }) {
  return children;
}
