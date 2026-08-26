import Link from "next/link";
import { notFound } from "next/navigation";
import { industries, getIndustryBySlug } from "@/app/_lib/industries-data";

export function generateStaticParams() {
  return industries.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) return {};

  return {
    title: industry.navTitle,
    description: industry.summary,
  };
}

export default async function IndustryPage({ params }) {
  const { slug } = await params;
  const industry = getIndustryBySlug(slug);
  if (!industry) notFound();

  const others = industries.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-page py-20 lg:py-24">
          <p className="eyebrow">{industry.navTitle}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
            {industry.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            {industry.intro}
          </p>
          <Link href="/contact-us" className="btn-primary mt-8">
            Talk about your business
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            What we handle
          </h2>
          <ul className="mt-8 grid max-w-4xl gap-4 sm:grid-cols-2">
            {industry.points.map((point) => (
              <li
                key={point}
                className="rounded-xl border border-border bg-surface p-5 text-sm leading-relaxed text-text-light"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            Other industries we work in
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/industries/${item.slug}`}
                className="card transition-colors hover:border-primary"
              >
                <h3 className="text-base font-semibold text-heading">
                  {item.navTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {item.summary}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
