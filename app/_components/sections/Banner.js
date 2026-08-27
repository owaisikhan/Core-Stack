import Link from "next/link";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function Banner({ hero, crumbs }) {
  if (!hero) return null;
  return (
    <div className="banner">
      <div className="banner_bg">
        <div className="main_container">
          <div className="banner_inner">
            <div className="banner_dtl">
              {crumbs && crumbs.length ? (
                <div className="kit_crumbs">
                  {crumbs.map((c, i) => (
                    <span key={i}>{c}</span>
                  ))}
                </div>
              ) : null}
              <h1 className="banner_title">{hero.title}</h1>
              {hero.lede ? <p className="banner_text">{hero.lede}</p> : null}
              {hero.cta ? (
                <div className="banner_cta">
                  <Link href="/contact-us" className="primary_cta">
                    {hero.cta}
                  </Link>
                </div>
              ) : null}
            </div>
            <div className="banner_image">
              <SiteImage src={hero.img} className="kit_banner_img" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
