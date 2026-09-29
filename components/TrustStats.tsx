import { businessStats } from "@/lib/site";

export function TrustStats() {
  return (
    <section className="border-y border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-6 sm:py-8 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold uppercase tracking-[0.14em] text-slate-600">
            Helping Vehicle Owners With Challan Assistance
          </p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:mt-8 sm:gap-4 lg:grid-cols-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl">{businessStats.casesAssisted}</div>
            <p className="mt-2 text-sm text-slate-600">Challan Requests Assisted</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl">{businessStats.settlements}</div>
            <p className="mt-2 text-sm text-slate-600">Settlement/Resolution Cases</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl">{businessStats.response}</div>
            <p className="mt-2 text-sm text-slate-600">Response</p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm sm:p-5">
            <div className="text-2xl font-bold text-slate-900 sm:text-3xl">Professional</div>
            <p className="mt-2 text-sm text-slate-600">Assistance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
