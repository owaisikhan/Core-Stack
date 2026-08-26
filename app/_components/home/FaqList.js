"use client";

import { useState } from "react";
import { faqs } from "@/app/_lib/home-data";

export default function FaqList() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="mx-auto mt-10 max-w-3xl divide-y divide-border rounded-2xl border border-border bg-surface">
      {faqs.map((faq, index) => {
        const isOpen = index === openIndex;
        return (
          <div key={faq.q}>
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="text-base font-semibold text-heading">
                {faq.q}
              </span>
              <span aria-hidden className="text-xl text-text-light">
                {isOpen ? "−" : "+"}
              </span>
            </button>
            {isOpen ? (
              <p className="px-6 pb-6 text-sm leading-relaxed text-text-light">
                {faq.a}
              </p>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
