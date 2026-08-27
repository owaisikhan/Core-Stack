import Link from "next/link";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function CardList({ items }) {
  return (
    <div className="inner_block">
      {items.map((it, i) => (
        <div className="card" key={i}>
          <h3 className="secondary_title">{it.title}</h3>
          {it.body ? <p className="primary_text">{it.body}</p> : null}
        </div>
      ))}
    </div>
  );
}

export function Panel({ p, eager }) {
  return (
    <>
      <div className="block image_block">
        <SiteImage src={p.imgs && p.imgs[0]} eager={eager} />
      </div>
      <div className="block">
        <h2 className="title">{p.title}</h2>
        <CardList items={p.items || []} />
        {p.cta ? (
          <div className="section_cta">
            <Link href="/contact-us" className="primary_cta">
              {p.cta}
            </Link>
          </div>
        ) : null}
      </div>
    </>
  );
}
