import { INFINITYSTORE_CASE_STUDY } from "../../../../lib/caseStudies/infinitystoreData";

export const metadata = {
  title: `${INFINITYSTORE_CASE_STUDY.name} Case Study`,
  description: INFINITYSTORE_CASE_STUDY.heroIntro,
};

export default function InfinityStoreLayout({ children }) {
  return children;
}
