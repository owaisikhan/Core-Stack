"use client";

import { useState } from "react";
import { SectionHead } from "@/app/_components/sections/SectionHead";
import { Panel } from "@/app/_components/sections/Panel";
import { SiteImage } from "@/app/_components/ui/SiteImage";

export function TabStrip({ s }) {
  const [t, setT] = useState(0);
  const panels = s.panels || [];
  return (
    <div className="section_padding">
      <div className="main_container">
        <SectionHead title={s.title} text={s.ledes && s.ledes[0]} />
      </div>
      <div className="main_container">
        <div className="tab_section inner_sec_top">
          <ul className="pos_tabs">
            {s.tabs.map((label, i) => (
              <li key={label} className={"pos_tab_item" + (i === t ? " active" : "")} onClick={() => setT(i)}>
                {s.tabIcons && s.tabIcons[i] ? <SiteImage src={s.tabIcons[i]} className="kit_tab_icon" /> : null}
                <span>{label}</span>
              </li>
            ))}
          </ul>
          <div className="inner_sec_top">
            {panels.map((p, i) => (
              <div key={i} className={"pos_tab_dtl" + (i === t ? " active" : "")} style={{ display: i === t ? "flex" : "none" }}>
                <Panel p={p} eager />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
