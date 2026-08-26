"use client";

import Link from "next/link";
import { useState } from "react";
import { siteConfig } from "@/app/_lib/siteConfig";
import { solutionLinks, industryLinks, resourceLinks } from "@/app/_lib/nav-data";

const menus = [
  { label: "Solutions", links: solutionLinks },
  { label: "Industries", links: industryLinks },
  { label: "Company", links: resourceLinks },
];

export default function Header() {
  const [openMenu, setOpenMenu] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  function closeAll() {
    setOpenMenu(null);
    setDrawerOpen(false);
  }

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
      <div className="container-page flex h-18 items-center justify-between gap-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-heading"
          onClick={closeAll}
        >
          {siteConfig.name}
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {menus.map((menu) => (
            <div
              key={menu.label}
              className="relative"
              onMouseEnter={() => setOpenMenu(menu.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium text-text hover:text-primary"
                aria-expanded={openMenu === menu.label}
                onClick={() =>
                  setOpenMenu(openMenu === menu.label ? null : menu.label)
                }
              >
                {menu.label}
                <span aria-hidden className="text-xs text-text-light">
                  &#9662;
                </span>
              </button>

              {openMenu === menu.label ? (
                <div className="absolute left-0 top-full w-64 pt-2">
                  <ul className="rounded-xl border border-border bg-surface p-2 shadow-lg">
                    {menu.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="block rounded-lg px-3 py-2 text-sm text-text hover:bg-surface-alt hover:text-primary"
                          onClick={closeAll}
                        >
                          {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact-us" className="btn-primary hidden sm:inline-flex">
            Get in touch
          </Link>
          <button
            type="button"
            className="rounded-lg border border-border px-3 py-2 text-sm font-medium lg:hidden"
            aria-expanded={drawerOpen}
            aria-label="Toggle navigation menu"
            onClick={() => setDrawerOpen((open) => !open)}
          >
            Menu
          </button>
        </div>
      </div>

      {drawerOpen ? (
        <div className="border-t border-border bg-surface lg:hidden">
          <div className="container-page space-y-6 py-6">
            {menus.map((menu) => (
              <div key={menu.label}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-text-light">
                  {menu.label}
                </p>
                <ul className="space-y-1">
                  {menu.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="block rounded-lg py-2 text-sm text-text hover:text-primary"
                        onClick={closeAll}
                      >
                        {link.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <Link
              href="/contact-us"
              className="btn-primary w-full"
              onClick={closeAll}
            >
              Get in touch
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
