import Link from "next/link";
import SectionHeading from "@/app/_components/ui/SectionHeading";
import SolutionTabs from "@/app/_components/home/SolutionTabs";
import FaqList from "@/app/_components/home/FaqList";
import { industries } from "@/app/_lib/industries-data";
import {
  capabilities,
  channels,
  platformFeatures,
  process,
} from "@/app/_lib/home-data";

export default function HomePage() {
  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-page grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <p className="eyebrow">Custom business software</p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
              Software built around how your business already works
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-text-light">
              Point of sale, online stores, mobile apps and offline desktop
              systems — with the money rules enforced in the database, so the
              numbers hold up when someone checks them against the cash drawer.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-us" className="btn-primary">
                Talk about your project
              </Link>
              <Link href="/solutions/point-of-sale" className="btn-outline">
                See what we build
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-surface p-8">
            <p className="text-sm font-semibold text-heading">
              What that means in practice
            </p>
            <ul className="mt-5 space-y-4">
              {capabilities.map((item) => (
                <li key={item.title}>
                  <p className="text-sm font-semibold text-heading">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-text-light">
                    {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="What we build"
            title="Six things we ship, and ship properly"
            description="Each one is a real deliverable with working software behind it, not a service page written to fill a menu."
          />
          <SolutionTabs />
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-page">
          <SectionHeading
            eyebrow="Industries"
            title="Businesses whose numbers have to balance"
            description="We work best where there is a daily routine and a figure someone checks by hand at the end of it."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <Link
                key={industry.slug}
                href={`/industries/${industry.slug}`}
                className="card transition-colors hover:border-primary"
              >
                <h3 className="text-lg font-semibold text-heading">
                  {industry.navTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {industry.summary}
                </p>
                <p className="mt-4 text-sm font-semibold text-primary">
                  Read more &rarr;
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Every channel"
            title="One system, wherever the work happens"
            description="The same records behind the counter, on the website, on a phone, and on a laptop with no connection at all."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {channels.map((channel) => (
              <div key={channel.title} className="card">
                <h3 className="text-base font-semibold text-heading">
                  {channel.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {channel.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-page">
          <SectionHeading
            eyebrow="How we work"
            title="Four steps, in this order, for a reason"
            description="Most of the cost of custom software comes from discovering the rules after the screens are built. We do it the other way round."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
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
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <SectionHeading
            eyebrow="Across every project"
            title="The things we do the same way every time"
            description="Conventions that came out of shipped work, not a checklist written for a website."
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {platformFeatures.map((feature) => (
              <div key={feature.title} className="card">
                <h3 className="text-base font-semibold text-heading">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {feature.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-page">
          <SectionHeading
            eyebrow="Questions"
            title="Frequently asked questions"
          />
          <FaqList />
        </div>
      </section>
    </>
  );
}
