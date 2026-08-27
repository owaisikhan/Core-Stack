import { BlogPage } from "@/app/_components/pages/BlogPage";
import { siteContent } from "@/app/_lib/site-content";

export default function Page() {
  return <BlogPage page={siteContent.blog} />;
}
