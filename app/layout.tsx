import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const manrope = Manrope({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: "Vehicle Challan Settlement & Assistance | ChallanEasy.in",
  description:
    "Get professional assistance for pending vehicle challans, traffic challan payment and challan settlement. Talk to ChallanEasy.in on WhatsApp for guidance.",
  alternates: { canonical: "/" },
  verification: {
    google: "I3y_pgVZVY0veByZbvNufFl--o9wiCvuCdxB4fcRcVw",
  },
  openGraph: {
    title: "Vehicle Challan Settlement & Assistance | ChallanEasy.in",
    description:
      "Get professional assistance for pending vehicle challans, traffic challan payment and challan settlement. Talk to ChallanEasy.in on WhatsApp for guidance.",
    url: siteConfig.siteUrl,
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

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} h-full antialiased`}>
      <body className="min-h-full bg-white text-slate-900">{children}</body>
    </html>
  );
}
