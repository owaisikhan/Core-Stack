import Link from "next/link";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";
import { ScrollRow } from "@/app/_components/ui/ScrollRow";

export function Features({ s }) {
  return (
    <div className="section_padding">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
      </div>
      <div className="inner_sec_top new_icon_section">
        <ScrollRow className="new_icon_block scroll_effect main_container">
          {(s.items || []).map((it, i) => {
            // A handful of sections carry their per-item icons in the
            // section-level imgs array (index-aligned to items) instead of
            // on the item itself — this is one of those.
            const icon = it.img || (s.imgs && s.imgs[i]);
            return (
              <div className="new_icon_card" key={i}>
                {icon ? (
                  <div className="icon">
                    <SiteImage src={icon} />
                  </div>
                ) : null}
                <h3 className="secondary_title">{it.title}</h3>
                {it.body ? <p>{it.body}</p> : null}
              </div>
            );
          })}
        </ScrollRow>
        {s.cta ? (
          <div className="section_cta main_container">
            <Link href="/contact-us" className="primary_cta">
              {s.cta}
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
