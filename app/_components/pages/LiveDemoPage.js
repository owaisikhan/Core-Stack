"use client";

import { useState } from "react";
import { SectionHead } from "@/app/_components/sections/SectionHead";

const SLOTS = ["Mon 10:00", "Mon 14:00", "Tue 11:00", "Tue 16:00", "Wed 09:30", "Wed 13:00"];

export function LiveDemoPage() {
  const [pick, setPick] = useState(null);

  return (
    <>
      <div className="banner inner_banner">
        <div className="banner_bg">
          <div className="main_container">
            <div className="banner_inner">
              <div className="banner_dtl">
                <h1 className="banner_title">Personalized Live Demo</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section_padding">
        <div className="main_container">
          <SectionHead title="Schedule a Demo" />
          <p className="kit_note">
            The live site embeds a third-party scheduler here. This is a stand-in with the same shape.
          </p>
          <div className="kit_slots">
            {SLOTS.map((s) => (
              <button key={s} className={"kit_slot" + (pick === s ? " active" : "")} onClick={() => setPick(s)}>
                {s}
              </button>
            ))}
          </div>
          <div className="section_cta">
            <button className="primary_cta" disabled={!pick}>
              {pick ? "Confirm " + pick : "Pick a time"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
