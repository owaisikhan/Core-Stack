import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container-page max-w-xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-3 text-3xl font-bold text-heading">
          That page does not exist
        </h1>
        <p className="mt-4 text-text-light">
          The link may be out of date, or the page may have moved.
        </p>
        <Link href="/" className="btn-primary mt-8">
          Back to the homepage
        </Link>
      </div>
    </section>
  );
}
