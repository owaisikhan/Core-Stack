import { notFound } from "next/navigation";
import { PageBody } from "@/app/_components/sections/PageBody";
import { siteContent } from "@/app/_lib/site-content";

export function generateStaticParams() {
  return Object.keys(siteContent)
    .filter((key) => key.startsWith("industries/"))
    .map((key) => ({ slug: key.split("/")[1] }));
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const page = siteContent["industries/" + slug];
  if (!page) notFound();
  return <PageBody page={page} />;
}
