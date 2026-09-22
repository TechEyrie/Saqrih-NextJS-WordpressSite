import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { WORDPRESS_DEV_HOME, WORDPRESS_DEV_HOME_FAQS } from "../../../lib/services/wordpressDevelopmentHome";
import WordpressDevelopmentHomeClient from "../services/wordpress-development/WordpressDevelopmentHomeClient";

const PATH = "/wordpress-development-qaatar";
const TITLE = `${WORDPRESS_DEV_HOME.title} in Qaatar`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: WORDPRESS_DEV_HOME.description,
  path: PATH,
});

export default function Page() {
  
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={WORDPRESS_DEV_HOME.description}
      serviceType="WordPress development"
      faqs={WORDPRESS_DEV_HOME_FAQS}
    >
      <WordpressDevelopmentHomeClient />
    </QatarAliasPage>
  );
}
