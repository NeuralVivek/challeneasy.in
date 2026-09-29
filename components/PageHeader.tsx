import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function PageHeader({
  title,
  description,
  eyebrow,
}: {
  title: string;
  description: string;
  eyebrow?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-5xl px-4 py-9 sm:px-6 sm:py-12 lg:px-8">
        <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-slate-600 hover:text-slate-900">
          <ArrowLeft className="h-4 w-4" />
          Back to home
        </Link>

        <div className="mt-6 max-w-3xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">{eyebrow}</p>
          ) : null}
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
          <p className="mt-4 text-lg leading-8 text-slate-600">{description}</p>
        </div>
      </div>
    </section>
  );
}
