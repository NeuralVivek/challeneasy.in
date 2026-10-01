import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Traffic Challan Guides | ChallanEasy.in",
  description: "Practical guides to checking, paying and understanding pending, court, Virtual Court and Lok Adalat traffic challans.",
  alternates: { canonical: "/guides" },
  openGraph: { title: "Traffic Challan Guides | ChallanEasy.in", description: "Practical guides to understanding traffic challan options.", url: `${siteConfig.siteUrl}/guides`, type: "website", siteName: siteConfig.name, images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "Traffic challan guides" }] },
  twitter: { card: "summary_large_image", title: "Traffic Challan Guides | ChallanEasy.in", description: "Practical guides to understanding traffic challan options.", images: ["/og-image.svg"] },
};

const guides = [
  ["How to Settle a Traffic Challan in India", "/guides/how-to-settle-traffic-challan", "Check status, identify the route and verify the final record."],
  ["How Challan Settlement Through Lok Adalat Works", "/guides/challan-settlement-lok-adalat", "Understand eligibility, notices and process limits."],
  ["What Happens If You Do Not Pay a Traffic Challan?", "/guides/unpaid-traffic-challan", "Review unpaid records and practical next steps."],
  ["Court Challan vs Pending Challan", "/guides/court-vs-pending-challan", "Compare common statuses and instructions."],
  ["How to Check Traffic Challan Status Online", "/guides/how-to-check-traffic-challan", "Use official resources and read the record safely."],
  ["Delhi Traffic Challan: Check, Pay and Understand Options", "/guides/delhi-traffic-challan-guide", "A Delhi-specific guide to common challan routes."],
] as const;

export default function GuidesPage() {
  return <div className="min-h-screen bg-white text-slate-900"><Navbar /><main><section className="border-b border-slate-200 bg-slate-50"><div className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"><p className="text-sm font-semibold uppercase tracking-[0.14em] text-orange-600">Independent information</p><h1 className="mt-3 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">Traffic Challan Guides</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">Clear explanations for checking, paying and understanding pending, court, Virtual Court and Lok Adalat challan processes. Verify current details through official sources.</p></div></section><div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14 lg:px-8"><div className="grid gap-5 md:grid-cols-2">{guides.map(([title, href, description]) => <article key={href} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><h2 className="text-xl font-bold text-slate-900">{title}</h2><p className="mt-3 text-sm leading-7 text-slate-600">{description}</p><Link href={href} className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-orange-700">Read guide <ArrowRight className="h-4 w-4" /></Link></article>)}</div></div></main><Footer /></div>;
}