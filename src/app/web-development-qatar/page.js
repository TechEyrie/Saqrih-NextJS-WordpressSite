import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { WEB_APP_DEV_HOME, WEB_APP_DEV_HOME_FAQS } from "../../../lib/services/webApplicationDevelopmentHome";
import WebApplicationDevelopmentHomeClient from "../services/web-application-development/WebApplicationDevelopmentHomeClient";

const PATH = "/web-development-qatar";
const TITLE = `${WEB_APP_DEV_HOME.title} in Qatar`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: WEB_APP_DEV_HOME.description,
  path: PATH,
});

export default function Page() {
  
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={WEB_APP_DEV_HOME.description}
      serviceType="Web application development"
      faqs={WEB_APP_DEV_HOME_FAQS}
    >
      <WebApplicationDevelopmentHomeClient />
    </QatarAliasPage>
  );
}
