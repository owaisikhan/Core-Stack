"use client";

import { useState } from "react";
import Link from "next/link";
import { SubArrow, SubmenuArrow } from "@/app/_components/ui/icons";

export function MegaDropdown({ businessTypes, open }) {
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [industryIndex, setIndustryIndex] = useState(0);
  const category = businessTypes[categoryIndex] || businessTypes[0];
  const industry = (category.industries || [])[industryIndex] || category.industries[0];

  return (
    <div className={"mega-dropdown" + (open ? " open" : "")} style={{ display: open ? "flex" : "none" }}>
      <div className="dropdown-left-panel">
        <ul className="category-list">
          {businessTypes.map((c, i) => (
            <li
              key={c.name}
              className={"category-item" + (i === categoryIndex ? " active" : "")}
              onMouseEnter={() => {
                setCategoryIndex(i);
                setIndustryIndex(0);
              }}
            >
              <span>{c.name}</span>
              <SubArrow />
            </li>
          ))}
        </ul>
      </div>
      <div className="dropdown-center-panel">
        <div className="industries-grid">
          {category.industries.map((n, i) => (
            <a
              key={n.name}
              className={"industry-card" + (i === industryIndex ? " active" : "")}
              href="#"
              onClick={(e) => e.preventDefault()}
              onMouseEnter={() => setIndustryIndex(i)}
            >
              <span className="industry-name">{n.name}</span>
              <SubmenuArrow />
            </a>
          ))}
        </div>
      </div>
      <div className="dropdown-right-panel">
        <div className="sub-categories-header">Sub-categories</div>
        <ul className="sub-categories-list">
          {(industry.children || []).map((k) => (
            <li key={k.href} className="sub-category-item">
              <Link href={k.href}>{k.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function StandardDropdown({ items, open }) {
  return (
    <div className={"standard-dropdown" + (open ? " open" : "")} style={{ display: open ? "block" : "none" }}>
      <ul className="std-dropdown-list">
        {items.map((i) => (
          <li key={i.href} className="std-dropdown-item">
            <Link href={i.href}>{i.label}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
