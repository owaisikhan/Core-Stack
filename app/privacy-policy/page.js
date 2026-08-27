import { LegalPage } from "@/app/_components/pages/LegalPage";
import { siteContent } from "@/app/_lib/site-content";

export default function Page() {
  return <LegalPage page={siteContent["privacy-policy"]} title="Privacy Policy" />;
}
