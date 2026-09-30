import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";
import { Footer } from "@/components/Footer";
import { LeadForm } from "@/components/LeadForm";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

const officialChallanUrl = "https://echallan.parivahan.gov.in/";
const pageUrl = `${siteConfig.siteUrl}/check-challan`;

export const metadata: Metadata = {
  title: "Check Challan Status Online | Challan Easy",
  description:
    "Check your traffic challan status through the official e-Challan portal, then get independent help understanding pending challan options.",
  alternates: { canonical: "/check-challan" },
  openGraph: {
    title: "Check Challan Status Online | Challan Easy",
    description:
      "Check your traffic challan status through the official e-Challan portal, then get independent help understanding pending challan options.",
    url: pageUrl,
    type: "website",
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary",
    title: "Check Challan Status Online | Challan Easy",
    description:
      "Check your traffic challan status through the official e-Challan portal, then get help understanding pending challan options.",
  },
};

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Check Challan Status Online | Challan Easy",
    description: metadata.description,
    url: pageUrl,
    isPartOf: { "@type": "WebSite", name: siteConfig.name, url: siteConfig.siteUrl },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.siteUrl },
      { "@type": "ListItem", position: 2, name: "Check Challan", item: pageUrl },
    ],
  },
];

export default function CheckChallanPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <Navbar />

      <main>
        <section className="border-b border-slate-200 bg-slate-50">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
            <div className="flex flex-col justify-center">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-orange-700">
                <ShieldCheck className="h-4 w-4" />
                Verify before you act
              </div>
              <h1 className="mt-5 max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
                Check Your Traffic Challan Status
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Use the official e-Challan system to check a challan by vehicle number or challan details. Once you know the current status, Challan Easy can help you understand the practical next step for a pending or court-related matter.
              </p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <a href={officialChallanUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-orange-500">
                  Open Official e-Challan Portal <ExternalLink className="h-4 w-4" />
                </a>
                <Link href="/challan-settlement" className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3.5 text-sm font-semibold text-slate-900 transition hover:bg-slate-100">
                  Need settlement help <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
              <p className="mt-5 text-sm leading-6 text-slate-500">Challan Easy is not the government e-Challan portal and cannot directly access or change government records.</p>
            </div>

            <div id="assistance" className="scroll-mt-24">
              <LeadForm compact />
              <p className="mt-3 text-center text-xs leading-5 text-slate-500">This is an assistance request, not a live challan-status lookup.</p>
            </div>
          </div>
        </section>

        <nav aria-label="Breadcrumb" className="mx-auto max-w-7xl px-4 py-4 text-sm text-slate-500 sm:px-6 lg:px-8">
          <Link href="/" className="hover:text-slate-900">Home</Link><span className="mx-2">/</span><span className="text-slate-700">Check Challan</span>
        </nav>

        <section className="py-14 sm:py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">A clear starting point</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">How to Check an E-Challan</h2>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {[
                ["1. Open the official portal", "Use the official e-Challan website rather than an unverified third-party payment page."],
                ["2. Enter the requested details", "Use the vehicle number, challan number or driving licence details requested by the portal."],
                ["3. Review the current record", "Check the offence, date, amount, status and any court or virtual-court instruction shown."],
              ].map(([title, text]) => (
                <article key={title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-slate-50 py-14 sm:py-20">
          <div className="mx-auto grid max-w-5xl gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Read the status carefully</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">What to Do After a Pending Challan Check</h2>
              <p className="mt-5 leading-7 text-slate-600">A pending record does not by itself establish that a particular settlement route is available. The next step can depend on the issuing authority, offence, payment instructions, court status and applicable rules.</p>
              <Link href="/challan-settlement" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-orange-700 hover:text-orange-600">Understand challan settlement options <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900">Keep these details ready</h2>
              <ul className="mt-5 space-y-4 text-sm leading-6 text-slate-600">
                {["Vehicle registration number", "Challan number and date", "Current status and amount shown", "Any court or virtual-court notice", "Payment receipt, if already paid"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />{item}</li>)}
              </ul>
              <p className="mt-5 border-t border-slate-200 pt-5 text-xs leading-5 text-slate-500">Do not share passwords, PINs or one-time passwords. Use the official portal for payments and receipts.</p>
            </div>
          </div>
        </section>

        <section className="py-14 sm:py-20"><div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8"><h2 className="text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">Need help resolving your pending challan?</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-600">After checking the official record, share the basic details with Challan Easy for independent assistance understanding payment, court or other available options.</p><Link href="/challan-settlement#challan-assistance" className="mt-7 inline-flex items-center gap-2 rounded-xl bg-orange-600 px-5 py-3.5 text-sm font-semibold text-white hover:bg-orange-500">Get settlement assistance <ArrowRight className="h-4 w-4" /></Link><p className="mx-auto mt-6 max-w-3xl text-xs leading-6 text-slate-500">Information is general guidance. Eligibility, procedure, amount and outcome depend on the challan, applicable rules and relevant authority or court. Challan Easy is an independent private service.</p></div></section>
      </main>

      <Footer />
    </div>
  );
}
