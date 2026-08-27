import Link from "next/link";
import { SectionHead } from "@/app/_components/sections/SectionHead";

export function ListSection({ s }) {
  return (
    <div className="section_padding">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
        <ul className="typ_pt kit_ticklist">
          {(s.list || []).map((t, i) => (
            <li key={i}>
              <img src="/assets/icons/tick_list.png" alt="" />
              {t}
            </li>
          ))}
        </ul>
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
