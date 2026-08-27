import Link from "next/link";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";
import { ScrollRow } from "@/app/_components/ui/ScrollRow";

const INDUSTRY_HREF = {
  Retail: "/industries/retail",
  Food: "/industries/food",
  "Health & Beauty": "/industries/health-beauty",
  Automotive: "/industries/automotive",
  Services: "/industries/services",
};

export function CardGrid({ s }) {
  return (
    <div className="section_padding right_zero section_bg">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
      </div>
      <div>
        <ScrollRow className="inner_sec_top typ_stories main_container">
          {(s.items || []).map((it, i) => (
            <div className="type_card" key={i}>
              <div className="image_block">
                <SiteImage src={it.img} eager={i < 3} />
                <ul className="typ_pt" />
              </div>
              <div className="type_cnt">
                <Link href={INDUSTRY_HREF[it.title] || "/"} className="secondary_title">
                  {it.title}
                </Link>
                {it.body ? <p className="primary_text">{it.body}</p> : null}
                <Link href={INDUSTRY_HREF[it.title] || "/"} className="link">
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </ScrollRow>
      </div>
    </div>
  );
}
