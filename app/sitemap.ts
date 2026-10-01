import type { MetadataRoute } from "next";

const siteUrl = "https://challaneasy.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/check-challan",
    "/challan-settlement",
    "/delhi-challan-settlement",
    "/challan-lok-adalat",
    "/court-challan-settlement",
    "/pending-challan",
    "/challan-payment",
    "/guides",
    "/guides/how-to-settle-traffic-challan",
    "/guides/challan-settlement-lok-adalat",
    "/guides/unpaid-traffic-challan",
    "/guides/court-vs-pending-challan",
    "/guides/how-to-check-traffic-challan",
    "/guides/delhi-traffic-challan-guide",
    "/faq",
    "/contact",
    "/testimonials",
    "/privacy-policy",
    "/terms",
    "/disclaimer",
  ];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}