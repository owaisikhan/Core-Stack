import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function LogoWall({ s }) {
  return (
    <div className="section_padding section_bg">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
        <div className="kit_logo_grid">
          {(s.items || []).map((it, i) => (
            <div className="kit_logo_tile" key={i}>
              <SiteImage src={it.img} alt={it.title} />
              <span>{it.title}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
