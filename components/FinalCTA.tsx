import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/lib/site";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export function FinalCTA() {
  return (
    <section className="bg-slate-900 py-12 text-white sm:py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-7 rounded-3xl border border-slate-700 bg-slate-800/80 p-5 sm:p-8 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-300">
              Need help now?
            </p>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
              Don&apos;t Let a Pending Challan Become a Bigger Problem
            </h2>
            <p className="mt-3 max-w-xl text-slate-300">
              Get assistance from the ChallanEasy team and understand the next steps before the issue grows further.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <WhatsAppButton label="WhatsApp Now" variant="primary" className="w-full px-5 py-3.5 text-sm sm:w-auto" />
            <Link
              href="/#lead-form"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-500 bg-slate-700 px-5 py-3.5 text-sm font-semibold text-white hover:bg-slate-600 sm:w-auto"
            >
              Submit Your Vehicle Number <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mt-6 text-center text-sm text-slate-300 md:text-left">
          WhatsApp: <a href={siteConfig.whatsappLink} className="font-semibold text-white">{siteConfig.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}
