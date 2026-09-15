import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Vehicle Challan Services | ChallanEasy.in",
  description: "Get support for pending challan assistance, payment guidance, settlement understanding, and court challan-related questions.",
  alternates: { canonical: "/services" },
  openGraph: {
    title: "Vehicle Challan Services | ChallanEasy.in",
    description: "Get support for pending challan assistance, payment guidance, and settlement-related help.",
    url: `${siteConfig.siteUrl}/services`,
  },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Professional challan guidance for vehicle owners"
        description="We help clarify challan-related questions, understand possible next steps, and guide vehicle owners through the relevant resolution process with clear communication."
      />
      <Services />
    </>
  );
}
