import { notFound } from "next/navigation";
import MobileAppSubClient from "./MobileAppSubClient";
import {
  getAllMobileAppSubServiceSlugs,
  getMobileAppSubService,
} from "../../../../../lib/services/mobileAppDevelopment";

export function generateStaticParams() {
  return getAllMobileAppSubServiceSlugs().map((slug) => ({ slug }));
}

export default async function MobileAppSubPage({ params }) {
  const { slug } = await params;
  const sub = getMobileAppSubService(slug);
  if (!sub) notFound();
  return <MobileAppSubClient sub={sub} />;
}
