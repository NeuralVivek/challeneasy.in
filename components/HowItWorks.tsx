import { ArrowRight, CheckCircle2 } from "lucide-react";
import { howItWorks } from "@/lib/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-slate-50 py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">How It Works</p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How challan assistance works
          </h2>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:gap-5 md:grid-cols-2 xl:grid-cols-4">
          {howItWorks.map((step, index) => (
            <div key={step} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
                  {index + 1}
                </span>
                {index < howItWorks.length - 1 ? <ArrowRight className="hidden h-4 w-4 text-slate-400 sm:block" /> : null}
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-900">{step}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                {index === 0 && "Share your vehicle and contact details so our team can review the challan matter clearly."}
                {index === 1 && "Our team reviews your request and looks at the relevant details needed for guidance."}
                {index === 2 && "Discuss the issue through WhatsApp or a direct support conversation for clarity."}
                {index === 3 && "Receive guidance on the next step, from understanding the challan to next action planning."}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <WhatsAppButton label="Start My Request" variant="primary" className="w-full px-5 py-3.5 text-sm sm:w-auto" />
          <div className="inline-flex items-center gap-2 text-sm text-slate-600">
            <CheckCircle2 className="h-4 w-4 text-emerald-600" />
            Secure, private assistance
          </div>
        </div>
      </div>
    </section>
  );
}
