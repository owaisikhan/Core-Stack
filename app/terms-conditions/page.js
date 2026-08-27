import { LegalPage } from "@/app/_components/pages/LegalPage";
import { siteContent } from "@/app/_lib/site-content";

export default function Page() {
  return <LegalPage page={siteContent["terms-conditions"]} title="Terms & Conditions" />;
}
