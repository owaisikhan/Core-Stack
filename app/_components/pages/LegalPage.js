"use client";

import { useState } from "react";

export function LegalPage({ page, title }) {
  const [a, setA] = useState(0);
  const items = page.nav || [];

  return (
    <>
      <div className="banner inner_banner">
        <div className="banner_bg">
          <div className="main_container">
            <div className="banner_inner">
              <div className="banner_dtl">
                <h1 className="banner_title">{title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_padding">
        <div className="main_container">
          <div className="kit_legal">
            <aside>
              <h3 className="foot_title">All</h3>
              <ul className="footer_link">
                {items.map((n, i) => (
                  <li key={n}>
                    <a
                      href="#"
                      className={i === a ? "active" : ""}
                      onClick={(e) => {
                        e.preventDefault();
                        setA(i);
                      }}
                    >
                      {n}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>
            <div>
              <h2 className="primary_title">{items[a] || title}</h2>
              <p className="kit_note">
                Body text for the legal pages is rendered client-side on baseer.ca and was not captured in the
                scrape. Section headings are real; paragraphs are intentionally blank.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
