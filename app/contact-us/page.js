import { ContactPage } from "@/app/_components/pages/ContactPage";
import { siteContent } from "@/app/_lib/site-content";

export default function Page() {
  return <ContactPage page={siteContent["contact-us"]} />;
}
