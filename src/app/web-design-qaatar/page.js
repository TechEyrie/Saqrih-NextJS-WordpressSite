import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { WEBSITE_DEV_HOME, WEBSITE_DEV_HOME_FAQS } from "../../../lib/services/websiteDevelopmentHome";
import WebsiteDevelopmentHomeClient from "../services/website-design/WebsiteDevelopmentHomeClient";

const PATH = "/web-design-qaatar";
const TITLE = `${WEBSITE_DEV_HOME.title} in Qaatar`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: WEBSITE_DEV_HOME.description,
  path: PATH,
});

export default function Page() {
  
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={WEBSITE_DEV_HOME.description}
      serviceType="Website design"
      faqs={WEBSITE_DEV_HOME_FAQS}
    >
      <WebsiteDevelopmentHomeClient />
    </QatarAliasPage>
  );
}
