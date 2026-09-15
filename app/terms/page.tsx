import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Terms & Conditions | ChallanEasy.in",
  description: "Terms and conditions for using ChallanEasy.in vehicle challan assistance services.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Terms & Conditions"
        title="Terms of service"
        description="These terms govern the use of the ChallanEasy.in support and information services for vehicle challan-related assistance."
      />

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-slate-700">
          <p>ChallanEasy.in provides private assistance and informational guidance for vehicle challan-related matters. We do not operate as a government department or official authority.</p>
          <p>Users are responsible for independently verifying official challan records, payments, and decisions through the relevant government portals and competent authorities.</p>
          <p>No guaranteed reduction, cancellation, or approval claim is made by the platform. Final challan decisions are made by the relevant competent authority or court, as applicable.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
