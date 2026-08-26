import Link from "next/link";
import { siteConfig } from "@/app/_lib/siteConfig";
import { process } from "@/app/_lib/home-data";

export const metadata = {
  title: "About Us",
  description:
    "How we build software, what we insist on, and the kind of business we work best with.",
};

const principles = [
  {
    title: "The rules belong in the database",
    text: "A check written in the interface is a courtesy. A second client, a direct query or a refactor next year can walk straight past it. Constraints and triggers in Postgres cannot be walked past, so that is where the money rules go.",
  },
  {
    title: "A total is computed in one place",
    text: "Two screens adding up the same rows will eventually disagree, usually because one of them quietly capped its query. We page what is displayed and never the arithmetic.",
  },
  {
    title: "Match what people already use",
    text: "Before designing anything we ask for the spreadsheet or register being replaced. Keeping the same column order and the same words is what lets a team stop using the old thing on day one.",
  },
  {
    title: "Look at the screen with real data",
    text: "Long names, seven-figure sums, and a day with nothing in it. Placeholder text hides exactly the bugs worth finding, and a passing automated check is perfectly compatible with an unreadable screen.",
  },
  {
    title: "Write it down",
    text: "Every project ships with documentation covering the business rules, the conventions and the build process — so the work can be picked up by someone else, including you.",
  },
  {
    title: "Say no when it is not a fit",
    text: "Some problems are better solved by software that already exists. We would rather tell you that early than bill for finding out slowly.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-page py-20 lg:py-24">
          <p className="eyebrow">About {siteConfig.name}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
            We build the system a business checks its money against
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            Most of our work is for businesses where someone counts the cash at
            the end of the day and expects the software to agree. That
            constraint shapes everything about how we build.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            What we insist on
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {principles.map((item) => (
              <div key={item.title} className="card">
                <h3 className="text-base font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            How a project runs
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {process.map((item) => (
              <div key={item.step} className="card">
                <p className="text-sm font-bold text-primary">{item.step}</p>
                <h3 className="mt-3 text-base font-semibold text-heading">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <Link href="/contact-us" className="btn-primary mt-10">
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
