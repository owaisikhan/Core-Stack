"use client";

import Link from "next/link";
import { useState } from "react";
import { solutions } from "@/app/_lib/solutions-data";

export default function SolutionTabs() {
  const [activeSlug, setActiveSlug] = useState(solutions[0].slug);
  const active = solutions.find((item) => item.slug === activeSlug);

  return (
    <div className="mt-12">
      <div className="flex flex-wrap justify-center gap-2" role="tablist">
        {solutions.map((item) => {
          const isActive = item.slug === activeSlug;
          return (
            <button
              key={item.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveSlug(item.slug)}
              className={
                isActive
                  ? "rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-white"
                  : "rounded-full border border-border bg-surface px-5 py-2.5 text-sm font-semibold text-text hover:border-primary hover:text-primary"
              }
            >
              {item.cardTitle}
            </button>
          );
        })}
      </div>

      <div className="mt-10 rounded-3xl border border-border bg-surface-alt p-8 sm:p-10">
        <div className="max-w-3xl">
          <h3 className="text-2xl font-bold text-heading sm:text-3xl">
            {active.heroTitle}
          </h3>
          <p className="mt-3 text-base leading-relaxed text-text-light">
            {active.intro}
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {active.highlights.map((highlight) => (
            <div key={highlight.title} className="card">
              <h4 className="text-base font-semibold text-heading">
                {highlight.title}
              </h4>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                {highlight.text}
              </p>
            </div>
          ))}
        </div>

        <Link
          href={`/solutions/${active.slug}`}
          className="btn-outline mt-8"
        >
          More on {active.cardTitle}
        </Link>
      </div>
    </div>
  );
}
