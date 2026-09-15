import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy | ChallanEasy.in",
  description: "Privacy policy for ChallanEasy.in vehicle challan assistance requests and customer information handling.",
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Privacy Policy"
        title="How we handle your information"
        description="ChallanEasy.in respects the privacy of vehicle owners and only uses submitted information for assistance-related requests."
      />

      <main className="mx-auto max-w-4xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="space-y-6 text-slate-700">
          <p>We collect only the information needed to assist with a challan-related request, such as vehicle number, mobile number, and the relevant challan details provided by the user.</p>
          <p>Submitted vehicle and customer information is not displayed publicly and is kept private. It is used only to understand the request and provide assistance-related support.</p>
          <p>We recommend that users verify any payments, challan records, or decisions directly through relevant official government portals and authorities.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
