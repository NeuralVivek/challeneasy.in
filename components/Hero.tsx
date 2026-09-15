import { ArrowRight, ShieldCheck, MessageSquareText } from "lucide-react";
import { LeadForm } from "@/components/LeadForm";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-16">
        <div className="flex flex-col justify-center">
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-slate-600">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
            Fast assistance • Transparent process • Dedicated support
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            Resolve Your Pending Vehicle Challan With Expert Assistance
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
            Get professional assistance for checking, understanding and resolving your pending vehicle challan.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="Talk to an Expert on WhatsApp" variant="primary" className="px-5 py-3.5 text-sm" />
            <a
              href="#lead-form"
              className="inline-flex items-center justify-center gap-2 rounded-xl border bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              Submit Vehicle Number <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-6 flex items-center gap-3 text-sm text-slate-600">
            <MessageSquareText className="h-4 w-4 text-orange-600" />
            Speak directly with our challan assistance team.
          </div>
        </div>

        <div className="lg:pt-6" id="lead-form">
          <LeadForm />
        </div>
      </div>
    </section>
  );
}
