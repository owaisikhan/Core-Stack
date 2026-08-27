import Link from "next/link";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function Pills({ s }) {
  return (
    <div className="section_padding section_bg">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
        <div className="inner_sec_top smart_pos">
          {s.imgs && s.imgs[0] ? (
            <div className="image_block">
              <SiteImage src={s.imgs[0]} />
            </div>
          ) : null}
          <div className="inner_sec_top sm_pos_blocks">
            {(s.items || []).map((it, i) => (
              <div className="sm_pos_card" key={i}>
                <h3 className="secondary_title">{it.title}</h3>
                {it.body ? <p className="primary_text">{it.body}</p> : null}
              </div>
            ))}
          </div>
        </div>
        {s.cta ? (
          <div className="section_cta">
            <Link href="/contact-us" className="primary_cta">
              {s.cta}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
