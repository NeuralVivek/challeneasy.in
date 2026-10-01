import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Services } from "@/components/Services";
import { topicMetadata } from "@/lib/seo";

export const metadata: Metadata = topicMetadata({
  path: "/services",
  title: "Vehicle Challan Services | ChallanEasy.in",
  description: "Get support for pending challans, payment guidance, settlement understanding and court challan-related questions.",
  kind: "service",
});

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
