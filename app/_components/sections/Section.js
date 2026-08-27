import { TabStrip } from "@/app/_components/sections/TabStrip";
import { Split } from "@/app/_components/sections/Split";
import { Features } from "@/app/_components/sections/Features";
import { CardGrid } from "@/app/_components/sections/CardGrid";
import { Showcase } from "@/app/_components/sections/Showcase";
import { Pills } from "@/app/_components/sections/Pills";
import { Statement } from "@/app/_components/sections/Statement";
import { LogoWall } from "@/app/_components/sections/LogoWall";
import { Faq } from "@/app/_components/sections/Faq";
import { ListSection } from "@/app/_components/sections/ListSection";

// Client reviews are omitted rather than invented — the source carousel is
// client-rendered on baseer.ca and its text wasn't in the captured markup.
export function Section({ s }) {
  switch (s.kind) {
    case "tabstrip":
      return <TabStrip s={s} />;
    case "split":
      return <Split s={s} />;
    case "features":
      return <Features s={s} />;
    case "cardgrid":
      return <CardGrid s={s} />;
    case "showcase":
      return <Showcase s={s} />;
    case "pills":
      return <Pills s={s} />;
    case "logowall":
      return <LogoWall s={s} />;
    case "faq":
      return <Faq s={s} />;
    case "list":
      return <ListSection s={s} />;
    case "reviews":
      return null;
    default:
      return <Statement s={s} />;
  }
}
