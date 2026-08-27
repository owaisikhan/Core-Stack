"use client";

import { SiteImage } from "@/app/_components/ui/SiteImage";

export function BlogPage({ page }) {
  return (
    <>
      <div className="banner inner_banner">
        <div className="banner_bg">
          <div className="main_container">
            <div className="banner_inner">
              <div className="banner_dtl">
                <div className="kit_crumbs">
                  <span>Blogs</span>
                </div>
                <h1 className="banner_title">Blogs</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_padding">
        <div className="main_container">
          <div className="kit_blog_layout">
            <div className="kit_blog_grid">
              {page.posts.map((p, i) => (
                <article className="type_card" key={i}>
                  <div className="image_block">
                    <SiteImage src={p.img} alt={p.title} />
                  </div>
                  <div className="type_cnt">
                    <a className="secondary_title" href="#" onClick={(e) => e.preventDefault()}>
                      {p.title}
                    </a>
                    <p className="primary_text kit_meta">{p.date}</p>
                    <a className="link" href="#" onClick={(e) => e.preventDefault()}>
                      Read More
                    </a>
                  </div>
                </article>
              ))}
            </div>
            <aside className="kit_blog_side">
              <h3 className="foot_title">Categories</h3>
              <ul className="footer_link">
                {page.categories.map((c) => (
                  <li key={c}>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                      {c}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="kit_pager">
                <span className="active">1</span>
                <span>2</span>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
