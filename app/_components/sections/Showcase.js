"use client";

import { useState } from "react";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function Showcase({ s }) {
  const [a, setA] = useState(0);
  const items = s.items || [];
  return (
    <div className="section_padding">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
        <div className="inner_sec_top">
          <div className="acc_ct_sec">
            <div className="block">
              {items.map((it, i) => (
                <div
                  key={i}
                  className={"image_block" + (i === a ? " active" : "")}
                  style={{ display: i === a ? "block" : "none" }}
                >
                  <SiteImage src={it.img} />
                </div>
              ))}
            </div>
            <div className="block">
              {items.map((it, i) => (
                <div key={i}>
                  <div className={"acc_bk" + (i === a ? " active" : "")} onClick={() => setA(i)}>
                    <h3 className="secondary_title">{it.title}</h3>
                    {it.body ? (
                      <p className="primary_text" style={{ display: i === a ? "block" : "none" }}>
                        {it.body}
                      </p>
                    ) : null}
                  </div>
                  <div className={"image_block resp_block" + (i === a ? " active" : "")}>
                    <SiteImage src={it.img} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
