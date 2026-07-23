import { notFound } from "next/navigation";
import SaasDevelopmentSubClient from "./SaasDevelopmentSubClient";
import {
  getAllSaasDevelopmentSubServiceSlugs,
  getSaasDevelopmentSubService,
} from "../../../../../lib/services/saasDevelopment";

export function generateStaticParams() {
  return getAllSaasDevelopmentSubServiceSlugs().map((slug) => ({ slug }));
}

export default async function SaasDevelopmentSubPage({ params }) {
  const { slug } = await params;
  const sub = getSaasDevelopmentSubService(slug);
  if (!sub) notFound();
  return <SaasDevelopmentSubClient sub={sub} />;
}
