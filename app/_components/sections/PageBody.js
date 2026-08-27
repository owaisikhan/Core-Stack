import { Banner } from "@/app/_components/sections/Banner";
import { Section } from "@/app/_components/sections/Section";

export function PageBody({ page }) {
  return (
    <>
      <Banner hero={page.hero} crumbs={page.crumbs} />
      {(page.sections || []).map((s, i) => (
        <Section s={s} key={i} />
      ))}
    </>
  );
}
