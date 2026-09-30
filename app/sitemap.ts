import type { MetadataRoute } from "next";

const siteUrl = "https://challaneasy.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/services", "/check-challan", "/challan-settlement", "/faq", "/contact", "/testimonials", "/privacy-policy", "/terms", "/disclaimer"];

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}