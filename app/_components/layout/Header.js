"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { nav } from "@/app/_lib/nav";
import { siteConfig } from "@/app/_lib/siteConfig";
import { CaretIcon, CloseIcon, SubArrow } from "@/app/_components/ui/icons";
import { MegaDropdown, StandardDropdown } from "@/app/_components/layout/MegaDropdown";

export function Header() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);
  const [drawer, setDrawer] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // Mobile drawer accordion state — the source prototype hardcoded every
  // submenu as permanently "open" (a non-interactive stub), which doesn't
  // match the real site's collapsed-by-default, click-to-expand drawer.
  const [drawerTop, setDrawerTop] = useState(null);
  const [drawerCategory, setDrawerCategory] = useState(null);
  const [drawerIndustry, setDrawerIndustry] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setDrawer(false);
  }, [pathname]);

  useEffect(() => {
    if (!drawer) {
      setDrawerTop(null);
      setDrawerCategory(null);
      setDrawerIndustry(null);
    }
  }, [drawer]);

  return (
    <header>
      <div className="header">
        <div className="main_container">
          <div className={"header_inner" + (scrolled ? " scrolled" : "")}>
            <div className="logo_block">
              <Link href="/" className="logo">
                <img src={siteConfig.logo} alt={siteConfig.name} />
              </Link>
            </div>
            <nav className="navigation">
              <div className="nav">
                <ul className="nav_bar">
                  <li
                    className="nav_list"
                    style={{ position: "relative" }}
                    onMouseEnter={() => setOpenMenu("bt")}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <div className="nav_link_wrapper">
                      <span className="nav_link" style={{ cursor: "default" }}>
                        Business Type
                      </span>
                      <div className="drop_icon">
                        <CaretIcon />
                      </div>
                    </div>
                    <MegaDropdown businessTypes={nav.businessTypes} open={openMenu === "bt"} />
                  </li>
                  <li
                    className="nav_list"
                    style={{ position: "relative" }}
                    onMouseEnter={() => setOpenMenu("sol")}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <div className="nav_link_wrapper">
                      <span className="nav_link" style={{ cursor: "default" }}>
                        Solutions
                      </span>
                      <div className="drop_icon">
                        <CaretIcon />
                      </div>
                    </div>
                    <StandardDropdown items={nav.solutions} open={openMenu === "sol"} />
                  </li>
                  <li className="nav_list" style={{ position: "relative" }}>
                    <div className="nav_link_wrapper">
                      <Link href="/livedemo" className={"nav_link" + (pathname === "/livedemo" ? " active" : "")}>
                        Live Demo
                      </Link>
                    </div>
                  </li>
                  <li
                    className="nav_list"
                    style={{ position: "relative" }}
                    onMouseEnter={() => setOpenMenu("res")}
                    onMouseLeave={() => setOpenMenu(null)}
                  >
                    <div className="nav_link_wrapper">
                      <span className="nav_link" style={{ cursor: "default" }}>
                        Resources
                      </span>
                      <div className="drop_icon">
                        <CaretIcon />
                      </div>
                    </div>
                    <StandardDropdown items={nav.resources} open={openMenu === "res"} />
                  </li>
                </ul>
              </div>
            </nav>
            <div className="header_cta">
              <Link href="/contact-us" className="primary_cta header_btn">
                Get Started
              </Link>
            </div>
            <button
              className={"hamburger_menu" + (drawer ? " active" : "")}
              aria-label="Toggle navigation menu"
              onClick={() => setDrawer(true)}
            >
              <span className="hamburger_line" />
              <span className="hamburger_line" />
              <span className="hamburger_line" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={"mobile_drawer_backdrop" + (drawer ? " open" : "")}
        style={{ display: drawer ? "block" : "none" }}
        onClick={() => setDrawer(false)}
      />
      <div className={"mobile_navigation_drawer" + (drawer ? " open" : "")}>
        <div className="drawer_header">
          <Link href="/" className="drawer_logo">
            <img src={siteConfig.logo} alt={siteConfig.name} />
          </Link>
          <button className="drawer_close_btn" aria-label="Close menu" onClick={() => setDrawer(false)}>
            <CloseIcon />
          </button>
        </div>
        <div className="drawer_inner">
          <ul className="mobile_nav_bar">
            <li className="mobile_nav_list">
              <div className="mobile_nav_link_wrapper" onClick={() => setDrawerTop(drawerTop === "bt" ? null : "bt")}>
                <span className="mobile_nav_link">Business Type</span>
                <span className="mobile_drop_icon">
                  <SubArrow />
                </span>
              </div>
              <div className={"mobile_submenu_collapse" + (drawerTop === "bt" ? " open" : "")}>
                <ul className="mobile_categories_list">
                  {nav.businessTypes.map((c) => (
                    <li key={c.name} className="mobile_category_item">
                      <div
                        className="mobile_category_link_wrapper"
                        onClick={() => {
                          setDrawerCategory(drawerCategory === c.name ? null : c.name);
                          setDrawerIndustry(null);
                        }}
                      >
                        <span>{c.name}</span>
                        <SubArrow className="sub_arrow" />
                      </div>
                      <div className={"mobile_submenu_collapse_lvl2" + (drawerCategory === c.name ? " open" : "")}>
                        <ul className="mobile_industries_list">
                          {c.industries.map((n) => (
                            <li key={n.name} className="mobile_industry_item">
                              <div
                                className="mobile_industry_link_wrapper"
                                onClick={() => setDrawerIndustry(drawerIndustry === n.name ? null : n.name)}
                              >
                                <span>{n.name}</span>
                                <SubArrow className="sub_arrow_lvl3" />
                              </div>
                              <div
                                className={"mobile_submenu_collapse_lvl3" + (drawerIndustry === n.name ? " open" : "")}
                              >
                                <ul className="mobile_subchildren_list">
                                  {n.children.map((k) => (
                                    <li key={k.href} className="mobile_subchild_item">
                                      <Link href={k.href}>{k.label}</Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="mobile_nav_list">
              <div className="mobile_nav_link_wrapper" onClick={() => setDrawerTop(drawerTop === "sol" ? null : "sol")}>
                <span className="mobile_nav_link">Solutions</span>
              </div>
              <div className={"mobile_submenu_collapse" + (drawerTop === "sol" ? " open" : "")}>
                <ul className="mobile_standard_dropdown_list">
                  {nav.solutions.map((i) => (
                    <li key={i.href} className="mobile_standard_dropdown_item">
                      <Link href={i.href}>{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            <li className="mobile_nav_list">
              <Link href="/livedemo" className="mobile_nav_link_solo">
                Live Demo
              </Link>
            </li>
            <li className="mobile_nav_list">
              <div className="mobile_nav_link_wrapper" onClick={() => setDrawerTop(drawerTop === "res" ? null : "res")}>
                <span className="mobile_nav_link">Resources</span>
              </div>
              <div className={"mobile_submenu_collapse" + (drawerTop === "res" ? " open" : "")}>
                <ul className="mobile_standard_dropdown_list">
                  {nav.resources.map((i) => (
                    <li key={i.href} className="mobile_standard_dropdown_item">
                      <Link href={i.href}>{i.label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          </ul>
          <div className="mobile_drawer_cta">
            <Link href="/contact-us" className="primary_cta header_btn">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
