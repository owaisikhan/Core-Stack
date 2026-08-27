"use client";

import { useState } from "react";
import { PlusIcon, MinusIcon } from "@/app/_components/ui/icons";

export function Faq({ s }) {
  const [open, setOpen] = useState(0);
  const qa = (s.qa || []).filter((x) => x.q || x.a);
  if (!qa.length) return null;
  const anonymous = !qa.some((x) => x.q);

  return (
    <div className="section_padding section_bg">
      <div className="main_container">
        <div className="feat_faqs">
          <div className="blocks">
            <div className="section_head">
              <div className="sub_title" />
              <h2 className="primary_title">{s.title || "Frequently Asked Questions"}</h2>
              <p className="primary_text" />
            </div>
          </div>
          <div className="blocks faq_col">
            {anonymous ? (
              <p className="kit_note">
                Question text for this page was not captured in the source scrape — answers only.
              </p>
            ) : null}
            {qa.map((x, i) => (
              <div className={"faq_block" + (i === open ? " active" : "")} key={i}>
                <div className="title faq_title" onClick={() => setOpen(i === open ? -1 : i)}>
                  {x.q || "Answer " + (i + 1)}
                  <div className="icon">
                    <div className="plus" style={{ display: i === open ? "none" : "block" }}>
                      <PlusIcon />
                    </div>
                    <div className="minus" style={{ display: i === open ? "block" : "none" }}>
                      <MinusIcon />
                    </div>
                  </div>
                </div>
                <div className="ans" style={{ display: i === open ? "block" : "none" }}>
                  <p className="primary_text">{x.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
