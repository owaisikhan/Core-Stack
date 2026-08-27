import Link from "next/link";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function Statement({ s }) {
  const img = s.imgs && s.imgs[0];
  return (
    <div className="section_padding">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
        {s.ledes && s.ledes.length > 1
          ? s.ledes.slice(1).map((t, i) => (
              <p className="primary_text" key={i} style={{ maxWidth: 900, margin: "0 auto 12px" }}>
                {t}
              </p>
            ))
          : null}
        {img ? (
          <div className="inner_sec_top">
            <div className="image_block">
              <SiteImage src={img} />
            </div>
          </div>
        ) : null}
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
