import { PageBody } from "@/app/_components/sections/PageBody";
import { siteContent } from "@/app/_lib/site-content";

export default function HomePage() {
  return <PageBody page={siteContent.home} />;
}
