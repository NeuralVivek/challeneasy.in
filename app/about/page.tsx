import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "About ChallanEasy.in | Vehicle Challan Assistance",
  description: "Learn about ChallanEasy.in and how we help vehicle owners understand pending challan issues and next steps.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About ChallanEasy.in | Vehicle Challan Assistance",
    description: "Independent private challan assistance platform for vehicle owners.",
    url: `${siteConfig.siteUrl}/about`,
  },
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="About"
        title="Independent challan assistance for vehicle owners"
        description="ChallanEasy.in is a private service platform that helps vehicle owners understand challan-related queries, payment timelines, and the next steps involved in a resolution process."
      />

      <main className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">Our positioning</h2>
            <p className="mt-4 text-slate-600 leading-7">
              ChallanEasy.in is not a government website or transport authority portal. We provide private assistance for understanding challan-related issues and explaining the practical next steps that may be relevant to a vehicle owner.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">What we do</h2>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Help explain pending vehicle challan questions</li>
              <li>• Clarify general payment and documentation steps</li>
              <li>• Support understanding of settlement and court-related matters</li>
              <li>• Guide customers toward the relevant official channels</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
