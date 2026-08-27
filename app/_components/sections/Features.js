import Link from "next/link";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function Features({ s }) {
  return (
    <div className="section_padding">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
      </div>
      <div className="inner_sec_top new_icon_section">
        <div className="new_icon_block scroll_effect main_container">
          {(s.items || []).map((it, i) => (
            <div className="new_icon_card" key={i}>
              {it.img ? (
                <div className="icon">
                  <SiteImage src={it.img} />
                </div>
              ) : null}
              <h3 className="secondary_title">{it.title}</h3>
              {it.body ? <p>{it.body}</p> : null}
            </div>
          ))}
        </div>
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
