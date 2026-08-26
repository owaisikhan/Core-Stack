import { siteConfig } from "@/app/_lib/siteConfig";
import { solutions } from "@/app/_lib/solutions-data";

export const metadata = {
  title: "Contact Us",
  description:
    "Tell us what your business runs on today and we will tell you honestly whether we are the right fit.",
};

export default function ContactPage() {
  return (
    <>
      <section className="border-b border-border bg-surface-alt">
        <div className="container-page py-20 lg:py-24">
          <p className="eyebrow">Contact</p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight text-heading sm:text-5xl">
            Tell us what you are trying to fix
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-text-light">
            The most useful first message describes the process you run today
            and what goes wrong with it. Screenshots of the spreadsheet are
            better than a specification.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container-page grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          <form className="card space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold text-heading"
              >
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-1.5 block text-sm font-semibold text-heading"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="business"
                className="mb-1.5 block text-sm font-semibold text-heading"
              >
                Business name
              </label>
              <input
                id="business"
                name="business"
                type="text"
                className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base focus:border-primary focus:outline-none"
              />
            </div>

            <div>
              <label
                htmlFor="interest"
                className="mb-1.5 block text-sm font-semibold text-heading"
              >
                What are you after?
              </label>
              <select
                id="interest"
                name="interest"
                defaultValue=""
                className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  Select one
                </option>
                {solutions.map((solution) => (
                  <option key={solution.slug} value={solution.slug}>
                    {solution.cardTitle}
                  </option>
                ))}
                <option value="not-sure">Not sure yet</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-heading"
              >
                What does your business run on today?
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="w-full rounded-lg border border-border bg-surface px-3 py-2.5 text-base focus:border-primary focus:outline-none"
              />
            </div>

            <button type="submit" className="btn-primary w-full">
              Send message
            </button>

            <p className="text-xs text-text-light">
              This form is not wired up yet. Connect it to your email service or
              a Server Action before going live.
            </p>
          </form>

          <aside className="space-y-6">
            <div className="card">
              <h2 className="text-base font-semibold text-heading">
                Reach us directly
              </h2>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-text-light">Email</dt>
                  <dd>
                    <a
                      href={`mailto:${siteConfig.contactEmail}`}
                      className="font-medium text-primary"
                    >
                      {siteConfig.contactEmail}
                    </a>
                  </dd>
                </div>
                <div>
                  <dt className="text-text-light">Phone</dt>
                  <dd className="font-medium text-heading">
                    {siteConfig.supportPhone}
                  </dd>
                </div>
                <div>
                  <dt className="text-text-light">Address</dt>
                  <dd className="font-medium text-heading">
                    {siteConfig.address}
                  </dd>
                </div>
              </dl>
            </div>

            <div className="card bg-surface-alt">
              <h2 className="text-base font-semibold text-heading">
                Before you write
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-text-light">
                If you already use a spreadsheet, a register or another system,
                a copy of it tells us more in five minutes than a call does in
                an hour.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
