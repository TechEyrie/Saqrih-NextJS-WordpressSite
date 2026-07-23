import { notFound } from "next/navigation";
import WebsiteDevSubServiceClient from "./WebsiteDevSubServiceClient";
import {
  getAllWebsiteDevSubServiceSlugs,
  getWebsiteDevSubService,
} from "../../../../../lib/services/websiteDevelopment";

export function generateStaticParams() {
  return getAllWebsiteDevSubServiceSlugs().map((slug) => ({ slug }));
}

export default async function WebsiteDevelopmentSubServicePage({ params }) {
  const { slug } = await params;
  const sub = getWebsiteDevSubService(slug);
  if (!sub) notFound();
  return <WebsiteDevSubServiceClient sub={sub} />;
}
