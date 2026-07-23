import { notFound } from "next/navigation";
import CmsHeadlessSubClient from "./CmsHeadlessSubClient";
import {
  getAllCmsHeadlessSubServiceSlugs,
  getCmsHeadlessSubService,
} from "../../../../../lib/services/cmsHeadlessDevelopment";

export function generateStaticParams() {
  return getAllCmsHeadlessSubServiceSlugs().map((slug) => ({ slug }));
}

export default async function CmsHeadlessSubPage({ params }) {
  const { slug } = await params;
  const sub = getCmsHeadlessSubService(slug);
  if (!sub) notFound();
  return <CmsHeadlessSubClient sub={sub} />;
}
