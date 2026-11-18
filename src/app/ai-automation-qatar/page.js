import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { AI_AUTOMATION_HOME, AI_AUTOMATION_HOME_FAQS } from "../../../lib/services/aiAutomationHome";
import AiAutomationHomeClient from "../services/ai-automation/AiAutomationHomeClient";

const PATH = "/ai-automation-qatar";
const TITLE = `${AI_AUTOMATION_HOME.title} in Qatar`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: AI_AUTOMATION_HOME.description,
  path: PATH,
});

export default function Page() {
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={AI_AUTOMATION_HOME.description}
      serviceType="AI automation"
      faqs={AI_AUTOMATION_HOME_FAQS}
    >
      <AiAutomationHomeClient />
    </QatarAliasPage>
  );
}
