import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { topicMetadata } from "@/lib/seo";

export const metadata: Metadata = topicMetadata({
  path: "/testimonials",
  title: "Customer Testimonials | ChallanEasy.in",
  description: "Read demo testimonials about vehicle challan support; replace them with verified customer feedback before publishing.",
  kind: "service",
});

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <PageHeader
        eyebrow="Testimonials"
        title="What vehicle owners say"
        description="These are demo-style testimonials created for the site structure and can be replaced with verified customer feedback before publishing."
      />
      <Testimonials />
      <Footer />
    </>
  );
}
