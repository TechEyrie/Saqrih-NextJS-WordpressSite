import { buildPageMetadata } from "../../../lib/siteMetadata";
import QatarAliasPage from "../../../components/services/QatarAliasPage";
import { ECOM_DEV_HOME, ECOM_DEV_HOME_FAQS } from "../../../lib/services/ecommerceDevelopmentHome";
import EcommerceDevelopmentHomeClient from "../services/ecommerce-development/EcommerceDevelopmentHomeClient";

const PATH = "/ecommerce-development-qaatar";
const TITLE = `${ECOM_DEV_HOME.title} in Qaatar`;

export const metadata = buildPageMetadata({
  title: TITLE,
  description: ECOM_DEV_HOME.description,
  path: PATH,
});

export default function Page() {
  
  return (
    <QatarAliasPage
      path={PATH}
      title={TITLE}
      description={ECOM_DEV_HOME.description}
      serviceType="E-commerce development"
      faqs={ECOM_DEV_HOME_FAQS}
    >
      <EcommerceDevelopmentHomeClient />
    </QatarAliasPage>
  );
}
