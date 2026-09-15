import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { Footer } from "@/components/Footer";
import { Testimonials } from "@/components/Testimonials";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Customer Testimonials | ChallanEasy.in",
  description: "Read demo testimonials from vehicle owners who reached out for challan-related support and guidance.",
  alternates: { canonical: "/testimonials" },
  openGraph: {
    title: "Customer Testimonials | ChallanEasy.in",
    description: "Demo testimonials for vehicle challan guidance and support.",
    url: `${siteConfig.siteUrl}/testimonials`,
  },
};

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
