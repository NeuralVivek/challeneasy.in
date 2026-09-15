import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Disclaimer | ChallanEasy.in",
  description: "Disclaimer and legal notice for ChallanEasy.in vehicle challan assistance services.",
  alternates: { canonical: "/disclaimer" },
};

export default function DisclaimerPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Disclaimer"
        title="Important information"
        description="ChallanEasy.in is an independent private service and not an official government entity. All official challan services should be verified through the relevant government portals and authorities."
      />

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-slate-700">
          <p>ChallanEasy.in is an independent private service and assistance platform. It is not affiliated with, operated by, or authorized by any government department, traffic police authority, court, or transport department.</p>
          <p>Users should verify government challan records, payments, and associated decisions through official portals such as the relevant transport department and traffic authority resources.</p>
          <p>No guaranteed cancellation, reduction, or settlement outcome is promised. Final decisions rest with the competent authority or court, as applicable.</p>
          <p>Customer information is handled securely and used only for assistance-related requests. We recommend that users review our privacy policy and use official portals to validate the latest government-provided information.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
