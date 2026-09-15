import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/lib/site";

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Our Services</p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Our Challan Assistance Services
        </h2>
      </div>

      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 text-slate-900">
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </div>
            <h3 className="mt-5 text-xl font-semibold text-slate-900">{service.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
            <Link href="/contact" className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-600">
              Get Assistance <ArrowRight className="h-4 w-4" />
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
