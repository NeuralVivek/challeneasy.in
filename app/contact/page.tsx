import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";
import { topicMetadata } from "@/lib/seo";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = topicMetadata({
  path: "/contact",
  title: "Contact ChallanEasy.in | WhatsApp Assistance",
  description: "Contact ChallanEasy for independent vehicle challan assistance and guidance through WhatsApp or phone.",
  kind: "service",
});

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Contact"
        title="Talk to our challan assistance team"
        description="If you have a pending vehicle challan question, contact us to understand the next steps and receive practical assistance."
      />

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900">Get in touch</h2>
          <p className="mt-3 text-slate-600">Speak directly with the team on WhatsApp for quick assistance.</p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WhatsAppButton label="Talk to an Expert on WhatsApp" variant="primary" className="px-5 py-3.5 text-sm" />
            <a href={siteConfig.phoneHref} className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm font-semibold text-slate-900 hover:bg-slate-100">
              Call +91 76783 59217
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
