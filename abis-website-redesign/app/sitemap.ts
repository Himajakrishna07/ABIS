import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://akshayaitsolutions.com";
  const lastModified = new Date();

  const routes = [
    "",
    "/who-we-are",
    "/services",
    "/services/permanent-recruitment",
    "/services/contract-staffing",
    "/services/executive-search-rpo",
    "/services/corporate-training",
    "/services/hr-services",
    "/services/application-development",
    "/business-practices",
    "/life-at-abis",
    "/careers",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.8 : 0.7,
  }));
}
