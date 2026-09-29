import { testimonials } from "@/lib/site";

export function Testimonials() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Customer Feedback</p>
        <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          What Vehicle Owners Say
        </h2>
      </div>

      <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
        {testimonials.map((item) => (
          <article key={`${item.author}-${item.location}`} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
            <div className="mb-4 text-orange-500">★★★★★</div>
            <p className="text-base leading-7 text-slate-700">“{item.quote}”</p>
            <div className="mt-5 border-t border-slate-200 pt-4">
              <p className="font-semibold text-slate-900">{item.author}</p>
              <p className="text-sm text-slate-500">{item.location}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
