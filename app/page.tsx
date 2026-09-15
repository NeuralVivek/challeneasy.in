import { Hero } from "@/components/Hero";
import { TrustStats } from "@/components/TrustStats";
import { Services } from "@/components/Services";
import { HowItWorks } from "@/components/HowItWorks";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { faqSchema, organizationSchema, websiteSchema } from "@/lib/seo";
import { faqItems } from "@/lib/site";

export default function HomePage() {
  const faqJsonLd = faqSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify([organizationSchema, websiteSchema, faqJsonLd]) }}
      />

      <div className="min-h-screen bg-white text-slate-900">
        <Navbar />
        <Hero />
        <TrustStats />
        <Services />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <FinalCTA />
        <Footer />

        <div className="fixed bottom-4 right-4 z-40 md:hidden">
          <WhatsAppButton label="WhatsApp Now" variant="primary" className="h-14 w-14 rounded-full p-0 text-base shadow-lg" />
        </div>
      </div>
    </>
  );
}
