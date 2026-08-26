import Link from "next/link";
import { siteConfig } from "@/app/_lib/siteConfig";
import { solutionLinks, industryLinks, resourceLinks } from "@/app/_lib/nav-data";

const columns = [
  { title: "Solutions", links: solutionLinks },
  { title: "Industries", links: industryLinks },
  { title: "Company", links: resourceLinks },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface-alt">
      <div className="container-page py-14">
        <div className="rounded-3xl bg-surface-dark px-8 py-12 text-center sm:px-12">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/60">
            Get in touch
          </p>
          <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl">
            Tell us what your business runs on today
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/70">
            Send over the spreadsheet, the register, or the system you are
            replacing. We will tell you honestly whether we are the right fit.
          </p>
          <Link href="/contact-us" className="btn-primary mt-8 bg-white text-heading hover:bg-white/90">
            Start a conversation
          </Link>
        </div>
      </div>

      <div className="container-page grid gap-10 pb-14 sm:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <p className="text-lg font-bold text-heading">{siteConfig.name}</p>
          <p className="mt-3 max-w-sm text-sm text-text-light">
            {siteConfig.tagline}
          </p>
        </div>

        {columns.map((column) => (
          <div key={column.title}>
            <p className="text-sm font-semibold text-heading">{column.title}</p>
            <ul className="mt-4 space-y-2.5">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-light hover:text-primary"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col gap-2 py-6 text-sm text-text-light sm:flex-row sm:items-center sm:justify-between">
          <p>
            &copy; {new Date().getFullYear()} {siteConfig.fullName}. All rights
            reserved.
          </p>
          <a
            href={`mailto:${siteConfig.contactEmail}`}
            className="hover:text-primary"
          >
            {siteConfig.contactEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
