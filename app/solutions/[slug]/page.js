import Link from "next/link";
import { notFound } from "next/navigation";
import { solutions, getSolutionBySlug } from "@/app/_lib/solutions-data";

export function generateStaticParams() {
  return solutions.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) return {};

  return {
    title: solution.cardTitle,
    description: solution.intro,
  };
}

export default async function SolutionPage({ params }) {
  const { slug } = await params;
  const solution = getSolutionBySlug(slug);
  if (!solution) notFound();

  const others = solutions.filter((item) => item.slug !== slug);

  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-page py-20 lg:py-24">
          <p className="eyebrow">{solution.cardTitle}</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
            {solution.heroTitle}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            {solution.intro}
          </p>
          <Link href="/contact-us" className="btn-primary mt-8">
            Discuss your requirements
          </Link>
        </div>
      </section>

      <section className="section">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            What you get
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solution.highlights.map((highlight) => (
              <div key={highlight.title} className="card">
                <h3 className="text-base font-semibold text-heading">
                  {highlight.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {highlight.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-surface-alt">
        <div className="container-page">
          <h2 className="text-2xl font-bold text-heading sm:text-3xl">
            Other things we build
          </h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item) => (
              <Link
                key={item.slug}
                href={`/solutions/${item.slug}`}
                className="card transition-colors hover:border-primary"
              >
                <h3 className="text-base font-semibold text-heading">
                  {item.cardTitle}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-text-light">
                  {item.tagline}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
