import { notFound } from "next/navigation";
import { PageBody } from "@/app/_components/sections/PageBody";
import { siteContent } from "@/app/_lib/site-content";

// Everything captured at the content root that isn't one of home / solutions /
// industries / the special pages (each of which owns its own route folder) is
// a business-type page: /grocery-pos-system, /clothing-ecommerce-website, etc.
const EXPLICIT_ROUTES = new Set(["home", "about-us", "features", "livedemo", "contact-us", "blog", "privacy-policy", "terms-conditions"]);

function businessTypeKeys() {
  return Object.keys(siteContent).filter((key) => !key.includes("/") && !EXPLICIT_ROUTES.has(key));
}

export function generateStaticParams() {
  return businessTypeKeys().map((slug) => ({ slug }));
}

export default async function BusinessTypePage({ params }) {
  const { slug } = await params;
  if (!businessTypeKeys().includes(slug)) notFound();
  const page = siteContent[slug];
  if (!page) notFound();
  return <PageBody page={page} />;
}
