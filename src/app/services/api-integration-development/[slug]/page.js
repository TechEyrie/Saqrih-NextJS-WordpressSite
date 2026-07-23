import { notFound } from "next/navigation";
import ApiIntegrationSubClient from "./ApiIntegrationSubClient";
import {
  getAllApiIntegrationSubServiceSlugs,
  getApiIntegrationSubService,
} from "../../../../../lib/services/apiIntegrationDevelopment";

export function generateStaticParams() {
  return getAllApiIntegrationSubServiceSlugs().map((slug) => ({ slug }));
}

export default async function ApiIntegrationSubPage({ params }) {
  const { slug } = await params;
  const sub = getApiIntegrationSubService(slug);
  if (!sub) notFound();
  return <ApiIntegrationSubClient sub={sub} />;
}
