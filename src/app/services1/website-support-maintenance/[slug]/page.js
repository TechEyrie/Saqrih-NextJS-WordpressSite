import { notFound } from "next/navigation";
import WebsiteSupportMaintenanceSubClient from "./WebsiteSupportMaintenanceSubClient";
import {
  getAllWebsiteSupportMaintenanceSubServiceSlugs,
  getWebsiteSupportMaintenanceSubService,
} from "../../../../../lib/services/websiteSupportMaintenance";

export function generateStaticParams() {
  return getAllWebsiteSupportMaintenanceSubServiceSlugs().map((slug) => ({
    slug,
  }));
}

export default async function WebsiteSupportMaintenanceSubPage({ params }) {
  const { slug } = await params;
  const sub = getWebsiteSupportMaintenanceSubService(slug);
  if (!sub) notFound();
  return <WebsiteSupportMaintenanceSubClient sub={sub} />;
}
