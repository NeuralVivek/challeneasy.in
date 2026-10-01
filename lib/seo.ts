import type { Metadata } from "next";

export const siteUrl = "https://challaneasy.in";

export const defaultMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Vehicle Challan Settlement & Assistance | ChallanEasy.in",
  description:
    "Get professional assistance for pending vehicle challans, traffic challan payment and challan settlement. Talk to ChallanEasy.in on WhatsApp for guidance.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Vehicle Challan Settlement & Assistance | ChallanEasy.in",
    description:
      "Get professional assistance for pending vehicle challans, traffic challan payment and challan settlement. Talk to ChallanEasy.in on WhatsApp for guidance.",
    url: siteUrl,
    type: "website",
    siteName: "ChallanEasy.in",
    images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: "ChallanEasy.in" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vehicle Challan Settlement & Assistance | ChallanEasy.in",
    description:
      "Get professional assistance for pending vehicle challans, traffic challan payment and challan settlement. Talk to ChallanEasy.in on WhatsApp for guidance.",
    images: ["/og-image.svg"],
  },
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ChallanEasy.in",
  url: siteUrl,
  slogan: "Vehicle Challan Assistance & Settlement Support",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["en-IN"],
    telephone: "+91-76783-59217",
  },
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ChallanEasy.in",
  url: siteUrl,
  description:
    "Independent private assistance platform for vehicle challan guidance, payment support, and settlement assistance.",
};

export const faqSchema = (faqList: ReadonlyArray<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqList.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export function topicMetadata({
  path,
  title,
  description,
  kind,
}: {
  path: string;
  title: string;
  description: string;
  kind: "service" | "guide";
}): Metadata {
  const url = `${siteUrl}${path}`;

  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url,
      type: kind === "guide" ? "article" : "website",
      siteName: "ChallanEasy.in",
      images: [{ url: "/og-image.svg", width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og-image.svg"],
    },
  };
}
