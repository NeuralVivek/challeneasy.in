import type { Metadata } from "next";
import { FAQ } from "@/components/FAQ";
import { PageHeader } from "@/components/PageHeader";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { faqSchema, topicMetadata } from "@/lib/seo";
import { faqItems } from "@/lib/site";

export const metadata: Metadata = topicMetadata({
  path: "/faq",
  title: "Vehicle Challan FAQ | ChallanEasy.in",
  description: "Common answers about checking, paying and understanding pending vehicle challans and settlement questions.",
  kind: "service",
});

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(faqItems)) }}
      />
      <Navbar />
      <PageHeader
        eyebrow="FAQ"
        title="Vehicle challan questions answered clearly"
        description="Find practical, easy-to-understand guidance on vehicle challan checks, payment steps, settlement questions, and how to move forward with confidence."
      />
      <FAQ />
      <Footer />
    </>
  );
}
