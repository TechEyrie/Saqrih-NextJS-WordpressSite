import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { getWebAppDevSubPage } from "../../../lib/services/webApplicationDevelopmentSubPages";
import WebAppDevSubServiceHomeClient from "../services/web-application-development/[slug]/WebAppDevSubServiceHomeClient";

const page = getWebAppDevSubPage("software-development");

const PATH = "/software-development-qatar";
const TITLE = `${page.title} in Qatar`;

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
      serviceType="Software Development"
      faqs={page.faqs}
    >
      <WebAppDevSubServiceHomeClient page={page} />
    </QatarAliasPage>
  );
}
