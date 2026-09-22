import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { getWebAppDevSubPage } from "../../../lib/services/webApplicationDevelopmentSubPages";
import WebAppDevSubServiceHomeClient from "../services/web-application-development/[slug]/WebAppDevSubServiceHomeClient";

const page = getWebAppDevSubPage("ai-and-automation");

const PATH = "/ai-automation-qaatar";
const TITLE = `${page.title} in Qaatar`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: page.description,
  path: PATH,
});

export default function Page() {
  if (!page) return null;
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={page.description}
      serviceType="AI and Automation"
      faqs={page.faqs}
    >
      <WebAppDevSubServiceHomeClient page={page} />
    </QatarAliasPage>
  );
}
